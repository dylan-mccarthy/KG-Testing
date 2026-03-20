// KG-augmented AI agent: combines Ollama LLM with knowledge graph memory

import { OllamaClient, ChatMessage } from './ollama';
import { ContextManager } from './context';
import { FactExtractor, ExtractionResult } from './extractor';
import { IKnowledgeGraph, NodeData } from '../graphs';
import { AgentConfig } from '../config';

export interface TurnRecord {
  turn: number;
  userMessage: string;
  kgQuery: string;
  kgResults: NodeData[];
  kgMemoryInjected: string;
  assistantResponse: string;
  contextTokensUsed: number;
  messagesDropped: number;
  latencyMs: number;
  extraction?: ExtractionResult;
  kgNodesBefore: number;
  kgNodesAfter: number;
  error?: string;
}

export interface AgentSession {
  sessionId: string;
  graphType: string;
  turns: TurnRecord[];
  totalTokensUsed: number;
}

const DEFAULT_SYSTEM_PROMPT = `You are a helpful AI assistant with access to a knowledge graph memory system.
When the user shares information about themselves or others, acknowledge it naturally and remember it.
When answering questions, prioritize any retrieved knowledge graph facts provided to you.
For general knowledge questions not covered by the KG facts, use your own knowledge to answer.
Be concise and accurate. Do not make up information about specific people or entities unless supported by the provided facts.`;

export class KGAgent {
  private client: OllamaClient;
  private contextManager: ContextManager;
  private extractor: FactExtractor;
  private graph: IKnowledgeGraph;
  private config: AgentConfig;
  private history: ChatMessage[] = [];
  private session: AgentSession;

  constructor(graph: IKnowledgeGraph, config: AgentConfig, sessionId: string) {
    this.graph = graph;
    this.config = config;
    this.client = new OllamaClient({
      endpoint: config.ollamaEndpoint,
      model: config.model,
      temperature: config.temperature,
      numCtx: config.numCtx,
      timeoutMs: config.timeoutMs,
    });
    this.contextManager = new ContextManager(
      config.maxContextTokens,
      config.systemPrompt || DEFAULT_SYSTEM_PROMPT,
      config.maxKgTokens,
    );
    this.extractor = new FactExtractor(this.client);
    this.session = {
      sessionId,
      graphType: graph.name,
      turns: [],
      totalTokensUsed: 0,
    };
  }

  /** Extract keywords from a user message for KG querying */
  private extractQueryTerms(message: string): string {
    // Remove common stop words, keep meaningful terms
    const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
      'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
      'may', 'might', 'must', 'can', 'to', 'of', 'in', 'on', 'at', 'by', 'for', 'with',
      'about', 'into', 'through', 'and', 'or', 'but', 'if', 'then', 'that', 'this', 'what',
      'who', 'where', 'when', 'how', 'why', 'which', 'i', 'you', 'he', 'she', 'it', 'we',
      'they', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'me', 'him', 'us', 'them',
      'tell', 'know', 'think', 'say', 'said', 'please', 'can', 'do', 'does', 'what\'s']);
    const words = message.toLowerCase()
      .replace(/[?!.,;:'"()\[\]{}]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !stopWords.has(w));
    return words.join(' ');
  }

  /** Query the KG and format results as a memory injection string */
  private queryKG(userMessage: string): { nodes: NodeData[]; memoryText: string } {
    const queryTerms = this.extractQueryTerms(userMessage);
    if (!queryTerms) return { nodes: [], memoryText: '' };

    // In split-budget mode, retrieve all nodes — token truncation caps the output.
    // In shared-pool mode, respect topK to avoid bloating the shared budget.
    const effectiveTopK = this.config.maxKgTokens
      ? Math.max(this.config.topK * 10, this.graph.getStats().nodeCount)
      : this.config.topK;

    // Search by label match
    const labelResults = this.graph.searchByLabel(queryTerms, effectiveTopK);

    // Also try tag-based search
    const tags = queryTerms.split(' ').filter(t => t.length > 3);
    const tagResults = tags.length > 0 ? this.graph.searchByTags(tags, effectiveTopK) : [];

    // Merge and deduplicate by node id
    const seen = new Set<string>();
    const allNodes: NodeData[] = [];
    for (const r of [...labelResults, ...tagResults]) {
      if (!seen.has(r.node.id)) {
        seen.add(r.node.id);
        allNodes.push(r.node);
        // Also get neighbors for context
        const neighbors = this.graph.getNeighbors(r.node.id);
        for (const n of neighbors.slice(0, 2)) {
          if (!seen.has(n.id)) {
            seen.add(n.id);
            allNodes.push(n);
          }
        }
      }
    }

    const topNodes = allNodes
      .filter(n => !n.isOutdated)   // exclude superseded facts
      .slice(0, effectiveTopK * 2);
    if (topNodes.length === 0) return { nodes: [], memoryText: '' };

    const now = Date.now();
    const timeAgo = (ms: number): string => {
      const diff = now - ms;
      if (diff < 60_000) return 'just now';
      if (diff < 3_600_000) return `${Math.round(diff / 60_000)}m ago`;
      return `${Math.round(diff / 3_600_000)}h ago`;
    };

    const lines: string[] = [];
    for (const node of topNodes) {
      const propStr = Object.entries(node.properties)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
      // Freshness annotation: show version + age for updated nodes so the model
      // can reason about which facts are most current.
      const freshness = node.version > 1 ? ` [v${node.version}, updated ${timeAgo(node.updatedAt)}]` : '';
      const line = propStr
        ? `- ${node.label}: ${propStr}${freshness}`
        : `- ${node.label}${freshness}`;
      lines.push(line);

      // Add edge relationships
      const neighbors = this.graph.getNeighbors(node.id);
      for (const n of neighbors.slice(0, 3)) {
        const edges = this.graph.findRelated(node.id, 1);
        const edgeToN = edges.edges.find(e =>
          (e.fromId === node.id && e.toId === n.id) ||
          (e.toId === node.id && e.fromId === n.id)
        );
        if (edgeToN) {
          lines.push(`  → ${edgeToN.relation}: ${n.label}`);
        }
      }
    }

    return { nodes: topNodes, memoryText: lines.join('\n') };
  }

  async chat(userMessage: string, extractFacts = true): Promise<TurnRecord> {
    const turnStart = Date.now();
    const turnNum = this.session.turns.length + 1;
    const kgNodesBefore = this.graph.getStats().nodeCount;

    let record: TurnRecord = {
      turn: turnNum,
      userMessage,
      kgQuery: '',
      kgResults: [],
      kgMemoryInjected: '',
      assistantResponse: '',
      contextTokensUsed: 0,
      messagesDropped: 0,
      latencyMs: 0,
      kgNodesBefore,
      kgNodesAfter: kgNodesBefore,
    };

    try {
      // Step 1: Extract facts from user message and store in KG
      if (extractFacts) {
        const recentContext = this.history.slice(-4)
          .map(m => `${m.role}: ${m.content}`)
          .join('\n');
        const facts = await this.extractor.extract(userMessage, recentContext);
        if (facts.length > 0) {
          const extraction = this.extractor.storeInGraph(facts, this.graph);
          record.extraction = extraction;
        }
      }

      record.kgNodesAfter = this.graph.getStats().nodeCount;

      // Step 2: Query KG for relevant memory
      const queryTerms = this.extractQueryTerms(userMessage);
      record.kgQuery = queryTerms;
      const { nodes, memoryText } = this.queryKG(userMessage);
      record.kgResults = nodes;
      record.kgMemoryInjected = memoryText;

      // Count dropped messages before building context
      record.messagesDropped = this.contextManager.countDropped(
        this.history, memoryText, userMessage
      );

      // Build context with KG injection
      const ctx = this.contextManager.buildContext(this.history, memoryText, userMessage);
      record.contextTokensUsed = ctx.totalTokens;
      this.session.totalTokensUsed += ctx.totalTokens;

      // Call LLM — disable thinking to keep responses fast (we test recall, not reasoning depth)
      const response = await this.client.chat(ctx.messages, {
        temperature: this.config.temperature,
        noThink: true,
      });
      record.assistantResponse = response.message?.content ?? '';

      // Update history
      this.history.push({ role: 'user', content: userMessage });
      this.history.push({ role: 'assistant', content: record.assistantResponse });

    } catch (err) {
      record.error = err instanceof Error ? err.message : String(err);
      record.assistantResponse = `[ERROR: ${record.error}]`;
    }

    record.latencyMs = Date.now() - turnStart;
    this.session.turns.push(record);
    return record;
  }

  resetHistory(): void {
    this.history = [];
  }

  getSession(): AgentSession {
    return { ...this.session, turns: [...this.session.turns] };
  }

  getGraph(): IKnowledgeGraph {
    return this.graph;
  }

  async testConnectivity(): Promise<boolean> {
    return this.client.ping();
  }
}

// KG-augmented AI agent: combines Ollama LLM with knowledge graph memory

import { OllamaClient, ChatMessage } from './ollama';
import { ContextManager } from './context';
import { FactExtractor, ExtractionResult } from './extractor';
import { IKnowledgeGraph, NodeData } from '../graphs';
import { AgentConfig } from '../config';
import { EmbeddingsClient } from '../rag';

/** Cosine similarity between two equal-length vectors */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

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
When answering questions, ALWAYS prioritise facts from the Knowledge Base section over anything mentioned in the conversation history — the Knowledge Base reflects the CURRENT state of all known facts, and conversation history may contain outdated values that have since changed.
If a fact in the Knowledge Base differs from something said earlier in the conversation, the Knowledge Base is correct and up-to-date.
When stating a current value (role, location, budget, project, etc.), give ONLY the current value — do not mention historical values that have changed unless the user specifically asks what changed.
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
  /** Per-node embedding cache: nodeId → embedding vector */
  private nodeEmbeddings: Map<string, number[]> = new Map();
  private embeddingsClient?: EmbeddingsClient;

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
    // Initialise embeddings client if model is configured (enables hybrid retrieval)
    if (config.embeddingModel) {
      this.embeddingsClient = new EmbeddingsClient({
        endpoint: config.ollamaEndpoint,
        model: config.embeddingModel,
      });
    }
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

  /** Query the KG and format results as a memory injection string.
   *  turnType is used to set dynamic topK: recall/verify turns get more results. */
  private async queryKG(userMessage: string, turnType?: string): Promise<{ nodes: NodeData[]; memoryText: string; suppressionText: string }> {
    const queryTerms = this.extractQueryTerms(userMessage);
    if (!queryTerms) return { nodes: [], memoryText: '', suppressionText: '' };

    // Dynamic topK by turn type — recall/verify turns need more candidates
    const typeMultiplier: Record<string, number> = {
      recall: 3, verify_update: 3, update: 1.5, tell: 1, distractor: 0.5,
    };
    const multiplier = typeMultiplier[turnType ?? 'recall'] ?? 2;
    const baseTopK = this.config.maxKgTokens
      ? Math.max(this.config.topK * 10, this.graph.getStats().nodeCount)
      : this.config.topK;
    const effectiveTopK = Math.ceil(baseTopK * multiplier);

    // Search by label match
    const labelResults = this.graph.searchByLabel(queryTerms, effectiveTopK);

    // Also try tag-based search
    const tags = queryTerms.split(' ').filter(t => t.length > 3);
    const tagResults = tags.length > 0 ? this.graph.searchByTags(tags, effectiveTopK) : [];

    // Merge and deduplicate by node id, computing tag score for each
    const seen = new Set<string>();
    const scoredMap = new Map<string, { node: NodeData; tagScore: number }>();
    for (const r of [...labelResults, ...tagResults]) {
      if (!seen.has(r.node.id)) {
        seen.add(r.node.id);
        scoredMap.set(r.node.id, { node: r.node, tagScore: r.score });
        // Also get neighbors for context
        const neighbors = this.graph.getNeighbors(r.node.id);
        for (const n of neighbors.slice(0, 2)) {
          if (!seen.has(n.id)) {
            seen.add(n.id);
            scoredMap.set(n.id, { node: n, tagScore: 0 });
          }
        }
      }
    }

    // Hybrid scoring: blend tag score (0.6) with embedding cosine similarity (0.4)
    if (this.embeddingsClient && scoredMap.size > 0) {
      try {
        const queryEmbedding = await this.embeddingsClient.embed(userMessage);
        for (const [nodeId, entry] of scoredMap) {
          const nodeEmb = this.nodeEmbeddings.get(nodeId);
          if (nodeEmb && nodeEmb.length > 0) {
            const cosScore = cosineSimilarity(queryEmbedding, nodeEmb);
            // Blend: tag score range ~0-15, cosine range 0-1 → scale cosine to match
            entry.tagScore = 0.6 * entry.tagScore + 0.4 * cosScore * 15;
          }
        }
      } catch {
        // Embedding failure is non-fatal — fall back to tag-only scoring
      }
    }

    const topNodes = Array.from(scoredMap.values())
      .filter(e => !e.node.isOutdated)  // exclude superseded facts
      .sort((a, b) => b.tagScore - a.tagScore)
      .slice(0, effectiveTopK * 2)
      .map(e => e.node);

    if (topNodes.length === 0) return { nodes: [], memoryText: '', suppressionText: '' };

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

    // Build suppression warnings for outdated nodes — explicitly tell the model
    // NOT to cite old values even if they appear in conversation history.
    const suppressionLines: string[] = [];
    const allOutdated = this.graph.getAllNodes().filter(n => n.isOutdated);
    for (const node of allOutdated) {
      const entries = Object.entries(node.properties);
      if (entries.length === 0) continue;
      for (const [attr, val] of entries.slice(0, 2)) {
        suppressionLines.push(`⚠️ OUTDATED — do NOT state: "${node.label}" has ${attr} "${val}"`);
      }
    }

    return {
      nodes: topNodes,
      memoryText: lines.join('\n'),
      suppressionText: suppressionLines.join('\n'),
    };
  }

  async chat(userMessage: string, extractFacts = true, turnType?: string): Promise<TurnRecord> {
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

          // Cache embeddings for affected nodes (hybrid retrieval)
          if (this.embeddingsClient && extraction.affectedNodeIds.length > 0) {
            for (const nodeId of extraction.affectedNodeIds) {
              const node = this.graph.getNode(nodeId);
              if (node) {
                try {
                  const text = `${node.label} ${Object.entries(node.properties).map(([k,v]) => `${k} ${v}`).join(' ')} ${node.tags.join(' ')}`;
                  const emb = await this.embeddingsClient.embed(text);
                  this.nodeEmbeddings.set(nodeId, emb);
                } catch { /* non-fatal */ }
              }
            }
          }
        }
      }

      record.kgNodesAfter = this.graph.getStats().nodeCount;

      // Step 2: Query KG for relevant memory (async for hybrid embedding scoring)
      const queryTerms = this.extractQueryTerms(userMessage);
      record.kgQuery = queryTerms;
      const { nodes, memoryText, suppressionText } = await this.queryKG(userMessage, turnType);
      record.kgResults = nodes;
      record.kgMemoryInjected = memoryText;

      // Combine KG facts with suppression warnings
      const fullKgText = suppressionText
        ? `${memoryText}\n\n## Outdated — do NOT cite these values\n${suppressionText}`
        : memoryText;

      // Count dropped messages before building context
      record.messagesDropped = this.contextManager.countDropped(
        this.history, fullKgText, userMessage
      );

      // Build context with KG injection
      const ctx = this.contextManager.buildContext(this.history, fullKgText, userMessage);
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

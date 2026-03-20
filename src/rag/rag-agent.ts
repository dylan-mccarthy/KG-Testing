// RAG Agent: uses vector embeddings (nomic-embed-text) as memory instead of a knowledge graph.
// Implements the same TurnRecord interface as KGAgent so it plugs directly into the test runner.

import { OllamaClient, ChatMessage } from '../agent/ollama';
import { ContextManager } from '../agent/context';
import { FactExtractor, ExtractionResult } from '../agent/extractor';
import { AgentConfig } from '../config';
import { EmbeddingsClient } from './embeddings';
import { VectorStore } from './vector-store';
import { TurnRecord, AgentSession } from '../agent/agent';

export { TurnRecord, AgentSession };

const RAG_SYSTEM_PROMPT = `You are a helpful AI assistant with access to a semantic memory system.
When the user shares information about themselves or others, acknowledge it naturally and remember it.
When answering questions, prioritize any retrieved memory facts provided to you.
For general knowledge questions not covered by the memory facts, use your own knowledge.
Be concise and accurate. Do not make up information about specific people or entities unless supported by the provided facts.`;

export class RAGAgent {
  private client: OllamaClient;
  private contextManager: ContextManager;
  private extractor: FactExtractor;
  private store: VectorStore;
  private config: AgentConfig;
  private history: ChatMessage[] = [];
  private session: AgentSession;

  constructor(
    store: VectorStore,
    config: AgentConfig,
    sessionId = 'rag_default',
  ) {
    this.store = store;
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
      config.systemPrompt ?? RAG_SYSTEM_PROMPT,
    );
    this.extractor = new FactExtractor(this.client);
    this.session = { sessionId, graphType: 'rag', turns: [], totalTokensUsed: 0 };
  }

  /** Store a user message as a vector chunk (called on tell/update turns) */
  private async storeMessage(
    userMessage: string,
    isUpdate: boolean,
  ): Promise<{ chunksAdded: number; chunksUpdated: number }> {
    // Extract facts so we can create targeted, searchable chunks
    const recentCtx = this.history.slice(-4).map(m => `${m.role}: ${m.content}`).join('\n');
    const facts = await this.extractor.extract(userMessage, recentCtx);

    let chunksAdded = 0;
    let chunksUpdated = 0;

    if (facts.length > 0) {
      for (const fact of facts) {
        // Build a natural-language chunk for the fact: "Jordan Blake's job is data analyst"
        const chunkText = fact.relatedEntity
          ? `${fact.entity}'s ${fact.attribute} is ${fact.value} (related to ${fact.relatedEntity})`
          : `${fact.entity}'s ${fact.attribute} is ${fact.value}`;

        const matchKey = `${fact.entity.toLowerCase()}::${fact.attribute.toLowerCase()}`;

        if (isUpdate || fact.isUpdate) {
          // Upsert: replace if same entity+attribute already stored
          const result = await this.store.upsert(chunkText, 'key', matchKey, {
            key: matchKey,
            entity: fact.entity,
            attribute: fact.attribute,
            value: fact.value,
            isUpdate: 'true',
          });
          if (result.wasUpdate) chunksUpdated++;
          else chunksAdded++;
        } else {
          // Check if already stored (avoid duplicates)
          const existing = this.store.getAllChunks().find(c => c.metadata['key'] === matchKey);
          if (!existing) {
            await this.store.insert(chunkText, {
              key: matchKey,
              entity: fact.entity,
              attribute: fact.attribute,
              value: fact.value,
            });
            chunksAdded++;
          }
        }
      }
    } else {
      // Fallback: store the raw message as a single chunk if no facts extracted
      await this.store.insert(userMessage, { source: 'raw_message' });
      chunksAdded++;
    }

    return { chunksAdded, chunksUpdated };
  }

  async chat(userMessage: string, extractFacts = true): Promise<TurnRecord> {
    const turnStart = Date.now();
    const turnNum = this.session.turns.length + 1;
    const statsBefore = this.store.getStats();

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
      kgNodesBefore: statsBefore.chunkCount,
      kgNodesAfter: statsBefore.chunkCount,
    };

    try {
      // Step 1: Store facts from user message (on tell/update turns)
      if (extractFacts) {
        const isUpdate = userMessage.toLowerCase().includes('promot') ||
          userMessage.toLowerCase().includes('moved') ||
          userMessage.toLowerCase().includes('changed') ||
          userMessage.toLowerCase().includes('now a ') ||
          userMessage.toLowerCase().includes('just got') ||
          userMessage.toLowerCase().includes('passed my') ||
          userMessage.toLowerCase().includes('pushed');

        const { chunksAdded, chunksUpdated } = await this.storeMessage(userMessage, isUpdate);
        const statsAfter = this.store.getStats();
        record.kgNodesAfter = statsAfter.chunkCount;

        // Build a synthetic ExtractionResult for metric tracking
        record.extraction = {
          facts: [],
          nodesCreated: chunksAdded,
          nodesUpdated: chunksUpdated,
          edgesCreated: 0,
          rawResponse: '',
        };
      }

      // Step 2: Retrieve relevant chunks via semantic search
      const searchResults = await this.store.search(userMessage, this.config.topK);
      record.kgQuery = userMessage;
      record.kgResults = searchResults.map(r => ({
        id: r.chunk.id,
        label: r.chunk.text,
        properties: r.chunk.metadata as Record<string, unknown>,
        tags: [],
        createdAt: r.chunk.createdAt,
        accessCount: 0,
      }));

      // Build memory injection string from top results
      const memoryLines = searchResults
        .filter(r => r.score > 0.3)   // only include meaningfully similar chunks
        .map(r => `- ${r.chunk.text} (relevance: ${(r.score * 100).toFixed(0)}%)`);
      record.kgMemoryInjected = memoryLines.join('\n');

      // Step 3: Build context and call LLM
      record.messagesDropped = this.contextManager.countDropped(
        this.history, record.kgMemoryInjected, userMessage,
      );
      const ctx = this.contextManager.buildContext(
        this.history, record.kgMemoryInjected, userMessage,
      );
      record.contextTokensUsed = ctx.totalTokens;
      this.session.totalTokensUsed += ctx.totalTokens;

      const response = await this.client.chat(ctx.messages, {
        temperature: this.config.temperature,
        noThink: true,
      });
      record.assistantResponse = response.message?.content ?? '';

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

  getStore(): VectorStore {
    return this.store;
  }
}

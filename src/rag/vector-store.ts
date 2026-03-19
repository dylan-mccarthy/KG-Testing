// In-memory vector store: stores text chunks with their embeddings
// Supports insert, update-by-id, cosine-similarity search, and deletion

import { EmbeddingsClient } from './embeddings';

export interface VectorChunk {
  id: string;
  text: string;           // Original text stored
  embedding: number[];    // 768-dim nomic-embed-text vector
  metadata: Record<string, string>;  // e.g. { entity, attribute, turnType }
  createdAt: number;
  updatedAt: number;
}

export interface SearchResult {
  chunk: VectorChunk;
  score: number;          // Cosine similarity 0–1
}

export interface VectorStoreStats {
  chunkCount: number;
  totalUpdates: number;
}

export class VectorStore {
  private chunks = new Map<string, VectorChunk>();
  private nextId = 1;
  private totalUpdates = 0;

  constructor(private embedder: EmbeddingsClient) {}

  /** Embed text and store as a new chunk. Returns the chunk id. */
  async insert(text: string, metadata: Record<string, string> = {}): Promise<string> {
    const id = `vc_${this.nextId++}`;
    const embedding = await this.embedder.embed(text);
    const now = Date.now();
    this.chunks.set(id, { id, text, embedding, metadata, createdAt: now, updatedAt: now });
    return id;
  }

  /** Update an existing chunk's text and re-embed it. */
  async update(id: string, text: string, metadata?: Record<string, string>): Promise<boolean> {
    const existing = this.chunks.get(id);
    if (!existing) return false;
    const embedding = await this.embedder.embed(text);
    this.chunks.set(id, {
      ...existing,
      text,
      embedding,
      metadata: metadata ?? existing.metadata,
      updatedAt: Date.now(),
    });
    this.totalUpdates++;
    return true;
  }

  /** Find or update by metadata key=value match. Returns true if updated, false if inserted. */
  async upsert(
    text: string,
    matchKey: string,
    matchValue: string,
    metadata: Record<string, string> = {},
  ): Promise<{ id: string; wasUpdate: boolean }> {
    for (const chunk of this.chunks.values()) {
      if (chunk.metadata[matchKey] === matchValue) {
        await this.update(chunk.id, text, { ...chunk.metadata, ...metadata });
        return { id: chunk.id, wasUpdate: true };
      }
    }
    const id = await this.insert(text, metadata);
    return { id, wasUpdate: false };
  }

  delete(id: string): boolean {
    return this.chunks.delete(id);
  }

  /** Retrieve top-k most similar chunks to a query string */
  async search(query: string, topK = 5): Promise<SearchResult[]> {
    if (this.chunks.size === 0) return [];
    const queryEmbedding = await this.embedder.embed(query);

    const results: SearchResult[] = [];
    for (const chunk of this.chunks.values()) {
      const score = EmbeddingsClient.cosineSimilarity(queryEmbedding, chunk.embedding);
      results.push({ chunk, score });
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }

  getStats(): VectorStoreStats {
    return { chunkCount: this.chunks.size, totalUpdates: this.totalUpdates };
  }

  getAllChunks(): VectorChunk[] {
    return [...this.chunks.values()];
  }

  clear(): void {
    this.chunks.clear();
    this.nextId = 1;
    this.totalUpdates = 0;
  }
}

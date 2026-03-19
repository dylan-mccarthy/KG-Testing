// Ollama embeddings client using nomic-embed-text (768 dimensions)

import * as http from 'http';

export interface EmbeddingsConfig {
  endpoint: string;
  model: string;
  timeoutMs?: number;
}

export class EmbeddingsClient {
  private endpoint: string;
  private model: string;
  private timeoutMs: number;
  // Simple in-process cache: text → embedding
  private cache = new Map<string, number[]>();

  constructor(config: EmbeddingsConfig) {
    this.endpoint = config.endpoint;
    this.model = config.model;
    this.timeoutMs = config.timeoutMs ?? 30000;
  }

  async embed(text: string): Promise<number[]> {
    const key = this.model + ':' + text;
    if (this.cache.has(key)) return this.cache.get(key)!;

    const embedding = await this.embedRaw(text);
    this.cache.set(key, embedding);
    return embedding;
  }

  async embedBatch(texts: string[]): Promise<number[][]> {
    const results: number[][] = [];
    for (const t of texts) {
      results.push(await this.embed(t));
    }
    return results;
  }

  private embedRaw(text: string): Promise<number[]> {
    const body = JSON.stringify({ model: this.model, input: text });

    return new Promise((resolve, reject) => {
      const url = new URL('/api/embed', this.endpoint);
      let settled = false;
      const deadline = setTimeout(() => {
        if (!settled) {
          settled = true;
          req.destroy();
          reject(new Error(`Embed request timeout (${this.timeoutMs}ms)`));
        }
      }, this.timeoutMs);

      const req = http.request({
        hostname: url.hostname,
        port: parseInt(url.port || '11434'),
        path: url.pathname,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      }, (res) => {
        let data = '';
        res.on('data', c => { data += c; });
        res.on('end', () => {
          if (settled) return;
          settled = true;
          clearTimeout(deadline);
          try {
            const parsed = JSON.parse(data);
            const emb: number[] = parsed.embeddings?.[0] ?? parsed.embedding ?? [];
            if (emb.length === 0) reject(new Error('Empty embedding returned'));
            else resolve(emb);
          } catch (e) {
            reject(new Error(`Failed to parse embed response: ${data.slice(0, 100)}`));
          }
        });
      });

      req.on('error', (e) => { if (!settled) { settled = true; clearTimeout(deadline); reject(e); } });
      req.write(body);
      req.end();
    });
  }

  /** Cosine similarity between two vectors */
  static cosineSimilarity(a: number[], b: number[]): number {
    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    const denom = Math.sqrt(normA) * Math.sqrt(normB);
    return denom === 0 ? 0 : dot / denom;
  }

  clearCache(): void {
    this.cache.clear();
  }
}

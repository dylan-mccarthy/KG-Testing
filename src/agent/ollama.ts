// Ollama HTTP client for chat completions

import * as http from 'http';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: ChatMessage;
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
}

export interface OllamaClientConfig {
  endpoint: string;
  model: string;
  temperature?: number;
  timeoutMs?: number;
}

export class OllamaClient {
  private config: Required<OllamaClientConfig>;

  constructor(config: OllamaClientConfig) {
    this.config = {
      temperature: 0.3,
      timeoutMs: 120000,
      ...config,
    };
  }

  async chat(messages: ChatMessage[], options?: { temperature?: number }): Promise<ChatResponse> {
    const body = JSON.stringify({
      model: this.config.model,
      messages,
      stream: false,
      options: {
        temperature: options?.temperature ?? this.config.temperature,
        num_ctx: 4096,
      },
    });

    return new Promise((resolve, reject) => {
      const url = new URL('/api/chat', this.config.endpoint);
      const reqOptions: http.RequestOptions = {
        hostname: url.hostname,
        port: parseInt(url.port || '11434'),
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
        timeout: this.config.timeoutMs,
      };

      const req = http.request(reqOptions, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data) as ChatResponse;
            // Strip <think>...</think> blocks from qwen3 thinking models
            if (parsed.message?.content) {
              parsed.message.content = OllamaClient.stripThinkingTokens(parsed.message.content);
            }
            resolve(parsed);
          } catch (e) {
            reject(new Error(`Failed to parse Ollama response: ${data.slice(0, 200)}`));
          }
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Ollama request timed out'));
      });

      req.write(body);
      req.end();
    });
  }

  /** Remove <think>...</think> blocks produced by reasoning models */
  static stripThinkingTokens(content: string): string {
    return content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  }

  /** Simple ping to check connectivity */
  async ping(): Promise<boolean> {
    return new Promise((resolve) => {
      const url = new URL('/api/tags', this.config.endpoint);
      const req = http.get({
        hostname: url.hostname,
        port: parseInt(url.port || '11434'),
        path: url.pathname,
        timeout: 5000,
      }, (res) => {
        resolve(res.statusCode === 200);
        res.resume();
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => { req.destroy(); resolve(false); });
    });
  }

  /** Rough token estimation (4 chars ≈ 1 token) */
  static estimateTokens(text: string): number {
    return Math.ceil(text.length / 4);
  }

  static estimateMessagesTokens(messages: ChatMessage[]): number {
    return messages.reduce((sum, m) => sum + OllamaClient.estimateTokens(m.content) + 4, 0);
  }
}

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
  /** Ollama num_ctx: how many tokens the model context window processes. Defaults to 4096. */
  numCtx?: number;
}

export class OllamaClient {
  private config: Required<OllamaClientConfig>;

  constructor(config: OllamaClientConfig) {
    this.config = {
      temperature: 0.3,
      timeoutMs: 120000,
      numCtx: 4096,
      ...config,
    };
  }

  async chat(messages: ChatMessage[], options?: { temperature?: number; timeoutMs?: number; noThink?: boolean }): Promise<ChatResponse> {
    const ollamaOpts: Record<string, unknown> = {
      temperature: options?.temperature ?? this.config.temperature,
      num_ctx: this.config.numCtx,
    };
    const requestBody: Record<string, unknown> = {
      model: this.config.model,
      messages,
      stream: false,
      options: ollamaOpts,
    };
    if (options?.noThink) {
      // Disable thinking mode for Qwen3 — must be at top-level request body
      requestBody['think'] = false;
    }
    const body = JSON.stringify(requestBody);
    const timeoutMs = options?.timeoutMs ?? this.config.timeoutMs;

    return new Promise((resolve, reject) => {
      const url = new URL('/api/chat', this.config.endpoint);
      // Use a hard deadline timer in addition to socket idle timeout
      let settled = false;
      const deadline = setTimeout(() => {
        if (!settled) {
          settled = true;
          req.destroy();
          reject(new Error(`Ollama request deadline exceeded (${timeoutMs}ms)`));
        }
      }, timeoutMs);
      const reqOptions: http.RequestOptions = {
        hostname: url.hostname,
        port: parseInt(url.port || '11434'),
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      };

      const req = http.request(reqOptions, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          if (settled) return;
          settled = true;
          clearTimeout(deadline);
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

      req.on('error', (err) => {
        if (!settled) { settled = true; clearTimeout(deadline); reject(err); }
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

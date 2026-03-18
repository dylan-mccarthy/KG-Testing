// Context manager: sliding window + KG injection to limit LLM context

import { ChatMessage } from './ollama';
import { OllamaClient } from './ollama';

export interface ContextWindow {
  systemPrompt: string;
  messages: ChatMessage[];
  totalTokens: number;
}

export class ContextManager {
  private maxTokens: number;
  private systemPrompt: string;

  constructor(maxTokens: number, systemPrompt: string) {
    this.maxTokens = maxTokens;
    this.systemPrompt = systemPrompt;
  }

  /**
   * Build context for next call:
   * 1. Start with system prompt
   * 2. Inject KG memory as a system-level block
   * 3. Trim oldest messages to stay under token limit
   */
  buildContext(
    history: ChatMessage[],
    kgMemory: string,
    newUserMessage: string
  ): ContextWindow {
    const systemContent = kgMemory
      ? `${this.systemPrompt}\n\n## Knowledge Graph Memory\nUse the following retrieved facts to answer accurately:\n${kgMemory}`
      : this.systemPrompt;

    const sysMsg: ChatMessage = { role: 'system', content: systemContent };
    const sysTokens = OllamaClient.estimateTokens(systemContent) + 4;
    const newMsgTokens = OllamaClient.estimateTokens(newUserMessage) + 4;

    const budget = this.maxTokens - sysTokens - newMsgTokens - 50; // reserve headroom

    // Trim history from oldest to fit within budget
    const trimmed: ChatMessage[] = [];
    let usedTokens = 0;
    for (let i = history.length - 1; i >= 0; i--) {
      const t = OllamaClient.estimateTokens(history[i].content) + 4;
      if (usedTokens + t > budget) break;
      trimmed.unshift(history[i]);
      usedTokens += t;
    }

    const messages: ChatMessage[] = [
      sysMsg,
      ...trimmed,
      { role: 'user', content: newUserMessage },
    ];

    return {
      systemPrompt: systemContent,
      messages,
      totalTokens: sysTokens + usedTokens + newMsgTokens,
    };
  }

  /** How many history messages were dropped in last build */
  countDropped(history: ChatMessage[], kgMemory: string, newUserMessage: string): number {
    const ctx = this.buildContext(history, kgMemory, newUserMessage);
    // Messages = [system, ...history_kept, user] — subtract 2 for system+user
    const kept = ctx.messages.length - 2;
    return history.length - kept;
  }

  updateSystemPrompt(prompt: string): void {
    this.systemPrompt = prompt;
  }

  get maxContextTokens(): number {
    return this.maxTokens;
  }
}

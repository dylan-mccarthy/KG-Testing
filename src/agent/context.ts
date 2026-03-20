// Context manager: sliding window + KG injection to limit LLM context

import { ChatMessage } from './ollama';
import { OllamaClient } from './ollama';

export interface ContextWindow {
  systemPrompt: string;
  messages: ChatMessage[];
  totalTokens: number;
  historyTokens: number;
  kgTokens: number;
}

export class ContextManager {
  private maxHistoryTokens: number;
  private systemPromptBase: string;
  /** When set, KG injection uses a SEPARATE budget (not deducted from history budget).
   *  This lets history stay tight (4k) while KG facts can be large (32k). */
  private maxKgTokens?: number;

  /**
   * @param maxHistoryTokens  Token budget for raw conversation history
   * @param systemPrompt      Base system prompt (before KG injection)
   * @param maxKgTokens       Optional separate budget for KG facts. When undefined,
   *                          falls back to legacy shared-pool mode where KG + history
   *                          both compete for maxHistoryTokens.
   */
  constructor(maxHistoryTokens: number, systemPrompt: string, maxKgTokens?: number) {
    this.maxHistoryTokens = maxHistoryTokens;
    this.systemPromptBase = systemPrompt;
    this.maxKgTokens = maxKgTokens;
  }

  /**
   * Build context for next LLM call.
   *
   * Split-budget mode (maxKgTokens set):
   *   - KG text truncated to maxKgTokens (line-boundary safe)
   *   - History trimmed to maxHistoryTokens (KG size does NOT count against this)
   *   - Total prompt ≈ sysBase + kgText + history + newMsg  (fits in numCtx)
   *
   * Shared-budget mode (legacy, maxKgTokens unset):
   *   - Budget = maxHistoryTokens - sysTokens - newMsgTokens
   *   - History trimmed to fit remaining budget (original behaviour)
   */
  buildContext(
    history: ChatMessage[],
    kgMemory: string,
    newUserMessage: string
  ): ContextWindow {
    if (this.maxKgTokens !== undefined) {
      return this.buildContextSplit(history, kgMemory, newUserMessage);
    }
    return this.buildContextShared(history, kgMemory, newUserMessage);
  }

  private buildContextSplit(
    history: ChatMessage[],
    kgMemory: string,
    newUserMessage: string
  ): ContextWindow {
    // 1. Truncate KG text to its own budget (cut at line boundaries to keep facts intact)
    const kgTruncated = this.truncateByLines(kgMemory, this.maxKgTokens!);
    const kgTokens = OllamaClient.estimateTokens(kgTruncated);

    const systemContent = kgTruncated
      ? `${this.systemPromptBase}\n\n## Knowledge Base (CURRENT STATE — supersedes conversation history)\nThe following facts are the most up-to-date known information. If any fact here differs from something said earlier in the conversation, THIS is correct:\n${kgTruncated}`
      : this.systemPromptBase;

    const sysMsg: ChatMessage = { role: 'system', content: systemContent };
    const newMsgTokens = OllamaClient.estimateTokens(newUserMessage) + 4;

    // 2. History budget is independent of KG size
    const historyBudget = this.maxHistoryTokens - newMsgTokens - 50;

    const trimmed: ChatMessage[] = [];
    let usedHistoryTokens = 0;
    for (let i = history.length - 1; i >= 0; i--) {
      const t = OllamaClient.estimateTokens(history[i].content) + 4;
      if (usedHistoryTokens + t > historyBudget) break;
      trimmed.unshift(history[i]);
      usedHistoryTokens += t;
    }

    const sysTokens = OllamaClient.estimateTokens(systemContent) + 4;
    const messages: ChatMessage[] = [
      sysMsg,
      ...trimmed,
      { role: 'user', content: newUserMessage },
    ];

    return {
      systemPrompt: systemContent,
      messages,
      totalTokens: sysTokens + usedHistoryTokens + newMsgTokens,
      historyTokens: usedHistoryTokens,
      kgTokens,
    };
  }

  private buildContextShared(
    history: ChatMessage[],
    kgMemory: string,
    newUserMessage: string
  ): ContextWindow {
    // Legacy: KG embedded in system, all compete for maxHistoryTokens
    const systemContent = kgMemory
      ? `${this.systemPromptBase}\n\n## Knowledge Base (CURRENT STATE — supersedes conversation history)\nThe following facts are the most up-to-date known information. If any fact here differs from something said earlier in the conversation, THIS is correct:\n${kgMemory}`
      : this.systemPromptBase;

    const sysMsg: ChatMessage = { role: 'system', content: systemContent };
    const sysTokens = OllamaClient.estimateTokens(systemContent) + 4;
    const newMsgTokens = OllamaClient.estimateTokens(newUserMessage) + 4;

    const budget = this.maxHistoryTokens - sysTokens - newMsgTokens - 50;

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
      historyTokens: usedTokens,
      kgTokens: OllamaClient.estimateTokens(kgMemory),
    };
  }

  /** Truncate text to approximately maxTokens, cutting only on line boundaries */
  private truncateByLines(text: string, maxTokens: number): string {
    if (!text) return text;
    const lines = text.split('\n');
    const kept: string[] = [];
    let tokens = 0;
    for (const line of lines) {
      const t = OllamaClient.estimateTokens(line) + 1;
      if (tokens + t > maxTokens) break;
      kept.push(line);
      tokens += t;
    }
    return kept.join('\n');
  }

  countDropped(history: ChatMessage[], kgMemory: string, newUserMessage: string): number {
    const ctx = this.buildContext(history, kgMemory, newUserMessage);
    // Messages = [system, ...history_kept, user] — subtract 2 for system+user
    const kept = ctx.messages.length - 2;
    return Math.max(0, history.length - kept);
  }

  updateSystemPrompt(prompt: string): void {
    this.systemPromptBase = prompt;
  }

  get maxContextTokens(): number {
    return this.maxHistoryTokens;
  }
}


// SemanticValidator: NLP-enhanced response validation.
// Provides three extra tiers before falling through to the LLM judge:
//   1. Porter stemmer normalisation  (natural.js)
//   2. Persona pronoun resolution    (second-person = persona)
//   3. Embedding cosine similarity   (nomic-embed-text via existing EmbeddingsClient)

import * as natural from 'natural';
import { EmbeddingsClient } from '../rag';

const stemmer = natural.PorterStemmer;
const tokenizer = new natural.WordTokenizer();

/** Cosine similarity between two equal-length vectors */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]; normA += a[i] ** 2; normB += b[i] ** 2;
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

/** Tokenise text and return a set of Porter-stemmed tokens */
function stemmedSet(text: string): Set<string> {
  const tokens = tokenizer.tokenize(text.toLowerCase()) ?? [];
  return new Set(tokens.map(t => stemmer.stem(t)));
}

export class SemanticValidator {
  private embeddingsClient?: EmbeddingsClient;
  readonly semanticThreshold: number;

  constructor(embeddingsClient?: EmbeddingsClient, semanticThreshold = 0.72) {
    this.embeddingsClient  = embeddingsClient;
    this.semanticThreshold = semanticThreshold;
  }

  // ─── Tier 1: Stemmer ───────────────────────────────────────────────────────

  /**
   * Check if a single keyword (no pipes) matches the response via Porter stemming.
   * Example: keyword "teacher" → stem "teacher"; response "teaching" → stem "teach"
   * These don't match exactly, so we also check shared-prefix heuristic:
   * if both stems share a prefix of ≥ 4 chars it counts as a match.
   */
  checkStemMatch(response: string, keyword: string): boolean {
    if (/^\d+$/.test(keyword)) return false;   // numbers handled by word-boundary elsewhere

    const kwStem = stemmer.stem(keyword.toLowerCase());
    const respStems = stemmedSet(response);

    if (respStems.has(kwStem)) return true;

    // Prefix heuristic: avoid false positives on short stems
    for (const rStem of respStems) {
      const prefix = kwStem.length <= rStem.length
        ? kwStem : rStem;
      const other  = kwStem.length <= rStem.length
        ? rStem  : kwStem;
      if (prefix.length >= 4 && other.startsWith(prefix)) return true;
    }
    return false;
  }

  // ─── Tier 2: Persona pronoun ───────────────────────────────────────────────

  /**
   * If the expected keyword is the conversation persona's first or last name and
   * the response is entirely second-person ("You are…", "Your role is…"), treat it
   * as a match — the assistant correctly addresses the user without repeating their name.
   */
  checkPersonaPronoun(response: string, keyword: string, personaName: string): boolean {
    if (!personaName || !keyword) return false;
    const kw = keyword.toLowerCase().trim();
    // Keyword must be part of the persona's name
    const personaParts = personaName.toLowerCase().split(/\s+/);
    if (!personaParts.includes(kw)) return false;

    const lower = response.toLowerCase().trimStart();
    // Response uses second-person address
    return (
      lower.startsWith('you ') || lower.startsWith("you're") ||
      lower.startsWith('your ') || lower.includes(' you ') ||
      lower.includes(' your ') || lower.includes(' you.')
    );
  }

  // ─── Tier 3: Embedding similarity ─────────────────────────────────────────

  /**
   * Build a natural-language assertion sentence for a keyword group so that
   * nomic-embed-text can compare it semantically against the model's response.
   * E.g. keyword "backend" + question "What does Priya specialise in?" →
   *      "The answer includes: backend (e.g. backend developer, server-side)"
   */
  private assertionFor(keyword: string, question: string): string {
    return `The response to "${question.slice(0, 120)}" mentions: ${keyword}`;
  }

  async checkEmbeddingSimilarity(
    response: string,
    keyword: string,
    question: string,
  ): Promise<{ matched: boolean; score: number }> {
    if (!this.embeddingsClient) return { matched: false, score: 0 };
    try {
      const assertion = this.assertionFor(keyword, question);
      const [aEmb, rEmb] = await Promise.all([
        this.embeddingsClient.embed(assertion),
        this.embeddingsClient.embed(response.slice(0, 600)),
      ]);
      const score = cosineSimilarity(aEmb, rEmb);
      return { matched: score >= this.semanticThreshold, score };
    } catch {
      return { matched: false, score: 0 };
    }
  }

  // ─── Full pipeline ─────────────────────────────────────────────────────────

  /**
   * Check a single keyword (no pipes) through all semantic tiers.
   * Returns the first tier that succeeds, or 'none' if all fail.
   */
  async checkKeywordSemantic(
    response: string,
    keyword: string,
    question: string,
    personaName: string,
  ): Promise<{ matched: boolean; method: string }> {
    // Tier 1 — stemmer
    if (this.checkStemMatch(response, keyword)) {
      return { matched: true, method: 'stem' };
    }
    // Tier 2 — persona pronoun
    if (personaName && this.checkPersonaPronoun(response, keyword, personaName)) {
      return { matched: true, method: 'persona' };
    }
    // Tier 3 — embedding similarity
    const { matched, score } = await this.checkEmbeddingSimilarity(response, keyword, question);
    if (matched) {
      return { matched: true, method: `embed(${score.toFixed(2)})` };
    }
    return { matched: false, method: 'none' };
  }
}

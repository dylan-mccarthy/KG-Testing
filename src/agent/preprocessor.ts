// MessagePreprocessor: classifies intent, annotates KG entities with protected properties,
// detects explicit update patterns, and runs regex supplement extraction.
// This runs BEFORE the LLM extractor to inject context that prevents past-tense background
// information from overwriting current KG state.

import { IKnowledgeGraph } from '../graphs';

export type MessageIntent = 'introduce' | 'elaborate' | 'update' | 'background' | 'confirm' | 'general';

export interface ExplicitUpdate {
  entity: string;
  attribute: string;
  newValue: string;
  oldValue?: string;
}

export interface AnnotatedEntity {
  name: string;
  nodeId: string;
  /** Canonical attributes that exist on the node and should not be overwritten */
  protectedProps: Record<string, string>;
}

export interface SupplementFact {
  entity: string;
  attribute: string;
  value: string;
  isUpdate: boolean;
}

export interface PreprocessResult {
  intent: MessageIntent;
  annotatedEntities: AnnotatedEntity[];
  explicitUpdates: ExplicitUpdate[];
  supplementFacts: SupplementFact[];
  hasBackgroundSentences: boolean;
  /** Context string to inject into the LLM extraction prompt */
  extractionContext: string;
}

// ─── Intent patterns ─────────────────────────────────────────────────────────

const CONFIRM_PATTERNS = [
  /just confirm(?:ing)?/i, /to (?:be )?clear\b/i, /to confirm\b/i,
  /clarify(?:ing)?\b/i, /(?:reconfirm|restate)/i,
];
const UPDATE_PATTERNS = [
  /(?:has been|have been|was just|just been) (?:promoted|appointed|moved|transferred|assigned)/i,
  /(?:is|are) now\b/i,
  /(?:budget|deadline|target|date) (?:is now|has been updated|changed to|now set)/i,
  /(?:promoted|appointed|moving|moved) (?:to|as|into)\b/i,
  /(?:big news|great news|bad news)\b/i,
  /just (?:got|received|accepted|passed|completed|decided)/i,
  /i(?:'ve| have) (?:decided|confirmed|accepted|moved|been promoted)/i,
  /i(?:'m| am) (?:now\b|moving to)/i,
  /scope (?:change|expansion|update)/i,
];
const BACKGROUND_PATTERNS = [
  /spent \d+ years? (?:at|with|in)/i,
  /graduated from\b/i,
  /before (?:joining|coming to|this)/i,
  /(?:previously|used to) (?:work|be|serve)/i,
  /prior to (?:joining|coming)/i,
  /background (?:in|at|is|:)/i,
  /(?:early|prior|previous) (?:career|role|job)/i,
  /(?:started|began) (?:her|his|their) career/i,
  /(?:then|later) (?:moved into|joined|transitioned)/i,
];
const ELABORATE_PATTERNS = [
  /\b\w+'s background\b/i, /more (?:about|on|detail)/i, /to add (?:more|some)/i,
  /(?:additional|further) (?:info|detail|context)/i,
  /one thing i should add/i, /i should (?:also )?mention/i,
  /let me (?:also )?add/i,
];

// ─── Explicit update detectors ───────────────────────────────────────────────

/** Normalise monetary values to a plain integer string: "$550,000" / "$550k" → "550000" */
export function normalizeMonetary(val: string): string {
  const clean = val.replace(/[$,\s]/g, '');
  if (/k$/i.test(clean)) return String(parseFloat(clean) * 1000);
  if (/m$/i.test(clean)) return String(parseFloat(clean) * 1_000_000);
  return clean;
}

// ─── Simple Levenshtein for entity fuzzy matching ────────────────────────────

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      dp[j] = a[i-1] === b[j-1] ? prev : 1 + Math.min(prev, dp[j], dp[j-1]);
      prev = temp;
    }
  }
  return dp[n];
}

// ─── Protected attributes that background/elaborate turns should not overwrite ──

const PROTECTED_ATTRS = ['role', 'company', 'location', 'project', 'budget', 'eng_level'];

// ─── MessagePreprocessor ─────────────────────────────────────────────────────

export class MessagePreprocessor {

  /** Classify the primary intent of a user message */
  classifyIntent(message: string): MessageIntent {
    if (CONFIRM_PATTERNS.some(p => p.test(message)))    return 'confirm';
    if (UPDATE_PATTERNS.some(p => p.test(message)))     return 'update';
    if (BACKGROUND_PATTERNS.some(p => p.test(message))) return 'background';
    if (ELABORATE_PATTERNS.some(p => p.test(message)))  return 'elaborate';
    return 'general';
  }

  /**
   * Find proper names in the message that match existing KG nodes.
   * Returns each with its current protected properties so the extraction prompt
   * can be told "do not overwrite role=X for Lena Park".
   */
  annotateEntities(message: string, graph: IKnowledgeGraph): AnnotatedEntity[] {
    const candidates = new Set<string>();

    // Multi-word proper names (e.g. "Lena Park", "Project Atlas")
    let m: RegExpExecArray | null;
    const multi = /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g;
    while ((m = multi.exec(message)) !== null) candidates.add(m[1]);

    // Single capitalised names (3+ chars)
    const single = /\b([A-Z][a-z]{2,})\b/g;
    while ((m = single.exec(message)) !== null) candidates.add(m[1]);

    const results: AnnotatedEntity[] = [];
    for (const name of candidates) {
      const found = graph.searchByLabel(name, 3);
      if (found.length === 0) continue;
      const best = found[0].node;
      // Only annotate if name is a close match to the node label
      const dist = levenshtein(name.toLowerCase(), best.label.toLowerCase());
      const maxDist = Math.floor(Math.max(name.length, best.label.length) * 0.35);
      if (dist > maxDist) continue;

      const protectedProps: Record<string, string> = {};
      for (const attr of PROTECTED_ATTRS) {
        if (best.properties[attr] != null) {
          protectedProps[attr] = String(best.properties[attr]);
        }
      }
      if (Object.keys(protectedProps).length > 0) {
        results.push({ name, nodeId: best.id, protectedProps });
      }
    }
    return results;
  }

  /**
   * Detect explicit "X is now Y (was Z)" value mutations.
   * These are injected as force-update facts to guarantee the KG gets the new value.
   */
  detectExplicitUpdates(message: string): ExplicitUpdate[] {
    const updates: ExplicitUpdate[] = [];

    // Budget: "the Atlas budget is now $550,000 (up from $400,000)"
    // "budget is now $550k" / "budget has been updated to $550,000"
    const budgetRe = /(?:the\s+)?(?:([A-Za-z]+)\s+)?budget\s+(?:is now|has been (?:updated|changed) to|now[^$\d]*?)\s*\$?([\d,]+\.?\d*[kKmM]?)(?:\s*\((?:up|down) from\s*\$?([\d,]+\.?\d*[kKmM]?)\))?/gi;
    let bm: RegExpExecArray | null;
    while ((bm = budgetRe.exec(message)) !== null) {
      const projectHint = bm[1];
      const newVal = normalizeMonetary(bm[2]);
      const oldVal = bm[3] ? normalizeMonetary(bm[3]) : undefined;
      if (newVal) {
        // Resolve entity: look for "Project X" first, then "X update/budget/scope" (e.g. "Atlas update")
        const ctxMatch =
          message.match(/[Pp]roject\s+([A-Z][a-zA-Z]+)/) ||
          message.match(/(?:the\s+)?([A-Z][a-zA-Z]+)\s+(?:update|budget|scope|expansion|change)/);
        const entity = ctxMatch
          ? `Project ${ctxMatch[1]}`
          : (projectHint ? `Project ${projectHint.charAt(0).toUpperCase() + projectHint.slice(1)}` : '');
        if (entity) updates.push({ entity, attribute: 'budget', newValue: newVal, oldValue: oldVal });
      }
    }

    // Location: "I'm moving to San Francisco" / "now based in Sydney" / "I've moved to Jurong"
    const locRe = /(?:i(?:'m| am|'ve| have)?\s+)?(?:moving to|moved to|now (?:based in|living in)|relocated? to|living in)\s+([\w\s]+?)(?:\s*[.,!?\n]|$)/gi;
    let lm: RegExpExecArray | null;
    while ((lm = locRe.exec(message)) !== null) {
      const loc = lm[1].trim();
      if (loc.length > 2) updates.push({ entity: '_persona', attribute: 'location', newValue: loc });
    }

    // Role: "promoted Lena Park into the Frontend Lead role"
    // "Lena Park has been promoted to Frontend Lead"
    const roleRe = /(?:promote(?:d)?|appoint(?:ed)?)\s+([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)?)\s+(?:to|as|into)\s+(?:the\s+)?([^.,\n]{3,40?}?(?:Lead|Manager|Director|Engineer|Officer|Head|VP|CTO|CFO|CEO))(?:\s+role)?(?:[.,\n\s]|$)/gi;
    let rm: RegExpExecArray | null;
    while ((rm = roleRe.exec(message)) !== null) {
      updates.push({ entity: rm[1].trim(), attribute: 'role', newValue: rm[2].trim() });
    }

    // Level update: "Maya is now L6" / "promoted to L6"
    const levelRe = /(?:([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)?)\s+is now\s+|promoted to\s+)(L\d)/gi;
    let lvl: RegExpExecArray | null;
    while ((lvl = levelRe.exec(message)) !== null) {
      if (lvl[1]) updates.push({ entity: lvl[1].trim(), attribute: 'eng_level', newValue: lvl[2] });
    }

    return updates;
  }

  /** True if the message contains sentences describing past/background information */
  hasBackgroundContext(message: string): boolean {
    return BACKGROUND_PATTERNS.some(p => p.test(message));
  }

  /**
   * Run regex-based supplement extraction for patterns the LLM commonly misses.
   * Returned facts are merged with LLM facts (LLM wins on conflict unless forceUpdate).
   */
  supplementExtract(message: string, persona: string): SupplementFact[] {
    const facts: SupplementFact[] = [];

    // Pet: "I have a golden retriever named Biscuit who is 2 years old"
    const petRe = /(?:have|has|own|got)\s+a\s+([\w\s]+?)\s+named\s+([A-Z][a-zA-Z]+)(?:[,\s]+(?:who|that)\s+is\s+(\d+)\s+years?\s+old)?/i;
    const petM = message.match(petRe);
    if (petM) {
      const species = petM[1].trim();
      const petName = petM[2].trim();
      const age     = petM[3];
      if (persona) facts.push({ entity: persona, attribute: 'pet',     value: `${species} named ${petName}`, isUpdate: false });
      facts.push(    { entity: petName,  attribute: 'species', value: species, isUpdate: false });
      if (age) facts.push({ entity: petName, attribute: 'age', value: age, isUpdate: false });
    }

    // Project name: "project called HealthSync" / "project named Orion"
    const projRe = /(?:project|app|product|initiative)\s+(?:called|named|is called|is)\s+([A-Z][A-Za-z0-9]+)/i;
    const projM = message.match(projRe);
    if (projM) {
      facts.push({ entity: projM[1].trim(), attribute: 'type', value: 'project', isUpdate: false });
    }

    // Language level: "I'm at B2 level" / "just passed my B2 exam"
    const langRe = /(?:at|passed my|completed my|achieved)\s+([A-C]\d)\s+(?:level|exam|test)/i;
    const langM = message.match(langRe);
    if (langM && persona) {
      facts.push({ entity: persona, attribute: 'level', value: langM[1], isUpdate: true });
    }

    return facts;
  }

  /**
   * Build an enriched context string to prepend to the LLM extraction prompt.
   * Tells the LLM: what intent this message has, which entities are protected, and
   * which explicit updates to apply.
   */
  buildExtractionContext(
    intent: MessageIntent,
    annotated: AnnotatedEntity[],
    explicitUpdates: ExplicitUpdate[],
    hasBackground: boolean,
  ): string {
    const parts: string[] = [];

    // Background guard — past-tense sentences should use past_* attributes
    if (intent === 'background' || (intent !== 'update' && intent !== 'confirm' && hasBackground)) {
      parts.push(
        'CONTEXT: This message contains BACKGROUND / PAST information. ' +
        'Use "past_role", "past_company", "education" for past facts from sentences like ' +
        '"spent X years at Y as Z" or "graduated from". ' +
        'Do NOT use "role" or "company" for these past facts. ' +
        'Only use "role"/"company"/"location" if the sentence contains "is now", "currently", or "just".'
      );
    }

    // Entity pre-annotations: tell the LLM what's already in the graph
    for (const ann of annotated) {
      const propStr = Object.entries(ann.protectedProps)
        .map(([k, v]) => `${k}="${v}"`)
        .join(', ');
      const guard = (intent === 'background' || intent === 'elaborate')
        ? 'DO NOT overwrite these — extract new background attributes under past_role/past_company/education.'
        : 'Only overwrite these if the message text explicitly states they changed.';
      parts.push(`ENTITY GUARD [${ann.name}]: already has ${propStr}. ${guard}`);
    }

    // Explicit update hints: tell the LLM the exact new value to extract
    for (const upd of explicitUpdates) {
      parts.push(
        `EXPLICIT UPDATE: Extract { entity: "${upd.entity}", attribute: "${upd.attribute}", ` +
        `value: "${upd.newValue}", isUpdate: true }` +
        (upd.oldValue ? ` (replacing old value "${upd.oldValue}")` : '') + '.'
      );
    }

    return parts.join('\n');
  }

  /** Full pre-processing pipeline */
  preprocess(message: string, graph: IKnowledgeGraph, persona: string): PreprocessResult {
    const intent            = this.classifyIntent(message);
    const annotatedEntities = this.annotateEntities(message, graph);
    const explicitUpdates   = this.detectExplicitUpdates(message);
    const supplementFacts   = this.supplementExtract(message, persona);
    const hasBackgroundSentences = this.hasBackgroundContext(message);
    const extractionContext = this.buildExtractionContext(
      intent, annotatedEntities, explicitUpdates, hasBackgroundSentences
    );

    return { intent, annotatedEntities, explicitUpdates, supplementFacts, hasBackgroundSentences, extractionContext };
  }
}

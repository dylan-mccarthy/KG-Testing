// Test harness runner: orchestrates natural-conversation scenarios across graph configs

import { RunConfig } from '../config';
import { createGraph, GraphStats } from '../graphs';
import { KGAgent, TurnRecord } from '../agent';
import { OllamaClient } from '../agent/ollama';
import { EmbeddingsClient, VectorStore, RAGAgent } from '../rag';
import { TestScenario, TurnType, ALL_SCENARIOS } from '../scenarios';

export interface TurnResult {
  turn: number;
  type: TurnType;
  userMessage: string;
  kgMemoryInjected: string;
  kgResultCount: number;
  factsExtracted: number;
  kgNodesBefore: number;
  kgNodesAfter: number;
  assistantResponse: string;
  expectedKeywords: string[];
  forbiddenKeywords: string[];
  missingKeywords: string[];
  foundForbiddenKeywords: string[];
  passed: boolean;
  contextTokensUsed: number;
  messagesDropped: number;
  latencyMs: number;
  error?: string;
}

export interface ScenarioResult {
  scenarioId: string;
  scenarioName: string;
  category: string;
  runLabel: string;
  turns: TurnResult[];
  // Accuracy broken down by turn type
  recallAccuracy: number;
  updateAccuracy: number;
  verifyAccuracy: number;
  distractorAccuracy: number;
  overallAccuracy: number;
  // KG growth metrics
  finalNodeCount: number;
  finalEdgeCount: number;
  avgNodesAddedPerTell: number;
  avgLatencyMs: number;
  graphStats: GraphStats;
}

export interface RunResult {
  runLabel: string;
  config: RunConfig;
  scenarioResults: ScenarioResult[];
  totalTurns: number;
  overallAccuracy: number;
  recallAccuracy: number;
  updateAccuracy: number;
  verifyAccuracy: number;
  avgLatencyMs: number;
  totalContextTokens: number;
  startTime: number;
  endTime: number;
  errors: string[];
}

export class TestRunner {
  private verbose: boolean;
  private judgeClient?: OllamaClient;

  constructor(verbose = true, judgeConfig?: { endpoint: string; model: string }) {
    this.verbose = verbose;
    if (judgeConfig) {
      this.judgeClient = new OllamaClient({
        endpoint: judgeConfig.endpoint,
        model: judgeConfig.model,
        temperature: 0,
        timeoutMs: 20000,
      });
    }
  }

  private log(msg: string): void {
    if (this.verbose) console.log(msg);
  }

  /**
   * LLM judge: ask the model if the response semantically satisfies the expected keywords.
   * Used as a rescue when keyword matching fails on recall/verify turns.
   * Returns true if the judge says the answer is correct.
   */
  private async llmJudge(
    question: string,
    response: string,
    expectedKeywords: string[],
  ): Promise<boolean> {
    if (!this.judgeClient || expectedKeywords.length === 0) return false;
    const expected = expectedKeywords.join(', ');
    const prompt = `/no_think
Does the following response answer the question and include information about: ${expected}?
Question: "${question}"
Response: "${response.slice(0, 500)}"
Answer with ONLY "yes" or "no".`;
    try {
      const result = await this.judgeClient.chat([
        { role: 'user', content: prompt }
      ], { temperature: 0, noThink: true, timeoutMs: 15000 });
      const content = result.message?.content?.toLowerCase().trim() ?? '';
      return content.startsWith('yes');
    } catch {
      return false;
    }
  }

  /**
   * Check keyword matching with AND-word logic for multi-word phrases.
   * Supports OR-alternatives with pipe: "math|maths|mathematics" passes if ANY variant found.
   * Pure-number keywords ("5", "550") use word-boundary matching to avoid false positives.
   * "vp product" (space-separated) matches "VP of Product" because both words are present.
   */
  private checkKeywords(response: string, expectedKeywords: string[]): {
    found: boolean;
    missing: string[];
  } {
    if (expectedKeywords.length === 0) return { found: true, missing: [] };
    const lower = response.toLowerCase();

    const missing = expectedKeywords.filter(kw => {
      // OR-alternatives: "math|maths|mathematics" — pass if ANY variant matches
      const alternatives = kw.toLowerCase().split('|');
      return !alternatives.some(alt => this.matchesSingle(lower, alt));
    });

    return { found: missing.length === 0, missing };
  }

  /** Match a single keyword (no pipes) against a lowercased response string */
  private matchesSingle(lower: string, kw: string): boolean {
    // Pure-number keywords: use word-boundary to prevent "5" matching "51" or "2025"
    if (/^\d+$/.test(kw)) {
      return new RegExp(`(?<![\\d])${kw}(?![\\d])`).test(lower);
    }
    // Direct substring match
    if (lower.includes(kw)) return true;
    // Multi-word: all space-separated tokens must appear somewhere in the response
    const words = kw.split(/\s+/).filter(w => w.length > 0);
    if (words.length > 1) {
      return words.every(word => lower.includes(word));
    }
    return false;
  }

  /**
   * Phrases that indicate a forbidden value is being cited in HISTORICAL context only
   * (e.g., "moved FROM Seattle", "Omar WAS the lead", "formerly located in X").
   * If ALL sentences containing the forbidden keyword have at least one such marker,
   * the forbidden word is treated as a correct historical reference — not a failure.
   */
  private static readonly HISTORICAL_MARKERS = [
    'previously', 'used to', 'formerly', 'no longer', 'was the', 'were the',
    'had been', 'has since', 'moved from', 'relocated from', 'transition from',
    'changed from', 'replaced by', 'replacing', 'instead of', 'prior to',
    'from .* to', 'outdated', 'is now', 'now in', 'was replaced', 'took over',
    'was promoted out', 'stepped down', 'before the', 'when it was', 'used to be',
    'was formerly', 'now called', 'rebranded',
    // departure / vacancy language
    'resigned', 'resignation', 'vacancy left', 'left by', 'left the role',
    'left the team', 'left the company', 'departure', 'departing', 'departed',
    'vacated', 'filled by', 'fill the vacancy', 'to fill the',
  ];

  /**
   * Check that forbidden keywords do NOT appear in the response (word-boundary aware).
   * Context-aware: if the keyword appears ONLY in sentences with clear historical/
   * relocation markers (e.g., "moved from Seattle", "Omar was previously"), it is
   * allowed — the model correctly gives the current state while acknowledging history.
   */
  private checkForbidden(response: string, forbiddenKeywords: string[]): string[] {
    return forbiddenKeywords.filter(kw => {
      const kwLower = kw.toLowerCase();
      const escaped = kwLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const kwRegex = new RegExp(`(?<![\\w])${escaped}(?![\\w])`, 'i');

      // Not found at all → not forbidden
      if (!kwRegex.test(response)) return false;

      // Found — split into sentences and check context of each occurrence
      const sentences = response
        .split(/(?<=[.!?\n])\s*/)
        .filter(s => s.trim().length > 0);

      const relevantSentences = sentences.filter(s => kwRegex.test(s));
      if (relevantSentences.length === 0) return false;

      // If ALL sentences containing the forbidden word also have a historical marker,
      // the response is giving correct current info while referencing history → allow it.
      const allHistorical = relevantSentences.every(sentence => {
        const sLower = sentence.toLowerCase();
        return TestRunner.HISTORICAL_MARKERS.some(marker => {
          // Markers with .* are treated as regex patterns
          if (marker.includes('.*')) {
            try { return new RegExp(marker).test(sLower); } catch { return false; }
          }
          return sLower.includes(marker);
        });
      });

      return !allHistorical; // true = forbidden found in non-historical context = fail
    });
  }

  /** Determine if a turn passed its evaluation criteria.
   *  Uses LLM judge as fallback when keyword matching fails on recall/verify turns. */
  private async evaluateTurn(
    type: TurnType,
    record: TurnRecord,
    expectedKeywords: string[],
    forbiddenKeywords: string[],
  ): Promise<{ passed: boolean; missing: string[]; foundForbidden: string[]; judgeUsed: boolean }> {
    const response = record.assistantResponse;
    const { missing } = this.checkKeywords(response, expectedKeywords);
    const foundForbidden = this.checkForbidden(response, forbiddenKeywords);
    let judgeUsed = false;

    let passed = false;
    switch (type) {
      case 'tell':
        passed = (record.kgNodesAfter > record.kgNodesBefore) ||
          (record.extraction?.facts.length ?? 0) > 0;
        break;
      case 'recall': {
        const keywordPass = missing.length === 0 && foundForbidden.length === 0;
        if (keywordPass) {
          passed = true;
        } else if (missing.length > 0 && foundForbidden.length === 0 && this.judgeClient) {
          // Keyword failed — try LLM judge as rescue
          const judgePass = await this.llmJudge(record.userMessage, response, expectedKeywords);
          if (judgePass) { judgeUsed = true; passed = true; }
        }
        break;
      }
      case 'update':
        passed = (record.extraction?.nodesUpdated ?? 0) > 0 ||
          (record.extraction?.facts.some(f => f.isUpdate) ?? false) ||
          missing.length === 0;
        break;
      case 'verify_update': {
        const keywordPass = missing.length === 0 && foundForbidden.length === 0;
        if (keywordPass) {
          passed = true;
        } else if (missing.length > 0 && foundForbidden.length === 0 && this.judgeClient) {
          const judgePass = await this.llmJudge(record.userMessage, response, expectedKeywords);
          if (judgePass) { judgeUsed = true; passed = true; }
        }
        break;
      }
      case 'distractor':
        passed = !record.error && response.length > 10 && foundForbidden.length === 0;
        break;
    }

    return { passed, missing, foundForbidden, judgeUsed };
  }

  async runScenario(
    scenario: TestScenario,
    agent: KGAgent | RAGAgent,
    runLabel: string
  ): Promise<ScenarioResult> {
    this.log(`  📋 Scenario: ${scenario.name}`);

    const turnResults: TurnResult[] = [];
    agent.resetHistory();

    for (let i = 0; i < scenario.turns.length; i++) {
      const turn = scenario.turns[i];
      const typeEmoji = { tell: '📝', recall: '🔍', update: '✏️', verify_update: '✅', distractor: '💬' }[turn.type];
      this.log(`    ${typeEmoji} Turn ${i + 1}/${scenario.turns.length} [${turn.type}]: "${turn.userMessage.slice(0, 55)}..."`);

      // Only extract facts on tell/update turns — skipping extraction for recall/distractor saves ~15s/turn
      const shouldExtract = turn.type === 'tell' || turn.type === 'update';
      const record: TurnRecord = await agent.chat(turn.userMessage, shouldExtract, turn.type);
      const { passed, missing, foundForbidden, judgeUsed } = await this.evaluateTurn(
        turn.type, record, turn.expectedKeywords, turn.forbiddenKeywords
      );

      const result: TurnResult = {
        turn: i + 1,
        type: turn.type,
        userMessage: turn.userMessage,
        kgMemoryInjected: record.kgMemoryInjected,
        kgResultCount: record.kgResults.length,
        factsExtracted: record.extraction?.facts.length ?? 0,
        kgNodesBefore: record.kgNodesBefore,
        kgNodesAfter: record.kgNodesAfter,
        assistantResponse: record.assistantResponse,
        expectedKeywords: turn.expectedKeywords,
        forbiddenKeywords: turn.forbiddenKeywords,
        missingKeywords: missing,
        foundForbiddenKeywords: foundForbidden,
        passed,
        contextTokensUsed: record.contextTokensUsed,
        messagesDropped: record.messagesDropped,
        latencyMs: record.latencyMs,
        error: record.error,
      };

      const statusEmoji = passed ? '✅' : '❌';
      const kgDelta = record.kgNodesAfter - record.kgNodesBefore;
      const extracted = result.factsExtracted;
      const judgeTag = judgeUsed ? ' [judge✓]' : '';
      this.log(`    ${statusEmoji} [${record.latencyMs}ms, KG +${kgDelta} nodes, extracted ${extracted} facts, ${record.kgResults.length} KG hits]${judgeTag}`);

      if (!passed) {
        if (missing.length > 0) this.log(`       Missing: ${missing.join(', ')}`);
        if (foundForbidden.length > 0) this.log(`       Forbidden found: ${foundForbidden.join(', ')}`);
      }

      turnResults.push(result);
    }

    // Compute per-type accuracy
    const byType = (type: TurnType) => turnResults.filter(t => t.type === type);
    const accuracy = (turns: TurnResult[]) => turns.length > 0
      ? turns.filter(t => t.passed).length / turns.length : 1;

    const recallTurns = [...byType('recall'), ...byType('verify_update')];
    const updateTurns = byType('update');
    const verifyTurns = byType('verify_update');
    const distractorTurns = byType('distractor');
    const evalTurns = turnResults.filter(t => t.type !== 'tell');

    const graphStats = 'getGraph' in agent
      ? agent.getGraph().getStats()
      : { nodeCount: 0, edgeCount: 0, maxDepth: 0, avgDegree: 0, relationTypes: [] };
    const tellTurns = byType('tell');
    const totalKgGrowth = tellTurns.reduce((s, t) => s + (t.kgNodesAfter - t.kgNodesBefore), 0);

    const scResult: ScenarioResult = {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      category: scenario.category,
      runLabel,
      turns: turnResults,
      recallAccuracy: accuracy(byType('recall')),
      updateAccuracy: accuracy(updateTurns),
      verifyAccuracy: accuracy(verifyTurns),
      distractorAccuracy: accuracy(distractorTurns),
      overallAccuracy: accuracy(evalTurns),
      finalNodeCount: graphStats.nodeCount,
      finalEdgeCount: graphStats.edgeCount,
      avgNodesAddedPerTell: tellTurns.length > 0 ? totalKgGrowth / tellTurns.length : 0,
      avgLatencyMs: turnResults.reduce((s, t) => s + t.latencyMs, 0) / turnResults.length,
      graphStats,
    };

    this.log(`    📊 Accuracy: recall=${(scResult.recallAccuracy * 100).toFixed(0)}% update=${(scResult.updateAccuracy * 100).toFixed(0)}% verify=${(scResult.verifyAccuracy * 100).toFixed(0)}% | KG: ${graphStats.nodeCount} nodes`);
    return scResult;
  }

  async runConfig(config: RunConfig, scenarios?: TestScenario[]): Promise<RunResult> {
    const startTime = Date.now();
    const memLabel = config.memoryType ?? config.graph.type;
    this.log(`\n🔬 Run: ${config.runLabel}`);
    this.log(`   Memory: ${memLabel} | Ctx: ${config.agent.maxContextTokens}`);

    const scenariosToRun = scenarios || ALL_SCENARIOS;
    const scenarioResults: ScenarioResult[] = [];
    const errors: string[] = [];

    const isRag = config.memoryType === 'rag';

    for (const scenario of scenariosToRun) {
      try {
        let agent: KGAgent | RAGAgent;
        if (isRag) {
          const embedder = new EmbeddingsClient({
            endpoint: config.agent.ollamaEndpoint,
            model: config.agent.embeddingModel ?? 'nomic-embed-text',
          });
          const store = new VectorStore(embedder);
          agent = new RAGAgent(store, config.agent, `${config.runLabel}_${scenario.id}`);
        } else {
          const graph = createGraph(config.graph, `${config.runLabel}_${scenario.id}`);
          agent = new KGAgent(graph, config.agent, `${config.runLabel}_${scenario.id}`);
        }
        const result = await this.runScenario(scenario, agent, config.runLabel);
        scenarioResults.push(result);
      } catch (err) {
        const msg = `Scenario ${scenario.id} failed: ${err instanceof Error ? err.message : String(err)}`;
        errors.push(msg);
        this.log(`  ❌ ${msg}`);
      }
    }

    const endTime = Date.now();
    const totalTurns = scenarioResults.reduce((s, r) => s + r.turns.length, 0);

    const avg = (vals: number[]) => vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
    const overallAccuracy = avg(scenarioResults.map(r => r.overallAccuracy));
    const recallAccuracy = avg(scenarioResults.map(r => r.recallAccuracy));
    const updateAccuracy = avg(scenarioResults.map(r => r.updateAccuracy));
    const verifyAccuracy = avg(scenarioResults.map(r => r.verifyAccuracy));
    const avgLatencyMs = avg(scenarioResults.map(r => r.avgLatencyMs));
    const totalContextTokens = scenarioResults.reduce((sum, s) =>
      sum + s.turns.reduce((ts, t) => ts + t.contextTokensUsed, 0), 0);

    this.log(`\n  📊 Run complete: overall=${(overallAccuracy * 100).toFixed(1)}% recall=${(recallAccuracy * 100).toFixed(1)}% update=${(updateAccuracy * 100).toFixed(1)}% verify=${(verifyAccuracy * 100).toFixed(1)}%`);

    return {
      runLabel: config.runLabel,
      config,
      scenarioResults,
      totalTurns,
      overallAccuracy,
      recallAccuracy,
      updateAccuracy,
      verifyAccuracy,
      avgLatencyMs,
      totalContextTokens,
      startTime,
      endTime,
      errors,
    };
  }

  async runMatrix(configs: RunConfig[], scenarios?: TestScenario[]): Promise<RunResult[]> {
    this.log(`\n🚀 Starting research matrix: ${configs.length} configurations × ${(scenarios || ALL_SCENARIOS).length} scenarios`);
    const results: RunResult[] = [];
    for (let i = 0; i < configs.length; i++) {
      this.log(`\n[${i + 1}/${configs.length}] Config: ${configs[i].runLabel}`);
      results.push(await this.runConfig(configs[i], scenarios));
    }
    return results;
  }
}

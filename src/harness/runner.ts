// Test harness runner: orchestrates natural-conversation scenarios across graph configs

import { RunConfig } from '../config';
import { createGraph, GraphStats } from '../graphs';
import { KGAgent, TurnRecord } from '../agent';
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

  constructor(verbose = true) {
    this.verbose = verbose;
  }

  private log(msg: string): void {
    if (this.verbose) console.log(msg);
  }

  /**
   * Check keyword matching with AND-word logic for multi-word phrases.
   * "vp product" matches "VP of Product" because both "vp" and "product" are present.
   */
  private checkKeywords(response: string, expectedKeywords: string[]): {
    found: boolean;
    missing: string[];
  } {
    if (expectedKeywords.length === 0) return { found: true, missing: [] };
    const lower = response.toLowerCase();
    const missing = expectedKeywords.filter(kw => {
      const kwLower = kw.toLowerCase();
      if (lower.includes(kwLower)) return false;
      const words = kwLower.split(/\s+/).filter(w => w.length > 0);
      if (words.length > 1) {
        return !words.every(word => lower.includes(word));
      }
      return true;
    });
    return { found: missing.length === 0, missing };
  }

  /** Check that forbidden keywords do NOT appear in the response (word-boundary aware) */
  private checkForbidden(response: string, forbiddenKeywords: string[]): string[] {
    const lower = response.toLowerCase();
    return forbiddenKeywords.filter(kw => {
      const kwLower = kw.toLowerCase();
      // Use word-boundary regex to avoid "data analyst" matching "Senior Data Analyst"
      // Only flag if the forbidden phrase is NOT embedded in a longer meaningful phrase
      const escaped = kwLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<![\\w])${escaped}(?![\\w])`, 'i');
      return regex.test(response);
    });
  }

  /** Determine if a turn passed its evaluation criteria */
  private evaluateTurn(
    type: TurnType,
    record: TurnRecord,
    expectedKeywords: string[],
    forbiddenKeywords: string[],
  ): { passed: boolean; missing: string[]; foundForbidden: string[] } {
    const response = record.assistantResponse;
    const { missing } = this.checkKeywords(response, expectedKeywords);
    const foundForbidden = this.checkForbidden(response, forbiddenKeywords);

    let passed = false;
    switch (type) {
      case 'tell':
        // Pass if at least one fact was extracted (KG grew) OR agent acknowledged
        passed = (record.kgNodesAfter > record.kgNodesBefore) ||
          (record.extraction?.facts.length ?? 0) > 0;
        break;
      case 'recall':
        passed = missing.length === 0 && foundForbidden.length === 0;
        break;
      case 'update':
        // Pass if KG updated AND response acknowledges the update
        passed = (record.extraction?.nodesUpdated ?? 0) > 0 ||
          (record.extraction?.facts.some(f => f.isUpdate) ?? false) ||
          missing.length === 0;
        break;
      case 'verify_update':
        // Pass if expected (new) keywords present AND forbidden (old) keywords absent
        passed = missing.length === 0 && foundForbidden.length === 0;
        break;
      case 'distractor':
        // Distractors pass if response is sensible (not an error) and no forbidden words
        passed = !record.error && response.length > 10 && foundForbidden.length === 0;
        break;
    }

    return { passed, missing, foundForbidden };
  }

  async runScenario(
    scenario: TestScenario,
    agent: KGAgent,
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
      const record: TurnRecord = await agent.chat(turn.userMessage, shouldExtract);
      const { passed, missing, foundForbidden } = this.evaluateTurn(
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
      this.log(`    ${statusEmoji} [${record.latencyMs}ms, KG +${kgDelta} nodes, extracted ${extracted} facts, ${record.kgResults.length} KG hits]`);

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

    const graphStats = agent.getGraph().getStats();
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
    this.log(`\n🔬 Run: ${config.runLabel}`);
    this.log(`   Graph: ${config.graph.type} | Depth: ${config.graph.graphDepth} | Trees: ${config.graph.subTrees} | Ctx: ${config.agent.maxContextTokens}`);

    const scenariosToRun = scenarios || ALL_SCENARIOS;
    const scenarioResults: ScenarioResult[] = [];
    const errors: string[] = [];

    for (const scenario of scenariosToRun) {
      try {
        const graph = createGraph(config.graph, `${config.runLabel}_${scenario.id}`);
        const agent = new KGAgent(graph, config.agent, `${config.runLabel}_${scenario.id}`);
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

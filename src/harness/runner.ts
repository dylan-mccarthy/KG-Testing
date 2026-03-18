// Test harness runner: orchestrates scenarios across graph configs

import { RunConfig } from '../config';
import { createGraph, GraphStats } from '../graphs';
import { KGAgent, TurnRecord } from '../agent';
import { TestScenario, ALL_SCENARIOS } from '../scenarios';

export interface TurnResult {
  turn: number;
  userMessage: string;
  kgMemoryInjected: string;
  kgResultCount: number;
  assistantResponse: string;
  expectedKeywords: string[];
  missingKeywords: string[];
  keywordsFound: boolean;
  isDistractor: boolean;
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
  keywordAccuracy: number;
  avgLatencyMs: number;
  graphStats: GraphStats;
}

export interface RunResult {
  runLabel: string;
  config: RunConfig;
  scenarioResults: ScenarioResult[];
  totalTurns: number;
  avgKeywordAccuracy: number;
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
   * Check if expected keywords appear in response (case-insensitive).
   *
   * For single-word keywords: substring match (e.g. "paris" in "The city is Paris")
   * For multi-word keywords: ALL words must appear anywhere in the response, order-independent.
   *   e.g. "vp product" matches "VP of Product" and "Product VP"
   * This handles natural language variation where words may not be adjacent.
   */
  private checkKeywords(response: string, expectedKeywords: string[]): {
    found: boolean;
    missing: string[];
  } {
    if (expectedKeywords.length === 0) return { found: true, missing: [] };
    const lower = response.toLowerCase();
    const missing = expectedKeywords.filter(kw => {
      const kwLower = kw.toLowerCase();
      // First try direct substring match (handles exact phrases and single words)
      if (lower.includes(kwLower)) return false;
      // For multi-word keywords, check all component words appear anywhere in response
      const words = kwLower.split(/\s+/).filter(w => w.length > 0);
      if (words.length > 1) {
        return !words.every(word => lower.includes(word));
      }
      return true;
    });
    return { found: missing.length === 0, missing };
  }

  async runScenario(
    scenario: TestScenario,
    agent: KGAgent,
    runLabel: string
  ): Promise<ScenarioResult> {
    this.log(`  📋 Scenario: ${scenario.name}`);

    // Setup graph data
    scenario.setupGraph(agent.getGraph());
    const graphStats = agent.getGraph().getStats();

    this.log(`    Graph loaded: ${graphStats.nodeCount} nodes, ${graphStats.edgeCount} edges`);

    const turnResults: TurnResult[] = [];
    agent.resetHistory();

    for (let i = 0; i < scenario.turns.length; i++) {
      const turn = scenario.turns[i];
      this.log(`    Turn ${i + 1}/${scenario.turns.length}: "${turn.userMessage.slice(0, 60)}..."`);

      const record: TurnRecord = await agent.chat(turn.userMessage);
      const { found, missing } = this.checkKeywords(record.assistantResponse, turn.expectedKeywords);
      const isDistractor = turn.expectedKeywords.length === 0;

      const result: TurnResult = {
        turn: i + 1,
        userMessage: turn.userMessage,
        kgMemoryInjected: record.kgMemoryInjected,
        kgResultCount: record.kgResults.length,
        assistantResponse: record.assistantResponse,
        expectedKeywords: turn.expectedKeywords,
        missingKeywords: missing,
        keywordsFound: found,
        isDistractor,
        contextTokensUsed: record.contextTokensUsed,
        messagesDropped: record.messagesDropped,
        latencyMs: record.latencyMs,
        error: record.error,
      };

      const emoji = isDistractor ? '➖' : (found ? '✅' : '❌');
      this.log(`    ${emoji} [${record.latencyMs}ms, ${record.contextTokensUsed} ctx tokens, ${record.kgResults.length} KG hits]`);

      if (!found && !isDistractor) {
        this.log(`       Missing: ${missing.join(', ')}`);
      }

      turnResults.push(result);
    }

    const factTurns = turnResults.filter(t => !t.isDistractor);
    const accuracy = factTurns.length > 0
      ? factTurns.filter(t => t.keywordsFound).length / factTurns.length
      : 1;
    const avgLatency = turnResults.reduce((s, t) => s + t.latencyMs, 0) / turnResults.length;

    this.log(`    ✓ Accuracy: ${(accuracy * 100).toFixed(1)}% | Avg latency: ${avgLatency.toFixed(0)}ms`);

    return {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      category: scenario.category,
      runLabel,
      turns: turnResults,
      keywordAccuracy: accuracy,
      avgLatencyMs: avgLatency,
      graphStats,
    };
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
        // Create a fresh graph and agent for each scenario to avoid data bleed
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
    const avgKeywordAccuracy = scenarioResults.length > 0
      ? scenarioResults.reduce((s, r) => s + r.keywordAccuracy, 0) / scenarioResults.length
      : 0;
    const avgLatencyMs = scenarioResults.length > 0
      ? scenarioResults.reduce((s, r) => s + r.avgLatencyMs, 0) / scenarioResults.length
      : 0;
    const totalContextTokens = scenarioResults.reduce((sum, s) =>
      sum + s.turns.reduce((ts, t) => ts + t.contextTokensUsed, 0), 0);

    this.log(`\n  📊 Run complete: ${(avgKeywordAccuracy * 100).toFixed(1)}% accuracy, ${avgLatencyMs.toFixed(0)}ms avg latency`);

    return {
      runLabel: config.runLabel,
      config,
      scenarioResults,
      totalTurns,
      avgKeywordAccuracy,
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
      this.log(`\n[${i + 1}/${configs.length}] Running config: ${configs[i].runLabel}`);
      const result = await this.runConfig(configs[i], scenarios);
      results.push(result);
    }

    return results;
  }
}

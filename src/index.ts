#!/usr/bin/env ts-node
/**
 * KG-Testing: Main entry point
 *
 * Usage:
 *   ts-node src/index.ts              # Quick test (1 scenario, 1 graph type)
 *   ts-node src/index.ts --quick      # Quick test with all scenarios
 *   ts-node src/index.ts --research   # Full matrix (all configs × all scenarios)
 *   ts-node src/index.ts --graph=simple --context=800  # Specific config
 */

import { OllamaClient } from './agent/ollama';
import { TestRunner } from './harness/runner';
import { MarkdownReporter } from './harness/reporter';
import { DEFAULT_AGENT_CONFIG, DEFAULT_GRAPH_CONFIG, RunConfig, buildResearchMatrix, GraphType } from './config';
import { ALL_SCENARIOS, getScenario, engineeringOrgDeepDive } from './scenarios';

const OLLAMA_ENDPOINT = 'http://192.168.86.27:11434';
const MODEL = 'qwen3.5:4b';
const OUTPUT_DIR = './results';

// Phase 5: half of qwen3.5:4b's 262,144-token context window
const HALF_MAX_CTX = 131072;

async function checkOllama(): Promise<boolean> {
  const client = new OllamaClient({ endpoint: OLLAMA_ENDPOINT, model: MODEL });
  console.log(`\n🔌 Checking Ollama connection at ${OLLAMA_ENDPOINT}...`);
  const ok = await client.ping();
  if (ok) {
    console.log(`✅ Ollama connected — model: ${MODEL}`);
  } else {
    console.error(`❌ Cannot connect to Ollama at ${OLLAMA_ENDPOINT}`);
  }
  return ok;
}

function parseArgs(): {
  mode: 'quick' | 'single' | 'research' | 'phase5' | 'phase6' | 'phase7' | 'phase8' | 'phase9' | 'phase10' | 'phase11';
  graphType?: GraphType;
  contextTokens?: number;
  scenarioId?: string;
} {
  const args = process.argv.slice(2);
  const flags: Record<string, string> = {};
  for (const arg of args) {
    if (arg.startsWith('--')) {
      const [key, val] = arg.slice(2).split('=');
      flags[key] = val || 'true';
    }
  }

  if (flags['research'] === 'true') return { mode: 'research' };
  if (flags['quick'] === 'true') return { mode: 'quick' };
  if (flags['phase5'] === 'true') return { mode: 'phase5' };
  if (flags['phase6'] === 'true') return { mode: 'phase6' };
  if (flags['phase7'] === 'true') return { mode: 'phase7' };
  if (flags['phase8'] === 'true') return { mode: 'phase8' };
  if (flags['phase9'] === 'true') return { mode: 'phase9' };
  if (flags['phase10'] === 'true') return { mode: 'phase10' };
  if (flags['phase11'] === 'true') return { mode: 'phase11' };

  return {
    mode: 'single',
    graphType: (flags['graph'] as GraphType) || 'simple',
    contextTokens: flags['context'] ? parseInt(flags['context']) : 800,
    scenarioId: flags['scenario'],
  };
}

async function runQuick(): Promise<void> {
  console.log('\n⚡ Quick test mode: all scenarios on simple graph, 800 context tokens\n');
  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'simple',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'simple' },
    agent: { ...DEFAULT_AGENT_CONFIG, maxContextTokens: 800 },
    maxTurns: 10,
    outputDir: OUTPUT_DIR,
    runLabel: `quick_simple_${Date.now()}`,
  };

  const result = await runner.runConfig(config, ALL_SCENARIOS);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runSingle(graphType: GraphType, contextTokens: number, scenarioId?: string): Promise<void> {
  const scenarios = scenarioId ? [getScenario(scenarioId)].filter(Boolean) : ALL_SCENARIOS;
  console.log(`\n🔬 Single run: ${graphType} graph, ${contextTokens} ctx tokens, ${scenarios.length} scenario(s)\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: graphType,
    graph: {
      ...DEFAULT_GRAPH_CONFIG,
      type: graphType,
      multiGraph: graphType === 'multi',
      weightedEdges: graphType === 'weighted',
      directed: graphType === 'hierarchical',
    },
    agent: { ...DEFAULT_AGENT_CONFIG, maxContextTokens: contextTokens },
    maxTurns: 10,
    outputDir: OUTPUT_DIR,
    runLabel: `${graphType}_ctx${contextTokens}_${Date.now()}`,
  };

  // @ts-ignore - filtered above
  const result = await runner.runConfig(config, scenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase11(): Promise<void> {
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🏁 PHASE 11: No-historical-narrative prompt + project/budget conflict detection');
  console.log(`   Prompt: "state ONLY current value, not historical values that changed"`);
  console.log(`   Conflict detection: project/budget/location single-holder attr supersession`);
  console.log(`   History: ${HISTORY_CTX.toLocaleString()}t  |  KG: ${KG_CTX.toLocaleString()}t  |  num_ctx: ${NUM_CTX.toLocaleString()}t\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'weighted', weightedEdges: true },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_phase11_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase10(): Promise<void> {
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🏷️  PHASE 10: KG-over-history system prompt priority');
  console.log(`   Fix: agent system prompt now explicitly states KG supersedes conversation history`);
  console.log(`   KG section header updated to "CURRENT STATE — supersedes conversation history"`);
  console.log(`   History: ${HISTORY_CTX.toLocaleString()}t  |  KG: ${KG_CTX.toLocaleString()}t  |  num_ctx: ${NUM_CTX.toLocaleString()}t\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'weighted', weightedEdges: true },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_phase10_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase9(): Promise<void> {
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🏷️  PHASE 9: Improved extraction prompt + fuzzy conflict matching');
  console.log(`   Fixes: canonical attr names in prompt; fuzzy role conflict (includes vs ===)`);
  console.log(`   Extended CANONICAL_ATTRS; Mode-2 checks 'role'/'title' key + role-hint value`);
  console.log(`   History: ${HISTORY_CTX.toLocaleString()}t  |  KG: ${KG_CTX.toLocaleString()}t  |  num_ctx: ${NUM_CTX.toLocaleString()}t\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'weighted', weightedEdges: true },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_phase9_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase8(): Promise<void> {
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🏷️  PHASE 8: Stale-tag cleanup + expanded conflict detection');
  console.log(`   Fixes: updateNode removes old value tokens; markConflictingNodes checks attr names`);
  console.log(`   Canonical attribute normalisation: location/role/project/budget variants unified`);
  console.log(`   History: ${HISTORY_CTX.toLocaleString()}t  |  KG: ${KG_CTX.toLocaleString()}t  |  num_ctx: ${NUM_CTX.toLocaleString()}t\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'weighted', weightedEdges: true },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_phase8_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase7(): Promise<void> {
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🏷️  PHASE 7: Staleness metadata + split-budget context');
  console.log(`   New: isOutdated flag, version tracking, conflict detection, freshness annotations`);
  console.log(`   History: ${HISTORY_CTX.toLocaleString()}t  |  KG: ${KG_CTX.toLocaleString()}t  |  num_ctx: ${NUM_CTX.toLocaleString()}t\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: { ...DEFAULT_GRAPH_CONFIG, type: 'weighted', weightedEdges: true },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_staleness_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase6(): Promise<void> {
  // Split-budget: 4k history (no old values leaking) + 32k KG injection (full current state)
  // num_ctx: 4096 + 32768 + ~2048 system overhead = ~39k → use 40960
  const HISTORY_CTX = 4096;
  const KG_CTX = 32768;
  const NUM_CTX = 40960;

  console.log('\n🔬 PHASE 6: Split-budget context test');
  console.log(`   History: ${HISTORY_CTX.toLocaleString()} tokens  |  KG injection: ${KG_CTX.toLocaleString()} tokens`);
  console.log(`   num_ctx: ${NUM_CTX.toLocaleString()} tokens  |  Method: weighted KG`);
  console.log(`   Scenarios: Engineering Org Deep Dive + all 5 standard scenarios\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: {
      ...DEFAULT_GRAPH_CONFIG,
      type: 'weighted',
      weightedEdges: true,
    },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HISTORY_CTX,
      maxKgTokens: KG_CTX,
      numCtx: NUM_CTX,
      timeoutMs: 120000,
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_split_h${HISTORY_CTX}_kg${KG_CTX}`,
  };

  // Run all standard scenarios + the large-context deep-dive
  const allScenarios = [...ALL_SCENARIOS, engineeringOrgDeepDive];
  const result = await runner.runConfig(config, allScenarios);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runPhase5(): Promise<void> {
  console.log('\n🧠 PHASE 5: Large-context stress test');
  console.log(`   Method: weighted KG  |  Context: ${HALF_MAX_CTX.toLocaleString()} tokens (50% of model max)`);
  console.log(`   Scenario: Engineering Org Deep Dive (48 turns)\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);

  const config: RunConfig = {
    memoryType: 'weighted',
    graph: {
      ...DEFAULT_GRAPH_CONFIG,
      type: 'weighted',
      weightedEdges: true,
    },
    agent: {
      ...DEFAULT_AGENT_CONFIG,
      maxContextTokens: HALF_MAX_CTX,
      numCtx: HALF_MAX_CTX,
      timeoutMs: 300000,   // 5 min per turn — large context inference is slow
    },
    maxTurns: 60,
    outputDir: OUTPUT_DIR,
    runLabel: `weighted_ctx${HALF_MAX_CTX}_phase5`,
  };

  const result = await runner.runConfig(config, [engineeringOrgDeepDive]);
  const reportPath = reporter.writeRunReport(result);
  console.log(`\n📄 Report written: ${reportPath}`);
  console.log(`\n📊 Final: ${(result.overallAccuracy * 100).toFixed(1)}% accuracy across ${result.totalTurns} turns`);
}

async function runResearch(): Promise<void> {
  console.log('\n🚀 FULL RESEARCH MODE: building parameter matrix...\n');
  const matrix = buildResearchMatrix();
  const totalTurns = matrix.length * ALL_SCENARIOS.reduce((s, sc) => s + sc.turns.length, 0);
  console.log(`Total configurations: ${matrix.length}`);
  console.log(`Total scenarios: ${ALL_SCENARIOS.length}`);
  console.log(`Estimated turns: ${totalTurns}\n`);

  const runner = new TestRunner(true);
  const reporter = new MarkdownReporter(OUTPUT_DIR);
  const allResults: import('./harness/runner').RunResult[] = [];

  for (let i = 0; i < matrix.length; i++) {
    const config = matrix[i];
    console.log(`\n[${i + 1}/${matrix.length}] Running config: ${config.runLabel}`);
    const result = await runner.runConfig(config, ALL_SCENARIOS);
    allResults.push(result);

    // Write each config report immediately (resilient to crashes)
    const reportPath = reporter.writeRunReport(result);
    console.log(`  💾 Saved: ${reportPath}`);

    // Write rolling summary after every 4 configs or at the end
    if ((i + 1) % 4 === 0 || i === matrix.length - 1) {
      reporter.writeSummaryReport(allResults, 'research_progress.md');
      console.log(`  📊 Rolling summary updated (${allResults.length}/${matrix.length} configs complete)`);
    }
  }

  // Write final summary
  const summaryPath = reporter.writeSummaryReport(allResults, 'research_summary_final.md');
  console.log(`\n📋 Final summary written: ${summaryPath}`);

  const best = allResults.reduce((b, r) => r.overallAccuracy > b.overallAccuracy ? r : b, allResults[0]);
  console.log(`\n🏆 Best configuration: ${best.runLabel} — ${(best.overallAccuracy * 100).toFixed(1)}%`);
}

async function main(): Promise<void> {
  console.log('═══════════════════════════════════════════════');
  console.log('  KG-Testing: Knowledge Graph Memory Harness  ');
  console.log('═══════════════════════════════════════════════');

  const ok = await checkOllama();
  if (!ok) {
    console.error('\nAborting: Ollama not reachable.');
    process.exit(1);
  }

  const { mode, graphType, contextTokens, scenarioId } = parseArgs();

  switch (mode) {
    case 'quick':
      await runQuick();
      break;
    case 'research':
      await runResearch();
      break;
    case 'phase5':
      await runPhase5();
      break;
    case 'phase6':
      await runPhase6();
      break;
    case 'phase7':
      await runPhase7();
      break;
    case 'phase8':
      await runPhase8();
      break;
    case 'phase9':
      await runPhase9();
      break;
    case 'phase10':
      await runPhase10();
      break;
    case 'phase11':
      await runPhase11();
      break;
    case 'single':
    default:
      await runSingle(graphType || 'simple', contextTokens || 800, scenarioId);
      break;
  }

  console.log('\n✅ Done!');
}

main().catch(err => {
  console.error('\n💥 Fatal error:', err);
  process.exit(1);
});

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
import { ALL_SCENARIOS, getScenario } from './scenarios';

const OLLAMA_ENDPOINT = 'http://192.168.86.27:11434';
const MODEL = 'qwen3.5:4b';
const OUTPUT_DIR = './results';

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
  mode: 'quick' | 'single' | 'research';
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

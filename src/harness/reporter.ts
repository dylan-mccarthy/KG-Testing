// Markdown reporter: converts run results to structured markdown files

import * as fs from 'fs';
import * as path from 'path';
import { RunResult, ScenarioResult, TurnResult } from './runner';

export class MarkdownReporter {
  private outputDir: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
    fs.mkdirSync(outputDir, { recursive: true });
  }

  /** Write a single run result to its own markdown file */
  writeRunReport(result: RunResult): string {
    const filename = `${result.runLabel}.md`;
    const filepath = path.join(this.outputDir, filename);
    const md = this.formatRunReport(result);
    fs.writeFileSync(filepath, md, 'utf-8');
    return filepath;
  }

  /** Write a comparison summary across multiple runs */
  writeSummaryReport(results: RunResult[], filename = 'summary.md'): string {
    const filepath = path.join(this.outputDir, filename);
    const md = this.formatSummaryReport(results);
    fs.writeFileSync(filepath, md, 'utf-8');
    return filepath;
  }

  private formatRunReport(result: RunResult): string {
    const lines: string[] = [];
    const cfg = result.config;

    lines.push(`# Run Report: ${result.runLabel}`);
    lines.push(`\n_Generated: ${new Date(result.startTime).toISOString()}_\n`);

    lines.push('## Configuration\n');
    lines.push('| Parameter | Value |');
    lines.push('|-----------|-------|');
    lines.push(`| Graph Type | \`${cfg.graph.type}\` |`);
    lines.push(`| Graph Depth | ${cfg.graph.graphDepth} |`);
    lines.push(`| Sub-Trees (branching) | ${cfg.graph.subTrees} |`);
    lines.push(`| Multi-Graph | ${cfg.graph.multiGraph} |`);
    lines.push(`| Weighted Edges | ${cfg.graph.weightedEdges} |`);
    lines.push(`| Max Context Tokens | ${cfg.agent.maxContextTokens} |`);
    lines.push(`| Top-K KG Results | ${cfg.agent.topK} |`);
    lines.push(`| Model | \`${cfg.agent.model}\` |`);
    lines.push(`| Temperature | ${cfg.agent.temperature} |`);
    lines.push('');

    lines.push('## Overall Metrics\n');
    lines.push('| Metric | Value |');
    lines.push('|--------|-------|');
    lines.push(`| Total Scenarios | ${result.scenarioResults.length} |`);
    lines.push(`| Total Turns | ${result.totalTurns} |`);
    lines.push(`| Avg Keyword Accuracy | ${(result.avgKeywordAccuracy * 100).toFixed(1)}% |`);
    lines.push(`| Avg Latency | ${result.avgLatencyMs.toFixed(0)}ms |`);
    lines.push(`| Total Runtime | ${((result.endTime - result.startTime) / 1000).toFixed(1)}s |`);
    lines.push(`| Total Context Tokens | ${result.totalContextTokens} |`);
    lines.push('');

    for (const scenario of result.scenarioResults) {
      lines.push(`## Scenario: ${scenario.scenarioName}\n`);
      lines.push(`**Category:** ${scenario.category} | **Accuracy:** ${(scenario.keywordAccuracy * 100).toFixed(1)}% | **Avg Latency:** ${scenario.avgLatencyMs.toFixed(0)}ms\n`);
      lines.push(`**KG Stats:** ${scenario.graphStats.nodeCount} nodes, ${scenario.graphStats.edgeCount} edges, ${scenario.graphStats.relationTypes.join(', ') || 'n/a'}\n`);

      lines.push('### Turn-by-Turn Results\n');

      for (const turn of scenario.turns) {
        const statusEmoji = turn.keywordsFound ? '✅' : (turn.isDistractor ? '➖' : '❌');
        lines.push(`#### Turn ${turn.turn} ${statusEmoji}\n`);
        lines.push(`**User:** ${turn.userMessage}\n`);

        if (turn.kgMemoryInjected) {
          lines.push('<details><summary>📚 KG Memory Injected</summary>\n');
          lines.push('```');
          lines.push(turn.kgMemoryInjected);
          lines.push('```');
          lines.push('</details>\n');
        } else {
          lines.push('_No KG results retrieved_\n');
        }

        lines.push(`**Assistant:** ${turn.assistantResponse}\n`);

        if (!turn.isDistractor) {
          lines.push(`**Expected Keywords:** \`${turn.expectedKeywords.join(', ')}\``);
          lines.push(`**Found:** ${turn.keywordsFound ? '✅ Yes' : '❌ No'}`);
          if (turn.missingKeywords.length > 0) {
            lines.push(`**Missing:** \`${turn.missingKeywords.join(', ')}\``);
          }
        }

        lines.push(`\n_Context tokens: ${turn.contextTokensUsed} | History dropped: ${turn.messagesDropped} | Latency: ${turn.latencyMs}ms_`);

        if (turn.error) {
          lines.push(`\n> ⚠️ **Error:** ${turn.error}`);
        }
        lines.push('');
      }
    }

    return lines.join('\n');
  }

  private formatSummaryReport(results: RunResult[]): string {
    const lines: string[] = [];

    lines.push('# Knowledge Graph Testing — Summary Report');
    lines.push(`\n_Generated: ${new Date().toISOString()}_\n`);
    lines.push(`Total runs: **${results.length}**\n`);

    // Sort by accuracy
    const sorted = [...results].sort((a, b) => b.avgKeywordAccuracy - a.avgKeywordAccuracy);

    lines.push('## Overall Leaderboard\n');
    lines.push('| Rank | Run Label | Graph Type | Ctx Tokens | Accuracy | Avg Latency | Total Turns |');
    lines.push('|------|-----------|------------|------------|----------|-------------|-------------|');

    for (let i = 0; i < sorted.length; i++) {
      const r = sorted[i];
      lines.push(`| ${i + 1} | \`${r.runLabel}\` | ${r.config.graph.type} | ${r.config.agent.maxContextTokens} | ${(r.avgKeywordAccuracy * 100).toFixed(1)}% | ${r.avgLatencyMs.toFixed(0)}ms | ${r.totalTurns} |`);
    }
    lines.push('');

    // Group by graph type
    lines.push('## Results by Graph Type\n');
    const byType: Record<string, RunResult[]> = {};
    for (const r of results) {
      const t = r.config.graph.type;
      if (!byType[t]) byType[t] = [];
      byType[t].push(r);
    }

    for (const [type, runs] of Object.entries(byType)) {
      const avgAcc = runs.reduce((s, r) => s + r.avgKeywordAccuracy, 0) / runs.length;
      const avgLat = runs.reduce((s, r) => s + r.avgLatencyMs, 0) / runs.length;
      lines.push(`### ${type}`);
      lines.push(`- Average Accuracy: **${(avgAcc * 100).toFixed(1)}%**`);
      lines.push(`- Average Latency: **${avgLat.toFixed(0)}ms**`);
      lines.push(`- Run Count: ${runs.length}\n`);
    }

    // Analysis by context limit
    lines.push('## Effect of Context Window Size\n');
    lines.push('| Context Tokens | Avg Accuracy | Avg Messages Dropped |');
    lines.push('|----------------|-------------|----------------------|');
    const byCtx: Record<number, { accuracy: number[]; dropped: number[] }> = {};
    for (const r of results) {
      const ctx = r.config.agent.maxContextTokens;
      if (!byCtx[ctx]) byCtx[ctx] = { accuracy: [], dropped: [] };
      byCtx[ctx].accuracy.push(r.avgKeywordAccuracy);
      const totalDropped = r.scenarioResults.reduce((sum, s) =>
        sum + s.turns.reduce((ts, t) => ts + t.messagesDropped, 0), 0);
      byCtx[ctx].dropped.push(totalDropped / Math.max(r.totalTurns, 1));
    }
    for (const [ctx, data] of Object.entries(byCtx).sort(([a], [b]) => Number(a) - Number(b))) {
      const acc = data.accuracy.reduce((s, x) => s + x, 0) / data.accuracy.length;
      const drop = data.dropped.reduce((s, x) => s + x, 0) / data.dropped.length;
      lines.push(`| ${ctx} | ${(acc * 100).toFixed(1)}% | ${drop.toFixed(2)} |`);
    }
    lines.push('');

    // Per-scenario breakdown
    lines.push('## Scenario Performance Across All Runs\n');
    const scenarioIds = new Set<string>();
    for (const r of results) for (const s of r.scenarioResults) scenarioIds.add(s.scenarioId);

    for (const sid of scenarioIds) {
      const scenarioRuns = results.flatMap(r => r.scenarioResults.filter(s => s.scenarioId === sid));
      if (!scenarioRuns.length) continue;
      const avgAcc = scenarioRuns.reduce((s, r) => s + r.keywordAccuracy, 0) / scenarioRuns.length;
      const best = scenarioRuns.reduce((best, r) => r.keywordAccuracy > best.keywordAccuracy ? r : best, scenarioRuns[0]);
      lines.push(`### ${sid}`);
      lines.push(`- Average accuracy: **${(avgAcc * 100).toFixed(1)}%**`);
      lines.push(`- Best run: \`${best.runLabel}\` (${(best.keywordAccuracy * 100).toFixed(1)}%)\n`);
    }

    // Key findings
    lines.push('## Key Findings\n');
    const bestRun = sorted[0];
    const worstRun = sorted[sorted.length - 1];
    lines.push(`- **Best performing configuration:** \`${bestRun?.runLabel}\` — ${(bestRun?.avgKeywordAccuracy * 100).toFixed(1)}% accuracy`);
    lines.push(`- **Worst performing configuration:** \`${worstRun?.runLabel}\` — ${(worstRun?.avgKeywordAccuracy * 100).toFixed(1)}% accuracy`);

    const ctxEntries = Object.entries(byCtx).sort(([a], [b]) => Number(a) - Number(b));
    if (ctxEntries.length > 1) {
      const smallCtx = ctxEntries[0];
      const largeCtx = ctxEntries[ctxEntries.length - 1];
      const smallAcc = smallCtx[1].accuracy.reduce((s, x) => s + x, 0) / smallCtx[1].accuracy.length;
      const largeAcc = largeCtx[1].accuracy.reduce((s, x) => s + x, 0) / largeCtx[1].accuracy.length;
      const diff = ((largeAcc - smallAcc) * 100).toFixed(1);
      lines.push(`- **Context window impact:** Larger context (${largeCtx[0]} tokens) vs smaller (${smallCtx[0]} tokens) = ${diff}% accuracy difference`);
    }
    lines.push('');

    return lines.join('\n');
  }
}

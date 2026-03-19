// Markdown reporter: structured reports with per-turn-type breakdowns

import * as fs from 'fs';
import * as path from 'path';
import { RunResult, ScenarioResult, TurnResult } from './runner';

export class MarkdownReporter {
  private outputDir: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
    fs.mkdirSync(outputDir, { recursive: true });
  }

  writeRunReport(result: RunResult): string {
    const filename = `${result.runLabel}.md`;
    const filepath = path.join(this.outputDir, filename);
    fs.writeFileSync(filepath, this.formatRunReport(result), 'utf-8');
    return filepath;
  }

  writeSummaryReport(results: RunResult[], filename = 'summary.md'): string {
    const filepath = path.join(this.outputDir, filename);
    fs.writeFileSync(filepath, this.formatSummaryReport(results), 'utf-8');
    return filepath;
  }

  private turnTypeEmoji(type: string): string {
    return { tell: '📝', recall: '🔍', update: '✏️', verify_update: '✅', distractor: '💬' }[type] ?? '❓';
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
    lines.push('');

    lines.push('## Overall Metrics\n');
    lines.push('| Metric | Value |');
    lines.push('|--------|-------|');
    lines.push(`| Total Scenarios | ${result.scenarioResults.length} |`);
    lines.push(`| Total Turns | ${result.totalTurns} |`);
    lines.push(`| Overall Accuracy | ${(result.overallAccuracy * 100).toFixed(1)}% |`);
    lines.push(`| Recall Accuracy | ${(result.recallAccuracy * 100).toFixed(1)}% |`);
    lines.push(`| Update Detection | ${(result.updateAccuracy * 100).toFixed(1)}% |`);
    lines.push(`| Verify-Update Accuracy | ${(result.verifyAccuracy * 100).toFixed(1)}% |`);
    lines.push(`| Avg Latency | ${result.avgLatencyMs.toFixed(0)}ms |`);
    lines.push(`| Total Runtime | ${((result.endTime - result.startTime) / 1000).toFixed(1)}s |`);
    lines.push(`| Total Context Tokens | ${result.totalContextTokens} |`);
    lines.push('');

    for (const scenario of result.scenarioResults) {
      lines.push(`## Scenario: ${scenario.scenarioName}\n`);
      lines.push(`**Category:** ${scenario.category} | **Overall:** ${(scenario.overallAccuracy * 100).toFixed(1)}% | **Recall:** ${(scenario.recallAccuracy * 100).toFixed(1)}% | **Verify-Update:** ${(scenario.verifyAccuracy * 100).toFixed(1)}%\n`);
      lines.push(`**Final KG:** ${scenario.finalNodeCount} nodes, ${scenario.finalEdgeCount} edges | **Avg nodes/tell turn:** ${scenario.avgNodesAddedPerTell.toFixed(1)}\n`);

      lines.push('### Turn-by-Turn Results\n');

      for (const turn of scenario.turns) {
        const emoji = this.turnTypeEmoji(turn.type);
        const statusEmoji = turn.passed ? '✅' : '❌';
        const kgDelta = turn.kgNodesAfter - turn.kgNodesBefore;

        lines.push(`#### Turn ${turn.turn} ${emoji} \`[${turn.type}]\` ${statusEmoji}\n`);
        lines.push(`**User:** ${turn.userMessage}\n`);

        if (turn.factsExtracted > 0) {
          lines.push(`_📥 Facts extracted: **${turn.factsExtracted}** | KG nodes: ${turn.kgNodesBefore} → ${turn.kgNodesAfter} (+${kgDelta})_\n`);
        }

        if (turn.kgMemoryInjected) {
          lines.push('<details><summary>📚 KG Memory Injected</summary>\n');
          lines.push('```');
          lines.push(turn.kgMemoryInjected);
          lines.push('```');
          lines.push('</details>\n');
        }

        lines.push(`**Assistant:** ${turn.assistantResponse}\n`);

        if (turn.type !== 'tell') {
          if (turn.expectedKeywords.length > 0) {
            lines.push(`**Expected:** \`${turn.expectedKeywords.join(', ')}\` → ${turn.missingKeywords.length === 0 ? '✅ All found' : `❌ Missing: \`${turn.missingKeywords.join(', ')}\``}`);
          }
          if (turn.forbiddenKeywords.length > 0) {
            lines.push(`**Forbidden:** \`${turn.forbiddenKeywords.join(', ')}\` → ${turn.foundForbiddenKeywords.length === 0 ? '✅ None found' : `❌ Found: \`${turn.foundForbiddenKeywords.join(', ')}\``}`);
          }
        }

        lines.push(`\n_Context tokens: ${turn.contextTokensUsed} | Dropped: ${turn.messagesDropped} | Latency: ${turn.latencyMs}ms_`);

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

    lines.push('# KG vs RAG Memory Testing — Summary');
    lines.push('## Natural Conversation: Insert, Recall, Update, Verify\n');
    lines.push(`_Generated: ${new Date().toISOString()}_\n`);
    lines.push(`Total runs: **${results.length}**\n`);

    const sorted = [...results].sort((a, b) => b.overallAccuracy - a.overallAccuracy);

    lines.push('## Overall Leaderboard\n');
    lines.push('| Rank | Run Label | Memory | Ctx | Overall | Recall | Update | Verify | Lat |');
    lines.push('|------|-----------|--------|-----|---------|--------|--------|--------|-----|');
    for (let i = 0; i < sorted.length; i++) {
      const r = sorted[i];
      const memType = r.config.memoryType ?? r.config.graph.type;
      lines.push(`| ${i + 1} | \`${r.runLabel}\` | ${memType} | ${r.config.agent.maxContextTokens} | ${(r.overallAccuracy * 100).toFixed(1)}% | ${(r.recallAccuracy * 100).toFixed(1)}% | ${(r.updateAccuracy * 100).toFixed(1)}% | ${(r.verifyAccuracy * 100).toFixed(1)}% | ${r.avgLatencyMs.toFixed(0)}ms |`);
    }
    lines.push('');

    // KG vs RAG comparison
    const ragResults = results.filter(r => r.config.memoryType === 'rag');
    const kgResults = results.filter(r => r.config.memoryType !== 'rag');
    if (ragResults.length > 0 && kgResults.length > 0) {
      lines.push('## KG vs RAG Direct Comparison\n');
      lines.push('| Context | KG Overall | KG Recall | KG Verify | RAG Overall | RAG Recall | RAG Verify | Winner |');
      lines.push('|---------|-----------|-----------|-----------|-------------|------------|------------|--------|');
      const ctxValues = [...new Set(results.map(r => r.config.agent.maxContextTokens))].sort((a, b) => a - b);
      for (const ctx of ctxValues) {
        const kgCtx = kgResults.filter(r => r.config.agent.maxContextTokens === ctx);
        const ragCtx = ragResults.filter(r => r.config.agent.maxContextTokens === ctx);
        if (!kgCtx.length || !ragCtx.length) continue;
        const kgOverall = kgCtx.reduce((s, r) => s + r.overallAccuracy, 0) / kgCtx.length;
        const kgRecall = kgCtx.reduce((s, r) => s + r.recallAccuracy, 0) / kgCtx.length;
        const kgVerify = kgCtx.reduce((s, r) => s + r.verifyAccuracy, 0) / kgCtx.length;
        const ragOverall = ragCtx.reduce((s, r) => s + r.overallAccuracy, 0) / ragCtx.length;
        const ragRecall = ragCtx.reduce((s, r) => s + r.recallAccuracy, 0) / ragCtx.length;
        const ragVerify = ragCtx.reduce((s, r) => s + r.verifyAccuracy, 0) / ragCtx.length;
        const winner = kgOverall > ragOverall ? '🧠 KG' : ragOverall > kgOverall ? '📚 RAG' : '🤝 Tie';
        lines.push(`| ${ctx} | ${(kgOverall * 100).toFixed(1)}% | ${(kgRecall * 100).toFixed(1)}% | ${(kgVerify * 100).toFixed(1)}% | ${(ragOverall * 100).toFixed(1)}% | ${(ragRecall * 100).toFixed(1)}% | ${(ragVerify * 100).toFixed(1)}% | ${winner} |`);
      }
      lines.push('');
    }

    // By memory type
    lines.push('## Results by Memory Type\n');
    const byType: Record<string, RunResult[]> = {};
    for (const r of results) {
      const t = r.config.memoryType ?? r.config.graph.type;
      if (!byType[t]) byType[t] = [];
      byType[t].push(r);
    }
    lines.push('| Memory Type | Runs | Overall | Recall | Update | Verify | Avg Lat |');
    lines.push('|-------------|------|---------|--------|--------|--------|---------|');
    for (const [type, runs] of Object.entries(byType)) {
      const avg = (fn: (r: RunResult) => number) => runs.reduce((s, r) => s + fn(r), 0) / runs.length;
      lines.push(`| ${type} | ${runs.length} | ${(avg(r => r.overallAccuracy) * 100).toFixed(1)}% | ${(avg(r => r.recallAccuracy) * 100).toFixed(1)}% | ${(avg(r => r.updateAccuracy) * 100).toFixed(1)}% | ${(avg(r => r.verifyAccuracy) * 100).toFixed(1)}% | ${avg(r => r.avgLatencyMs).toFixed(0)}ms |`);
    }
    lines.push('');

    // Context window effect
    lines.push('## Effect of Context Window\n');
    const byCtx: Record<number, RunResult[]> = {};
    for (const r of results) {
      const c = r.config.agent.maxContextTokens;
      if (!byCtx[c]) byCtx[c] = [];
      byCtx[c].push(r);
    }
    lines.push('| Context Tokens | Runs | Overall | Recall | Verify-Update |');
    lines.push('|----------------|------|---------|--------|---------------|');
    for (const [ctx, runs] of Object.entries(byCtx).sort(([a], [b]) => Number(a) - Number(b))) {
      const avg = (fn: (r: RunResult) => number) => runs.reduce((s, r) => s + fn(r), 0) / runs.length;
      lines.push(`| ${ctx} | ${runs.length} | ${(avg(r => r.overallAccuracy) * 100).toFixed(1)}% | ${(avg(r => r.recallAccuracy) * 100).toFixed(1)}% | ${(avg(r => r.verifyAccuracy) * 100).toFixed(1)}% |`);
    }
    lines.push('');

    // Memory insertion metrics (KG nodes / RAG chunks)
    lines.push('## Memory Insertion Metrics\n');
    lines.push('| Memory Type | Avg Items/Tell Turn | Avg Final Items |');
    lines.push('|-------------|---------------------|-----------------|');
    for (const [type, runs] of Object.entries(byType)) {
      const allScenarios = runs.flatMap(r => r.scenarioResults);
      const avgPerTell = allScenarios.reduce((s, r) => s + r.avgNodesAddedPerTell, 0) / allScenarios.length;
      const avgNodes = allScenarios.reduce((s, r) => s + r.finalNodeCount, 0) / allScenarios.length;
      const itemLabel = type === 'rag' ? 'chunks' : 'nodes';
      lines.push(`| ${type} | ${avgPerTell.toFixed(2)} ${itemLabel}/turn | ${avgNodes.toFixed(1)} ${itemLabel} |`);
    }
    lines.push('');

    // Per scenario breakdown
    lines.push('## Per-Scenario Performance\n');
    const scenarioIds = [...new Set(results.flatMap(r => r.scenarioResults.map(s => s.scenarioId)))];
    for (const sid of scenarioIds) {
      const allRuns = results.flatMap(r => r.scenarioResults.filter(s => s.scenarioId === sid));
      if (!allRuns.length) continue;
      const avgOverall = allRuns.reduce((s, r) => s + r.overallAccuracy, 0) / allRuns.length;
      const avgRecall = allRuns.reduce((s, r) => s + r.recallAccuracy, 0) / allRuns.length;
      const avgVerify = allRuns.reduce((s, r) => s + r.verifyAccuracy, 0) / allRuns.length;
      const best = allRuns.reduce((b, r) => r.overallAccuracy > b.overallAccuracy ? r : b, allRuns[0]);
      lines.push(`### ${sid}`);
      lines.push(`- Overall: **${(avgOverall * 100).toFixed(1)}%** | Recall: **${(avgRecall * 100).toFixed(1)}%** | Verify-Update: **${(avgVerify * 100).toFixed(1)}%**`);
      lines.push(`- Best run: \`${best.runLabel}\` (${(best.overallAccuracy * 100).toFixed(1)}%)\n`);
    }

    // Key findings
    lines.push('## Key Findings\n');
    const best = sorted[0];
    const worst = sorted[sorted.length - 1];
    lines.push(`- **Best:** \`${best?.runLabel}\` — ${(best?.overallAccuracy * 100).toFixed(1)}% overall (recall: ${(best?.recallAccuracy * 100).toFixed(1)}%, verify: ${(best?.verifyAccuracy * 100).toFixed(1)}%)`);
    lines.push(`- **Worst:** \`${worst?.runLabel}\` — ${(worst?.overallAccuracy * 100).toFixed(1)}%`);

    const ctxNums = Object.keys(byCtx).map(Number).sort((a, b) => a - b);
    if (ctxNums.length > 1) {
      const small = byCtx[ctxNums[0]];
      const large = byCtx[ctxNums[ctxNums.length - 1]];
      const smallAcc = small.reduce((s, r) => s + r.verifyAccuracy, 0) / small.length;
      const largeAcc = large.reduce((s, r) => s + r.verifyAccuracy, 0) / large.length;
      lines.push(`- **Context window effect on verify-update:** ${ctxNums[0]} tokens = ${(smallAcc * 100).toFixed(1)}% vs ${ctxNums[ctxNums.length - 1]} tokens = ${(largeAcc * 100).toFixed(1)}%`);
    }
    if (ragResults.length > 0 && kgResults.length > 0) {
      const avgKg = kgResults.reduce((s, r) => s + r.overallAccuracy, 0) / kgResults.length;
      const avgRag = ragResults.reduce((s, r) => s + r.overallAccuracy, 0) / ragResults.length;
      const diff = ((avgKg - avgRag) * 100).toFixed(1);
      const leader = avgKg > avgRag ? 'KG' : 'RAG';
      lines.push(`- **KG vs RAG (all contexts avg):** KG = ${(avgKg * 100).toFixed(1)}% vs RAG = ${(avgRag * 100).toFixed(1)}% — **${leader} leads by ${Math.abs(parseFloat(diff)).toFixed(1)}%**`);
    }
    lines.push('');

    return lines.join('\n');
  }
}

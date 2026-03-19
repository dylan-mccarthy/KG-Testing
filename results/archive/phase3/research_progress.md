# Knowledge Graph Testing — Phase 2 Summary
## Natural Conversation: Insert, Recall, Update, Verify

_Generated: 2026-03-19T13:19:28.452Z_

Total runs: **16**

## Overall Leaderboard

| Rank | Run Label | Graph | Ctx | Overall | Recall | Update | Verify | Lat |
|------|-----------|-------|-----|---------|--------|--------|--------|-----|
| 1 | `simple_ctx4096` | simple | 4096 | 94.5% | 88.0% | 100.0% | 100.0% | 1208ms |
| 2 | `weighted_ctx1500` | weighted | 1500 | 92.7% | 88.0% | 100.0% | 90.0% | 1222ms |
| 3 | `hierarchical_ctx1500` | hierarchical | 1500 | 90.9% | 80.0% | 100.0% | 100.0% | 1123ms |
| 4 | `multi_ctx1500` | multi | 1500 | 90.9% | 84.0% | 100.0% | 90.0% | 1197ms |
| 5 | `multi_ctx4096` | multi | 4096 | 90.9% | 80.0% | 100.0% | 100.0% | 1170ms |
| 6 | `weighted_ctx4096` | weighted | 4096 | 90.9% | 80.0% | 100.0% | 100.0% | 1299ms |
| 7 | `simple_ctx1500` | simple | 1500 | 89.1% | 76.0% | 100.0% | 100.0% | 1162ms |
| 8 | `multi_ctx800` | multi | 800 | 89.1% | 80.0% | 100.0% | 90.0% | 1028ms |
| 9 | `weighted_ctx800` | weighted | 800 | 88.9% | 84.0% | 100.0% | 80.0% | 1091ms |
| 10 | `hierarchical_ctx4096` | hierarchical | 4096 | 87.1% | 80.0% | 100.0% | 80.0% | 1125ms |
| 11 | `multi_ctx400` | multi | 400 | 86.9% | 79.0% | 100.0% | 80.0% | 983ms |
| 12 | `simple_ctx800` | simple | 800 | 85.5% | 76.0% | 100.0% | 80.0% | 1119ms |
| 13 | `hierarchical_ctx800` | hierarchical | 800 | 85.3% | 80.0% | 100.0% | 70.0% | 1083ms |
| 14 | `hierarchical_ctx400` | hierarchical | 400 | 85.1% | 79.0% | 100.0% | 70.0% | 905ms |
| 15 | `simple_ctx400` | simple | 400 | 83.3% | 71.0% | 100.0% | 80.0% | 1156ms |
| 16 | `weighted_ctx400` | weighted | 400 | 81.6% | 67.0% | 100.0% | 80.0% | 931ms |

## Results by Graph Type

| Graph Type | Runs | Overall | Recall | Update | Verify | Avg Lat |
|------------|------|---------|--------|--------|--------|---------|
| simple | 4 | 88.1% | 77.8% | 100.0% | 90.0% | 1161ms |
| hierarchical | 4 | 87.1% | 79.7% | 100.0% | 80.0% | 1059ms |
| multi | 4 | 89.5% | 80.7% | 100.0% | 90.0% | 1094ms |
| weighted | 4 | 88.5% | 79.8% | 100.0% | 87.5% | 1136ms |

## Effect of Context Window

| Context Tokens | Runs | Overall | Recall | Verify-Update |
|----------------|------|---------|--------|---------------|
| 400 | 4 | 84.2% | 74.0% | 77.5% |
| 800 | 4 | 87.2% | 80.0% | 80.0% |
| 1500 | 4 | 90.9% | 82.0% | 95.0% |
| 4096 | 4 | 90.9% | 82.0% | 95.0% |

## Knowledge Graph Insertion Metrics

| Graph Type | Avg Nodes/Tell Turn | Avg Final Nodes | Avg Final Edges |
|------------|---------------------|-----------------|-----------------|
| simple | 0.94 | 4.3 | 1.9 |
| hierarchical | 1.03 | 4.8 | 2.0 |
| multi | 1.02 | 4.5 | 1.8 |
| weighted | 0.96 | 4.5 | 2.5 |

## Per-Scenario Performance

### personal_introduction
- Overall: **95.5%** | Recall: **97.5%** | Verify-Update: **81.3%**
- Best run: `simple_ctx400` (100.0%)

### team_building
- Overall: **90.3%** | Recall: **82.5%** | Verify-Update: **90.6%**
- Best run: `simple_ctx4096` (100.0%)

### project_tracking
- Overall: **93.8%** | Recall: **93.8%** | Verify-Update: **81.3%**
- Best run: `simple_ctx800` (100.0%)

### social_network
- Overall: **84.1%** | Recall: **66.2%** | Verify-Update: **96.9%**
- Best run: `simple_ctx400` (90.9%)

### mixed_updates
- Overall: **77.8%** | Recall: **57.5%** | Verify-Update: **84.4%**
- Best run: `weighted_ctx1500` (90.9%)

## Key Findings

- **Best:** `simple_ctx4096` — 94.5% overall (recall: 88.0%, verify: 100.0%)
- **Worst:** `weighted_ctx400` — 81.6%
- **Context window effect on verify-update:** 400 tokens = 77.5% vs 4096 tokens = 95.0%

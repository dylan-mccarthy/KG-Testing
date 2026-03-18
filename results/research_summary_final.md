# Knowledge Graph Testing — Phase 2 Summary
## Natural Conversation: Insert, Recall, Update, Verify

_Generated: 2026-03-18T21:10:10.929Z_

Total runs: **12**

## Overall Leaderboard

| Rank | Run Label | Graph | Ctx | Overall | Recall | Update | Verify | Lat |
|------|-----------|-------|-----|---------|--------|--------|--------|-----|
| 1 | `multi_ctx1500` | multi | 1500 | 92.7% | 84.0% | 100.0% | 100.0% | 1129ms |
| 2 | `weighted_ctx1500` | weighted | 1500 | 92.7% | 84.0% | 100.0% | 100.0% | 1229ms |
| 3 | `simple_ctx1500` | simple | 1500 | 90.7% | 84.0% | 100.0% | 90.0% | 1109ms |
| 4 | `hierarchical_ctx1500` | hierarchical | 1500 | 89.1% | 80.0% | 100.0% | 90.0% | 1111ms |
| 5 | `multi_ctx800` | multi | 800 | 89.1% | 80.0% | 100.0% | 90.0% | 998ms |
| 6 | `simple_ctx400` | simple | 400 | 88.9% | 84.0% | 100.0% | 80.0% | 959ms |
| 7 | `simple_ctx800` | simple | 800 | 85.3% | 80.0% | 100.0% | 70.0% | 1036ms |
| 8 | `hierarchical_ctx800` | hierarchical | 800 | 85.3% | 80.0% | 100.0% | 70.0% | 1058ms |
| 9 | `multi_ctx400` | multi | 400 | 85.3% | 80.0% | 100.0% | 70.0% | 920ms |
| 10 | `weighted_ctx800` | weighted | 800 | 85.3% | 80.0% | 100.0% | 70.0% | 1059ms |
| 11 | `hierarchical_ctx400` | hierarchical | 400 | 83.3% | 80.0% | 100.0% | 60.0% | 955ms |
| 12 | `weighted_ctx400` | weighted | 400 | 83.3% | 75.0% | 100.0% | 70.0% | 909ms |

## Results by Graph Type

| Graph Type | Runs | Overall | Recall | Update | Verify | Avg Lat |
|------------|------|---------|--------|--------|--------|---------|
| simple | 3 | 88.3% | 82.7% | 100.0% | 80.0% | 1035ms |
| hierarchical | 3 | 85.9% | 80.0% | 100.0% | 73.3% | 1042ms |
| multi | 3 | 89.0% | 81.3% | 100.0% | 86.7% | 1016ms |
| weighted | 3 | 87.1% | 79.7% | 100.0% | 80.0% | 1066ms |

## Effect of Context Window

| Context Tokens | Runs | Overall | Recall | Verify-Update |
|----------------|------|---------|--------|---------------|
| 400 | 4 | 85.2% | 79.7% | 70.0% |
| 800 | 4 | 86.2% | 80.0% | 75.0% |
| 1500 | 4 | 91.3% | 83.0% | 95.0% |

## Knowledge Graph Insertion Metrics

| Graph Type | Avg Nodes/Tell Turn | Avg Final Nodes | Avg Final Edges |
|------------|---------------------|-----------------|-----------------|
| simple | 0.92 | 4.3 | 1.8 |
| hierarchical | 1.01 | 4.6 | 2.1 |
| multi | 0.98 | 4.4 | 2.3 |
| weighted | 0.93 | 4.5 | 1.8 |

## Per-Scenario Performance

### personal_introduction
- Overall: **96.2%** | Recall: **98.3%** | Verify-Update: **83.3%**
- Best run: `simple_ctx1500` (100.0%)

### team_building
- Overall: **91.7%** | Recall: **83.3%** | Verify-Update: **95.8%**
- Best run: `simple_ctx400` (100.0%)

### project_tracking
- Overall: **91.7%** | Recall: **97.9%** | Verify-Update: **62.5%**
- Best run: `hierarchical_ctx1500` (100.0%)

### social_network
- Overall: **85.6%** | Recall: **71.7%** | Verify-Update: **91.7%**
- Best run: `simple_ctx400` (90.9%)

### mixed_updates
- Overall: **72.7%** | Recall: **53.3%** | Verify-Update: **66.7%**
- Best run: `simple_ctx1500` (81.8%)

## Key Findings

- **Best:** `multi_ctx1500` — 92.7% overall (recall: 84.0%, verify: 100.0%)
- **Worst:** `weighted_ctx400` — 83.3%
- **Context window effect on verify-update:** 400 tokens = 70.0% vs 1500 tokens = 95.0%

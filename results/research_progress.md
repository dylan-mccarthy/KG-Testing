# Knowledge Graph Testing — Summary Report

_Generated: 2026-03-18T16:58:03.162Z_

Total runs: **4**

## Overall Leaderboard

| Rank | Run Label | Graph Type | Ctx Tokens | Accuracy | Avg Latency | Total Turns |
|------|-----------|------------|------------|----------|-------------|-------------|
| 1 | `simple_depth2_trees2_ctx400` | simple | 400 | 100.0% | 2457ms | 54 |
| 2 | `simple_depth2_trees4_ctx400` | simple | 400 | 96.3% | 3146ms | 54 |
| 3 | `simple_depth2_trees2_ctx1500` | simple | 1500 | 96.0% | 4749ms | 54 |
| 4 | `simple_depth2_trees2_ctx800` | simple | 800 | 94.2% | 3318ms | 54 |

## Results by Graph Type

### simple
- Average Accuracy: **96.6%**
- Average Latency: **3417ms**
- Run Count: 4

## Effect of Context Window Size

| Context Tokens | Avg Accuracy | Avg Messages Dropped |
|----------------|-------------|----------------------|
| 400 | 98.2% | 9.52 |
| 800 | 94.2% | 0.19 |
| 1500 | 96.0% | 0.00 |

## Scenario Performance Across All Runs

### personal_facts
- Average accuracy: **97.7%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### world_knowledge
- Average accuracy: **100.0%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### entity_relations
- Average accuracy: **92.5%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### temporal_sequence
- Average accuracy: **97.9%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### multi_hop
- Average accuracy: **95.0%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

## Key Findings

- **Best performing configuration:** `simple_depth2_trees2_ctx400` — 100.0% accuracy
- **Worst performing configuration:** `simple_depth2_trees2_ctx800` — 94.2% accuracy
- **Context window impact:** Larger context (1500 tokens) vs smaller (400 tokens) = -2.2% accuracy difference

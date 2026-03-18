# Knowledge Graph Testing — Summary Report

_Generated: 2026-03-18T17:15:32.902Z_

Total runs: **8**

## Overall Leaderboard

| Rank | Run Label | Graph Type | Ctx Tokens | Accuracy | Avg Latency | Total Turns |
|------|-----------|------------|------------|----------|-------------|-------------|
| 1 | `simple_depth2_trees2_ctx400` | simple | 400 | 100.0% | 2457ms | 54 |
| 2 | `simple_depth2_trees4_ctx800` | simple | 800 | 98.0% | 3528ms | 54 |
| 3 | `simple_depth4_trees2_ctx800` | simple | 800 | 98.0% | 2698ms | 54 |
| 4 | `simple_depth2_trees4_ctx400` | simple | 400 | 96.3% | 3146ms | 54 |
| 5 | `simple_depth2_trees4_ctx1500` | simple | 1500 | 96.3% | 5557ms | 54 |
| 6 | `simple_depth2_trees2_ctx1500` | simple | 1500 | 96.0% | 4749ms | 54 |
| 7 | `simple_depth4_trees2_ctx400` | simple | 400 | 96.0% | 7891ms | 54 |
| 8 | `simple_depth2_trees2_ctx800` | simple | 800 | 94.2% | 3318ms | 54 |

## Results by Graph Type

### simple
- Average Accuracy: **96.9%**
- Average Latency: **4168ms**
- Run Count: 8

## Effect of Context Window Size

| Context Tokens | Avg Accuracy | Avg Messages Dropped |
|----------------|-------------|----------------------|
| 400 | 97.4% | 9.30 |
| 800 | 96.7% | 0.24 |
| 1500 | 96.2% | 0.00 |

## Scenario Performance Across All Runs

### personal_facts
- Average accuracy: **98.9%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### world_knowledge
- Average accuracy: **98.8%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### entity_relations
- Average accuracy: **91.3%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### temporal_sequence
- Average accuracy: **97.9%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### multi_hop
- Average accuracy: **97.5%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

## Key Findings

- **Best performing configuration:** `simple_depth2_trees2_ctx400` — 100.0% accuracy
- **Worst performing configuration:** `simple_depth2_trees2_ctx800` — 94.2% accuracy
- **Context window impact:** Larger context (1500 tokens) vs smaller (400 tokens) = -1.3% accuracy difference

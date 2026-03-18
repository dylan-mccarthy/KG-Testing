# Knowledge Graph Testing — Summary Report

_Generated: 2026-03-18T18:05:42.667Z_

Total runs: **20**

## Overall Leaderboard

| Rank | Run Label | Graph Type | Ctx Tokens | Accuracy | Avg Latency | Total Turns |
|------|-----------|------------|------------|----------|-------------|-------------|
| 1 | `simple_depth2_trees2_ctx400` | simple | 400 | 100.0% | 2457ms | 54 |
| 2 | `simple_depth4_trees2_ctx1500` | simple | 1500 | 100.0% | 3277ms | 54 |
| 3 | `simple_depth2_trees4_ctx800` | simple | 800 | 98.0% | 3528ms | 54 |
| 4 | `simple_depth4_trees2_ctx800` | simple | 800 | 98.0% | 2698ms | 54 |
| 5 | `simple_depth4_trees4_ctx400` | simple | 400 | 98.0% | 6138ms | 54 |
| 6 | `simple_depth2_trees4_ctx400` | simple | 400 | 96.3% | 3146ms | 54 |
| 7 | `simple_depth2_trees4_ctx1500` | simple | 1500 | 96.3% | 5557ms | 54 |
| 8 | `simple_depth4_trees4_ctx800` | simple | 800 | 96.3% | 3820ms | 54 |
| 9 | `hierarchical_depth2_trees4_ctx1500` | hierarchical | 1500 | 96.3% | 5147ms | 54 |
| 10 | `simple_depth2_trees2_ctx1500` | simple | 1500 | 96.0% | 4749ms | 54 |
| 11 | `simple_depth4_trees2_ctx400` | simple | 400 | 96.0% | 7891ms | 54 |
| 12 | `hierarchical_depth2_trees4_ctx800` | hierarchical | 800 | 94.3% | 4953ms | 54 |
| 13 | `simple_depth2_trees2_ctx800` | simple | 800 | 94.2% | 3318ms | 54 |
| 14 | `simple_depth4_trees4_ctx1500` | simple | 1500 | 94.2% | 4479ms | 54 |
| 15 | `hierarchical_depth2_trees4_ctx400` | hierarchical | 400 | 94.0% | 3394ms | 54 |
| 16 | `hierarchical_depth2_trees2_ctx800` | hierarchical | 800 | 92.2% | 3088ms | 54 |
| 17 | `hierarchical_depth4_trees2_ctx800` | hierarchical | 800 | 92.2% | 3564ms | 54 |
| 18 | `hierarchical_depth4_trees2_ctx400` | hierarchical | 400 | 90.5% | 5534ms | 54 |
| 19 | `hierarchical_depth2_trees2_ctx1500` | hierarchical | 1500 | 90.4% | 5094ms | 54 |
| 20 | `hierarchical_depth2_trees2_ctx400` | hierarchical | 400 | 90.2% | 7848ms | 54 |

## Results by Graph Type

### simple
- Average Accuracy: **96.9%**
- Average Latency: **4255ms**
- Run Count: 12

### hierarchical
- Average Accuracy: **92.5%**
- Average Latency: **4828ms**
- Run Count: 8

## Effect of Context Window Size

| Context Tokens | Avg Accuracy | Avg Messages Dropped |
|----------------|-------------|----------------------|
| 400 | 95.0% | 8.72 |
| 800 | 95.0% | 0.15 |
| 1500 | 95.5% | 0.00 |

## Scenario Performance Across All Runs

### personal_facts
- Average accuracy: **96.4%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### world_knowledge
- Average accuracy: **99.5%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### entity_relations
- Average accuracy: **83.5%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### temporal_sequence
- Average accuracy: **97.5%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### multi_hop
- Average accuracy: **99.0%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

## Key Findings

- **Best performing configuration:** `simple_depth2_trees2_ctx400` — 100.0% accuracy
- **Worst performing configuration:** `hierarchical_depth2_trees2_ctx400` — 90.2% accuracy
- **Context window impact:** Larger context (1500 tokens) vs smaller (400 tokens) = 0.5% accuracy difference

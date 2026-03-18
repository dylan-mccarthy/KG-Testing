# Knowledge Graph Testing — Summary Report

_Generated: 2026-03-18T19:08:21.114Z_

Total runs: **32**

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
| 12 | `hierarchical_depth4_trees4_ctx400` | hierarchical | 400 | 96.0% | 5668ms | 54 |
| 13 | `hierarchical_depth2_trees4_ctx800` | hierarchical | 800 | 94.3% | 4953ms | 54 |
| 14 | `multi_depth2_trees4_ctx400` | multi | 400 | 94.3% | 5122ms | 54 |
| 15 | `simple_depth2_trees2_ctx800` | simple | 800 | 94.2% | 3318ms | 54 |
| 16 | `simple_depth4_trees4_ctx1500` | simple | 1500 | 94.2% | 4479ms | 54 |
| 17 | `multi_depth2_trees4_ctx1500` | multi | 1500 | 94.2% | 5362ms | 54 |
| 18 | `multi_depth4_trees2_ctx800` | multi | 800 | 94.2% | 3478ms | 54 |
| 19 | `hierarchical_depth2_trees4_ctx400` | hierarchical | 400 | 94.0% | 3394ms | 54 |
| 20 | `multi_depth4_trees2_ctx400` | multi | 400 | 94.0% | 7809ms | 54 |
| 21 | `multi_depth2_trees2_ctx400` | multi | 400 | 92.3% | 5727ms | 54 |
| 22 | `multi_depth2_trees4_ctx800` | multi | 800 | 92.3% | 6798ms | 54 |
| 23 | `hierarchical_depth2_trees2_ctx800` | hierarchical | 800 | 92.2% | 3088ms | 54 |
| 24 | `hierarchical_depth4_trees2_ctx800` | hierarchical | 800 | 92.2% | 3564ms | 54 |
| 25 | `hierarchical_depth4_trees2_ctx1500` | hierarchical | 1500 | 92.2% | 5554ms | 54 |
| 26 | `multi_depth2_trees2_ctx1500` | multi | 1500 | 92.2% | 5322ms | 54 |
| 27 | `hierarchical_depth4_trees2_ctx400` | hierarchical | 400 | 90.5% | 5534ms | 54 |
| 28 | `hierarchical_depth2_trees2_ctx1500` | hierarchical | 1500 | 90.4% | 5094ms | 54 |
| 29 | `hierarchical_depth2_trees2_ctx400` | hierarchical | 400 | 90.2% | 7848ms | 54 |
| 30 | `hierarchical_depth4_trees4_ctx800` | hierarchical | 800 | 88.5% | 5629ms | 54 |
| 31 | `hierarchical_depth4_trees4_ctx1500` | hierarchical | 1500 | 88.5% | 4547ms | 54 |
| 32 | `multi_depth2_trees2_ctx800` | multi | 800 | 88.2% | 9329ms | 54 |

## Results by Graph Type

### simple
- Average Accuracy: **96.9%**
- Average Latency: **4255ms**
- Run Count: 12

### hierarchical
- Average Accuracy: **92.1%**
- Average Latency: **5002ms**
- Run Count: 12

### multi
- Average Accuracy: **92.7%**
- Average Latency: **6119ms**
- Run Count: 8

## Effect of Context Window Size

| Context Tokens | Avg Accuracy | Avg Messages Dropped |
|----------------|-------------|----------------------|
| 400 | 94.7% | 8.48 |
| 800 | 93.5% | 0.11 |
| 1500 | 94.0% | 0.00 |

## Scenario Performance Across All Runs

### personal_facts
- Average accuracy: **95.7%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### world_knowledge
- Average accuracy: **99.4%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### entity_relations
- Average accuracy: **80.0%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### temporal_sequence
- Average accuracy: **97.1%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### multi_hop
- Average accuracy: **98.1%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

## Key Findings

- **Best performing configuration:** `simple_depth2_trees2_ctx400` — 100.0% accuracy
- **Worst performing configuration:** `multi_depth2_trees2_ctx800` — 88.2% accuracy
- **Context window impact:** Larger context (1500 tokens) vs smaller (400 tokens) = -0.7% accuracy difference

# Knowledge Graph Testing — Summary Report

_Generated: 2026-03-18T19:23:53.530Z_

Total runs: **48**

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
| 13 | `multi_depth4_trees2_ctx1500` | multi | 1500 | 94.4% | 4172ms | 54 |
| 14 | `hierarchical_depth2_trees4_ctx800` | hierarchical | 800 | 94.3% | 4953ms | 54 |
| 15 | `multi_depth2_trees4_ctx400` | multi | 400 | 94.3% | 5122ms | 54 |
| 16 | `multi_depth4_trees4_ctx1500` | multi | 1500 | 94.3% | 5814ms | 54 |
| 17 | `simple_depth2_trees2_ctx800` | simple | 800 | 94.2% | 3318ms | 54 |
| 18 | `simple_depth4_trees4_ctx1500` | simple | 1500 | 94.2% | 4479ms | 54 |
| 19 | `multi_depth2_trees4_ctx1500` | multi | 1500 | 94.2% | 5362ms | 54 |
| 20 | `multi_depth4_trees2_ctx800` | multi | 800 | 94.2% | 3478ms | 54 |
| 21 | `hierarchical_depth2_trees4_ctx400` | hierarchical | 400 | 94.0% | 3394ms | 54 |
| 22 | `multi_depth4_trees2_ctx400` | multi | 400 | 94.0% | 7809ms | 54 |
| 23 | `multi_depth4_trees4_ctx400` | multi | 400 | 94.0% | 2296ms | 54 |
| 24 | `multi_depth4_trees4_ctx800` | multi | 800 | 94.0% | 4648ms | 54 |
| 25 | `multi_depth2_trees2_ctx400` | multi | 400 | 92.3% | 5727ms | 54 |
| 26 | `multi_depth2_trees4_ctx800` | multi | 800 | 92.3% | 6798ms | 54 |
| 27 | `hierarchical_depth2_trees2_ctx800` | hierarchical | 800 | 92.2% | 3088ms | 54 |
| 28 | `hierarchical_depth4_trees2_ctx800` | hierarchical | 800 | 92.2% | 3564ms | 54 |
| 29 | `hierarchical_depth4_trees2_ctx1500` | hierarchical | 1500 | 92.2% | 5554ms | 54 |
| 30 | `multi_depth2_trees2_ctx1500` | multi | 1500 | 92.2% | 5322ms | 54 |
| 31 | `hierarchical_depth4_trees2_ctx400` | hierarchical | 400 | 90.5% | 5534ms | 54 |
| 32 | `hierarchical_depth2_trees2_ctx1500` | hierarchical | 1500 | 90.4% | 5094ms | 54 |
| 33 | `hierarchical_depth2_trees2_ctx400` | hierarchical | 400 | 90.2% | 7848ms | 54 |
| 34 | `hierarchical_depth4_trees4_ctx800` | hierarchical | 800 | 88.5% | 5629ms | 54 |
| 35 | `hierarchical_depth4_trees4_ctx1500` | hierarchical | 1500 | 88.5% | 4547ms | 54 |
| 36 | `multi_depth2_trees2_ctx800` | multi | 800 | 88.2% | 9329ms | 54 |
| 37 | `weighted_depth2_trees2_ctx400` | weighted | 400 | 0.0% | 1ms | 54 |
| 38 | `weighted_depth2_trees2_ctx800` | weighted | 800 | 0.0% | 1ms | 54 |
| 39 | `weighted_depth2_trees2_ctx1500` | weighted | 1500 | 0.0% | 1ms | 54 |
| 40 | `weighted_depth2_trees4_ctx400` | weighted | 400 | 0.0% | 1ms | 54 |
| 41 | `weighted_depth2_trees4_ctx800` | weighted | 800 | 0.0% | 1ms | 54 |
| 42 | `weighted_depth2_trees4_ctx1500` | weighted | 1500 | 0.0% | 1ms | 54 |
| 43 | `weighted_depth4_trees2_ctx400` | weighted | 400 | 0.0% | 1ms | 54 |
| 44 | `weighted_depth4_trees2_ctx800` | weighted | 800 | 0.0% | 1ms | 54 |
| 45 | `weighted_depth4_trees2_ctx1500` | weighted | 1500 | 0.0% | 1ms | 54 |
| 46 | `weighted_depth4_trees4_ctx400` | weighted | 400 | 0.0% | 1ms | 54 |
| 47 | `weighted_depth4_trees4_ctx800` | weighted | 800 | 0.0% | 1ms | 54 |
| 48 | `weighted_depth4_trees4_ctx1500` | weighted | 1500 | 0.0% | 1ms | 54 |

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
- Average Accuracy: **93.2%**
- Average Latency: **5490ms**
- Run Count: 12

### weighted
- Average Accuracy: **0.0%**
- Average Latency: **1ms**
- Run Count: 12

## Effect of Context Window Size

| Context Tokens | Avg Accuracy | Avg Messages Dropped |
|----------------|-------------|----------------------|
| 400 | 71.0% | 6.35 |
| 800 | 70.2% | 0.08 |
| 1500 | 70.6% | 0.00 |

## Scenario Performance Across All Runs

### personal_facts
- Average accuracy: **71.8%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### world_knowledge
- Average accuracy: **74.4%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### entity_relations
- Average accuracy: **60.0%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### temporal_sequence
- Average accuracy: **72.9%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

### multi_hop
- Average accuracy: **73.7%**
- Best run: `simple_depth2_trees2_ctx400` (100.0%)

## Key Findings

- **Best performing configuration:** `simple_depth2_trees2_ctx400` — 100.0% accuracy
- **Worst performing configuration:** `weighted_depth4_trees4_ctx1500` — 0.0% accuracy
- **Context window impact:** Larger context (1500 tokens) vs smaller (400 tokens) = -0.4% accuracy difference

# KG vs RAG Memory Testing — Summary
## Natural Conversation: Insert, Recall, Update, Verify

_Generated: 2026-03-19T23:02:21.534Z_

Total runs: **20**

## Overall Leaderboard

| Rank | Run Label | Memory | Ctx | Overall | Recall | Update | Verify | Lat |
|------|-----------|--------|-----|---------|--------|--------|--------|-----|
| 1 | `weighted_ctx800` | weighted | 800 | 94.5% | 88.0% | 100.0% | 100.0% | 1132ms |
| 2 | `hierarchical_ctx4096` | hierarchical | 4096 | 92.7% | 84.0% | 100.0% | 100.0% | 1289ms |
| 3 | `simple_ctx1500` | simple | 1500 | 90.9% | 84.0% | 100.0% | 90.0% | 1131ms |
| 4 | `simple_ctx4096` | simple | 4096 | 90.9% | 80.0% | 100.0% | 100.0% | 1313ms |
| 5 | `multi_ctx1500` | multi | 1500 | 90.9% | 80.0% | 100.0% | 100.0% | 1214ms |
| 6 | `multi_ctx4096` | multi | 4096 | 90.9% | 84.0% | 100.0% | 90.0% | 1141ms |
| 7 | `weighted_ctx4096` | weighted | 4096 | 90.9% | 80.0% | 100.0% | 100.0% | 1134ms |
| 8 | `weighted_ctx1500` | weighted | 1500 | 90.7% | 88.0% | 100.0% | 80.0% | 1266ms |
| 9 | `hierarchical_ctx1500` | hierarchical | 1500 | 89.1% | 76.0% | 100.0% | 100.0% | 1155ms |
| 10 | `simple_ctx400` | simple | 400 | 88.9% | 84.0% | 100.0% | 80.0% | 970ms |
| 11 | `hierarchical_ctx400` | hierarchical | 400 | 88.9% | 84.0% | 100.0% | 80.0% | 965ms |
| 12 | `simple_ctx800` | simple | 800 | 87.3% | 80.0% | 100.0% | 80.0% | 1063ms |
| 13 | `rag_ctx1500` | rag | 1500 | 87.3% | 84.0% | 60.0% | 100.0% | 1185ms |
| 14 | `hierarchical_ctx800` | hierarchical | 800 | 87.1% | 80.0% | 100.0% | 80.0% | 1051ms |
| 15 | `weighted_ctx400` | weighted | 400 | 85.3% | 80.0% | 100.0% | 70.0% | 951ms |
| 16 | `rag_ctx4096` | rag | 4096 | 83.6% | 80.0% | 60.0% | 90.0% | 1153ms |
| 17 | `multi_ctx400` | multi | 400 | 83.3% | 71.0% | 100.0% | 80.0% | 946ms |
| 18 | `multi_ctx800` | multi | 800 | 81.6% | 72.0% | 100.0% | 70.0% | 1023ms |
| 19 | `rag_ctx800` | rag | 800 | 77.8% | 76.0% | 40.0% | 80.0% | 1151ms |
| 20 | `rag_ctx400` | rag | 400 | 72.2% | 59.0% | 100.0% | 50.0% | 958ms |

## KG vs RAG Direct Comparison

| Context | KG Overall | KG Recall | KG Verify | RAG Overall | RAG Recall | RAG Verify | Winner |
|---------|-----------|-----------|-----------|-------------|------------|------------|--------|
| 400 | 86.6% | 79.7% | 77.5% | 72.2% | 59.0% | 50.0% | 🧠 KG |
| 800 | 87.6% | 80.0% | 82.5% | 77.8% | 76.0% | 80.0% | 🧠 KG |
| 1500 | 90.4% | 82.0% | 92.5% | 87.3% | 84.0% | 100.0% | 🧠 KG |
| 4096 | 91.4% | 82.0% | 97.5% | 83.6% | 80.0% | 90.0% | 🧠 KG |

## Results by Memory Type

| Memory Type | Runs | Overall | Recall | Update | Verify | Avg Lat |
|-------------|------|---------|--------|--------|--------|---------|
| simple | 4 | 89.5% | 82.0% | 100.0% | 87.5% | 1119ms |
| hierarchical | 4 | 89.5% | 81.0% | 100.0% | 90.0% | 1115ms |
| multi | 4 | 86.7% | 76.8% | 100.0% | 85.0% | 1081ms |
| weighted | 4 | 90.4% | 84.0% | 100.0% | 87.5% | 1120ms |
| rag | 4 | 80.2% | 74.8% | 65.0% | 80.0% | 1112ms |

## Effect of Context Window

| Context Tokens | Runs | Overall | Recall | Verify-Update |
|----------------|------|---------|--------|---------------|
| 400 | 5 | 83.7% | 75.6% | 72.0% |
| 800 | 5 | 85.7% | 79.2% | 82.0% |
| 1500 | 5 | 89.8% | 82.4% | 94.0% |
| 4096 | 5 | 89.8% | 81.6% | 96.0% |

## Memory Insertion Metrics

| Memory Type | Avg Items/Tell Turn | Avg Final Items |
|-------------|---------------------|-----------------|
| simple | 0.90 nodes/turn | 4.5 nodes |
| hierarchical | 1.00 nodes/turn | 4.5 nodes |
| multi | 0.95 nodes/turn | 4.5 nodes |
| weighted | 0.98 nodes/turn | 4.5 nodes |
| rag | 3.00 chunks/turn | 0.0 chunks |

## Per-Scenario Performance

### personal_introduction
- Overall: **93.6%** | Recall: **97.0%** | Verify-Update: **80.0%**
- Best run: `simple_ctx400` (100.0%)

### team_building
- Overall: **90.0%** | Recall: **81.0%** | Verify-Update: **95.0%**
- Best run: `simple_ctx1500` (100.0%)

### project_tracking
- Overall: **93.5%** | Recall: **97.5%** | Verify-Update: **72.5%**
- Best run: `simple_ctx800` (100.0%)

### social_network
- Overall: **84.5%** | Recall: **67.0%** | Verify-Update: **97.5%**
- Best run: `simple_ctx400` (90.9%)

### mixed_updates
- Overall: **74.5%** | Recall: **56.0%** | Verify-Update: **85.0%**
- Best run: `weighted_ctx800` (90.9%)

## Key Findings

- **Best:** `weighted_ctx800` — 94.5% overall (recall: 88.0%, verify: 100.0%)
- **Worst:** `rag_ctx400` — 72.2%
- **Context window effect on verify-update:** 400 tokens = 72.0% vs 4096 tokens = 96.0%
- **KG vs RAG (all contexts avg):** KG = 89.0% vs RAG = 80.2% — **KG leads by 8.8%**

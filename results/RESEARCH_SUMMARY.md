# KG-Testing: Full Research Summary

## Overview

This project systematically tests Knowledge Graph (KG) implementations as AI agent memory,
comparing them against RAG (vector embeddings) across multiple context strategies and improvements.

- **Model**: qwen3.5:4b via Ollama at 192.168.86.27:11434
- **Embedding model**: nomic-embed-text (for RAG phases)
- **Framework**: Node.js + TypeScript
- **Total test turns run**: ~1,800+ across all phases

---

## Phase Progression

| Phase | Config | Overall | Recall | Update | Verify | Deep-dive Verify | Notes |
|-------|--------|---------|--------|--------|--------|-----------------|-------|
| 1–3 | Simple/Hier/Multi/Weighted × ctx400–4096 | up to 94.5% | 88% | 100% | 100% | N/A | Pre-loaded KG, short scenarios |
| 4 best | weighted_ctx800 | **94.5%** | 88% | 100% | 100% | N/A | KG vs RAG: KG leads by 8.8% |
| 4 RAG avg | rag_ctx800–4096 | 80.2% | — | 65% | — | N/A | RAG update accuracy weak at 65% |
| 5 | 131k context | 68.0% | 64% | 100% | 0% | 0% | Model sees all history → cites old values |
| 6 | Split h4k+kg32k | 85.4% | 79% | 100% | 70.8% | 25% | History+KG independent budgets |
| 7 | +Staleness meta | 86.2% | 77.3% | 100% | 79.2% | 25% | isOutdated, version, supersededBy |
| 8 | +Stale tag cleanup | 87.8% | 82.1% | 100% | 75.0% | 0% | updateNode removes old value tokens |
| 9 | +Fuzzy conflict | 86.4% | 77.6% | 100% | 79.2% | 25% | Improved extraction prompt; turn 44 ✅ |
| **10** | **+KG-over-history** | **90.1%** | **80.9%** | **100%** | **91.7%** | **50%** | **Best overall; KG supersedes history** |

---

## Key Findings

### 1. KG consistently beats RAG (Phase 4)
- KG: 89.0% avg vs RAG: 80.2% avg — **8.8% KG advantage**
- RAG update accuracy only 65% (vs KG 100%) — vector stores can't cleanly overwrite facts
- RAG recall improves with context size; KG recall is consistent

### 2. Large context hurts mutation testing (Phase 5)
- At 131k tokens, model sees full history including old values → answers historically
- "Budget was $400k, now $550k" — forbidden keyword "400k" appears even though answer is correct
- Smaller context windows force reliance on KG's current state

### 3. Split-budget context is optimal (Phase 6+)
- `maxHistoryTokens: 4096` + `maxKgTokens: 32768` → best balance
- History trimmed independently of KG injection
- KG can grow large without crowding out recent conversation

### 4. Staleness metadata improves verify accuracy (Phase 7)
- `isOutdated`, `version`, `updatedAt`, `supersededBy` fields on NodeData
- `markConflictingNodes()` marks role-conflicts as outdated on new assignment
- Verify improved from 70.8% → 79.2% (standard scenarios: 100% verify)

### 5. Canonical attribute normalisation improves recall (Phase 8)
- LLM extractor generates inconsistent attribute names ("city" / "location" / "current_location")
- Mapping all variants to canonical keys prevents duplicate facts
- Recall improved from 77.3% → 82.1%

### 6. Fuzzy conflict detection fixes role supersession (Phase 9)
- Exact string match (`===`) misses "new Frontend Lead" vs "Frontend Lead"
- Bidirectional `includes()` match catches partial role strings
- First time turn 44 (Frontend Lead verify) correctly passes ✅

### 7. System prompt priority instruction is the biggest single win (Phase 10)
- Adding explicit "KG supersedes conversation history" instruction: +12.5% verify
- Also updated KG section header to "CURRENT STATE — supersedes conversation history"
- Fixes the "old value in history" problem without requiring shorter windows
- Verify: 79.2% → **91.7%** (+12.5pp); Overall: 86.4% → **90.1%** (+3.7pp)

---

## Remaining Challenges

### Budget historical narrative (turn 45 deep-dive)
- Model says "budget was raised from $400k to $550k" — historically accurate but
  includes forbidden old value
- Fix direction: prompt instruction "state only current value, not historical values"
- Or: soften forbidden check to require old value WITHOUT expected new value

### Long-range recall degrades (deep-dive turns 38–48)
- Facts from turns 1–10 (37+ turns ago) occasionally not retrievable
- KG has 24 nodes but topK injection may not surface the specific needed node
- Fix direction: increase topK, improve tag coverage for specific facts

### Project/assignment supersession (Priya/Beacon turn 47)
- `project` attribute conflict detection not firing (no role-hint in "beacon" value)
- Fix direction: extend conflict detection to `project` attribute key specifically

---

## Architecture Summary

```
User message
    │
    ▼
FactExtractor (Ollama LLM, temp=0)
    │ Extracts structured facts → canonicalized attribute names
    │ markConflictingNodes() → marks old role holders as isOutdated
    ▼
IKnowledgeGraph (weighted graph)
    │ Nodes: {label, properties, tags, version, updatedAt, isOutdated}
    │ updateNode() removes stale tag tokens on value change
    ▼
queryKG() → filters isOutdated nodes → freshness annotations
    │
    ▼
ContextManager (split-budget mode)
    │ History:  max 4,096 tokens (trimmed from oldest)
    │ KG text:  max 32,768 tokens (truncated by line boundary)
    │ Section header: "CURRENT STATE — supersedes conversation history"
    ▼
Ollama (qwen3.5:4b, num_ctx=40960, think=false)
    │
    ▼
Response → appended to history
```

---

## Files

| File | Description |
|------|-------------|
| `src/graphs/` | SimpleGraph, HierarchicalGraph, MultiGraph, WeightedGraph |
| `src/agent/agent.ts` | KGAgent: extract → query → context → LLM |
| `src/agent/extractor.ts` | FactExtractor: canonical attrs, conflict detection |
| `src/agent/context.ts` | ContextManager: split-budget mode |
| `src/rag/` | EmbeddingsClient, VectorStore, RAGAgent |
| `src/scenarios/` | 5 standard + 1 engineering deep-dive (48 turns) |
| `results/` | Per-run markdown reports + this summary |


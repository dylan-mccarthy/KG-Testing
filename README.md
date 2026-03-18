# KG-Testing

A research harness for comparing different **Knowledge Graph** implementations as memory systems for AI agents.

The agent uses [Ollama](https://ollama.ai) with `qwen3.5:4b` and the context window is intentionally limited to force reliance on the knowledge graph for accurate answers.

## Architecture

```
src/
├── graphs/          # KG implementations (Simple, Hierarchical, Multi, Weighted)
├── agent/           # Ollama client + context manager + KG-augmented agent
├── harness/         # Test runner + markdown reporter
├── scenarios/       # 5 multi-turn test scenario suites
└── index.ts         # CLI entry point
results/             # Generated markdown reports
```

## Graph Types

| Type | Description |
|------|-------------|
| `simple` | Adjacency list graph, configurable directed/undirected |
| `hierarchical` | Tree-based graph with configurable depth and branching factor |
| `multi` | Multiple relationship types per node pair with inverse edge support |
| `weighted` | Edge weights with Dijkstra shortest-path and relevance scoring |

## Test Scenarios

| ID | Name | Turns | Category |
|----|------|-------|----------|
| `personal_facts` | Personal Profile Recall | 12 | personal_facts |
| `world_knowledge` | World Knowledge Chain Reasoning | 10 | chain_reasoning |
| `entity_relations` | Organizational Entity Relations | 10 | entity_relations |
| `temporal_sequence` | Historical Timeline Recall | 12 | temporal |
| `multi_hop` | Multi-Hop Knowledge Retrieval | 10 | chain_reasoning |

## Configuration Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `graphDepth` | 3 | Max traversal depth (1–5) |
| `subTrees` | 3 | Branching factor in hierarchical graph (2–8) |
| `multiGraph` | false | Enable multiple relationship types |
| `weightedEdges` | false | Enable edge weight scoring |
| `maxContextTokens` | 800 | LLM context limit (forces KG use) |
| `topK` | 5 | Number of KG results injected per turn |

## Usage

```bash
npm install
# Quick test (all scenarios, simple graph)
npm run dev

# Single run with custom config
npx ts-node src/index.ts --graph=hierarchical --context=400

# Full research matrix
npx ts-node src/index.ts --research
```

## Results

Results are written to `./results/` as markdown files:
- Per-run detail: `{runLabel}.md`
- Research summary: `research_summary_{timestamp}.md`

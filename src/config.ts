// Core configuration types and defaults for the KG testing harness

export type GraphType = 'simple' | 'hierarchical' | 'multi' | 'weighted';
export type MemoryType = GraphType | 'rag';

export interface GraphConfig {
  type: GraphType;
  /** Max depth for hierarchical traversal (1-5) */
  graphDepth: number;
  /** Number of child nodes per parent in hierarchical graph (2-8) */
  subTrees: number;
  /** Enable multiple relationship types per node pair */
  multiGraph: boolean;
  /** Enable edge weights and relevance scoring */
  weightedEdges: boolean;
  /** Directed vs undirected edges */
  directed: boolean;
}

export interface AgentConfig {
  ollamaEndpoint: string;
  model: string;
  embeddingModel: string;
  /** Max tokens kept in conversation context (forces memory use) */
  maxContextTokens: number;
  /** Number of memory results injected per turn */
  topK: number;
  /** Temperature for generation */
  temperature: number;
  /** System prompt prefix */
  systemPrompt?: string;
}

export interface RunConfig {
  memoryType: MemoryType;
  graph: GraphConfig;
  agent: AgentConfig;
  /** Max turns per test scenario */
  maxTurns: number;
  /** Output directory for results */
  outputDir: string;
  /** Run label for grouping results */
  runLabel: string;
}

export const DEFAULT_GRAPH_CONFIG: GraphConfig = {
  type: 'simple',
  graphDepth: 3,
  subTrees: 3,
  multiGraph: false,
  weightedEdges: false,
  directed: false,
};

export const DEFAULT_AGENT_CONFIG: AgentConfig = {
  ollamaEndpoint: 'http://192.168.86.27:11434',
  model: 'qwen3.5:4b',
  embeddingModel: 'nomic-embed-text',
  maxContextTokens: 800,
  topK: 5,
  temperature: 0.3,
};

export const DEFAULT_RUN_CONFIG: RunConfig = {
  memoryType: 'simple',
  graph: DEFAULT_GRAPH_CONFIG,
  agent: DEFAULT_AGENT_CONFIG,
  maxTurns: 10,
  outputDir: './results',
  runLabel: 'default',
};

/** Build all parameter combinations for the research sweep.
 * Sweeps memory type × context window: 4 KG graph types + 1 RAG × 4 context sizes = 20 configs. */
export function buildResearchMatrix(): RunConfig[] {
  const configs: RunConfig[] = [];
  const graphTypes: GraphType[] = ['simple', 'hierarchical', 'multi', 'weighted'];
  const contextLimits = [400, 800, 1500, 4096];

  // KG configurations
  for (const type of graphTypes) {
    for (const maxCtx of contextLimits) {
      configs.push({
        memoryType: type,
        graph: {
          type,
          graphDepth: 3,
          subTrees: 3,
          multiGraph: type === 'multi',
          weightedEdges: type === 'weighted',
          directed: type === 'hierarchical',
        },
        agent: {
          ...DEFAULT_AGENT_CONFIG,
          maxContextTokens: maxCtx,
        },
        maxTurns: 20,
        outputDir: './results',
        runLabel: `${type}_ctx${maxCtx}`,
      });
    }
  }

  // RAG configurations
  for (const maxCtx of contextLimits) {
    configs.push({
      memoryType: 'rag',
      graph: DEFAULT_GRAPH_CONFIG,   // unused for RAG but required by type
      agent: {
        ...DEFAULT_AGENT_CONFIG,
        maxContextTokens: maxCtx,
      },
      maxTurns: 20,
      outputDir: './results',
      runLabel: `rag_ctx${maxCtx}`,
    });
  }

  return configs;
}

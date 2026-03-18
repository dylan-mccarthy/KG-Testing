// Base types and interfaces for all knowledge graph implementations

export interface NodeData {
  id: string;
  label: string;
  properties: Record<string, unknown>;
  /** Embedding or keyword tags for search */
  tags: string[];
  createdAt: number;
  accessCount: number;
}

export interface EdgeData {
  id: string;
  fromId: string;
  toId: string;
  /** Relationship type label (e.g. "knows", "is_a", "located_in") */
  relation: string;
  weight: number;
  properties: Record<string, unknown>;
  createdAt: number;
}

export interface SearchResult {
  node: NodeData;
  score: number;
  path: string[];
  matchedEdges: EdgeData[];
}

export interface TraversalResult {
  nodes: NodeData[];
  edges: EdgeData[];
  depth: number;
}

export interface GraphStats {
  nodeCount: number;
  edgeCount: number;
  maxDepth: number;
  avgDegree: number;
  relationTypes: string[];
}

export interface IKnowledgeGraph {
  readonly id: string;
  readonly name: string;

  // CRUD
  addNode(label: string, properties?: Record<string, unknown>, tags?: string[]): NodeData;
  addEdge(fromId: string, toId: string, relation: string, weight?: number, properties?: Record<string, unknown>): EdgeData;
  getNode(id: string): NodeData | undefined;
  updateNode(id: string, updates: Partial<Pick<NodeData, 'properties' | 'tags' | 'label'>>): boolean;
  removeNode(id: string): boolean;
  removeEdge(id: string): boolean;

  // Query
  searchByLabel(query: string, topK?: number): SearchResult[];
  searchByTags(tags: string[], topK?: number): SearchResult[];
  findRelated(nodeId: string, maxDepth?: number, relation?: string): TraversalResult;
  getNeighbors(nodeId: string, relation?: string): NodeData[];
  findPath(fromId: string, toId: string): NodeData[];

  // Serialization
  toJSON(): object;
  fromJSON(data: object): void;
  clear(): void;

  // Stats
  getStats(): GraphStats;
}

/** Simple text-based relevance scoring */
export function scoreMatch(node: NodeData, query: string): number {
  const q = query.toLowerCase();
  const tokens = q.split(/\s+/).filter(t => t.length > 2);
  let score = 0;

  const labelLower = node.label.toLowerCase();
  if (labelLower === q) score += 10;
  else if (labelLower.includes(q)) score += 5;

  for (const token of tokens) {
    if (labelLower.includes(token)) score += 2;
    if (node.tags.some(t => t.toLowerCase().includes(token))) score += 1.5;
    const propStr = JSON.stringify(node.properties).toLowerCase();
    if (propStr.includes(token)) score += 1;
  }

  // Boost recently-accessed nodes
  score += Math.min(node.accessCount * 0.1, 1);

  return score;
}

/** Generate a deterministic short ID */
let _counter = 0;
export function generateId(prefix = 'n'): string {
  return `${prefix}_${Date.now()}_${++_counter}`;
}

// SimpleGraph: in-memory adjacency list knowledge graph

import { IKnowledgeGraph, NodeData, EdgeData, SearchResult, TraversalResult, GraphStats, generateId, scoreMatch } from './base';

export class SimpleGraph implements IKnowledgeGraph {
  readonly id: string;
  readonly name: string = 'SimpleGraph';

  protected nodes: Map<string, NodeData> = new Map();
  protected edges: Map<string, EdgeData> = new Map();
  protected adjacency: Map<string, Set<string>> = new Map(); // nodeId -> edgeIds
  protected directed: boolean;

  constructor(id: string, directed = false) {
    this.id = id;
    this.directed = directed;
  }

  addNode(label: string, properties: Record<string, unknown> = {}, tags: string[] = []): NodeData {
    const now = Date.now();
    const node: NodeData = {
      id: generateId('n'),
      label,
      properties,
      tags: [...tags, ...label.toLowerCase().split(/\s+/)],
      createdAt: now,
      updatedAt: now,
      version: 1,
      isOutdated: false,
      accessCount: 0,
    };
    this.nodes.set(node.id, node);
    this.adjacency.set(node.id, new Set());
    return node;
  }

  addEdge(fromId: string, toId: string, relation: string, weight = 1.0, properties: Record<string, unknown> = {}): EdgeData {
    if (!this.nodes.has(fromId)) throw new Error(`Node ${fromId} not found`);
    if (!this.nodes.has(toId)) throw new Error(`Node ${toId} not found`);

    const edge: EdgeData = {
      id: generateId('e'),
      fromId,
      toId,
      relation,
      weight,
      properties,
      createdAt: Date.now(),
    };
    this.edges.set(edge.id, edge);
    this.adjacency.get(fromId)!.add(edge.id);
    if (!this.directed) {
      this.adjacency.get(toId)!.add(edge.id);
    }
    return edge;
  }

  getNode(id: string): NodeData | undefined {
    const node = this.nodes.get(id);
    if (node) node.accessCount++;
    return node;
  }

  updateNode(id: string, updates: Partial<Pick<NodeData, 'properties' | 'tags' | 'label'>>): boolean {
    const node = this.nodes.get(id);
    if (!node) return false;
    if (updates.label !== undefined) node.label = updates.label;

    if (updates.properties !== undefined) {
      // Remove stale tag tokens for any property whose value is changing
      for (const [key, newVal] of Object.entries(updates.properties)) {
        const oldVal = node.properties[key];
        if (oldVal !== undefined && String(oldVal).toLowerCase() !== String(newVal).toLowerCase()) {
          const oldTokens = new Set(
            String(oldVal).toLowerCase().split(/[\s,\-\/]+/).filter(w => w.length > 1)
          );
          node.tags = node.tags.filter(t => !oldTokens.has(t.toLowerCase()));
        }
      }
      Object.assign(node.properties, updates.properties);
    }

    if (updates.tags !== undefined) node.tags = [...new Set([...node.tags, ...updates.tags])];
    node.updatedAt = Date.now();
    node.version++;
    return true;
  }

  getAllNodes(): NodeData[] {
    return Array.from(this.nodes.values());
  }

  markOutdated(nodeId: string, supersededById?: string): boolean {
    const node = this.nodes.get(nodeId);
    if (!node) return false;
    node.isOutdated = true;
    node.updatedAt = Date.now();
    node.version++;
    if (supersededById) node.supersededBy = supersededById;
    return true;
  }

  removeNode(id: string): boolean {
    if (!this.nodes.has(id)) return false;
    // Remove all connected edges
    const edgeIds = this.adjacency.get(id) || new Set();
    for (const eid of edgeIds) {
      const edge = this.edges.get(eid);
      if (edge) {
        const otherId = edge.fromId === id ? edge.toId : edge.fromId;
        this.adjacency.get(otherId)?.delete(eid);
        this.edges.delete(eid);
      }
    }
    this.adjacency.delete(id);
    this.nodes.delete(id);
    return true;
  }

  removeEdge(id: string): boolean {
    const edge = this.edges.get(id);
    if (!edge) return false;
    this.adjacency.get(edge.fromId)?.delete(id);
    if (!this.directed) this.adjacency.get(edge.toId)?.delete(id);
    this.edges.delete(id);
    return true;
  }

  searchByLabel(query: string, topK = 5): SearchResult[] {
    const results: SearchResult[] = [];
    for (const node of this.nodes.values()) {
      const score = scoreMatch(node, query);
      if (score > 0) {
        results.push({ node, score, path: [node.id], matchedEdges: [] });
      }
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  searchByTags(tags: string[], topK = 5): SearchResult[] {
    const results: SearchResult[] = [];
    const tagSet = new Set(tags.map(t => t.toLowerCase()));
    for (const node of this.nodes.values()) {
      const matches = node.tags.filter(t => tagSet.has(t.toLowerCase())).length;
      if (matches > 0) {
        results.push({ node, score: matches, path: [node.id], matchedEdges: [] });
      }
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  findRelated(nodeId: string, maxDepth = 2, relation?: string): TraversalResult {
    const visited = new Set<string>();
    const resultNodes: NodeData[] = [];
    const resultEdges: EdgeData[] = [];

    const bfs = (startId: string, depth: number) => {
      const queue: Array<{ id: string; d: number }> = [{ id: startId, d: 0 }];
      while (queue.length) {
        const { id, d } = queue.shift()!;
        if (visited.has(id) || d > depth) continue;
        visited.add(id);
        const node = this.nodes.get(id);
        if (node && id !== startId) {
          node.accessCount++;
          resultNodes.push(node);
        }
        const edgeIds = this.adjacency.get(id) || new Set();
        for (const eid of edgeIds) {
          const edge = this.edges.get(eid)!;
          if (relation && edge.relation !== relation) continue;
          resultEdges.push(edge);
          const nextId = edge.fromId === id ? edge.toId : edge.fromId;
          if (!visited.has(nextId)) queue.push({ id: nextId, d: d + 1 });
        }
      }
    };

    bfs(nodeId, maxDepth);
    return { nodes: resultNodes, edges: resultEdges, depth: maxDepth };
  }

  getNeighbors(nodeId: string, relation?: string): NodeData[] {
    const edgeIds = this.adjacency.get(nodeId) || new Set();
    const neighbors: NodeData[] = [];
    for (const eid of edgeIds) {
      const edge = this.edges.get(eid)!;
      if (relation && edge.relation !== relation) continue;
      const otherId = edge.fromId === nodeId ? edge.toId : edge.fromId;
      const other = this.nodes.get(otherId);
      if (other) neighbors.push(other);
    }
    return neighbors;
  }

  findPath(fromId: string, toId: string): NodeData[] {
    const visited = new Set<string>();
    const parent = new Map<string, string>();
    const queue = [fromId];
    visited.add(fromId);

    while (queue.length) {
      const current = queue.shift()!;
      if (current === toId) {
        const path: NodeData[] = [];
        let c: string | undefined = toId;
        while (c) {
          const node = this.nodes.get(c);
          if (node) path.unshift(node);
          c = parent.get(c);
        }
        return path;
      }
      const edgeIds = this.adjacency.get(current) || new Set();
      for (const eid of edgeIds) {
        const edge = this.edges.get(eid)!;
        const next = edge.fromId === current ? edge.toId : edge.fromId;
        if (!visited.has(next)) {
          visited.add(next);
          parent.set(next, current);
          queue.push(next);
        }
      }
    }
    return [];
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      directed: this.directed,
      nodes: Array.from(this.nodes.values()),
      edges: Array.from(this.edges.values()),
    };
  }

  fromJSON(data: { directed?: boolean; nodes?: NodeData[]; edges?: EdgeData[] }): void {
    this.clear();
    if (data.directed !== undefined) this.directed = data.directed;
    for (const n of data.nodes || []) {
      this.nodes.set(n.id, n);
      this.adjacency.set(n.id, new Set());
    }
    for (const e of data.edges || []) {
      this.edges.set(e.id, e);
      this.adjacency.get(e.fromId)?.add(e.id);
      if (!this.directed) this.adjacency.get(e.toId)?.add(e.id);
    }
  }

  clear(): void {
    this.nodes.clear();
    this.edges.clear();
    this.adjacency.clear();
  }

  getStats(): GraphStats {
    const relations = new Set<string>();
    let totalDegree = 0;
    for (const edge of this.edges.values()) relations.add(edge.relation);
    for (const edgeSet of this.adjacency.values()) totalDegree += edgeSet.size;
    return {
      nodeCount: this.nodes.size,
      edgeCount: this.edges.size,
      maxDepth: -1, // computed on demand
      avgDegree: this.nodes.size ? totalDegree / this.nodes.size : 0,
      relationTypes: Array.from(relations),
    };
  }
}

// WeightedGraph: edge weights with Dijkstra shortest-path and relevance scoring

import { SimpleGraph } from './simple';
import { NodeData, EdgeData, SearchResult, scoreMatch } from './base';

export class WeightedGraph extends SimpleGraph {
  override readonly name = 'WeightedGraph';

  constructor(id: string, directed = false) {
    super(id, directed);
  }

  /** Dijkstra's shortest path by accumulated weight */
  shortestPath(fromId: string, toId: string): { path: NodeData[]; totalWeight: number } {
    const dist = new Map<string, number>();
    const prev = new Map<string, string>();
    const unvisited = new Set<string>(this.nodes.keys());

    for (const id of this.nodes.keys()) dist.set(id, Infinity);
    dist.set(fromId, 0);

    while (unvisited.size) {
      // Pick unvisited node with min distance
      let current: string | undefined;
      let minDist = Infinity;
      for (const id of unvisited) {
        const d = dist.get(id)!;
        if (d < minDist) { minDist = d; current = id; }
      }
      if (!current || minDist === Infinity) break;
      if (current === toId) break;
      unvisited.delete(current);

      const edgeIds = this.adjacency.get(current) || new Set();
      for (const eid of edgeIds) {
        const edge = this.edges.get(eid)!;
        const neighbor = edge.fromId === current ? edge.toId : edge.fromId;
        if (!unvisited.has(neighbor)) continue;
        const alt = dist.get(current)! + edge.weight;
        if (alt < dist.get(neighbor)!) {
          dist.set(neighbor, alt);
          prev.set(neighbor, current);
        }
      }
    }

    // Reconstruct path
    const path: NodeData[] = [];
    let c: string | undefined = toId;
    while (c) {
      const node = this.nodes.get(c);
      if (node) path.unshift(node);
      c = prev.get(c);
    }
    return { path, totalWeight: dist.get(toId) ?? Infinity };
  }

  /** Search with relevance scoring boosted by edge weights */
  searchWeighted(query: string, topK = 5): SearchResult[] {
    const initial = this.searchByLabel(query, topK * 3);

    // Boost score based on weighted connectivity
    for (const result of initial) {
      let weightSum = 0;
      const edgeIds = this.adjacency.get(result.node.id) || new Set();
      for (const eid of edgeIds) {
        const edge = this.edges.get(eid);
        if (edge) weightSum += edge.weight;
      }
      result.score += Math.log1p(weightSum) * 0.5;
    }

    initial.sort((a, b) => b.score - a.score);
    return initial.slice(0, topK);
  }

  /** Find the most strongly connected nodes (by total edge weight) */
  getMostConnected(topK = 5): NodeData[] {
    const weights: Array<{ node: NodeData; totalWeight: number }> = [];

    for (const [nodeId, edgeSet] of this.adjacency.entries()) {
      const node = this.nodes.get(nodeId);
      if (!node) continue;
      let total = 0;
      for (const eid of edgeSet) {
        const edge = this.edges.get(eid);
        if (edge) total += edge.weight;
      }
      weights.push({ node, totalWeight: total });
    }

    weights.sort((a, b) => b.totalWeight - a.totalWeight);
    return weights.slice(0, topK).map(w => w.node);
  }

  /** Update edge weight */
  updateWeight(edgeId: string, newWeight: number): boolean {
    const edge = this.edges.get(edgeId);
    if (!edge) return false;
    edge.weight = newWeight;
    return true;
  }

  /** Boost weight of edges connecting to recently searched nodes (reinforcement) */
  reinforceSearch(nodeId: string, boost = 0.1): void {
    const edgeIds = this.adjacency.get(nodeId) || new Set();
    for (const eid of edgeIds) {
      const edge = this.edges.get(eid);
      if (edge) edge.weight = Math.min(edge.weight + boost, 10.0);
    }
  }

  override searchByLabel(query: string, topK = 5): SearchResult[] {
    return this.searchWeighted(query, topK);
  }
}

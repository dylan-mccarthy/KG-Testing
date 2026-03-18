// HierarchicalGraph: tree-based knowledge graph with configurable depth and branching

import { SimpleGraph } from './simple';
import { NodeData, EdgeData, GraphStats, generateId } from './base';

export class HierarchicalGraph extends SimpleGraph {
  override readonly name = 'HierarchicalGraph';

  private maxDepth: number;
  private branchingFactor: number;
  private rootIds: Set<string> = new Set();
  private nodeDepths: Map<string, number> = new Map();

  constructor(id: string, maxDepth = 3, branchingFactor = 3) {
    super(id, true); // directed
    this.maxDepth = maxDepth;
    this.branchingFactor = branchingFactor;
  }

  /** Add a root node (depth 0) */
  addRoot(label: string, properties: Record<string, unknown> = {}, tags: string[] = []): NodeData {
    const node = super.addNode(label, properties, tags);
    this.rootIds.add(node.id);
    this.nodeDepths.set(node.id, 0);
    return node;
  }

  /** Add a child node under a parent */
  addChild(parentId: string, label: string, relation = 'has_child', properties: Record<string, unknown> = {}, tags: string[] = []): NodeData | null {
    const parentDepth = this.nodeDepths.get(parentId);
    if (parentDepth === undefined) throw new Error(`Parent ${parentId} not found`);
    if (parentDepth >= this.maxDepth - 1) return null; // depth limit reached

    const children = this.getChildren(parentId);
    if (children.length >= this.branchingFactor) return null; // branching limit

    const child = super.addNode(label, properties, tags);
    this.nodeDepths.set(child.id, parentDepth + 1);
    super.addEdge(parentId, child.id, relation);
    return child;
  }

  getChildren(nodeId: string, relation?: string): NodeData[] {
    const edgeIds = this.adjacency.get(nodeId) || new Set();
    const children: NodeData[] = [];
    for (const eid of edgeIds) {
      const edge = this.edges.get(eid)!;
      if (edge.fromId === nodeId) { // directed: only outgoing
        if (relation && edge.relation !== relation) continue;
        const child = this.nodes.get(edge.toId);
        if (child) children.push(child);
      }
    }
    return children;
  }

  getParent(nodeId: string): NodeData | undefined {
    const edgeIds = this.adjacency.get(nodeId) || new Set();
    for (const eid of edgeIds) {
      const edge = this.edges.get(eid)!;
      if (edge.toId === nodeId) {
        return this.nodes.get(edge.fromId);
      }
    }
    return undefined;
  }

  getDepth(nodeId: string): number {
    return this.nodeDepths.get(nodeId) ?? -1;
  }

  getRoots(): NodeData[] {
    return Array.from(this.rootIds)
      .map(id => this.nodes.get(id))
      .filter((n): n is NodeData => n !== undefined);
  }

  /** Traverse subtree rooted at nodeId up to maxDepth */
  getSubtree(nodeId: string, depthLimit?: number): NodeData[] {
    const limit = depthLimit ?? this.maxDepth;
    const result: NodeData[] = [];
    const startDepth = this.nodeDepths.get(nodeId) ?? 0;
    const queue = [nodeId];
    const visited = new Set<string>();
    while (queue.length) {
      const id = queue.shift()!;
      if (visited.has(id)) continue;
      visited.add(id);
      const node = this.nodes.get(id);
      if (node) result.push(node);
      const nodeDepth = this.nodeDepths.get(id) ?? 0;
      if (nodeDepth - startDepth >= limit) continue;
      for (const child of this.getChildren(id)) {
        if (!visited.has(child.id)) queue.push(child.id);
      }
    }
    return result;
  }

  override getStats(): GraphStats {
    const base = super.getStats();
    const depths = Array.from(this.nodeDepths.values());
    base.maxDepth = depths.length ? Math.max(...depths) : 0;
    return base;
  }

  override toJSON(): object {
    return {
      ...super.toJSON(),
      name: this.name,
      maxDepth: this.maxDepth,
      branchingFactor: this.branchingFactor,
      rootIds: Array.from(this.rootIds),
      nodeDepths: Object.fromEntries(this.nodeDepths),
    };
  }

  override fromJSON(data: {
    directed?: boolean;
    nodes?: NodeData[];
    edges?: EdgeData[];
    maxDepth?: number;
    branchingFactor?: number;
    rootIds?: string[];
    nodeDepths?: Record<string, number>;
  }): void {
    super.fromJSON(data);
    if (data.maxDepth !== undefined) this.maxDepth = data.maxDepth;
    if (data.branchingFactor !== undefined) this.branchingFactor = data.branchingFactor;
    this.rootIds = new Set(data.rootIds || []);
    this.nodeDepths = new Map(Object.entries(data.nodeDepths || {}));
  }

  override clear(): void {
    super.clear();
    this.rootIds.clear();
    this.nodeDepths.clear();
  }
}

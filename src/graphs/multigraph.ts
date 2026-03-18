// MultiGraph: supports multiple distinct relationship types per node pair

import { SimpleGraph } from './simple';
import { NodeData, EdgeData, SearchResult, generateId, scoreMatch } from './base';

export interface RelationSchema {
  name: string;
  description: string;
  symmetric: boolean; // e.g. "knows" is symmetric, "manages" is not
  inverseRelation?: string;
}

const DEFAULT_RELATIONS: RelationSchema[] = [
  { name: 'knows', description: 'Person knows another person', symmetric: true },
  { name: 'is_a', description: 'Type/subtype relationship', symmetric: false },
  { name: 'part_of', description: 'Component membership', symmetric: false, inverseRelation: 'contains' },
  { name: 'located_in', description: 'Geographic containment', symmetric: false, inverseRelation: 'contains' },
  { name: 'created_by', description: 'Authorship or creation', symmetric: false, inverseRelation: 'created' },
  { name: 'related_to', description: 'Generic relationship', symmetric: true },
  { name: 'precedes', description: 'Temporal ordering', symmetric: false, inverseRelation: 'follows' },
  { name: 'manages', description: 'Organizational hierarchy', symmetric: false, inverseRelation: 'reports_to' },
];

export class MultiGraph extends SimpleGraph {
  override readonly name = 'MultiGraph';

  private relations: Map<string, RelationSchema> = new Map();
  // Track multiple edges per node pair: `${fromId}:${toId}` -> edgeIds
  private pairEdges: Map<string, Set<string>> = new Map();

  constructor(id: string, customRelations?: RelationSchema[]) {
    super(id, true);
    const schemas = customRelations || DEFAULT_RELATIONS;
    for (const r of schemas) {
      this.relations.set(r.name, r);
    }
  }

  addRelationSchema(schema: RelationSchema): void {
    this.relations.set(schema.name, schema);
  }

  getRelationSchemas(): RelationSchema[] {
    return Array.from(this.relations.values());
  }

  override addEdge(fromId: string, toId: string, relation: string, weight = 1.0, properties: Record<string, unknown> = {}): EdgeData {
    if (!this.relations.has(relation)) {
      // Auto-register unknown relations as generic
      this.relations.set(relation, { name: relation, description: 'Auto-registered', symmetric: false });
    }

    const edge = super.addEdge(fromId, toId, relation, weight, properties);

    const pairKey = `${fromId}:${toId}`;
    if (!this.pairEdges.has(pairKey)) this.pairEdges.set(pairKey, new Set());
    this.pairEdges.get(pairKey)!.add(edge.id);

    // Add inverse edge if schema defines one
    const schema = this.relations.get(relation);
    if (schema?.inverseRelation) {
      const inverseEdge = super.addEdge(toId, fromId, schema.inverseRelation, weight, properties);
      const inversePairKey = `${toId}:${fromId}`;
      if (!this.pairEdges.has(inversePairKey)) this.pairEdges.set(inversePairKey, new Set());
      this.pairEdges.get(inversePairKey)!.add(inverseEdge.id);
    }

    return edge;
  }

  /** Get all edges between two specific nodes */
  getEdgesBetween(fromId: string, toId: string): EdgeData[] {
    const pairKey = `${fromId}:${toId}`;
    const edgeIds = this.pairEdges.get(pairKey) || new Set();
    return Array.from(edgeIds)
      .map(eid => this.edges.get(eid))
      .filter((e): e is EdgeData => e !== undefined);
  }

  /** Search across all relation types and return enriched results */
  searchWithRelations(query: string, topK = 5): Array<SearchResult & { relations: string[] }> {
    const baseResults = this.searchByLabel(query, topK * 2);
    const enriched = baseResults.map(r => {
      const edgeIds = this.adjacency.get(r.node.id) || new Set();
      const relations = new Set<string>();
      for (const eid of edgeIds) {
        const edge = this.edges.get(eid);
        if (edge) relations.add(edge.relation);
      }
      return { ...r, relations: Array.from(relations) };
    });
    enriched.sort((a, b) => b.score - a.score);
    return enriched.slice(0, topK);
  }

  /** Find all nodes connected via a specific relation type */
  findByRelation(relation: string): Array<{ from: NodeData; to: NodeData; edge: EdgeData }> {
    const results: Array<{ from: NodeData; to: NodeData; edge: EdgeData }> = [];
    for (const edge of this.edges.values()) {
      if (edge.relation === relation) {
        const from = this.nodes.get(edge.fromId);
        const to = this.nodes.get(edge.toId);
        if (from && to) results.push({ from, to, edge });
      }
    }
    return results;
  }

  override toJSON(): object {
    return {
      ...super.toJSON(),
      name: this.name,
      relations: Array.from(this.relations.entries()),
      pairEdges: Object.fromEntries(
        Array.from(this.pairEdges.entries()).map(([k, v]) => [k, Array.from(v)])
      ),
    };
  }

  override fromJSON(data: {
    directed?: boolean;
    nodes?: NodeData[];
    edges?: EdgeData[];
    relations?: [string, RelationSchema][];
    pairEdges?: Record<string, string[]>;
  }): void {
    super.fromJSON(data);
    this.relations = new Map(data.relations || []);
    this.pairEdges = new Map(
      Object.entries(data.pairEdges || {}).map(([k, v]) => [k, new Set(v)])
    );
  }

  override clear(): void {
    super.clear();
    this.pairEdges.clear();
  }
}

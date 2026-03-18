// Graph factory and index export

import { GraphConfig } from '../config';
import { IKnowledgeGraph } from './base';
import { SimpleGraph } from './simple';
import { HierarchicalGraph } from './hierarchical';
import { MultiGraph } from './multigraph';
import { WeightedGraph } from './weighted';

export { IKnowledgeGraph, NodeData, EdgeData, SearchResult, TraversalResult, GraphStats } from './base';
export { SimpleGraph } from './simple';
export { HierarchicalGraph } from './hierarchical';
export { MultiGraph } from './multigraph';
export { WeightedGraph } from './weighted';

export function createGraph(config: GraphConfig, runLabel: string): IKnowledgeGraph {
  switch (config.type) {
    case 'simple':
      return new SimpleGraph(runLabel, config.directed);
    case 'hierarchical':
      return new HierarchicalGraph(runLabel, config.graphDepth, config.subTrees);
    case 'multi':
      return new MultiGraph(runLabel);
    case 'weighted':
      return new WeightedGraph(runLabel, config.directed);
    default:
      throw new Error(`Unknown graph type: ${(config as GraphConfig).type}`);
  }
}

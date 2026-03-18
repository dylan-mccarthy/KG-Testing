// FactExtractor: uses the LLM to extract structured facts from natural language
// and store/update them in the knowledge graph

import { OllamaClient, ChatMessage } from './ollama';
import { IKnowledgeGraph, NodeData } from '../graphs';

export interface ExtractedFact {
  entity: string;        // Subject entity name (e.g. "Alice", "Project Phoenix")
  attribute: string;     // What property (e.g. "job", "age", "status")
  value: string;         // The value (e.g. "software engineer", "34")
  relatedEntity?: string; // Optional: for relation edges (e.g. "works_at: Acme")
  relation?: string;     // Edge type if relatedEntity is present
  isUpdate: boolean;     // true if user is explicitly changing existing info
}

export interface ExtractionResult {
  facts: ExtractedFact[];
  nodesCreated: number;
  nodesUpdated: number;
  edgesCreated: number;
  rawResponse: string;
}

const EXTRACTION_SYSTEM = `/no_think
You are a fact extraction assistant. Extract structured facts from user messages.
Return ONLY a valid JSON array with no explanation. Each element:
- "entity": the subject (use proper names, e.g. "Alex", "Project Phoenix")
- "attribute": the property (e.g. "job", "age", "location")
- "value": the value (e.g. "engineer", "34", "Austin")
- "relatedEntity": (optional) for relationships, the other entity name
- "relation": (optional) edge type if relatedEntity present
- "isUpdate": true ONLY if user explicitly says something changed or was updated

Return [] if no concrete facts are shared (e.g. questions, general chat).
Return ONLY the JSON array. Nothing else.`;

// Semantic aliases: maps stored attribute names to query terms users might use
const ATTR_ALIASES: Record<string, string[]> = {
  location: ['city', 'where', 'live', 'located', 'place', 'home', 'reside', 'based'],
  job: ['work', 'role', 'career', 'profession', 'position', 'occupation', 'title', 'employed'],
  title: ['role', 'position', 'job', 'work', 'career'],
  hobby: ['sport', 'activity', 'practice', 'interest', 'leisure', 'pastime', 'enjoy', 'fun'],
  sport: ['hobby', 'activity', 'practice', 'play'],
  pet: ['animal', 'dog', 'cat', 'fish', 'companion', 'own'],
  dog: ['pet', 'animal', 'companion'],
  cat: ['pet', 'animal', 'companion'],
  age: ['old', 'years', 'born', 'birthday'],
  company: ['employer', 'firm', 'organization', 'workplace', 'employed', 'work'],
  employer: ['company', 'organization', 'firm', 'work'],
  language: ['speak', 'learn', 'study', 'tongue', 'linguistic'],
  level: ['skill', 'proficiency', 'fluency', 'grade', 'rank'],
  project: ['work', 'task', 'assignment', 'initiative', 'current'],
  status: ['current', 'now', 'update', 'state', 'progress'],
  deadline: ['due', 'date', 'when', 'schedule', 'time'],
  budget: ['cost', 'money', 'fund', 'price', 'spend'],
  team: ['member', 'people', 'staff', 'colleague', 'coworker'],
  name: ['called', 'known', 'identity'],
};

/** Build rich tags for a fact: entity words + attribute + attribute aliases + value words */
function buildTags(entity: string, attribute: string, value: string): string[] {
  const tags = new Set<string>();

  // Entity name and its individual words
  tags.add(entity.toLowerCase());
  entity.toLowerCase().split(/\s+/).forEach(w => { if (w.length > 1) tags.add(w); });

  // Attribute and its aliases
  const attrLower = attribute.toLowerCase();
  tags.add(attrLower);
  (ATTR_ALIASES[attrLower] ?? []).forEach(a => tags.add(a));

  // Value — whole string and individual words
  const valueLower = value.toLowerCase();
  tags.add(valueLower);
  valueLower.split(/[\s,\-\/]+/).filter(w => w.length > 1).forEach(w => tags.add(w));

  return [...tags];
}

export class FactExtractor {
  private client: OllamaClient;

  constructor(client: OllamaClient) {
    this.client = client;
  }

  async extract(userMessage: string, conversationContext: string = ''): Promise<ExtractedFact[]> {
    const prompt = conversationContext
      ? `Context: ${conversationContext.slice(0, 300)}\nMessage: "${userMessage}"`
      : `"${userMessage}"`;

    try {
      const response = await this.client.chat([
        { role: 'system', content: EXTRACTION_SYSTEM },
        { role: 'user', content: prompt },
      ], { temperature: 0.0, timeoutMs: 30000, noThink: true });

      const text = response.message?.content?.trim() || '[]';
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (!jsonMatch) return [];

      const parsed = JSON.parse(jsonMatch[0]) as ExtractedFact[];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(f => f.entity && f.attribute && f.value);
    } catch {
      return [];
    }
  }

  /** Store extracted facts into the graph, handling updates to existing nodes */
  storeInGraph(facts: ExtractedFact[], graph: IKnowledgeGraph): ExtractionResult {
    let nodesCreated = 0;
    let nodesUpdated = 0;
    let edgesCreated = 0;

    for (const fact of facts) {
      // Find existing node for this entity
      const existing = graph.searchByLabel(fact.entity, 3);
      let entityNode: NodeData;

      if (existing.length > 0 && this.isSameEntity(existing[0].node.label, fact.entity)) {
        entityNode = existing[0].node;
        // Merge the property and enrich tags
        graph.updateNode(entityNode.id, {
          properties: { [fact.attribute]: fact.value },
          tags: buildTags(fact.entity, fact.attribute, fact.value),
        });
        nodesUpdated++;
      } else {
        // Create new node for this entity
        entityNode = graph.addNode(fact.entity, {
          [fact.attribute]: fact.value,
        }, buildTags(fact.entity, fact.attribute, fact.value));
        nodesCreated++;
      }

      // Handle relational facts
      if (fact.relatedEntity && fact.relation) {
        const relatedExisting = graph.searchByLabel(fact.relatedEntity, 3);
        let relatedNode: NodeData;

        if (relatedExisting.length > 0 && this.isSameEntity(relatedExisting[0].node.label, fact.relatedEntity)) {
          relatedNode = relatedExisting[0].node;
        } else {
          relatedNode = graph.addNode(fact.relatedEntity, {}, [
            fact.relatedEntity.toLowerCase(),
            ...fact.relatedEntity.toLowerCase().split(/\s+/),
          ]);
          nodesCreated++;
        }

        // Add edge if it doesn't already exist
        try {
          graph.addEdge(entityNode.id, relatedNode.id, fact.relation);
          edgesCreated++;
        } catch {
          // Edge may already exist or nodes invalid
        }
      }
    }

    return {
      facts,
      nodesCreated,
      nodesUpdated,
      edgesCreated,
      rawResponse: JSON.stringify(facts),
    };
  }

  /** Fuzzy entity name matching - handles "Alex" matching "Alex Chen" */
  private isSameEntity(existing: string, incoming: string): boolean {
    const e = existing.toLowerCase().trim();
    const i = incoming.toLowerCase().trim();
    return e === i || e.includes(i) || i.includes(e);
  }
}

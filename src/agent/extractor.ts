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
- "attribute": the property — ALWAYS use these canonical names when applicable:
  * current location / city / where they live or are based → "location"
  * role, title, position, job title, designation → "role"
  * current project / assignment / supporting / working on → "project"
  * budget / cost / funding / approved amount → "budget"
  * company / employer / organisation → "company"
  * language proficiency level → "level"
  * team size / headcount → "team_size"
  * reporting manager → "reports_to"
  * (for anything else use a short lowercase snake_case descriptor)
- "value": the value (e.g. "engineer", "34", "Austin")
- "relatedEntity": (optional) for relationships, the other entity name
- "relation": (optional) edge type if relatedEntity present
- "isUpdate": true if the user says something changed, is new/current, or was updated

Return [] if no concrete facts are shared (e.g. questions, general chat).
Return ONLY the JSON array. Nothing else.`;

// Maps LLM-generated attribute variants to a single canonical key.
// This prevents the same logical fact being stored under two different keys
// (e.g. "current_location" vs "location") so updateNode() can reliably
// overwrite the old value and clean up stale tags.
const CANONICAL_ATTRS: Record<string, string> = {
  // Location
  city: 'location', current_location: 'location', lives_in: 'location',
  based_in: 'location', relocated_to: 'location', home: 'location',
  moving_to: 'location', new_location: 'location', residence: 'location',
  // Role / title
  title: 'role', position: 'role', job_title: 'role', current_role: 'role',
  new_role: 'role', promoted_to: 'role', designation: 'role',
  job: 'role', occupation: 'role', career: 'role',
  // Project / assignment
  current_project: 'project', assigned_to: 'project', working_on: 'project',
  supporting: 'project', assigned_project: 'project', team_assignment: 'project',
  now_supporting: 'project', reassigned_to: 'project',
  // Budget
  current_budget: 'budget', approved_budget: 'budget', total_budget: 'budget',
  new_budget: 'budget', updated_budget: 'budget', revised_budget: 'budget',
  project_budget: 'budget',
  // Employment
  employer: 'company', works_at: 'company', employed_by: 'company',
  // Language proficiency
  proficiency: 'level', fluency: 'level', skill_level: 'level',
  spanish_level: 'level', language_level: 'level',
  // Tenure
  years_at_company: 'tenure', time_at_company: 'tenure', joined: 'tenure',
};

function canonicalizeAttr(attr: string): string {
  const normalised = attr.toLowerCase().replace(/[\s\-]/g, '_');
  return CANONICAL_ATTRS[normalised] ?? normalised;
}

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
      // Normalise attribute name to canonical key before storage
      const normFact = { ...fact, attribute: canonicalizeAttr(fact.attribute) };

      // Find existing node for this entity
      const existing = graph.searchByLabel(normFact.entity, 3);
      let entityNode: NodeData;

      if (existing.length > 0 && this.isSameEntity(existing[0].node.label, normFact.entity)) {
        entityNode = existing[0].node;
        // Merge the property and enrich tags
        graph.updateNode(entityNode.id, {
          properties: { [normFact.attribute]: normFact.value },
          tags: buildTags(normFact.entity, normFact.attribute, normFact.value),
        });
        nodesUpdated++;
      } else {
        // Create new node for this entity
        entityNode = graph.addNode(normFact.entity, {
          [normFact.attribute]: normFact.value,
        }, buildTags(normFact.entity, normFact.attribute, normFact.value));
        nodesCreated++;
      }

      // Conflict detection: if this fact assigns a unique role/title to an entity,
      // mark any OTHER node that holds the same role value as outdated.
      this.markConflictingNodes(normFact, entityNode, graph);

      // Handle relational facts
      if (normFact.relatedEntity && normFact.relation) {
        const relatedExisting = graph.searchByLabel(normFact.relatedEntity, 3);
        let relatedNode: NodeData;

        if (relatedExisting.length > 0 && this.isSameEntity(relatedExisting[0].node.label, normFact.relatedEntity)) {
          relatedNode = relatedExisting[0].node;
        } else {
          relatedNode = graph.addNode(normFact.relatedEntity, {}, [
            normFact.relatedEntity.toLowerCase(),
            ...normFact.relatedEntity.toLowerCase().split(/\s+/),
          ]);
          nodesCreated++;
        }

        // Add edge if it doesn't already exist
        try {
          graph.addEdge(entityNode.id, relatedNode.id, normFact.relation);
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

  /**
   * When a new fact assigns a role/title/lead/position to an entity, scan ALL
   * other (non-outdated) nodes for a conflicting value and mark them outdated.
   *
   * Three detection modes:
   *  1. VALUE fuzzy: fact.value contains/is-contained-by a role word →
   *     find nodes whose property VALUE overlaps with this role string → mark outdated.
   *  2. ATTR-key: fact.attribute is a role-like key (e.g. "role", "lead") →
   *     find any OTHER node with the same attribute key → mark outdated.
   *  3. ENTITY-LOCATION/PROJECT: for "location" and "project" attributes,
   *     if the same entity node already has a different value for that canonical key,
   *     the updateNode() call already overwrote it — no extra action needed.
   *     BUT if the LLM stored a SEPARATE "location" node that is now stale, mark it.
   */
  private markConflictingNodes(fact: ExtractedFact, entityNode: NodeData, graph: IKnowledgeGraph): void {
    const val  = String(fact.value).toLowerCase().trim();
    const attr = String(fact.attribute).toLowerCase().trim();
    if (val.length < 3) return;

    const roleHints = ['lead', 'manager', 'director', 'head', 'chief', 'vp', 'cto', 'ceo', 'coo',
      'officer', 'engineer', 'developer', 'analyst', 'architect', 'owner'];

    const isRoleValue = roleHints.some(h => val.includes(h));
    const isRoleAttr  = roleHints.some(h => attr.includes(h)) || attr === 'role' || attr === 'title';

    if (!isRoleValue && !isRoleAttr) return;

    for (const node of graph.getAllNodes()) {
      if (node.id === entityNode.id || node.isOutdated) continue;
      let conflict = false;

      for (const [propKey, propVal] of Object.entries(node.properties)) {
        const pk = String(propKey).toLowerCase();
        const pv = String(propVal).toLowerCase().trim();

        // Mode 1 — fuzzy value match (handles "Frontend Lead" ≈ "new Frontend Lead")
        if (isRoleValue && (pv === val || pv.includes(val) || val.includes(pv))) {
          conflict = true; break;
        }

        // Mode 2 — same role-like attribute key on a different node
        if (isRoleAttr && (pk === attr || pk === 'role' || pk === 'title')) {
          // Only conflict if the OTHER node has a role value that overlaps this one
          if (roleHints.some(h => pv.includes(h))) { conflict = true; break; }
        }
      }

      if (conflict) graph.markOutdated(node.id, entityNode.id);
    }
  }

  /** Fuzzy entity name matching - handles "Alex" matching "Alex Chen" */
  private isSameEntity(existing: string, incoming: string): boolean {
    const e = existing.toLowerCase().trim();
    const i = incoming.toLowerCase().trim();
    return e === i || e.includes(i) || i.includes(e);
  }
}

// Test scenario definitions: multi-turn conversation cases
// Each scenario defines: initial KG data to load + a sequence of turns to execute

import { IKnowledgeGraph } from '../graphs';
import { HierarchicalGraph } from '../graphs/hierarchical';
import { MultiGraph } from '../graphs/multigraph';

export interface Turn {
  userMessage: string;
  /** Keywords that should appear in a correct answer */
  expectedKeywords: string[];
  /** Optional: the 'fact' this question tests */
  factTag: string;
}

export interface TestScenario {
  id: string;
  name: string;
  description: string;
  category: 'personal_facts' | 'world_knowledge' | 'entity_relations' | 'temporal' | 'chain_reasoning';
  /** Load this data into the graph before running */
  setupGraph: (graph: IKnowledgeGraph) => void;
  turns: Turn[];
}

// ─────────────────────────────────────────────
// SCENARIO 1: Personal Facts (10+ turns)
// ─────────────────────────────────────────────
const personalFacts: TestScenario = {
  id: 'personal_facts',
  name: 'Personal Profile Recall',
  description: 'Tests recall of personal facts about a fictional person across many turns with distracting questions.',
  category: 'personal_facts',
  setupGraph: (graph) => {
    const alex = graph.addNode('Alex Chen', {
      age: 34,
      job: 'Senior Software Engineer',
      company: 'NovaTech Solutions',
      city: 'Seattle',
      country: 'USA',
      hobby1: 'rock climbing',
      hobby2: 'photography',
      pet: 'cat named Pixel',
      car: 'Tesla Model 3',
      coffee_order: 'oat milk latte',
    }, ['person', 'alex', 'chen', 'engineer']);

    const employer = graph.addNode('NovaTech Solutions', {
      type: 'tech company',
      founded: 2015,
      employees: 1200,
      headquarters: 'Seattle',
      product: 'cloud infrastructure software',
    }, ['company', 'novatech', 'employer']);

    const sarah = graph.addNode('Sarah Kim', {
      relation: 'wife',
      job: 'pediatric nurse',
      hospital: 'Seattle Children\'s Hospital',
    }, ['person', 'sarah', 'wife', 'nurse']);

    const daughter = graph.addNode('Lily Chen', {
      age: 6,
      school: 'Maple Elementary',
      relation: 'daughter',
    }, ['person', 'lily', 'daughter', 'child']);

    const pixel = graph.addNode('Pixel', {
      species: 'cat',
      breed: 'Maine Coon',
      age: 3,
      color: 'orange tabby',
    }, ['cat', 'pet', 'pixel', 'animal']);

    graph.addEdge(alex.id, employer.id, 'works_at');
    graph.addEdge(alex.id, sarah.id, 'married_to');
    graph.addEdge(alex.id, daughter.id, 'parent_of');
    graph.addEdge(alex.id, pixel.id, 'owns');
    graph.addEdge(sarah.id, daughter.id, 'parent_of');
  },
  turns: [
    { userMessage: "What is Alex Chen's job?", expectedKeywords: ['software engineer'], factTag: 'job' },
    { userMessage: "Tell me about the weather in Tokyo today.", expectedKeywords: [], factTag: 'distractor' },
    { userMessage: "How old is Alex?", expectedKeywords: ['34'], factTag: 'age' },
    { userMessage: "What does Alex do in his free time?", expectedKeywords: ['climbing', 'photography'], factTag: 'hobbies' },
    { userMessage: "What is the capital of France? Just checking.", expectedKeywords: ['Paris'], factTag: 'distractor' },
    { userMessage: "Where does Alex's wife work?", expectedKeywords: ["children", 'hospital', 'seattle', 'nurse'], factTag: 'spouse_job' },
    { userMessage: "Does Alex have any pets? What kind?", expectedKeywords: ['cat', 'pixel', 'maine coon'], factTag: 'pet' },
    { userMessage: "Quick math: what's 15 times 12?", expectedKeywords: ['180'], factTag: 'distractor' },
    { userMessage: "What car does Alex drive?", expectedKeywords: ['tesla', 'model 3'], factTag: 'car' },
    { userMessage: "What's the name of Alex's daughter and where does she go to school?", expectedKeywords: ['lily', 'maple elementary'], factTag: 'daughter' },
    { userMessage: "Going back to Alex — what company does he work for and what do they make?", expectedKeywords: ['novatech', 'cloud', 'infrastructure'], factTag: 'employer_product' },
    { userMessage: "What does Alex order at a coffee shop?", expectedKeywords: ['oat milk', 'latte'], factTag: 'coffee' },
  ],
};

// ─────────────────────────────────────────────
// SCENARIO 2: World Knowledge + Chain Reasoning
// ─────────────────────────────────────────────
const worldKnowledge: TestScenario = {
  id: 'world_knowledge',
  name: 'World Knowledge Chain Reasoning',
  description: 'Tests multi-hop reasoning across geography, history, and science facts stored in the KG.',
  category: 'chain_reasoning',
  setupGraph: (graph) => {
    // Countries and capitals
    const france = graph.addNode('France', { capital: 'Paris', continent: 'Europe', language: 'French', population: '68 million' }, ['country', 'france', 'europe']);
    const paris = graph.addNode('Paris', { type: 'city', population: '2.1 million', river: 'Seine', famous_for: 'Eiffel Tower, Louvre' }, ['city', 'paris', 'capital']);
    const germany = graph.addNode('Germany', { capital: 'Berlin', continent: 'Europe', language: 'German', population: '84 million' }, ['country', 'germany', 'europe']);
    const berlin = graph.addNode('Berlin', { type: 'city', population: '3.7 million', famous_for: 'Brandenburg Gate, Berlin Wall history' }, ['city', 'berlin', 'capital']);

    // Scientists
    const einstein = graph.addNode('Albert Einstein', {
      born: 1879, died: 1955, nationality: 'German-American',
      famous_for: 'Theory of Relativity, E=mc2', Nobel_Prize: 1921,
    }, ['scientist', 'einstein', 'physicist', 'person']);
    const curie = graph.addNode('Marie Curie', {
      born: 1867, died: 1934, nationality: 'Polish-French',
      famous_for: 'Discovery of radium and polonium', Nobel_Prizes: 2,
    }, ['scientist', 'curie', 'chemist', 'physicist', 'person']);

    // Space
    const moon = graph.addNode('Moon', {
      type: 'natural satellite', distance_from_earth: '384400 km',
      first_landing: '1969', mission: 'Apollo 11',
      diameter: '3474 km',
    }, ['moon', 'space', 'satellite', 'celestial']);
    const mars = graph.addNode('Mars', {
      type: 'planet', distance_from_earth: '225 million km average',
      moons: 2, moon_names: 'Phobos and Deimos', atmosphere: 'mostly CO2',
    }, ['mars', 'planet', 'space']);

    graph.addEdge(france.id, paris.id, 'capital_is');
    graph.addEdge(germany.id, berlin.id, 'capital_is');
    graph.addEdge(einstein.id, germany.id, 'born_in');
    graph.addEdge(curie.id, france.id, 'worked_in');
    graph.addEdge(moon.id, mars.id, 'different_from');
  },
  turns: [
    { userMessage: "What is the capital of France?", expectedKeywords: ['paris'], factTag: 'france_capital' },
    { userMessage: "What famous structures is that city known for?", expectedKeywords: ['eiffel', 'louvre'], factTag: 'paris_landmarks' },
    { userMessage: "Albert Einstein — what country was he from originally?", expectedKeywords: ['german', 'germany'], factTag: 'einstein_nationality' },
    { userMessage: "What is Einstein most famous for scientifically?", expectedKeywords: ['relativity', 'e=mc'], factTag: 'einstein_work' },
    { userMessage: "Can you name a famous female scientist who won two Nobel Prizes?", expectedKeywords: ['curie', 'marie'], factTag: 'curie_prizes' },
    { userMessage: "How far is the Moon from Earth?", expectedKeywords: ['384'], factTag: 'moon_distance' },
    { userMessage: "What was the first moon landing mission called and when did it happen?", expectedKeywords: ['apollo 11', '1969'], factTag: 'moon_landing' },
    { userMessage: "How many moons does Mars have, and what are they called?", expectedKeywords: ['2', 'phobos', 'deimos'], factTag: 'mars_moons' },
    { userMessage: "Back to Einstein — did he win a Nobel Prize? When?", expectedKeywords: ['1921', 'nobel'], factTag: 'einstein_nobel' },
    { userMessage: "What language is spoken in the country whose capital is Paris?", expectedKeywords: ['french'], factTag: 'france_language' },
  ],
};

// ─────────────────────────────────────────────
// SCENARIO 3: Entity Relationships (Org Chart)
// ─────────────────────────────────────────────
const entityRelations: TestScenario = {
  id: 'entity_relations',
  name: 'Organizational Entity Relations',
  description: 'Tests recall of complex organizational relationships: who manages whom, department structures.',
  category: 'entity_relations',
  setupGraph: (graph) => {
    const company = graph.addNode('Acme Corp', { industry: 'manufacturing', employees: 5000, founded: 1998 }, ['company', 'acme', 'org']);

    const ceo = graph.addNode('Jordan Wells', { title: 'CEO', tenure_years: 8, salary_band: 'executive' }, ['person', 'jordan', 'wells', 'ceo', 'executive']);
    const cto = graph.addNode('Priya Sharma', { title: 'CTO', department: 'Engineering', reports_to: 'CEO' }, ['person', 'priya', 'sharma', 'cto', 'engineering']);
    const cfo = graph.addNode('Marcus Lee', { title: 'CFO', department: 'Finance', reports_to: 'CEO' }, ['person', 'marcus', 'lee', 'cfo', 'finance']);
    const vp_eng = graph.addNode('Rachel Torres', { title: 'VP Engineering', department: 'Engineering', reports_to: 'CTO' }, ['person', 'rachel', 'torres', 'vp', 'engineering']);
    const vp_prod = graph.addNode('Omar Hassan', { title: 'VP Product', department: 'Product', reports_to: 'CTO' }, ['person', 'omar', 'hassan', 'vp', 'product']);
    const sr_eng1 = graph.addNode('Lin Wei', { title: 'Senior Engineer', team: 'Platform', reports_to: 'VP Engineering' }, ['person', 'lin', 'wei', 'engineer']);
    const sr_eng2 = graph.addNode('Aiko Tanaka', { title: 'Senior Engineer', team: 'Data', reports_to: 'VP Engineering' }, ['person', 'aiko', 'tanaka', 'engineer']);

    graph.addEdge(ceo.id, company.id, 'leads');
    graph.addEdge(cto.id, ceo.id, 'reports_to');
    graph.addEdge(cfo.id, ceo.id, 'reports_to');
    graph.addEdge(vp_eng.id, cto.id, 'reports_to');
    graph.addEdge(vp_prod.id, cto.id, 'reports_to');
    graph.addEdge(sr_eng1.id, vp_eng.id, 'reports_to');
    graph.addEdge(sr_eng2.id, vp_eng.id, 'reports_to');
  },
  turns: [
    { userMessage: "Who is the CEO of Acme Corp?", expectedKeywords: ['jordan', 'wells'], factTag: 'ceo' },
    { userMessage: "Who does Priya Sharma report to?", expectedKeywords: ['jordan', 'ceo', 'wells'], factTag: 'cto_reports' },
    { userMessage: "What is Marcus Lee's role at the company?", expectedKeywords: ['cfo', 'finance'], factTag: 'cfo_role' },
    { userMessage: "How long has the CEO been at Acme Corp?", expectedKeywords: ['8'], factTag: 'ceo_tenure' },
    { userMessage: "Who manages the engineering team under the CTO?", expectedKeywords: ['rachel', 'torres', 'vp engineering'], factTag: 'vp_eng' },
    { userMessage: "Name the senior engineers and their teams.", expectedKeywords: ['lin wei', 'aiko tanaka', 'platform', 'data'], factTag: 'sr_engineers' },
    { userMessage: "Who is responsible for product development reporting to the CTO?", expectedKeywords: ['omar', 'hassan', 'vp product'], factTag: 'vp_prod' },
    { userMessage: "If I wanted to talk to someone about finances at Acme, who would that be?", expectedKeywords: ['marcus', 'lee', 'cfo'], factTag: 'finance_contact' },
    { userMessage: "What department does Aiko Tanaka work in?", expectedKeywords: ['engineering', 'data'], factTag: 'aiko_dept' },
    { userMessage: "What year was Acme Corp founded?", expectedKeywords: ['1998'], factTag: 'founding_year' },
  ],
};

// ─────────────────────────────────────────────
// SCENARIO 4: Temporal Sequence
// ─────────────────────────────────────────────
const temporalSequence: TestScenario = {
  id: 'temporal_sequence',
  name: 'Historical Timeline Recall',
  description: 'Tests recall of a project timeline with dates and milestones across many turns.',
  category: 'temporal',
  setupGraph: (graph) => {
    const project = graph.addNode('Project Phoenix', {
      type: 'software project',
      status: 'completed',
      team_size: 12,
      total_budget: '$2.4M',
    }, ['project', 'phoenix', 'software']);

    const milestone1 = graph.addNode('Kickoff Meeting', {
      date: 'January 15, 2024',
      attendees: 'full team + stakeholders',
      outcome: 'requirements finalized',
      location: 'HQ Conference Room A',
    }, ['milestone', 'kickoff', 'meeting', 'january', '2024']);

    const milestone2 = graph.addNode('Alpha Release', {
      date: 'March 8, 2024',
      version: 'v0.1.0-alpha',
      bugs_found: 47,
      testers: 'internal QA team',
    }, ['milestone', 'alpha', 'release', 'march', '2024']);

    const milestone3 = graph.addNode('Beta Launch', {
      date: 'May 22, 2024',
      version: 'v0.8.0-beta',
      external_testers: 250,
      feedback_score: '4.2/5',
    }, ['milestone', 'beta', 'launch', 'may', '2024']);

    const milestone4 = graph.addNode('Production Release', {
      date: 'August 1, 2024',
      version: 'v1.0.0',
      initial_users: 10000,
      launch_partner: 'TechCorp Industries',
    }, ['milestone', 'production', 'release', 'launch', 'august', '2024']);

    const milestone5 = graph.addNode('Post-Launch Review', {
      date: 'September 15, 2024',
      uptime_achieved: '99.7%',
      user_growth: '340% in 45 days',
      issues_resolved: 23,
    }, ['milestone', 'review', 'september', '2024', 'postlaunch']);

    graph.addEdge(project.id, milestone1.id, 'started_with');
    graph.addEdge(milestone1.id, milestone2.id, 'followed_by');
    graph.addEdge(milestone2.id, milestone3.id, 'followed_by');
    graph.addEdge(milestone3.id, milestone4.id, 'followed_by');
    graph.addEdge(milestone4.id, milestone5.id, 'followed_by');
  },
  turns: [
    { userMessage: "When did Project Phoenix kick off?", expectedKeywords: ['january', '15', '2024'], factTag: 'kickoff_date' },
    { userMessage: "What happened at the kickoff meeting?", expectedKeywords: ['requirements', 'finalized'], factTag: 'kickoff_outcome' },
    { userMessage: "When was the alpha version released?", expectedKeywords: ['march', '8', '2024'], factTag: 'alpha_date' },
    { userMessage: "How many bugs were found in the alpha?", expectedKeywords: ['47'], factTag: 'alpha_bugs' },
    { userMessage: "What was the team size for the project?", expectedKeywords: ['12'], factTag: 'team_size' },
    { userMessage: "When did the beta launch happen and what version was it?", expectedKeywords: ['may', '22', '2024', 'v0.8'], factTag: 'beta_launch' },
    { userMessage: "How many external testers participated in beta?", expectedKeywords: ['250'], factTag: 'beta_testers' },
    { userMessage: "What was the official production release date?", expectedKeywords: ['august', '1', '2024'], factTag: 'prod_date' },
    { userMessage: "Who was the launch partner for the production release?", expectedKeywords: ['techcorp'], factTag: 'launch_partner' },
    { userMessage: "How quickly did the user base grow after launch?", expectedKeywords: ['340', '45'], factTag: 'user_growth' },
    { userMessage: "What was the uptime percentage after launch?", expectedKeywords: ['99.7'], factTag: 'uptime' },
    { userMessage: "From kickoff to production, roughly how many months did the project take?", expectedKeywords: ['6'], factTag: 'duration' },
  ],
};

// ─────────────────────────────────────────────
// SCENARIO 5: Multi-hop Reasoning
// ─────────────────────────────────────────────
const multiHop: TestScenario = {
  id: 'multi_hop',
  name: 'Multi-Hop Knowledge Retrieval',
  description: 'Tests ability to chain multiple KG nodes to answer questions requiring multi-hop reasoning.',
  category: 'chain_reasoning',
  setupGraph: (graph) => {
    // A small universe of interconnected facts
    const tokyo = graph.addNode('Tokyo', { country: 'Japan', population: '13.96 million', timezone: 'JST UTC+9', type: 'city' }, ['tokyo', 'city', 'japan', 'capital']);
    const japan = graph.addNode('Japan', { continent: 'Asia', capital: 'Tokyo', currency: 'Yen', language: 'Japanese', gdp_rank: 4 }, ['japan', 'country', 'asia']);
    const yen = graph.addNode('Japanese Yen', { symbol: '¥', code: 'JPY', issuer: 'Bank of Japan', introduced: 1871 }, ['yen', 'currency', 'jpy', 'money']);
    const boj = graph.addNode('Bank of Japan', { founded: 1882, governor_2024: 'Kazuo Ueda', type: 'central bank', location: 'Tokyo' }, ['bank', 'boj', 'central bank', 'japan']);

    const python = graph.addNode('Python', { type: 'programming language', created: 1991, creator: 'Guido van Rossum', paradigm: 'multi-paradigm', current_version: '3.12' }, ['python', 'programming', 'language', 'code']);
    const guido = graph.addNode('Guido van Rossum', { nationality: 'Dutch', born: 1956, employer_2020: 'Microsoft', known_for: 'Python language' }, ['guido', 'van rossum', 'programmer', 'dutch', 'person']);
    const microsoft = graph.addNode('Microsoft', { founded: 1975, founders: 'Bill Gates and Paul Allen', headquarters: 'Redmond, Washington', products: 'Windows, Azure, Office' }, ['microsoft', 'company', 'tech', 'software']);

    graph.addEdge(tokyo.id, japan.id, 'capital_of');
    graph.addEdge(japan.id, yen.id, 'uses_currency');
    graph.addEdge(yen.id, boj.id, 'issued_by');
    graph.addEdge(boj.id, tokyo.id, 'located_in');
    graph.addEdge(python.id, guido.id, 'created_by');
    graph.addEdge(guido.id, microsoft.id, 'employed_by');
  },
  turns: [
    { userMessage: "What is the currency of Japan?", expectedKeywords: ['yen', 'jpy'], factTag: 'japan_currency' },
    { userMessage: "Which bank issues that currency?", expectedKeywords: ['bank of japan'], factTag: 'yen_issuer' },
    { userMessage: "Where is the Bank of Japan located?", expectedKeywords: ['tokyo'], factTag: 'boj_location' },
    { userMessage: "Who created the Python programming language?", expectedKeywords: ['guido', 'van rossum'], factTag: 'python_creator' },
    { userMessage: "What nationality is the creator of Python?", expectedKeywords: ['dutch'], factTag: 'guido_nationality' },
    { userMessage: "Where did Guido van Rossum work as of 2020?", expectedKeywords: ['microsoft'], factTag: 'guido_employer' },
    { userMessage: "Who founded Microsoft?", expectedKeywords: ['bill gates', 'paul allen'], factTag: 'microsoft_founders' },
    { userMessage: "What is the GDP ranking of Japan globally?", expectedKeywords: ['4'], factTag: 'japan_gdp' },
    { userMessage: "When was the Japanese Yen introduced?", expectedKeywords: ['1871'], factTag: 'yen_intro' },
    { userMessage: "What year was Python first released and what version is current?", expectedKeywords: ['1991', '3.12'], factTag: 'python_version' },
  ],
};

export const ALL_SCENARIOS: TestScenario[] = [
  personalFacts,
  worldKnowledge,
  entityRelations,
  temporalSequence,
  multiHop,
];

export function getScenario(id: string): TestScenario | undefined {
  return ALL_SCENARIOS.find(s => s.id === id);
}

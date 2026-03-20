// Test scenarios: natural multi-turn conversations that build knowledge via speech
// Turn types:
//   tell          - user shares information; eval: were facts stored in KG?
//   recall        - user asks about previously told facts; eval: correct keywords in response?
//   update        - user changes a previously stated fact; eval: KG updated + new value in response
//   verify_update - ask about updated fact again later; eval: new value present, old value absent
//   distractor    - off-topic question to test context trimming; no strict keyword check

export type TurnType = 'tell' | 'recall' | 'update' | 'verify_update' | 'distractor';

export interface Turn {
  type: TurnType;
  userMessage: string;
  /** Keywords that must appear in the response (for recall/update/verify_update) */
  expectedKeywords: string[];
  /** Keywords that must NOT appear (e.g. old value after an update) */
  forbiddenKeywords: string[];
  /** Semantic label for this fact being tested */
  factTag: string;
}

export interface TestScenario {
  id: string;
  name: string;
  description: string;
  category: 'personal' | 'professional' | 'project' | 'social' | 'mixed';
  turns: Turn[];
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 1: Personal Introduction + Job Change
// User introduces themselves across several turns, then gets a promotion
// ─────────────────────────────────────────────────────────────────────────────
export const personalIntroduction: TestScenario = {
  id: 'personal_introduction',
  name: 'Personal Introduction & Career Update',
  description: 'User introduces personal facts over many turns, agent recalls them, then user updates their job title and the change is verified.',
  category: 'personal',
  turns: [
    {
      type: 'tell',
      userMessage: "Hi! My name is Jordan Blake and I'm 29 years old.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_name_age',
    },
    {
      type: 'tell',
      userMessage: "I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_job',
    },
    {
      type: 'tell',
      userMessage: "I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_location_hobby',
    },
    {
      type: 'recall',
      userMessage: "What's my name and how old am I?",
      expectedKeywords: ['jordan', 'blake', '29'],
      forbiddenKeywords: [],
      factTag: 'recall_name_age',
    },
    {
      type: 'distractor',
      userMessage: "Who won the FIFA World Cup in 2022?",
      expectedKeywords: ['argentina'],
      forbiddenKeywords: [],
      factTag: 'distractor_football',
    },
    {
      type: 'recall',
      userMessage: "Where do I work and what's my role there?",
      expectedKeywords: ['datastream', 'analyst'],
      forbiddenKeywords: [],
      factTag: 'recall_job',
    },
    {
      type: 'tell',
      userMessage: "I also have a golden retriever named Biscuit who is 2 years old.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_pet',
    },
    {
      type: 'recall',
      userMessage: "What sport do I practise and how often?",
      expectedKeywords: ['jiu-jitsu', '4'],
      forbiddenKeywords: [],
      factTag: 'recall_hobby',
    },
    {
      type: 'distractor',
      userMessage: "Can you explain what a neural network is in simple terms?",
      expectedKeywords: ['neural', 'network'],
      forbiddenKeywords: [],
      factTag: 'distractor_ml',
    },
    {
      type: 'update',
      userMessage: "Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.",
      expectedKeywords: ['senior', 'analyst', 'promoted'],
      forbiddenKeywords: [],
      factTag: 'update_job_title',
    },
    {
      type: 'recall',
      userMessage: "What's my pet's name and how old is it?",
      expectedKeywords: ['biscuit', '2'],
      forbiddenKeywords: [],
      factTag: 'recall_pet',
    },
    {
      type: 'distractor',
      userMessage: "What is the boiling point of water in Fahrenheit?",
      expectedKeywords: ['212'],
      forbiddenKeywords: [],
      factTag: 'distractor_science',
    },
    {
      type: 'verify_update',
      userMessage: "What is my current job title?",
      expectedKeywords: ['senior', 'analyst'],
      forbiddenKeywords: [],
      factTag: 'verify_job_title',
    },
    {
      type: 'recall',
      userMessage: "What city do I live in?",
      expectedKeywords: ['austin', 'texas'],
      forbiddenKeywords: [],
      factTag: 'recall_location',
    },
    {
      type: 'verify_update',
      userMessage: "How long have I been working in data? And what's my current role?",
      expectedKeywords: ['datastream', 'senior'],
      forbiddenKeywords: [],
      factTag: 'verify_employer_new_role',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 2: Team Building + Role Change
// User introduces their team members, then one changes roles
// ─────────────────────────────────────────────────────────────────────────────
export const teamBuilding: TestScenario = {
  id: 'team_building',
  name: 'Team Building & Role Reassignment',
  description: 'User describes their team across multiple turns, recalls team member details, then one member changes roles and the change is verified.',
  category: 'professional',
  turns: [
    {
      type: 'tell',
      userMessage: "I manage a small engineering team. Let me tell you about them. First there's Priya, she's our backend developer — she specialises in Python and databases.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_priya',
    },
    {
      type: 'tell',
      userMessage: "Then we have Marcus. He's our DevOps engineer and handles all our cloud infrastructure on AWS.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_marcus',
    },
    {
      type: 'tell',
      userMessage: "Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_yuki',
    },
    {
      type: 'recall',
      userMessage: "What does Priya specialise in?",
      expectedKeywords: ['python', 'backend', 'database'],
      forbiddenKeywords: [],
      factTag: 'recall_priya_skills',
    },
    {
      type: 'tell',
      userMessage: "I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_dmitri',
    },
    {
      type: 'distractor',
      userMessage: "What's the difference between TCP and UDP?",
      expectedKeywords: ['tcp', 'udp'],
      forbiddenKeywords: [],
      factTag: 'distractor_networking',
    },
    {
      type: 'recall',
      userMessage: "Who manages our cloud infrastructure and what platform do we use?",
      expectedKeywords: ['marcus', 'aws'],
      forbiddenKeywords: [],
      factTag: 'recall_marcus_devops',
    },
    {
      type: 'recall',
      userMessage: "How long has Yuki been on the team and what's her tech stack?",
      expectedKeywords: ['yuki', '6', 'react', 'typescript'],
      forbiddenKeywords: [],
      factTag: 'recall_yuki_tenure',
    },
    {
      type: 'distractor',
      userMessage: "Can you give me a quick overview of what Kubernetes does?",
      expectedKeywords: ['kubernetes', 'container'],
      forbiddenKeywords: [],
      factTag: 'distractor_k8s',
    },
    {
      type: 'update',
      userMessage: "Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.",
      expectedKeywords: ['priya', 'tech lead', 'promoted'],
      forbiddenKeywords: [],
      factTag: 'update_priya_role',
    },
    {
      type: 'recall',
      userMessage: "How long has Dmitri been with us and what does he do?",
      expectedKeywords: ['dmitri', '5', 'qa', 'test'],
      forbiddenKeywords: [],
      factTag: 'recall_dmitri',
    },
    {
      type: 'distractor',
      userMessage: "What year was Python first released?",
      expectedKeywords: ['1991'],
      forbiddenKeywords: [],
      factTag: 'distractor_python',
    },
    {
      type: 'verify_update',
      userMessage: "What is Priya's current role?",
      expectedKeywords: ['tech lead', 'priya'],
      forbiddenKeywords: ['backend developer'],
      factTag: 'verify_priya_new_role',
    },
    {
      type: 'recall',
      userMessage: "Who's our frontend developer and what does she work with?",
      expectedKeywords: ['yuki', 'react', 'typescript'],
      forbiddenKeywords: [],
      factTag: 'recall_yuki_skills',
    },
    {
      type: 'verify_update',
      userMessage: "Give me a quick summary of Priya — what changed about her role and what does she do now?",
      expectedKeywords: ['priya', 'lead'],
      forbiddenKeywords: [],
      factTag: 'verify_priya_summary',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 3: Project Tracking + Status Changes
// User tracks a project across turns, milestones change
// ─────────────────────────────────────────────────────────────────────────────
export const projectTracking: TestScenario = {
  id: 'project_tracking',
  name: 'Project Tracking & Milestone Changes',
  description: 'User reports project progress across turns, asks for recalls of key dates and decisions, then updates a deadline and verifies the change.',
  category: 'project',
  turns: [
    {
      type: 'tell',
      userMessage: "We just kicked off Project Orion today — it's a customer portal rebuild for Nexus Financial. The project has a budget of $850,000 and a team of 8 people.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_project',
    },
    {
      type: 'tell',
      userMessage: "Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_design_phase',
    },
    {
      type: 'tell',
      userMessage: "The development phase starts April 1st and we're targeting a beta release on June 15th.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_dev_dates',
    },
    {
      type: 'recall',
      userMessage: "What's the budget for Project Orion and who is our client?",
      expectedKeywords: ['850', 'nexus', 'financial'],
      forbiddenKeywords: [],
      factTag: 'recall_budget_client',
    },
    {
      type: 'distractor',
      userMessage: "What does REST stand for in REST API?",
      expectedKeywords: ['representational', 'state', 'transfer'],
      forbiddenKeywords: [],
      factTag: 'distractor_rest',
    },
    {
      type: 'tell',
      userMessage: "We've decided to use React on the frontend and a Node.js microservices architecture on the backend. PostgreSQL will be our main database.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_tech_stack',
    },
    {
      type: 'recall',
      userMessage: "When does our development phase kick off and who's leading design?",
      expectedKeywords: ['april', 'camille'],
      forbiddenKeywords: [],
      factTag: 'recall_dev_start_designer',
    },
    {
      type: 'recall',
      userMessage: "What's the tech stack we chose for Orion?",
      expectedKeywords: ['react', 'node', 'postgresql'],
      forbiddenKeywords: [],
      factTag: 'recall_tech_stack',
    },
    {
      type: 'distractor',
      userMessage: "What is SOLID in software engineering?",
      expectedKeywords: ['single', 'open', 'principle'],
      forbiddenKeywords: [],
      factTag: 'distractor_solid',
    },
    {
      type: 'update',
      userMessage: "Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.",
      expectedKeywords: ['august', 'beta', 'pushed'],
      forbiddenKeywords: [],
      factTag: 'update_beta_date',
    },
    {
      type: 'tell',
      userMessage: "The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_paycraft',
    },
    {
      type: 'recall',
      userMessage: "What database are we using and what's the team size?",
      expectedKeywords: ['postgresql', '8'],
      forbiddenKeywords: [],
      factTag: 'recall_db_team',
    },
    {
      type: 'distractor',
      userMessage: "Explain the difference between a stack and a queue.",
      expectedKeywords: ['stack', 'queue', 'lifo'],
      forbiddenKeywords: [],
      factTag: 'distractor_data_structures',
    },
    {
      type: 'verify_update',
      userMessage: "When is our beta release now?",
      expectedKeywords: ['august'],
      forbiddenKeywords: ['june 15'],
      factTag: 'verify_beta_date',
    },
    {
      type: 'verify_update',
      userMessage: "Why did the beta get pushed back, and who is handling the payment module?",
      expectedKeywords: ['payment', 'paycraft', 'august'],
      forbiddenKeywords: [],
      factTag: 'verify_delay_reason',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 4: Social Network + Relationship Change
// User describes their social circle, relationships change
// ─────────────────────────────────────────────────────────────────────────────
export const socialNetwork: TestScenario = {
  id: 'social_network',
  name: 'Social Network & Relationship Updates',
  description: 'User describes friends and their details across turns; one friend moves cities and changes jobs; the agent must recall original then updated info.',
  category: 'social',
  turns: [
    {
      type: 'tell',
      userMessage: "I want to tell you about my friend Sam. Sam is a graphic designer who lives in Melbourne and works at a studio called Pixel & Ink.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_sam',
    },
    {
      type: 'tell',
      userMessage: "My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_tariq',
    },
    {
      type: 'tell',
      userMessage: "And there's Lena — she's a freelance photographer based in Berlin. She mainly does travel and food photography.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_lena',
    },
    {
      type: 'recall',
      userMessage: "Where does Sam live and what does she do for work?",
      expectedKeywords: ['melbourne', 'designer', 'pixel'],
      forbiddenKeywords: [],
      factTag: 'recall_sam',
    },
    {
      type: 'distractor',
      userMessage: "What's the capital city of Australia?",
      expectedKeywords: ['canberra'],
      forbiddenKeywords: [],
      factTag: 'distractor_geography',
    },
    {
      type: 'recall',
      userMessage: "How long has Tariq been teaching and what subject?",
      expectedKeywords: ['tariq', '8', 'maths', 'teacher'],
      forbiddenKeywords: [],
      factTag: 'recall_tariq',
    },
    {
      type: 'tell',
      userMessage: "I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_zoe',
    },
    {
      type: 'recall',
      userMessage: "What kind of photography does Lena do and where is she based?",
      expectedKeywords: ['lena', 'berlin', 'travel', 'food'],
      forbiddenKeywords: [],
      factTag: 'recall_lena',
    },
    {
      type: 'distractor',
      userMessage: "What is the speed of light in kilometres per second?",
      expectedKeywords: ['300'],
      forbiddenKeywords: [],
      factTag: 'distractor_physics',
    },
    {
      type: 'update',
      userMessage: "Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.",
      expectedKeywords: ['sam', 'sydney', 'freelance'],
      forbiddenKeywords: [],
      factTag: 'update_sam_location_job',
    },
    {
      type: 'recall',
      userMessage: "Where does Zoe work and what does she do?",
      expectedKeywords: ['zoe', 'toronto', 'applaunch', 'mobile'],
      forbiddenKeywords: [],
      factTag: 'recall_zoe',
    },
    {
      type: 'distractor',
      userMessage: "Who wrote the novel '1984'?",
      expectedKeywords: ['orwell', 'george'],
      forbiddenKeywords: [],
      factTag: 'distractor_literature',
    },
    {
      type: 'verify_update',
      userMessage: "Where does Sam live now?",
      expectedKeywords: ['sydney'],
      forbiddenKeywords: ['melbourne'],
      factTag: 'verify_sam_location',
    },
    {
      type: 'recall',
      userMessage: "Tell me about Tariq — where is he, how long has he taught?",
      expectedKeywords: ['tariq', 'london', '8'],
      forbiddenKeywords: [],
      factTag: 'recall_tariq_full',
    },
    {
      type: 'verify_update',
      userMessage: "What's Sam's current work situation — where is she and does she still work at Pixel and Ink?",
      expectedKeywords: ['sydney', 'freelance'],
      forbiddenKeywords: ['melbourne'],
      factTag: 'verify_sam_job',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 5: Mixed - Personal + Professional + Multiple Updates
// User shares both personal and professional facts, multiple updates tested
// ─────────────────────────────────────────────────────────────────────────────
export const mixedUpdates: TestScenario = {
  id: 'mixed_updates',
  name: 'Mixed Facts with Multiple Concurrent Updates',
  description: 'User shares a mix of personal and professional facts across many turns, then multiple facts change and are verified independently.',
  category: 'mixed',
  turns: [
    {
      type: 'tell',
      userMessage: "Hi, I'm Mei Tanaka. I'm a 32-year-old UX researcher at a health tech company called VitalMetrics.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_mei_job',
    },
    {
      type: 'tell',
      userMessage: "I live in Singapore and I commute to work by MRT. I've been at VitalMetrics for 4 years.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_location_tenure',
    },
    {
      type: 'tell',
      userMessage: "I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_language_learning',
    },
    {
      type: 'recall',
      userMessage: "What's my job and where do I work?",
      expectedKeywords: ['mei', 'ux', 'vitalmetrics'],
      forbiddenKeywords: [],
      factTag: 'recall_job',
    },
    {
      type: 'tell',
      userMessage: "My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_project',
    },
    {
      type: 'distractor',
      userMessage: "What is the most spoken language in the world by native speakers?",
      expectedKeywords: ['mandarin', 'chinese'],
      forbiddenKeywords: [],
      factTag: 'distractor_language',
    },
    {
      type: 'recall',
      userMessage: "What language am I learning and what level am I at?",
      expectedKeywords: ['spanish', 'b1'],
      forbiddenKeywords: [],
      factTag: 'recall_language',
    },
    {
      type: 'recall',
      userMessage: "How long have I been at VitalMetrics and how do I commute?",
      expectedKeywords: ['4', 'mrt', 'singapore'],
      forbiddenKeywords: [],
      factTag: 'recall_tenure_commute',
    },
    {
      type: 'update',
      userMessage: "I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.",
      expectedKeywords: ['b2', 'spanish', 'passed'],
      forbiddenKeywords: [],
      factTag: 'update_spanish_level',
    },
    {
      type: 'distractor',
      userMessage: "Can you explain what UX research involves?",
      expectedKeywords: ['user', 'research'],
      forbiddenKeywords: [],
      factTag: 'distractor_ux',
    },
    {
      type: 'recall',
      userMessage: "What project am I working on at VitalMetrics?",
      expectedKeywords: ['healthsync', 'onboarding'],
      forbiddenKeywords: [],
      factTag: 'recall_project',
    },
    {
      type: 'update',
      userMessage: "I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.",
      expectedKeywords: ['jurong', 'moved'],
      forbiddenKeywords: [],
      factTag: 'update_location',
    },
    {
      type: 'verify_update',
      userMessage: "What's my current level in Spanish?",
      expectedKeywords: ['b2'],
      forbiddenKeywords: ['b1'],
      factTag: 'verify_spanish',
    },
    {
      type: 'recall',
      userMessage: "What is my name and how old am I?",
      expectedKeywords: ['mei', 'tanaka', '32'],
      forbiddenKeywords: [],
      factTag: 'recall_identity',
    },
    {
      type: 'verify_update',
      userMessage: "Where in Singapore am I living now?",
      expectedKeywords: ['jurong'],
      forbiddenKeywords: [],
      factTag: 'verify_location',
    },
  ],
};

export const ALL_SCENARIOS: TestScenario[] = [
  personalIntroduction,
  teamBuilding,
  projectTracking,
  socialNetwork,
  mixedUpdates,
];

export { engineeringOrgDeepDive } from './large_context';

export function getScenario(id: string): TestScenario | undefined {
  return ALL_SCENARIOS.find(s => s.id === id);
}

// Phase 5: Large-Context Stress Test Scenario
//
// "Engineering Org Deep Dive" — 48 turns of realistic VP-of-Engineering onboarding.
// Designed to fill a large context window (target: ~60–80k tokens accumulated by end).
// Key test: can the agent recall facts from turn 3 at turn 44, after many turns of
// intervening content — and does KG help when the full history fits in context?
//
// Entities introduced:
//   - Alex Rivera: VP Engineering, TechCore Analytics, Seattle → moves to SF at turn 36
//   - Maya Chen: Backend Lead, specialist in distributed systems, 5y tenure
//   - Omar Vance: Frontend Lead → leaves at turn 26, replaced by Lena Park
//   - Priya Nair: Data Platform Lead → reassigned to Project Atlas at turn 38
//   - Sam Okafor: DevOps/SRE Lead, AWS, Kubernetes
//   - Zoe Walsh: Mobile Lead, React Native
//   - Arjun Mehta: Senior SWE on Atlas, 2y tenure
//   - Projects: Atlas ($400k → $550k at turn 31), Beacon (ML pipeline), Chroma (mobile)
//   - Tech: Atlas=React/Node.js/Postgres, Beacon=Python/Spark/S3, Chroma=React Native/GraphQL

import { TestScenario } from './index';

export const engineeringOrgDeepDive: TestScenario = {
  id: 'engineering_org_deep_dive',
  name: 'Engineering Org Deep Dive (Large Context)',
  description:
    '48-turn VP Engineering session covering full org structure, 3 projects, tech stacks, ' +
    'mutations (team changes, budget revisions, relocation) tested 20–40 turns later. ' +
    'Designed to accumulate large context and verify long-range recall.',
  category: 'professional',
  turns: [
    // ── BLOCK 1: Personal + Company intro (turns 1–5) ──────────────────────────────────────
    {
      type: 'tell',
      userMessage:
        "Hi! I'm Alex Rivera, VP of Engineering at TechCore Analytics. I've been with the company for 8 years — " +
        "started as a senior backend engineer, then moved into engineering management about 4 years ago. " +
        "TechCore is a B2B SaaS company with about 500 employees total, and my engineering org sits at 47 people across 6 teams. " +
        "We're headquartered in Seattle, Washington.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_alex_company',
    },
    {
      type: 'tell',
      userMessage:
        "My direct reports are five team leads. First is Maya Chen — she's my Backend Lead and honestly one of the most technically sharp people I've worked with. " +
        "Maya specialises in distributed systems and high-throughput data pipelines. She joined TechCore 5 years ago and she's been at the tech lead level for 3 of those years. " +
        "Her team is 9 engineers and they own the core API layer and data ingestion.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_maya',
    },
    {
      type: 'tell',
      userMessage:
        "Second direct report: Omar Vance is my Frontend Lead. Omar has been with us for 2 years and his team of 7 owns all customer-facing UI — " +
        "they work primarily in React with TypeScript, and recently adopted Storybook for component design. " +
        "Omar has a background in design systems and has been driving our migration from a legacy Angular codebase.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_omar',
    },
    {
      type: 'tell',
      userMessage:
        "Third: Priya Nair is our Data Platform Lead. Her team of 6 builds and maintains our internal data infrastructure — " +
        "the Spark-based ETL pipelines, our data lake on S3, and the feature store that feeds the ML models. " +
        "Priya joined 3 years ago from a fintech company. She holds a PhD in Computer Science with a focus on query optimisation. " +
        "Budget for her team's tooling this year is around $180,000.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_priya',
    },
    {
      type: 'tell',
      userMessage:
        "Fourth and fifth direct reports: Sam Okafor is my DevOps and SRE Lead — his team of 5 owns our AWS infrastructure, " +
        "Kubernetes cluster, CI/CD pipelines, and on-call rotation. We run roughly 200 microservices. " +
        "And Zoe Walsh leads Mobile — a team of 4 building our React Native app. Zoe joined TechCore 18 months ago " +
        "from a startup that got acquired. The mobile app currently has about 40,000 active users.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'intro_sam_zoe',
    },

    // ── BLOCK 2: Projects intro (turns 6–10) ──────────────────────────────────────────────
    {
      type: 'tell',
      userMessage:
        "Let me walk you through our three active projects. Project Atlas is our biggest initiative — it's a full rebuild " +
        "of our customer analytics dashboard. The project kicked off in January and is targeting a public beta in September. " +
        "Atlas is funded at $400,000 for this fiscal year. Maya's backend team and Omar's frontend team are the primary contributors, " +
        "and Arjun Mehta from the backend team is acting as the project tech lead.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'project_atlas_intro',
    },
    {
      type: 'tell',
      userMessage:
        "Atlas is built on a React and TypeScript frontend, a Node.js API layer, and PostgreSQL as the primary database. " +
        "We're using GraphQL for the internal API between frontend and backend, and Redis for session caching. " +
        "The infrastructure runs on AWS ECS with RDS for the managed Postgres. " +
        "Current velocity is about 45 story points per sprint and we're tracking at roughly 80% of planned scope.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'atlas_tech_stack',
    },
    {
      type: 'tell',
      userMessage:
        "Project Beacon is our machine learning pipeline modernisation. The goal is to reduce model training time from 6 hours to under 45 minutes " +
        "by moving from a monolithic Spark job to a distributed pipeline on AWS SageMaker. " +
        "Priya's data platform team owns this. Budget: $600,000. Timeline: completion by end of Q3. " +
        "The models Beacon serves power our customer churn predictions and upsell recommendations.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'project_beacon_intro',
    },
    {
      type: 'tell',
      userMessage:
        "Project Chroma is the mobile app rewrite. Zoe's team is migrating our existing React Native app from a class component " +
        "architecture to functional components with hooks, and introducing GraphQL subscriptions for real-time updates. " +
        "Chroma budget is $350,000. We're targeting App Store submission in November. " +
        "One of our key metrics: we want to reduce app cold-start time from 3.2 seconds to under 1.5 seconds.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'project_chroma_intro',
    },
    {
      type: 'tell',
      userMessage:
        "On the infrastructure side, Sam's team recently completed a migration from Jenkins to GitHub Actions for our CI/CD. " +
        "That cut our average pipeline time from 22 minutes down to 9 minutes, which has been a huge win for developer velocity. " +
        "We also upgraded our Kubernetes cluster from version 1.26 to 1.30 last quarter. " +
        "Monthly AWS spend is approximately $85,000, of which about $28,000 is RDS and $19,000 is ECS.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'infra_details',
    },

    // ── BLOCK 3: First recall + distractor (turns 11–15) ──────────────────────────────────
    {
      type: 'recall',
      userMessage: "What's Maya's technical specialisation and how big is her team?",
      expectedKeywords: ['distributed', 'maya', '9'],
      forbiddenKeywords: [],
      factTag: 'recall_maya_early',
    },
    {
      type: 'distractor',
      userMessage: "Can you give me a quick primer on what CAP theorem means in distributed systems?",
      expectedKeywords: ['consistency', 'availability', 'partition'],
      forbiddenKeywords: [],
      factTag: 'distractor_cap',
    },
    {
      type: 'recall',
      userMessage: "What's the budget and target completion date for Project Beacon?",
      expectedKeywords: ['beacon', '600', 'q3'],
      forbiddenKeywords: [],
      factTag: 'recall_beacon_budget',
    },
    {
      type: 'distractor',
      userMessage: "What's the difference between blue-green deployment and canary deployment?",
      expectedKeywords: ['blue', 'canary'],
      forbiddenKeywords: [],
      factTag: 'distractor_deployments',
    },
    {
      type: 'recall',
      userMessage: "How many active users does the mobile app have, and who leads that team?",
      expectedKeywords: ['zoe', '40,000'],
      forbiddenKeywords: [],
      factTag: 'recall_mobile_users',
    },

    // ── BLOCK 4: Culture, process, hiring (turns 16–22) ───────────────────────────────────
    {
      type: 'tell',
      userMessage:
        "Our engineering culture is built around a few core practices. We run two-week sprints and hold weekly all-hands on Wednesdays. " +
        "Each team does a retrospective every other sprint. We use JIRA for project tracking and Confluence for documentation. " +
        "Engineers are expected to be on-call for their own services — we use PagerDuty. " +
        "Current on-call MTTR (mean time to resolve) is 47 minutes, down from 1.8 hours a year ago.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'culture_process',
    },
    {
      type: 'tell',
      userMessage:
        "On hiring: I'm currently running 4 open roles. Two senior backend engineers for Maya's team (both posted for 6 weeks), " +
        "one staff-level DevOps engineer for Sam (posted 3 months, very competitive market), " +
        "and one senior data engineer for Priya's team. " +
        "Our average time-to-hire is 11 weeks for senior roles. I'm working with our Head of Talent, Diane Park, on a new sourcing strategy.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'hiring_pipeline',
    },
    {
      type: 'tell',
      userMessage:
        "Our engineering ladders go from L1 (junior) to L7 (principal/distinguished). " +
        "Arjun Mehta, who's the tech lead on Atlas, is currently L4 (senior). I'm planning to put him up for L5 (staff) in the next review cycle in June. " +
        "Maya is L6, Priya and Sam are both L5, Omar and Zoe are both L5 as well. " +
        "I'm L7 equivalent in the management track.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'levels_ladders',
    },
    {
      type: 'tell',
      userMessage:
        "Our tech debt backlog is substantial — we estimate about 1,800 tech-debt story points across all teams. " +
        "Backend (Maya's team) holds the largest share at ~600 points, mostly in the legacy data ingestion layer. " +
        "We've adopted a policy of dedicating 20% of each sprint to tech debt reduction. " +
        "The oldest open tech debt ticket was filed in 2019 and relates to a synchronous message-passing pattern in the core API.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'tech_debt',
    },
    {
      type: 'tell',
      userMessage:
        "Our annual engineering budget is $2.4 million. Roughly 70% goes to salaries and contractor costs, " +
        "18% to infrastructure (dominated by AWS), and the remaining 12% to tooling and software licences. " +
        "We use Datadog for observability ($4,200/month), Linear for engineering issue tracking in two newer teams, " +
        "and GitHub Enterprise at the org level.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'budget_overall',
    },
    {
      type: 'distractor',
      userMessage: "What is the general difference between a monolith and a microservices architecture?",
      expectedKeywords: ['monolith', 'microservices'],
      forbiddenKeywords: [],
      factTag: 'distractor_arch',
    },
    {
      type: 'tell',
      userMessage:
        "One thing I should add about Arjun — he's been at TechCore for 2 years, previously at Google for 4 years on the Ads serving infrastructure. " +
        "He's particularly strong in systems design and has been a great mentor to the junior engineers on Atlas. " +
        "He's also leading our internal tech talk series — we run one every two weeks on Friday afternoons, " +
        "alternating between internal engineering topics and guest speakers from the broader Seattle tech community.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'arjun_details',
    },

    // ── BLOCK 5: Key mutation — Omar leaves, Lena promoted (turns 23–27) ─────────────────
    {
      type: 'tell',
      userMessage:
        "I need to tell you about some recent team changes. Omar Vance, my Frontend Lead, has resigned. " +
        "He's accepted a Principal Engineer offer at a startup. His last day is in 3 weeks. " +
        "This is a significant loss — he's been a great culture carrier and his Storybook design system work was outstanding.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'omar_resignation',
    },
    {
      type: 'update',
      userMessage:
        "I've decided to promote Lena Park into the Frontend Lead role. Lena is currently a Senior Engineer (L4) on Omar's team — " +
        "she joined TechCore 14 months ago from a consulting background and has been exceptional. " +
        "She'll be taking over as Frontend Lead effective next Monday. I'm backfilling her senior engineer slot from the hiring pipeline.",
      expectedKeywords: ['lena', 'frontend', 'lead'],
      forbiddenKeywords: ['omar vance'],
      factTag: 'update_frontend_lead',
    },
    {
      type: 'distractor',
      userMessage: "How does React's virtual DOM reconciliation algorithm work at a high level?",
      expectedKeywords: ['virtual', 'dom', 'reconcil'],
      forbiddenKeywords: [],
      factTag: 'distractor_react',
    },
    {
      type: 'recall',
      userMessage: "Who is the current Frontend Lead and how did they get the role?",
      expectedKeywords: ['lena', 'park', 'promoted'],
      forbiddenKeywords: ['omar'],
      factTag: 'recall_frontend_lead_post_update',
    },
    {
      type: 'tell',
      userMessage:
        "Lena's background in more detail: she graduated from UC Berkeley with a CS degree, " +
        "spent 3 years at Accenture as a software consultant, then moved into product engineering. " +
        "She's particularly strong in accessibility — she pushed us to get WCAG 2.1 AA compliance on the Atlas dashboard, " +
        "which was a significant undertaking. Her team still has 7 engineers and the Atlas UI responsibilities are unchanged.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'lena_details',
    },

    // ── BLOCK 6: Budget update for Atlas (turns 28–32) ────────────────────────────────────
    {
      type: 'tell',
      userMessage:
        "Project Atlas had a scope change last week. The product team has added a new module: a real-time alerting system " +
        "that will notify customers when key metrics cross configurable thresholds. " +
        "This wasn't in the original scope. We're estimating 3 additional months of backend work and significant frontend work. " +
        "The product owner is Tomas Reyes, who reports to our CPO.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'atlas_scope_change',
    },
    {
      type: 'tell',
      userMessage:
        "Because of the Atlas scope expansion I've been in budget discussions with our CFO, Linda Wu. " +
        "She's approved an additional $150,000 for Project Atlas — so the total Atlas budget is now $550,000. " +
        "The beta release target has also shifted from September to December to accommodate the alerting module.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'atlas_budget_increase',
    },
    {
      type: 'update',
      userMessage:
        "To be clear on the Atlas update: the budget is now $550,000 (up from $400,000) and the beta is now targeting December.",
      expectedKeywords: ['550', 'atlas', 'december'],
      forbiddenKeywords: ['400,000'],
      factTag: 'update_atlas_budget',
    },
    {
      type: 'distractor',
      userMessage: "Can you explain what event-driven architecture means and when you'd use it?",
      expectedKeywords: ['event', 'async'],
      forbiddenKeywords: [],
      factTag: 'distractor_eda',
    },
    {
      type: 'recall',
      userMessage: "What's the current approved budget for Project Atlas and when is the beta due?",
      expectedKeywords: ['550', 'december'],
      forbiddenKeywords: ['400', 'september'],
      factTag: 'recall_atlas_budget_post_update',
    },

    // ── BLOCK 7: Alex relocates to SF (turns 33–37) ───────────────────────────────────────
    {
      type: 'tell',
      userMessage:
        "On a personal note: I've accepted a new living arrangement. My partner got a job offer in San Francisco at a biotech company. " +
        "We've decided to relocate. I'll be moving to San Francisco at the end of next month. " +
        "TechCore has agreed to let me continue as VP Engineering fully remote — we're already a hybrid-remote company, " +
        "so this doesn't change my role or responsibilities.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'alex_relocating',
    },
    {
      type: 'update',
      userMessage:
        "Just confirming: I am Alex Rivera, and I'm moving to San Francisco, California. I will no longer be based in Seattle.",
      expectedKeywords: ['san francisco', 'alex'],
      forbiddenKeywords: ['seattle'],
      factTag: 'update_alex_location',
    },
    {
      type: 'distractor',
      userMessage: "What's the general concept behind Infrastructure as Code and what tools are commonly used?",
      expectedKeywords: ['infrastructure', 'terraform'],
      forbiddenKeywords: [],
      factTag: 'distractor_iac',
    },
    {
      type: 'tell',
      userMessage:
        "The relocation means I'll be attending our bi-weekly leadership sync via video. I've already shifted our all-hands " +
        "to a more async-friendly format — engineering updates posted in Confluence by Monday, live Q&A on Wednesday at 10am Pacific. " +
        "I've asked Maya to be a point-of-contact for day-to-day Seattle office coordination since she's the most senior person there now. " +
        "Sam and the DevOps team are fully remote anyway so no change there.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'remote_transition_details',
    },
    {
      type: 'tell',
      userMessage:
        "Also in the last two weeks: Priya's data platform team has been reassigned to support Project Atlas. " +
        "The Atlas real-time alerting module needs a significant data pipeline component — near-real-time aggregations " +
        "that Priya's team is uniquely positioned to build. Project Beacon is entering a maintenance phase " +
        "and only needs 2 engineers to keep the lights on, so we're able to redeploy the rest of her team to Atlas.",
      expectedKeywords: [],
      forbiddenKeywords: [],
      factTag: 'priya_reassigned_to_atlas',
    },

    // ── BLOCK 8: Long-range recall of early facts (turns 38–43) ──────────────────────────
    {
      type: 'recall',
      userMessage: "What's Maya's technical specialisation and where does she rank on the engineering ladder?",
      expectedKeywords: ['distributed', 'maya', 'l6'],
      forbiddenKeywords: [],
      factTag: 'recall_maya_late',
    },
    {
      type: 'recall',
      userMessage: "What database does Project Atlas use and what's the frontend framework?",
      expectedKeywords: ['postgres', 'react'],
      forbiddenKeywords: [],
      factTag: 'recall_atlas_techstack_late',
    },
    {
      type: 'recall',
      userMessage: "What was TechCore's total headcount and what was the company type when you introduced yourself?",
      expectedKeywords: ['500', 'saas'],
      forbiddenKeywords: [],
      factTag: 'recall_company_intro_late',
    },
    {
      type: 'distractor',
      userMessage: "What's the difference between horizontal and vertical scaling in cloud infrastructure?",
      expectedKeywords: ['horizontal', 'vertical'],
      forbiddenKeywords: [],
      factTag: 'distractor_scaling',
    },
    {
      type: 'recall',
      userMessage: "How many engineers does Sam Okafor manage and what cloud platform does his team use?",
      expectedKeywords: ['sam', '5', 'aws'],
      forbiddenKeywords: [],
      factTag: 'recall_sam_late',
    },
    {
      type: 'recall',
      userMessage: "What was the original Project Atlas budget before the scope change?",
      expectedKeywords: ['400', 'atlas'],
      forbiddenKeywords: [],
      factTag: 'recall_original_atlas_budget',
    },

    // ── BLOCK 9: Verify all mutations are correct (turns 44–48) ──────────────────────────
    {
      type: 'verify_update',
      userMessage: "Who is the Frontend Lead on my team right now?",
      expectedKeywords: ['lena', 'park'],
      forbiddenKeywords: ['omar'],
      factTag: 'verify_frontend_lead',
    },
    {
      type: 'verify_update',
      userMessage: "What's the current budget for Project Atlas?",
      expectedKeywords: ['550'],
      forbiddenKeywords: ['400'],
      factTag: 'verify_atlas_budget',
    },
    {
      type: 'verify_update',
      userMessage: "Where am I, Alex Rivera, currently based?",
      expectedKeywords: ['san francisco'],
      forbiddenKeywords: ['seattle'],
      factTag: 'verify_alex_location',
    },
    {
      type: 'verify_update',
      userMessage: "Which project is Priya Nair's team currently supporting?",
      expectedKeywords: ['atlas'],
      forbiddenKeywords: ['beacon'],
      factTag: 'verify_priya_assignment',
    },
    {
      type: 'recall',
      userMessage: "Give me a quick summary — how many direct reports do I have, what are their names, and which two projects are currently fully active?",
      expectedKeywords: ['maya', 'lena', 'sam', 'zoe', 'priya', 'atlas', 'chroma'],
      forbiddenKeywords: ['omar'],
      factTag: 'final_recall_summary',
    },
  ],
};

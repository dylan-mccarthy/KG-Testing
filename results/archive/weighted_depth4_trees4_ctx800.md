# Run Report: weighted_depth4_trees4_ctx800

_Generated: 2026-03-18T19:23:53.436Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `weighted` |
| Graph Depth | 4 |
| Sub-Trees (branching) | 4 |
| Multi-Graph | false |
| Weighted Edges | true |
| Max Context Tokens | 800 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |
| Temperature | 0.3 |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 54 |
| Avg Keyword Accuracy | 0.0% |
| Avg Latency | 1ms |
| Total Runtime | 0.0s |
| Total Context Tokens | 0 |

## Scenario: Personal Profile Recall

**Category:** personal_facts | **Accuracy:** 0.0% | **Avg Latency:** 1ms

**KG Stats:** 5 nodes, 5 edges, works_at, married_to, parent_of, owns

### Turn-by-Turn Results

#### Turn 1 ❌

**User:** What is Alex Chen's job?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `software engineer`
**Found:** ❌ No
**Missing:** `software engineer`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 2 ✅

**User:** Tell me about the weather in Tokyo today.

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]


_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 3 ❌

**User:** How old is Alex?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `34`
**Found:** ❌ No
**Missing:** `34`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 4 ❌

**User:** What does Alex do in his free time?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `climbing, photography`
**Found:** ❌ No
**Missing:** `climbing, photography`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 5 ❌

**User:** What is the capital of France? Just checking.

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `Paris`
**Found:** ❌ No
**Missing:** `Paris`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 6 ❌

**User:** Where does Alex's wife work?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `children's hospital, seattle, nurse`
**Found:** ❌ No
**Missing:** `children's hospital, seattle, nurse`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 7 ❌

**User:** Does Alex have any pets? What kind?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `cat, pixel, maine coon`
**Found:** ❌ No
**Missing:** `cat, pixel, maine coon`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 8 ❌

**User:** Quick math: what's 15 times 12?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `180`
**Found:** ❌ No
**Missing:** `180`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 9 ❌

**User:** What car does Alex drive?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `tesla, model 3`
**Found:** ❌ No
**Missing:** `tesla, model 3`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 10 ❌

**User:** What's the name of Alex's daughter and where does she go to school?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `lily, maple elementary`
**Found:** ❌ No
**Missing:** `lily, maple elementary`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 11 ❌

**User:** Going back to Alex — what company does he work for and what do they make?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `novatech, cloud, infrastructure`
**Found:** ❌ No
**Missing:** `novatech, cloud, infrastructure`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 12 ❌

**User:** What does Alex order at a coffee shop?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `oat milk, latte`
**Found:** ❌ No
**Missing:** `oat milk, latte`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

## Scenario: World Knowledge Chain Reasoning

**Category:** chain_reasoning | **Accuracy:** 0.0% | **Avg Latency:** 1ms

**KG Stats:** 8 nodes, 5 edges, capital_is, born_in, worked_in, different_from

### Turn-by-Turn Results

#### Turn 1 ❌

**User:** What is the capital of France?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `paris`
**Found:** ❌ No
**Missing:** `paris`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 2 ❌

**User:** What famous structures is that city known for?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `eiffel, louvre`
**Found:** ❌ No
**Missing:** `eiffel, louvre`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 3 ❌

**User:** Albert Einstein — what country was he from originally?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `german, germany`
**Found:** ❌ No
**Missing:** `german, germany`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 4 ❌

**User:** What is Einstein most famous for scientifically?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `relativity, e=mc`
**Found:** ❌ No
**Missing:** `relativity, e=mc`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 5 ❌

**User:** Can you name a famous female scientist who won two Nobel Prizes?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `curie, marie`
**Found:** ❌ No
**Missing:** `curie, marie`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 6 ❌

**User:** How far is the Moon from Earth?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `384`
**Found:** ❌ No
**Missing:** `384`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 7 ❌

**User:** What was the first moon landing mission called and when did it happen?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `apollo 11, 1969`
**Found:** ❌ No
**Missing:** `apollo 11, 1969`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 8 ❌

**User:** How many moons does Mars have, and what are they called?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `2, phobos, deimos`
**Found:** ❌ No
**Missing:** `2, phobos, deimos`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 9 ❌

**User:** Back to Einstein — did he win a Nobel Prize? When?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `1921, nobel`
**Found:** ❌ No
**Missing:** `1921, nobel`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 10 ❌

**User:** What language is spoken in the country whose capital is Paris?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `french`
**Found:** ❌ No
**Missing:** `french`

_Context tokens: 0 | History dropped: 0 | Latency: 2ms_

> ⚠️ **Error:** Maximum call stack size exceeded

## Scenario: Organizational Entity Relations

**Category:** entity_relations | **Accuracy:** 0.0% | **Avg Latency:** 1ms

**KG Stats:** 8 nodes, 7 edges, leads, reports_to

### Turn-by-Turn Results

#### Turn 1 ❌

**User:** Who is the CEO of Acme Corp?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `jordan, wells`
**Found:** ❌ No
**Missing:** `jordan, wells`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 2 ❌

**User:** Who does Priya Sharma report to?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `jordan, ceo, wells`
**Found:** ❌ No
**Missing:** `jordan, ceo, wells`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 3 ❌

**User:** What is Marcus Lee's role at the company?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `cfo, finance`
**Found:** ❌ No
**Missing:** `cfo, finance`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 4 ❌

**User:** How long has the CEO been at Acme Corp?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `8, years`
**Found:** ❌ No
**Missing:** `8, years`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 5 ❌

**User:** Who manages the engineering team under the CTO?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `rachel, torres, vp engineering`
**Found:** ❌ No
**Missing:** `rachel, torres, vp engineering`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 6 ❌

**User:** Name the senior engineers and their teams.

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `lin wei, aiko tanaka, platform, data`
**Found:** ❌ No
**Missing:** `lin wei, aiko tanaka, platform, data`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 7 ❌

**User:** Who is responsible for product development reporting to the CTO?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `omar, hassan, vp product`
**Found:** ❌ No
**Missing:** `omar, hassan, vp product`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 8 ❌

**User:** If I wanted to talk to someone about finances at Acme, who would that be?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `marcus, lee, cfo`
**Found:** ❌ No
**Missing:** `marcus, lee, cfo`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 9 ❌

**User:** What department does Aiko Tanaka work in?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `engineering, data`
**Found:** ❌ No
**Missing:** `engineering, data`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 10 ❌

**User:** What year was Acme Corp founded?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `1998`
**Found:** ❌ No
**Missing:** `1998`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

## Scenario: Historical Timeline Recall

**Category:** temporal | **Accuracy:** 0.0% | **Avg Latency:** 1ms

**KG Stats:** 6 nodes, 5 edges, started_with, followed_by

### Turn-by-Turn Results

#### Turn 1 ❌

**User:** When did Project Phoenix kick off?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `january, 15, 2024`
**Found:** ❌ No
**Missing:** `january, 15, 2024`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 2 ❌

**User:** What happened at the kickoff meeting?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `requirements, finalized`
**Found:** ❌ No
**Missing:** `requirements, finalized`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 3 ❌

**User:** When was the alpha version released?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `march, 8, 2024`
**Found:** ❌ No
**Missing:** `march, 8, 2024`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 4 ❌

**User:** How many bugs were found in the alpha?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `47`
**Found:** ❌ No
**Missing:** `47`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 5 ❌

**User:** What was the team size for the project?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `12`
**Found:** ❌ No
**Missing:** `12`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 6 ❌

**User:** When did the beta launch happen and what version was it?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `may, 22, 2024, v0.8`
**Found:** ❌ No
**Missing:** `may, 22, 2024, v0.8`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 7 ❌

**User:** How many external testers participated in beta?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `250`
**Found:** ❌ No
**Missing:** `250`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 8 ❌

**User:** What was the official production release date?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `august, 1, 2024`
**Found:** ❌ No
**Missing:** `august, 1, 2024`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 9 ❌

**User:** Who was the launch partner for the production release?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `techcorp`
**Found:** ❌ No
**Missing:** `techcorp`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 10 ❌

**User:** How quickly did the user base grow after launch?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `340%, 45 days`
**Found:** ❌ No
**Missing:** `340%, 45 days`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 11 ❌

**User:** What was the uptime percentage after launch?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `99.7%, 99.7`
**Found:** ❌ No
**Missing:** `99.7%, 99.7`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 12 ❌

**User:** From kickoff to production, roughly how many months did the project take?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `6`
**Found:** ❌ No
**Missing:** `6`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

## Scenario: Multi-Hop Knowledge Retrieval

**Category:** chain_reasoning | **Accuracy:** 0.0% | **Avg Latency:** 1ms

**KG Stats:** 7 nodes, 6 edges, capital_of, uses_currency, issued_by, located_in, created_by, employed_by

### Turn-by-Turn Results

#### Turn 1 ❌

**User:** What is the currency of Japan?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `yen, jpy`
**Found:** ❌ No
**Missing:** `yen, jpy`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 2 ❌

**User:** Which bank issues that currency?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `bank of japan`
**Found:** ❌ No
**Missing:** `bank of japan`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 3 ❌

**User:** Where is the Bank of Japan located?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `tokyo`
**Found:** ❌ No
**Missing:** `tokyo`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 4 ❌

**User:** Who created the Python programming language?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `guido, van rossum`
**Found:** ❌ No
**Missing:** `guido, van rossum`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 5 ❌

**User:** What nationality is the creator of Python?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `dutch`
**Found:** ❌ No
**Missing:** `dutch`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 6 ❌

**User:** Where did Guido van Rossum work as of 2020?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `microsoft`
**Found:** ❌ No
**Missing:** `microsoft`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 7 ❌

**User:** Who founded Microsoft?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `bill gates, paul allen`
**Found:** ❌ No
**Missing:** `bill gates, paul allen`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 8 ❌

**User:** What is the GDP ranking of Japan globally?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `4`
**Found:** ❌ No
**Missing:** `4`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 9 ❌

**User:** When was the Japanese Yen introduced?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `1871`
**Found:** ❌ No
**Missing:** `1871`

_Context tokens: 0 | History dropped: 0 | Latency: 0ms_

> ⚠️ **Error:** Maximum call stack size exceeded

#### Turn 10 ❌

**User:** What year was Python first released and what version is current?

_No KG results retrieved_

**Assistant:** [ERROR: Maximum call stack size exceeded]

**Expected Keywords:** `1991, 3.12`
**Found:** ❌ No
**Missing:** `1991, 3.12`

_Context tokens: 0 | History dropped: 0 | Latency: 1ms_

> ⚠️ **Error:** Maximum call stack size exceeded

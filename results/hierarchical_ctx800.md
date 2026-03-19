# Run Report: hierarchical_ctx800

_Generated: 2026-03-19T22:41:25.246Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `hierarchical` |
| Graph Depth | 3 |
| Sub-Trees (branching) | 3 |
| Multi-Graph | false |
| Weighted Edges | false |
| Max Context Tokens | 800 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 75 |
| Overall Accuracy | 87.1% |
| Recall Accuracy | 80.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 80.0% |
| Avg Latency | 1051ms |
| Total Runtime | 78.9s |
| Total Context Tokens | 42686 |

## Scenario: Personal Introduction & Career Update

**Category:** personal | **Overall:** 90.9% | **Recall:** 100.0% | **Verify-Update:** 50.0%

**Final KG:** 4 nodes, 2 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi! My name is Jordan Blake and I'm 29 years old.

_📥 Facts extracted: **2** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29
```
</details>

**Assistant:** Hello Jordan! I've noted that you're 29 years old. Is there anything specific you'd like to discuss or need help with?


_Context tokens: 176 | Dropped: 0 | Latency: 921ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **2** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Got it, Jordan. I've recorded that you work as a data analyst at DataStream Inc for the past 3 years. How can I assist you today?


_Context tokens: 265 | Dropped: 0 | Latency: 1257ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Noted, Jordan. I've added that you live in Austin, Texas, and enjoy Brazilian jiu-jitsu, training four times a week. Is there anything else you'd like to share or any questions you have?


_Context tokens: 352 | Dropped: 0 | Latency: 1361ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Your name is Jordan Blake, and you are 29 years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 415 | Dropped: 0 | Latency: 366ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Argentina won the FIFA World Cup in 2022, defeating France in the final match.

**Expected:** `argentina` → ✅ All found

_Context tokens: 445 | Dropped: 0 | Latency: 403ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** You work at **DataStream Inc**, and your role is **data analyst**.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 484 | Dropped: 0 | Latency: 385ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I also have a golden retriever named Biscuit who is 2 years old.

_📥 Facts extracted: **3** | KG nodes: 2 → 4 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: name: Biscuit, age: 2 years old
- user: pet: golden retriever
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Noted, Jordan. I've added that you have a golden retriever named Biscuit who is 2 years old.


_Context tokens: 543 | Dropped: 0 | Latency: 1309ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** and train **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 566 | Dropped: 0 | Latency: 438ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

<details><summary>📚 KG Memory Injected</summary>

```
- DataStream Inc
```
</details>

**Assistant:** A **neural network** is a computing system inspired by the human brain, designed to recognize patterns.

Think of it like a team of workers:
1.  **Input:** You feed the system data (like a picture of a cat).
2.  **Processing:** The data passes through layers of interconnected nodes (neurons). Each node performs a simple calculation, similar to how a single brain cell processes information.
3.  **Output:** The results are combined to produce a final answer (e.g., "This is a cat").

The key feature is that these networks **learn** from examples. Instead of being explicitly programmed with rules, they adjust their internal connections based on feedback, allowing them to improve accuracy over time. This makes them powerful tools for tasks like image recognition, language translation, and recommendation systems.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 548 | Dropped: 0 | Latency: 1656ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.

_📥 Facts extracted: **2** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
- DataStream Inc
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- Biscuit: name: Biscuit, age: 2 years old
```
</details>

**Assistant:** That's fantastic news, Jordan! I've updated your record to reflect your new title as **Senior Data Analyst** at **DataStream Inc**. Congratulations on the promotion!

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 727 | Dropped: 5 | Latency: 1203ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** What's my pet's name and how old is it?

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
- Biscuit: name: Biscuit, age: 2 years old
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** Your pet's name is **Biscuit**, and it is **2 years old**.

**Expected:** `biscuit, 2` → ✅ All found

_Context tokens: 736 | Dropped: 6 | Latency: 480ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

<details><summary>📚 KG Memory Injected</summary>

```
- DataStream Inc
```
</details>

**Assistant:** The boiling point of water is **212°F** at standard atmospheric pressure.

**Expected:** `212` → ✅ All found

_Context tokens: 735 | Dropped: 5 | Latency: 476ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is my current job title?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** Your current job title is **Senior Data Analyst**.

**Expected:** `senior, analyst` → ✅ All found

_Context tokens: 730 | Dropped: 10 | Latency: 404ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 738 | Dropped: 10 | Latency: 403ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** How long have I been working in data? And what's my current role?

<details><summary>📚 KG Memory Injected</summary>

```
- DataStream Inc
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** You have been working in data for **3 years**, and your current role is **Senior Data Analyst**.

**Expected:** `datastream, senior` → ❌ Missing: `datastream`

_Context tokens: 734 | Dropped: 13 | Latency: 498ms_

## Scenario: Team Building & Role Reassignment

**Category:** professional | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 5 nodes, 10 edges | **Avg nodes/tell turn:** 1.3

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** I manage a small engineering team. Let me tell you about them. First there's Priya, she's our backend developer — she specialises in Python and databases.

_📥 Facts extracted: **2** | KG nodes: 0 → 2 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user
```
</details>

**Assistant:** Got it. I've noted that **Priya** is your **backend developer** specializing in **Python and databases**, and she is part of the team you manage.


_Context tokens: 215 | Dropped: 0 | Latency: 1094ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Then we have Marcus. He's our DevOps engineer and handles all our cloud infrastructure on AWS.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- user
```
</details>

**Assistant:** Noted. I've added **Marcus** to your team as a **DevOps engineer** specializing in **AWS cloud infrastructure**.

I also see that Marcus is listed as managing three users in my records. Since you are the team lead, I assume you are one of those users he manages, or perhaps Priya is? Let me know if you'd like to clarify the reporting structure.


_Context tokens: 296 | Dropped: 0 | Latency: 1852ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **3** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Got it. I've updated the records with **Yuki**: she is your **frontend developer** specializing in **React and TypeScript**, and she joined **6 months ago**.

To summarize your current team structure based on our records:
*   **You**: Team Lead (manages Priya and potentially others)
*   **Priya**: Backend Developer (Python & Databases)
*   **Marcus**: DevOps Engineer (AWS Infrastructure)
*   **Yuki**: Frontend Developer (React & TypeScript)

Is there anything specific you'd like to discuss regarding their roles or the team's direction?


_Context tokens: 433 | Dropped: 0 | Latency: 2127ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What does Priya specialise in?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user
```
</details>

**Assistant:** Based on the records, **Priya** specializes in **Python and databases**. She is your backend developer.

**Expected:** `python, backend, database` → ✅ All found

_Context tokens: 557 | Dropped: 0 | Latency: 441ms_

#### Turn 5 📝 `[tell]` ✅

**User:** I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
- user
```
</details>

**Assistant:** Noted. I've added **Dmitri** to your team as the **QA lead** with **5 years of tenure**, responsible for writing **all automated test suites**.

Your current team structure now looks like this:
*   **You**: Team Lead
*   **Priya**: Backend Developer (Python & Databases)
*   **Marcus**: DevOps Engineer (AWS Infrastructure)
*   **Yuki**: Frontend Developer (React & TypeScript)
*   **Dmitri**: QA Lead (Automated Test Suites)

Is there anything else you'd like to share about the team or their work?


_Context tokens: 636 | Dropped: 0 | Latency: 2463ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What's the difference between TCP and UDP?

<details><summary>📚 KG Memory Injected</summary>

```
- user
```
</details>

**Assistant:** TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols used to send data over networks, but they differ significantly in how they handle data delivery:

### **TCP**
- **Reliable**: Guarantees delivery through acknowledgments, retransmissions, and error checking.
- **Ordered**: Ensures packets arrive in the order they were sent.
- **Connection-oriented**: Requires a handshake before data transfer begins.
- **Slower**: Overhead from reliability mechanisms makes it less efficient for large amounts of data.
- **Use Cases**: Web browsing (HTTP), email (SMTP), file transfers (FTP), and database connections.

### **UDP**
- **Unreliable**: Does not guarantee delivery or order; packets may be lost or arrive out of order.
- **Connectionless**: No handshake; data is sent immediately.
- **Faster**: Minimal overhead makes it ideal for time-sensitive applications.
- **Use Cases**: Video streaming, online gaming, VoIP (voice over IP), and DNS queries.

### **Key Difference**
Choose **TCP** when data integrity and order are critical (e.g., sending important files). Choose **UDP** when speed is more important than reliability (e.g., live video calls).

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 742 | Dropped: 0 | Latency: 2447ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- user
```
</details>

**Assistant:** **Marcus** manages your cloud infrastructure, and you use **AWS** (Amazon Web Services) as your platform.

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 729 | Dropped: 6 | Latency: 510ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**. Her tech stack focuses on **React and TypeScript** as a frontend developer.

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 732 | Dropped: 8 | Latency: 536ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you give me a quick overview of what Kubernetes does?

<details><summary>📚 KG Memory Injected</summary>

```
- user
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

Here is a quick overview of its core functions:

*   **Orchestration**: It automatically manages containers across multiple machines, ensuring they are deployed, monitored, and updated efficiently.
*   **Scaling**: It can automatically increase or decrease the number of running containers based on traffic or resource usage.
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or moves it to a healthy node.
*   **Load Balancing**: It distributes incoming network traffic across the containers to ensure high availability.
*   **Service Discovery & Load Balancing**: It helps applications find each other and balances the load across multiple instances.

In short, Kubernetes acts as the "traffic controller" for your cloud infrastructure, ensuring your applications run smoothly and reliably without manual intervention.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 724 | Dropped: 9 | Latency: 1943ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.

_📥 Facts extracted: **3** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend developer, responsibility: leading the whole team technically
  → manages: user
  → stepped_back_from: Priya
  → stepped_back_from: Priya
- user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
```
</details>

**Assistant:** That's great news! Priya's promotion to **Tech Lead** aligns perfectly with her existing responsibilities. She will now focus on **leading the whole team technically**, stepping back from hands-on backend coding while leveraging her expertise in **Python and databases**.

This transition ensures that the team benefits from her strategic oversight, while she continues to guide technical decisions and mentorship. Is there anything specific you'd like to discuss about her new role or the team's direction?

**Expected:** `priya, tech lead, promoted` → ❌ Missing: `promoted`

_Context tokens: 679 | Dropped: 12 | Latency: 2101ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** How long has Dmitri been with us and what does he do?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
- user
```
</details>

**Assistant:** Dmitri has been with the team for **5 years**. As the **QA Lead**, his primary responsibility is writing all the automated test suites.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 721 | Dropped: 14 | Latency: 569ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What year was Python first released?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend developer, responsibility: leading the whole team technically
  → manages: user
  → stepped_back_from: Priya
  → stepped_back_from: Priya
- user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
```
</details>

**Assistant:** Python was first released in **1991**.

**Expected:** `1991` → ✅ All found

_Context tokens: 485 | Dropped: 18 | Latency: 338ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend developer, responsibility: leading the whole team technically
  → manages: user
  → stepped_back_from: Priya
  → stepped_back_from: Priya
- user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Priya's current role is **Tech Lead**.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ✅ None found

_Context tokens: 574 | Dropped: 18 | Latency: 343ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend developer, responsibility: leading the whole team technically
  → manages: user
  → stepped_back_from: Priya
  → stepped_back_from: Priya
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She specializes in **React and TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 569 | Dropped: 18 | Latency: 401ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Give me a quick summary of Priya — what changed about her role and what does she do now?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend developer, responsibility: leading the whole team technically
  → manages: user
  → stepped_back_from: Priya
  → stepped_back_from: Priya
- user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → works_for: user
  → works_for: user
  → works_for: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Priya has been promoted to **Tech Lead**, stepping back from hands-on backend coding to focus on **leading the whole team technically**. Her expertise lies in **Python and databases**, and she now oversees the team's technical direction rather than writing code herself.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 657 | Dropped: 18 | Latency: 726ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 90.0% | **Recall:** 100.0% | **Verify-Update:** 50.0%

**Final KG:** 5 nodes, 0 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** We just kicked off Project Orion today — it's a customer portal rebuild for Nexus Financial. The project has a budget of $850,000 and a team of 8 people.

_📥 Facts extracted: **5** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today
```
</details>

**Assistant:** Got it! I've noted that **Project Orion** is a customer portal rebuild for **Nexus Financial**, with a budget of **$850,000** and a team of **8 people**, starting today. Let me know if you'd like help tracking progress or planning milestones!


_Context tokens: 224 | Dropped: 0 | Latency: 1752ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Camille: role: lead designer, tool: Figma
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille
```
</details>

**Assistant:** Noted! **Project Orion's** design phase is scheduled to end by the **end of March**, with **Camille** leading the design efforts using **Figma** for all mockups.

Here's a quick summary of the project details so far:
- **Project**: Project Orion (Customer portal rebuild for Nexus Financial)
- **Budget**: $850,000
- **Team Size**: 8 people
- **Start Date**: Today
- **Design Phase End Date**: End of March
- **Lead Designer**: Camille (using Figma)

Let me know if you'd like to dive deeper into timelines, resource allocation, or next steps!


_Context tokens: 352 | Dropped: 0 | Latency: 2305ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **2** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Understood. I've added the **development phase start date (April 1st)** and the **beta release date (June 15th)** to the Project Orion timeline.

Here is the updated project overview:
*   **Project**: Project Orion (Customer portal rebuild for Nexus Financial)
*   **Client**: Nexus Financial
*   **Budget**: $850,000
*   **Team**: 8 people
*   **Start Date**: Today
*   **Design Phase**: Ends end of March (Led by Camille using Figma)
*   **Development Phase**: Starts April 1st
*   **Beta Release**: June 15th

Everything looks clear for the roadmap. Do you need help estimating the development duration or planning the handoff from design to development?


_Context tokens: 525 | Dropped: 0 | Latency: 2495ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** The budget for **Project Orion** is **$850,000**, and the client is **Nexus Financial**.

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 713 | Dropped: 0 | Latency: 536ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** **REST** stands for **Representational State Transfer**.

It is an architectural style for networked applications, most commonly used to design web services. Key characteristics include:
*   **Stateless**: Each request from a client to a server must contain all the information needed to understand the request.
*   **Client-Server**: A clear separation between the client (user interface) and the server (data storage).
*   **Cacheable**: Responses can be cached if they are safe to do so.
*   **Uniform Interface**: A consistent way to interact with resources.
*   **Layered System**: Users don't necessarily know if they are communicating directly with the origin server or an intermediary.
*   **Code on Demand (Optional)**: Servers can extend functionality by transferring executable code (though this is rarely used in modern REST APIs).

In the context of APIs, RESTful services typically use **HTTP methods** (like GET, POST, PUT, DELETE) to manipulate resources (data) identified by URLs.

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 666 | Dropped: 0 | Latency: 2011ms_

#### Turn 6 📝 `[tell]` ✅

**User:** We've decided to use React on the frontend and a Node.js microservices architecture on the backend. PostgreSQL will be our main database.

_📥 Facts extracted: **3** | KG nodes: 2 → 5 (+3)_

<details><summary>📚 KG Memory Injected</summary>

```
- backend: architecture: Node.js microservices
- frontend: technology: React
- database: technology: PostgreSQL
```
</details>

**Assistant:** Noted. I've updated the technology stack for **Project Orion**:

*   **Frontend**: React
*   **Backend**: Node.js microservices
*   **Database**: PostgreSQL

This aligns with the current architecture. With the design phase wrapping up and development starting April 1st, this stack will guide our implementation plan. Would you like to discuss how we might structure the microservices or plan the database schema?


_Context tokens: 723 | Dropped: 4 | Latency: 1711ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- Camille: role: lead designer, tool: Figma
```
</details>

**Assistant:** Our **development phase kicks off on April 1st**, and **Camille** is leading the design phase. She is using **Figma** for the design work.

**Expected:** `april, camille` → ✅ All found

_Context tokens: 706 | Dropped: 6 | Latency: 588ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- frontend: technology: React
- database: technology: PostgreSQL
```
</details>

**Assistant:** The tech stack for **Project Orion** is:

*   **Frontend**: React
*   **Backend**: Node.js microservices
*   **Database**: PostgreSQL

**Expected:** `react, node, postgresql` → ✅ All found

_Context tokens: 746 | Dropped: 7 | Latency: 608ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym representing five principles of object-oriented design that help create software that is easy to understand, maintain, and extend. They were introduced by Robert C. Martin (Uncle Bob).

Here is what each letter stands for:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept**: A class should have only one reason to change. It should have one job to do.
    *   **Goal**: Reduce coupling and complexity. If a class needs to change for two different reasons, it likely has too many responsibilities.

2.  **O - Open/Closed Principle (OCP)**
    *   **Concept**: Software entities (classes, modules, functions, etc.) should be **open for extension** but **closed for modification**.
    *   **Goal**: You should be able to add new functionality without changing existing, working code. This is usually achieved through abstraction and inheritance or interfaces.

3.  **L - Liskov Substitution Principle (LSP)**
    *   **Concept**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Goal**: Ensure that subclasses behave as expected when used in place of their parent class. If a subclass breaks this, the program logic fails.

4.  **I - Interface Segregation Principle (ISP)**
    *   **Concept**: Clients should not be forced to depend on interfaces they do not use.
    *   **Goal**: Create many small, specific interfaces rather than a few, large, "fat" ones. This reduces the complexity of the code that needs to implement the interface.

5.  **D - Dependency Inversion Principle (DIP)**
    *   **Concept**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Also, abstractions should not depend on details; details should depend on abstractions.
    *   **Goal**: Promote loose coupling. By depending on interfaces (abstractions) rather than concrete implementations, you make it easier to swap out components or add new ones without rewriting the core logic.

**Why it matters:**
Applying SOLID principles leads to code that is more modular, testable, and easier to refactor. It is particularly relevant for the **Node.js microservices architecture** you mentioned for Project Orion, as it helps manage the complexity of multiple interacting services.

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 714 | Dropped: 6 | Latency: 4400ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.

_📥 Facts extracted: **4** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** Got it. The scope expansion for the Project Orion rebuild at Nexus Financial has been noted. The added payment module requirement is the reason the beta release date has been pushed from June 15th to August 1st.

I'll keep this in mind for any future planning or status updates.

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 290 | Dropped: 18 | Latency: 1776ms_

#### Turn 11 📝 `[tell]` ❌

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Noted. The external vendor **PayCraft** will be building the payment module for Project Orion, and they will deliver their SDK by **July 1st**. This aligns with the timeline for the development phase starting April 1st and the subsequent beta release on August 1st.


_Context tokens: 385 | Dropped: 18 | Latency: 909ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- database: technology: PostgreSQL
```
</details>

**Assistant:** We are using **PostgreSQL** as the database technology.

The team size for Project Orion is **8 people**.

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 481 | Dropped: 18 | Latency: 446ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to manage collections of data, but they differ in the order in which elements are added and removed.

### **Stack (LIFO - Last In, First Out)**
*   **Access Point:** Elements are added and removed from the **same end** (the top).
*   **Order:** The last element added is the first one to be removed.
*   **Analogy:** A stack of plates. You add a plate on top, and you take the top plate off first.
*   **Common Operations:** `Push` (add), `Pop` (remove), `Peek` (view top).
*   **Use Cases:** Function call management (call stack), undo mechanisms, expression evaluation.

### **Queue (FIFO - First In, First Out)**
*   **Access Point:** Elements are added at one end (rear) and removed from the other end (front).
*   **Order:** The first element added is the first one to be removed.
*   **Analogy:** A line of people waiting for a bus. The person who arrived first leaves first.
*   **Common Operations:** `Enqueue` (add to rear), `Dequeue` (remove from front), `Front` (view first element).
*   **Use Cases:** Task scheduling, print spooling, breadth-first search in algorithms.

**Key Difference:** Stacks work backwards (LIFO), while Queues work forwards (FIFO).

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 411 | Dropped: 18 | Latency: 2791ms_

#### Turn 14 ✅ `[verify_update]` ✅

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Our beta release for Project Orion is scheduled for **August 1st**.

This follows the development phase starting April 1st and the delivery of the external payment module SDK by July 1st.

**Expected:** `august` → ✅ All found
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 728 | Dropped: 20 | Latency: 660ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** The beta release was pushed back from the original June 15th date to **August 1st** due to the **expanded scope** of the project, which included adding a new **payment module** requirement.

The payment module is being handled by the **Nexus Financial** team, who are providing the necessary SDK.

**Expected:** `payment, paycraft, august` → ❌ Missing: `paycraft`

_Context tokens: 710 | Dropped: 22 | Latency: 856ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 81.8% | **Recall:** 60.0% | **Verify-Update:** 100.0%

**Final KG:** 6 nodes, 3 edges | **Avg nodes/tell turn:** 1.3

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** I want to tell you about my friend Sam. Sam is a graphic designer who lives in Melbourne and works at a studio called Pixel & Ink.

_📥 Facts extracted: **3** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
```
</details>

**Assistant:** Got it! I've noted that Sam is a graphic designer based in Melbourne who works at Pixel & Ink.


_Context tokens: 203 | Dropped: 0 | Latency: 1022ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
```
</details>

**Assistant:** Thanks for sharing about Tariq! I've updated my records: he's a high school maths teacher in London with 8 years of experience.


_Context tokens: 265 | Dropped: 0 | Latency: 1516ms_

#### Turn 3 📝 `[tell]` ✅

**User:** And there's Lena — she's a freelance photographer based in Berlin. She mainly does travel and food photography.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8
```
</details>

**Assistant:** Noted! I've added Lena to my records: she's a freelance photographer in Berlin specializing in travel and food photography.


_Context tokens: 374 | Dropped: 0 | Latency: 1148ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** Where does Sam live and what does she do for work?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam lives in **Melbourne** and works as a **graphic designer** at Pixel & Ink.

**Expected:** `melbourne, designer, pixel` → ✅ All found

_Context tokens: 426 | Dropped: 0 | Latency: 386ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What's the capital city of Australia?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** The capital city of Australia is **Canberra**.

**Expected:** `canberra` → ✅ All found

_Context tokens: 464 | Dropped: 0 | Latency: 330ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
```
</details>

**Assistant:** Tariq has been teaching for **8 years** and teaches **maths**.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 456 | Dropped: 0 | Latency: 381ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.

_📥 Facts extracted: **3** | KG nodes: 3 → 5 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
```
</details>

**Assistant:** Got it! I've added Zoe to my records: she's a software developer in Toronto working on mobile apps for AppLaunch.


_Context tokens: 542 | Dropped: 0 | Latency: 1411ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What kind of photography does Lena do and where is she based?

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- AppLaunch
```
</details>

**Assistant:** Lena specializes in **travel and food photography** and is based in **Berlin**.

**Expected:** `lena, berlin, travel, food` → ✅ All found

_Context tokens: 637 | Dropped: 0 | Latency: 449ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is the speed of light in kilometres per second?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- AppLaunch
```
</details>

**Assistant:** The speed of light is approximately **299,792 kilometres per second**.

**Expected:** `300` → ❌ Missing: `300`

_Context tokens: 636 | Dropped: 0 | Latency: 468ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.

_📥 Facts extracted: **3** | KG nodes: 5 → 6 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne
  → left: Pixel & Ink
- Pixel & Ink
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
```
</details>

**Assistant:** Got it! I've updated Sam's records: she has moved to **Sydney** and is now working as a **freelance** graphic designer, having left Pixel & Ink.

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 717 | Dropped: 0 | Latency: 1543ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** Where does Zoe work and what does she do?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne
  → left: Pixel & Ink
- Pixel & Ink
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Zoe works for **AppLaunch**, where she develops **mobile apps** as a software developer.

**Expected:** `zoe, toronto, applaunch, mobile` → ❌ Missing: `toronto`

_Context tokens: 734 | Dropped: 2 | Latency: 489ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** Who wrote the novel '1984'?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
- Pixel & Ink
```
</details>

**Assistant:** The novel *1984* was written by **George Orwell**.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 720 | Dropped: 1 | Latency: 451ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** Where does Sam live now?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne
  → left: Pixel & Ink
- Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- AppLaunch
```
</details>

**Assistant:** Sam now lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 731 | Dropped: 4 | Latency: 398ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Tell me about Tariq — where is he, how long has he taught?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
- Pixel & Ink
```
</details>

**Assistant:** Tariq is based in **London** and has been teaching for **8 years**.

**Expected:** `tariq, london, 8` → ✅ All found

_Context tokens: 749 | Dropped: 2 | Latency: 500ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** What's Sam's current work situation — where is she and does she still work at Pixel and Ink?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne
  → left: Pixel & Ink
- Pixel & Ink
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- AppLaunch
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam is currently based in **Sydney** and works as a **freelance** graphic designer. She has **left Pixel & Ink**, so she no longer works there.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 742 | Dropped: 6 | Latency: 635ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 72.7% | **Recall:** 40.0% | **Verify-Update:** 100.0%

**Final KG:** 4 nodes, 2 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi, I'm Mei Tanaka. I'm a 32-year-old UX researcher at a health tech company called VitalMetrics.

_📥 Facts extracted: **4** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics
```
</details>

**Assistant:** Got it, Mei! I've noted that you're a 32-year-old UX researcher at VitalMetrics. Is there anything specific you'd like to discuss or work on related to your role?


_Context tokens: 198 | Dropped: 0 | Latency: 1438ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I live in Singapore and I commute to work by MRT. I've been at VitalMetrics for 4 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Noted, Mei! I've added that you live in Singapore, commute via MRT, and have been with VitalMetrics for 4 years. How's your work going at the company?


_Context tokens: 296 | Dropped: 0 | Latency: 1410ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.

_📥 Facts extracted: **5** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Understood, Mei! I've recorded that you're learning Spanish at a B1 level, taking lessons on Tuesdays and Thursdays with your tutor, Carlos. Is there anything specific about your language studies or your work at VitalMetrics you'd like to explore?


_Context tokens: 394 | Dropped: 0 | Latency: 1774ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Based on the information I have:

*   **Job:** UX researcher
*   **Company:** VitalMetrics

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 473 | Dropped: 0 | Latency: 436ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **2** | KG nodes: 2 → 4 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- HealthSync: project: work project
  → works_on: user
- user: current project: HealthSync
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Noted, Mei! I've added that your current project at VitalMetrics is **HealthSync**, which focuses on redesigning the patient onboarding flow to reduce drop-off rates.

Is there anything specific about the project you'd like to discuss or work on?


_Context tokens: 558 | Dropped: 0 | Latency: 1366ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What is the most spoken language in the world by native speakers?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync
```
</details>

**Assistant:** The most spoken language in the world by native speakers is **Mandarin Chinese** (also known as Chinese or Mandarin).

It has approximately **900 to 1.1 billion** native speakers, making it significantly more widely spoken natively than any other language, including English, which has around 1.1 billion total speakers (but fewer native speakers).

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 631 | Dropped: 0 | Latency: 917ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** What language am I learning and what level am I at?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync
```
</details>

**Assistant:** You are learning **Spanish**, and your current proficiency level is **B1**.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 739 | Dropped: 0 | Latency: 315ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** How long have I been at VitalMetrics and how do I commute?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync
```
</details>

**Assistant:** You've been at **VitalMetrics for 4 years**, and you commute to work using the **MRT**.

**Expected:** `4, mrt, singapore` → ❌ Missing: `singapore`

_Context tokens: 707 | Dropped: 2 | Latency: 511ms_

#### Turn 9 ✏️ `[update]` ✅

**User:** I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.

_📥 Facts extracted: **3** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
```
</details>

**Assistant:** That's great news, Mei! I've updated your records to reflect that you've moved from **B1 to B2** in Spanish.

Since you're now at the B2 level, are you planning to take your lessons with Carlos on Tuesdays and Thursdays, or do you have any other goals you'd like to set for your language learning journey?

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 749 | Dropped: 3 | Latency: 1770ms_

#### Turn 10 💬 `[distractor]` ✅

**User:** Can you explain what UX research involves?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
```
</details>

**Assistant:** UX research involves gathering insights about users, their needs, and behaviors to inform design decisions. It helps create products that are usable, accessible, and aligned with user expectations.

Key activities include:
- **User interviews** and surveys to understand goals and pain points
- **Observational studies** (e.g., usability testing) to see how users interact with a product
- **Data analysis** of usage metrics and feedback
- **Prototyping and testing** to validate design concepts before development

In your case, at VitalMetrics, UX research likely supports projects like **HealthSync**, ensuring the patient onboarding flow is intuitive and effective for users.

Would you like to dive deeper into any specific research method or discuss how it applies to your current project?

**Expected:** `user, research` → ✅ All found

_Context tokens: 703 | Dropped: 6 | Latency: 1568ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- HealthSync: project: work project
  → works_on: user
```
</details>

**Assistant:** You are working on **HealthSync** at VitalMetrics.

**Expected:** `healthsync, onboarding` → ❌ Missing: `onboarding`

_Context tokens: 683 | Dropped: 12 | Latency: 412ms_

#### Turn 12 ✏️ `[update]` ✅

**User:** I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.

_📥 Facts extracted: **1** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** That's great to hear! I've updated your location to **Jurong East** in Singapore.

Since you're now in Jurong East, does your MRT commute route change from what it was before? Also, with your new location, are you still meeting with Carlos on Thursdays for your Spanish lessons, or does the schedule need any adjustments?

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 732 | Dropped: 12 | Latency: 1335ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- HealthSync: project: work project
  → works_on: user
```
</details>

**Assistant:** Your current proficiency level in Spanish is **B2**.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ✅ None found

_Context tokens: 736 | Dropped: 17 | Latency: 432ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What is my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** Your name is **Mei Tanaka**, and you are **32** years old.

**Expected:** `mei, tanaka, 32` → ✅ All found

_Context tokens: 671 | Dropped: 18 | Latency: 465ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Where in Singapore am I living now?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** You are currently living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 703 | Dropped: 18 | Latency: 284ms_

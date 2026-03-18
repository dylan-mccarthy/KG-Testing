# Run Report: hierarchical_ctx400

_Generated: 2026-03-18T20:58:28.057Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `hierarchical` |
| Graph Depth | 3 |
| Sub-Trees (branching) | 3 |
| Multi-Graph | false |
| Weighted Edges | false |
| Max Context Tokens | 400 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 75 |
| Overall Accuracy | 83.3% |
| Recall Accuracy | 80.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 60.0% |
| Avg Latency | 955ms |
| Total Runtime | 71.7s |
| Total Context Tokens | 23180 |

## Scenario: Personal Introduction & Career Update

**Category:** personal | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 3 nodes, 0 edges | **Avg nodes/tell turn:** 0.8

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi! My name is Jordan Blake and I'm 29 years old.

_📥 Facts extracted: **2** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29
```
</details>

**Assistant:** Hello Jordan! It's nice to meet you. I've noted that you are 29 years old. Is there anything specific you'd like to chat about or need help with?


_Context tokens: 176 | Dropped: 0 | Latency: 1004ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years
```
</details>

**Assistant:** Got it, Jordan! I've added that you work as a data analyst at DataStream Inc with a tenure of 3 years. How's your work going?


_Context tokens: 259 | Dropped: 0 | Latency: 1172ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Noted, Jordan! I've updated your profile with your location in Austin, Texas, and your hobby of Brazilian jiu-jitsu, where you train four times a week.

Is there anything else you'd like to share, or would you like to discuss something related to your work or hobbies?


_Context tokens: 345 | Dropped: 0 | Latency: 1491ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your name is Jordan Blake, and you are 29 years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 343 | Dropped: 3 | Latency: 342ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Argentina won the FIFA World Cup in 2022, defeating France in the final match.

**Expected:** `argentina` → ✅ All found

_Context tokens: 337 | Dropped: 4 | Latency: 390ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You work at **DataStream Inc** as a **data analyst**.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 349 | Dropped: 5 | Latency: 326ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I also have a golden retriever named Biscuit who is 2 years old.

_📥 Facts extracted: **3** | KG nodes: 1 → 3 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: name: Biscuit, age: 2 years old
- user: pet: golden retriever
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** That's great! I've noted that your pet is a **golden retriever** named **Biscuit**, who is **2 years old**.


_Context tokens: 334 | Dropped: 6 | Latency: 1276ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** and train **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 349 | Dropped: 7 | Latency: 376ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

**Assistant:** A **neural network** is a computing system inspired by the human brain, designed to recognize patterns and make decisions.

Think of it like this:
1.  **Structure**: It consists of layers of interconnected nodes (called "neurons"). There is an input layer, one or more hidden layers, and an output layer.
2.  **Learning**: Just as you learn from experience, a neural network learns by analyzing vast amounts of data. It adjusts the strength of the connections between its neurons to minimize errors in its predictions.
3.  **Function**: Once trained, it can take new, unseen data and make accurate predictions or classifications.

**Simple Analogy**: Imagine teaching a child to recognize a cat. You show them many pictures of cats and dogs. Over time, the child learns the subtle differences (ears, whiskers, tail shape) and can tell them apart. A neural network does something similar but does it instantly and at a scale humans can't match.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 331 | Dropped: 6 | Latency: 1841ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.

_📥 Facts extracted: **2** | KG nodes: 3 → 3 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- Biscuit: name: Biscuit, age: 2 years old
```
</details>

**Assistant:** That's fantastic news! I've updated my records: you are now a **Senior Data Analyst** at **DataStream**.

It looks like you've already been in that role for a while, given your previous title as a data analyst at the same company. Congratulations on the promotion!

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 251 | Dropped: 18 | Latency: 1262ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** What's my pet's name and how old is it?

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
- Biscuit: name: Biscuit, age: 2 years old
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your pet's name is **Biscuit**, and it is **2 years old**.

**Expected:** `biscuit, 2` → ✅ All found

_Context tokens: 335 | Dropped: 18 | Latency: 363ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

**Assistant:** The boiling point of water at sea level is **212°F**.

**Expected:** `212` → ✅ All found

_Context tokens: 271 | Dropped: 18 | Latency: 319ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is my current job title?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** Your current job title is **Senior Data Analyst**.

**Expected:** `senior, analyst` → ✅ All found

_Context tokens: 296 | Dropped: 20 | Latency: 289ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 304 | Dropped: 20 | Latency: 275ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** How long have I been working in data? And what's my current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** You have been working in data for **3 years**, and your current role is **Senior Data Analyst** at DataStream Inc.

**Expected:** `datastream, senior` → ✅ All found

_Context tokens: 342 | Dropped: 21 | Latency: 441ms_

## Scenario: Team Building & Role Reassignment

**Category:** professional | **Overall:** 90.9% | **Recall:** 80.0% | **Verify-Update:** 100.0%

**Final KG:** 5 nodes, 5 edges | **Avg nodes/tell turn:** 1.3

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

**Assistant:** Got it. I've noted that **Priya** is a **backend developer** specializing in **Python and databases**, and that you manage her.

Feel free to share more about your team or ask questions, and I'll do my best to help based on what I've learned.


_Context tokens: 215 | Dropped: 0 | Latency: 1285ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Then we have Marcus. He's our DevOps engineer and handles all our cloud infrastructure on AWS.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- user
```
</details>

**Assistant:** Understood. I've updated my records:

*   **Marcus** is your **DevOps engineer** specializing in **AWS cloud infrastructure**.
*   You manage both **Priya** and **Marcus**.

Is there anything specific you'd like to discuss regarding your team's tech stack or infrastructure?


_Context tokens: 321 | Dropped: 0 | Latency: 1719ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **4** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- user: manages: Yuki
  → manages: Yuki
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** That confirms the details I already have on file:

*   **Yuki** is your **Frontend Developer**, specializing in **React and TypeScript**.
*   She joined **6 months ago**.

Since you manage both **Priya** (Backend) and **Marcus** (DevOps), your team has a solid full-stack and infrastructure coverage. Is there anything specific you'd like to discuss about Yuki's performance or your team's workflow?


_Context tokens: 335 | Dropped: 2 | Latency: 1954ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What does Priya specialise in?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** Priya specializes in **Python and databases**.

**Expected:** `python, backend, database` → ❌ Missing: `backend`

_Context tokens: 350 | Dropped: 4 | Latency: 284ms_

#### Turn 5 📝 `[tell]` ✅

**User:** I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** Got it. I've noted that **Dmitri** is the **QA lead** with a **5-year tenure** and is responsible for writing all the **automated test suites**.


_Context tokens: 265 | Dropped: 6 | Latency: 1578ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What's the difference between TCP and UDP?

<details><summary>📚 KG Memory Injected</summary>

```
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** **TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)** are both transport layer protocols used to send data over networks, but they differ significantly in how they handle data delivery:

### **TCP**
- **Reliability**: Ensures reliable, ordered delivery of data. It uses acknowledgments, retransmissions, and flow control to prevent data loss or corruption.
- **Connection-Oriented**: Requires a handshake (three-way handshake) before data transfer begins and a tear-down afterward.
- **Speed**: Slower due to the overhead of ensuring data integrity and ordering.
- **Use Cases**: Ideal for applications where data accuracy is critical, such as web browsing (HTTP), email (SMTP), and file transfers (FTP).

### **UDP**
- **Reliability**: Does not guarantee delivery or ordering. It sends data packets (datagrams) without checking for errors or retransmitting lost packets.
- **Connectionless**: No handshake; data can be sent immediately.
- **Speed**: Faster because it lacks the overhead of TCP's reliability mechanisms.
- **Use Cases**: Best for real-time applications where speed is more important than perfect accuracy, such as video streaming, online gaming, and VoIP (voice over IP).

### **Key Difference**
- **TCP** prioritizes **data integrity** (no data loss or corruption).
- **UDP** prioritizes **speed** (data may be lost or arrive out of order).

Choose **TCP** when accuracy matters, and **UDP** when speed is more critical.

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 298 | Dropped: 6 | Latency: 2785ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Based on the knowledge graph, **Marcus** manages our cloud infrastructure.

We use **AWS** as our platform.

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 238 | Dropped: 12 | Latency: 377ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- user: manages: Yuki
  → manages: Yuki
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**.

Her tech stack consists of **React** and **TypeScript**.

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 289 | Dropped: 12 | Latency: 413ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you give me a quick overview of what Kubernetes does?

<details><summary>📚 KG Memory Injected</summary>

```
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration system. Its primary purpose is to automate the deployment, scaling, and management of containerized applications.

Here is a quick breakdown of what it does:

*   **Orchestration**: It automatically manages containers across a cluster of machines, ensuring they are running, healthy, and available.
*   **Scaling**: It can automatically scale applications up or down based on traffic or resource usage.
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or moves it to a healthy node.
*   **Load Balancing**: It distributes incoming traffic across the available containers to ensure performance and reliability.
*   **Service Discovery and Load Balancing**: It helps applications find each other and balances the load across them.

In short, it acts as the "traffic controller" for your cloud infrastructure, making it easier to manage complex, distributed systems.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 303 | Dropped: 12 | Latency: 1819ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.

_📥 Facts extracted: **3** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** That's great news, Priya! Your promotion to Tech Lead aligns perfectly with your existing role and responsibilities. You've already been managing the team technically, and stepping back from hands-on backend coding allows you to focus more on strategy and leadership.

With your specialization in Python and databases, you're well-positioned to guide the team's technical direction. It sounds like you'll be supporting **user** (who you manage) and potentially others in the team.

Is there anything specific you'd like to discuss about leading the team or any upcoming projects?

**Expected:** `priya, tech lead, promoted` → ❌ Missing: `promoted`

_Context tokens: 328 | Dropped: 18 | Latency: 1992ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** How long has Dmitri been with us and what does he do?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** Dmitri has been with the team for **5 years**. As the **QA lead**, he is responsible for writing all the automated test suites.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 222 | Dropped: 20 | Latency: 432ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What year was Python first released?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
```
</details>

**Assistant:** Python was first released in **1991**. It was created by Guido van Rossum at the Dutch National Institute for Mathematics and Computer Science (CWI) in the Netherlands.

**Expected:** `1991` → ✅ All found

_Context tokens: 318 | Dropped: 20 | Latency: 505ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Priya's current role is **Tech Lead**, where she specializes in **Python and databases** and is responsible for leading the team technically.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ✅ None found

_Context tokens: 344 | Dropped: 23 | Latency: 437ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She works with **React and TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 334 | Dropped: 24 | Latency: 341ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Give me a quick summary of Priya — what changed about her role and what does she do now?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user: manages: Yuki
  → manages: Yuki
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Priya has transitioned from being a **backend coder** to a **Tech Lead**.

In her new role, she now **leads the team technically**, focusing on her specialization in **Python and databases**.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 335 | Dropped: 27 | Latency: 549ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 80.0% | **Recall:** 100.0% | **Verify-Update:** 0.0%

**Final KG:** 7 nodes, 2 edges | **Avg nodes/tell turn:** 1.4

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** We just kicked off Project Orion today — it's a customer portal rebuild for Nexus Financial. The project has a budget of $850,000 and a team of 8 people.

_📥 Facts extracted: **5** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today
```
</details>

**Assistant:** Got it. I've noted the details for **Project Orion**:

*   **Client:** Nexus Financial
*   **Type:** Customer portal rebuild
*   **Budget:** $850,000
*   **Team Size:** 8 people
*   **Start Date:** Today

I have this information saved in my memory. How else can I help you with the project?


_Context tokens: 224 | Dropped: 0 | Latency: 1912ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.

_📥 Facts extracted: **3** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille
- Camille: tool: Figma
```
</details>

**Assistant:** Understood. I've updated the timeline and tools for **Project Orion**:

*   **Design Phase End Date:** End of March
*   **Lead Designer:** Camille
*   **Tool:** Figma

Everything looks consistent with what's already in the knowledge graph. Is there anything else you'd like to add or discuss regarding the project?


_Context tokens: 316 | Dropped: 1 | Latency: 1835ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **2** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Got it. I've updated the **Project Orion** timeline in the knowledge graph:

*   **Development Start Date:** April 1st
*   **Beta Release Date:** June 15th

This aligns with the design phase ending by the end of March. Is there anything else you'd like to adjust or discuss?


_Context tokens: 318 | Dropped: 3 | Latency: 1607ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Based on the knowledge graph:

*   **Client:** Nexus Financial
*   **Budget:** $850,000

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 327 | Dropped: 4 | Latency: 448ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** REST stands for **Representational State Transfer**.

It is an architectural style for networked applications, not a specific protocol. The core idea is that a client can access and manipulate resources (data) through a standard interface (usually HTTP) without needing to know how the server stores or processes that data.

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 285 | Dropped: 4 | Latency: 696ms_

#### Turn 6 📝 `[tell]` ✅

**User:** We've decided to use React on the frontend and a Node.js microservices architecture on the backend. PostgreSQL will be our main database.

_📥 Facts extracted: **3** | KG nodes: 2 → 5 (+3)_

<details><summary>📚 KG Memory Injected</summary>

```
- backend: architecture: Node.js microservices
- frontend: technology: React
- database: type: PostgreSQL
```
</details>

**Assistant:** Got it. I've noted your tech stack:

*   **Frontend:** React
*   **Backend:** Node.js microservices
*   **Database:** PostgreSQL

Is there anything specific you'd like to discuss regarding this architecture or how to integrate these components?


_Context tokens: 339 | Dropped: 7 | Latency: 1354ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Based on the knowledge graph:

*   **Development Phase Kick-off:** April 1st
*   **Lead Designer:** Camille

**Expected:** `april, camille` → ✅ All found

_Context tokens: 334 | Dropped: 10 | Latency: 433ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
- frontend: technology: React
```
</details>

**Assistant:** For **Project Orion**, the chosen technology stack is:

*   **Frontend:** React
*   **Backend:** Node.js microservices
*   **Database:** PostgreSQL

This stack supports the $850,000 budget and the team of 8 people working on the rebuild for Nexus Financial.

**Expected:** `react, node, postgresql` → ✅ All found

_Context tokens: 349 | Dropped: 11 | Latency: 747ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym representing five principles of object-oriented design that help create software that is easy to understand, maintain, and extend. They were introduced by Robert C. Martin (Uncle Bob) in 2000.

Here is a breakdown of each principle:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept:** A class should have only one reason to change. In other words, a class should have only one job to do.
    *   **Goal:** Reduce coupling and make code easier to test and modify.

2.  **O - Open/Closed Principle**
    *   **Concept:** Software entities (classes, modules, functions, etc.) should be **open** for extension but **closed** for modification.
    *   **Goal:** You can add new functionality without changing existing, working code, which reduces the risk of introducing bugs.

3.  **L - Liskov Substitution Principle**
    *   **Concept:** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Goal:** Ensures that polymorphism works as expected; if you have a "Bird" class, a "Sparrow" subclass should behave like a "Bird" (e.g., it should be able to fly).

4.  **I - Interface Segregation Principle**
    *   **Concept:** Clients should not be forced to depend on interfaces they do not use.
    *   **Goal:** Instead of one large, "fat" interface, create several small, specific interfaces. This prevents classes from being forced to implement methods they don't need.

5.  **D - Dependency Inversion Principle**
    *   **Concept:** High-level modules should not depend on low-level modules. Both should depend on abstractions. Furthermore, abstractions should not depend on details; details should depend on abstractions.
    *   **Goal:** Promotes loose coupling and makes it easier to swap out implementations (e.g., switching a database provider without changing the application code).

**Why it matters:**
Following SOLID principles leads to code that is more modular, testable, and robust, making it easier to maintain as a project grows (like the Orion project you mentioned earlier).

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 342 | Dropped: 11 | Latency: 4099ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.

_📥 Facts extracted: **2** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
  → changed from: Project Orion
  → changed from: Project Orion
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** Got it. The beta release date for Project Orion has been pushed from June 15th to August 1st due to the new payment module requirements. I've noted this change.

Is there anything else you'd like to update or discuss regarding the project?

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 279 | Dropped: 18 | Latency: 1591ms_

#### Turn 11 📝 `[tell]` ✅

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

_📥 Facts extracted: **3** | KG nodes: 5 → 7 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- external vendor: name: PayCraft, delivery date: July 1st
- payment module: developer: external vendor
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
  → changed from: Project Orion
  → changed from: Project Orion
```
</details>

**Assistant:** Understood. I've updated the knowledge graph: the payment module for Project Orion will be developed by the external vendor **PayCraft**, with their SDK delivery scheduled for **July 1st**.

This aligns with the existing entry for PayCraft. Since the payment module is now confirmed as an external vendor task, we may need to adjust the project timeline or dependencies if the SDK delivery impacts the design phase or beta release. Let me know if you'd like to review the updated schedule or other project details.


_Context tokens: 347 | Dropped: 19 | Latency: 1758ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
  → changed from: Project Orion
  → changed from: Project Orion
- database: type: PostgreSQL
```
</details>

**Assistant:** We are using **PostgreSQL** as the database, and the team size for Project Orion is **8 people**.

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 249 | Dropped: 22 | Latency: 376ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to store and manage collections of data, but they differ in how elements are added and removed:

### **Stack**
- **Principle**: Last-In, First-Out (LIFO)
- **Addition**: Elements are added to the **top** (push operation).
- **Removal**: Elements are removed from the **top** (pop operation).
- **Analogy**: Think of a stack of plates—you take the top plate off first.
- **Common Use Cases**: Function call management, undo mechanisms, expression evaluation.

### **Queue**
- **Principle**: First-In, First-Out (FIFO)
- **Addition**: Elements are added to the **rear** (enqueue operation).
- **Removal**: Elements are removed from the **front** (dequeue operation).
- **Analogy**: Think of a line at a coffee shop—the first person in line is served first.
- **Common Use Cases**: Task scheduling, print jobs, breadth-first search in algorithms.

### **Key Difference**
The main difference lies in the order of processing: stacks process the most recently added item first, while queues process the oldest item first.

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 323 | Dropped: 21 | Latency: 2273ms_

#### Turn 14 ✅ `[verify_update]` ❌

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
  → changed from: Project Orion
  → changed from: Project Orion
- external vendor: name: PayCraft, delivery date: July 1st
```
</details>

**Assistant:** Our beta release is scheduled for **June 15th**.

**Expected:** `august` → ❌ Missing: `august`
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 252 | Dropped: 26 | Latency: 299ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- payment module: developer: external vendor
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, start date: April 1st, beta release date: June 15th
  → changed from: Project Orion
  → changed from: Project Orion
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** The beta release date hasn't been pushed back; it remains **June 15th** according to the current project plan.

Regarding the **payment module**, it is being developed by an **external vendor**.

**Expected:** `payment, paycraft, august` → ❌ Missing: `paycraft, august`

_Context tokens: 299 | Dropped: 26 | Latency: 546ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 81.8% | **Recall:** 80.0% | **Verify-Update:** 50.0%

**Final KG:** 6 nodes, 2 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** I want to tell you about my friend Sam. Sam is a graphic designer who lives in Melbourne and works at a studio called Pixel & Ink.

_📥 Facts extracted: **3** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
```
</details>

**Assistant:** Got it. I've noted that your friend Sam is a graphic designer based in Melbourne who works at Pixel & Ink.


_Context tokens: 203 | Dropped: 0 | Latency: 1045ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** I've added that to my memory. So, your close friend Tariq is a high school maths teacher in London with 8 years of experience.


_Context tokens: 274 | Dropped: 0 | Latency: 1854ms_

#### Turn 3 📝 `[tell]` ✅

**User:** And there's Lena — she's a freelance photographer based in Berlin. She mainly does travel and food photography.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Noted. Lena is a freelance photographer in Berlin specializing in travel and food photography. I now have the full picture of your close friends: Sam (graphic designer in Melbourne), Tariq (maths teacher in London), and Lena (photographer in Berlin).


_Context tokens: 346 | Dropped: 1 | Latency: 1361ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** Where does Sam live and what does she do for work?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam lives in **Melbourne** and works as a **graphic designer** for the company **Pixel & Ink**.

**Expected:** `melbourne, designer, pixel` → ✅ All found

_Context tokens: 332 | Dropped: 4 | Latency: 392ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What's the capital city of Australia?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** The capital city of Australia is **Canberra**.

**Expected:** `canberra` → ✅ All found

_Context tokens: 342 | Dropped: 5 | Latency: 294ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Tariq has **8 years** of experience teaching **maths** at the high school level.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 334 | Dropped: 5 | Latency: 378ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.

_📥 Facts extracted: **4** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Got it, Zoe. I've noted that she's a **software developer** in **Toronto**, working on **mobile apps** for **AppLaunch**.


_Context tokens: 350 | Dropped: 6 | Latency: 1568ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What kind of photography does Lena do and where is she based?

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
```
</details>

**Assistant:** Lena is based in **Berlin** and specializes in **travel and food photography**.

**Expected:** `lena, berlin, travel, food` → ✅ All found

_Context tokens: 331 | Dropped: 12 | Latency: 340ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is the speed of light in kilometres per second?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
```
</details>

**Assistant:** The speed of light in a vacuum is approximately **299,792 kilometres per second**.

**Expected:** `300` → ❌ Missing: `300`

_Context tokens: 330 | Dropped: 12 | Latency: 381ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.

_📥 Facts extracted: **2** | KG nodes: 4 → 6 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
- Pixel & Ink
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Got it! I've updated the records: Sam has moved from **Melbourne** to **Sydney** and is now working as a **freelancer**, having left **Pixel & Ink**.

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 322 | Dropped: 14 | Latency: 1304ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** Where does Zoe work and what does she do?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
- Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Zoe works as a **software developer** in **Toronto**, where she creates **mobile apps** for her employer, **AppLaunch**.

**Expected:** `zoe, toronto, applaunch, mobile` → ✅ All found

_Context tokens: 342 | Dropped: 18 | Latency: 434ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** Who wrote the novel '1984'?

<details><summary>📚 KG Memory Injected</summary>

```
- Melbourne
- Pixel & Ink
```
</details>

**Assistant:** The novel *1984* was written by **George Orwell**.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 329 | Dropped: 16 | Latency: 336ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** Where does Sam live now?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
- Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
```
</details>

**Assistant:** Sam currently lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 342 | Dropped: 20 | Latency: 280ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Tell me about Tariq — where is he, how long has he taught?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Melbourne
- Pixel & Ink
```
</details>

**Assistant:** Tariq is a **high school maths teacher** based in **London**, with **8 years of experience** in the field. He is also a close friend of yours.

**Expected:** `tariq, london, 8` → ✅ All found

_Context tokens: 342 | Dropped: 19 | Latency: 520ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** What's Sam's current work situation — where is she and does she still work at Pixel and Ink?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
- Pixel & Ink
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam is currently working as a **freelance** based in **Sydney**. She no longer works at **Pixel & Ink**, as she has left the company. She previously moved from Melbourne to Sydney.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ❌ Found: `melbourne`

_Context tokens: 341 | Dropped: 26 | Latency: 546ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 63.6% | **Recall:** 40.0% | **Verify-Update:** 50.0%

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

**Assistant:** Hello Mei! It's great to meet you. I've noted that you're a 32-year-old UX researcher at VitalMetrics, a health tech company. How can I assist you today?


_Context tokens: 198 | Dropped: 0 | Latency: 1427ms_

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

**Assistant:** Noted, Mei! I've updated your profile with the following details: you live in Singapore, commute via MRT, and have been working at VitalMetrics for 4 years. Is there anything specific you'd like to discuss regarding your work or daily routine?


_Context tokens: 294 | Dropped: 0 | Latency: 1531ms_

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

**Assistant:** Got it, Mei! Your Spanish learning profile is now updated: you're at B1 level, taking lessons on Tuesdays and Thursdays with tutor Carlos. How's your progress going?


_Context tokens: 343 | Dropped: 2 | Latency: 1628ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Based on your profile, your job is **UX researcher** at **VitalMetrics** in Singapore.

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 311 | Dropped: 4 | Latency: 378ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **2** | KG nodes: 2 → 4 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- HealthSync: project: work project
  → works on: user
- user: current project: HealthSync
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Got it. I've updated my records: you are working on the **HealthSync** project at VitalMetrics, specifically focusing on redesigning the patient onboarding flow to reduce drop-off rates.


_Context tokens: 315 | Dropped: 6 | Latency: 1175ms_

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

It is estimated that over **900 million** people speak Mandarin as their first language, primarily in China, Taiwan, and among overseas Chinese communities. This significantly outnumbers the next most spoken native languages, which are Spanish and English.

*Note: If you are asking about the language with the most **total** speakers (including second-language speakers), that title belongs to **English**.*

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 334 | Dropped: 8 | Latency: 1060ms_

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

**Assistant:** You are learning **Spanish** at a **B1** proficiency level.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 244 | Dropped: 12 | Latency: 313ms_

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

**Assistant:** You have been working at **VitalMetrics for 4 years**, and you commute using the **MRT**.

**Expected:** `4, mrt, singapore` → ❌ Missing: `singapore`

_Context tokens: 282 | Dropped: 12 | Latency: 388ms_

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

**Assistant:** That's great news! I've updated your records: your Spanish proficiency is now **B2** (previously B1).

Since you're at B2, your current learning plan has shifted:
*   **Tutor:** Carlos
*   **Day:** Thursday
*   **Proficiency Level:** B2

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 334 | Dropped: 13 | Latency: 1594ms_

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

**Assistant:** UX research involves understanding user needs, behaviors, and motivations to inform design decisions. It typically includes methods like:

*   **User Interviews:** One-on-one conversations to gather qualitative insights.
*   **Surveys:** Collecting quantitative data from a larger group.
*   **Usability Testing:** Observing users interacting with a product to identify friction points.
*   **Personas & Journey Maps:** Creating representative user profiles and visualizing their experiences.

As a UX researcher at VitalMetrics, you likely apply these methods to improve products like **HealthSync**, ensuring they are intuitive and effective for real users.

**Expected:** `user, research` → ✅ All found

_Context tokens: 347 | Dropped: 16 | Latency: 1239ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- VitalMetrics
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- HealthSync: project: work project
  → works on: user
```
</details>

**Assistant:** You are working on **HealthSync** at VitalMetrics.

**Expected:** `healthsync, onboarding` → ❌ Missing: `onboarding`

_Context tokens: 276 | Dropped: 20 | Latency: 297ms_

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

**Assistant:** Noted! I've updated your location to the **Jurong East** neighbourhood in Singapore.

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 325 | Dropped: 20 | Latency: 820ms_

#### Turn 13 ✅ `[verify_update]` ❌

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- user: current project: HealthSync, language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_day: Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- HealthSync: project: work project
  → works on: user
```
</details>

**Assistant:** Your current proficiency level in Spanish is **B2**. You previously had a level of B1, and you are currently working on the HealthSync project in Spanish.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ❌ Found: `b1`

_Context tokens: 344 | Dropped: 22 | Latency: 474ms_

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

_Context tokens: 327 | Dropped: 24 | Latency: 364ms_

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

**Assistant:** You are living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 346 | Dropped: 25 | Latency: 326ms_

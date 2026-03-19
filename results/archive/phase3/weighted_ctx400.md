# Run Report: weighted_ctx400

_Generated: 2026-03-19T13:13:47.632Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `weighted` |
| Graph Depth | 3 |
| Sub-Trees (branching) | 3 |
| Multi-Graph | false |
| Weighted Edges | true |
| Max Context Tokens | 400 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 75 |
| Overall Accuracy | 81.6% |
| Recall Accuracy | 67.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 80.0% |
| Avg Latency | 931ms |
| Total Runtime | 69.9s |
| Total Context Tokens | 23587 |

## Scenario: Personal Introduction & Career Update

**Category:** personal | **Overall:** 90.9% | **Recall:** 80.0% | **Verify-Update:** 100.0%

**Final KG:** 3 nodes, 2 edges | **Avg nodes/tell turn:** 0.5

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


_Context tokens: 176 | Dropped: 0 | Latency: 929ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **2** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** Got it, Jordan. I've recorded that you work as a data analyst at DataStream Inc for the past 3 years. Is there anything else you'd like to share or discuss?


_Context tokens: 279 | Dropped: 0 | Latency: 1301ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** Noted, Jordan. I've added that you live in Austin, Texas, and enjoy Brazilian jiu-jitsu, training four times a week.

Here's a quick summary of what I've recorded about you so far:
- **Name:** Jordan Blake
- **Age:** 29
- **Job:** Data Analyst at DataStream Inc (3 years)
- **Location:** Austin, Texas
- **Hobby:** Brazilian jiu-jitsu (4x/week)

Is there anything else you'd like to add or discuss?


_Context tokens: 320 | Dropped: 2 | Latency: 1912ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** Your name is **Jordan Blake**, and you are **29** years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 339 | Dropped: 5 | Latency: 361ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** Argentina won the 2022 FIFA World Cup. They defeated France in the final match, which ended 3-3 after extra time, with Argentina winning 4-2 on penalties.

**Expected:** `argentina` → ✅ All found

_Context tokens: 267 | Dropped: 6 | Latency: 532ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** You work at **DataStream Inc** as a **data analyst**.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 325 | Dropped: 6 | Latency: 324ms_

#### Turn 7 📝 `[tell]` ❌

**User:** I also have a golden retriever named Biscuit who is 2 years old.

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** Got it! I've noted that you have a **golden retriever named Biscuit** who is **2 years old**.


_Context tokens: 332 | Dropped: 8 | Latency: 655ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** and train **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 318 | Dropped: 10 | Latency: 354ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** A **neural network** is a computing system inspired by the human brain, designed to recognize patterns and make decisions.

Think of it like this:
*   **Structure**: It's made up of layers of interconnected "neurons" (small processing units).
*   **Learning**: Just as you learn from experience, a neural network learns by analyzing data. It adjusts its internal connections to find patterns, much like how your brain learns from reading or watching a movie.
*   **Application**: Once trained, it can perform tasks like recognizing images, translating languages, or predicting outcomes without being explicitly programmed for every specific rule.

It's essentially a powerful tool for teaching computers to "learn" from examples rather than following strict, step-by-step instructions.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 343 | Dropped: 11 | Latency: 1457ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.

_📥 Facts extracted: **2** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: job: Senior Data Analyst, company: DataStream
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
```
</details>

**Assistant:** That's fantastic news, Jordan! Congratulations on your promotion to Senior Data Analyst at DataStream. It's great to hear you're advancing in your career. How are you feeling about the new role?

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 261 | Dropped: 18 | Latency: 1133ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What's my pet's name and how old is it?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** I don't have any information about your pet in my knowledge graph. It sounds like you'd love to share its name and age if you'd like!

**Expected:** `biscuit, 2` → ❌ Missing: `biscuit, 2`

_Context tokens: 314 | Dropped: 18 | Latency: 450ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** The boiling point of water at sea level is **212°F**.

**Expected:** `212` → ✅ All found

_Context tokens: 345 | Dropped: 19 | Latency: 332ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is my current job title?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
- user: job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** Your current job title is **Senior Data Analyst**.

**Expected:** `senior, analyst` → ✅ All found

_Context tokens: 336 | Dropped: 20 | Latency: 289ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 349 | Dropped: 20 | Latency: 294ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** How long have I been working in data? And what's my current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, duration: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
  → works at: DataStream Inc
  → works at: DataStream Inc
- DataStream Inc
  → works at: Jordan Blake
  → works at: Jordan Blake
- user: job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** You have been working in data for **3 years**, and your current role is **Senior Data Analyst** at DataStream Inc.

**Expected:** `datastream, senior` → ✅ All found

_Context tokens: 344 | Dropped: 22 | Latency: 430ms_

## Scenario: Team Building & Role Reassignment

**Category:** professional | **Overall:** 81.8% | **Recall:** 80.0% | **Verify-Update:** 50.0%

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
  → manages: Priya
```
</details>

**Assistant:** Got it. I've noted that you manage a small engineering team, and specifically that Priya is your backend developer specializing in Python and databases.


_Context tokens: 220 | Dropped: 0 | Latency: 1056ms_

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
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Understood. I've added that Marcus is your DevOps engineer specializing in cloud infrastructure on AWS.

Based on the information you've shared, here is how your team is structured:
*   **You** manage **Priya** and **Marcus**.
*   **Priya** (Backend Developer, Python/Databases) manages a user.
*   **Marcus** (DevOps Engineer, AWS) manages three users.

Is there anything specific you'd like to know about the team or their roles?


_Context tokens: 335 | Dropped: 0 | Latency: 2077ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **3** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Got it. I've noted that Yuki is our frontend developer specializing in React and TypeScript, and she joined 6 months ago.


_Context tokens: 280 | Dropped: 4 | Latency: 1256ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What does Priya specialise in?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Priya specializes in Python and databases.

**Expected:** `python, backend, database` → ❌ Missing: `backend`

_Context tokens: 327 | Dropped: 4 | Latency: 283ms_

#### Turn 5 📝 `[tell]` ✅

**User:** I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Got it. I've noted that Dmitri is our QA lead with a 5-year tenure, and he is responsible for writing all our automated test suites.


_Context tokens: 334 | Dropped: 6 | Latency: 1265ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What's the difference between TCP and UDP?

<details><summary>📚 KG Memory Injected</summary>

```
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols, but they differ significantly in how they handle data transmission:

- **Reliability**: TCP is reliable; it ensures data is delivered in the correct order and without errors using acknowledgments and retransmissions. UDP is unreliable; it sends data without guarantees of delivery or order.
- **Speed**: UDP is faster because it has less overhead and doesn't wait for acknowledgments. TCP is slower due to its reliability mechanisms.
- **Connection**: TCP requires a connection to be established before data transfer (handshake). UDP is connectionless.
- **Use Cases**: TCP is used for applications needing reliability, like web browsing (HTTP), email (SMTP), and file transfer (FTP). UDP is used for real-time applications where speed is more critical than reliability, like video streaming, online gaming, and VoIP.

In summary, choose TCP when you need guaranteed delivery, and UDP when you need speed and can tolerate some data loss.

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 350 | Dropped: 7 | Latency: 1898ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Based on the knowledge graph, **Marcus** manages the cloud infrastructure. He is a DevOps engineer specializing in **AWS**.

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 271 | Dropped: 12 | Latency: 405ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**. Her tech stack consists of **React** and **TypeScript**.

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 326 | Dropped: 12 | Latency: 419ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you give me a quick overview of what Kubernetes does?

<details><summary>📚 KG Memory Injected</summary>

```
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration system for automating deployment, scaling, and operations of application containers.

Here is a quick overview of its core functions:

*   **Automation**: It automates the deployment, scaling, and management of containerized applications. Instead of manually managing servers, you define how your application should run, and Kubernetes handles the rest.
*   **Scaling**: It can automatically scale applications up or down based on traffic or resource usage to ensure performance and cost efficiency.
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or reschedules it on a healthy node.
*   **Load Balancing**: It automatically distributes incoming traffic across your application containers to ensure high availability.
*   **Service Discovery and Load Balancing**: It provides a way for containers to find each other and allows traffic to be routed to them.

In essence, Kubernetes acts as the "operating system" for your containerized applications, managing the infrastructure so developers can focus on building software.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 318 | Dropped: 14 | Latency: 2009ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.

_📥 Facts extracted: **3** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** That's great news! Priya has indeed been promoted to **Tech Lead**, where she will focus on leading the team technically and stepping back from hands-on backend coding. Her expertise in **Python and databases** will be valuable in guiding the team's technical direction.

She will now manage the **user** directly, while continuing to work closely with her previous role as a backend coder. This promotion highlights her growing leadership capabilities and technical depth.

Is there anything specific you'd like to discuss about team dynamics, project planning, or how this change might impact workflows?

**Expected:** `priya, tech lead, promoted` → ✅ All found

_Context tokens: 340 | Dropped: 18 | Latency: 1995ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** How long has Dmitri been with us and what does he do?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Dmitri has been with the company for **5 years**. As the **QA lead**, he is responsible for writing all of the automated test suites.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 316 | Dropped: 20 | Latency: 456ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What year was Python first released?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Python was first released in **1991**.

**Expected:** `1991` → ✅ All found

_Context tokens: 349 | Dropped: 21 | Latency: 301ms_

#### Turn 13 ✅ `[verify_update]` ❌

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya's current role is **Tech Lead** as a **backend developer** specializing in Python and databases.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ❌ Found: `backend developer`

_Context tokens: 337 | Dropped: 22 | Latency: 394ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She specializes in **React and TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 349 | Dropped: 23 | Latency: 348ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Give me a quick summary of Priya — what changed about her role and what does she do now?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Yuki: role: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya transitioned from a **backend coder** to a **Tech Lead**.

Her current role involves leading the team technically as a **backend developer** specializing in **Python and databases**. She now manages the **user** directly.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 348 | Dropped: 27 | Latency: 578ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 90.0% | **Recall:** 75.0% | **Verify-Update:** 100.0%

**Final KG:** 6 nodes, 0 edges | **Avg nodes/tell turn:** 1.2

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** We just kicked off Project Orion today — it's a customer portal rebuild for Nexus Financial. The project has a budget of $850,000 and a team of 8 people.

_📥 Facts extracted: **5** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today
```
</details>

**Assistant:** Got it! I've noted the details for **Project Orion**:

- **Type**: Customer portal rebuild  
- **Client**: Nexus Financial  
- **Budget**: $850,000  
- **Team Size**: 8 people  
- **Start Date**: Today  

Let me know if you'd like to add more context or dive into planning next steps!


_Context tokens: 224 | Dropped: 0 | Latency: 1874ms_

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

- **Design Phase End Date**: End of March  
- **Lead Designer**: Camille  
- **Design Tool**: Figma  

Everything is aligned with the current plan. Let me know if you need help tracking progress or preparing for the next phase!


_Context tokens: 314 | Dropped: 1 | Latency: 1789ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **3** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: June 15th, status: updated
```
</details>

**Assistant:** Got it. The **Project Orion** timeline is confirmed:

- **Development Phase Start**: April 1st  
- **Beta Release Target**: June 15th  

With a team of 8 and a budget of $850,000, this schedule looks feasible. Camille will be leading the design handoff to ensure smooth transitions into development.

Would you like to set up a milestone tracker or assign tasks for the development kickoff?


_Context tokens: 323 | Dropped: 3 | Latency: 1734ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: June 15th, status: updated
```
</details>

**Assistant:** The budget for **Project Orion** is **$850,000**, and the client is **Nexus Financial**.

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 339 | Dropped: 5 | Latency: 430ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** REST stands for **Representational State Transfer**.

It is an architectural style for networked applications, not a specific protocol. The key idea is that applications interact by representing data in a standard format (like JSON or XML) and manipulating resources through HTTP methods (GET, POST, PUT, DELETE).

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 314 | Dropped: 4 | Latency: 698ms_

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

**Assistant:** Got it! I've noted your tech stack:

- **Frontend**: React  
- **Backend**: Node.js microservices  
- **Database**: PostgreSQL  

This is a solid and modern combination. Is there anything specific you'd like to discuss or build with this setup?


_Context tokens: 337 | Dropped: 7 | Latency: 1346ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: June 15th, status: updated
```
</details>

**Assistant:** Based on the project details:

- **Development phase start date**: April 1st  
- **Lead designer**: Camille  

Let me know if you need help planning the development timeline or coordinating with the team!

**Expected:** `april, camille` → ✅ All found

_Context tokens: 343 | Dropped: 10 | Latency: 569ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: June 15th, status: updated
- frontend: technology: React
```
</details>

**Assistant:** The frontend for Project Orion is built using **React**.

**Expected:** `react, node, postgresql` → ❌ Missing: `node, postgresql`

_Context tokens: 316 | Dropped: 12 | Latency: 295ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym representing five principles of object-oriented design, created by Robert C. Martin (Uncle Bob) to improve software design and maintainability. They stand for:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept**: A class should have only one reason to change. It should have only one job to do.
    *   **Goal**: Reduce complexity and make code easier to test and maintain.

2.  **O - Open/Closed Principle (OCP)**
    *   **Concept**: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
    *   **Goal**: You can add new functionality without changing existing, working code.

3.  **L - Liskov Substitution Principle (LSP)**
    *   **Concept**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Goal**: Ensure that derived classes behave as expected when used in place of their base class.

4.  **I - Interface Segregation Principle (ISP)**
    *   **Concept**: Clients should not be forced to depend on interfaces they do not use.
    *   **Goal**: Create many small, specific interfaces rather than a few, large, general-purpose ones.

5.  **D - Dependency Inversion Principle (DIP)**
    *   **Concept**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
    *   **Goal**: Decouple high-level modules from low-level modules to make the system more flexible and testable.

These principles are widely used in software engineering to create robust, scalable, and maintainable systems.

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 315 | Dropped: 11 | Latency: 3277ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.

_📥 Facts extracted: **4** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: August 1st, status: updated, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** Understood. The scope for **Project Orion** has expanded with the addition of the **payment module**, which has pushed the **beta release date from June 15th to August 1st**.

Here's a quick update on the project status:
- **Project**: Project Orion
- **Client**: Nexus Financial
- **Team Size**: 8 people
- **Lead Designer**: Camille
- **Budget**: $850,000
- **Start Date**: Today
- **Design Phase End**: End of March
- **Development Phase Start**: April 1st
- **Beta Release Date**: August 1st (updated)
- **Status**: Updated (due to scope expansion)

Let me know if you need further details or assistance with the project timeline or team allocation.

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 295 | Dropped: 18 | Latency: 2642ms_

#### Turn 11 📝 `[tell]` ✅

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

_📥 Facts extracted: **2** | KG nodes: 5 → 6 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- payment module: vendor: PayCraft, delivery date: July 1st
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: August 1st, status: updated, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** That's correct. The payment module for **Project Orion** will be built by the external vendor **PayCraft**, and they are scheduled to deliver the SDK by **July 1st**. This aligns with the expanded scope of the project, which now includes this new requirement.


_Context tokens: 288 | Dropped: 20 | Latency: 1218ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: August 1st, status: updated, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- database: type: PostgreSQL
```
</details>

**Assistant:** We are using **PostgreSQL** as our database.

The team size for **Project Orion** is **8 people**.

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 334 | Dropped: 21 | Latency: 416ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to store data, but they differ in the order in which elements are added and removed:

*   **Stack (LIFO - Last In, First Out):**
    *   **Access Point:** You can only add (push) and remove (pop) elements from the **top** (or end) of the stack.
    *   **Analogy:** Think of a stack of plates. You can only take the top plate off, and you can only put a new plate on top. The last plate added is the first one removed.
    *   **Common Use Cases:** Function call management (call stack), undo mechanisms, expression evaluation.

*   **Queue (FIFO - First In, First Out):**
    *   **Access Point:** Elements are added to the **rear** (back) and removed from the **front** (head) of the queue.
    *   **Analogy:** Think of a line at a grocery store. The first person who joins the line is the first one to be served.
    *   **Common Use Cases:** Task scheduling, print queues, breadth-first search algorithms.

**In short:** In a stack, the newest item is processed first. In a queue, the oldest item is processed first.

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 291 | Dropped: 20 | Latency: 2387ms_

#### Turn 14 ✅ `[verify_update]` ✅

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: August 1st, status: updated, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** The beta release for Project Orion is now scheduled for **August 1st**.

**Expected:** `august` → ✅ All found
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 253 | Dropped: 26 | Latency: 330ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, lead designer: Camille, development phase start date: April 1st, beta release date: August 1st, status: updated, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- payment module: vendor: PayCraft, delivery date: July 1st
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** The beta release was pushed back from the original June 15th date to August 1st due to an **expanded scope** that included a new **payment module**.

The payment module is being handled by the vendor **PayCraft**, with a delivery date of **July 1st**.

**Expected:** `payment, paycraft, august` → ✅ All found

_Context tokens: 325 | Dropped: 26 | Latency: 691ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 72.7% | **Recall:** 60.0% | **Verify-Update:** 50.0%

**Final KG:** 7 nodes, 4 edges | **Avg nodes/tell turn:** 1.3

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


_Context tokens: 203 | Dropped: 0 | Latency: 1041ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** I've added that to my memory. I already knew about Tariq from our previous conversation, so I've updated his profile with the confirmation that he's a high school maths teacher in London with 8 years of experience.


_Context tokens: 274 | Dropped: 0 | Latency: 1961ms_

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

**Assistant:** Got it. I've updated Lena's profile in my memory to confirm she's a freelance photographer based in Berlin, specializing in travel and food photography.


_Context tokens: 337 | Dropped: 2 | Latency: 1188ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** Where does Sam live and what does she do for work?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam lives in **Melbourne** and works as a **graphic designer** for a company called **Pixel & Ink**.

**Expected:** `melbourne, designer, pixel` → ✅ All found

_Context tokens: 307 | Dropped: 4 | Latency: 395ms_

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

_Context tokens: 350 | Dropped: 4 | Latency: 291ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Tariq has been teaching for **8 years** and teaches **maths** at the high school level.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 342 | Dropped: 4 | Latency: 393ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.

_📥 Facts extracted: **3** | KG nodes: 3 → 5 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Got it. I've updated my records: **Zoe** is a **software developer** in **Toronto**, working on **mobile apps** for the startup **AppLaunch**, and she's a **close friend** of Tariq.


_Context tokens: 350 | Dropped: 7 | Latency: 1529ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What kind of photography does Lena do and where is she based?

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
```
</details>

**Assistant:** Lena is based in **Berlin** and specializes in **travel and food photography**.

**Expected:** `lena, berlin, travel, food` → ✅ All found

_Context tokens: 323 | Dropped: 13 | Latency: 352ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is the speed of light in kilometres per second?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** The speed of light in a vacuum is approximately **299,792 kilometres per second**.

**Expected:** `300` → ❌ Missing: `300`

_Context tokens: 322 | Dropped: 13 | Latency: 380ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.

_📥 Facts extracted: **2** | KG nodes: 5 → 7 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Got it! I've updated my records: Sam has moved from Melbourne to Sydney and is now working as a freelance photographer (though her previous employer was Pixel & Ink). Is there anything else you'd like to share or ask?

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 350 | Dropped: 16 | Latency: 1362ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** Where does Zoe work and what does she do?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Zoe works as a **software developer** in **Toronto**, where she creates **mobile apps**.

**Expected:** `zoe, toronto, applaunch, mobile` → ❌ Missing: `applaunch`

_Context tokens: 293 | Dropped: 20 | Latency: 362ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** Who wrote the novel '1984'?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
```
</details>

**Assistant:** The novel *1984* was written by **George Orwell** (born Eric Arthur Blair). It was published in 1949 and is considered one of the most influential works of dystopian fiction.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 306 | Dropped: 20 | Latency: 562ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** Where does Sam live now?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam currently lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 347 | Dropped: 22 | Latency: 292ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Tell me about Tariq — where is he, how long has he taught?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Tariq is a **high school maths teacher** based in **London** with **8 years of experience**. He is also a close friend of Zoe.

**Expected:** `tariq, london, 8` → ✅ All found

_Context tokens: 344 | Dropped: 23 | Latency: 480ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** What's Sam's current work situation — where is she and does she still work at Pixel and Ink?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: freelance, location: Sydney, employer: Pixel & Ink
  → moved from: Melbourne
  → left: Pixel & Ink
- Melbourne
  → moved from: Sam
- Pixel & Ink
  → left: Sam
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam is currently based in **Sydney** working as a **freelancer** for **Pixel & Ink**. However, she has **left** the company, so she no longer works there. She previously moved from Melbourne to Sydney.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ❌ Found: `melbourne`

_Context tokens: 341 | Dropped: 27 | Latency: 609ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 72.7% | **Recall:** 40.0% | **Verify-Update:** 100.0%

**Final KG:** 5 nodes, 3 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi, I'm Mei Tanaka. I'm a 32-year-old UX researcher at a health tech company called VitalMetrics.

_📥 Facts extracted: **4** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics
```
</details>

**Assistant:** Hello Mei! I've noted that you're a 32-year-old UX researcher working at VitalMetrics. Is there anything specific you'd like to discuss or work on regarding your role?


_Context tokens: 198 | Dropped: 0 | Latency: 1407ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I live in Singapore and I commute to work by MRT. I've been at VitalMetrics for 4 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Got it, Mei. I've updated your profile with your location in Singapore, your MRT commute, and your 4-year tenure at VitalMetrics. Is there anything else you'd like to share or discuss?


_Context tokens: 304 | Dropped: 0 | Latency: 1444ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.

_📥 Facts extracted: **4** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted, Mei. I've added your Spanish proficiency (B1), your lesson schedule (Tuesdays and Thursdays), and your tutor, Carlos, to your profile.

Is there anything specific you'd like to discuss regarding your language learning or your work at VitalMetrics?


_Context tokens: 335 | Dropped: 2 | Latency: 2030ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Based on your profile:

*   **Job:** UX researcher
*   **Company:** VitalMetrics (located in Singapore)

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 340 | Dropped: 4 | Latency: 427ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **2** | KG nodes: 2 → 4 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- patient onboarding flow
  → redesigns: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Got it. I've noted that your project at **HealthSync** focuses on redesigning the **patient onboarding flow** to reduce drop-off rates.

I also have your details on file:
*   **Role:** UX researcher at **VitalMetrics** in Singapore.
*   **Tenure:** 4 years.
*   **Other details:** You speak Spanish (B1 level) and commute via MRT.

Is there anything specific about HealthSync or your work you'd like to discuss?


_Context tokens: 342 | Dropped: 7 | Latency: 1866ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What is the most spoken language in the world by native speakers?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** The most spoken language in the world by native speakers is **Mandarin Chinese**.

While English is the most widely spoken language overall when including second-language speakers, Mandarin has the highest number of native speakers, with over 900 million people speaking it as their first language.

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 298 | Dropped: 10 | Latency: 669ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** What language am I learning and what level am I at?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** You are learning **Spanish** at the **B1** level.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 294 | Dropped: 12 | Latency: 316ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** How long have I been at VitalMetrics and how do I commute?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** You have been at **VitalMetrics** for **4 years**, and you commute using the **MRT**.

**Expected:** `4, mrt, singapore` → ❌ Missing: `singapore`

_Context tokens: 330 | Dropped: 12 | Latency: 406ms_

#### Turn 9 ✏️ `[update]` ✅

**User:** I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- user: language: Spanish, level: B2, previousLevel: B1
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** That's great news! I've updated my records: you've moved from **Spanish B1** to **B2**.

I also noted that you previously studied Spanish with **Carlos** every Tuesday and Thursday. Since you're now at B2, does that change your study frequency or goals?

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 340 | Dropped: 15 | Latency: 1524ms_

#### Turn 10 💬 `[distractor]` ✅

**User:** Can you explain what UX research involves?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** UX research involves understanding user needs, behaviors, and motivations to inform design decisions and improve user experiences. It typically includes methods like interviews, surveys, usability testing, and observational studies to gather insights about how users interact with products or services.

In the context of Mei Tanaka, a UX researcher at VitalMetrics in Singapore, her work likely involves conducting such research to support projects like HealthSync's goal of reducing drop-off rates, specifically by redesigning the patient onboarding flow. Her focus on improving user journeys suggests she applies research findings to create more intuitive and effective digital experiences.

**Expected:** `user, research` → ✅ All found

_Context tokens: 292 | Dropped: 18 | Latency: 1128ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- VitalMetrics
  → works_at: Mei Tanaka
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** You are working on the **patient onboarding flow** project at VitalMetrics. This project aims to reduce drop-off rates.

**Expected:** `healthsync, onboarding` → ❌ Missing: `healthsync`

_Context tokens: 293 | Dropped: 20 | Latency: 410ms_

#### Turn 12 ✏️ `[update]` ✅

**User:** I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.

_📥 Facts extracted: **1** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, level: B2, previousLevel: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** Got it! I've noted that you're now living in the Jurong East neighbourhood of Singapore.

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 338 | Dropped: 22 | Latency: 821ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, level: B2, previousLevel: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** Your current level in Spanish is **B2**.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ✅ None found

_Context tokens: 343 | Dropped: 23 | Latency: 300ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What is my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** Your name is **Mei Tanaka**, and you are **32** years old.

**Expected:** `mei, tanaka, 32` → ✅ All found

_Context tokens: 343 | Dropped: 23 | Latency: 374ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Where in Singapore am I living now?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
  → works_for: HealthSync
- VitalMetrics
  → works_at: Mei Tanaka
- HealthSync: project: work project, goal: reduce drop-off rates
  → works_for: Mei Tanaka
  → redesigns: patient onboarding flow
- user: language: Spanish, level: B2, previousLevel: B1, location: Jurong East neighbourhood of Singapore
- patient onboarding flow
  → redesigns: HealthSync
```
</details>

**Assistant:** You are living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 349 | Dropped: 26 | Latency: 344ms_

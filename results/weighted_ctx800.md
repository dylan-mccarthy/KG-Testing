# Run Report: weighted_ctx800

_Generated: 2026-03-19T22:52:23.097Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `weighted` |
| Graph Depth | 3 |
| Sub-Trees (branching) | 3 |
| Multi-Graph | false |
| Weighted Edges | true |
| Max Context Tokens | 800 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 75 |
| Overall Accuracy | 94.5% |
| Recall Accuracy | 88.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 100.0% |
| Avg Latency | 1132ms |
| Total Runtime | 84.9s |
| Total Context Tokens | 43689 |

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


_Context tokens: 176 | Dropped: 0 | Latency: 1008ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years
```
</details>

**Assistant:** Got it, Jordan. I've added that you work as a data analyst at DataStream Inc with a tenure of 3 years. How's your work going?


_Context tokens: 259 | Dropped: 0 | Latency: 1175ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Noted, Jordan! I've recorded that you live in Austin, Texas, and your favorite hobby is Brazilian jiu-jitsu, where you train four times a week. It sounds like a great balance between your career and your passion. Anything specific you'd like to discuss about your work or your training?


_Context tokens: 345 | Dropped: 0 | Latency: 1486ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your name is Jordan Blake, and you are 29 years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 433 | Dropped: 0 | Latency: 364ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Argentina won the FIFA World Cup in 2022, defeating France in the final.

**Expected:** `argentina` → ✅ All found

_Context tokens: 463 | Dropped: 0 | Latency: 432ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You work at **DataStream Inc**, and your role is **data analyst**.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 500 | Dropped: 0 | Latency: 388ms_

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

**Assistant:** Noted, Jordan! I've added that you have a golden retriever named Biscuit who is 2 years old. It sounds like a wonderful companion for your busy schedule.


_Context tokens: 559 | Dropped: 0 | Latency: 1394ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** and you train **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 598 | Dropped: 0 | Latency: 454ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

**Assistant:** A **neural network** is a computing system inspired by the human brain, designed to recognize patterns and make decisions.

Think of it like this:
1.  **Structure**: It consists of layers of "nodes" (or neurons) that are connected to one another.
2.  **Learning**: Just like you learn from experience, a neural network learns by analyzing data. It adjusts the strength of the connections between its nodes based on what it sees.
3.  **Function**: Once trained, it can take new, unseen data (like an image or a sentence) and figure out what it is without being explicitly programmed with rules for every single possibility.

In simple terms, it's a machine that gets smarter the more it looks at examples, allowing it to solve complex problems like image recognition or language translation.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 569 | Dropped: 0 | Latency: 1648ms_

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

**Assistant:** That's fantastic news, Jordan! Congratulations on your promotion to **Senior Data Analyst** at **DataStream**. It's clear you've been doing a great job in your role. How are you feeling about the new responsibilities?

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 747 | Dropped: 5 | Latency: 1312ms_

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

_Context tokens: 744 | Dropped: 6 | Latency: 487ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

**Assistant:** The boiling point of water is **212°F** at standard atmospheric pressure.

**Expected:** `212` → ✅ All found

_Context tokens: 680 | Dropped: 6 | Latency: 452ms_

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

_Context tokens: 740 | Dropped: 10 | Latency: 408ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 748 | Dropped: 10 | Latency: 401ms_

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

_Context tokens: 744 | Dropped: 13 | Latency: 534ms_

## Scenario: Team Building & Role Reassignment

**Category:** professional | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 5 nodes, 6 edges | **Avg nodes/tell turn:** 1.3

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

**Assistant:** Got it. I've noted that you manage Priya, who is a backend developer specializing in Python and databases. Is there anything else you'd like to share about your team?


_Context tokens: 220 | Dropped: 0 | Latency: 1115ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Then we have Marcus. He's our DevOps engineer and handles all our cloud infrastructure on AWS.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
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

**Assistant:** Noted. I've added that you also manage Marcus, a DevOps engineer specializing in cloud infrastructure on AWS.

Based on the information you've shared and my records:
*   You manage **Priya** (Backend Developer, Python/Databases) and **Marcus** (DevOps Engineer, AWS).
*   Both Priya and Marcus manage a **user**.

Is there anything else about your team or your work you'd like to discuss?


_Context tokens: 334 | Dropped: 0 | Latency: 1873ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **4** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
```
</details>

**Assistant:** Understood. I've recorded that you also manage **Yuki**, a frontend developer who specializes in React and TypeScript and joined the team 6 months ago.

To summarize your engineering team structure:
*   **You**: Manage Priya, Marcus, and Yuki.
*   **Priya**: Backend Developer (Python/Databases).
*   **Marcus**: DevOps Engineer (AWS Cloud Infrastructure).
*   **Yuki**: Frontend Developer (React/TypeScript).

Is there anything specific you'd like to discuss regarding your team's projects or workflows?


_Context tokens: 492 | Dropped: 0 | Latency: 2151ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What does Priya specialise in?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
```
</details>

**Assistant:** Based on the information provided, **Priya specializes in Python and databases**. She is a backend developer who manages a user.

**Expected:** `python, backend, database` → ✅ All found

_Context tokens: 607 | Dropped: 0 | Latency: 487ms_

#### Turn 5 📝 `[tell]` ✅

**User:** I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Got it. I've added **Dmitri** to the records: he is our QA lead with a 5-year tenure, responsible for writing all automated test suites.

Here is the updated team structure:
*   **You**: Manage Priya, Marcus, Yuki, and Dmitri.
*   **Priya**: Backend Developer (Python/Databases).
*   **Marcus**: DevOps Engineer (AWS Cloud Infrastructure).
*   **Yuki**: Frontend Developer (React/TypeScript).
*   **Dmitri**: QA Lead (Automated Test Suites).

Is there anything else you'd like to share or ask about?


_Context tokens: 712 | Dropped: 0 | Latency: 2507ms_

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
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols, but they serve different purposes and have distinct characteristics:

### **TCP**
- **Reliability**: TCP is connection-oriented and ensures reliable data delivery. It uses acknowledgments, retransmissions, and sequence numbers to guarantee that data arrives intact and in order.
- **Speed**: It is slower due to its reliability mechanisms, as it waits for confirmations before sending more data.
- **Use Cases**: Ideal for applications where data integrity is critical, such as web browsing (HTTP/HTTPS), email (SMTP), and file transfers (FTP).

### **UDP**
- **Reliability**: UDP is connectionless and does not guarantee delivery or order of packets. It sends data without waiting for confirmations.
- **Speed**: It is faster because it lacks the overhead of connection establishment and error checking.
- **Use Cases**: Best for applications where speed is more important than reliability, such as video streaming, online gaming, and voice over IP (VoIP).

### **Key Difference**
- **TCP** prioritizes **accuracy and order**, while **UDP** prioritizes **speed and efficiency**.

Would you like to know more about how they work together or their specific use cases?

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 739 | Dropped: 3 | Latency: 2469ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Based on the knowledge graph, **Marcus** manages the cloud infrastructure.

He works as a DevOps engineer specializing in **AWS** (Amazon Web Services).

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 638 | Dropped: 10 | Latency: 544ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**.

Her tech stack includes:
*   **Frontend Development**
*   **React**
*   **TypeScript**

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 700 | Dropped: 10 | Latency: 626ms_

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
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration system designed to automate the deployment, scaling, and management of containerized applications.

Here is a quick overview of its core functions:

*   **Orchestration**: It manages a cluster of nodes (servers) and automatically distributes containers across them to ensure high availability.
*   **Scaling**: It can automatically increase or decrease the number of running containers based on traffic or resource usage.
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or moves it to a healthy node.
*   **Service Discovery & Load Balancing**: It handles communication between services and distributes incoming traffic evenly.
*   **Storage Management**: It manages dynamic provisioning of storage for containers.

In short, Kubernetes acts as the "operating system" for your containerized applications, handling the complexity of managing infrastructure so developers can focus on building software.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 729 | Dropped: 10 | Latency: 1923ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.

_📥 Facts extracted: **3** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
```
</details>

**Assistant:** That's great news! I've updated the records to reflect that **Priya** has been promoted to **Tech Lead**.

She is now stepping back from hands-on backend coding to focus on **leading the team technically**.

**Updated Profile:**
*   **Name:** Priya
*   **Role:** Tech Lead
*   **Specialization:** Python and databases
*   **Responsibility:** Leading the whole team technically (previously: backend coder)
*   **Manages:** user

**Expected:** `priya, tech lead, promoted` → ✅ All found

_Context tokens: 718 | Dropped: 12 | Latency: 2024ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** How long has Dmitri been with us and what does he do?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
```
</details>

**Assistant:** Dmitri has been with the company for **5 years**.

His role is **QA Lead**, and his primary responsibility is **writing all the automated test suites**.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 727 | Dropped: 16 | Latency: 592ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What year was Python first released?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
```
</details>

**Assistant:** Python was first released in **1991**. It was created by Guido van Rossum at the Dutch CWI (Centrum Wiskunde & Informatica).

**Expected:** `1991` → ✅ All found

_Context tokens: 497 | Dropped: 18 | Latency: 528ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
```
</details>

**Assistant:** Priya's current role is **Tech Lead**.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ✅ None found

_Context tokens: 571 | Dropped: 18 | Latency: 368ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She specializes in **React** and **TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 604 | Dropped: 18 | Latency: 449ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Give me a quick summary of Priya — what changed about her role and what does she do now?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previousJob: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all automated test suites
  → manages: user
  → manages: user
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
- Yuki: role: frontend developer, specialties: React, TypeScript, joinDate: 6 months ago, relatedEntity: user
```
</details>

**Assistant:** Priya has been promoted to **Tech Lead**, stepping back from hands-on backend coding to focus on **leading the team technically**. Her specialization remains in **Python and databases**, and she now manages the **user** directly.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 655 | Dropped: 18 | Latency: 678ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 3 nodes, 0 edges | **Avg nodes/tell turn:** 0.6

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** We just kicked off Project Orion today — it's a customer portal rebuild for Nexus Financial. The project has a budget of $850,000 and a team of 8 people.

_📥 Facts extracted: **5** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today
```
</details>

**Assistant:** Got it! I've noted that **Project Orion** is a customer portal rebuild for **Nexus Financial**, with a budget of **$850,000** and a team of **8 people**, starting today. Let me know if you need help tracking progress or integrating this into your project management workflow.


_Context tokens: 224 | Dropped: 0 | Latency: 1778ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Camille: role: lead designer, tool: Figma
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille
```
</details>

**Assistant:** Noted! The design phase for **Project Orion** is scheduled to run through the **end of March**, with **Camille** leading the design efforts using **Figma** for all mockups.

Here's a quick summary of the current project status:
- **Project**: Project Orion
- **Client**: Nexus Financial
- **Type**: Customer portal rebuild
- **Budget**: $850,000
- **Team Size**: 8 people
- **Start Date**: Today
- **Design Phase End Date**: End of March
- **Lead Designer**: Camille (Tool: Figma)

Let me know if you'd like to track timelines, assign tasks, or prepare for the next phase!


_Context tokens: 360 | Dropped: 0 | Latency: 2397ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **2** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Understood. I've updated the timeline for **Project Orion**:

- **Development Phase Start**: April 1st
- **Beta Release Target**: June 15th

Here is the complete current status of your project:

| Attribute | Detail |
| :--- | :--- |
| **Project** | Project Orion |
| **Client** | Nexus Financial |
| **Type** | Customer portal rebuild |
| **Budget** | $850,000 |
| **Team Size** | 8 people |
| **Start Date** | Today |
| **Design Phase End** | End of March |
| **Lead Designer** | Camille (Tool: Figma) |
| **Development Start** | April 1st |
| **Beta Release** | June 15th |

Everything looks clear so far. Do you need help estimating the development duration or planning the handover between design and development?


_Context tokens: 540 | Dropped: 0 | Latency: 2768ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** For **Project Orion**:
- **Budget**: $850,000
- **Client**: Nexus Financial

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 743 | Dropped: 0 | Latency: 407ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** **REST** stands for **Representational State Transfer**.

It is an architectural style for networked applications, most commonly used to describe how data is exchanged via APIs (Application Programming Interfaces). Key characteristics include:
*   **Stateless**: Each request from a client to a server must contain all the information needed to understand the request.
*   **Client-Server**: Separates the client (user interface) from the server (data storage).
*   **Cacheable**: Responses can be cached if they are valid.
*   **Uniform Interface**: Uses standard HTTP methods (GET, POST, PUT, DELETE) and resources identified by URLs.
*   **Layered System**: Users don't necessarily know if they are connected directly to the server or through a proxy.
*   **Code on Demand (Optional)**: Servers can extend functionality by transferring executable code (though this is rarely used in pure REST).

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 693 | Dropped: 0 | Latency: 1843ms_

#### Turn 6 📝 `[tell]` ✅

**User:** We've decided to use React on the frontend and a Node.js microservices architecture on the backend. PostgreSQL will be our main database.

_📥 Facts extracted: **4** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL
```
</details>

**Assistant:** That aligns perfectly with the current tech stack for **Project Orion**:

- **Frontend**: React
- **Backend**: Node.js microservices architecture
- **Database**: PostgreSQL

This combination is well-suited for a scalable customer portal rebuild like Nexus Financial's needs. Is there anything specific you'd like to discuss about setting up the microservices or migrating data to PostgreSQL?


_Context tokens: 743 | Dropped: 5 | Latency: 1832ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL
- Camille: role: lead designer, tool: Figma
```
</details>

**Assistant:** Our **development phase** kicks off on **April 1st**, and the design is being led by **Camille**, who is the lead designer using Figma.

**Expected:** `april, camille` → ✅ All found

_Context tokens: 693 | Dropped: 6 | Latency: 593ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL
```
</details>

**Assistant:** The tech stack for **Project Orion** includes:

- **Frontend**: React
- **Backend**: Node.js microservices architecture
- **Database**: PostgreSQL

**Expected:** `react, node, postgresql` → ✅ All found

_Context tokens: 735 | Dropped: 6 | Latency: 584ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym representing five principles of object-oriented design that help create flexible, maintainable, and scalable code. They were introduced by Robert C. Martin (Uncle Bob).

Here is what each letter stands for:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept**: A class should have only one reason to change. It should have only one job to do.
    *   **Example**: A `User` class should handle user data, not also handle sending emails. If you need to send emails, create a separate `EmailService` class.

2.  **O - Open/Closed Principle**
    *   **Concept**: Software entities (classes, modules, functions) should be **open** for extension but **closed** for modification.
    *   **Example**: You can add new features to a system without changing the existing code. This is often achieved through inheritance or polymorphism.

3.  **L - Liskov Substitution Principle**
    *   **Concept**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Example**: If you have a `Vehicle` class, a `Car` subclass should behave like a `Vehicle`. You shouldn't be able to pass a `Car` where a `Vehicle` is expected and have it crash the program.

4.  **I - Interface Segregation Principle**
    *   **Concept**: Clients should not be forced to depend on interfaces they do not use.
    *   **Example**: Instead of one giant `Animal` interface with methods like `fly()`, `eat()`, and `sleep()`, create specific interfaces like `Flyable` and `Eatable`. A bird only needs to implement `Flyable`.

5.  **D - Dependency Inversion Principle**
    *   **Concept**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
    *   **Example**: Don't hardcode a database connection in your main application code. Instead, inject a `DatabaseService` interface. This makes it easier to swap the database (e.g., from PostgreSQL to MongoDB) later without changing the core logic.

**Why it matters:**
Following SOLID principles reduces technical debt, makes code easier to test, and minimizes the risk of breaking things when you add new features.

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 682 | Dropped: 6 | Latency: 4518ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.

_📥 Facts extracted: **4** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Understood. The scope for **Project Orion** has expanded with the addition of the **payment module**, which has pushed the **beta release date from June 15th to August 1st**.

Given the current **development phase start date of April 1st**, the team of **8 people** working on the **React/Node.js microservices** architecture will need to adjust their timeline to meet this new deadline. The **design phase** is expected to conclude by the end of March, so the development team now has roughly four months to integrate the payment module and complete testing.

Would you like to discuss how to prioritize the new requirements or adjust the resource allocation?

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 300 | Dropped: 18 | Latency: 2376ms_

#### Turn 11 📝 `[tell]` ✅

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- payment module: developer: external vendor, vendor: PayCraft, delivery date: July 1st
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Noted. The **payment module** for **Project Orion** will be developed by **PayCraft**, an external vendor, with their **SDK delivery scheduled for July 1st**.

This aligns with the new timeline:
*   **Design Phase:** Ends by end of March.
*   **Development Phase:** Starts April 1st.
*   **SDK Delivery (PayCraft):** July 1st.
*   **Beta Release:** August 1st.

The team will need to coordinate closely with PayCraft to ensure the SDK is ready before the development phase concludes in April, allowing sufficient time for integration, testing, and the final release. How would you like to proceed with coordinating this integration?


_Context tokens: 523 | Dropped: 18 | Latency: 2163ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Based on the current project details for **Project Orion**:

*   **Database:** PostgreSQL
*   **Team Size:** 8 people

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 680 | Dropped: 18 | Latency: 535ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to store and manage collections of data, but they differ in how items are added and removed.

### **Stack (LIFO - Last In, First Out)**
*   **Analogy:** A stack of plates. You can only add or remove a plate from the top.
*   **Operation:** Items are added and removed from the **same end** (the top).
*   **Example:** Undoing actions in a text editor (the last thing you typed is the first thing you can undo).
*   **Common Operations:** `push` (add to top), `pop` (remove from top), `peek` (view top).

### **Queue (FIFO - First In, First Out)**
*   **Analogy:** A line of people waiting for a bus. The first person to arrive is the first to leave.
*   **Operation:** Items are added to the **rear** (back) and removed from the **front** (head).
*   **Example:** Print jobs in a printer queue or tasks in a task scheduler.
*   **Common Operations:** `enqueue` (add to rear), `dequeue` (remove from front), `peek` (view front).

### **Key Difference**
The fundamental difference is the **order of processing**:
*   In a **Stack**, the most recently added item is processed first.
*   In a **Queue**, the oldest item is processed first.

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 600 | Dropped: 18 | Latency: 2811ms_

#### Turn 14 ✅ `[verify_update]` ✅

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** Our beta release for Project Orion is scheduled for **August 1st**.

We previously had a beta release on June 15th, and the scope has since been expanded to include a new payment module.

**Expected:** `august` → ✅ All found
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 641 | Dropped: 22 | Latency: 661ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, frontend: React, backend: Node.js microservices architecture, database: PostgreSQL, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- payment module: developer: external vendor, vendor: PayCraft, delivery date: July 1st
```
</details>

**Assistant:** Based on the available information:

*   **Reason for the delay:** The beta release was pushed back because the project scope was **expanded** to include a new **payment module**.
*   **Who is handling it:** The payment module is being developed by an **external vendor** named **PayCraft**, with a delivery date of **July 1st**.

The current timeline shows the development phase starting on April 1st, leading to the July 1st delivery, which then impacts the final beta release date of August 1st.

**Expected:** `payment, paycraft, august` → ✅ All found

_Context tokens: 737 | Dropped: 22 | Latency: 1230ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 81.8% | **Recall:** 60.0% | **Verify-Update:** 100.0%

**Final KG:** 5 nodes, 2 edges | **Avg nodes/tell turn:** 1.3

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


_Context tokens: 203 | Dropped: 0 | Latency: 1021ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
```
</details>

**Assistant:** Thanks for sharing about Tariq! I've updated my records: he's a high school maths teacher in London with 8 years of experience.


_Context tokens: 265 | Dropped: 0 | Latency: 1489ms_

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

**Assistant:** Noted! I've added Lena to my records as a freelance photographer in Berlin specializing in travel and food photography.


_Context tokens: 374 | Dropped: 0 | Latency: 1144ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** Where does Sam live and what does she do for work?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam lives in **Melbourne** and works as a **graphic designer** at the studio **Pixel & Ink**.

**Expected:** `melbourne, designer, pixel` → ✅ All found

_Context tokens: 425 | Dropped: 0 | Latency: 416ms_

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

_Context tokens: 467 | Dropped: 0 | Latency: 324ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
```
</details>

**Assistant:** Tariq has been teaching for **8 years** and teaches **maths** at the high school level.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 459 | Dropped: 0 | Latency: 429ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.

_📥 Facts extracted: **3** | KG nodes: 3 → 5 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Got it! I've added Zoe to my records: she's a software developer in Toronto working on mobile apps for the startup **AppLaunch**.


_Context tokens: 558 | Dropped: 0 | Latency: 1455ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What kind of photography does Lena do and where is she based?

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
```
</details>

**Assistant:** Lena specializes in **travel and food photography** and is based in **Berlin**.

**Expected:** `lena, berlin, travel, food` → ✅ All found

_Context tokens: 657 | Dropped: 0 | Latency: 449ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is the speed of light in kilometres per second?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** The speed of light in a vacuum is approximately **299,792 kilometres per second**.

**Expected:** `300` → ❌ Missing: `300`

_Context tokens: 656 | Dropped: 0 | Latency: 480ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.

_📥 Facts extracted: **4** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Updated! Sam is now based in **Sydney** and works as a **freelance graphic designer**.

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 730 | Dropped: 1 | Latency: 1985ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** Where does Zoe work and what does she do?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Zoe works at **AppLaunch**, where she develops **mobile apps**.

**Expected:** `zoe, toronto, applaunch, mobile` → ❌ Missing: `toronto`

_Context tokens: 743 | Dropped: 2 | Latency: 461ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** Who wrote the novel '1984'?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** The novel *1984* was written by **George Orwell**.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 746 | Dropped: 1 | Latency: 452ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** Where does Sam live now?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam now lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 734 | Dropped: 4 | Latency: 395ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Tell me about Tariq — where is he, how long has he taught?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** Tariq is based in **London** and has been teaching for **8 years**.

**Expected:** `tariq, london, 8` → ✅ All found

_Context tokens: 744 | Dropped: 3 | Latency: 497ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** What's Sam's current work situation — where is she and does she still work at Pixel and Ink?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8
  → friend: Zoe
- AppLaunch
  → for: Zoe
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam is currently based in **Sydney** and works as a **freelance graphic designer**; she no longer works at **Pixel & Ink**.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 746 | Dropped: 6 | Latency: 589ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 90.9% | **Recall:** 80.0% | **Verify-Update:** 100.0%

**Final KG:** 4 nodes, 1 edges | **Avg nodes/tell turn:** 0.8

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi, I'm Mei Tanaka. I'm a 32-year-old UX researcher at a health tech company called VitalMetrics.

_📥 Facts extracted: **4** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics
```
</details>

**Assistant:** Hello Mei! I've noted that you're a 32-year-old UX researcher working at VitalMetrics. Is there anything specific you'd like to discuss or need help with regarding your work?


_Context tokens: 198 | Dropped: 0 | Latency: 1412ms_

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

**Assistant:** Got it, Mei. I've updated your profile: you live in Singapore, commute via MRT, and have been with VitalMetrics for 4 years. Anything else you'd like to add or discuss?


_Context tokens: 306 | Dropped: 0 | Latency: 1433ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.

_📥 Facts extracted: **4** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted, Mei! I've added that you're learning Spanish at a B1 level with lessons on Tuesdays and Thursdays with your tutor, Carlos. Is there anything else you'd like to share about your life or work?


_Context tokens: 412 | Dropped: 0 | Latency: 1574ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Based on your profile:

*   **Job:** UX researcher
*   **Company:** VitalMetrics

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 479 | Dropped: 0 | Latency: 429ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted, Mei. I've updated your work profile: your current project is **HealthSync**, which focuses on redesigning the patient onboarding flow to reduce drop-off rates.

Here is your updated summary:
*   **Name:** Mei Tanaka
*   **Job:** UX researcher
*   **Company:** VitalMetrics
*   **Location:** Singapore
*   **Commute:** MRT
*   **Tenure:** 4 years
*   **Current Project:** HealthSync (redesigning patient onboarding flow to reduce drop-off rates)
*   **Language Learning:** Spanish (B1 level), Tuesdays & Thursdays with tutor Carlos


_Context tokens: 560 | Dropped: 0 | Latency: 2153ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What is the most spoken language in the world by native speakers?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** The most spoken language in the world by **native speakers** is **Mandarin Chinese** (also known as Chinese or Mandarin).

It is estimated that over **1.1 billion** people speak Mandarin as their first language, making it significantly more widely spoken natively than any other language, including Spanish, English, or Hindi.

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 697 | Dropped: 0 | Latency: 869ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** What language am I learning and what level am I at?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** You are learning **Spanish**, and your current proficiency level is **B1**.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 723 | Dropped: 2 | Latency: 464ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long have I been at VitalMetrics and how do I commute?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** You have been working at **VitalMetrics** for **4 years**, and you commute using the **MRT** (Mass Rapid Transit) in Singapore.

**Expected:** `4, mrt, singapore` → ✅ All found

_Context tokens: 739 | Dropped: 3 | Latency: 586ms_

#### Turn 9 ✏️ `[update]` ✅

**User:** I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.

_📥 Facts extracted: **3** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
```
</details>

**Assistant:** That's great news, Mei! I've updated your language learning profile: you've successfully moved from **B1** to **B2** in Spanish.

Here is your updated summary:
*   **Name:** Mei Tanaka
*   **Job:** UX researcher
*   **Company:** VitalMetrics
*   **Location:** Singapore
*   **Commute:** MRT
*   **Tenure:** 4 years
*   **Current Project:** HealthSync (redesigning patient onboarding flow to reduce drop-off rates)
*   **Language Learning:** Spanish (**B2** level), Tuesdays & Thursdays with tutor Carlos

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 738 | Dropped: 5 | Latency: 2270ms_

#### Turn 10 💬 `[distractor]` ✅

**User:** Can you explain what UX research involves?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** UX research involves understanding user needs, behaviors, and motivations to improve the design and usability of products and services. It typically includes methods like:

*   **User Interviews:** One-on-one conversations to gather insights into user experiences and pain points.
*   **Surveys & Questionnaires:** Collecting quantitative data from a larger group of users.
*   **Usability Testing:** Observing users as they interact with a product to identify issues.
*   **Personas & Journey Maps:** Creating representative user profiles and visualizing the user's experience flow.
*   **A/B Testing:** Comparing two versions of a design to see which performs better.

The goal is to create products that are intuitive, efficient, and satisfying for users, ultimately driving better business outcomes.

**Expected:** `user, research` → ✅ All found

_Context tokens: 737 | Dropped: 9 | Latency: 1624ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- VitalMetrics
  → works_at: Mei Tanaka
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
```
</details>

**Assistant:** You are working on the **HealthSync** project, which focuses on redesigning the patient onboarding flow to reduce drop-off rates.

**Expected:** `healthsync, onboarding` → ✅ All found

_Context tokens: 735 | Dropped: 12 | Latency: 535ms_

#### Turn 12 ✏️ `[update]` ✅

**User:** I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.

_📥 Facts extracted: **1** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted, Mei! I've updated your location to the **Jurong East** neighbourhood in Singapore.

Here is your current profile summary:
*   **Name:** Mei Tanaka
*   **Age:** 32
*   **Job:** UX researcher
*   **Company:** VitalMetrics
*   **Location:** Jurong East, Singapore
*   **Commute:** MRT
*   **Tenure:** 4 years
*   **Current Project:** HealthSync (redesigning patient onboarding flow to reduce drop-off rates)
*   **Language Learning:** Spanish (**B2** level), Tuesdays & Thursdays with tutor Carlos

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 721 | Dropped: 16 | Latency: 1866ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
```
</details>

**Assistant:** Your current proficiency level in Spanish is **B2**.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ✅ None found

_Context tokens: 734 | Dropped: 18 | Latency: 422ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What is my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Your name is **Mei Tanaka**, and you are **32** years old.

**Expected:** `mei, tanaka, 32` → ✅ All found

_Context tokens: 708 | Dropped: 18 | Latency: 473ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Where in Singapore am I living now?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, learning_language: Spanish, proficiency_level: B1, lesson_schedule: Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** You are currently living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 553 | Dropped: 20 | Latency: 408ms_

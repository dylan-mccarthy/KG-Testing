# Run Report: multi_ctx400

_Generated: 2026-03-19T13:08:19.239Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `multi` |
| Graph Depth | 3 |
| Sub-Trees (branching) | 3 |
| Multi-Graph | true |
| Weighted Edges | false |
| Max Context Tokens | 400 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 75 |
| Overall Accuracy | 86.9% |
| Recall Accuracy | 79.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 80.0% |
| Avg Latency | 983ms |
| Total Runtime | 73.7s |
| Total Context Tokens | 23593 |

## Scenario: Personal Introduction & Career Update

**Category:** personal | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 3 nodes, 1 edges | **Avg nodes/tell turn:** 0.8

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi! My name is Jordan Blake and I'm 29 years old.

_📥 Facts extracted: **2** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29
```
</details>

**Assistant:** Hello Jordan! I've noted that you are 29 years old. Is there anything specific you'd like to discuss or need help with?


_Context tokens: 176 | Dropped: 0 | Latency: 930ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years
```
</details>

**Assistant:** Got it, Jordan. I've updated my records: you work as a data analyst at DataStream Inc and have been there for 3 years. Is there anything specific about your role or the company you'd like to explore?


_Context tokens: 252 | Dropped: 0 | Latency: 1274ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Noted, Jordan. I've added that you live in Austin, Texas, and your favorite hobby is Brazilian jiu-jitsu, where you train four times a week.

Here's a quick summary of your profile based on our conversation:
- **Name:** Jordan Blake
- **Age:** 29
- **Job:** Data Analyst at DataStream Inc (3 years tenure)
- **Location:** Austin, Texas
- **Hobby:** Brazilian jiu-jitsu (4x/week)

Is there anything else you'd like to share or discuss?


_Context tokens: 339 | Dropped: 1 | Latency: 1917ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your name is **Jordan Blake**, and you are **29** years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 349 | Dropped: 4 | Latency: 365ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** The **Argentina** national team won the 2022 FIFA World Cup, defeating France 4–2 in the final match held on December 18, 2022.

**Expected:** `argentina` → ✅ All found

_Context tokens: 241 | Dropped: 6 | Latency: 515ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You work at **DataStream Inc** in **Austin, Texas**, where your role is **data analyst**.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 292 | Dropped: 6 | Latency: 377ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I also have a golden retriever named Biscuit who is 2 years old.

_📥 Facts extracted: **2** | KG nodes: 1 → 3 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: age: 2 years old
- user: pet: golden retriever
  → name: Biscuit
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** That's great! Your golden retriever, **Biscuit**, is **2 years old**.


_Context tokens: 346 | Dropped: 7 | Latency: 1070ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- Biscuit: age: 2 years old
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 338 | Dropped: 9 | Latency: 350ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: age: 2 years old
```
</details>

**Assistant:** A **neural network** is a computing system inspired by the human brain, designed to recognize patterns and make decisions.

Think of it like this:
*   **Structure**: It consists of layers of interconnected "nodes" (like neurons).
*   **Learning**: Just as you learn from experience, a neural network learns by analyzing large amounts of data. It adjusts its internal connections to minimize errors in its predictions.
*   **Application**: It's widely used in tasks like image recognition, speech processing, and playing games, where traditional programming rules aren't enough.

In simple terms, it's a machine that gets smarter the more data it processes, mimicking how our brains learn.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 339 | Dropped: 8 | Latency: 1371ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.

_📥 Facts extracted: **2** | KG nodes: 3 → 3 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
  → name: Biscuit
- Biscuit: age: 2 years old
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** That's fantastic news! 🎉 Congratulations on your promotion to Senior Data Analyst at DataStream.

I already have you in my records as a Senior Data Analyst at DataStream, so it looks like my memory was just ahead of the curve! How are you feeling about the new role?

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 251 | Dropped: 18 | Latency: 1277ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** What's my pet's name and how old is it?

<details><summary>📚 KG Memory Injected</summary>

```
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
  → name: Biscuit
- Biscuit: age: 2 years old
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your pet's name is **Biscuit**, and he is **2 years old**.

**Expected:** `biscuit, 2` → ✅ All found

_Context tokens: 336 | Dropped: 18 | Latency: 356ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: age: 2 years old
```
</details>

**Assistant:** The boiling point of water is **212°F** (100°C) at standard atmospheric pressure.

**Expected:** `212` → ✅ All found

_Context tokens: 300 | Dropped: 18 | Latency: 386ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is my current job title?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
  → name: Biscuit
- Biscuit: age: 2 years old
```
</details>

**Assistant:** Your current job title is **Senior Data Analyst** at DataStream.

**Expected:** `senior, analyst` → ✅ All found

_Context tokens: 314 | Dropped: 20 | Latency: 328ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- Biscuit: age: 2 years old
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 321 | Dropped: 20 | Latency: 273ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** How long have I been working in data? And what's my current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: pet: golden retriever, job: Senior Data Analyst, company: DataStream
  → name: Biscuit
- Biscuit: age: 2 years old
```
</details>

**Assistant:** You have been working in data for **3 years** at DataStream Inc. Your current role is **Senior Data Analyst**.

**Expected:** `datastream, senior` → ✅ All found

_Context tokens: 344 | Dropped: 22 | Latency: 427ms_

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
  → reports_to: Priya
```
</details>

**Assistant:** Got it. I've noted that **Priya** is a **backend developer** specializing in **Python and databases**, and that you manage her.

If you'd like to share more about your team or ask anything related to this structure, feel free to let me know!


_Context tokens: 220 | Dropped: 0 | Latency: 1268ms_

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
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Understood. **Marcus** is our **DevOps engineer** specializing in **AWS cloud infrastructure**.

To summarize the team structure based on what you've shared:
- **Priya** (Backend Developer, Python/Databases) reports to **Marcus**.
- **Marcus** (DevOps Engineer, AWS) manages **Priya** and two other users.

Is there anything specific you'd like to discuss regarding the team or their roles?


_Context tokens: 317 | Dropped: 1 | Latency: 1944ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **4** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Got it. I've noted that **Yuki** is a **frontend developer** specializing in **React and TypeScript**, and she joined **6 months ago**. She reports directly to you.


_Context tokens: 286 | Dropped: 4 | Latency: 1526ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What does Priya specialise in?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Based on the knowledge graph, **Priya** specializes in **Python and databases**. She is a backend developer who manages the user.

**Expected:** `python, backend, database` → ✅ All found

_Context tokens: 343 | Dropped: 4 | Latency: 428ms_

#### Turn 5 📝 `[tell]` ✅

**User:** I should also mention our QA lead, Dmitri. He's been with us for 5 years and writes all our automated test suites.

_📥 Facts extracted: **3** | KG nodes: 4 → 5 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Noted, **Dmitri** has been with us for **5 years** and is responsible for writing all our **automated test suites**.


_Context tokens: 350 | Dropped: 7 | Latency: 1227ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What's the difference between TCP and UDP?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** **TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)** are both transport layer protocols, but they differ significantly in how they handle data delivery:

### **TCP**
- **Reliable**: Ensures data is delivered correctly and in order. It uses acknowledgments, retransmissions, and flow control.
- **Connection-Oriented**: Establishes a connection before sending data (e.g., a "handshake").
- **Ordered Delivery**: Guarantees that packets arrive in the same order they were sent.
- **Slower**: Overhead from reliability mechanisms makes it less efficient for large amounts of data.
- **Use Cases**: Web browsing (HTTP/HTTPS), email, file transfers (FTP), remote login (SSH).

### **UDP**
- **Unreliable**: Does not guarantee delivery or order. If a packet is lost, it won't be resent.
- **Connectionless**: Sends data without establishing a prior connection.
- **Faster**: Less overhead means quicker transmission, ideal for real-time applications.
- **Use Cases**: Video streaming, online gaming, VoIP (voice over IP), DNS queries.

### **Key Analogy**
- **TCP** is like sending a registered letter: it arrives safely, but might take longer.
- **UDP** is like shouting a message: it gets out quickly, but might not reach the intended recipient.

Choose **TCP** when reliability is critical, and **UDP** when speed and low latency are more important.

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 337 | Dropped: 8 | Latency: 2734ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Based on the knowledge graph, **Marcus** manages the cloud infrastructure.

He is a **DevOps engineer** specializing in **cloud infrastructure** using the **AWS** platform.

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 277 | Dropped: 12 | Latency: 481ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**.

Her tech stack consists of:
*   **Frontend development**
*   **React**
*   **TypeScript**

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 344 | Dropped: 12 | Latency: 528ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you give me a quick overview of what Kubernetes does?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration system designed to automate the deployment, scaling, and management of containerized applications.

Here is a quick overview of its core functions:

*   **Orchestration**: It automates the process of scheduling containers across a cluster of machines (nodes), ensuring they run on the correct hardware based on resource requirements.
*   **Scaling**: It can automatically scale applications up or down based on traffic or resource usage to maintain optimal performance and cost-efficiency.
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or reschedules it on a healthy node, ensuring high availability.
*   **Load Balancing**: It distributes incoming network traffic across the running containers to prevent any single node from becoming a bottleneck.
*   **Service Discovery and Load Balancing**: It provides a way for containers to find each other and communicate without needing to know their specific IP addresses.

In essence, Kubernetes acts as the "air traffic control" for your containerized applications, managing their lifecycle and ensuring they run reliably in complex environments.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 333 | Dropped: 14 | Latency: 2098ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big news — Priya has been promoted to Tech Lead. She's stepping back from hands-on backend coding and will now be leading the whole team technically.

_📥 Facts extracted: **4** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** That's great news for Priya! Her promotion to Tech Lead aligns perfectly with her existing profile, where she's already specializing in Python and databases and has a background in backend coding. She'll now focus on leading the team technically, which means she'll be managing the team's direction and strategy rather than being hands-on with the code.

Here's how this impacts the team structure:
- **Priya** will now oversee the team's technical direction, leveraging her expertise in Python and databases.
- **User** (who reports to Priya) will continue to manage **Yuki**, a frontend developer specializing in React and TypeScript.
- **Marcus**, a DevOps engineer with expertise in AWS, will still manage **User** and other team members, ensuring the infrastructure and cloud operations are aligned with the team's goals.

This promotion should help streamline the team's technical leadership, with Priya focusing on high-level strategy and Marcus handling the DevOps and infrastructure side. Yuki, with her frontend expertise, will continue to work under User's guidance, contributing to the team's frontend development efforts.

Is there anything specific you'd like to discuss about the team's structure or Priya's new role?

**Expected:** `priya, tech lead, promoted` → ❌ Missing: `promoted`

_Context tokens: 345 | Dropped: 18 | Latency: 3512ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** How long has Dmitri been with us and what does he do?

<details><summary>📚 KG Memory Injected</summary>

```
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Dmitri has been with the company for **5 years**. As the **QA lead**, he is responsible for writing all of the automated test suites.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 321 | Dropped: 20 | Latency: 463ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What year was Python first released?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
```
</details>

**Assistant:** Python was first released in **1991**.

**Expected:** `1991` → ✅ All found

_Context tokens: 316 | Dropped: 22 | Latency: 298ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya's current role is **Tech Lead**, specializing in Python and databases. She is responsible for leading the team technically and manages the user.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ✅ None found

_Context tokens: 342 | Dropped: 22 | Latency: 443ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She specializes in **React and TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 340 | Dropped: 25 | Latency: 338ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Give me a quick summary of Priya — what changed about her role and what does she do now?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: Tech Lead, specialization: Python and databases, previous_job: backend coding, responsibility: leading the whole team technically, isUpdate: true
  → manages: user
- user: manages: Yuki
  → reports_to: Priya
  → reports_to: Marcus
  → reports_to: Marcus
- Marcus: job: DevOps engineer, specialization: cloud infrastructure, technology: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → reports_to: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya's role has shifted from a backend coder to **Tech Lead**, specializing in **Python and databases**. Her primary responsibility now is **leading the team technically**. She currently manages the **user**, who in turn manages **Yuki** (a frontend developer who joined 6 months ago). Additionally, the user reports to both **Priya** and **Marcus**, a DevOps engineer specializing in **AWS cloud infrastructure**.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 329 | Dropped: 28 | Latency: 882ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 80.0% | **Recall:** 75.0% | **Verify-Update:** 50.0%

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

**Assistant:** Got it. I've noted that **Project Orion** is a customer portal rebuild for **Nexus Financial**, with a budget of **$850,000** and a team of **8 people**, starting today.


_Context tokens: 224 | Dropped: 0 | Latency: 1626ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Camille: role: lead designer, tool: Figma
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille
```
</details>

**Assistant:** Understood. I've updated the project details: the design phase will conclude by the **end of March**, with **Camille** as the lead designer using **Figma** for all mockups.


_Context tokens: 334 | Dropped: 0 | Latency: 1496ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **2** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Got it. I've added the **development phase start date (April 1st)** and the **beta release target (June 15th)** to the Project Orion timeline.

Here is the current schedule for **Project Orion**:
*   **Client:** Nexus Financial
*   **Budget:** $850,000
*   **Team Size:** 8 people
*   **Lead Designer:** Camille (using Figma)
*   **Design Phase:** Ends end of March
*   **Development Phase:** Starts April 1st
*   **Beta Release:** June 15th


_Context tokens: 324 | Dropped: 2 | Latency: 2094ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** The budget for **Project Orion** is **$850,000**, and the client is **Nexus Financial**.

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 348 | Dropped: 5 | Latency: 437ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** REST stands for **Representational State Transfer**.

It is an architectural style for networked applications, most commonly used to describe how APIs (Application Programming Interfaces) work. Instead of defining a specific protocol, REST focuses on how resources are represented (usually as data like JSON or XML) and how clients interact with them using standard HTTP methods (like GET, POST, PUT, DELETE).

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 327 | Dropped: 4 | Latency: 839ms_

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
*   **Backend:** Node.js microservices architecture
*   **Database:** PostgreSQL

I'll keep these details in mind for any future questions or discussions about your project.


_Context tokens: 335 | Dropped: 8 | Latency: 1324ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- Camille: role: lead designer, tool: Figma
```
</details>

**Assistant:** Based on the project details:

*   **Development Phase Kick-off:** April 1st
*   **Design Lead:** Camille

**Expected:** `april, camille` → ✅ All found

_Context tokens: 348 | Dropped: 10 | Latency: 433ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- frontend: technology: React
```
</details>

**Assistant:** The Project Orion frontend is built using **React**.

**Expected:** `react, node, postgresql` → ❌ Missing: `node, postgresql`

_Context tokens: 288 | Dropped: 12 | Latency: 291ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym representing five principles of object-oriented design that help create software that is easy to understand, maintain, and modify. They were proposed by Robert C. Martin (Uncle Bob) in 2000.

Here is what each letter stands for:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept:** A class should have only one reason to change. In other words, a class should have one, and only one, reason why an object of that class might be modified.
    *   **Goal:** Reduce coupling and make code more modular.

2.  **O - Open/Closed Principle**
    *   **Concept:** Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
    *   **Goal:** You can add new functionality without changing existing working code, which reduces the risk of introducing bugs.

3.  **L - Liskov Substitution Principle (LSP)**
    *   **Concept:** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Goal:** Ensures that polymorphism works as expected; a subclass must behave like its parent.

4.  **I - Interface Segregation Principle**
    *   **Concept:** Clients should not be forced to depend on interfaces they do not use.
    *   **Goal:** Prefer many small, specific interfaces to one large, general-purpose interface. This prevents "fat" interfaces that force classes to implement methods they don't need.

5.  **D - Dependency Inversion Principle**
    *   **Concept:** High-level modules should not depend on low-level modules. Both should depend on abstractions. Furthermore, abstractions should not depend on details; details should depend on abstractions.
    *   **Goal:** Promotes loose coupling and makes it easier to swap out implementations (e.g., using dependency injection).

**Why it matters:**
Applying SOLID principles helps prevent technical debt, makes code more readable, and simplifies testing and refactoring. It is particularly relevant for architectures like the Node.js microservices you mentioned, as it encourages modular, independent services that can be updated without breaking the whole system.

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 327 | Dropped: 10 | Latency: 4019ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Bad news — we've hit a scope expansion. The beta release date has been pushed from June 15th to August 1st due to the added payment module requirements.

_📥 Facts extracted: **4** | KG nodes: 5 → 5 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** Understood. The scope expansion for **Project Orion** with the new **payment module** requirement has pushed the **beta release date from June 15th to August 1st**.

This aligns with the current plan where the **development phase starts on April 1st**, following the design phase which ends by the end of March. The project is still on track for the new timeline with the **8-person team** working under the **$850,000 budget** for **Nexus Financial**.

Would you like to adjust any other milestones or discuss the impact on the team's workload?

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 290 | Dropped: 18 | Latency: 2300ms_

#### Turn 11 📝 `[tell]` ✅

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

_📥 Facts extracted: **2** | KG nodes: 5 → 6 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- payment module: vendor: PayCraft, delivery date: July 1st
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** That's correct. The payment module for **Project Orion** is being developed by the external vendor **PayCraft**, and they are scheduled to deliver their SDK by **July 1st**. This aligns with the project's expanded scope, which includes integrating this new requirement.


_Context tokens: 284 | Dropped: 20 | Latency: 1213ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- database: type: PostgreSQL
```
</details>

**Assistant:** We are using **PostgreSQL** as our database, and the team size for **Project Orion** is **8 people**.

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 333 | Dropped: 21 | Latency: 411ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to store data, but they differ in how data is added and removed:

*   **Stack (LIFO - Last In, First Out):**
    *   **Access:** You can only add and remove data from the **top** (or end).
    *   **Analogy:** Think of a stack of plates. You can only take the top plate off, and you can only put a new plate on top.
    *   **Example:** Undo functionality in software (the last action you did is the first one you can undo).

*   **Queue (FIFO - First In, First Out):**
    *   **Access:** You add data to the **rear** (back) and remove data from the **front** (head).
    *   **Analogy:** Think of a line at a grocery store. The first person to join the line is the first person to be served.
    *   **Example:** Print jobs or task scheduling (the first task submitted is the first one to be processed).

**Key Difference:**
In a **stack**, the newest item is the first to be accessed. In a **queue**, the oldest item is the first to be accessed.

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 295 | Dropped: 20 | Latency: 2302ms_

#### Turn 14 ✅ `[verify_update]` ✅

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** The beta release for Project Orion is now scheduled for **August 1st**.

This follows the completion of the design phase by the end of March and the start of the development phase on April 1st. The project also includes an expanded scope with a new payment module requirement.

**Expected:** `august` → ✅ All found
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 249 | Dropped: 26 | Latency: 642ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- payment module: vendor: PayCraft, delivery date: July 1st
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** The beta release was pushed back because the project scope was expanded to include a new **payment module** requirement.

The payment module is being handled by the vendor **PayCraft**, with a delivery date set for July 1st.

**Expected:** `payment, paycraft, august` → ❌ Missing: `august`

_Context tokens: 286 | Dropped: 28 | Latency: 578ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 90.9% | **Recall:** 80.0% | **Verify-Update:** 100.0%

**Final KG:** 4 nodes, 0 edges | **Avg nodes/tell turn:** 1.0

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** I want to tell you about my friend Sam. Sam is a graphic designer who lives in Melbourne and works at a studio called Pixel & Ink.

_📥 Facts extracted: **3** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
```
</details>

**Assistant:** Got it! I've noted that your friend Sam is a graphic designer based in Melbourne, working at Pixel & Ink.


_Context tokens: 203 | Dropped: 0 | Latency: 1040ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Noted! I've updated my records: your close friend **Tariq** is a high school maths teacher in London with 8 years of experience.


_Context tokens: 274 | Dropped: 0 | Latency: 1850ms_

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

**Assistant:** Perfect! I've added **Lena** to my records: she's a freelance photographer in Berlin, specializing in travel and food photography. Thanks for sharing details about your friends!


_Context tokens: 346 | Dropped: 1 | Latency: 1570ms_

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

_Context tokens: 350 | Dropped: 3 | Latency: 403ms_

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

_Context tokens: 325 | Dropped: 5 | Latency: 282ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Tariq has been teaching for **8 years** and he teaches **maths** at the high school level.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 349 | Dropped: 4 | Latency: 400ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I should also mention my friend Zoe. She's a software developer in Toronto, working on mobile apps for a startup called AppLaunch.

_📥 Facts extracted: **4** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Got it! I've noted that **Zoe** is a **software developer** based in **Toronto**, working on **mobile apps** for the startup **AppLaunch**.


_Context tokens: 337 | Dropped: 7 | Latency: 1603ms_

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

**Assistant:** Lena specializes in **travel and food photography** and is based in **Berlin**.

**Expected:** `lena, berlin, travel, food` → ✅ All found

_Context tokens: 335 | Dropped: 12 | Latency: 344ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is the speed of light in kilometres per second?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
```
</details>

**Assistant:** The speed of light in a vacuum is approximately **299,792 kilometres per second** (often rounded to 300,000 km/s for general calculations).

**Expected:** `300` → ✅ All found

_Context tokens: 334 | Dropped: 12 | Latency: 527ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Big life update — Sam has moved from Melbourne to Sydney! And she's left Pixel & Ink to go freelance.

_📥 Facts extracted: **4** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** That's a significant update! Sam has indeed moved from **Melbourne** to **Sydney** and has transitioned from working at **Pixel & Ink** to working as a **freelance graphic designer**.

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 334 | Dropped: 14 | Latency: 2012ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** Where does Zoe work and what does she do?

<details><summary>📚 KG Memory Injected</summary>

```
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Zoe works as a **software developer** in **Toronto**, where she creates **mobile apps** for her employer, **AppLaunch**.

**Expected:** `zoe, toronto, applaunch, mobile` → ✅ All found

_Context tokens: 348 | Dropped: 18 | Latency: 439ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** Who wrote the novel '1984'?

**Assistant:** The novel *1984* was written by **George Orwell**.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 347 | Dropped: 15 | Latency: 342ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** Where does Sam live now?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
```
</details>

**Assistant:** Sam currently lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 340 | Dropped: 20 | Latency: 275ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Tell me about Tariq — where is he, how long has he taught?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Tariq is a **high school maths teacher** based in **London** and has **8 years of experience** in the field.

**Expected:** `tariq, london, 8` → ✅ All found

_Context tokens: 344 | Dropped: 19 | Latency: 434ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** What's Sam's current work situation — where is she and does she still work at Pixel and Ink?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Sydney, employer: Pixel & Ink, previousLocation: Melbourne, employmentStatus: freelance
- Zoe: job: software developer, location: Toronto, work: mobile apps, employer: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: job: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam is currently based in **Sydney** and works as a **freelance** graphic designer. She is **no longer employed** by Pixel & Ink, as her current status is listed as freelance.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 343 | Dropped: 25 | Latency: 547ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 63.6% | **Recall:** 40.0% | **Verify-Update:** 50.0%

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

**Assistant:** Hello Mei! I've noted that you're a 32-year-old UX researcher at VitalMetrics. Is there anything specific you'd like to discuss or work on?


_Context tokens: 198 | Dropped: 0 | Latency: 1374ms_

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

**Assistant:** Got it, Mei. I've updated my records: you live in Singapore, commute via MRT, and have been with VitalMetrics for 4 years. Anything else you'd like to share or discuss?


_Context tokens: 290 | Dropped: 0 | Latency: 1435ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.

_📥 Facts extracted: **5** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Noted, Mei. I've added that you're learning Spanish at a B1 level, taking lessons on Tuesdays and Thursdays with your tutor, Carlos. Is there anything specific about your language learning journey you'd like to discuss?


_Context tokens: 330 | Dropped: 2 | Latency: 1698ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Your job is a UX researcher at a company called **VitalMetrics**, based in Singapore. You've been working there for 4 years.

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 330 | Dropped: 4 | Latency: 443ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Got it. I've noted that your current project is **HealthSync**, focused on redesigning the patient onboarding flow to reduce drop-off rates.


_Context tokens: 329 | Dropped: 6 | Latency: 1217ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What is the most spoken language in the world by native speakers?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** The most spoken language in the world by native speakers is **Mandarin Chinese**.

It is estimated that over 900 million people speak Mandarin as their first language, making it the most widely spoken native language globally.

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 318 | Dropped: 8 | Latency: 582ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** What language am I learning and what level am I at?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** You are learning **Spanish**, and your proficiency level is **B1**.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 322 | Dropped: 10 | Latency: 329ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** How long have I been at VitalMetrics and how do I commute?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** You have been working at **VitalMetrics** for **4 years**, and you commute using the **MRT**.

**Expected:** `4, mrt, singapore` → ❌ Missing: `singapore`

_Context tokens: 341 | Dropped: 11 | Latency: 397ms_

#### Turn 9 ✏️ `[update]` ✅

**User:** I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.

_📥 Facts extracted: **3** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** That's great news! I've updated your language proficiency record: you've moved from **B1** to **B2** in Spanish.

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 334 | Dropped: 13 | Latency: 1291ms_

#### Turn 10 💬 `[distractor]` ✅

**User:** Can you explain what UX research involves?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** UX research involves understanding user needs, behaviors, and motivations to inform design decisions. It typically includes methods like:

- **User interviews** – One-on-one conversations to gather insights.
- **Surveys** – Collecting data from a larger group of users.
- **Usability testing** – Observing users interacting with a product to identify issues.
- **Personas and journey maps** – Creating representative user profiles and visualizing user experiences.
- **A/B testing** – Comparing two versions of a design to see which performs better.

The goal is to create products that are intuitive, useful, and enjoyable for users.

**Expected:** `user, research` → ✅ All found

_Context tokens: 340 | Dropped: 14 | Latency: 1261ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- VitalMetrics
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
```
</details>

**Assistant:** You are working on a project at VitalMetrics aimed at **redesigning the patient onboarding flow to reduce drop-off rates**.

**Expected:** `healthsync, onboarding` → ❌ Missing: `healthsync`

_Context tokens: 262 | Dropped: 20 | Latency: 409ms_

#### Turn 12 ✏️ `[update]` ✅

**User:** I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.

_📥 Facts extracted: **1** | KG nodes: 4 → 4 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** I've updated your location to the **Jurong East neighbourhood of Singapore**.

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 341 | Dropped: 20 | Latency: 782ms_

#### Turn 13 ✅ `[verify_update]` ❌

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- HealthSync: project: work, goal: redesign patient onboarding flow to reduce drop-off rates
```
</details>

**Assistant:** Your current proficiency level in Spanish is **B2**. You previously were at B1.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ❌ Found: `b1`

_Context tokens: 350 | Dropped: 22 | Latency: 355ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What is my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
```
</details>

**Assistant:** Your name is **Mei Tanaka**, and you are **32** years old.

**Expected:** `mei, tanaka, 32` → ✅ All found

_Context tokens: 331 | Dropped: 22 | Latency: 365ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Where in Singapore am I living now?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: HealthSync, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, schedule: Tuesday and Thursday, activity: taking lessons, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** You are living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 338 | Dropped: 24 | Latency: 324ms_

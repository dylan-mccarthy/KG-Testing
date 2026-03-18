# Run Report: weighted_ctx400

_Generated: 2026-03-18T21:06:11.072Z_

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
| Overall Accuracy | 83.3% |
| Recall Accuracy | 75.0% |
| Update Detection | 100.0% |
| Verify-Update Accuracy | 70.0% |
| Avg Latency | 909ms |
| Total Runtime | 68.2s |
| Total Context Tokens | 23559 |

## Scenario: Personal Introduction & Career Update

**Category:** personal | **Overall:** 100.0% | **Recall:** 100.0% | **Verify-Update:** 100.0%

**Final KG:** 3 nodes, 0 edges | **Avg nodes/tell turn:** 0.5

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi! My name is Jordan Blake and I'm 29 years old.

_📥 Facts extracted: **2** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29
```
</details>

**Assistant:** Hello Jordan! I've noted that you're 29 years old. Is there anything specific you'd like to chat about or need help with?


_Context tokens: 176 | Dropped: 0 | Latency: 940ms_

#### Turn 2 📝 `[tell]` ✅

**User:** I work as a data analyst at a company called DataStream Inc. I've been there for 3 years.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years
```
</details>

**Assistant:** Got it, Jordan. I've added that you work as a data analyst at DataStream Inc with a tenure of 3 years. Anything else you'd like to share or discuss?


_Context tokens: 253 | Dropped: 0 | Latency: 1202ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I live in Austin, Texas. My favourite hobby is Brazilian jiu-jitsu — I train 4 times a week.

_📥 Facts extracted: **3** | KG nodes: 1 → 1 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Noted, Jordan! I've recorded that you live in Austin, Texas, and your favorite hobby is Brazilian jiu-jitsu, where you train 4 times a week.

Is there anything else you'd like to add or discuss?


_Context tokens: 344 | Dropped: 0 | Latency: 1399ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Your name is Jordan Blake, and you are 29 years old.

**Expected:** `jordan, blake, 29` → ✅ All found

_Context tokens: 330 | Dropped: 3 | Latency: 334ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** Who won the FIFA World Cup in 2022?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** Argentina won the 2022 FIFA World Cup, defeating France 4–2 in the final.

**Expected:** `argentina` → ✅ All found

_Context tokens: 319 | Dropped: 4 | Latency: 390ms_

#### Turn 6 🔍 `[recall]` ✅

**User:** Where do I work and what's my role there?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You work at **DataStream Inc**, where your role is **data analyst**. You've been in this position for 3 years.

**Expected:** `datastream, analyst` → ✅ All found

_Context tokens: 330 | Dropped: 5 | Latency: 439ms_

#### Turn 7 📝 `[tell]` ✅

**User:** I also have a golden retriever named Biscuit who is 2 years old.

_📥 Facts extracted: **2** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Biscuit: species: golden retriever, age: 2 years old
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** That's great! I've noted that **Biscuit** is your **2-year-old golden retriever**. Is there anything specific you'd like to know about dog care or training for Biscuit?


_Context tokens: 342 | Dropped: 6 | Latency: 1155ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What sport do I practise and how often?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You practice **Brazilian jiu-jitsu** **4 times a week**.

**Expected:** `jiu-jitsu, 4` → ✅ All found

_Context tokens: 347 | Dropped: 9 | Latency: 359ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** Can you explain what a neural network is in simple terms?

**Assistant:** A **neural network** is a computational model inspired by the human brain. It consists of layers of interconnected nodes (called "neurons") that process information.

Here's the simple breakdown:
1.  **Input:** Data enters the network (like images or text).
2.  **Processing:** Each neuron receives inputs, applies a mathematical calculation, and passes the result to the next layer.
3.  **Output:** After passing through multiple layers, the network produces a prediction or decision (e.g., recognizing a cat in a photo).

Think of it like a team of workers passing a message down a line, where each person adds their own interpretation before handing it to the next person, eventually resulting in a final conclusion.

**Expected:** `neural, network` → ✅ All found

_Context tokens: 344 | Dropped: 7 | Latency: 1457ms_

#### Turn 10 ✏️ `[update]` ✅

**User:** Great news — I just got promoted! I'm now a Senior Data Analyst at DataStream.

_📥 Facts extracted: **2** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: job: Senior Data Analyst, company: DataStream
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** That's fantastic news! Congratulations on your promotion to Senior Data Analyst at DataStream. It's great to hear you're taking on this new role. How are you feeling about the responsibilities now?

**Expected:** `senior, analyst, promoted` → ❌ Missing: `promoted`

_Context tokens: 234 | Dropped: 18 | Latency: 1112ms_

#### Turn 11 🔍 `[recall]` ✅

**User:** What's my pet's name and how old is it?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- Biscuit: species: golden retriever, age: 2 years old
```
</details>

**Assistant:** Your pet's name is **Biscuit**, and it is **2 years old**.

**Expected:** `biscuit, 2` → ✅ All found

_Context tokens: 302 | Dropped: 18 | Latency: 351ms_

#### Turn 12 💬 `[distractor]` ✅

**User:** What is the boiling point of water in Fahrenheit?

**Assistant:** The boiling point of water is **212°F** (at standard atmospheric pressure).

**Expected:** `212` → ✅ All found

_Context tokens: 255 | Dropped: 18 | Latency: 336ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is my current job title?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** Your current job title is **Senior Data Analyst**.

**Expected:** `senior, analyst` → ✅ All found

_Context tokens: 349 | Dropped: 19 | Latency: 293ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What city do I live in?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
```
</details>

**Assistant:** You live in **Austin, Texas**.

**Expected:** `austin, texas` → ✅ All found

_Context tokens: 309 | Dropped: 20 | Latency: 278ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** How long have I been working in data? And what's my current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Jordan Blake: name: Jordan Blake, age: 29, job: data analyst, company: DataStream Inc, tenure: 3 years, location: Austin, Texas, hobby: Brazilian jiu-jitsu, training_frequency: 4 times a week
- user: job: Senior Data Analyst, company: DataStream
```
</details>

**Assistant:** Based on the available information, your current role is **Senior Data Analyst**. However, the specific duration of your experience in the data field is not recorded in the knowledge graph; only your tenure at **DataStream Inc** is listed as **3 years**.

**Expected:** `datastream, senior` → ✅ All found

_Context tokens: 341 | Dropped: 21 | Latency: 613ms_

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
  → manages: Priya
```
</details>

**Assistant:** Got it. I've noted that you manage a small engineering team, and Priya is your backend developer specializing in Python and databases.


_Context tokens: 220 | Dropped: 0 | Latency: 1059ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Then we have Marcus. He's our DevOps engineer and handles all our cloud infrastructure on AWS.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
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

**Assistant:** Noted. I've added that Marcus is your DevOps engineer specializing in cloud infrastructure on AWS.


_Context tokens: 329 | Dropped: 0 | Latency: 1387ms_

#### Turn 3 📝 `[tell]` ✅

**User:** Our frontend developer is Yuki. She's excellent with React and TypeScript. She just joined 6 months ago.

_📥 Facts extracted: **3** | KG nodes: 3 → 4 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Got it. I've recorded that Yuki is your frontend developer, specializing in React and TypeScript, and she joined 6 months ago.


_Context tokens: 335 | Dropped: 2 | Latency: 1281ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Priya specializes in Python and databases.

**Expected:** `python, backend, database` → ❌ Missing: `backend`

_Context tokens: 326 | Dropped: 4 | Latency: 279ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Got it. I've noted that Dmitri is our QA lead with a 5-year tenure, responsible for writing all our automated test suites.


_Context tokens: 332 | Dropped: 6 | Latency: 1561ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols, but they differ significantly in how they handle data transmission:

- **Reliability**: TCP is reliable; it ensures data is delivered correctly and in order using acknowledgments and retransmissions. UDP is unreliable; it sends data without guarantees of delivery or order.
- **Speed**: UDP is faster because it has less overhead. TCP is slower due to its reliability mechanisms.
- **Connection**: TCP requires a connection before data transfer (handshake). UDP is connectionless.
- **Use Cases**: TCP is used for applications needing reliability (e.g., web browsing, email). UDP is used for real-time applications where speed is critical (e.g., video streaming, online gaming).

**Expected:** `tcp, udp` → ✅ All found

_Context tokens: 346 | Dropped: 7 | Latency: 1471ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** Who manages our cloud infrastructure and what platform do we use?

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Based on the knowledge graph, **Marcus** manages the cloud infrastructure.

He works as a DevOps engineer specializing in cloud infrastructure on the **AWS** platform.

**Expected:** `marcus, aws` → ✅ All found

_Context tokens: 269 | Dropped: 12 | Latency: 464ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** How long has Yuki been on the team and what's her tech stack?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Priya: job: backend developer, specialization: Python and databases
  → manages: user
```
</details>

**Assistant:** Yuki has been on the team for **6 months**.

Her tech stack consists of **React** and **TypeScript**.

**Expected:** `yuki, 6, react, typescript` → ✅ All found

_Context tokens: 335 | Dropped: 12 | Latency: 428ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Kubernetes (often abbreviated as **K8s**) is an open-source container orchestration system designed to automate the deployment, scaling, and management of containerized applications.

Here is a quick overview of its core functions:

*   **Orchestration**: It automates the process of deploying containers across multiple machines (nodes) in a cluster, ensuring they are distributed efficiently and run correctly.
*   **Scaling**: It can automatically scale applications up or down based on traffic or resource usage (e.g., adding more containers if demand spikes).
*   **Self-Healing**: If a container crashes or a node fails, Kubernetes automatically restarts the container or reschedules it on a healthy node to maintain application availability.
*   **Load Balancing**: It distributes incoming network traffic across the running containers to ensure even distribution and high performance.
*   **Service Discovery and Load Balancing**: It provides a way for containers to find each other and communicate without needing to know their specific IP addresses.

In essence, Kubernetes acts as a "traffic controller" for your applications, handling the complex logistics of keeping your containers running smoothly, reliably, and efficiently.

**Expected:** `kubernetes, container` → ✅ All found

_Context tokens: 317 | Dropped: 14 | Latency: 2101ms_

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
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** That's great news, Priya! Your promotion to Tech Lead aligns perfectly with your existing role and responsibilities. You're already leading the team technically, and stepping back from hands-on backend coding will allow you to focus even more on strategic leadership.

Your team now includes:
- **Priya** (Tech Lead, Python & Databases)
- **Marcus** (DevOps Engineer, AWS)
- **Yuki** (Frontend Developer, React & TypeScript)
- **Dmitri** (QA Lead, Automated Testing)

All of you are currently managing the **user**, which suggests a strong collaborative structure. How can I help you or your team move forward?

**Expected:** `priya, tech lead, promoted` → ❌ Missing: `promoted`

_Context tokens: 338 | Dropped: 18 | Latency: 2224ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Dmitri has been with the company for **5 years**. As the **QA lead**, his main responsibility is **writing all of the automated test suites**.

**Expected:** `dmitri, 5, qa, test` → ✅ All found

_Context tokens: 314 | Dropped: 20 | Latency: 467ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
```
</details>

**Assistant:** Python was first released in **1991**.

**Expected:** `1991` → ✅ All found

_Context tokens: 349 | Dropped: 21 | Latency: 297ms_

#### Turn 13 ✅ `[verify_update]` ✅

**User:** What is Priya's current role?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya's current role is **Tech Lead**, where she specializes in **Python and databases** and is responsible for leading the team technically.

**Expected:** `tech lead, priya` → ✅ All found
**Forbidden:** `backend developer` → ✅ None found

_Context tokens: 335 | Dropped: 22 | Latency: 455ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** Who's our frontend developer and what does she work with?

<details><summary>📚 KG Memory Injected</summary>

```
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- user
  → manages: Priya
  → manages: Marcus
  → manages: Marcus
- Priya: job: backend developer, specialization: Python and databases, role: Tech Lead, previousRole: backend coder, responsibility: leading the whole team technically
  → manages: user
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
```
</details>

**Assistant:** Our frontend developer is **Yuki**. She specializes in **React and TypeScript**.

**Expected:** `yuki, react, typescript` → ✅ All found

_Context tokens: 343 | Dropped: 24 | Latency: 337ms_

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
- Marcus: job: DevOps engineer, specialty: cloud infrastructure, platform: AWS
  → manages: user
  → manages: user
  → manages: user
- Yuki: job: frontend developer, specialization: React and TypeScript, joinDate: 6 months ago
  → manages: user
- Dmitri: role: QA lead, tenure: 5 years, responsibility: writes all our automated test suites
```
</details>

**Assistant:** Priya transitioned from a **backend coder** to a **Tech Lead**. 

In her new role, she now leads the team technically as a **backend developer** specializing in **Python and databases**. She manages the user and oversees the technical direction for the team.

**Expected:** `priya, lead` → ✅ All found

_Context tokens: 346 | Dropped: 27 | Latency: 651ms_

## Scenario: Project Tracking & Milestone Changes

**Category:** project | **Overall:** 80.0% | **Recall:** 75.0% | **Verify-Update:** 50.0%

**Final KG:** 7 nodes, 0 edges | **Avg nodes/tell turn:** 1.4

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


_Context tokens: 224 | Dropped: 0 | Latency: 1631ms_

#### Turn 2 📝 `[tell]` ✅

**User:** Our design phase is planned to run through the end of March. The lead designer is Camille and she's using Figma for all the mockups.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Camille: role: lead designer, tool: Figma
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille
```
</details>

**Assistant:** Noted. **Project Orion**'s design phase will conclude by the **end of March**. The lead designer is **Camille**, who is using **Figma** for all the mockups.


_Context tokens: 334 | Dropped: 0 | Latency: 1509ms_

#### Turn 3 📝 `[tell]` ✅

**User:** The development phase starts April 1st and we're targeting a beta release on June 15th.

_📥 Facts extracted: **2** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** Understood. **Project Orion**'s development phase begins on **April 1st**, with a target **beta release on June 15th**.


_Context tokens: 320 | Dropped: 2 | Latency: 1335ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** What's the budget for Project Orion and who is our client?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
```
</details>

**Assistant:** The budget for **Project Orion** is **$850,000**, and the client is **Nexus Financial**.

**Expected:** `850, nexus, financial` → ✅ All found

_Context tokens: 336 | Dropped: 3 | Latency: 447ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What does REST stand for in REST API?

**Assistant:** REST stands for **Representational State Transfer**.

It is an architectural style for networked applications, not a specific protocol. The core idea is that a client can retrieve and manipulate resources (data) through a stateless set of operations (typically HTTP methods like GET, POST, PUT, DELETE) on a server.

**Expected:** `representational, state, transfer` → ✅ All found

_Context tokens: 326 | Dropped: 2 | Latency: 729ms_

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

**Assistant:** Got it! I've noted that:

- **Frontend**: React  
- **Backend**: Node.js microservices  
- **Database**: PostgreSQL  

This aligns well with modern scalable web development practices. Let me know if you'd like help planning the architecture, setting up the stack, or anything else related to your project!


_Context tokens: 337 | Dropped: 7 | Latency: 1431ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** When does our development phase kick off and who's leading design?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- Camille: role: lead designer, tool: Figma
```
</details>

**Assistant:** Based on the knowledge graph:

- **Development phase** kicks off on **April 1st**.
- **Camille** is leading the design phase as the **lead designer**.

**Expected:** `april, camille` → ✅ All found

_Context tokens: 327 | Dropped: 11 | Latency: 514ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** What's the tech stack we chose for Orion?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: June 15th
- frontend: technology: React
```
</details>

**Assistant:** For the **Project Orion** frontend, the technology chosen is **React**.

**Expected:** `react, node, postgresql` → ❌ Missing: `node, postgresql`

_Context tokens: 299 | Dropped: 12 | Latency: 341ms_

#### Turn 9 💬 `[distractor]` ✅

**User:** What is SOLID in software engineering?

**Assistant:** **SOLID** is an acronym that stands for five principles of object-oriented design, created by Robert C. Martin (Uncle Bob). These principles help developers create software that is more maintainable, scalable, and easier to understand.

Here is what each letter stands for:

1.  **S - Single Responsibility Principle (SRP)**
    *   **Concept:** A class should have only one reason to change. In other words, a class should have only one job to do.
    *   **Goal:** Reduce complexity and make code easier to test and modify.

2.  **O - Open/Closed Principle (OCP)**
    *   **Concept:** Software entities (classes, modules, functions, etc.) should be **open for extension** but **closed for modification**.
    *   **Goal:** You can add new functionality without changing existing code, which reduces the risk of introducing bugs.

3.  **L - Liskov Substitution Principle (LSP)**
    *   **Concept:** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
    *   **Goal:** Ensure that polymorphic code works correctly regardless of which subclass is used.

4.  **I - Interface Segregation Principle (ISP)**
    *   **Concept:** Clients should not be forced to depend on interfaces they do not use.
    *   **Goal:** Create many small, specific interfaces rather than a few, large, "god" interfaces. This makes code more flexible and easier to maintain.

5.  **D - Dependency Inversion Principle (DIP)**
    *   **Concept:** High-level modules should not depend on low-level modules. Both should depend on abstractions. Also, abstractions should not depend on details; details should depend on abstractions.
    *   **Goal:** Decouple high-level modules from low-level modules, making the system more modular and easier to test.

These principles are widely used in software engineering to build robust systems, though they are most commonly applied in object-oriented programming.

**Expected:** `single, open, principle` → ✅ All found

_Context tokens: 322 | Dropped: 11 | Latency: 3683ms_

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

Given that the **development phase starts on April 1st**, this timeline shift will impact the current sprint planning. Would you like me to adjust the project schedule or discuss how this affects the team of 8 people?

**Expected:** `august, beta, pushed` → ✅ All found

_Context tokens: 290 | Dropped: 18 | Latency: 1962ms_

#### Turn 11 📝 `[tell]` ✅

**User:** The payment module will be built by an external vendor called PayCraft. They'll deliver their SDK by July 1st.

_📥 Facts extracted: **3** | KG nodes: 5 → 7 (+2)_

<details><summary>📚 KG Memory Injected</summary>

```
- payment module: developer: PayCraft
- PayCraft: delivery date: July 1st
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** That's correct. The payment module for Project Orion will be developed by **PayCraft**, and they are scheduled to deliver their SDK by **July 1st**. This aligns with the expanded scope of the project, which now includes this new requirement alongside the ongoing rebuild of the customer portal for Nexus Financial.


_Context tokens: 287 | Dropped: 20 | Latency: 1431ms_

#### Turn 12 🔍 `[recall]` ✅

**User:** What database are we using and what's the team size?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- database: type: PostgreSQL
```
</details>

**Assistant:** We are using **PostgreSQL** as our database. The team size for Project Orion is **8 people**.

**Expected:** `postgresql, 8` → ✅ All found

_Context tokens: 344 | Dropped: 21 | Latency: 383ms_

#### Turn 13 💬 `[distractor]` ✅

**User:** Explain the difference between a stack and a queue.

**Assistant:** A **stack** and a **queue** are both data structures used to store collections of data, but they differ in the order in which elements are added and removed.

*   **Stack (LIFO - Last In, First Out):**
    Elements are added and removed from the **same end**, known as the "top." The last element added to the stack is the first one to be removed.
    *   *Analogy:* A stack of plates. You can only add a plate on top, and you can only take the top plate off.

*   **Queue (FIFO - First In, First Out):**
    Elements are added to one end (the "rear") and removed from the other end (the "front"). The first element added to the queue is the first one to be removed.
    *   *Analogy:* A line of people waiting for a bus. The person who arrived first is the one who leaves first.

**Key Difference:**
In a **stack**, the most recently added item is accessed first. In a **queue**, the oldest item is accessed first.

**Expected:** `stack, queue, lifo` → ✅ All found

_Context tokens: 304 | Dropped: 20 | Latency: 2042ms_

#### Turn 14 ✅ `[verify_update]` ✅

**User:** When is our beta release now?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
```
</details>

**Assistant:** The beta release for Project Orion is now scheduled for **August 1st**.

**Expected:** `august` → ✅ All found
**Forbidden:** `june 15` → ✅ None found

_Context tokens: 249 | Dropped: 26 | Latency: 316ms_

#### Turn 15 ✅ `[verify_update]` ❌

**User:** Why did the beta get pushed back, and who is handling the payment module?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Orion: type: customer portal rebuild, client: Nexus Financial, budget: $850,000, team_size: 8 people, start_date: today, design phase end date: end of March, relatedEntity: Camille, development phase start date: April 1st, beta release date: August 1st, previous beta release date: June 15th, scope: expanded, added requirement: payment module
- payment module: developer: PayCraft
- backend: architecture: Node.js microservices
```
</details>

**Assistant:** The beta release was pushed back because the scope was expanded to include a new **payment module** requirement.

The payment module is being handled by **PayCraft**.

**Expected:** `payment, paycraft, august` → ❌ Missing: `august`

_Context tokens: 315 | Dropped: 26 | Latency: 469ms_

## Scenario: Social Network & Relationship Updates

**Category:** social | **Overall:** 81.8% | **Recall:** 80.0% | **Verify-Update:** 50.0%

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

**Assistant:** Got it! I've noted that your friend Sam is a graphic designer based in Melbourne who works at Pixel & Ink.


_Context tokens: 203 | Dropped: 0 | Latency: 1028ms_

#### Turn 2 📝 `[tell]` ✅

**User:** My other close friend is Tariq. He's a high school maths teacher in London. He's been teaching for 8 years.

_📥 Facts extracted: **4** | KG nodes: 1 → 2 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** I've added that to my memory. So, your close friend **Tariq** is a high school maths teacher in London with 8 years of experience.


_Context tokens: 274 | Dropped: 0 | Latency: 1866ms_

#### Turn 3 📝 `[tell]` ✅

**User:** And there's Lena — she's a freelance photographer based in Berlin. She mainly does travel and food photography.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Noted! **Lena** is a freelance photographer in Berlin specializing in travel and food photography. I've updated my records with all three of your close friends: Sam (graphic designer in Melbourne), Tariq (maths teacher in London), and Lena (photographer in Berlin).


_Context tokens: 349 | Dropped: 1 | Latency: 1729ms_

#### Turn 4 🔍 `[recall]` ✅

**User:** Where does Sam live and what does she do for work?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam lives in **Melbourne** and works as a **graphic designer** for the company **Pixel & Ink**.

**Expected:** `melbourne, designer, pixel` → ✅ All found

_Context tokens: 338 | Dropped: 4 | Latency: 389ms_

#### Turn 5 💬 `[distractor]` ✅

**User:** What's the capital city of Australia?

<details><summary>📚 KG Memory Injected</summary>

```
- Sam: job: graphic designer, location: Melbourne, employer: Pixel & Ink
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** The capital city of Australia is **Canberra**.

**Expected:** `canberra` → ✅ All found

_Context tokens: 348 | Dropped: 5 | Latency: 294ms_

#### Turn 6 🔍 `[recall]` ❌

**User:** How long has Tariq been teaching and what subject?

<details><summary>📚 KG Memory Injected</summary>

```
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
```
</details>

**Assistant:** Tariq has been teaching for **8 years** and teaches **maths** at the high school level.

**Expected:** `tariq, 8, maths, teacher` → ❌ Missing: `teacher`

_Context tokens: 338 | Dropped: 5 | Latency: 396ms_

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

**Assistant:** Got it. I've noted that **Zoe** is a **software developer** in **Toronto**, working on **mobile apps** for **AppLaunch**, and she is your **close friend**.


_Context tokens: 349 | Dropped: 7 | Latency: 1468ms_

#### Turn 8 🔍 `[recall]` ✅

**User:** What kind of photography does Lena do and where is she based?

<details><summary>📚 KG Memory Injected</summary>

```
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
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

_Context tokens: 318 | Dropped: 13 | Latency: 345ms_

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

_Context tokens: 315 | Dropped: 13 | Latency: 382ms_

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
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
- Zoe: job: software developer, location: Toronto, work: mobile apps
  → friend: Tariq
  → for: AppLaunch
- Tariq: job: high school maths teacher, location: London, years of experience: 8, relation: close friend
  → friend: Zoe
- AppLaunch
  → for: Zoe
```
</details>

**Assistant:** That's great news about Sam! I've noted that she has moved from **Melbourne** to **Sydney** and has transitioned from working at **Pixel & Ink** to going **freelance**.

**Expected:** `sam, sydney, freelance` → ✅ All found

_Context tokens: 334 | Dropped: 17 | Latency: 1327ms_

#### Turn 11 🔍 `[recall]` ✅

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
```
</details>

**Assistant:** Zoe works as a **software developer** in **Toronto**, where she focuses on building **mobile apps** for **AppLaunch**.

**Expected:** `zoe, toronto, applaunch, mobile` → ✅ All found

_Context tokens: 345 | Dropped: 18 | Latency: 437ms_

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

**Assistant:** George Orwell wrote the novel *1984*.

**Expected:** `orwell, george` → ✅ All found

_Context tokens: 314 | Dropped: 20 | Latency: 300ms_

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
- Lena: profession: freelance photographer, location: Berlin, specialty: travel and food photography
```
</details>

**Assistant:** Sam currently lives in **Sydney**.

**Expected:** `sydney` → ✅ All found
**Forbidden:** `melbourne` → ✅ None found

_Context tokens: 348 | Dropped: 21 | Latency: 299ms_

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

_Context tokens: 321 | Dropped: 22 | Latency: 462ms_

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
```
</details>

**Assistant:** Sam is currently based in **Sydney** working as a **freelancer**. She no longer works at **Pixel & Ink**, as she has left the company. She previously moved from Melbourne to Sydney.

**Expected:** `sydney, freelance` → ✅ All found
**Forbidden:** `melbourne` → ❌ Found: `melbourne`

_Context tokens: 349 | Dropped: 25 | Latency: 562ms_

## Scenario: Mixed Facts with Multiple Concurrent Updates

**Category:** mixed | **Overall:** 63.6% | **Recall:** 40.0% | **Verify-Update:** 50.0%

**Final KG:** 3 nodes, 1 edges | **Avg nodes/tell turn:** 0.5

### Turn-by-Turn Results

#### Turn 1 📝 `[tell]` ✅

**User:** Hi, I'm Mei Tanaka. I'm a 32-year-old UX researcher at a health tech company called VitalMetrics.

_📥 Facts extracted: **4** | KG nodes: 0 → 1 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics
```
</details>

**Assistant:** Hello Mei! I've noted that you're a 32-year-old UX researcher at VitalMetrics. Is there anything specific you'd like to discuss or work on regarding your role?


_Context tokens: 198 | Dropped: 0 | Latency: 1398ms_

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

**Assistant:** Got it, Mei. I've updated your profile: you live in Singapore, commute via MRT, and have been with VitalMetrics for 4 years. Anything else you'd like to share or discuss?


_Context tokens: 302 | Dropped: 0 | Latency: 1450ms_

#### Turn 3 📝 `[tell]` ✅

**User:** I'm currently learning Spanish — I'm at B1 level. I take lessons every Tuesday and Thursday with a tutor named Carlos.

_📥 Facts extracted: **5** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted, Mei. I've added that you're learning Spanish at the B1 level, taking lessons every Tuesday and Thursday with your tutor, Carlos. Is there anything specific about your language learning journey you'd like to talk about?


_Context tokens: 339 | Dropped: 2 | Latency: 2232ms_

#### Turn 4 🔍 `[recall]` ❌

**User:** What's my job and where do I work?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Based on the information I have:

*   **Job:** UX researcher
*   **Company:** VitalMetrics
*   **Location:** Singapore

You have been working at VitalMetrics for 4 years.

**Expected:** `mei, ux, vitalmetrics` → ❌ Missing: `mei`

_Context tokens: 340 | Dropped: 4 | Latency: 557ms_

#### Turn 5 📝 `[tell]` ✅

**User:** My current project at work is called HealthSync — we're redesigning the patient onboarding flow to reduce drop-off rates.

_📥 Facts extracted: **1** | KG nodes: 2 → 2 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** That sounds like a significant project. Redesigning the patient onboarding flow to reduce drop-off rates is a key challenge in UX research, especially in healthcare.

I've noted that you are working on the **HealthSync** project. Is there anything specific about the redesign process or the user data you're analyzing that you'd like to discuss?


_Context tokens: 332 | Dropped: 6 | Latency: 1276ms_

#### Turn 6 💬 `[distractor]` ✅

**User:** What is the most spoken language in the world by native speakers?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** The most spoken language in the world by native speakers is **Mandarin Chinese** (specifically the Mandarin dialect).

It is estimated that over **1.1 billion** people speak Mandarin as their first language, making it the most widely spoken native language globally. While English is the most spoken language overall when including second-language speakers, Mandarin holds the top spot for native speakers.

**Expected:** `mandarin, chinese` → ✅ All found

_Context tokens: 349 | Dropped: 9 | Latency: 826ms_

#### Turn 7 🔍 `[recall]` ✅

**User:** What language am I learning and what level am I at?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** You are learning **Spanish** and your current proficiency level is **B1**.

**Expected:** `spanish, b1` → ✅ All found

_Context tokens: 254 | Dropped: 12 | Latency: 324ms_

#### Turn 8 🔍 `[recall]` ❌

**User:** How long have I been at VitalMetrics and how do I commute?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** You have been working at **VitalMetrics** for **4 years**, and you commute using the **MRT**.

**Expected:** `4, mrt, singapore` → ❌ Missing: `singapore`

_Context tokens: 296 | Dropped: 12 | Latency: 400ms_

#### Turn 9 ✏️ `[update]` ✅

**User:** I recently passed my Spanish B2 exam! I've moved up from B1 to B2 level now.

_📥 Facts extracted: **3** | KG nodes: 2 → 3 (+1)_

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1
```
</details>

**Assistant:** That's fantastic news! I've updated your language proficiency to **B2**.

You're currently taking **Spanish lessons** every **Tuesday and Thursday** with your tutor, **Carlos**, as part of your project, **HealthSync**. How are you finding the lessons at this new level?

**Expected:** `b2, spanish, passed` → ❌ Missing: `passed`

_Context tokens: 350 | Dropped: 13 | Latency: 1539ms_

#### Turn 10 💬 `[distractor]` ✅

**User:** Can you explain what UX research involves?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** UX research involves gathering insights about users to inform design decisions. It typically includes:

*   **User Interviews & Surveys:** Understanding user needs, behaviors, and pain points.
*   **Usability Testing:** Observing users interacting with a product to identify friction points.
*   **Data Analysis:** Reviewing analytics and usage data to understand patterns.
*   **Prototyping & Testing:** Creating low-fidelity or high-fidelity prototypes to test hypotheses before development.

In your role as a **UX researcher** at **VitalMetrics**, this process likely helps refine the **HealthSync** project to ensure it effectively meets user health and wellness needs.

**Expected:** `user, research` → ✅ All found

_Context tokens: 347 | Dropped: 16 | Latency: 1283ms_

#### Turn 11 🔍 `[recall]` ❌

**User:** What project am I working on at VitalMetrics?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** You are working on the **HealthSync** project at VitalMetrics.

**Expected:** `healthsync, onboarding` → ❌ Missing: `onboarding`

_Context tokens: 253 | Dropped: 20 | Latency: 307ms_

#### Turn 12 ✏️ `[update]` ✅

**User:** I've also just moved apartments — I'm now in the Jurong East neighbourhood of Singapore rather than central Singapore.

_📥 Facts extracted: **1** | KG nodes: 3 → 3 (+0)_

<details><summary>📚 KG Memory Injected</summary>

```
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Noted! I've updated your location to the **Jurong East** neighbourhood in Singapore.

**Expected:** `jurong, moved` → ❌ Missing: `moved`

_Context tokens: 340 | Dropped: 20 | Latency: 814ms_

#### Turn 13 ✅ `[verify_update]` ❌

**User:** What's my current level in Spanish?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** Your current Spanish proficiency level is **B2**. You previously held a B1 level and have been working on improving it, taking lessons with Carlos every Tuesday and Thursday.

**Expected:** `b2` → ✅ All found
**Forbidden:** `b1` → ❌ Found: `b1`

_Context tokens: 342 | Dropped: 22 | Latency: 482ms_

#### Turn 14 🔍 `[recall]` ✅

**User:** What is my name and how old am I?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
```
</details>

**Assistant:** Your name is **Mei Tanaka**, and you are **32** years old.

**Expected:** `mei, tanaka, 32` → ✅ All found

_Context tokens: 336 | Dropped: 23 | Latency: 361ms_

#### Turn 15 ✅ `[verify_update]` ✅

**User:** Where in Singapore am I living now?

<details><summary>📚 KG Memory Injected</summary>

```
- Mei Tanaka: name: Mei Tanaka, age: 32, job: UX researcher, company: VitalMetrics, location: Singapore, commute_method: MRT, employer_tenure: 4 years, language: Spanish, proficiency: B1, activity: taking lessons, frequency: every Tuesday and Thursday, tutor: Carlos, project: HealthSync
  → works_at: VitalMetrics
- VitalMetrics
  → works_at: Mei Tanaka
- user: language: Spanish, proficiency_level: B2, previous_proficiency_level: B1, location: Jurong East neighbourhood of Singapore
```
</details>

**Assistant:** You are living in the **Jurong East** neighbourhood of Singapore.

**Expected:** `jurong` → ✅ All found

_Context tokens: 315 | Dropped: 26 | Latency: 330ms_

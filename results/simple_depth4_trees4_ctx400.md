# Run Report: simple_depth4_trees4_ctx400

_Generated: 2026-03-18T17:18:25.431Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `simple` |
| Graph Depth | 4 |
| Sub-Trees (branching) | 4 |
| Multi-Graph | false |
| Weighted Edges | false |
| Max Context Tokens | 400 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |
| Temperature | 0.3 |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 54 |
| Avg Keyword Accuracy | 98.0% |
| Avg Latency | 6138ms |
| Total Runtime | 321.2s |
| Total Context Tokens | 18913 |

## Scenario: Personal Profile Recall

**Category:** personal_facts | **Accuracy:** 100.0% | **Avg Latency:** 4688ms

**KG Stats:** 5 nodes, 5 edges, works_at, married_to, parent_of, owns

### Turn-by-Turn Results

#### Turn 1 ✅

**User:** What is Alex Chen's job?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
```
</details>

**Assistant:** Alex Chen is a Senior Software Engineer at NovaTech Solutions.

**Expected Keywords:** `software engineer`
**Found:** ✅ Yes

_Context tokens: 314 | History dropped: 0 | Latency: 785ms_

#### Turn 2 ✅

**User:** Tell me about the weather in Tokyo today.

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** 


_Context tokens: 341 | History dropped: 2 | Latency: 43123ms_

#### Turn 3 ✅

**User:** How old is Alex?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex is 34 years old.

**Expected Keywords:** `34`
**Found:** ✅ Yes

_Context tokens: 338 | History dropped: 3 | Latency: 1082ms_

#### Turn 4 ✅

**User:** What does Alex do in his free time?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex spends his free time rock climbing and photography.

**Expected Keywords:** `climbing, photography`
**Found:** ✅ Yes

_Context tokens: 349 | History dropped: 5 | Latency: 790ms_

#### Turn 5 ✅

**User:** What is the capital of France? Just checking.

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** The capital of France is Paris.

**Expected Keywords:** `Paris`
**Found:** ✅ Yes

_Context tokens: 342 | History dropped: 8 | Latency: 1052ms_

#### Turn 6 ✅

**User:** Where does Alex's wife work?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex's wife, Sarah Kim, works at Seattle Children's Hospital as a pediatric nurse.

**Expected Keywords:** `children's hospital, seattle, nurse`
**Found:** ✅ Yes

_Context tokens: 349 | History dropped: 9 | Latency: 939ms_

#### Turn 7 ✅

**User:** Does Alex have any pets? What kind?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Yes, Alex has one pet: a cat named Pixel. Pixel is a Maine Coon breed, 3 years old, and orange tabby colored.

**Expected Keywords:** `cat, pixel, maine coon`
**Found:** ✅ Yes

_Context tokens: 339 | History dropped: 12 | Latency: 1475ms_

#### Turn 8 ✅

**User:** Quick math: what's 15 times 12?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** 15 times 12 is 180.

**Expected Keywords:** `180`
**Found:** ✅ Yes

_Context tokens: 338 | History dropped: 14 | Latency: 2291ms_

#### Turn 9 ✅

**User:** What car does Alex drive?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex drives a Tesla Model 3.

**Expected Keywords:** `tesla, model 3`
**Found:** ✅ Yes

_Context tokens: 346 | History dropped: 15 | Latency: 895ms_

#### Turn 10 ✅

**User:** What's the name of Alex's daughter and where does she go to school?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex's daughter is Lily Chen, and she goes to Maple Elementary.

**Expected Keywords:** `lily, maple elementary`
**Found:** ✅ Yes

_Context tokens: 347 | History dropped: 18 | Latency: 1918ms_

#### Turn 11 ✅

**User:** Going back to Alex — what company does he work for and what do they make?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex Chen works for **NovaTech Solutions**, which is a tech company that makes **cloud infrastructure software**.

**Expected Keywords:** `novatech, cloud, infrastructure`
**Found:** ✅ Yes

_Context tokens: 349 | History dropped: 20 | Latency: 1118ms_

#### Turn 12 ✅

**User:** What does Alex order at a coffee shop?

<details><summary>📚 KG Memory Injected</summary>

```
- Alex Chen: age: 34, job: Senior Software Engineer, company: NovaTech Solutions, city: Seattle, country: USA, hobby1: rock climbing, hobby2: photography, pet: cat named Pixel, car: Tesla Model 3, coffee_order: oat milk latte
  → works_at: NovaTech Solutions
  → married_to: Sarah Kim
  → parent_of: Lily Chen
- NovaTech Solutions: type: tech company, founded: 2015, employees: 1200, headquarters: Seattle, product: cloud infrastructure software
  → works_at: Alex Chen
- Sarah Kim: relation: wife, job: pediatric nurse, hospital: Seattle Children's Hospital
  → married_to: Alex Chen
  → parent_of: Lily Chen
- Lily Chen: age: 6, school: Maple Elementary, relation: daughter
  → parent_of: Alex Chen
  → parent_of: Sarah Kim
- Pixel: species: cat, breed: Maine Coon, age: 3, color: orange tabby
  → owns: Alex Chen
```
</details>

**Assistant:** Alex orders an oat milk latte at coffee shops.

**Expected Keywords:** `oat milk, latte`
**Found:** ✅ Yes

_Context tokens: 340 | History dropped: 22 | Latency: 793ms_

## Scenario: World Knowledge Chain Reasoning

**Category:** chain_reasoning | **Accuracy:** 100.0% | **Avg Latency:** 4390ms

**KG Stats:** 8 nodes, 5 edges, capital_is, born_in, worked_in, different_from

### Turn-by-Turn Results

#### Turn 1 ✅

**User:** What is the capital of France?

<details><summary>📚 KG Memory Injected</summary>

```
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
```
</details>

**Assistant:** The capital of France is Paris.

**Expected Keywords:** `paris`
**Found:** ✅ Yes

_Context tokens: 300 | History dropped: 0 | Latency: 2575ms_

#### Turn 2 ✅

**User:** What famous structures is that city known for?

<details><summary>📚 KG Memory Injected</summary>

```
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
```
</details>

**Assistant:** Based on the knowledge graph facts, there are two cities mentioned:

**Paris, France** is known for:
- Eiffel Tower
- Louvre

**Berlin, Germany** is known for:
- Brandenburg Gate
- Berlin Wall history

Could you clarify which city you're asking about?

**Expected Keywords:** `eiffel, louvre`
**Found:** ✅ Yes

_Context tokens: 342 | History dropped: 2 | Latency: 1922ms_

#### Turn 3 ✅

**User:** Albert Einstein — what country was he from originally?

<details><summary>📚 KG Memory Injected</summary>

```
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
```
</details>

**Assistant:** Albert Einstein was originally from Germany.

**Expected Keywords:** `german, germany`
**Found:** ✅ Yes

_Context tokens: 390 | History dropped: 4 | Latency: 2697ms_

#### Turn 4 ✅

**User:** What is Einstein most famous for scientifically?

<details><summary>📚 KG Memory Injected</summary>

```
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
```
</details>

**Assistant:** According to the knowledge graph, Albert Einstein is most famous for the **Theory of Relativity** and the equation **E=mc²**.

**Expected Keywords:** `relativity, e=mc`
**Found:** ✅ Yes

_Context tokens: 419 | History dropped: 6 | Latency: 8454ms_

#### Turn 5 ✅

**User:** Can you name a famous female scientist who won two Nobel Prizes?

<details><summary>📚 KG Memory Injected</summary>

```
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
```
</details>

**Assistant:** Marie Curie is the famous female scientist who won two Nobel Prizes. She worked in France and is known for the discovery of radium and polonium.

**Expected Keywords:** `curie, marie`
**Found:** ✅ Yes

_Context tokens: 423 | History dropped: 8 | Latency: 10499ms_

#### Turn 6 ✅

**User:** How far is the Moon from Earth?

<details><summary>📚 KG Memory Injected</summary>

```
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
```
</details>

**Assistant:** The Moon is approximately 384,400 km from Earth.

**Expected Keywords:** `384`
**Found:** ✅ Yes

_Context tokens: 376 | History dropped: 10 | Latency: 2646ms_

#### Turn 7 ✅

**User:** What was the first moon landing mission called and when did it happen?

<details><summary>📚 KG Memory Injected</summary>

```
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
```
</details>

**Assistant:** The first moon landing mission was **Apollo 11**, which occurred in **1969**.

**Expected Keywords:** `apollo 11, 1969`
**Found:** ✅ Yes

_Context tokens: 386 | History dropped: 12 | Latency: 2427ms_

#### Turn 8 ✅

**User:** How many moons does Mars have, and what are they called?

<details><summary>📚 KG Memory Injected</summary>

```
- Mars: type: planet, distance_from_earth: 225 million km average, moons: 2, moon_names: Phobos and Deimos, atmosphere: mostly CO2
  → different_from: Moon
- Moon: type: natural satellite, distance_from_earth: 384400 km, first_landing: 1969, mission: Apollo 11, diameter: 3474 km
  → different_from: Mars
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
```
</details>

**Assistant:** Mars has 2 moons, named Phobos and Deimos.

**Expected Keywords:** `2, phobos, deimos`
**Found:** ✅ Yes

_Context tokens: 421 | History dropped: 14 | Latency: 2993ms_

#### Turn 9 ✅

**User:** Back to Einstein — did he win a Nobel Prize? When?

<details><summary>📚 KG Memory Injected</summary>

```
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Marie Curie: born: 1867, died: 1934, nationality: Polish-French, famous_for: Discovery of radium and polonium, Nobel_Prizes: 2
  → worked_in: France
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
```
</details>

**Assistant:** Yes, Albert Einstein won a Nobel Prize in 1921.

**Expected Keywords:** `1921, nobel`
**Found:** ✅ Yes

_Context tokens: 346 | History dropped: 14 | Latency: 6529ms_

#### Turn 10 ✅

**User:** What language is spoken in the country whose capital is Paris?

<details><summary>📚 KG Memory Injected</summary>

```
- Paris: type: city, population: 2.1 million, river: Seine, famous_for: Eiffel Tower, Louvre
  → capital_is: France
- France: capital: Paris, continent: Europe, language: French, population: 68 million
  → capital_is: Paris
  → worked_in: Marie Curie
- Germany: capital: Berlin, continent: Europe, language: German, population: 84 million
  → capital_is: Berlin
  → born_in: Albert Einstein
- Berlin: type: city, population: 3.7 million, famous_for: Brandenburg Gate, Berlin Wall history
  → capital_is: Germany
- Albert Einstein: born: 1879, died: 1955, nationality: German-American, famous_for: Theory of Relativity, E=mc2, Nobel_Prize: 1921
  → born_in: Germany
```
</details>

**Assistant:** French is spoken in France, the country whose capital is Paris.

**Expected Keywords:** `french`
**Found:** ✅ Yes

_Context tokens: 342 | History dropped: 16 | Latency: 3162ms_

## Scenario: Organizational Entity Relations

**Category:** entity_relations | **Accuracy:** 90.0% | **Avg Latency:** 17051ms

**KG Stats:** 8 nodes, 7 edges, leads, reports_to

### Turn-by-Turn Results

#### Turn 1 ✅

**User:** Who is the CEO of Acme Corp?

<details><summary>📚 KG Memory Injected</summary>

```
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
```
</details>

**Assistant:** Based on the knowledge graph, the CEO of Acme Corp is **Jordan Wells**.

**Expected Keywords:** `jordan, wells`
**Found:** ✅ Yes

_Context tokens: 295 | History dropped: 0 | Latency: 4804ms_

#### Turn 2 ✅

**User:** Who does Priya Sharma report to?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
- Omar Hassan: title: VP Product, department: Product, reports_to: CTO
  → reports_to: Priya Sharma
- Lin Wei: title: Senior Engineer, team: Platform, reports_to: VP Engineering
  → reports_to: Rachel Torres
```
</details>

**Assistant:** According to the knowledge graph, Priya Sharma reports to:

1. **CEO** (general reporting)
2. **Jordan Wells** (specific)
3. **Rachel Torres** (specific)
4. **Omar Hassan** (specific)

Note: The knowledge graph shows multiple reporting relationships, which may indicate a matrix reporting structure or different levels of oversight.

**Expected Keywords:** `jordan, ceo, wells`
**Found:** ✅ Yes

_Context tokens: 347 | History dropped: 1 | Latency: 2028ms_

#### Turn 3 ✅

**User:** What is Marcus Lee's role at the company?

<details><summary>📚 KG Memory Injected</summary>

```
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
```
</details>

**Assistant:** Marcus Lee is the Chief Financial Officer (CFO) in the Finance department, reporting to the CEO.

**Expected Keywords:** `cfo, finance`
**Found:** ✅ Yes

_Context tokens: 299 | History dropped: 4 | Latency: 4011ms_

#### Turn 4 ✅

**User:** How long has the CEO been at Acme Corp?

<details><summary>📚 KG Memory Injected</summary>

```
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
```
</details>

**Assistant:** The CEO, Jordan Wells, has been at Acme Corp for 8 years.

**Expected Keywords:** `8, years`
**Found:** ✅ Yes

_Context tokens: 341 | History dropped: 4 | Latency: 5110ms_

#### Turn 5 ✅

**User:** Who manages the engineering team under the CTO?

<details><summary>📚 KG Memory Injected</summary>

```
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Lin Wei: title: Senior Engineer, team: Platform, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Aiko Tanaka: title: Senior Engineer, team: Data, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Omar Hassan: title: VP Product, department: Product, reports_to: CTO
  → reports_to: Priya Sharma
```
</details>

**Assistant:** Based on the knowledge graph, **Rachel Torres** manages the engineering team under the CTO.

Rachel Torres is the VP Engineering who reports to Priya Sharma (CTO). She oversees the engineering department and manages two senior engineers:
- **Lin Wei** (Senior Engineer, Platform team)
- **Aiko Tanaka** (Senior Engineer, Data team)

**Expected Keywords:** `rachel, torres, vp engineering`
**Found:** ✅ Yes

_Context tokens: 333 | History dropped: 8 | Latency: 3214ms_

#### Turn 6 ✅

**User:** Name the senior engineers and their teams.

<details><summary>📚 KG Memory Injected</summary>

```
- Lin Wei: title: Senior Engineer, team: Platform, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Aiko Tanaka: title: Senior Engineer, team: Data, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
```
</details>

**Assistant:** Based on the retrieved knowledge graph facts, the senior engineers and their teams are:

*   **Lin Wei**: Platform
*   **Aiko Tanaka**: Data

**Expected Keywords:** `lin wei, aiko tanaka, platform, data`
**Found:** ✅ Yes

_Context tokens: 330 | History dropped: 10 | Latency: 3994ms_

#### Turn 7 ✅

**User:** Who is responsible for product development reporting to the CTO?

<details><summary>📚 KG Memory Injected</summary>

```
- Omar Hassan: title: VP Product, department: Product, reports_to: CTO
  → reports_to: Priya Sharma
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Lin Wei: title: Senior Engineer, team: Platform, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
```
</details>

**Assistant:** Based on the knowledge graph, **Omar Hassan** is responsible for product development reporting to the CTO. He holds the title of **VP Product** and reports directly to **Priya Sharma**, the CTO.

**Expected Keywords:** `omar, hassan, vp product`
**Found:** ✅ Yes

_Context tokens: 333 | History dropped: 12 | Latency: 25266ms_

#### Turn 8 ✅

**User:** If I wanted to talk to someone about finances at Acme, who would that be?

<details><summary>📚 KG Memory Injected</summary>

```
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
```
</details>

**Assistant:** For finances at Acme Corp, you should talk to **Marcus Lee**, who is the CFO (Chief Financial Officer). He oversees the Finance department and reports to the CEO.

**Expected Keywords:** `marcus, lee, cfo`
**Found:** ✅ Yes

_Context tokens: 307 | History dropped: 14 | Latency: 1222ms_

#### Turn 9 ❌

**User:** What department does Aiko Tanaka work in?

<details><summary>📚 KG Memory Injected</summary>

```
- Aiko Tanaka: title: Senior Engineer, team: Data, reports_to: VP Engineering
  → reports_to: Rachel Torres
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
- Omar Hassan: title: VP Product, department: Product, reports_to: CTO
  → reports_to: Priya Sharma
```
</details>

**Assistant:** [ERROR: Ollama request timed out]

**Expected Keywords:** `engineering, data`
**Found:** ❌ No
**Missing:** `engineering, data`

_Context tokens: 328 | History dropped: 16 | Latency: 120055ms_

> ⚠️ **Error:** Ollama request timed out

#### Turn 10 ✅

**User:** What year was Acme Corp founded?

<details><summary>📚 KG Memory Injected</summary>

```
- Acme Corp: industry: manufacturing, employees: 5000, founded: 1998
  → leads: Jordan Wells
- Jordan Wells: title: CEO, tenure_years: 8, salary_band: executive
  → leads: Acme Corp
  → reports_to: Priya Sharma
  → reports_to: Marcus Lee
- Priya Sharma: title: CTO, department: Engineering, reports_to: CEO
  → reports_to: Jordan Wells
  → reports_to: Rachel Torres
  → reports_to: Omar Hassan
- Rachel Torres: title: VP Engineering, department: Engineering, reports_to: CTO
  → reports_to: Priya Sharma
  → reports_to: Lin Wei
  → reports_to: Aiko Tanaka
- Marcus Lee: title: CFO, department: Finance, reports_to: CEO
  → reports_to: Jordan Wells
```
</details>

**Assistant:** Acme Corp was founded in **1998**.

**Expected Keywords:** `1998`
**Found:** ✅ Yes

_Context tokens: 341 | History dropped: 15 | Latency: 809ms_

## Scenario: Historical Timeline Recall

**Category:** temporal | **Accuracy:** 100.0% | **Avg Latency:** 2483ms

**KG Stats:** 6 nodes, 5 edges, started_with, followed_by

### Turn-by-Turn Results

#### Turn 1 ✅

**User:** When did Project Phoenix kick off?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** Project Phoenix kicked off on January 15, 2024, during the Kickoff Meeting held at HQ Conference Room A.

**Expected Keywords:** `january, 15, 2024`
**Found:** ✅ Yes

_Context tokens: 220 | History dropped: 0 | Latency: 1164ms_

#### Turn 2 ✅

**User:** What happened at the kickoff meeting?

<details><summary>📚 KG Memory Injected</summary>

```
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
```
</details>

**Assistant:** The Kickoff Meeting took place on January 15, 2024, at HQ Conference Room A. The attendees included the full team and stakeholders, and the outcome was that the requirements were finalized.

**Expected Keywords:** `requirements, finalized`
**Found:** ✅ Yes

_Context tokens: 306 | History dropped: 0 | Latency: 7699ms_

#### Turn 3 ✅

**User:** When was the alpha version released?

<details><summary>📚 KG Memory Injected</summary>

```
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
```
</details>

**Assistant:** The Alpha version was released on **March 8, 2024** (version v0.1.0-alpha).

**Expected Keywords:** `march, 8, 2024`
**Found:** ✅ Yes

_Context tokens: 389 | History dropped: 4 | Latency: 943ms_

#### Turn 4 ✅

**User:** How many bugs were found in the alpha?

<details><summary>📚 KG Memory Injected</summary>

```
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
```
</details>

**Assistant:** 47 bugs were found in the alpha release.

**Expected Keywords:** `47`
**Found:** ✅ Yes

_Context tokens: 390 | History dropped: 6 | Latency: 2757ms_

#### Turn 5 ✅

**User:** What was the team size for the project?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
```
</details>

**Assistant:** The team size for Project Phoenix was 12 people.

**Expected Keywords:** `12`
**Found:** ✅ Yes

_Context tokens: 390 | History dropped: 8 | Latency: 979ms_

#### Turn 6 ✅

**User:** When did the beta launch happen and what version was it?

<details><summary>📚 KG Memory Injected</summary>

```
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** The Beta Launch happened on May 22, 2024, and the version was v0.8.0-beta.

**Expected Keywords:** `may, 22, 2024, v0.8`
**Found:** ✅ Yes

_Context tokens: 394 | History dropped: 10 | Latency: 2272ms_

#### Turn 7 ✅

**User:** How many external testers participated in beta?

<details><summary>📚 KG Memory Injected</summary>

```
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** 250 external testers participated in the beta launch.

**Expected Keywords:** `250`
**Found:** ✅ Yes

_Context tokens: 353 | History dropped: 12 | Latency: 3714ms_

#### Turn 8 ✅

**User:** What was the official production release date?

<details><summary>📚 KG Memory Injected</summary>

```
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** The official production release date was August 1, 2024.

**Expected Keywords:** `august, 1, 2024`
**Found:** ✅ Yes

_Context tokens: 360 | History dropped: 14 | Latency: 2785ms_

#### Turn 9 ✅

**User:** Who was the launch partner for the production release?

<details><summary>📚 KG Memory Injected</summary>

```
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
```
</details>

**Assistant:** The launch partner for the production release was **TechCorp Industries**.

**Expected Keywords:** `techcorp`
**Found:** ✅ Yes

_Context tokens: 394 | History dropped: 16 | Latency: 1259ms_

#### Turn 10 ✅

**User:** How quickly did the user base grow after launch?

<details><summary>📚 KG Memory Injected</summary>

```
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** According to the Post-Launch Review data, the user base grew by **340% in 45 days** after launch.

The production release occurred on August 1, 2024, and this growth was measured by September 15, 2024.

**Expected Keywords:** `340%, 45 days`
**Found:** ✅ Yes

_Context tokens: 392 | History dropped: 18 | Latency: 1880ms_

#### Turn 11 ✅

**User:** What was the uptime percentage after launch?

<details><summary>📚 KG Memory Injected</summary>

```
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
```
</details>

**Assistant:** The uptime percentage after launch was **99.7%**, as recorded in the Post-Launch Review on September 15, 2024.

**Expected Keywords:** `99.7%, 99.7`
**Found:** ✅ Yes

_Context tokens: 391 | History dropped: 20 | Latency: 1390ms_

#### Turn 12 ✅

**User:** From kickoff to production, roughly how many months did the project take?

<details><summary>📚 KG Memory Injected</summary>

```
- Project Phoenix: type: software project, status: completed, team_size: 12, total_budget: $2.4M
  → started_with: Kickoff Meeting
- Kickoff Meeting: date: January 15, 2024, attendees: full team + stakeholders, outcome: requirements finalized, location: HQ Conference Room A
  → started_with: Project Phoenix
  → followed_by: Alpha Release
- Production Release: date: August 1, 2024, version: v1.0.0, initial_users: 10000, launch_partner: TechCorp Industries
  → followed_by: Beta Launch
  → followed_by: Post-Launch Review
- Beta Launch: date: May 22, 2024, version: v0.8.0-beta, external_testers: 250, feedback_score: 4.2/5
  → followed_by: Alpha Release
  → followed_by: Production Release
- Post-Launch Review: date: September 15, 2024, uptime_achieved: 99.7%, user_growth: 340% in 45 days, issues_resolved: 23
  → followed_by: Production Release
- Alpha Release: date: March 8, 2024, version: v0.1.0-alpha, bugs_found: 47, testers: internal QA team
  → followed_by: Kickoff Meeting
  → followed_by: Beta Launch
```
</details>

**Assistant:** Based on the knowledge graph facts:

- **Kickoff Meeting**: January 15, 2024
- **Production Release**: August 1, 2024

The project took approximately **6-7 months** from kickoff to production.

**Expected Keywords:** `6`
**Found:** ✅ Yes

_Context tokens: 399 | History dropped: 22 | Latency: 2951ms_

## Scenario: Multi-Hop Knowledge Retrieval

**Category:** chain_reasoning | **Accuracy:** 100.0% | **Avg Latency:** 2075ms

**KG Stats:** 7 nodes, 6 edges, capital_of, uses_currency, issued_by, located_in, created_by, employed_by

### Turn-by-Turn Results

#### Turn 1 ✅

**User:** What is the currency of Japan?

<details><summary>📚 KG Memory Injected</summary>

```
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
```
</details>

**Assistant:** The currency of Japan is the Japanese Yen (¥, JPY), which is issued by the Bank of Japan.

**Expected Keywords:** `yen, jpy`
**Found:** ✅ Yes

_Context tokens: 273 | History dropped: 0 | Latency: 4409ms_

#### Turn 2 ✅

**User:** Which bank issues that currency?

<details><summary>📚 KG Memory Injected</summary>

```
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
```
</details>

**Assistant:** The Bank of Japan issues the Japanese Yen.

**Expected Keywords:** `bank of japan`
**Found:** ✅ Yes

_Context tokens: 312 | History dropped: 0 | Latency: 853ms_

#### Turn 3 ✅

**User:** Where is the Bank of Japan located?

<details><summary>📚 KG Memory Injected</summary>

```
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
```
</details>

**Assistant:** The Bank of Japan is located in Tokyo.

**Expected Keywords:** `tokyo`
**Found:** ✅ Yes

_Context tokens: 340 | History dropped: 0 | Latency: 2148ms_

#### Turn 4 ✅

**User:** Who created the Python programming language?

<details><summary>📚 KG Memory Injected</summary>

```
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
```
</details>

**Assistant:** Guido van Rossum created the Python programming language.

**Expected Keywords:** `guido, van rossum`
**Found:** ✅ Yes

_Context tokens: 346 | History dropped: 4 | Latency: 3512ms_

#### Turn 5 ✅

**User:** What nationality is the creator of Python?

<details><summary>📚 KG Memory Injected</summary>

```
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
```
</details>

**Assistant:** The creator of Python is Guido van Rossum, and his nationality is Dutch.

**Expected Keywords:** `dutch`
**Found:** ✅ Yes

_Context tokens: 355 | History dropped: 8 | Latency: 828ms_

#### Turn 6 ✅

**User:** Where did Guido van Rossum work as of 2020?

<details><summary>📚 KG Memory Injected</summary>

```
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Microsoft: founded: 1975, founders: Bill Gates and Paul Allen, headquarters: Redmond, Washington, products: Windows, Azure, Office
  → employed_by: Guido van Rossum
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
```
</details>

**Assistant:** As of 2020, Guido van Rossum worked at **Microsoft**.

**Expected Keywords:** `microsoft`
**Found:** ✅ Yes

_Context tokens: 397 | History dropped: 10 | Latency: 1410ms_

#### Turn 7 ✅

**User:** Who founded Microsoft?

<details><summary>📚 KG Memory Injected</summary>

```
- Microsoft: founded: 1975, founders: Bill Gates and Paul Allen, headquarters: Redmond, Washington, products: Windows, Azure, Office
  → employed_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
```
</details>

**Assistant:** Microsoft was founded in 1975 by Bill Gates and Paul Allen.

**Expected Keywords:** `bill gates, paul allen`
**Found:** ✅ Yes

_Context tokens: 352 | History dropped: 12 | Latency: 1174ms_

#### Turn 8 ✅

**User:** What is the GDP ranking of Japan globally?

<details><summary>📚 KG Memory Injected</summary>

```
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
```
</details>

**Assistant:** Japan is ranked 4th globally in GDP.

**Expected Keywords:** `4`
**Found:** ✅ Yes

_Context tokens: 355 | History dropped: 14 | Latency: 1769ms_

#### Turn 9 ✅

**User:** When was the Japanese Yen introduced?

<details><summary>📚 KG Memory Injected</summary>

```
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
```
</details>

**Assistant:** The Japanese Yen was introduced in 1871.

**Expected Keywords:** `1871`
**Found:** ✅ Yes

_Context tokens: 354 | History dropped: 16 | Latency: 1049ms_

#### Turn 10 ✅

**User:** What year was Python first released and what version is current?

<details><summary>📚 KG Memory Injected</summary>

```
- Python: type: programming language, created: 1991, creator: Guido van Rossum, paradigm: multi-paradigm, current_version: 3.12
  → created_by: Guido van Rossum
- Guido van Rossum: nationality: Dutch, born: 1956, employer_2020: Microsoft, known_for: Python language
  → created_by: Python
  → employed_by: Microsoft
- Tokyo: country: Japan, population: 13.96 million, timezone: JST UTC+9, type: city
  → capital_of: Japan
  → located_in: Bank of Japan
- Japan: continent: Asia, capital: Tokyo, currency: Yen, language: Japanese, gdp_rank: 4
  → capital_of: Tokyo
  → uses_currency: Japanese Yen
- Bank of Japan: founded: 1882, governor_2024: Kazuo Ueda, type: central bank, location: Tokyo
  → issued_by: Japanese Yen
  → located_in: Tokyo
- Japanese Yen: symbol: ¥, code: JPY, issuer: Bank of Japan, introduced: 1871
  → uses_currency: Japan
  → issued_by: Bank of Japan
```
</details>

**Assistant:** Python was first released in 1991, and the current version is 3.12.

**Expected Keywords:** `1991, 3.12`
**Found:** ✅ Yes

_Context tokens: 360 | History dropped: 18 | Latency: 3601ms_

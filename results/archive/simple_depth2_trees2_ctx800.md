# Run Report: simple_depth2_trees2_ctx800

_Generated: 2026-03-18T16:48:03.602Z_

## Configuration

| Parameter | Value |
|-----------|-------|
| Graph Type | `simple` |
| Graph Depth | 2 |
| Sub-Trees (branching) | 2 |
| Multi-Graph | false |
| Weighted Edges | false |
| Max Context Tokens | 800 |
| Top-K KG Results | 5 |
| Model | `qwen3.5:4b` |
| Temperature | 0.3 |

## Overall Metrics

| Metric | Value |
|--------|-------|
| Total Scenarios | 5 |
| Total Turns | 54 |
| Avg Keyword Accuracy | 94.2% |
| Avg Latency | 3318ms |
| Total Runtime | 177.0s |
| Total Context Tokens | 29065 |

## Scenario: Personal Profile Recall

**Category:** personal_facts | **Accuracy:** 90.9% | **Avg Latency:** 2936ms

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

**Assistant:** Alex Chen's job is Senior Software Engineer.

**Expected Keywords:** `software engineer`
**Found:** ✅ Yes

_Context tokens: 314 | History dropped: 0 | Latency: 2262ms_

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

**Assistant:** I don't have access to real-time weather data, so I can't tell you the current weather in Tokyo today. Tokyo's weather varies seasonally:

- **Spring (March-May)**: Generally mild with temperatures around 15-25°C, occasional rain showers
- **Summer (June-August)**: Hot and humid, often 30-35°C with typhoons possible
- **Autumn (September-November)**: Cool and pleasant, temperatures around 15-25°C
- **Winter (December-February)**: Cold, temperatures often below 10°C, with occasional snow in mountainous areas

For accurate, up-to-date weather information, I'd recommend checking a weather service or weather app.


_Context tokens: 366 | History dropped: 0 | Latency: 2456ms_

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

_Context tokens: 532 | History dropped: 0 | Latency: 2203ms_

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

**Assistant:** Alex enjoys rock climbing and photography in his free time.

**Expected Keywords:** `climbing, photography`
**Found:** ✅ Yes

_Context tokens: 555 | History dropped: 0 | Latency: 664ms_

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

**Assistant:** Paris is the capital of France.

**Expected Keywords:** `Paris`
**Found:** ✅ Yes

_Context tokens: 590 | History dropped: 0 | Latency: 685ms_

#### Turn 6 ❌

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

**Assistant:** Alex's wife, Sarah Kim, works at Seattle Children's Hospital.

**Expected Keywords:** `children's hospital, seattle, nurse`
**Found:** ❌ No
**Missing:** `nurse`

_Context tokens: 613 | History dropped: 0 | Latency: 2247ms_

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

**Assistant:** Yes, Alex has a pet cat named Pixel. It is a Maine Coon breed.

**Expected Keywords:** `cat, pixel, maine coon`
**Found:** ✅ Yes

_Context tokens: 646 | History dropped: 0 | Latency: 5706ms_

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

_Context tokens: 678 | History dropped: 0 | Latency: 2736ms_

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

_Context tokens: 698 | History dropped: 0 | Latency: 1586ms_

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

**Assistant:** Alex's daughter is named Lily Chen, and she goes to Maple Elementary.

**Expected Keywords:** `lily, maple elementary`
**Found:** ✅ Yes

_Context tokens: 730 | History dropped: 0 | Latency: 10778ms_

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

**Assistant:** Alex works for NovaTech Solutions, which makes cloud infrastructure software.

**Expected Keywords:** `novatech, cloud, infrastructure`
**Found:** ✅ Yes

_Context tokens: 750 | History dropped: 2 | Latency: 1980ms_

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

**Assistant:** Alex orders an oat milk latte.

**Expected Keywords:** `oat milk, latte`
**Found:** ✅ Yes

_Context tokens: 615 | History dropped: 4 | Latency: 1924ms_

## Scenario: World Knowledge Chain Reasoning

**Category:** chain_reasoning | **Accuracy:** 100.0% | **Avg Latency:** 2824ms

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

_Context tokens: 300 | History dropped: 0 | Latency: 2201ms_

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

**Assistant:** Paris is known for the Eiffel Tower and the Louvre.

**Expected Keywords:** `eiffel, louvre`
**Found:** ✅ Yes

_Context tokens: 366 | History dropped: 0 | Latency: 2677ms_

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

**Assistant:** Albert Einstein was originally from Germany. He was born in Germany in 1879.

**Expected Keywords:** `german, germany`
**Found:** ✅ Yes

_Context tokens: 447 | History dropped: 0 | Latency: 1889ms_

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

**Assistant:** Albert Einstein is most famous for the Theory of Relativity and the equation E=mc².

**Expected Keywords:** `relativity, e=mc`
**Found:** ✅ Yes

_Context tokens: 517 | History dropped: 0 | Latency: 3144ms_

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

**Assistant:** Marie Curie is a famous female scientist who won two Nobel Prizes.

**Expected Keywords:** `curie, marie`
**Found:** ✅ Yes

_Context tokens: 562 | History dropped: 0 | Latency: 2969ms_

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

**Assistant:** The Moon is 384,400 km from Earth.

**Expected Keywords:** `384`
**Found:** ✅ Yes

_Context tokens: 556 | History dropped: 0 | Latency: 2395ms_

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

**Assistant:** The first moon landing mission was Apollo 11, and it happened in 1969.

**Expected Keywords:** `apollo 11, 1969`
**Found:** ✅ Yes

_Context tokens: 591 | History dropped: 0 | Latency: 3386ms_

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

**Assistant:** Mars has 2 moons, and they are called Phobos and Deimos.

**Expected Keywords:** `2, phobos, deimos`
**Found:** ✅ Yes

_Context tokens: 670 | History dropped: 0 | Latency: 1223ms_

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

_Context tokens: 598 | History dropped: 0 | Latency: 3268ms_

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

**Assistant:** The language spoken in France is French.

**Expected Keywords:** `french`
**Found:** ✅ Yes

_Context tokens: 627 | History dropped: 0 | Latency: 5088ms_

## Scenario: Organizational Entity Relations

**Category:** entity_relations | **Accuracy:** 80.0% | **Avg Latency:** 6634ms

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

**Assistant:** Jordan Wells is the CEO of Acme Corp. He has held this position for 8 years and reports to Priya Sharma and Marcus Lee.

**Expected Keywords:** `jordan, wells`
**Found:** ✅ Yes

_Context tokens: 295 | History dropped: 0 | Latency: 1436ms_

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

**Assistant:** Priya Sharma reports to Jordan Wells, Rachel Torres, Omar Hassan, and the CEO.

**Expected Keywords:** `jordan, ceo, wells`
**Found:** ✅ Yes

_Context tokens: 370 | History dropped: 0 | Latency: 1167ms_

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

**Assistant:** Marcus Lee is the CFO (Chief Financial Officer) of Acme Corp, working in the Finance department. He reports to the CEO and specifically to Jordan Wells.

**Expected Keywords:** `cfo, finance`
**Found:** ✅ Yes

_Context tokens: 380 | History dropped: 0 | Latency: 1283ms_

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

**Assistant:** Jordan Wells has been at Acme Corp for 8 years as CEO.

**Expected Keywords:** `8, years`
**Found:** ✅ Yes

_Context tokens: 436 | History dropped: 0 | Latency: 861ms_

#### Turn 5 ❌

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

**Assistant:** 

**Expected Keywords:** `rachel, torres, vp engineering`
**Found:** ❌ No
**Missing:** `rachel, torres, vp engineering`

_Context tokens: 503 | History dropped: 0 | Latency: 47420ms_

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

**Assistant:** Based on the knowledge graph, there are two senior engineers:

1. **Lin Wei** - Senior Engineer on the Platform team (reports to VP Engineering)
2. **Aiko Tanaka** - Senior Engineer on the Data team (reports to VP Engineering)

**Expected Keywords:** `lin wei, aiko tanaka, platform, data`
**Found:** ✅ Yes

_Context tokens: 520 | History dropped: 0 | Latency: 1514ms_

#### Turn 7 ❌

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

**Assistant:** Omar Hassan is responsible for product development reporting to the CTO. He is the VP of Product in the Product department and reports directly to Priya Sharma (CTO).

**Expected Keywords:** `omar, hassan, vp product`
**Found:** ❌ No
**Missing:** `vp product`

_Context tokens: 599 | History dropped: 0 | Latency: 1485ms_

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

**Assistant:** Marcus Lee is the CFO at Acme Corp, working in the Finance department. He reports to the CEO and Jordan Wells.

**Expected Keywords:** `marcus, lee, cfo`
**Found:** ✅ Yes

_Context tokens: 639 | History dropped: 0 | Latency: 7602ms_

#### Turn 9 ✅

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

**Assistant:** Aiko Tanaka works on the Data team. She is a Senior Engineer who reports to Rachel Torres (VP Engineering).

**Expected Keywords:** `engineering, data`
**Found:** ✅ Yes

_Context tokens: 715 | History dropped: 0 | Latency: 2561ms_

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

**Assistant:** Acme Corp was founded in 1998.

**Expected Keywords:** `1998`
**Found:** ✅ Yes

_Context tokens: 729 | History dropped: 0 | Latency: 1010ms_

## Scenario: Historical Timeline Recall

**Category:** temporal | **Accuracy:** 100.0% | **Avg Latency:** 2617ms

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

**Assistant:** Project Phoenix kicked off on January 15, 2024, during the Kickoff Meeting.

**Expected Keywords:** `january, 15, 2024`
**Found:** ✅ Yes

_Context tokens: 220 | History dropped: 0 | Latency: 1134ms_

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

**Assistant:** On January 15, 2024, the Kickoff Meeting was held at HQ Conference Room A with the full team and stakeholders. The outcome was that requirements were finalized.

**Expected Keywords:** `requirements, finalized`
**Found:** ✅ Yes

_Context tokens: 299 | History dropped: 0 | Latency: 12312ms_

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

**Assistant:** The alpha version was released on March 8, 2024.

**Expected Keywords:** `march, 8, 2024`
**Found:** ✅ Yes

_Context tokens: 483 | History dropped: 0 | Latency: 4415ms_

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

**Assistant:** 47 bugs were found in the alpha version.

**Expected Keywords:** `47`
**Found:** ✅ Yes

_Context tokens: 513 | History dropped: 0 | Latency: 783ms_

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

_Context tokens: 541 | History dropped: 0 | Latency: 932ms_

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

**Assistant:** The beta launch happened on May 22, 2024, and the version was v0.8.0-beta.

**Expected Keywords:** `may, 22, 2024, v0.8`
**Found:** ✅ Yes

_Context tokens: 575 | History dropped: 0 | Latency: 1074ms_

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

_Context tokens: 575 | History dropped: 0 | Latency: 1170ms_

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

**Assistant:** The official production release was on August 1, 2024, with version v1.0.0.

**Expected Keywords:** `august, 1, 2024`
**Found:** ✅ Yes

_Context tokens: 616 | History dropped: 0 | Latency: 1162ms_

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

**Assistant:** TechCorp Industries was the launch partner for the production release.

**Expected Keywords:** `techcorp`
**Found:** ✅ Yes

_Context tokens: 689 | History dropped: 0 | Latency: 1081ms_

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

**Assistant:** The user base grew by 340% in 45 days after launch.

**Expected Keywords:** `340%, 45 days`
**Found:** ✅ Yes

_Context tokens: 727 | History dropped: 0 | Latency: 1082ms_

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

**Assistant:** The uptime achieved after launch was 99.7%.

**Expected Keywords:** `99.7%, 99.7`
**Found:** ✅ Yes

_Context tokens: 746 | History dropped: 1 | Latency: 899ms_

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

**Assistant:** From the Kickoff Meeting on January 15, 2024, to the Production Release on August 1, 2024, the project took approximately 6.5 months.

**Expected Keywords:** `6`
**Found:** ✅ Yes

_Context tokens: 747 | History dropped: 3 | Latency: 5354ms_

## Scenario: Multi-Hop Knowledge Retrieval

**Category:** chain_reasoning | **Accuracy:** 100.0% | **Avg Latency:** 1579ms

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

**Assistant:** The currency of Japan is the **Japanese Yen** (symbol: ¥, code: JPY). It is issued by the Bank of Japan and was introduced in 1871.

**Expected Keywords:** `yen, jpy`
**Found:** ✅ Yes

_Context tokens: 273 | History dropped: 0 | Latency: 1541ms_

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

**Assistant:** The **Bank of Japan** issues the Japanese Yen.

**Expected Keywords:** `bank of japan`
**Found:** ✅ Yes

_Context tokens: 322 | History dropped: 0 | Latency: 1968ms_

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

**Assistant:** The Bank of Japan is located in **Tokyo**.

**Expected Keywords:** `tokyo`
**Found:** ✅ Yes

_Context tokens: 351 | History dropped: 0 | Latency: 2043ms_

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

**Assistant:** **Guido van Rossum** created the Python programming language.

**Expected Keywords:** `guido, van rossum`
**Found:** ✅ Yes

_Context tokens: 424 | History dropped: 0 | Latency: 871ms_

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

**Assistant:** **Guido van Rossum** is **Dutch**.

**Expected Keywords:** `dutch`
**Found:** ✅ Yes

_Context tokens: 495 | History dropped: 0 | Latency: 976ms_

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

_Context tokens: 565 | History dropped: 0 | Latency: 2448ms_

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

**Assistant:** **Bill Gates** and **Paul Allen** founded Microsoft in 1975.

**Expected Keywords:** `bill gates, paul allen`
**Found:** ✅ Yes

_Context tokens: 553 | History dropped: 0 | Latency: 919ms_

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

**Assistant:** Japan ranks **4th** globally in GDP.

**Expected Keywords:** `4`
**Found:** ✅ Yes

_Context tokens: 585 | History dropped: 0 | Latency: 753ms_

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

**Assistant:** The Japanese Yen was introduced in **1871**.

**Expected Keywords:** `1871`
**Found:** ✅ Yes

_Context tokens: 612 | History dropped: 0 | Latency: 3195ms_

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

**Assistant:** Python was first released in **1991** and the current version is **3.12**.

**Expected Keywords:** `1991, 3.12`
**Found:** ✅ Yes

_Context tokens: 647 | History dropped: 0 | Latency: 1078ms_

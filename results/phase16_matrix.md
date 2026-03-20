# Phase 16: Graph Type × Context Size Matrix

_Generated: 2026-03-20T19:52:07.196Z_

## Configuration

- **Graph types**: simple, hierarchical, multi, weighted
- **History context**: 1,024t, 4,096t, 8,192t, 16,384t
- **KG context**: 32,768t (fixed)
- **Validation**: Phase 15 NLP pipeline (stem → pronoun → embedding → judge)
- **Pre-processing**: Phase 15 MessagePreprocessor (entity guard + explicit updates + background guard)
- **Model**: qwen3.5:4b @ temp=0

> **Phase 15 baseline (weighted, h4096, kg32768): 95.8% overall** — all comparisons relative to this.

## Overall Accuracy

| Graph Type | `h1024` | `h4096` | `h8192` | `h16384` | Best |
|------------|-------|-------|-------|-------|------|
| **simple** | 95.6% | 95.6% | 97.2% | 97.8% | 97.8% |
| **hierarchical** | 95.6% | 96.3% | 97.8% | 96.5% | 97.8% |
| **multi** | 93.0% | 95.6% | 97.2% | 95.6% | 97.2% |
| **weighted** | 96.5% | 95.0% | 94.3% | 94.3% | 96.5% |

## Recall Accuracy

| Graph Type | `h1024` | `h4096` | `h8192` | `h16384` | Best |
|------------|-------|-------|-------|-------|------|
| **simple** | 91.8% | 93.3% | 96.7% | 96.7% | 96.7% |
| **hierarchical** | 93.3% | 93.3% | 96.7% | 96.7% | 96.7% |
| **multi** | 88.8% | 93.3% | 95.2% | 91.8% | 95.2% |
| **weighted** | 95.2% | 90.3% | 91.8% | 90.3% | 95.2% |

## Update Accuracy

| Graph Type | `h1024` | `h4096` | `h8192` | `h16384` | Best |
|------------|-------|-------|-------|-------|------|
| **simple** | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| **hierarchical** | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| **multi** | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| **weighted** | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |

## Verify-Update Accuracy

| Graph Type | `h1024` | `h4096` | `h8192` | `h16384` | Best |
|------------|-------|-------|-------|-------|------|
| **simple** | 95.8% | 91.7% | 91.7% | 95.8% | 95.8% |
| **hierarchical** | 91.7% | 95.8% | 95.8% | 87.5% | 95.8% |
| **multi** | 87.5% | 91.7% | 95.8% | 95.8% | 95.8% |
| **weighted** | 91.7% | 95.8% | 87.5% | 91.7% | 95.8% |

## Average Latency (ms)

| Graph Type | `h1024` | `h4096` | `h8192` | `h16384` | Best |
|------------|-------|-------|-------|-------|------|
| **simple** | 1748ms | 1733ms | 1994ms | 1538ms | 1538ms |
| **hierarchical** | 1730ms | 1814ms | 1945ms | 2118ms | 1730ms |
| **multi** | 1824ms | 1887ms | 1998ms | 2064ms | 1824ms |
| **weighted** | 1650ms | 1561ms | 1796ms | 2111ms | 1561ms |

## Per-Scenario Accuracy at h4096

| Scenario | simple | hierarchical | multi | weighted | P15 (weighted) |
|----------|--------|--------------|-------|----------|----------------|
| Personal Introduction & Career Update | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| Team Building & Role Reassignment | 90.9% | 90.9% | 90.9% | 90.9% | 90.9% |
| Project Tracking & Milestone Changes | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| Social Network & Relationship Updates | 90.9% | 90.9% | 90.9% | 90.9% | 90.9% |
| Mixed Facts with Multiple Concurrent Updates | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% |
| Engineering Org Deep Dive (Large Context) | 92.0% | 96.0% | 92.0% | 88.0% | 88.0% |

## Individual Reports

- [`simple_phase16_h16384_kg32768`](./simple_phase16_h16384_kg32768.md): 97.8% overall (recall=96.7%, update=100.0%, verify=95.8%) — _+2.0% vs P15_
- [`hierarchical_phase16_h8192_kg32768`](./hierarchical_phase16_h8192_kg32768.md): 97.8% overall (recall=96.7%, update=100.0%, verify=95.8%) — _+2.0% vs P15_
- [`simple_phase16_h8192_kg32768`](./simple_phase16_h8192_kg32768.md): 97.2% overall (recall=96.7%, update=100.0%, verify=91.7%) — _+1.4% vs P15_
- [`multi_phase16_h8192_kg32768`](./multi_phase16_h8192_kg32768.md): 97.2% overall (recall=95.2%, update=100.0%, verify=95.8%) — _+1.4% vs P15_
- [`hierarchical_phase16_h16384_kg32768`](./hierarchical_phase16_h16384_kg32768.md): 96.5% overall (recall=96.7%, update=100.0%, verify=87.5%) — _+0.7% vs P15_
- [`weighted_phase16_h1024_kg32768`](./weighted_phase16_h1024_kg32768.md): 96.5% overall (recall=95.2%, update=100.0%, verify=91.7%) — _+0.7% vs P15_
- [`hierarchical_phase16_h4096_kg32768`](./hierarchical_phase16_h4096_kg32768.md): 96.3% overall (recall=93.3%, update=100.0%, verify=95.8%) — _+0.5% vs P15_
- [`simple_phase16_h1024_kg32768`](./simple_phase16_h1024_kg32768.md): 95.6% overall (recall=91.8%, update=100.0%, verify=95.8%) — _-0.2% vs P15_
- [`simple_phase16_h4096_kg32768`](./simple_phase16_h4096_kg32768.md): 95.6% overall (recall=93.3%, update=100.0%, verify=91.7%) — _-0.2% vs P15_
- [`hierarchical_phase16_h1024_kg32768`](./hierarchical_phase16_h1024_kg32768.md): 95.6% overall (recall=93.3%, update=100.0%, verify=91.7%) — _-0.2% vs P15_
- [`multi_phase16_h4096_kg32768`](./multi_phase16_h4096_kg32768.md): 95.6% overall (recall=93.3%, update=100.0%, verify=91.7%) — _-0.2% vs P15_
- [`multi_phase16_h16384_kg32768`](./multi_phase16_h16384_kg32768.md): 95.6% overall (recall=91.8%, update=100.0%, verify=95.8%) — _-0.2% vs P15_
- [`weighted_phase16_h4096_kg32768`](./weighted_phase16_h4096_kg32768.md): 95.0% overall (recall=90.3%, update=100.0%, verify=95.8%) — _-0.8% vs P15_
- [`weighted_phase16_h8192_kg32768`](./weighted_phase16_h8192_kg32768.md): 94.3% overall (recall=91.8%, update=100.0%, verify=87.5%) — _-1.5% vs P15_
- [`weighted_phase16_h16384_kg32768`](./weighted_phase16_h16384_kg32768.md): 94.3% overall (recall=90.3%, update=100.0%, verify=91.7%) — _-1.5% vs P15_
- [`multi_phase16_h1024_kg32768`](./multi_phase16_h1024_kg32768.md): 93.0% overall (recall=88.8%, update=100.0%, verify=87.5%) — _-2.8% vs P15_
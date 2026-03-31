---
title: Is AGENTS.md Actually Useful?
description: Executive summary of ETH Zurich's study evaluating whether AGENTS.md and CLAUDE.md context files improve coding agent performance — and how to write better ones.
tags: [ai-agents, agents-md, claude-code, context-files, best-practices]
---

# Is AGENTS.md Actually Useful?

> **Source:** [Evaluating AGENTS.md (arxiv, Feb 2026)](https://arxiv.org/html/2602.11988v1) · [DAIR.AI Summary](https://academy.dair.ai/blog/agents-md-evaluation)
> **By:** ETH Zurich SRI Lab · **Benchmark:** [AGENTbench](https://github.com/eth-sri/agentbench)

## Summary

ETH Zurich ran the **first rigorous evaluation** of whether `AGENTS.md`, `CLAUDE.md`, and similar repository-level context files actually improve coding agent performance. The short answer: **it depends on who wrote it**.

| Condition | Performance | Cost |
|---|---|---|
| No context file | Baseline | Baseline |
| LLM-generated (`/init`) | **−2%** success rate | **+20–23%** tokens |
| Human-written | **+4%** success rate | **+14–19%** tokens |

Agents tested: **Claude Code** (Sonnet-4.5), **Codex** (GPT-5.2 / GPT-5.1 mini), **Qwen Code** (Qwen3-30b-coder).  
Benchmarks: **SWE-bench Lite** (300 tasks, popular repos) + **AGENTbench** (138 tasks, niche repos with real AGENTS.md files).

## Key Findings

### 1. LLM-generated files hurt more than help

Running `/init` (or equivalent) to auto-generate an `AGENTS.md` **reduces success rates** and **always increases cost**:

- **−0.5%** on SWE-bench Lite, **−2%** on AGENTbench
- Every context file adds **+2–4 more steps** per task
- **100%** of Sonnet-4.5-generated files included redundant codebase overviews

**Why?** Auto-generated files mostly restate what already exists in `README.md`, `docs/`, and other `.md` files. They add noise, not signal.

> When docs were *removed* before the experiment, LLM-generated files **improved by 2.7%** — confirming the problem is redundancy, not the format itself.

### 2. Human-written files help — but only marginally

Developer-written `AGENTS.md` files produce a **+4% improvement** on average. These files work because they capture information that **doesn't exist anywhere else**: non-default tooling, CI quirks, project-specific conventions.

The studied files averaged **641 words across 9.7 sections** — substantial, not trivial.

### 3. Agents follow instructions — but following ≠ succeeding

Context files are followed faithfully:
- `uv` usage jumps from **&lt;0.01×** to **1.6×** per task when mentioned
- Repo-specific tools jump from **&lt;0.05×** to **2.5×** per task

But agents follow instructions by doing *more work*: more test runs, more file searches, more reasoning. This activity doesn't translate to better outcomes — it translates to higher bills.

### 4. Codebase overviews don't help navigation

A common recommendation is to include a full directory/architecture overview. The data shows this **doesn't reduce the steps** agents take before reaching the relevant files. A map of the whole codebase doesn't tell the agent *which file* to edit.

### 5. Stronger models don't generate better context files

Using GPT-5.2 to generate files (instead of the default model) improved SWE-bench Lite results (+2%) but **degraded AGENTbench** results (−3%). No prompt or model consistently wins.

## What This Means for Your AGENTS.md

The study's core insight: **context files are useful to the extent they tell agents something the repo doesn't already say.**

### ✅ Keep in AGENTS.md

- **Non-default tooling**: `uv` instead of `pip`, custom test runner, specific linter flags
- **Non-obvious commands**: How to run a specific subset of tests, how to set up a dev environment
- **Gotchas and constraints**: Files to never modify, CI-specific dependencies, env vars required
- **Project conventions that aren't in the code**: Naming rules, commit standards, PR requirements

### ❌ Remove from AGENTS.md

- Directory listings and file trees (agent can discover these)
- Summaries of what the README already says
- Descriptions of well-known tools (`pytest`, `git`, `docker`) used with default settings
- General architecture overviews if there's already a `docs/` folder

## How to Fix a `/init`-Generated AGENTS.md

The problem with `/init` output is that it **reads the repo and summarizes what it finds** — exactly the information the agent could discover itself. The fix is to **replace descriptions with directives**.

### Refactoring strategy

Split your context file into two layers:

#### Layer 1 — `AGENTS.md` (minimal, non-redundant)
Keep only what an agent **cannot infer from the code**:

```md
## Required Tooling
- Use `uv` for all package management (not pip/poetry)
- Run tests with: `uv run pytest tests/ -x`
- Linting: `uv run ruff check . && uv run mypy src/`

## Constraints
- Never modify `src/generated/` — these files are auto-generated
- `make check` must pass before any commit

## Non-obvious Setup
- Requires env var `FOO_API_KEY` (see `.env.example`)
- First run: `uv run python scripts/seed_db.py`
```

#### Layer 2 — Existing docs (untouched)
Leave architecture, onboarding, and project descriptions in `README.md`, `CONTRIBUTING.md`, or `docs/`. The agent reads these too.

### Practical audit checklist

Before keeping a section in `AGENTS.md`, ask:

- [ ] **Is this already in `README.md` or `docs/`?** → Remove it
- [ ] **Would the agent discover this by exploring the repo?** → Remove it
- [ ] **Does this describe a non-default tool or setting?** → Keep it
- [ ] **Does this warn about a gotcha that isn't obvious from the code?** → Keep it
- [ ] **Is this a command the agent must run in a specific way?** → Keep it

## The Cost Trade-off

Every context file — good or bad — adds **~20% to inference cost**. This is the floor.

- For **high-volume agentic pipelines**: a poorly written `AGENTS.md` is a tax with no return. Audit it or remove it.
- For **niche repos with sparse docs**: even an imperfect file can help, since the agent has less to work from.
- For **repos with good existing documentation**: an `AGENTS.md` that restates that documentation actively harms performance.

## Summary Table

| Practice | Recommendation |
|---|---|
| Run `/init` to generate AGENTS.md | ⚠️ Avoid — output is usually redundant |
| Include codebase overview / directory tree | ❌ Don't — agents can explore this |
| Restate README content | ❌ Don't — creates redundancy |
| Document non-default tools (`uv`, custom runners) | ✅ Do — high signal |
| Document non-obvious commands and constraints | ✅ Do — high signal |
| Use a stronger model to generate the file | ➖ No consistent benefit |
| Split into minimal AGENTS.md + existing docs | ✅ Best approach |

## Resources

- 📄 [Full paper (arxiv)](https://arxiv.org/abs/2602.11988)
- 🧪 [AGENTbench dataset](https://github.com/eth-sri/agentbench)
- 📝 [DAIR.AI blog post](https://academy.dair.ai/blog/agents-md-evaluation)

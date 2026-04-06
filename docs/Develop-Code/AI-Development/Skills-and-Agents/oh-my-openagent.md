---
title: Oh My OpenAgent
description: A deep dive into Oh My OpenAgent, its multi-model orchestration, specialized agents, and the philosophy of high-output engineering.
tags: [ai-agents, oh-my-openagent, orchestration, productivity, ultrawork, framework]
---

import { Icon } from '@iconify/react';

# Oh My OpenAgent — The Best Agent Harness

## Summary

**Oh My OpenAgent** (OMO) is a batteries-included agent harness that brings multi-model orchestration, background parallel agents, and over 40 lifecycle hooks into a cohesive, highly autonomous coding workflow. Moving beyond simple conversational chatbots, OMO operates on the principle that **planning and execution are fundamentally different jobs**. It isolates these concerns across a suite of specialized agents, guaranteeing that token usage is optimized for output and human oversight is reserved strictly for architectural decisions.

By separating the "architect" role from the "builder" role, Oh My OpenAgent initiates a state of "Ultrawork" (`ulw`). Tasks are executed with maximum precision, deep research, and rigorous self-correction loops. Users do not need to babysit the execution; they simply state the intent, flip the switch, and review results indistinguishable from a senior engineer's code.

## 1. The Ultrawork Manifesto: A Paradigm Shift

Oh My OpenAgent is fundamentally guided by a strong philosophical stance on AI coding efficiency. Described as the **Ultrawork Manifesto**, the core philosophy pushes back against AI workflows that demand micromanagement.

### Key Tenets
1. **Human as Architect, Not Spell-Checker:** The user must not waste time fixing half-finished code, resolving syntax errors, or reviewing line-by-line hallucinations. The human sets the intent; the system handles the minutiae.
2. **Indistinguishable Code Quality:** Agent-written code shouldn't feel auto-generated. It should read exactly as if a senior engineer authored it.
3. **Output Over Token Parsimony:** Optimizing for token cost is secondary to return on investment (ROI). Spending $5 on an extensive, multi-agent parallel exploration loop that saves an hour of human engineering time is an overwhelming win.
4. **Resilience & Continuity (The Boulder System):** AI coding must be resilient. If the power fails, the environment crashes, or you are interrupted, OMO resumes exactly where you left off via a highly durable state machine tracked in `boulder.json`.

> *"The agent should be invisible. Like electricity, like running water. You flip the switch. The light turns on. You don't think about the power grid."*

## 2. Planning vs. Execution

A significant differentiator for Oh My OpenAgent is its strict structural division of labor. Most AI coding assistants attempt to plan and code simultaneously via a single monolithic prompt, frequently losing context or getting sidetracked. OMO splits this process.

### The Architect Layer
The Architect layer focuses entirely on intelligence gathering, edge-case identification, and strategy:

#### <Icon icon="mdi:fire" /> Prometheus
 Conducts intelligent interviews, researches the codebase context, and generates detailed YAML battle plans. It never types a single line of production code.
#### <Icon icon="mdi:brain" /> Metis
 Analyzes the plan to catch ambiguities and potential failures before any code execution starts.
#### <Icon icon="mdi:shield-check" /> Momus
 A ruthless validation node. It reviews and approves only bulletproof technical plans.

### The Builder Layer
Once the Architect outputs a verified plan, it is handed off to the execution subagents:

#### <Icon icon="mdi:earth" /> Atlas
 Serves as the executor. It reads the verified plans, delegates sub-tasks, manages agent waves, and independently tracks progress. It doesn't trust sub-agent claims inherently—everything is cross-verified.

## 3. Specialized Agents

Instead of forcing a single, generalized model (a "jack of all trades") to perform every function, OMO leverages Intent-Based Routing to deploy specific agents depending on the complexity of the task.

#### <Icon icon="mdi:rotate-right" /> Sisyphus
 The orchestrator. It parses implicit requirements, decides on the toolset based on codebase maturity, and routes the work. It is named Sisyphus because it relentlessly drives the task to completion, no matter how many retries or corrections are needed.
#### <Icon icon="mdi:anvil" /> Hephaestus
 The deep architectural engine. For complex overhauls where "good enough" isn't acceptable, Hephaestus fires up 2-5 background **<Icon icon="mdi:compass" /> Explore** agents to meticulously map the codebase before writing code.
#### <Icon icon="mdi:crystal-ball" /> Oracle
 Specialized for high-complexity debugging and making ambiguous architectural decisions.
#### <Icon icon="mdi:compass" /> Explore
 Blazing fast, cheap search agents deployed in the background to navigate deep repository structures.
#### <Icon icon="mdi:bookshelf" /> Librarian
 Discovers and fetches real GitHub API usages and official evidence-based documentation to ground implementations.

## 4. Configuration & Extensibility

Oh My OpenAgent operates intelligently out-of-the-box (e.g., `bunx oh-my-openagent install`), but it embraces highly opinionated adjustability. All settings are contained within simple JSONC configurations:

* **Project-level:** `.opencode/oh-my-openagent.json`
* **User-level:** `~/.config/opencode/oh-my-openagent.json`

### Core Capabilities:
* **Categories:** Create shared configurations (temperatures, models, max tokens) that various agents inherit. Assign expensive models to architectural tasks, and cheaper models to standard refactoring.
* **Skills:** Incorporate explicit capabilities. OMO ships with built-ins like a `git-master` and Playwright `agent-browser` workflows.
* **Hooks:** Over 40 lifecycle hooks that allow users to deeply integrate the agent into their CI/CD, testing, or review processes.
* **Comment Checker:** An integrated validator to ensure code documentation aligns seamlessly with implementation (using `{{comments}}` placeholders).

## Conclusion

Oh My OpenAgent is a significant step forward from assistive copilots to truly autonomous engineering platforms. By rigorously dividing planning from execution, preserving session continuity through complex state tracking, and leveraging multi-agent orchestration, OMO allows developers to scale their intelligence across broad engineering tasks with minimal babysitting. 

## References

* **Source:** [Oh My OpenAgent Documentation](https://ohmyopenagent.com/docs)
* **Repository:** [code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
* **Fork:** [oh-my-opencode](https://github.com/opensoft/oh-my-opencode)
* **Fork:** [oh-my-opencode-slim (Lighter, fine-tuned version)](https://github.com/alvinunreal/oh-my-opencode-slim)

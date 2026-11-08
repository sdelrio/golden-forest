---
title: "Adversarial Code Review"
description: "The ASDLC pattern that puts a separate Critic Agent between generated code and human review, checking the diff against the Spec instead of re-reading its own work."
tags: [ai, agents, code-review, best-practices]
---

import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Adversarial Code Review

**Adversarial Code Review** is a verification pattern from the [Agentic SDLC](https://asdlc.io/) body of work. A distinct AI session, the **Critic Agent**, reviews code produced by the **Builder Agent** against the Spec before any human sees it. The Critic does not write a better implementation. It either returns `PASS` or a list of spec violations with a remediation path.

The pattern exists because asking an agent to check its own work is close to asking it to agree with itself. The Critic runs in a fresh session, sees only the Spec and the diff, and is explicitly told to reject code that violates the contract even when the code works.

:::info
This is not a linter replacement. Deterministic checks stay deterministic. Adversarial review covers the semantic layer that compilers and test suites cannot see: architectural constraints, data access patterns, retry policy, error paths.
:::

## Why self-review fails

When a model that just generated code is asked "check your work", the pattern identifies three predictable failures:

- **Hallucinated correctness** - it affirms buggy logic because the shape matches something plausible from training data.
- **Doubling down** - pushing back makes it explain why the bug is actually a feature.
- **Shared context blindness** - it misses gaps because it is still inside the context window and reasoning path that produced them.

A review performed in the same session is not independent validation. It is a restatement of the draft with more confident wording.

## Where the pattern sits: three gates

The ASDLC model separates verification into three tiers, and adversarial review occupies exactly one of them:

| Gate | Question | Enforced by |
|------|----------|-------------|
| **Quality Gate** | Does it compile, lint, and pass tests? | Toolchain, deterministic |
| **Review Gate** | Does it satisfy the Spec's contracts? | Critic Agent, probabilistic |
| **Acceptance Gate** | Is this the right thing to ship? | Human, strategic |

Adversarial Code Review is the Review Gate. It sits between automated tooling and human review, catching what the compiler misses but what does not need a product decision. That division of labour is the point: the human stops auditing syntax and starts judging fit.

## The roles

The Builder is optimized for throughput. It turns a PBI and a Spec into code, tests, and a diff.

The Critic is optimized for reasoning. It tries to reject the diff on spec violations and produces one of two outputs:

- `PASS`, which sends the change to the human Acceptance Gate.
- A list of violations, which goes back to the Builder as a new task.

Critics are gatekeepers, not authors. A Critic that rewrites the code has stopped reviewing and started building in the wrong session.

Larger setups split the role into parallel lanes - Architect, QA, SecOps - each with its own model and its own provenance, so their findings can be audited separately. Parallel lanes need a **Moderator**: a synthesis step that deduplicates and prioritizes violations into one checklist before the Builder sees them. Without it, five critics produce five overlapping reports and the Builder drowns in alert fatigue.

## The workflow

<Steps>
  <Step title="Build">
    The Builder implements the PBI against the Spec. Output: the diff, plus implementation notes.
  </Step>
  <Step title="Swap context">
    Open a new session for the review. The Critic gets the Spec and the diff, not the Builder's reasoning, rejected alternatives, or chat history. If you stay in the same thread, the Critic inherits the assumptions it is supposed to test.

    This is the same asymmetry the [Elephant-Goldfish Model](elephant-goldfish-model.md) uses for design review: the agent with the most context writes, the agents with the least context review.
  </Step>
  <Step title="Critique with adversarial framing">
    Tell the Critic it is validating against a contract, not helping a colleague. Give it the Spec path and the diff, and require a structured output. The prompt below is the Architect lane example from the pattern.

    For large diffs, send only the changed files plus the spec sections they touch. Stuffing a 4,000-line diff into the context window produces a shallow review of everything.
  </Step>
  <Step title="Moderate">
    If you run more than one Critic lane, merge the reports before acting. Keep the critics read-only and let the Moderator own the write step: one deduplicated checklist, sorted by impact.
  </Step>
  <Step title="Verdict">
    `PASS` moves the change to human acceptance. A `FAIL` becomes a new Builder task: "Address these spec violations before proceeding." Do not let the Builder argue with the Critic in the same thread. That recreates the echo chamber the pattern exists to break.
  </Step>
</Steps>

## The Architect critic prompt

This is the review lens published with the pattern, generalized to point at your own spec path:

```text
You are a rigorous Code Reviewer validating implementation against contracts.

Input:
- Spec: specs/auth-system.md
- Code Changes: src/auth.ts (diff)

Task:
Compare the code strictly against the Spec's Blueprint (constraints) and
Contract (quality criteria).

Identify:
1. Spec violations (missing requirements, violated constraints)
2. Security issues (injection vulnerabilities, auth bypasses)
3. Edge cases not handled (error paths, race conditions)
4. Anti-patterns explicitly forbidden in the Spec

Output Format:
- PASS (if no violations)
- For each violation, provide:
  1. Violation Description (what contract was broken)
  2. Impact Analysis (why this matters: performance, security, maintainability)
  3. Remediation Path (ordered list of fixes, prefer standard patterns,
     escalate if needed)
  4. Test Requirements (what tests would prevent regression)

This transforms critique from "reject" to "here's how to fix it."
```

The pattern also pairs the prompt with a Critic constitution, which is worth adding as a standing rule: *"You are skeptical. Your job is to reject code that violates the Spec, even if it 'works.' Favor false positives over false negatives."*

## The output shape: PASS or violations

A verdict should be small enough to act on. Keep `PASS` as a literal, single-token result so it is easy to parse and hard to misread. For a failure, this is the shape:

```text
VIOLATION: src/db.ts line 45

Spec requires exponential backoff. Implementation uses constant sleep(1000).

Impact: during database outages, all clients retry simultaneously and cause
a thundering herd.

Remediation Path:
1. delay = baseDelay * (2 ** attemptNumber)
2. Add jitter to the delay
3. Add a test asserting increasing delay between attempts

Test Requirements:
- Retry timings grow exponentially under repeated failure
```

One practical tuning note from the pattern's case study: "approve with suggestions" framing prevents the Critic from blocking valid code while still surfacing real risks. A violation that is a preference should be labelled as one, or the review gate starts costing more than it saves.

## What it catches that tests do not

Both examples below compile, pass their tests, and work correctly at small scale. That is exactly why deterministic gates miss them.

### The in-memory filter that passed every test

In the validated case study (Claudio Lassala, January 2026), a user story asked for audit-log filtering by date range. The Builder loaded everything and filtered in memory:

```csharp
// Passed all Quality Gates, violated the architectural constraint
var logs = await repository.LoadAll(); // Loads entire table into memory
return logs.Where(log => log.Date > startDate); // Filters in-memory
```

The Spec required database-level filtering for datasets above 1k records. The Critic flagged the data-access pattern, explained that it fails at 10k+ records, and proposed pushing the filter into the query with a performance test to prevent regression. No human reviewer skimming the PR noticed, because the code reads fine.

### The retry loop that works and still violates the contract

Spec contract: "All database retries must use exponential backoff to prevent thundering herd during outages."

```typescript
async function queryWithRetry(sql: string) {
  for (let i = 0; i < 5; i++) {
    try {
      return await db.query(sql);
    } catch (err) {
      await sleep(1000); // Fixed delay
    }
  }
}
```

The Critic output names the line, the contract, the production impact, and the required formula. None of that is discoverable from a green test suite.

## Implementation constraints

- **Negation blindness.** LLMs underweight negation ([Truong et al., 2023](https://asdlc.io/patterns/context-gates/)), so constraints written as "DO NOT" clauses are the weakest link in probabilistic review. The Critic is most likely to false-negative on exactly those rules. Keep deterministic checks behind it, and phrase constraints in the Spec as positive facts about how the system behaves where you can.
- **The Critic can only enforce a documented Spec.** A vague spec produces a vague critique, and the review turns into generic style advice. If the Critic cannot tell whether the code is correct, that is a spec gap, not a model failure.
- **Context limits are real.** Big diffs need scoping: changed files plus the relevant spec sections. Do not assume a large context window means a careful review of everything in it.
- **Capability varies by model.** Not every model marketed as a reasoning model reviews code well. Test your candidate Critic against a few known violations before trusting a `PASS`.
- **Orchestration is mostly manual.** As of the pattern's December 2025 revision, an engineer still switches sessions and feeds context. CI integration, IDE feedback, and SDK-driven handoffs are described as automation paths, not as shipped defaults.

## Running it with agent coding tools

The idea maps cleanly onto sub-agents, and this site's own workflow is an example. [Matt Pocock's code-review skill](matpocock.md) runs two review axes in parallel sub-agents - Standards (does the code follow repo conventions?) and Spec (does it match the originating issue?) - and reports them separately. The separation is deliberate: a change can follow every convention and implement the wrong thing, or do exactly what the issue asked and break the house style. One combined score hides that.

[Ponytail](../Tools/ponytail.md) adds a different lens: is this the least code that solves the problem, and what can be deleted. Run it as another Critic lane when cost and complexity matter, not as a replacement for the spec check.

To wire the pattern up by hand, keep three rules:

1. A fresh session per review, with the Spec and diff as the only inputs.
2. Model routing by role: fast model for the Builder, strongest reasoning model for the Critic.
3. A verdict the Builder can consume as a task, not a conversation.

## References

- [Adversarial Code Review - ASDLC](https://asdlc.io/patterns/adversarial-code-review/) - Canonical pattern definition, roles, workflow, and case study.
- [Context Gates - ASDLC](https://asdlc.io/patterns/context-gates/) - The Quality, Review, and Acceptance gate model this pattern implements.
- [Specs - ASDLC](https://asdlc.io/patterns/the-spec/) - What the Critic validates against, and why constraints should be stated as facts.
- [Agentic Double Diamond - ASDLC](https://asdlc.io/patterns/agentic-double-diamond/) - The design-phase Critic pattern this extends.
- [Tus tests ya no bastan: que es un test adversarial (YouTube Short)](https://youtube.com/shorts/sycK_zcfoLc) - Video reference; no claims in this article are sourced from it.
- [Elephant-Goldfish Model (EGM)](elephant-goldfish-model.md) - Fresh-context review applied to design documents.
- [Matt Pocock Skills](matpocock.md) - Two-axis Standards and Spec review with parallel sub-agents.
- [Ponytail](../Tools/ponytail.md) - Simplicity and deletion review for agent-written code.

---
title: "Chris Titus AI Workflow: Slow Is Smooth, Smooth Is Fast"
description: "A disciplined AI coding workflow built on plain-text guardrails, test-first scaffolding, small PRs, and heavy review - from Chris Titus Tech."
tags: [ai, workflow, code-review, ci, security, claude-code]
sidebar_label: "Chris Titus AI Workflow"
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Chris Titus AI Workflow: Slow Is Smooth, Smooth Is Fast

Chris Titus Tech's workflow ([My AI Coding Workflow That Actually Works](https://christitus.com/my-ai-workflow/)) flips the usual AI coding approach: instead of one giant looping prompt that generates demos, it spends **more compute on review and validation than on generation**. The result is maintainable software, not a demo. His philosophy in one line: "Slow is smooth, and smooth is fast."

## The Plain-Text Guardrails

Everything lives in the [titus-ai repository](https://github.com/ChrisTitusTech/titus-ai) as plain text files the agent reads every session:

| File | Purpose |
|------|---------|
| `AGENTS.md` | How the agent works: global rules of engagement |
| `SPEC.md` | What the project must do |
| `ROADMAP.md` | Phases with exit criteria |
| `TASKS.md` | Small jobs in the current phase |
| Skills | Reusable knowledge the agent loads on demand |

### Global Instructions

The agent instructions are short and strict:

- Keep changes focused - no drive-by refactors
- Skip filler words in responses
- Preserve unrelated work untouched
- Run required checks before declaring done
- Stop before any destructive action

## Define Success Before Writing Code

The spec is where quality starts. A good spec includes:

- **Problem and users** - who this is for and why
- **Required behavior** - observable, testable outcomes
- **Architecture** - how components fit together
- **Security and privacy requirements** - non-negotiable constraints
- **Pinned tool and dependency versions** - LLMs pick old versions from training data unless you pin them
- **Non-goals** - explicitly out of scope
- **Acceptance criteria** - observable conditions that define done

:::warning
Without pinned versions, models will happily install packages from years-old training data. Always specify exact versions in your spec.
:::

## Build the Test Harness First

Before implementing any feature, scaffold the gates:

1. Unit tests
2. Linting
3. Production build
4. Smoke tests

These gates belong in the repository instructions, not in your head or in chat prompts. The agent then runs them automatically on every change.

## One Small Reviewable Change per PR

Each pull request implements exactly one small change. Small PRs are faster to understand, cheaper to review, and easier to revert.

:::info Example
Adding an audio-percentage display next to the volume icon in his DWM desktop (via Quickshell) was its own tiny PR - one feature, one review, one merge.
:::

```mermaid
flowchart LR
    GI["Global Instructions<br/>& Skills"] --> RS["Repo Spec<br/>/ Roadmap"]
    RS --> TH["Test Scaffolding"]
    TH --> IP["One Implementation<br/>Phase"]
    IP --> LT["Local Tests<br/>& Review"]
    LT --> PR["PR & CI"]
    PR --> IR["Independent<br/>Review"]
    IR --> FR["Fix / Retest"]
    FR --> MV["Manual<br/>Verification"]
    MV --> MG(("Merge"))

    style MG fill:#1b5e20,stroke:#4caf50,color:#fff
```

## Review More Than You Generate

This is the core inversion: spend more effort reviewing than writing code.

<Steps>
  <Step title="Local Review">
    Run CodeRabbit locally before opening the PR. Catch obvious issues early.
  </Step>
  <Step title="Independent Reviewer">
    Use a second tool (Codex, Claude) or a human reviewer with fresh context. The coding session should never grade its own work.
  </Step>
  <Step title="Feedback Loop">
    For each finding: understand it, fix it or explain why not, update tests, rerun validation, push, wait for CI, resolve the thread.
  </Step>
</Steps>

## Security and Dependency Gates in CI

Every PR update runs automated checks:

- Dependabot for dependency updates
- CodeQL for static security analysis
- Dependency review for supply-chain risk
- Required CI checks - nothing merges without green

## Keep the Human Merge Gate

No auto-merge. Before merging, verify manually:

- The diff contains only the intended change
- Tests pass on the latest commit
- Review is complete and all threads are resolved
- Docs match behavior
- It actually works in the real environment

## Cost Is Real

Expect to burn more compute on review and validation than on code generation. That is the point. Tools are replaceable - the gates are not. Swap Claude for Codex for Cursor; the workflow survives because the guardrails live in plain text and CI, not in any specific model.

## Key Takeaways

- **Spec first, pin versions**: LLMs default to stale dependencies from training data.
- **Tests before features**: The harness is the safety net for everything after.
- **Small PRs win**: Faster reviews, easier reverts, cleaner history.
- **Review beats generation**: Independent context catches what the authoring session cannot see.
- **Humans merge**: Automation gates, humans decide.

<CardGroup cols={3}>
  <Card title="Source Article" icon="mdi:newspaper" href="https://christitus.com/my-ai-workflow/">
    My AI Coding Workflow That Actually Works - full write-up
  </Card>
  <Card title="Video Walkthrough" icon="mdi:play-circle" href="https://www.youtube.com/watch?v=wcRR5P0S2">
    Chris walks through the entire workflow on YouTube
  </Card>
  <Card title="titus-ai Repository" icon="mdi:github" href="https://github.com/ChrisTitusTech/titus-ai">
    AGENTS.md, SPEC.md, ROADMAP.md, TASKS.md templates and skills
  </Card>
</CardGroup>

## References

- [My AI Coding Workflow That Actually Works](https://christitus.com/my-ai-workflow/) - Source article
- [Video: My AI Coding Workflow That Actually Works](https://www.youtube.com/watch?v=wcRR5P0S2) - Video walkthrough
- [titus-ai GitHub Repository](https://github.com/ChrisTitusTech/titus-ai) - Shared setup and guardrail files

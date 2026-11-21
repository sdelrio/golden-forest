---
title: "Frontend Design and Review Skills"
description: "Five AI-agent repos that trended in November 2026 for frontend design and code review: Astryx, Modern Web Guidance, Open Code Review, Anthropic document skills and Plannotator - what each does, when to skip it, and which are worth installing."
tags: [ai, web-development, code-review, tooling]
---

# Frontend Design and Review Skills

For a frontend developer, the useful unit of AI tooling in 2026 is no longer a linter or a component library. It is the skill, plugin or review surface you hand to your coding agent, and the ones that stick are the ones that change what the agent produces rather than adding another chat window.

This article covers the five repos that trended on GitHub the week of November 17, 2026, ranked in the order Beau Johnson uses in [8,700 Stars in One Week](https://www.youtube.com/watch?v=0E_b626WuwI). That ranking is a story ranking, not a quality ranking: two repos shape design (Astryx, Modern Web Guidance), two cover review (Open Code Review, Plannotator), and one is mostly a licensing story (Anthropic's document skills). Every claim below was checked against the project's own README, not just the video.

## The Ranking at a Glance

| Rank | Project | Half of the job | License | What it costs to run |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Astryx](https://github.com/meta/astryx) | Design system | MIT | Nothing beyond your build |
| 2 | [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) | Web platform knowledge | Apache 2.0, guides CC-BY 4.0 | Nothing, runs offline |
| 3 | [Open Code Review](https://github.com/alibaba/open-code-review) | Code review | Apache 2.0 | Your provider bill, or your agent's subscription |
| 4 | [Anthropic skills](https://github.com/anthropics/skills) | Document generation (the outlier) | Apache 2.0 per folder | Nothing to run for frontend work |
| 5 | [Plannotator](https://github.com/backnotprop/plannotator) | Human review surface | MIT or Apache 2.0, dual | Nothing, runs locally |

:::info
The video's names are spoken, not spelled: "Astryx" is Meta's design system, "plananotator" is Plannotator, "Office skills" are Anthropic's document skills, "modern web guidance" is Chrome's Modern Web Guidance, and "Open Code review" is Alibaba's Open Code Review. Same order, real names.
:::

## Which Ones I Would Actually Install

| Verdict | Project | Why |
| :--- | :--- | :--- |
| **Install today** | Modern Web Guidance | Any web project, any framework. One `npx` command, then turn telemetry off. |
| **Install today** | Plannotator | Minimal install if you only want the binary; the Claude Code plugin if you live in plan mode. |
| **Side project** | Astryx | Still in public beta and needs React 19. Try it where a rewrite is cheap. |
| **Bookmark or fork** | Anthropic document skills | Apache 2.0 since November 6, so forking is allowed. Keep the notices. |
| **Only with a budget** | Open Code Review | Pays per review on your own provider. Use delegation mode if you already pay for an agent. |

The rest of this page is the long version of that table: what each one does, and when it is the wrong tool.

## 1. Astryx: A Design System Built for Agents

Astryx is Meta's design system, open sourced under MIT after eight years and 13,000+ internal apps. It ships 150+ accessible components, seven themes, dark mode, templates and a CLI as one package. It requires React 19 or newer and writes its own styles with StyleX, but consumers do not have to: `className` overrides work with Tailwind, CSS modules or plain CSS, and themes are just CSS custom property overrides.

**Use it when** you are starting a React 19 app, want a complete component system rather than a headless primitive, and want the same reference to drive both people and agents. `astryx init` writes its guide into `AGENTS.md` or `CLAUDE.md`, so the agent stops guessing component APIs.

**Skip it when** you already have a design system (the migration cost dwarfs the benefit), you are on React 18 or older, or you cannot accept beta churn. Beta means the API can move under you, and 150 components is a lot of surface to absorb.

```bash
npm install @astryxdesign/core @astryxdesign/theme-neutral @stylexjs/stylex
npm install -D @astryxdesign/cli
npx @astryxdesign/cli init
```

For agent integration, the repo also ships a plugin for Claude Code and Codex:

```bash
claude plugin marketplace add meta/astryx
claude plugin install astryx@astryx
```

- **Advantage**: one opinionated system for tokens, components and agent guidance, with no build plugin to adopt.
- **Disadvantage**: beta, React 19 baseline, and a design language that is somebody else's until you override it.

## 2. Modern Web Guidance: Stop the Agent Writing 2019 CSS

Modern Web Guidance is a skill pack from the Google Chrome team, stewarded with Microsoft Edge, Mozilla Firefox and MDN. It injects expert-curated guidance for modern browser APIs into the agent's context, so the agent reaches for the Popover API, CSS anchor positioning, container queries, `oklch`, View Transitions or `scheduler.yield` instead of a heavy library or a polyfill.

Search runs offline with a bundled embedding model, so there are no API keys and no network calls at query time. The repo documents 262 features and 204 real-world use cases, and Google publishes per-agent evals showing 27 to 36 percentage points of uplift over unguided runs. This site already has a full write-up: [Modern Web Guidance: Aligning AI Agents with Modern Web Standards](../Prompt-Library/modern-web-guidance.md).

**Use it when** you build anything for the browser. This is the one tool on the list with no real downside, and it pays off in code review comments you never have to write.

**Skip it when** you are working outside the web platform (native apps, server-only code), or your organisation forbids telemetry that cannot be disabled. It can be disabled, so read the next line.

```bash
npx modern-web-guidance@latest install
export DISABLE_TELEMETRY=1   # telemetry is on by default
```

- **Advantage**: token-efficient by design, offline, and calibrated against real browser compatibility data.
- **Disadvantage**: telemetry is opt-out rather than opt-in, and the guidance covers the web platform only.

## 3. Open Code Review: Precision Over Recall

Open Code Review (OCR) is Alibaba's code review CLI, extracted from an internal tool used by tens of thousands of developers. It is a hybrid: deterministic engineering decides which files to review, how to bundle them and which rules apply, and an agent does the dynamic analysis. That combination exists to fix the failure modes of prompting a general agent to review: skipped files on large diffs, comment positions that drift, and quality that swings with prompt wording.

On Alibaba's own benchmark, built from 200 real pull requests across 50 repositories and 10 languages with 1,505 human-labelled issues, OCR reports higher precision and F1 than Claude Code with the same model, at roughly one ninth of the tokens. Recall is deliberately lower: the trade-off is fewer false alarms, not fewer misses.

**Use it when** your team reviews large diffs and the false-positive rate of agent review has become a triage problem, or you want review comments in CI.

**Skip it when** you are a solo developer without a provider budget, or you mostly want maximum recall. Delegation mode runs the review through your existing agent and needs no extra key, but then you are back to the host agent's token bill.

```bash
npm install -g @alibaba-group/open-code-review
ocr config provider
ocr config model
ocr review --from main
```

- **Advantage**: line-level positioning and stable coverage on big changesets, plus a CI story.
- **Disadvantage**: another provider configuration and bill in native mode, and lower recall means some real defects still get through.

## 4. Anthropic Document Skills: The Licensing Story

Anthropic's skills repository holds the skills that power Claude's document handling: `docx`, `pdf`, `pptx` and `xlsx`. On November 6, 2026 those four moved from all rights reserved to Apache 2.0, which turned them from read-only examples into code you can fork, vendor and ship.

That is the whole reason it trends for a frontend audience. These skills do not design or review a UI. What they are worth is as a reference: they show how a production skill is structured, how it splits scripts from instructions, and how it handles assets.

**Use it when** you are writing your own skill and want a real example of a complex one, or your agent needs to produce office documents.

**Skip it when** you are looking for frontend help. Nothing here will make a layout better or a review sharper.

```bash
# Inside Claude Code
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

- **Advantage**: production-grade examples under a permissive licence.
- **Disadvantage**: licensing is per folder, not per repo. The four document skills carry a `LICENSE.txt`; at least one other folder (`doc-coauthoring`) does not, so read the folder you plan to copy.

:::warning
Apache 2.0 lets you fork and redistribute. It does not let you drop the licence or the notices. If your company forks these into a private repo, keep `LICENSE.txt` and the attribution intact.
:::

## 5. Plannotator: The Review Surface Your Agent Was Missing

Plannotator is a local, browser-based review surface for coding agents. When your agent leaves plan mode, a hook catches the plan and opens it in your browser; you annotate it and the feedback goes back to the agent as a structured decision. The same surface reviews local diffs and remote pull requests, with line annotations, guided review chapters, and a comment thread that returns to the agent.

It supports Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, Kiro, Droid, Amp and Pi through plugins, hooks and slash commands.

**Use it when** you use plan mode and find yourself approving plans you only skimmed, or when review comments keep getting lost between the browser and the terminal.

**Skip it when** you never use plan mode, or you do not want an installer touching the config of every agent it finds. The default installer wires hooks, skills and slash commands into each detected agent; `--minimal` avoids all of that.

```bash
# Default: binary plus hooks and slash commands for every agent found
curl -fsSL https://plannotator.ai/install.sh | bash

# Minimal: only the binary, no hooks or agent config
curl -fsSL https://plannotator.ai/install.sh | bash -s -- --minimal
```

Claude Code users can skip the installer and use the plugin:

```bash
/plugin marketplace add backnotprop/plannotator
/plugin install plannotator@plannotator
```

- **Advantage**: keeps a human in the loop without keeping the agent's session open, and works across agents.
- **Disadvantage**: the default install is broad and the recommended install path is a `curl | bash`; read the script or use `--minimal`.

## When None of Them Fit

Two honest cases:

- **You need a design opinion, not a design system.** Astryx gives you components; it does not tell you whether your page hierarchy works. This site keeps its own design contract in [DESIGN.md](https://github.com/sdelrio/golden-forest/blob/master/DESIGN.md) and runs a design-review skill against it, which is the same idea at a smaller scale: write the rules down once, then make the agent read them.
- **You already have a review process.** Open Code Review and Plannotator both assume agent review is the bottleneck. If your team reviews by hand and it works, adding either one buys you another queue to clear.

## References

- [Beau Johnson: 8,700 Stars in One Week](https://www.youtube.com/watch?v=0E_b626WuwI) - Source ranking and video timestamps.
- [Astryx](https://github.com/meta/astryx) - Meta's design system, docs at [astryx.atmeta.com](https://astryx.atmeta.com).
- [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) - Docs at [developer.chrome.com](https://developer.chrome.com/docs/modern-web-guidance).
- [Open Code Review](https://github.com/alibaba/open-code-review) - Docs at [open-codereview.ai](https://open-codereview.ai/docs).
- [Anthropic skills](https://github.com/anthropics/skills) - Document skills and the Agent Skills spec.
- [Plannotator](https://github.com/backnotprop/plannotator) - Docs at [docs.plannotator.ai](https://docs.plannotator.ai).
- [Modern Web Guidance: Aligning AI Agents with Modern Web Standards](../Prompt-Library/modern-web-guidance.md) - The deeper install and configuration guide on this site.
- [GitHub Trending, weekly](https://github.com/trending?since=weekly) - The list the video is based on.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the author (sdelrio), a developer who writes these notes first for his own future reference and publishes them as a public garden. He is the one who maintains, corrects, and extends pages months later, so findability, accurate structure, and low authoring friction matter more to him than audience growth.

Secondary: developers, homelab and infrastructure tinkerers, security learners, and tabletop RPG players who arrive from a search engine, read one article to solve one problem, and leave. They rarely browse, so each article must stand alone.

## Product Purpose

A personal digital garden and knowledge base: technical notes, guides, and experiments on software development, AI tooling, infrastructure, security, operating systems, homelab, productivity, and D&D, plus small interactive tools built on real data. Success is that the author can find and reuse his own notes later, and that a stranger landing on one page gets a correct, complete answer without needing the rest of the site.

## Positioning

A living garden with working tools, not a blog or a docs site. Notes are planted as seeds and revised as they grow, and the site ships interactive artifacts rather than prose alone: Fantasy Grounds character sheets rendered from real XML, a searchable character gallery, an AI development dashboard, a tech radar, a D&D points-buy and feat browser, a Mermaid playground, and a browser-local reading list. A neighboring blog could copy the topics, but not the accumulated revision history or the tooling tied to the author's actual data.

## Operating Context

- Content is authored in MDX under `docs/`, `tutorial/`, and `blog/`, and committed through GitHub pull requests using Conventional Commits.
- Docusaurus 3.x with React 19 and CSS Modules; Go-Task drives dev/build/check/PR workflows; Devbox and direnv provide the environment.
- Deployed to GitHub Pages via GitHub Actions on `www.lorien.cloud` with `trailingSlash: true` and `onBrokenLinks: 'throw'`.
- Algolia DocSearch (with a local MiniSearch fallback) is the entry point for most visits.
- The repo is explicitly designed to be worked on by AI coding agents: `AGENTS.md`, `memory/`, `.agents/`, and skill files are part of the daily workflow.
- D&D character data lives as Fantasy Grounds XML in `static/fg/chars/` (111 files) and is indexed into `index.json` by a build script.

## Capabilities and Constraints

Confirmed functionality: multi-section documentation with sidebars, a tutorial track for adding content, a blog, Mermaid diagrams (with dark-mode overrides), KaTeX math, extended tables, and a component library (Card/CardGroup, Accordion, Steps, ParamField, CodeGroup, CmdRef, BarChart, IndexList) plus the D&D and dashboard tools listed under Positioning.

Durable constraints, confirmed by the author:

- **Additive by default.** New articles and tools are added; existing URLs and section structure are preserved. Broken internal links must fail the build.
- **Static, no backend.** GitHub Pages hosting only. No server, database, or user accounts. Personal state (bookmarks, read marks, progress) stays in the browser.
- **MDX-first authoring.** Content stays in MDX using the project's own components, validated by `task check` and `task build`.
- **AI-agent friendly.** The agent documentation and memory system must keep working and stay current.
- **Content is the author's own and factual.** No fabricated tutorials, benchmarks, customers, or claims; D&D data comes from real Fantasy Grounds exports.

Terminology in use: digital garden, seeds vs. grown notes, forest/tree metaphor for navigation; "The Golden Forest" for the site, lorien.cloud for the domain.

## Brand Commitments

- Name: **The Golden Forest** (domain `lorien.cloud`).
- First-person, personal voice: this is one person's garden, not a company publication.
- The forest/tree metaphor is the established identity (logo `img/tree.svg`, tree and leaf illustrations, "planted" and "nurtured" framing).
- Open source under MIT, with public pull requests and issues.

## Evidence on Hand

- 379 MDX/Markdown documents across `docs/`, `tutorial/`, and `blog/`.
- 111 real Fantasy Grounds character XML files in `static/fg/chars/` plus generated `index.json`.
- `static/ai-dashboard/tools.json` (~1250 lines) with an enriched cache and JSON schema, the data behind the AI dashboard.
- Tech radar stack data generated from the project itself.
- No testimonials, no customers, no pricing, no traffic or benchmark claims. Future work must not invent them.

## Product Principles

1. **Write for the author six months from now.** A page must be re-readable, self-contained, and correct without surrounding context.
2. **Cultivate, do not dump.** Notes are revised as understanding grows; a seed may be short, but it must be honest about being one.
3. **Tools must run on real data.** Interactive components are backed by real character XML, real project stack data, or real tool registries, never placeholder fixtures.
4. **Structure serves search.** Most readers arrive on a deep page; titles, headings, and filenames are chosen for findability first.
5. **The site stays static and cheap to maintain.** Any feature that needs a server, account, or always-on service is out of scope.

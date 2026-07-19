# Agent Memory Index

> The Golden Forest (lorien.cloud) — Docusaurus 3.x digital garden + D&D toolkit.
> Load every session. Follow links for detail. Keep under 50 lines.

## Active Projects

| Project | Status | Progress | Next Action |
|---------|--------|----------|-------------|
| Infra Refactoring | 🟢 | 85% | CategoryFilter or DndSkeleton |
| Non-DnD Features | 🟡 | 60% | Personal Reading List or Tech Radar |
| DnD Features | 🔴 | 0% | Define `sessions.json` schema |

**Overall: 25/36 features implemented (69%)**

## Pending Jobs Queue

1. [x] **Low**: Dependabot GH Actions grouping — group `actions/*` + `github/*` in dependabot.yml (2026-07-19)
2. [ ] **Medium**: Extract shared `CategoryFilter` — lift AiDashboard component, refactor MermaidPlayground
3. [ ] **Low**: Extract shared `DndSkeleton` wrapper — dedup skeleton JSX across CharSearch/XmlChar
4. [ ] **Low**: Consolidate AGENTS.md — merge CharSearch/XmlChar into `src/components/AGENTS.md`

## Decisions

- **2024-02**: Boneyard-js for skeletons, XML for char data — [details](decisions/2024-02-dnd-tooling.md)
- **2024-01**: Docusaurus 3.x over Next.js/Astro — [details](decisions/2024-01-architecture-choice.md)

## File Map

- `features/` — DnD (5), non-content (26), non-DnD (5) feature tracking
- `projects/golden-forest.md` — Stack, components, build commands
- `decisions/` — Architecture choices
- `archive/` — Completed jobs >14 days

## Commands

`/jobs` · `/jobs-add` · `/jobs-done` · `/jobs-archive` · `/job-prepare <#>` · `/feature-status` · `/memory-sync`

## Session Notes

*Last updated: 2026-07-19*
- Audited features vs codebase: 3.1 CategoryFilter partially done (JS dedup needed), 3.4 DndSkeleton CSS already shared
- Blockers: None

# Agent Memory Index

> The Golden Forest (lorien.cloud) — Docusaurus 3.x digital garden + D&D toolkit.
> Load every session. Follow links for detail. Keep under 50 lines.

## Pending Jobs Queue

1. [x] **Low**: Extract shared `DndSkeleton` wrapper — dedup skeleton JSX across CharSearch/XmlChar (2026-07-19)
2. [x] **Low**: Consolidate AGENTS.md — merge CharSearch/XmlChar into `src/components/AGENTS.md` (2026-07-19)
3. [x] **Medium**: Rename `tutorial-external/install-mermaidjs` to `tutorial-external/mermaidjs`, update title to MermaidJS, use Steps component for install section (2026-07-19)
4. [ ] **Low-Med**: Shared `CategoryFilter` component — dedup pill-bar JS+CSS between AiDashboard and MermaidPlayground (3.1)
5. [ ] **Low**: Shared `DndSkeleton` wrapper — dedup skeleton JSX across 3 components (3.4)
6. [ ] **Low**: Consolidate AGENTS.md hierarchy — merge component-specific files into `src/components/AGENTS.md` (5.1)

## Active Projects & Status

| Project | Status | Phase | Done/Total |
|---------|--------|-------|------------|
| Non-Content Infrastructure | 🟢 On Track | Nearing Completion | 24/27 (89%) |
| Non-DnD Features | 🟡 In Progress | In Progress | 3/5 (60%) |
| DnD Features | 🔴 Not Started | Not Started | 0/5 (0%) |

**Overall: 27/32 features implemented (84%)**

## Decisions

- **2024-02**: Boneyard-js for skeletons, XML for char data — [details](decisions/2024-02-dnd-tooling.md)
- **2024-01**: Docusaurus 3.x over Next.js/Astro — [details](decisions/2024-01-architecture-choice.md)

## Commands

`/jobs` · `/jobs-add` · `/jobs-done` · `/jobs-archive` · `/job-prepare <#>` · `/feature-status` · `/memory-sync`

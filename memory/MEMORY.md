# Agent Memory Index

> The Golden Forest (lorien.cloud) — Docusaurus 3.x digital garden + D&D toolkit.
> Load every session. Follow links for detail. Keep under 50 lines.

## Active Projects & Status

| Project | Status | Current Phase | Next Action | File |
|---------|--------|---------------|-------------|------|
| Infra Refactoring | 🟢 On Track | Nearing Completion (81%) | Extract shared `BaseCard` | [features/non-content-features.md](features/non-content-features.md) |
| Non-DnD Features | 🟢 On Track | Nearing Completion (60%) | Add `last_updated` frontmatter to docs | [features/non-dnd-features.md](features/non-dnd-features.md) |
| DnD Features | 🔴 Not Started | Not Started (0%) | Define campaign data schema (`sessions.json`) | [features/dnd-features.md](features/dnd-features.md) |

**Overall: 24/36 features implemented (67%)**

## Pending Jobs Queue

- [x] **High**: Extract `withBrowserOnly` HOC — done 2026-07-17, PR #162
- [x] **High**: Extract shared `CopyButton` — done 2026-07-17, PR #163
- [x] **Medium**: Build `CmdRef` component for CLI command reference — done 2026-07-17, PR #164
- [x] **Medium**: Convert StatDiceRoller inline styles to CSS module — done 2026-07-18, PR #165
- [x] **Low**: Create `.cursorrules` for Cursor users — done 2026-07-18
- [x] **Low**: Document Ponytail system (`.opencode/` README) — done 2026-07-18, PR #167
- [ ] **Low**: Add `SECURITY.md` vulnerability reporting policy
- [ ] **Medium**: Copy button icon on AiDashboard doesn't indicate success (no color change or "Copied" message) after clicking
- [ ] **Medium**: CmdRef uses a card, it looks like duplicated form Card component, Can make the card compoment more generic so I don't have duplicated definitions of card
- [ ] **Medium**: Configure docusaurus-mdx-checker to ignore paths via config instead of output via make check. Paths to ignore: graphify-out/, memory/, node_modules/, local_prompts/
- [x] **Medium**: Build `FreshnessBadge` for stale content detection — done 2026-07-18
- [x] **Low**: Archive stale plan files (5.6) — done 2026-07-18

## Completed Jobs

- [x] **High**: Migrate TODO files to `memory/` system — done 2026-07-17
- [x] **High**: Create 6 memory management commands — done 2026-07-17
- [x] **High**: Extract `withBrowserOnly` HOC — done 2026-07-17, PR #162
- [x] **High**: Extract shared `CopyButton` — done 2026-07-17, PR #163

## Recent Decisions

- **2024-02**: Boneyard-js for skeleton loading + XML for char data — [details](decisions/2024-02-dnd-tooling.md)
- **2024-01**: Docusaurus 3.x over Next.js/Astro — [details](decisions/2024-01-architecture-choice.md)

## Memory File Map

- `projects/golden-forest.md` — Stack, conventions, component catalog, build commands
- `features/dnd-features.md` — 5 DnD features (Campaign Journal, Party Dashboard, Achievements, Battle Log, Death Certs)
- `features/non-content-features.md` — 26 infra items (security, CSS, code dedup, AI tooling)
- `features/non-dnd-features.md` — 5 general features (CmdRef, Freshness, Reading List, Tech Radar, Mermaid Playground)
- `decisions/` — Architectural and strategic choices
- `logs/` — Daily session journals

## Available Commands

| Command | Purpose |
|---------|---------|
| `/jobs` | List all pending jobs |
| `/jobs-add <priority> <desc>` | Add a new job to the queue |
| `/jobs-done <text>` | Mark a job as completed |
| `/jobs-archive` | Archive completed jobs > 30 days old |
| `/job-prepare <#>` | **Must execute ALL steps in order**: 1) Plan 2) `git checkout -b feat/<scope>` 3) Implement 4) `make check` 5) Commit 6) `git push -u origin <branch>` 7) `gh pr create` |
| `/feature-status` | Scan all feature files, show consolidated table |
| `/memory-sync` | Sync MEMORY.md counts with actual feature file status |

## Session Notes

*Last updated: 2026-07-18*
- Fixed 5 discrepancies uncovered by `/memory-sync`:
  1. non-dnd-features summary: had 1 DONE → corrected to 2 DONE (CmdRef + Mermaid Playground)
  2. non-content-features 4.7 (StatDiceRoller CSS): NOT STARTED → DONE (PR #165)
  3. non-content-features 5.4 (.cursorrules): NOT STARTED → DONE
  4. non-content-features summary: 16/10 → 18/8 (after fixes)
  5. MEMORY.md overall: 19/36 (53%) → 20/36 (56%); status emoji/phases synced
- Marked FreshnessBadge feature as DONE (component + dashboard + build script all exist)
- Next quick wins: `SECURITY.md`
- Done: Archived stale plan files (5.6) — created `memory/archive/` convention
- Blockers: None

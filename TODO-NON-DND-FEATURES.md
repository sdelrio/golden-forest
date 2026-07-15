# TODO: Non-DnD Feature Ideas

Potential features for The Golden Forest (lorien.cloud), excluding DnD-related items from `TODO-FEATURES.md`.

---

## 1. Interactive Command Reference Component

A searchable, filterable cheat-sheet component for CLI commands referenced across the docs. Currently, commands are scattered as inline code blocks across many articles.

- **What:** React component (`<CmdRef>`) that fetches a JSON registry of commands (tool, category, syntax, description)
- **Features:** Search + category filter, copy-to-clipboard, embeddable in MDX via `<CmdRef tool="task" />` or `<CmdRef />` for the full registry
- **Data:** `static/cmd-reference/commands.json`
- **Component:** `src/components/CmdRef/`
- **Complexity:** Medium
- **Pattern:** Reuses the AiDashboard search/filter pattern

---

## 2. Article Freshness Tracker

A build-time + runtime system that flags stale content.

- **What:** Docusaurus plugin or build script that scans all MDX frontmatter for `last_updated` dates
- **Features:** Calculates age, injects freshness badge (green/yellow/red), adds "Suggest Update" link (pre-filled GitHub issue), generates a `/stale-content` dashboard page
- **Data:** Derived from MDX frontmatter at build time
- **Components:** `src/components/FreshnessBadge/` + `src/pages/stale-content.js`
- **Complexity:** Low-Medium
- **Pattern:** Reuses Docusaurus plugin pattern

---

## 3. Personal Reading List with Local Progress

A browser-local reading tracker — no backend needed.

- **What:** localStorage-based reading list and progress tracker
- **Features:** Bookmark articles, scroll-based reading progress bar, mark articles as "Read", export/import reading list as JSON
- **Data:** `localStorage` (no static files)
- **Components:** `src/components/ReadingList/` + `src/components/ReadingProgress/`
- **Complexity:** Medium
- **Pattern:** Reuses CharSearch client-side filtering pattern

---

## 4. Tech Stack Radar Chart

An interactive radar/spider chart visualizing the project's technology stack across dimensions like "Maturity", "Community", "Performance", "Learning Curve".

- **What:** SVG-based radar chart (no heavy charting library)
- **Features:** Pulls data from a JSON config, embeddable in homepage or `/stack` page, supports toggling technologies on/off for comparison
- **Data:** `static/tech-radar/stack.json`
- **Component:** `src/components/TechRadar/`
- **Complexity:** Medium
- **Pattern:** New — SVG charting pattern

---

## 5. Mermaid Diagram Playground ✅ DONE

A standalone MDX page with an interactive Mermaid editor.

- **What:** Live Mermaid syntax editor with real-time rendered diagram preview
- **Features:** Browse pre-built templates (flowcharts, sequence diagrams, Gantt charts, mind maps), copy rendered diagram or embed code
- **Data:** `static/mermaid-templates/templates.json`
- **Component:** `src/components/MermaidPlayground/`
- **Complexity:** Low
- **Pattern:** Extends existing Mermaid support in Docusaurus config

---

## Comparison Matrix

| # | Feature            | Complexity | New Data?         | Reusable Pattern?             |
|---|--------------------|-----------|-------------------|-------------------------------|
| 1 | Command Reference  | Medium    | Yes (JSON)        | Yes — AiDashboard pattern     |
| 2 | Freshness Tracker  | Low-Med   | No (frontmatter)  | Yes — Docusaurus plugin       |
| 3 | Reading List       | Medium    | localStorage only | Yes — CharSearch pattern      |
| 4 | Tech Radar         | Medium    | Yes (JSON)        | New — SVG charting pattern    |
| 5 | Mermaid Playground | Low       | Yes (templates)   | Yes — extends Mermaid support | ✅ |

# Non-DnD Feature Ideas

General features for The Golden Forest, excluding DnD-specific items.

---

## 1. Interactive Command Reference — DONE

Searchable, filterable cheat-sheet for CLI commands referenced across docs.

- **What:** `<CmdRef>` component fetching JSON registry (tool, category, syntax, description)
- **Features:** Search + category filter, copy-to-clipboard, embeddable via `<CmdRef tool="task" />`
- **Data:** `static/cmd-reference/commands.json`
- **Component:** `src/components/CmdRef/`
- **Pattern:** Reuses AiDashboard search/filter pattern
- **Complexity:** Medium
- **PR:** #164

## 2. Article Freshness Tracker — IN PROGRESS

Build-time + runtime system flagging stale content.

- **What:** Docusaurus plugin scanning MDX frontmatter `last_updated` dates
- **Features:** Freshness badge (green/yellow/red), "Suggest Update" link (pre-filled GitHub issue), `/stale-content` dashboard
- **Data:** Derived from MDX frontmatter at build time
- **Components:** `src/components/FreshnessBadge/` + `src/pages/stale-content.js`
- **Pattern:** Docusaurus plugin pattern
- **Complexity:** Low-Medium
- **Completed:** FreshnessBadge component (`src/components/FreshnessBadge/`) — thresholds: 60/180 days, explicit import, "Suggest Update" link included
- **Remaining:** `/stale-content` dashboard page, docs adoption (add `last_updated` to frontmatter)

## 3. Personal Reading List — NOT STARTED

Browser-local reading tracker. No backend needed.

- **What:** localStorage-based reading list and progress tracker
- **Features:** Bookmark articles, scroll-based progress bar, mark as "Read", export/import JSON
- **Data:** `localStorage` only
- **Components:** `src/components/ReadingList/` + `src/components/ReadingProgress/`
- **Pattern:** Reuses CharSearch client-side filtering
- **Complexity:** Medium

## 4. Tech Stack Radar Chart — NOT STARTED

Interactive radar/spider chart visualizing technology stack.

- **What:** SVG-based radar chart (no heavy charting library)
- **Features:** Pulls from JSON config, embeddable in homepage or `/stack`, toggle technologies on/off
- **Data:** `static/tech-radar/stack.json`
- **Component:** `src/components/TechRadar/`
- **Pattern:** New — SVG charting
- **Complexity:** Medium

## 5. Mermaid Diagram Playground — DONE

Interactive Mermaid editor with live preview.

- **Component:** `src/components/MermaidPlayground/`
- **Data:** `static/mermaid-templates/templates.json`
- **Complexity:** Low

---

## Summary

| Status | Count |
|--------|-------|
| DONE | 2 |
| IN PROGRESS | 1 |
| NOT STARTED | 2 |
| **Total** | **5** |

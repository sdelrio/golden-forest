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

## 2. Article Freshness Tracker — DONE

Build-time + runtime system flagging stale content.

- **What:** Docusaurus plugin scanning MDX frontmatter `last_updated` dates
- **Features:** Freshness badge (green/yellow/red), "Suggest Update" link (pre-filled GitHub issue), `/stale-content` dashboard
- **Data:** Derived from MDX frontmatter at build time
- **Components:** `src/components/FreshnessBadge/` + `src/pages/stale-content.js`
- **Pattern:** Docusaurus plugin pattern
- **Complexity:** Low-Medium
- **Completed:** FreshnessBadge component (`src/components/FreshnessBadge/`) — thresholds: 60/180 days, explicit import, "Suggest Update" link included
- **Done:** Dashboard at `src/pages/tutorial/stale-content.js`, build script at `scripts/build-freshness-index.mjs`, `make freshness-index`

## 3. Personal Reading List — DONE

Browser-local reading tracker. No backend needed.

- **What:** localStorage-based reading list and progress tracker
- **Storage:** `localStorage` (primary) — cookies limited to ~4KB, insufficient for growing reading lists
- **Features:**
  - Bookmark articles from any page (star icon in doc footer or sidebar)
  - Scroll-based progress bar (auto-saves reading position per article)
  - Mark as "Read" / "Unread"
  - Filter/sort: All, Unread, Read, Bookmarked
  - Export/Import JSON (backup/restore across devices)
- **Data shape (localStorage keys):**
  - `readingList` — `{ [slug]: { bookmarked: bool, read: bool, progress: 0-100, lastRead: timestamp } }`
- **Components:**
  - `src/components/ReadingList/` — panel/page showing saved articles with filters
  - `src/client/reading-progress.js` — thin progress bar at top of doc pages (clientModule)
  - `src/client/bookmark-button.js` — star toggle in doc footer (clientModule)
- **Pattern:** Reuses CharSearch client-side filtering pattern
- **Complexity:** Medium
- **PR:** #181

## 4. Tech Stack Radar Chart — DONE

Interactive radar/spider chart visualizing technology stack.

- **What:** Mermaid radar-beta chart rendered from JSON config
- **Features:** Pulls from JSON config, responsive sizing (90vw), dark mode support, auto-generated from project scan
- **Data:** `static/tech-radar/stack.json`
- **Component:** `src/components/TechRadar/`
- **Script:** `scripts/update-tech-radar.mjs` — regenerates JSON from package.json + project scan
- **Pattern:** Mermaid dynamic rendering (like MermaidPlayground)
- **Complexity:** Medium
- **PR:** #182

## 5. Mermaid Diagram Playground — DONE

Interactive Mermaid editor with live preview.

- **Component:** `src/components/MermaidPlayground/`
- **Data:** `static/mermaid-templates/templates.json`
- **Complexity:** Low

---

## Summary

| Status | Count |
|--------|-------|
| DONE | 5 |
| IN PROGRESS | 0 |
| NOT STARTED | 0 |
| **Total** | **5** |

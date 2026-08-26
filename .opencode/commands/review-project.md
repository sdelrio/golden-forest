---
description: review the project and suggest features, improvements and fixes
agent: build
---
# /review-project
Review the project and suggest features, improvements and fixes.

## Instructions
1. Read `memory/MEMORY.md` and `AGENTS.md` for project context, conventions, and known pending jobs (avoid suggesting things already tracked).
2. Review the project structure: `docs/`, `src/components/`, `src/theme/`, `static/`, `scripts/`, and config files (`docusaurus.config.js`, `Taskfile.yml`, `package.json`).
3. Analyze across these dimensions:
   - **Features**: gaps in content coverage, missing functionality, opportunities for new components or tools.
   - **Improvements**: performance, accessibility, SEO, UX, dark mode consistency, code duplication in components.
   - **Fixes**: broken patterns, outdated dependencies, inconsistencies with AGENTS.md conventions, technical debt.
4. Check `memory/features/` feature files to avoid duplicating already-tracked work.
5. Present findings organized as:

```
## Project Review

### Suggested Features
- <feature> - <why it adds value> (complexity: low|medium|high)

### Improvements
- <improvement> - <what it improves and how>

### Fixes
- <fix> - <what is wrong and the impact>
```

6. Prioritize each list (highest value first) and flag quick wins.
7. Do NOT implement anything - this command only reviews and reports. Offer to add accepted suggestions to the Pending Jobs Queue via `/jobs-add`.

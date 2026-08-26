---
description: detect github issues needing triage and process them
agent: build
---
# /issues-detect
Scan open GitHub issues, detect which need triage, and suggest labels.

## Instructions
1. Read `.agents/issue-tracker.md` for conventions and the triage label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`).
2. List all open issues:
   ```
   gh issue list --state open --json number,title,body,labels --jq '[.[] | {number, title, body, labels: [.labels[].name]}]'
   ```
3. For each issue without any triage label:
   - Classify it: bug / feature / docs / question.
   - Suggest a triage label:
     - Missing key information → `needs-info`
     - Clear and actionable by an agent → `ready-for-agent`
     - Actionable but requires human decision → `ready-for-human`
     - Duplicate, out of scope, or won't do → `wontfix` (ask before applying)
     - Unclear → leave as `needs-triage`
4. Present a summary table:

```
| # | Title | Current Labels | Suggested Label | Reason |
```

5. Do NOT apply labels automatically unless `$ARGUMENTS` contains `apply`. With `apply`, apply suggested labels via `gh issue edit <n> --add-label "..."` and report results.

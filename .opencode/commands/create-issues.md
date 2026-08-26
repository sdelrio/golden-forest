---
description: create GitHub issues from a reviewed list of fixes, improvements or features
agent: build
---
# /create-issues
Create GitHub issues from a reviewed list of fixes/improvements/features (e.g. the output of `/review-project`).

## Instructions
1. Read `.agents/issue-tracker.md` for conventions.
2. Collect the candidate items from `$ARGUMENTS`, or if empty, ask the user to paste the reviewed list (e.g. from `/review-project` output) or point to the file containing it.
3. For each item, draft a GitHub issue:
   - **Title**: short imperative summary (`feat: ...`, `fix: ...`, `chore: ...` prefix matching the change type).
   - **Body**: context/motivation, proposed change, acceptance criteria as checkboxes, complexity (low|medium|high). Use a heredoc for multi-line bodies.
4. Present the full draft list to the user for review:

```
| # | Title | Type | Complexity |
```

   Show one full example body so the user can validate the format.
5. Ask the user to confirm, remove items, or edit before creating anything.
6. After confirmation, create each issue via `gh issue create --title "..." --body "$(cat <<'EOF' ... EOF)"`.
7. Apply an appropriate label to each created issue (`ready-for-agent` or `ready-for-human`) per `.agents/triage-labels.md`.
8. Report the created issue numbers and links.

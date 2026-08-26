---
description: work on a github issue end-to-end
agent: build
---
# /issues-process <number>
Process a GitHub issue end-to-end: understand, implement, test, PR, close.

## Instructions
1. Read `.agents/issue-tracker.md` for conventions.
2. Extract the issue number from `$ARGUMENTS` (accept plain numbers or full issue URLs; if no valid number is found, show usage and stop). Fetch the issue with comments and labels: `gh issue view <number> --comments`.
   - If the issue has no `ready-for-agent` label or lacks needed info, STOP and tell the user what is missing (suggest `needs-info`).
3. Present an implementation plan and wait for user confirmation.
4. Create a branch from master: `git checkout -b fix/issue-<number>` (or `feat/issue-<number>`).
5. Implement the change following `AGENTS.md` conventions.
6. Validate: run `task check` and `task build`. Fix failures before continuing.
7. Commit using Conventional Commits (reference the issue as `#<number>` in the commit body so GitHub links it).
8. Push and create the PR: `git push -u origin <branch> && gh pr create --title "..." --body "... closes #<number>"`.
9. Watch checks: `gh pr checks --watch`. Fix broken links if they fail (see AGENTS.md PR workflow notes).
10. Ask the user for merge confirmation. After squash-merge, verify the issue auto-closed via the `closes #<number>` keyword; otherwise close it with `gh issue close <number> --comment "Fixed in PR ..."`.

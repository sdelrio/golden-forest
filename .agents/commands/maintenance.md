---
description: maintenance
agent: build
model: opencode/big-pickle
---
Upgrade project dependencies and verify the build.

## Instructions
1. Run `make upgrade-browserlist`.
2. Run `make upgrade-all`.
3. Run `yarn build` to verify the site still compiles.
4. Report any significant version changes.

---
description: check links
agent: build
model: opencode/big-pickle
---
Check for broken internal links via a production build.

## Instructions
1. Execute `DOCUSAURUS_IGNORE_SSG_WARNINGS=true yarn build`.
2. Monitor output for 'Broken links found' errors and report them to the user.

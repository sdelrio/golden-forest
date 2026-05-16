---
description: update README.md
agent: build
model: opencode/big-pickle
---
# /update-readme
Refactor or generate a professional, first-grade README.md for the project.

## Instructions
1. **Research Project State**:
   - Read `docusaurus.config.js` for site title, tagline, and URL.
   - Read `Taskfile.yml` to identify the current automation commands.
   - List `.github/workflows/` to find active GitHub Action badges (e.g., `master.yml`, `indexing.yml`).
   - Read `src/components/AGENTS.md` to categorize custom components (Docs vs Tools).

2. **Structure Requirements**:
   - **Header**: Use a 🌳 emoji, title, and status badges (Website, License, Build Status, Indexing).
   - **Introduction**: Professional summary of the Digital Garden and its purpose.
   - **Features**: Bulleted list of key project capabilities (Digital Garden, D&D integration, AI-native, etc.).
   - **Tech Stack**: Grouped list (Framework, UI, Content, Styling, Automation, Custom Components).
   - **Quick Start**: 3-step guide using `task install` and `task start`.
   - **Project Structure**: High-level overview of key directories (`/docs`, `/blog`, `/src`, etc.).
   - **Essential Commands**: A Markdown table mapping `task` commands to descriptions.
   - **AI Guidelines**: Use a GitHub `[!IMPORTANT]` alert referencing `AGENTS.md`.

3. **Style Guidelines**:
   - Use high-quality GitHub Markdown features (tables, alerts, badges).
   - Ensure all internal links use absolute `file:///` paths if referencing local documentation for the agent.
   - Maintain professional, concise, and technical tone.

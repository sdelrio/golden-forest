# 🌳 The Golden Forest (lorien.cloud)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.lorien.cloud&logo=docusaurus)](https://www.lorien.cloud)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/sdelrio/golden-forest/actions/workflows/master.yml/badge.svg)](https://github.com/sdelrio/golden-forest/actions)
[![Algolia Indexing](https://github.com/sdelrio/golden-forest/actions/workflows/indexing.yml/badge.svg)](https://github.com/sdelrio/golden-forest/actions/workflows/indexing.yml)

Welcome to **The Golden Forest**, a modern Digital Garden and Knowledge Base built with [Docusaurus 3](https://docusaurus.io/). This project serves as a centralized hub for technical documentation, AI development patterns, and digital assets, featuring deep integration with Fantasy Grounds character data.

---

## ✨ Features

- **📂 Digital Garden**: A curated collection of notes, tutorials, and articles on software development and AI.
- **🧙 Fantasy Grounds Integration**: Automated tools to parse and display Fantasy Grounds XML character data as interactive React components.
- **🤖 AI-Native Workflow**: Specialized guidelines and structures optimized for AI coding assistants (Claude, GPT, Cursor).
- **🚀 Modern Tech Stack**: Built on React 19, MDX, and CSS Modules for a fast, responsive experience.
- **⚡ Performance Optimized**: Utilizes "Docusaurus Faster" for rapid build times and excellent lighthouse scores.

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3.x](https://docusaurus.io/)
- **UI Library**: [React 19](https://react.dev/)
- **Content**: [MDX](https://mdxjs.com/) (Markdown + JSX)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) & [Infima](https://infima.dev/)
- **Automation**: [Go-Task](https://taskfile.dev/) (Taskfile)
- **Environment**: [Devbox](https://www.jetify.com/devbox) & [Direnv](https://direnv.net/)
- **Custom Components**: Built-in library of interactive [MDX components](file:///Users/sdelrio/github/sdelrio/golden-forest/src/components/):
  - **Docs**: `Accordion`, `Steps`, `CardGroup`, `CodeGroup`, `ParamField`.
  - **Tools**: `XmlChar`, `CharSearch`, `DnDPointBuy`, `StatDiceRoller`.

---

## 🚀 Quick Start

This project uses [Taskfile](https://taskfile.dev/) to manage development workflows.

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (check `.nvmrc` or `package.json`)
- [Yarn](https://yarnpkg.com/)
- [Task](https://taskfile.dev/installation/)

### 2. Installation

```bash
task install
```

### 3. Local Development

```bash
task start
```

This starts the development server at `http://localhost:3000`.

> [!IMPORTANT]
> **AI Coding Agents**: This repository contains specific guidelines and patterns for AI-assisted development. Please read [**AGENTS.md**](file:///Users/sdelrio/github/sdelrio/golden-forest/AGENTS.md) before making any structural changes.

---

## 🏗️ Project Structure

- `/docs`: Technical documentation and knowledge base.
- `/blog`: Long-form articles and updates.
- `/tutorial`: Guides for adding and managing content.
- `/src/components`: Custom React components used across the garden.
- `/static/fg/chars`: XML data files for Fantasy Grounds characters.

---

## ⚡ Essential Commands

### Development

| Task | Description |
| :--- | :--- |
| `task start` | Start the local development server |
| `task start:host` | Start dev server on host network (0.0.0.0) |
| `task build` | Build the static production website |
| `task deploy` | Deploy the website to GitHub Pages |
| `task clean` | Remove build artifacts and node_modules |

### Dependency Management

| Task | Description |
| :--- | :--- |
| `task upgrade` | Upgrade Docusaurus core and preset-classic to latest |
| `task upgrade:all` | Upgrade all yarn.lock dependencies |
| `task upgrade:browserlist` | Update browserslist database |

### Verification & Testing

| Task | Description |
| :--- | :--- |
| `task check` | Run MDX syntax checker (crucial for builds) |
| `task test:perf` | Run `unlighthouse` web performance tests |
| `task test:links` | Check for broken links in the build directory |

### Characters

| Task | Description |
| :--- | :--- |
| `task chars:list` | List and summarize Fantasy Grounds character XML files |
| `task chars:buildindex` | Rebuild the character search index from XML files |

### AI Dashboard

| Task | Description |
| :--- | :--- |
| `task ai-dashboard:enrich` | Enrich AI dashboard data from npm/GitHub APIs |
| `task ai-dashboard:force` | Force refresh AI dashboard data (ignore cache) |

### Search Indexing

| Task | Description |
| :--- | :--- |
| `task index:algolia` | Generate Algolia index using docsearch-scraper |
| `task index:typesense` | Generate Typesense index using docsearch-scraper |

> [!TIP]
> If you add new character XML files to `static/fg/chars`, run `task chars:buildindex` to update the searchable gallery.

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/sdelrio">sdelrio</a>
</p>

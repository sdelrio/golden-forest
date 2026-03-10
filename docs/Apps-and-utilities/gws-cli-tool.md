---
title: "Google Workspace CLI"
description: "Command-line access to Google Workspace APIs with AI agent support"
tags:
  - CLI
  - Google
  - AI
  - tools
---

# Google Workspace CLI (gws)

The Google Workspace CLI, abbreviated as `gws`, is a command-line tool that provides unified access to all Google Workspace APIs, including Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. It dynamically generates its command surface from Google's Discovery Service, ensuring it stays up-to-date with API changes without manual updates. The tool outputs structured JSON for easy parsing, supports features like auto-pagination, dry-run previews, and help for every resource, and is designed for both human users (to avoid writing raw `curl` calls) and AI agents (with included skills and integrations). It is not an officially supported Google product and is under active development.

## Prerequisites

- Node.js 18+
- A Google Cloud project (create via Cloud Console or `gcloud`)
- A Google account with Workspace access

## Installation

### Via npm (Recommended)

```bash
npm install -g @googleworkspace/cli
```

This bundles pre-built binaries for your OS/architecture (no Rust toolchain needed).

### Pre-built Binaries

Download from [GitHub Releases](https://github.com/googleworkspace/cli/releases).

### From Source

Install Rust/Cargo, then run:

```bash
cargo install --git https://github.com/googleworkspace/cli --locked
```

### Nix Flake

```bash
nix run github:googleworkspace/cli
```

## Quick Start

1. Authenticate: `gws auth setup` (one-time project config), `gws auth login` (OAuth login).
2. List files: `gws drive files list --params '{"pageSize": 5}'` (lists recent files).
3. Create spreadsheet: `gws sheets spreadsheets create --json '{"properties": {"title": "Q1 Budget"}}'`.

## Key Features

- **Dynamic Command Generation**: Builds commands from Google's Discovery Service at runtime, covering all Workspace APIs automatically.
- **Structured Output**: All responses are JSON-formatted, with support for NDJSON streaming and pagination.
- **Human-Friendly**: Includes `--help` for every resource, `--dry-run` for request previews, and auto-pagination to handle large result sets.
- **AI Agent Support**: Ships with 100+ agent skills (e.g., for Gmail, Drive, Docs workflows), an MCP (Model Context Protocol) server for integration with tools like Claude Desktop or Gemini CLI, and a Gemini CLI extension for direct agent access.
- **Authentication Flexibility**: Supports multiple auth methods, including interactive OAuth, service accounts, headless/CI setups, and multi-account management.
- **Advanced Capabilities**: Multipart uploads, shell escaping for Sheets ranges, Model Armor integration for response sanitization, and workflow tools.
- **Security and Compliance**: Credentials are encrypted at rest; supports domain-wide delegation and pre-obtained tokens.
- **Extensibility**: Can be used as an MCP server or integrated into AI workflows via skills.

## Usage Examples

- **Inspect Schema**: `gws schema drive.files.list` (shows request/response schemas).
- **Paginated NDJSON**: `gws drive files list --params '{"pageSize": 100}' --page-all | jq -r '.files[].name'`.
- **Sheets Operations**: `gws sheets spreadsheets values get --params '{"spreadsheetId": "ID", "range": "Sheet1!A1:C10"}'` (read cells; note single quotes for shell escaping).
- **Multipart Upload**: `gws drive files create --json '{"name": "report.pdf"}' --upload ./report.pdf`.
- **Send Chat Message**: `gws chat spaces messages create --params '{"parent": "spaces/xyz"}' --json '{"text": "Deploy complete."}' --dry-run`.

## Authentication

Supports multiple auth methods:
- Interactive OAuth
- Service accounts
- Headless/CI setups
- Multi-account management

Run `gws auth setup` for initial configuration.

## AI Agent Skills

Ships with 100+ skills for workflows. Install with:

```bash
npx skills add https://github.com/googleworkspace/cli
```

## MCP Server

Run as an MCP server:

```bash
gws mcp -s drive,gmail,calendar
```

Expose tools for MCP clients.

## Advanced Usage

- Multipart uploads for large files
- Pagination with `--page-all`
- Sheets range escaping (use single quotes)
- Model Armor for response sanitization

## Troubleshooting

- Access blocked: Check API scopes and project settings.
- Scope limits: Enable required APIs in Google Cloud Console.
- Common issues: Refer to [GitHub Issues](https://github.com/googleworkspace/cli/issues).

## License

Apache-2.0. Not an officially supported Google product.
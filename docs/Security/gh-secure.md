---
title: "gh-secure"
description: "Official GitHub CLI extension from the GitHub Security Lab that enables branch protection, private vulnerability reporting, secret scanning, Dependabot, and CodeQL on a repository in about 2 minutes."
tags: [security, github, cli, devsecops, supply-chain]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from '@site/src/components/Accordion/Accordion';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# gh-secure

**gh-secure** is a [GitHub CLI](https://cli.github.com) extension built by the [GitHub Security Lab](https://securitylab.github.com/) to enable security features on public repositories following their best-practice recommendations. A single command turns on branch protection, private vulnerability reporting, secret scanning, Dependabot, and CodeQL - the "just do it" security baseline that most maintainers never get around to configuring by hand.

Everything it enables is **free for open source**. It requires no security or coding skills: only an open source project on GitHub where you have admin access.

:::info
gh-secure hardens your repository against four common threats without touching your source code: leaked secrets, known vulnerable dependencies, code-level vulnerabilities, and unauthorized changes.
:::

## The Five Security Features

### Branch Protection

Branch protection blocks unwanted changes to your project. It prevents accidental or malicious commits that could introduce vulnerabilities or destabilize the default branch, and gives you flexible control over who can force-push or delete branches. If the repository already has active [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), gh-secure warns you before enabling legacy branch protection to avoid overlapping or conflicting rules.

### Private Vulnerability Reporting

A security policy plus Private Vulnerability Reporting (PVR) creates a safe path for reporting vulnerabilities before they go public. It makes it easy for users and security researchers outside the project to report security bugs privately.

### Secret Scanning

Sensitive data like API keys, tokens, and passwords can be accidentally committed to a repository. Secret scanning with push protection guards over **300 token types and patterns across more than 180 service providers**, and blocks a push before a secret ever leaves your machine.

:::tip
Push protection is the highest-value toggle of the whole set: it stops a leaked credential at commit time instead of alerting you after it is already public.
:::

### Dependabot

Dependabot keeps your dependencies safe automatically. It checks them for known vulnerabilities and opens pull requests to update them to patched versions, saving you manual auditing and blocking threats from publicly known CVEs.

### Code Scanning (CodeQL)

GitHub code scanning automatically detects common security vulnerabilities in your project and in your pull requests. You can resolve them manually, or use **Copilot Autofix** to get AI-powered fix suggestions before the issues are exploited.

## Installation

<Steps>
  <Step title="Install the extension">
    ```bash
    gh extension install GitHubSecurityLab/gh-secure
    ```
  </Step>
  <Step title="Verify prerequisites">
    You need the [GitHub CLI](https://cli.github.com) (`gh`) installed and authenticated, plus **admin** or **maintainer** permissions on the target repository.

    ```bash
    gh auth status
    ```
  </Step>
  <Step title="Refresh scopes (organization repos)">
    For organization repositories you may also need the `admin:org` scope.

    ```bash
    gh auth refresh -s admin:org
    ```
  </Step>
</Steps>

## Usage

gh-secure runs either in an interactive mode or in a "just do it" mode with no prompts.

```bash
gh secure                                  # Interactive mode, all features
gh secure --yes                            # Enable all features, no prompts
gh secure branch-protection dependabot     # Enable only these two features
gh secure bp ss cs -y                      # Enable 3 features, no prompts
gh secure --repo owner/repo code-scanning  # Enable CodeQL on a specific repo
gh secure --yes --dry-run                  # Preview what would be enabled
gh secure status                           # Check current feature status
gh secure status --repo owner/repo         # Check status of a specific repo
```

### Flags

| Flag | Description |
| :--- | :--- |
| `-r`, `--repo <owner/repo>` | Target repository (default: current repo) |
| `-y`, `--yes` | Enable selected features without prompting for confirmation |
| `-n`, `--dry-run` | Simulate changes without applying them |
| `-v`, `--version` | Print version |
| `-h`, `--help` | Show help message |

### Feature Names

Pass one or more feature names to enable only specific features. If none are specified, all features are included.

| Feature | Shorthand |
| :--- | :--- |
| `branch-protection` | `bp` |
| `vulnerability-reporting` | `vr` |
| `secret-scanning` | `ss` |
| `dependabot` | `dep` |
| `code-scanning` | `cs` |

:::warning
Always preview first with `gh secure --yes --dry-run`. Branch protection may require contributors to open pull requests instead of pushing directly to the default branch - a workflow change worth communicating before you enable it.
:::

## Using gh-secure from an AI Assistant

Beyond the terminal, gh-secure can be driven from the GitHub Copilot CLI, the GitHub Copilot App, or any AI assistant with access to the tool. This turns repository hardening into a conversational task: ask for an overview of your repository's security, ask for details on specific features, and ask the assistant to enable whatever is missing.

<Tabs groupId="gh-secure-mode">
  <TabItem value="terminal" label="Terminal">
    ```bash
    gh secure status          # see what is missing
    gh secure --yes           # enable everything
    ```
  </TabItem>
  <TabItem value="assistant" label="AI Assistant">
    ```text
    "Give me an overview of this repository's security features,
     explain secret scanning and push protection, then enable
     every missing feature."
    ```
  </TabItem>
</Tabs>

## Troubleshooting

<Accordion title="403 Forbidden errors">
Ensure you have admin or maintain permissions on the repository. For org repos, you may need the `admin:org` scope - run `gh auth refresh -s admin:org`.
</Accordion>

<Accordion title="Code Scanning fails">
Ensure the repository contains [supported languages](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/) and that code scanning is available for your plan.
</Accordion>

<Accordion title="Branch Protection fails">
Some organizations have policies that restrict branch protection - contact your org admin. If your repository uses rulesets, you may not need legacy branch protection at all; gh-secure detects active rulesets and prompts you before enabling it.
</Accordion>

## FAQ

<Accordion title="What permissions do I need and why?">
You need **admin** or **maintain** permissions on the target repository, because enabling security features requires write access to repository settings. For organization repositories, you may also need the `admin:org` OAuth scope.
</Accordion>

<Accordion title="How does gh-secure authenticate?">
It uses your [GitHub CLI](https://cli.github.com) session. Run `gh auth status` to check it, or `gh auth login` if you are not authenticated. The tool inherits whatever token and scopes your `gh` session has.
</Accordion>

<Accordion title="What are the implications for my project?">
Enabling these features adds protective guardrails but does not change your source code:

- **Branch protection** may require contributors to open pull requests instead of pushing directly to the default branch.
- **Secret scanning** blocks pushes containing detected secrets and alerts on secrets already present in history.
- **Dependabot** opens pull requests to update vulnerable dependencies - you still decide whether to merge them.
- **Code scanning** runs on every push and pull request; findings appear as alerts unless you configure them to block merges.
- **Private vulnerability reporting** opens a channel for external reporters without exposing private information.

All of these settings can be reverted at any time from your repository settings.
</Accordion>

<Accordion title="Will my project be secure?">
These features significantly raise the security baseline, but no tool guarantees complete security. They detect and prevent common issues - leaked secrets, known vulnerable dependencies, code-level vulnerabilities, and unauthorized changes - but security is an ongoing process. Review alerts regularly, keep dependencies current, and follow the GitHub Security documentation for additional best practices.
</Accordion>

## References

- [GitHub Repository](https://github.com/GitHubSecurityLab/gh-secure)
- [GitHub Security Lab - Protect Your Project](https://securitylab.github.com/protect-your-project.html)
- [6 security settings every GitHub maintainer should enable this week](https://github.blog/security/6-security-settings-every-github-maintainer-should-enable-this-week/)
- [GitHub Security Documentation](https://docs.github.com/en/code-security)
- [CodeQL Documentation](https://codeql.github.com/docs/)

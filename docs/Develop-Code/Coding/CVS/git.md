---
title: Git Version Control
description: A professional guide to Git, covering its distributed architecture, core concepts, advanced workflows, and server-side integration with Gitea.
tags: [git, version-control, cvs, devops, collaboration]
slug: git-version-control
---

# Git: Distributed Version Control

Git is a mature, actively maintained open-source version control system originally developed by **Linus Torvalds** in 2005. Unlike older centralized systems, Git is **distributed**, meaning every developer's working copy of the code is also a full-fledged repository that contains the complete history of all changes, independent of network access or a central server.

Its design philosophy is centered around **speed, data integrity, and support for distributed, non-linear workflows**. 

*   **[Official Homepage](https://git-scm.com/)**
*   **[Pro Git Book](https://git-scm.com/book/en/v2)**

## Core Concepts

Understanding Git requires a shift in thinking from "tracking file changes" to "managing snapshots."

### The Three States
Git manages files in three main areas:
1.  **Working Directory:** The local file system where you edit files.
2.  **Staging Area (Index):** A "buffer" zone where you prepare and group changes for the next commit.
3.  **Repository (.git):** The permanent database where Git stores snapshots and history.

### Branching and Merging
Branching is Git's most powerful feature. It is incredibly lightweight, allowing developers to create "parallel universes" for experiments or features without impacting the main codebase.
*   **Branches:** Movable pointers to commits.
*   **Merging:** The process of integrating independent lines of development.
    *   **Fast-forward:** A simple update of the branch pointer when history hasn't diverged.
    *   **Three-way merge:** A new commit that reconciles different histories.

## Configuration & Personalization

Git can be extensively customized via the `.gitconfig` file (usually located at `~/.gitconfig`).

### Terminal Colors
Enabling UI colors significantly improves the readability of logs and diffs.

```ini
[color]
    diff = always
    ui = always
    status = auto
    branch = auto
    interactive = auto
    pager = true
[color "status"]
  added = green
  changed = red bold
  untracked = magenta bold

[color "branch"]
  remote = yellow
```

### Essential Aliases
Boost productivity by mapping frequently used or complex commands to short aliases.

```ini
[alias]
    review = "!f() { git push -u ${1:-origin} HEAD:`git config branch.$(git name-rev --name-only HEAD).merge | sed -e 's@refs/heads/@refs/for/@'`; }; f"
    unstage = reset --soft HEAD^
    ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
    ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
    st = status -s
    gl = clone
    ci = commit
    co = checkout
    br = branch
    dif = diff --word-diff
    diff1 = diff HEAD^
    diff2 = diff HEAD^^
    dc = diff --cached
    r = reset
    r1 = reset HEAD^
    r2 = reset HEAD^^
    rh = reset --hard
    rh1 = reset HEAD^ --hard
    rh2 = reset HEAD^^ --hard
```

## Advanced Tooling

### Large File Storage (LFS)
Git LFS optimizes the handling of large binary files (audio, video, datasets) by replacing them with text pointers.

```bash
# Installation & Setup
git lfs install
git lfs track "*.psd"
git add .gitattributes

# Tracking a new large file
git add file.psd
git commit -m "Add design file"
git push origin main
```

### Productivity & Linting
*   **[Commitizen](http://commitizen.github.io/cz-cli/):** Guides developers through creating standardized commit messages (e.g., `feat:`, `fix:`, `refactor:`).
*   **[pre-commit](https://pre-commit.com/):** A framework for managing and maintaining multi-language Git hooks to automate linting and testing before every commit.

## Detect secrets in code

An enterprise-friendly way of detecting and preventing secrets in code. Use these tools to scan your repository for accidentally committed API keys, passwords, or certificates.

*   **[Yelp/detect-secrets](https://github.com/Yelp/detect-secrets):** A popular tool for scanning repositories for secrets.
*   **[Why Securing Secrets is Important](https://thenewstack.io/why-securing-secrets-in-cloud-and-container-environments-is-important-and-how-to-do-it/)** (Article)

## Recovery & Maintenance

### Rolling back changes

Undoing work is a common task in Git, but the method depends on whether you have already committed your changes or shared them with others.

*   **`git reset`:** Moves the current branch pointer. It is useful for wiping out uncommitted changes or unstaging files. 
    *   *Caution:* This can rewrite history if used on commits.
*   **`git revert`:** Creates a new commit with the reverse patch of the target commit. This is the safest way to undo changes in shared repositories as it preserves a clear history.

#### Sample: Using `git revert`

First, check your commit history:
```bash
$ git log --oneline --all --graph --decorate
* c78f1e0c (HEAD -> master, origin/master) k8s: linter tools
* e3ba41b2 git: update content and adding tools
* c90c2e85 CI: update db-migrations
```

To undo the `c78f1e0c` commit:
```bash
$ git revert c78f1e0c
```

The history now includes a new revert commit:
```bash
$ git log --oneline --all --graph --decorate
* 3f67984 (HEAD -> master) Revert "k8s: linter tools"
* c78f1e0c k8s: linter tools
* e3ba41b2 git: update content and adding tools
```

> [!NOTE]
> For more details, see [Rolling Back Changes with Revert and Reset](https://thenewstack.io/getting-legit-with-git-and-github-rolling-back-changes-with-revert-and-reset/).

### The Safety Net: `git reflog`
If you lose a commit during a reset or delete a branch, `git reflog` provides a timeline of every action taken in your local repository. You can use it to find the SHA of a "lost" state and restore it using `git reset <sha>`.

### Efficient Blaming
Use `git blame -w -M` to view file history while ignoring whitespace changes (`-w`) and detecting moved or copied lines (`-M`), ensuring you identify the true author of a change.

## Workflows & Best Practices

### The "Clean History" Workflow
1.  **Work:** Commit frequently with WIP messages.
2.  **Reset:** Run `git reset origin/main` to unstage all local commits.
3.  **Group:** Re-add changes in logical chunks using `git add --patch` and commit with professional messages.

## Servers & Ecosystem

### Self-Hosted Git
*   **[Gitea](https://gitea.io/):** A painless, lightweight self-hosted Git service written in Go.
*   **[Gerrit](https://www.gerritcodereview.com/):** A powerful tool for code review and repository management.

### Git for everything!

Beyond source code control, Git's architecture empowers a wide variety of non-traditional workflows.

#### Progress List and Work-Plans
*   **[Waffle.io](https://projectmanagernews.com/news/what-happened-to-waffle-io/):** (Legacy) Visualized GitHub Issues/PRs as project boards.
*   **[ZenHub](https://www.zenhub.com/):** Agile project management natively integrated into GitHub.

#### Updating your website
*   **[Netlify](https://www.netlify.com/):** Continuous deployment for static sites.
*   **[GitHub Pages](https://pages.github.com/):** Hosting directly from your repo, often paired with [Docusaurus](https://docusaurus.io/).

#### Presentations
Browser-native presentations that work anywhere.
*   **[Reveal.js](http://revealjs.com/):** The HTML presentation framework.
*   **[GitPitch](http://gitpitch.com.bitverzo.com/):** Markdown-based presentations for Git.

#### Word and Excel documents
*   **[Xltrail](https://www.xltrail.com/):** Version control for Excel spreadsheets with cell-level history.
*   **[Simul](http://www.simuldocs.com/):** A Git-like experience for Microsoft Word documents.
*   **XML Formats:** By saving Office docs as XML, Git can handle them more effectively natively.

---

## Monorepo Resources
*   **[Speeding up Git monorepos (Dropbox)](https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code)**

---
title: "GitHub Actions"
description: "Learn GitHub Actions from scratch: workflows, jobs, runners, CI/CD pipelines, and best practices for automating your projects."
tags: [devops, ci-cd, github, automation, tools]
sidebar_label: "GitHub Actions"
---

import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# GitHub Actions

GitHub Actions is a CI/CD and automation platform built directly into GitHub. You define automated workflows in YAML files inside `.github/workflows/`, triggered by events like pushes, pull requests, or schedules. Instead of relying on external CI/CD services, you get native repository integration, secret management, and a marketplace of pre-built actions.

## Key Concepts

**Workflow** — A configurable automated process defined in a `.yml` file. Contains one or more jobs.

**Event** — An activity that triggers the workflow (e.g., `push`, `pull_request`, `schedule`).

**Job** — A set of steps that execute on the same runner. Jobs run in parallel by default but can depend on each other via `needs`.

**Step** — An individual task within a job. Steps run shell commands or call **actions**.

**Action** — A reusable unit of code (e.g., `actions/checkout`, `actions/setup-node`). Browse thousands in the [GitHub Marketplace](https://github.com/marketplace?type=actions).

**Runner** — A virtual machine (or self-hosted server) that executes jobs. GitHub provides hosted runners for Linux, Windows, and macOS.

## Creating Your First Workflow

<Steps>
  <Step title="Create the workflow file">
    Add `.github/workflows/ci.yml` to your repository.
  </Step>
  <Step title="Define the trigger">
    ```yml
    name: CI
    on: [push, pull_request]
    ```
  </Step>
  <Step title="Add a job with steps">
    ```yml
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: 20
          - run: npm ci
          - run: npm test
          - run: npm run build
    ```
  </Step>
  <Step title="Commit and push">
    The workflow runs automatically on every push and pull request. Monitor it under the **Actions** tab in your repository.
  </Step>
</Steps>

The `checkout` action clones your repo, `setup-node` installs Node.js, and the `run` commands execute your project scripts sequentially.

## CI/CD Pipeline Example

Extend the basic workflow into a full CI/CD pipeline with job dependencies and caching:

```yml
name: CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
```

Key patterns:
- `needs: test` makes `build` wait for `test` to pass before running
- `cache: npm` automatically caches `node_modules` for faster installs
- Conditional triggers with `branches: [main]` avoid unnecessary runs on feature branches

## Runners & Virtual Environments

GitHub hosted runners come with a wide range of pre-installed tools. You can inspect the full list for each OS:

- [Linux images](https://github.com/actions/virtual-environments/tree/main/images/linux)
  - [Ubuntu 20.04](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
- [Windows images](https://github.com/actions/virtual-environments/blob/main/images/windows)
- [macOS images](https://github.com/actions/virtual-environments/blob/main/images/macos)

When you need custom hardware or software, set up **self-hosted runners** on your own infrastructure to run workflows inside your network.

## Docker Caching

Two common approaches for caching Docker image layers in GitHub Actions:

- **`docker save` / `docker load` with `actions/cache`**: Simple but becomes slow when images are near 1GB or more — the tarball compression and cache upload take significant time.
- **`docker push` / `docker pull`**: Pushing to a container registry is often faster than saving a tarball for large images, and pulling is faster than loading.

For a detailed comparison, see [Build images on GitHub Actions with Docker layer caching](https://evilmartians.com/chronicles/build-images-on-github-actions-with-docker-layer-caching) and [Caching Docker builds: which approach is the fastest?](https://dev.to/dtinth/caching-docker-builds-in-github-actions-which-approach-is-the-fastest-a-research-18ei).

## Best Practices

- **Keep workflows focused** — One workflow per concern (test, deploy, release) rather than a monolithic file.
- **Pin action versions** — Use `@v4` or a full SHA instead of `@main` to avoid unexpected breaking changes.
- **Use caching** — Cache dependencies with `actions/cache` to cut install time significantly.
- **Fail fast** — Let dependent jobs block downstream jobs with `needs` rather than running everything in parallel and checking later.
- **Use matrix builds** — Test across multiple OS or language versions in parallel with `strategy.matrix`.

:::tip
Start simple. A workflow that runs `npm test` on push is already a huge improvement over manual testing. Add complexity only when you need it.
:::

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [GitHub Actions desde CERO - midudev](https://www.youtube.com/watch?v=Icnv1DDAQOg)
- [Cache examples by language](https://github.com/actions/cache/blob/master/examples.md#examples)
  - [Python PIP](https://github.com/actions/cache/blob/master/examples.md#python---pip)
  - [Node npm](https://github.com/actions/cache/blob/master/examples.md#node---npm)
- [Kaniko image builder action](https://github.com/aevea/action-kaniko)
- [Build images on GitHub Actions with Docker layer caching](https://evilmartians.com/chronicles/build-images-on-github-actions-with-docker-layer-caching)
- [Caching Docker builds: which approach is the fastest?](https://dev.to/dtinth/caching-docker-builds-in-github-actions-which-approach-is-the-fastest-a-research-18ei)
- [Deploy pull requests with GitHub Actions and GitHub Deployments](https://sanderknape.com/2020/05/deploy-pull-requests-github-actions-deployments/)

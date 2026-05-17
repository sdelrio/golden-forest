---
title: "OpenUI – Generative UI"
description: "OpenUI is a compact streaming‑first UI language that lets AI agents generate interactive React UIs up to 67 % more token‑efficient than JSON."
tags: ["openui", "generative-ui", "ai-agent", "token-efficiency"]
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';

# OpenUI – Generative UI

:::info
OpenUI is a **full‑stack generative UI framework** that combines a compact, streaming‑first language (OpenUI Lang) with a React runtime and ready‑to‑use component libraries. It reduces the token payload of model‑generated UI by up to **67 % compared with equivalent JSON**.
:::

## Why OpenUI?

- **Token efficiency** – Benchmarks show a 2/3 reduction in token count for the same UI definition.
- **Streaming‑first** – UI is rendered incrementally as the model streams tokens, giving instant visual feedback.
- **Component‑driven** – Define a library of components; the model can only emit those, guaranteeing a safe UI surface.
- **Typed contracts** – Zod schemas describe component props, enabling validation before rendering.

## How It Works

<AccordionGroup>
  <Accordion title="Core Architecture" icon="lucide:layers-3">
    The runtime follows a simple pipeline:
    ```mermaid
    flowchart LR
        A[Component Library] --> B[System Prompt]
        B --> C[LLM]
        C --> D[OpenUI Lang Stream]
        D --> E[Renderer]
        E --> F[Live UI]
    ```
  </Accordion>
  <Accordion title="Key Packages" icon="tabler:packages">
    - `@openuidev/react-lang` – parser & renderer.
    - `@openuidev/react-headless` – chat state & streaming adapters.
    - `@openuidev/react-ui` – pre‑built layout components.
    - `@openuidev/cli` – project scaffolding.
  </Accordion>
</AccordionGroup>

## Quick Start

<Steps>
  <Step title="Scaffold a new app">
    ```bash
    npx @openuidev/cli@latest create --name genui-chat-app
    cd genui-chat-app
    echo "OPENAI_API_KEY=sk-your-key-here" > .env
    npm install
    npm run dev
    ```
  </Step>
  <Step title="Add a component library">
    Edit `src/components/library.js` to expose the components you want the model to use.
  </Step>
  <Step title="Prompt the model">
    Use the provided `generate` helper to send the system prompt generated from your library to the LLM.
  </Step>
</Steps>

## Resources

<CardGroup cols={2}>
  <Card title="OpenUI Playground" href="https://www.openui.com/playground" icon="mdi:play-circle" >
    Try the live demo – pick a component library and watch the UI render token‑by‑token.
  </Card>
  <Card title="GitHub Repository" href="https://github.com/thesysdev/openui" icon="mdi:github" >
    Browse the source, benchmarks, and contribute.
  </Card>
</CardGroup>

## References

- **Official site** – [OpenUI](https://openui.com)
- **GitHub repo** – [GitHub](https://github.com/thesysdev/openui)
- **Documentation** – [Docs](https://openui.com/docs)
- **Benchmarks (token‑efficiency)** – [Benchmarks](https://github.com/thesysdev/openui/tree/main/benchmarks)
- **Community Discord** – [Discord](https://discord.com/invite/Pbv5PsqUSv)

:::tip
OpenUI ships an **Agent Skill** (`skills/openui`) that lets AI assistants scaffold, build, and debug OpenUI apps directly from chat.
:::

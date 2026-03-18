---
title: "OpenCode CLI"
description: "How to use OpenCode with free model options including Google Gemini and other providers."
tags:
  - AI
  - tools
  - OpenCode
  - free
  - Google
---
# OpenCode

OpenCode is an open‑source command‑line interface that lets you interact with a variety of large‑language models and APIs from different providers. It abstracts away individual SDKs and provides a uniform `opencode` command for sending prompts, managing sessions, and even running code. One of its strengths is the ability to plug in different authentication methods and backends, which makes it handy for experimenting with free or low‑cost LLM access.

You can use OpenCode with Google’s free plan by installing the `opencode-gemini-auth` plugin. This allows you to authenticate with your Google account and consume your free Gemini quota without needing an API key. It’s especially useful if you have access to a free Google AI subscription (such as student offers or plans available in India) or if you’re simply using Gemini’s free tier.

## Steps to set up OpenCode with Google’s free plan

* Install OpenCode using the official script:

```bash title="Run the following in your terminal"
curl -fsSL https://opencode.ai/install | bash
```

* Configure the Google authentication plugin in your configuration file (`~/.config/opencode/opencode.json`):

```json title="~/.config/opencode/opencode.json"
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-gemini-auth@latest"]
}
```

* Authenticate with Google:


```bash title="Run the following in your terminal"
opencode auth login
```

An OAuth window will open. Choose **Google** and then **OAuth with Google (Gemini CLI)**.

### Use the free models

Once authenticated, you'll be able to access models such as:

```txt title="Some of the free models"
Gemini 3.1 Pro preview (1M+ context)
Gemini 3 Pro preview (1M+ context)
Gemini 3 Flash preview
Gemini Flash Lite
Gemini 2.5 pro
Gemini 2.5 flash
```

## Other free options

While the Google free plan is covered above, OpenCode can also be used with a number of other no‑cost or trial resources:

* **Self‑hosted models** – run local LLMs such as Llama‑2, Mistral, or GPT4All via `opencode` adapters; no external API fees apply beyond your own hardware.
* **OpenAI trial credits** – sign up for a new account to get $5–$18 of free usage, then configure `opencode` with the `openai` provider.
* **Hugging Face Hub** – many community models are accessible via their inference API with a limited free tier, which can be plugged into OpenCode using `hf` credentials.
* **Other providers** – Anthropic, Cohere, and others frequently offer free tiers or developer credits; OpenCode’s plugin system makes it easy to add support for these services.

## Important notes:
- The free plan has quota limits, but they are sufficient for personal use.
- If you use Antigravity (an additional integration), you can access Claude Opus 4.5 and Gemini 3 Pro for free, although [some users warn that this may violate Google’s Terms of Service](https://www.reddit.com/r/GoogleAntigravityIDE/comments/1qgx07v/comment/o0fz6os/). It’s recommended to use a test or secondary account if you decide to use Antigravity (opencode-antigravity-auth) plugin, to avoid suspension risks.

## Agent Skills

### Symbolic Link (Symlink) Support
Symlinks are the recommended mechanism for managing the `.agents/skills` directory. During installation, the setup wizard will prompt you to enable symbolic links. This creates a centralized "source of truth" in a universal directory, such as `.agents/skills`.

This configuration allows multiple agents to share a single capability set. Agent-specific directories (e.g., `.opencode/skills`) will contain pointers to the actual files in `.agents`, ensuring consistency across all your AI tools and eliminating data redundancy.

### Discovery and Flexibility
OpenCode offers significant flexibility compared to other agentic interfaces. It automatically scans multiple paths (including `.agents` and `.opencode`) to discover and register new skills. Its adaptive directory sensing means you are not restricted to a single rigid folder structure.

### Refreshing Capabilities
To register a newly installed or manually created skill, you must restart the OpenCode session. Relaunching the CLI allows the system to index the new directory contents and list the updated capabilities within the assistant interface. You can use `/session` command to restore your last session after restart.

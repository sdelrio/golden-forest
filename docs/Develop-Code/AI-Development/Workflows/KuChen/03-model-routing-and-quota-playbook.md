# Model Routing & Quota Playbook

Kun is model-agnostic on purpose: his routing rules live in a plain text file that tells First Mate which harness, model, and reasoning effort to use for each kind of task. Here's the full routing table and the economics behind it.

[Download WezTerm Config](https://www.davidondrej.com/files/kun-chen-podcast/wezterm.lua)

## The routing table

| Task | Model | Harness | Why |
| --- | --- | --- | --- |
| **Orchestration (First Mate)** | GPT-5.6 Sol @ x-high | Pi | Juggles huge context and needs real reasoning. X-high is his sweet spot; surprisingly fast, and it doesn't burn quota the way Ultra does. |
| **High-complexity tech / product design** | Fable | Claude Code | "The depth and the creativity that I really like." He rations his Claude quota for exactly these tasks (Anthropic models only in Claude Code; other harnesses are banned). |
| **Day-to-day coding** | GPT-5.6 Sol, reasoning dialed per task | Pi | Little reason to use a smaller model: dialing Sol's reasoning level down gives a smarter model at lower cost. |
| **Adversarial code review** | GPT-5.6 Sol @ medium | No Mistakes | GPT models since 5.5 are the most thorough edge-case reviewers he's compared. |
| **News / X research** | Grok 4.5; "Opus on fast mode" | Grok Build | Bundled with his existing X subscription, and Grok Build gives free X API read/search access that would otherwise cost money. |
| **Home assistant (lights, music)** | Luna | Not applicable | Pure speed; it just needs to be really fast. |
| **Occasional sessions** | various | OpenCode | Nice TUI, but Pi keeps winning because everything about it can be customized with plugins. |

## What he avoids, and why

- **Ultra modes.** "Ultra" isn't really a reasoning level; it's a prompt that aggressively fans out sub-agents, and every sub-agent is also ultra. A token bonfire.
- **Weak models on hard problems.** On the DeepSuite benchmark (his most trusted; new enough to be uncontaminated), Sonnet 5 at max reasoning costs more than Fable while being less capable. A model that isn't smart enough just burns tokens failing.
- **Codex CLI as a harness.** Good out-of-the-box image generation, but weak at background processes and missing the bells and whistles. He uses Pi for GPT models instead.
- **API pricing.** His past month at API prices would have cost over $10,000. For individuals, subscriptions are the only sane option.
- **Local / open-source models.** Not ideological; his Mac Mini is a precious resource and a local model would compete with everything else running on it, and cloud-hosted open models don't save enough to be worth switching.

## Surviving on quotas

1. **Stack subscriptions across vendors** Claude, OpenAI, X/Grok; each brings its own quota pool.
2. **Watch quota %, not tokens** A menu-bar widget (Baby Menu) plus a quota tool expose live quota data; even to First Mate, so it avoids routing work to a crewmate whose subscription is nearly dry.
3. **Pace against the reset** Be more aggressive where resets are generous; ration where they aren't. When his Claude quota ran out, one line in the rules file switched the default model.
4. **Save the premium model for what needs it** Remaining Fable quota is reserved for the high-complexity design work nothing else does as well.

His wishlist for the labs: a higher tier than $200, and a *slow-but-cheap* mode; the opposite of fast mode; for background tasks where total work done matters more than latency.

## The token-efficiency layer

Beyond routing, Kun attacks cost at the interface level. Most CLIs and MCP servers were designed for humans or for machine parsing; not for agents. So he benchmarked them:

- For GitHub operations, the **GitHub CLI beats the GitHub MCP server in every way** on his benchmarks; cheaper, faster, fewer turns. He calls the GitHub MCP server "the most inefficient and unnecessary MCP server out there."
- His **Chrome DevTools "Axi" wrapper** is the same MCP server under the hood with only the interface changed; and cuts average cost by over 20%.
- He distilled this into **10 public principles for agent-ergonomic CLIs**; e.g. token-efficient output instead of JSON, minimal default schemas; plus a growing catalog of wrappers (GitHub, Chrome DevTools, quota, npm, SQLite and more, several community-contributed).

**The takeaway:** if quota is your bottleneck, don't just route models; switch to tools that speak agent. Same functionality, measurably fewer tokens. The principles, benchmarks, and catalog are on Kun's Axi site, linked under David's video.


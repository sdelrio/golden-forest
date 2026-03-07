---
title: "ClaudeKit: Spec-Driven AI Development Workflow"
hide_table_of_contents: true
---

# ClaudeKit: Spec-Driven AI Development Workflow

ClaudeKit is a structured development methodology that combines **spec-driven development** with **test-driven development (TDD)** principles. Designed for building complex, high-quality systems with AI assistance.

## Core Philosophy

Instead of jumping straight to code, ClaudeKit enforces a multi-phase approach:

```
/docs/init   → Scan & generate specs
/docs/brainstorm → Challenge & refine requirements  
/docs/plan   → Create phased implementation plan
/docs/clear  → Reset context for clean output
/docs/code:auto → Implement phase-by-phase
```

> **Result:** Spec-driven development + TDD baked in

## The Workflow

### 1️⃣ `/docs:init` — Scan & Generate Specs

```bash title="Terminal"
/docs:init
```

Scans your entire codebase to generate:
- Architecture specifications
- Data model definitions
- API contract outlines
- Component interfaces
- Dependency graphs

**Output:** Comprehensive specification documents ready for review.

### 2️⃣ `/brainstorm` — Challenge & Refine

```bash title="Terminal"
/docs/brainstorm
```

AI challenges you with probing questions until requirements are solid:

- What are the edge cases?
- What happens when input is missing?
- How do users actually use this feature?
- What fails first in production?

**Output:** Requirements that have survived rigorous questioning.

### 3️⃣ `/plan` — Phased Implementation Plan

```bash title="Terminal"
/docs/plan
```

Creates a phased implementation strategy:

- **Phase 1:** Core infrastructure
- **Phase 2:** Data access layer
- **Phase 3:** Business logic
- **Phase 4:** UI/UX layer
- **Phase 5:** Testing & integration

Each phase has clear deliverables and exit criteria.

### 4️⃣ `/clear` — Reset Context

```bash title="Terminal"
/docs/clear
```

Resets context window for clean implementation:

- Dumps previous conversations
- Clears cached assumptions
- Focuses on current phase only
- Prevents context contamination

### 5️⃣ `/code:auto` — Phase-by-Phase Implementation

```bash title="Terminal"
/docs/code:auto
```

Implements the system phase by phase:

1. Reviews specification
2. Identifies current phase tasks
3. Generates production code
4. Includes test cases
5. Handles edge cases
6. Documents decisions

## Benefits

| Aspect | Traditional | ClaudeKit |
|--------|-------------|------------|
| **Requirements** | Assumed | Questioned until solid |
| **Architecture** | Emergent | Spec-first |
| **Errors** | Caught in testing | Caught in planning |
| **Rewrites** | Common | Rare |
| **Testing** | After coding | Built-in |

## When to Use

- ✅ Large codebases needing refactoring
- ✅ Complex systems with multiple components
- ✅ Projects with tight deadlines
- ✅ When AI coding assistance is primary tool
- ✅ Greenfield development

## Example Session

```console
$ /docs:init
> Scanning codebase...
> Generated 7 specifications
> ✓ Architecture.md
> ✓ DataModels.md
> ✓ API_Contracts.md

$ /brainstorm
> Question: What if the user uploads a corrupted file?
> Answer: Add validation layer
> Question: How do we handle partial failures?
> Answer: Implement transactional rollback
> ✓ Requirements solidified

$ /plan
> Phase 1: Setup & configuration
> Phase 2: Validation layer
> Phase 3: Processing engine
> Phase 4: Retry logic
> Phase 5: Testing suite

$ /clear

$ /code:auto
> Implementing Phase 1...
> ✓ config/schema.ts (120 lines)
> ✓ config/validators.test.ts (34 lines)
```

## Implementation Tips

### For Humans

1. **Run spec commands first** before asking AI to code
2. **Engage with brainstorm questions** - don't rush past them
3. **Review phased plans** - adjust before implementation starts
4. **Clear between phases** to avoid context confusion

### For AI Assistants

When using AI with ClaudeKit:

1. Always start with `/docs:init` output
2. Answer brainstorm questions thoughtfully
3. Implement only the current phase
4. Write tests alongside code

### Integration with Existing Workflows

ClaudeKit integrates with:
- **Cursor IDE** - Use in Cursor's `@` command references
- **VS Code AI** - Run commands in integrated terminal
- **GitHub Copilot** - Generate specs for Copilot implementation
- **Custom agents** - Build your own workflow tools

## Comparison: Other Workflows

| Workflow | Approach | Best For |
|----------|----------|----------|
| **ClaudeKit** | Spec-first, phased | Complex systems |
| **Chat-first** | Prompt → Code | Simple scripts |
| **TDD** | Tests → Code | Refactoring existing code |
| **Traditional** | Design → Code → Test | Small projects |

## FAQ

### Q: How long does a full session take?
**A:** Planning phase takes 10-15 minutes of back-and-forth. Implementation varies by complexity.

### Q: Do I need to type commands myself?
**A:** No - you can integrate this workflow into any AI chat interface by following the command sequence.

### Q: What if I want to skip phases?
**A:** Not recommended. Each phase adds quality that saves time later. But `/plan` can be skipped for very small projects.

### Q: Can this work with existing code?
**A:** Yes. Use `/docs:init` to understand existing architecture, then apply incremental improvements.

### Q: What's the minimum spec?
**A:** For small features, a single `/docs:init` of existing code plus `/brainstorm` is sufficient.

## References

- [ClaudeKit Toolkit](https://app.aitmpl.com/featured/claudekit)

## See Also

- [Qwen3.5 Small Series](../Models-LLMs/Qwen3.5-Small-Series.md) - Model details
- [System Prompts and Personas](../Prompt-Library/System-Prompts-and-Personas.mdx) - AI role configuration
- [Gemini Prompts](../Prompt-Library/gemini-prompts.md) - Alternative AI workflow

---

## License

MIT © 2024 - Part of the Golden Forest documentation

# write-article

This skill helps you create high-quality Docusaurus MDX articles for the **The Golden Forest** digital garden. It transforms raw text or content from a URL into a structured, well-formatted article that adheres to the project's design system and component usage.

## Guidelines

### 1. Target Location
- This skill MUST only be executed within the `/docs` directory or its subdirectories.
- Always determine the appropriate subfolder based on the content (e.g., `docs/Develop-Code/`, `docs/Games/`, etc.).

### 2. Frontmatter Configuration
Every article must start with a YAML frontmatter block. **Note**: If an existing article has a `sidebar_label` that is shorter than the `title`, it must be preserved (it is used to prevent menu overflow).
```yaml
---
title: "Clear and Concise Title"
description: "A brief summary for SEO and social sharing (1-2 sentences)."
tags: [tag1, tag2, tag3]
sidebar_position: 10 # Adjust based on existing files in the directory
sidebar_label: "Shorter Title" # Optional: preserve if already present and shorter than title
---
```

### 3. Component Imports

Include necessary imports at the top of the file, after the frontmatter. 

:::warning
**IMPORT CHECKLIST**: Only include imports for components actually used in the article. Leaving unused imports active will cause MDX compilation errors.
:::

```javascript
import Tabs from '@theme/Tabs';                                        {/* Required by: <Tabs>, <TabItem> */}
import TabItem from '@theme/TabItem';                                  {/* Required by: <TabItem> inside <Tabs> */}
import Card from '@site/src/components/Card/Card';                      {/* Required by: <Card> */}
import CardGroup from '@site/src/components/Card/CardGroup';            {/* Required by: <CardGroup> */}
import Accordion from '@site/src/components/Accordion/Accordion';      {/* Required by: <Accordion> */}
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup'; {/* Required by: <AccordionGroup> */}
import Steps from '@site/src/components/Steps/Steps';                   {/* Required by: <Steps>, <Step> */}
import Step from '@site/src/components/Steps/Step';                     {/* Required by: <Step> inside <Steps> */}
import CodeGroup from '@site/src/components/CodeGroup/CodeGroup';       {/* Required by: <CodeGroup> */}
import ParamField from '@site/src/components/ParamField/ParamField';    {/* Required by: <ParamField> */}
import XmlChar from '@site/src/components/XmlChar/XmlChar';             {/* Required by: <XmlChar> */}
```

### 4. Standard Document Structure

Every article should follow this general anatomy to ensure consistency:

1.  **Main Title**: Use a single `#` heading.
2.  **Summary/Introduction**: A 1-2 paragraph overview immediately following the title. It should explain what the tool/mechanic is and its primary value proposition.
3.  **Core Content**: Domain-specific sections (Advantages, Setup, Rules, etc.) using `##` headings.
4.  **References**: A mandatory final section (see below).

### 5. Standard Sections

#### A. Admonitions
Use Docusaurus admonitions to highlight key points. Common patterns:
- `:::info`: For performance metrics, token savings, or key value propositions.
- `:::tip`: For best practices, DM tips, or implementation shortcuts.
- `:::warning`: For common pitfalls or breaking changes.

#### B. References Section
Always include a `## References` section at the end. Use a bulleted list with descriptive labels:
- `[Official Documentation](url)`
- `[GitHub Repository](url)`
- `[Related Article](url)`

### 6. Formatting & Visuals
- **Headings**: Use `##` for major sections and `###` for sub-sections.
- **Visuals**: Use standard markdown for images.
- **Diagrams**: Use Mermaid.js (`mermaid` code blocks) for workflows or architecture.

### 7. Template Variations

For detailed structures, refer to the following templates in `.agents/skills/write-article/resources/templates/`:

- **Develop-Code**: `develop-code.md` (General tech/tools)
- **AI Tools**: `ai-tools.md` (Focus on token efficiency, agent integration, and AI-specific workflows)
- **Games**: `games.md` (Focus on mechanics, rules, and structured data)
- **Homelab/Domotic**: `homelab-domotic.md` (Focus on setup, hardware, and step-by-step guides)

#### Quick Reference Templates:

##### Tool/Technology (Develop-Code)
Focus on technical details, performance, and comparisons.
```markdown
# [Tool Name]

## Summary
Brief explanation of what the tool is.

## Advantages & Performance
- Feature 1
- Feature 2
:::info
Highlight a specific performance gain or unique value proposition.
:::

## Installation & Setup
<Steps>
 <Step title="Install">
  ```bash
  tool install
  ```
 </Step>
</Steps>

## References
- [Official Site](url)
```

#### B. Process/Tutorial (Productivity/Homelab)
Focus on step-by-step guides.
```markdown
# [Task Title]

## Prerequisites
- List of requirements.

## Step-by-Step Guide
<Steps>
 <Step title="Initialize">
  Do X.
 </Step>
 <Step title="Configure">
  Edit Y.
 </Step>
 <Step title="Deploy">
  Run Z.
 </Step>
</Steps>

## Frequently Asked Questions
<Accordion title="How to fix X?">
Details about the fix.
</Accordion>
```

#### C. Gaming/D&D (Games)
Focus on mechanics and structured data.
```markdown
# [Game Mechanic/Setting]

## Rules Overview
Summary of how it works.

## Character Integration
:::tip
Use `XmlChar` or `Feat` components if documenting D&D 5e content.
:::
```

## Component Reference

Use these components to enhance the visual appeal and interactivity of your articles.

### Layout & Utility Components

| Component | Usage | Props | Where to use |
| :--- | :--- | :--- | :--- |
| `Card` | `<Card title="Title" icon="mdi:icon" href="url">Content</Card>` | `title`, `icon`, `href` (optional) | Highlighting specific external links, related articles, or key features. |
| `CardGroup` | `<CardGroup cols={2}><Card ... /></CardGroup>` | `cols` (1-4) | Wrapping multiple `Card` components into a responsive grid. |
| `Accordion` | `<Accordion title="Title" defaultOpen={false}>Content</Accordion>` | `title`, `defaultOpen` | Progressive disclosure of information, FAQs, or technical deep-dives. |
| `Steps` | `<Steps>1. Step 1...</Steps>` | `children` | Styled numbered lists for multi-step processes or installation guides. |
| `CodeGroup` | `<CodeGroup> ```bash ... ``` ```json ... ``` </CodeGroup>` | `children` | Showing alternative code implementations, or "Request vs Response" examples. |
| `Tabs` | Standard Docusaurus tabs | `groupId` (for sync) | Comparing different formats (JSON vs YAML) or platform-specific instructions. |
| `ParamField` | `<ParamField path="name" type="string">Desc</ParamField>` | `path`, `type` | Documenting configuration options, API parameters, or object schemas. |

### Domain-Specific Components (Gaming/D&D)

| Component | Usage | Props | Where to use |
| :--- | :--- | :--- | :--- |
| `XmlChar` | `<XmlChar filename="name.xml" display="medium" />` | `filename`, `display`, `image` | Rendering character sheets for the "Games" section. Displays stats, abilities, and portrait. |
| `DnDPointBuy` | `<DnDPointBuy />` | None | Interactive tool for calculating ability scores in D&D articles. |
| `FeatBrowser` | `<FeatBrowser />` | None | Searchable directory for D&D feats. |
| `FeatTable` | `<FeatTable />` | None | Summary table for D&D feats. |

---

## Execution Steps

1. **Analyze Input**: Read the provided text or URL content.
2. **Identify Section**: Determine the best folder under `/docs`.
3. **Draft Article**:
    - Write frontmatter.
    - Select and import components.
    - Structure content into logical sections.
    - Apply formatting (bolding, lists, admonitions).
4. **File Creation**: Write the result to a new `.md` file in the chosen subdirectory.
5. **Validation**: Ensure no broken internal links and valid MDX syntax.
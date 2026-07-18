---
sidebar_position: 4
---

# Content Freshness Badge

The `FreshnessBadge` component displays an inline badge indicating how fresh or stale an article's content is, based on the `last_updated` frontmatter field.

## Usage

Add `last_updated` to your frontmatter, then import and render the component:

```mdx
---
title: "My Article"
last_updated: 2026-07-05
---

import FreshnessBadge from '@site/src/components/FreshnessBadge/FreshnessBadge';

<FreshnessBadge lastUpdated={frontMatter.last_updated} />

# My Article

Content goes here...
```

## Thresholds

| Age | Level | Color |
|-----|-------|-------|
| &lt; 60 days | Fresh | Green |
| 60–180 days | Stale | Amber |
| &gt; 180 days | Outdated | Red |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lastUpdated` | `string` | **required** | ISO date string (`YYYY-MM-DD`) |
| `showSuggestUpdate` | `bool` | `true` | Show "Suggest Update" link when stale |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size |

## Suggest Update Link

When content is stale or outdated, the badge renders a "Suggest update" link that opens a pre-filled GitHub issue with the `content-freshness` label.

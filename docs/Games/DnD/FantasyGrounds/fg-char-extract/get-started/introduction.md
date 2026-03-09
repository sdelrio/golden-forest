---
title: Introduction
description: Extract character sheets from Fantasy Grounds campaigns into individual XML files
sidebar_position: 10
---

# Fantasy Grounds Character Extractor

A powerful Go CLI tool that parses Fantasy Grounds `db.xml` campaign files and extracts individual character sheets into separate, portable XML files.

import { Icon } from '@iconify/react';

[<Icon icon="mdi:github" width="32px" /> Releases](https://github.com/sdelrio/fg-char-extract/releases)

## Overview

Fantasy Grounds Character Extractor simplifies character sheet management by allowing you to extract character data from your campaign's `db.xml` file. Whether you're backing up characters, sharing them between campaigns, or analyzing character data, this tool makes it effortless.

The tool intelligently parses the Fantasy Grounds XML structure, filters out unnecessary metadata, and generates clean character files with the naming convention `character_<ID>_<Level>.xml`.

## Key Features

<CardGroup cols={2}>
  <Card title="Zero Dependencies" icon="cube">
    Built using only Go's standard library. No external dependencies means faster installation and fewer compatibility issues.
  </Card>

  <Card title="Smart Filtering" icon="filter">
    Automatically removes sensitive and unnecessary tags like `<public>` and `<holder>` information during extraction.
  </Card>

  <Card title="Skill Calculation" icon="calculator">
    Automatically calculates skill totals based on ability bonuses and proficiency bonuses, injecting them into the character XML.
  </Card>

  <Card title="Cross-Platform" icon="laptop">
    Pre-built binaries available for macOS (Intel & Apple Silicon), Windows, and Linux. Works everywhere Go runs.
  </Card>

  <Card title="Preserves Structure" icon="code">
    Maintains original XML formatting and structure while ensuring proper character encoding and escaping.
  </Card>

  <Card title="Batch Processing" icon="bolt">
    Extracts all characters from a campaign file in a single command. Perfect for backing up entire campaigns.
  </Card>
</CardGroup>

## Use Cases

### Campaign Backup
Regularly extract character sheets to create version-controlled backups of your player characters.

### Character Portability
Move characters between campaigns by extracting them from one `db.xml` and importing into another.

### Data Analysis
Extract character data for statistical analysis, character progression tracking, or campaign management tools.

### Character Sharing
Share individual character files with other game masters or players without exposing your entire campaign.

## How It Works

1. **Parse**: The tool uses Go's `encoding/xml` package to parse the Fantasy Grounds `db.xml` file
2. **Filter**: Removes unnecessary tags and metadata while preserving character data
3. **Enhance**: Calculates skill totals based on ability bonuses and proficiency
4. **Extract**: Writes each character to a separate XML file with proper formatting

:::note
The tool generates files in the format `character_<ID>_<Level>.xml`, where ID is the Fantasy Grounds internal ID and Level is the character's current level.
:::

## Get Started

Ready to extract your characters? Follow our quickstart guide to get up and running in minutes.

<Card title="Quickstart Guide" icon="rocket" href="../quickstart/">
  Extract your first character in under 2 minutes
</Card>

## Technical Details

- **Language**: Go 1.25.7+
- **License**: MIT
- **Dependencies**: Standard library only
- **Platforms**: macOS, Windows, Linux


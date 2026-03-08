---
title: Quickstart
description: Extract your first Fantasy Grounds character in minutes
sidebar_position: 30
---

# Quickstart Guide

Get up and running with FG Character Extractor in just a few steps. This guide will walk you through extracting your first character sheet.

<Note>
Before starting, make sure you have [installed FG Character Extractor](../installation/).
</Note>

## Extract Your First Character

<Steps>
  <Step title="Locate Your Fantasy Grounds Campaign">
    Find your Fantasy Grounds campaign folder. The default locations are:

    **macOS**:
    ```bash
    ~/Library/Application Support/Fantasy Grounds/campaigns/
    ```

    **Windows**:
    ```bash
    %APPDATA%\Fantasy Grounds\campaigns\
    ```

    **Linux**:
    ```bash
    ~/.local/share/Fantasy Grounds/campaigns/
    ```

    Inside your campaign folder, you'll find a file named `db.xml`. This is the file you'll extract from.

    <Tip>
    You can also search for `db.xml` files on your system to find your campaigns quickly.
    </Tip>
  </Step>

  <Step title="Run the Extraction Command">
    Open a terminal and run the extractor, pointing it to your campaign's `db.xml` file:

    ```bash
    fg-char-extract "/path/to/your/campaign/db.xml"
    ```

    **Example**:
    ```bash
    # macOS/Linux
    fg-char-extract "~/Library/Application Support/Fantasy Grounds/campaigns/MyAwesomeCampaign/db.xml"

    # Windows (PowerShell)
    fg-char-extract "$env:APPDATA\Fantasy Grounds\campaigns\MyAwesomeCampaign\db.xml"
    ```

    <Info>
    If you run `fg-char-extract` without arguments in a directory containing `db.xml`, it will automatically use that file.
    </Info>

    **Running from the campaign directory**:
    ```bash
    cd "~/Library/Application Support/Fantasy Grounds/campaigns/MyAwesomeCampaign"
    fg-char-extract
    ```
  </Step>

  <Step title="Review the Extracted Characters">
    The tool will extract all characters and display progress messages:

    ```bash
    INFO Character extracted successfully filename=character_id-00001_5.xml
    INFO Character extracted successfully filename=character_id-00002_3.xml
    INFO Character extracted successfully filename=character_id-00003_7.xml
    ```

    Each character is saved as `character_<ID>_<Level>.xml` in your current directory.

    **File naming convention**:
    - `character_id-00001_5.xml` - Character with ID "id-00001" at level 5
    - `character_id-00002_3.xml` - Character with ID "id-00002" at level 3
    - `character_id-00003_0.xml` - Character with no level specified (defaults to 0)
  </Step>

  <Step title="Examine the Extracted XML">
    Open one of the extracted files to see the character data:

    ```bash
    cat character_id-00001_5.xml
    ```

    The file structure looks like this:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <root version="3.1" release="7|CoreRPG:3">
      <character>
        <id-00001>
          <name type="string">Thorin Ironforge</name>
          <level type="number">5</level>
          <profbonus type="number">3</profbonus>
          <abilities>
            <strength>
              <score type="number">16</score>
              <bonus type="number">3</bonus>
            </strength>
            <!-- more abilities -->
          </abilities>
          <skilllist>
            <id-00001>
              <name type="string">Athletics</name>
              <stat type="string">strength</stat>
              <prof type="number">1</prof>
              <total type="number">6</total> <!-- Auto-calculated! -->
            </id-00001>
            <!-- more skills -->
          </skilllist>
          <!-- more character data -->
        </id-00001>
      </character>
    </root>
    ```

    <Note>
    Notice the `<total>` element in skills - this is automatically calculated by the extractor based on the ability bonus and proficiency!
    </Note>
  </Step>
</Steps>

## What Gets Extracted?

The tool intelligently processes your character data:

### Included
- Character name, level, and class information
- Ability scores and bonuses
- Skills with auto-calculated totals
- Proficiency bonus
- Equipment and inventory
- Spells and features
- All custom character data

### Filtered Out
- `<public>` tags (visibility metadata)
- `<holder>` tags (ownership metadata)
- Other Fantasy Grounds internal metadata

<Tip>
The filtered tags are Fantasy Grounds-specific metadata that isn't needed for the character sheet itself.
</Tip>

## Understanding the Output

### Filename Format

```
character_<ID>_<Level>.xml
```

- **ID**: The Fantasy Grounds internal ID for the character (e.g., `id-00001`)
- **Level**: The character's current level (defaults to `0` if not set)

### Skill Calculation Enhancement

One of the key features is automatic skill total calculation:

```
Skill Total = Ability Bonus + (Proficiency × Proficiency Bonus)
```

**Example**:
- Strength Bonus: +3
- Proficiency Bonus: +3
- Athletics Proficiency: 1 (proficient)
- **Athletics Total = 3 + (1 × 3) = 6**

The extractor automatically adds `<total>` elements to each skill in the character sheet.

## Common Usage Patterns

### Extract from Current Directory

```bash
cd "~/Library/Application Support/Fantasy Grounds/campaigns/MyAwesomeCampaign"
fg-char-extract
```

### Extract to Specific Directory

```bash
mkdir ~/character-backups
cd ~/character-backups
fg-char-extract "~/Library/Application Support/Fantasy Grounds/campaigns/MyAwesomeCampaign/db.xml"
```

### Batch Process Multiple Campaigns

```bash
#!/bin/bash
for campaign in ~/Library/Application\ Support/Fantasy\ Grounds/campaigns/*/; do
  echo "Extracting from ${campaign}"
  fg-char-extract "${campaign}db.xml"
done
```

## Troubleshooting

### No Characters Extracted

<Warning>
If no characters are extracted, verify that:
1. Your `db.xml` file contains a `<charsheet>` or `<charsheets>` section
2. The file is a valid Fantasy Grounds campaign database
3. You have read permissions for the file
</Warning>

### Error: "opening db.xml: no such file or directory"

This means the tool can't find the `db.xml` file. Either:
1. Provide the full path to your `db.xml` file as an argument
2. Run the command from the directory containing `db.xml`

### Special Characters in Filenames

On Windows, use double quotes around paths with spaces:

```powershell
fg-char-extract "C:\Users\YourName\AppData\Roaming\Fantasy Grounds\campaigns\My Campaign\db.xml"
```

### Permission Denied

On macOS/Linux, ensure you have read permissions:

```bash
chmod +r /path/to/db.xml
```

## Next Steps

Now that you've extracted your first characters, explore more advanced usage:

<CardGroup cols={2}>
  <Card title="Command Reference" icon="terminal" href="../../usage/command-reference/">
    Learn all command-line options
  </Card>

  <Card title="Output Format" icon="code" href="../../usage/output-format/">
    Understand the character XML structure
  </Card>

  <Card title="Usage Examples" icon="lightbulb" href="../../usage/usage-examples/">
    See real-world usage patterns
  </Card>

  <Card title="Contribute" icon="github" href="https://github.com/sdelrio/fg-char-extract">
    Contribute to the project on GitHub
  </Card>
</CardGroup>

## Example Output

Here's what a successful extraction looks like:

```bash
$ fg-char-extract "~/FG/campaigns/LostMineOfPhandelver/db.xml"
INFO Character extracted successfully filename=character_id-00001_4.xml
INFO Character extracted successfully filename=character_id-00002_3.xml
INFO Character extracted successfully filename=character_id-00003_4.xml
INFO Character extracted successfully filename=character_id-00004_4.xml

$ ls -lh character_*.xml
-rw-r--r--  1 user  staff    48K Mar  8 14:23 character_id-00001_4.xml
-rw-r--r--  1 user  staff    52K Mar  8 14:23 character_id-00002_3.xml
-rw-r--r--  1 user  staff    45K Mar  8 14:23 character_id-00003_4.xml
-rw-r--r--  1 user  staff    51K Mar  8 14:23 character_id-00004_4.xml
```

<Tip>
You can safely re-run the extractor - it will overwrite existing character files with the latest data from your campaign.
</Tip>

## Getting Help

If you run into issues:

1. Check the [GitHub Issues](https://github.com/sdelrio/fg-char-extract/issues) for similar problems
2. Review the [source code](https://github.com/sdelrio/fg-char-extract) for implementation details
3. Open a new issue with:
   - Your operating system and version
   - The command you ran
   - The error message (if any)
   - A sample of your `db.xml` structure (without sensitive data)

Happy extracting!


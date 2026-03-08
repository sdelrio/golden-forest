---
title: Usage Examples
description: Real-world examples and usage patterns for the FG Character Extractor
sidebar_position: 30
---

# Usage Examples

This page demonstrates practical usage scenarios for the FG Character Extractor, from basic single-file extraction to advanced batch processing workflows.

## Basic Usage

### Extract from Current Directory

The simplest usage assumes `db.xml` is in your current directory:

```bash
# Navigate to your campaign directory
cd ~/Fantasy\ Grounds/campaigns/MyCampaign/

# Run extraction
fg-char-extract
```

**Output:**
```
2026/03/08 14:30:15 INFO Character extracted successfully filename=character_id-00001_5.xml
2026/03/08 14:30:15 INFO Character extracted successfully filename=character_id-00002_3.xml
```

### Extract from Specific File

Specify the full path to any Fantasy Grounds database:

```bash macOS/Linux
fg-char-extract ~/Fantasy\ Grounds/campaigns/LostMinesOfPhandelver/db.xml
```

```bash Windows
fg-char-extract "C:\Users\YourName\AppData\Roaming\SmiteWorks\Fantasy Grounds\campaigns\LostMinesOfPhandelver\db.xml"
```

<Note>
Use quotes around paths with spaces to ensure proper parsing.
</Note>

## Campaign Management

### Backup All Characters

Create a backup directory for extracted characters:

```bash
# Create backup directory
mkdir -p ~/fg-backups/$(date +%Y-%m-%d)

# Extract to backup location
cd ~/fg-backups/$(date +%Y-%m-%d)
fg-char-extract ~/Fantasy\ Grounds/campaigns/MyCampaign/db.xml
```

This creates a timestamped backup:
```
~/fg-backups/
  └── 2026-03-08/
      ├── character_id-00001_5.xml
      ├── character_id-00002_3.xml
      └── character_id-00003_7.xml
```

### Extract and Archive

Combine extraction with compression for long-term storage:

```bash
#!/bin/bash
# backup-campaign.sh

CAMPAIGN="MyCampaign"
BACKUP_DIR=~/fg-backups/$(date +%Y-%m-%d)-$CAMPAIGN
SOURCE="$HOME/Fantasy Grounds/campaigns/$CAMPAIGN/db.xml"

mkdir -p "$BACKUP_DIR"
cd "$BACKUP_DIR"

# Extract characters
fg-char-extract "$SOURCE"

# Create archive
tar -czf characters-$(date +%Y%m%d).tar.gz character_*.xml

# Optionally remove individual XML files
# rm character_*.xml

echo "Backup complete: $BACKUP_DIR"
```

## Batch Processing

### Process Multiple Campaigns

Extract characters from all campaigns:

```bash
#!/bin/bash
# extract-all-campaigns.sh

CAMPAIGNS_DIR=~/Fantasy\ Grounds/campaigns
OUTPUT_DIR=~/fg-extracts

for campaign in "$CAMPAIGNS_DIR"/*; do
  if [ -d "$campaign" ] && [ -f "$campaign/db.xml" ]; then
    campaign_name=$(basename "$campaign")
    echo "Processing: $campaign_name"
    
    mkdir -p "$OUTPUT_DIR/$campaign_name"
    cd "$OUTPUT_DIR/$campaign_name"
    
    fg-char-extract "$campaign/db.xml"
  fi
done

echo "All campaigns processed!"
```

**Output structure:**
```
~/fg-extracts/
  ├── LostMinesOfPhandelver/
  │   ├── character_id-00001_3.xml
  │   └── character_id-00002_3.xml
  ├── CurseOfStrahd/
  │   ├── character_id-00001_7.xml
  │   └── character_id-00002_6.xml
  └── StormKingsThunder/
      └── character_id-00001_9.xml
```

### Automated Daily Backups

Set up a cron job for automatic daily backups:

```bash crontab
# Run daily at 3 AM
0 3 * * * /home/yourusername/scripts/backup-campaign.sh >> /home/yourusername/fg-backups/backup.log 2>&1
```

<Tip>
Regular automated backups protect against data loss and make character recovery easier.
</Tip>

## Character Analysis

### Count Characters by Level

Use extracted files to analyze your campaign:

```bash
#!/bin/bash
# count-by-level.sh

for file in character_*.xml; do
  # Extract level from filename (format: character_id-xxxxx_LEVEL.xml)
  level=$(echo "$file" | sed 's/.*_\([0-9]*\)\.xml/\1/')
  echo "$level"
done | sort -n | uniq -c
```

**Example output:**
```
   2 3
   1 5
   3 7
```

### Extract Character Names

Parse XML to list all character names:

```bash
#!/bin/bash
# list-characters.sh

for file in character_*.xml; do
  name=$(grep '<name type="string">' "$file" | sed 's/.*<name[^>]*>\([^<]*\)<.*/\1/')
  level=$(echo "$file" | sed 's/.*_\([0-9]*\)\.xml/\1/')
  echo "$name (Level $level)"
done | sort
```

**Example output:**
```
Gandalf (Level 5)
Aragorn (Level 7)
Legolas (Level 6)
```

## Integration Examples

### Git Version Control

Track character changes over time:

```bash
#!/bin/bash
# track-characters.sh

REPO_DIR=~/fg-character-tracking
CAMPAIGN="MyCampaign"

# Initialize repo if needed
if [ ! -d "$REPO_DIR/.git" ]; then
  mkdir -p "$REPO_DIR"
  cd "$REPO_DIR"
  git init
fi

cd "$REPO_DIR"

# Extract latest characters
fg-char-extract ~/Fantasy\ Grounds/campaigns/$CAMPAIGN/db.xml

# Commit changes
git add character_*.xml
git commit -m "Update: $(date +%Y-%m-%d)"

echo "Characters tracked in git"
```

This allows you to:
- View character progression over time
- Recover old character states
- See what changed between sessions

### Share Characters

Extract and share a single character with another DM:

```bash
#!/bin/bash
# share-character.sh

CHARACTER_ID="id-00001"
OUTPUT_DIR=~/shared-characters

mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"

# Extract all characters
fg-char-extract ~/Fantasy\ Grounds/campaigns/MyCampaign/db.xml

# Find the specific character
character_file=$(ls character_${CHARACTER_ID}_*.xml)

if [ -f "$character_file" ]; then
  echo "Character exported: $character_file"
  echo "Share this file with your DM"
else
  echo "Character $CHARACTER_ID not found"
fi
```

## Troubleshooting Examples

### Check for Corrupted Database

Validate your db.xml before extraction:

```bash
#!/bin/bash
# validate-db.sh

DB_FILE="$1"

if [ ! -f "$DB_FILE" ]; then
  echo "Error: File not found: $DB_FILE"
  exit 1
fi

# Check if it's valid XML
if xmllint --noout "$DB_FILE" 2>/dev/null; then
  echo "✓ Valid XML"
  
  # Try extraction
  fg-char-extract "$DB_FILE"
  
  if [ $? -eq 0 ]; then
    echo "✓ Extraction successful"
  else
    echo "✗ Extraction failed"
    exit 1
  fi
else
  echo "✗ Invalid XML - database may be corrupted"
  exit 1
fi
```

### Verify Output Files

Ensure all extracted files are valid:

```bash
#!/bin/bash
# verify-output.sh

for file in character_*.xml; do
  if xmllint --noout "$file" 2>/dev/null; then
    echo "✓ $file is valid"
  else
    echo "✗ $file is invalid"
  fi
done
```

## Advanced Usage

### Custom Output Directory

Run extraction with output in a specific location:

```bash
#!/bin/bash
# extract-to-dir.sh

SOURCE="$1"
OUTPUT="$2"

if [ -z "$SOURCE" ] || [ -z "$OUTPUT" ]; then
  echo "Usage: $0 <source-db.xml> <output-directory>"
  exit 1
fi

mkdir -p "$OUTPUT"
cd "$OUTPUT"
fg-char-extract "$SOURCE"
```

**Usage:**
```bash
./extract-to-dir.sh ~/Fantasy\ Grounds/campaigns/MyCampaign/db.xml ~/exports/session-42
```

### Filter by Level

Extract only high-level characters:

```bash
#!/bin/bash
# extract-high-level.sh

MIN_LEVEL=5

# Extract all
fg-char-extract ~/Fantasy\ Grounds/campaigns/MyCampaign/db.xml

# Move high-level characters to separate directory
mkdir -p high-level
for file in character_*.xml; do
  level=$(echo "$file" | sed 's/.*_\([0-9]*\)\.xml/\1/')
  if [ "$level" -ge "$MIN_LEVEL" ]; then
    mv "$file" high-level/
  else
    rm "$file"  # or move to another directory
  fi
done
```

## Performance Tips

### Large Database Handling

For very large campaigns with many characters:

```bash
# Monitor extraction progress
time fg-char-extract large-campaign.xml

# Example output:
# real    0m2.341s
# user    0m1.892s
# sys     0m0.234s
```

<Info>
The tool is memory-efficient and uses streaming XML parsing, so it can handle large databases without loading everything into memory.
</Info>

### Parallel Processing

Process multiple campaigns simultaneously:

```bash
#!/bin/bash
# parallel-extract.sh

for campaign in ~/Fantasy\ Grounds/campaigns/*/db.xml; do
  campaign_name=$(basename $(dirname "$campaign"))
  (
    mkdir -p "output/$campaign_name"
    cd "output/$campaign_name"
    fg-char-extract "$campaign"
  ) &
done

wait
echo "All extractions complete!"
```

## Next Steps

<CardGroup cols={2}>
  <Card title="Command Reference" icon="terminal" href="./command-reference/">
    Review all command-line options
  </Card>
  <Card title="Output Format" icon="file-code" href="./output-format/">
    Understand the extracted XML structure
  </Card>
</CardGroup>

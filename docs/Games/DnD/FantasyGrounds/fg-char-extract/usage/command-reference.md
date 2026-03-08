---
title: Command Reference
description: Complete command-line reference for the FG Character Extractor tool
sidebar_position: 10
---

# Command Reference

The FG Character Extractor is a simple command-line tool with minimal options, designed to be easy to use while providing powerful character extraction capabilities.

## Basic Syntax

```bash
fg-char-extract [filename]
```

<ParamField path="filename" type="string" default="db.xml">
  Path to the Fantasy Grounds campaign database file. If not specified, the tool looks for `db.xml` in the current directory.
</ParamField>

## Command Behavior

When you run `fg-char-extract`, the tool:

<Steps>
  <Step title="Opens the database file">
    Opens the specified `db.xml` file (or `db.xml` in the current directory if no file is specified)
  </Step>
  
  <Step title="Parses character data">
    Scans for the `<charsheet>` or `<charsheets>` section and extracts all character entries
  </Step>
  
  <Step title="Filters sensitive data">
    Removes tags matching the pattern `public` or `holder*` from each character
  </Step>
  
  <Step title="Calculates skill totals">
    Automatically computes skill totals based on ability bonuses and proficiency values:
    ```
    total = ability_bonus + (proficiency * proficiency_bonus)
    ```
  </Step>
  
  <Step title="Writes output files">
    Creates individual XML files named `character_<ID>_<Level>.xml` in the current directory
  </Step>
</Steps>

## Exit Codes

The tool uses standard Unix exit codes:

| Exit Code | Meaning | Description |
|-----------|---------|-------------|
| `0` | Success | All characters extracted successfully |
| `1` | Error | An error occurred (see stderr for details) |

## Usage Examples

### Default Usage

Extract characters from `db.xml` in the current directory:

```bash
fg-char-extract
```

### Specify File Path

Extract characters from a specific file:

```bash
fg-char-extract /path/to/campaign/db.xml
```

```bash Windows
fg-char-extract C:\Users\YourName\AppData\Roaming\SmiteWorks\Fantasy Grounds\campaigns\MyCampaign\db.xml
```

### Relative Paths

Use relative paths from your current location:

```bash
fg-char-extract ../OtherCampaign/db.xml
```

## Output

The tool provides progress information via structured logging:

```bash Example output
2026/03/08 14:30:15 INFO Character extracted successfully filename=character_id-00001_5.xml
2026/03/08 14:30:15 INFO Character extracted successfully filename=character_id-00002_3.xml
2026/03/08 14:30:15 INFO Character extracted successfully filename=character_id-00003_7.xml
```

<Info>
The tool uses Go's `slog` package for structured logging, which outputs in a human-readable format by default.
</Info>

## Error Handling

If an error occurs, the tool will:
1. Log the error to stderr using structured logging
2. Exit with code `1`

### Common Errors

<Accordion title="File not found">
  ```
  ERROR Execution failed error="opening db.xml: no such file or directory"
  ```
  
  **Solution**: Verify the file path and ensure the file exists. Use an absolute path if needed.
</Accordion>

<Accordion title="Permission denied">
  ```
  ERROR Execution failed error="opening /path/to/db.xml: permission denied"
  ```
  
  **Solution**: Check file permissions. You may need read access to the source file and write access to the output directory.
</Accordion>

<Accordion title="Invalid XML">
  ```
  ERROR Execution failed error="decoding token: XML syntax error on line 42: unexpected EOF"
  ```
  
  **Solution**: The db.xml file may be corrupted or incomplete. Verify the file integrity or restore from backup.
</Accordion>

<Accordion title="Write failure">
  ```
  ERROR Execution failed error="writing character id-00001: no space left on device"
  ```
  
  **Solution**: Free up disk space or write to a different directory with available space.
</Accordion>

## Source Code Reference

The command-line argument parsing is handled in `main.go`:

```go main.go:13-17
func main() {
	filename := "db.xml"
	if len(os.Args) > 1 {
		filename = os.Args[1]
	}
```

Error handling and exit behavior:

```go main.go:19-22
	if err := run(filename); err != nil {
		slog.Error("Execution failed", "error", err)
		os.Exit(1)
	}
```

## Next Steps

<CardGroup cols={2}>
  <Card title="Output Format" icon="file-code" href="output-format/">
    Learn about the structure of extracted XML files
  </Card>
  <Card title="Usage Examples" icon="lightbulb" href="usage-examples/">
    See real-world usage scenarios and patterns
  </Card>
</CardGroup>

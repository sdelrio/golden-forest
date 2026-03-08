---
title: Output Format
description: Understanding the structure and format of extracted character XML files
sidebar_position: 20
---

# Output Format

The FG Character Extractor generates individual XML files for each character found in the Fantasy Grounds database. This page explains the output format, structure, and naming conventions.

## Filename Convention

Extracted character files follow this naming pattern:

```
character_<ID>_<Level>.xml
```

### Components

<ParamField path="ID" type="string">
  The unique character identifier from the Fantasy Grounds database (e.g., `id-00001`, `id-00002`)
</ParamField>

<ParamField path="Level" type="string">
  The character's level, extracted from the `<level>` tag. Defaults to `0` if not present or empty.
</ParamField>

### Examples

- `character_id-00001_5.xml` - Character with ID "id-00001" at level 5
- `character_id-00002_3.xml` - Character with ID "id-00002" at level 3
- `character_id-00003_0.xml` - Character with ID "id-00003" with no level specified

<Info>
The filename is generated in `main.go:178` using `fmt.Sprintf("character_%s_%s.xml", c.ID, level)`
</Info>

## XML Structure

Each extracted file follows this structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root version="3.1" release="7|CoreRPG:3">
	<character>
		<!-- Character data here -->
	</character>
</root>
```

### Root Element

The `<root>` element includes Fantasy Grounds version information:

```xml
<root version="3.1" release="7|CoreRPG:3">
```

<Note>
These attributes match the Fantasy Grounds Unity edition format and ensure compatibility with the game system.
</Note>

### Character Element

All character data is wrapped in a `<character>` element, which contains the complete character sheet information from the original database.

## Filtered Elements

The tool automatically removes certain tags during extraction to filter out sensitive or unnecessary data:

### Regex Pattern

The tool uses this regular expression to identify tags to skip:

```go main.go:43
ignoredRegex := regexp.MustCompile(`^(public|holder.*)$`)
```

### Filtered Tags

<AccordionGroup>
  <Accordion title="public">
    The `<public>` tag indicates whether a character is visible to players. This is campaign-specific metadata that's not needed in the extracted character file.
  </Accordion>
  
  <Accordion title="holder*">
    Tags starting with `holder` (like `<holder>`, `<holdername>`) contain information about which user controls the character. This is session-specific data that's filtered out.
  </Accordion>
</AccordionGroup>

## Enhanced Features

### Automatic Skill Total Calculation

One of the key features of the extractor is automatic skill total calculation. The tool reads ability bonuses and proficiency values, then computes skill totals:

```go main.go:220-228
if inSkillList && token.Name.Local == "stat" {
	abilityBonus := c.AbilityBonuses[currentSkillStat]
	total := abilityBonus + (currentSkillProf * c.ProfBonus)
	if err := enc.Flush(); err != nil {
		return err
	}
	if _, err := f.WriteString(fmt.Sprintf("\n\t\t\t\t\t<total type=\"number\">%d</total>", total)); err != nil {
		return err
	}
}
```

#### Formula

```
total = ability_bonus + (proficiency × proficiency_bonus)
```

Where:
- **ability_bonus**: The modifier for the relevant ability (STR, DEX, etc.)
- **proficiency**: 0 (not proficient), 1 (proficient), or 2 (expertise)
- **proficiency_bonus**: The character's proficiency bonus based on level

#### Example

For a level 5 character (proficiency bonus +3) with DEX modifier +2 and proficiency in Stealth:

```
Stealth total = 2 + (1 × 3) = 5
```

The tool automatically adds this calculated total to the skill data:

```xml
<skilllist>
	<id-00001>
		<prof type="number">1</prof>
		<stat>dexterity</stat>
		<total type="number">5</total>
	</id-00001>
</skilllist>
```

<Tip>
This automatic calculation saves manual work and ensures consistency across all extracted characters.
</Tip>

## Character Encoding

The tool properly escapes special XML characters during extraction:

```go main.go:245-248
s = strings.ReplaceAll(s, "&", "&amp;")
s = strings.ReplaceAll(s, "<", "&lt;")
s = strings.ReplaceAll(s, ">", "&gt;")
```

### Escaped Characters

| Character | Escaped As | Reason |
|-----------|-----------|--------|
| `&` | `&amp;` | XML entity delimiter |
| `<` | `&lt;` | XML tag delimiter |
| `>` | `&gt;` | XML tag delimiter |

<Note>
Carriage returns (`\r`) are normalized to newlines (`\n`) for cross-platform compatibility.
</Note>

## Data Preservation

The tool preserves:

- ✅ Original XML structure and hierarchy
- ✅ All character attributes and values
- ✅ Whitespace and formatting within character data
- ✅ All nested elements (abilities, skills, inventory, etc.)
- ✅ Type attributes (e.g., `type="number"`, `type="string"`)

## Example Output

Here's a simplified example of an extracted character file:

```xml character_id-00001_5.xml
<?xml version="1.0" encoding="UTF-8"?>
<root version="3.1" release="7|CoreRPG:3">
	<character>
		<id-00001>
			<name type="string">Gandalf</name>
			<level type="number">5</level>
			<profbonus type="number">3</profbonus>
			<abilities>
				<dexterity>
					<bonus type="number">2</bonus>
				</dexterity>
			</abilities>
			<skilllist>
				<stealth>
					<prof type="number">1</prof>
					<stat type="string">dexterity</stat>
					<total type="number">5</total>
				</stealth>
			</skilllist>
		</id-00001>
	</character>
</root>
```

## Validation

All output files are valid XML and can be:

- ✅ Parsed by standard XML parsers
- ✅ Validated against XML schemas
- ✅ Imported back into Fantasy Grounds
- ✅ Processed by other XML tools

## Next Steps

<CardGroup cols={2}>
  <Card title="Command Reference" icon="terminal" href="command-reference/">
    Learn about command-line options
  </Card>
  <Card title="Usage Examples" icon="lightbulb" href="usage-examples/">
    See practical examples of using the tool
  </Card>
</CardGroup>

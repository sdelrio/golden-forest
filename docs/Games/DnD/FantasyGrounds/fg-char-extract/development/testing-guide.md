---
title: 'Testing Guide'
description: 'Testing strategies and golden file patterns for FG Character Extractor'
---

## Test Overview

FG Character Extractor uses a **golden file testing pattern** to validate XML extraction. This approach compares generated output against pre-validated expected files to ensure consistent, correct extraction.

<Info>
  Tests are located in `main_test.go` with test data in the `tests/` directory.
</Info>

## Running Tests

Run the test suite using either Task or Go directly:

<CodeGroup>
```bash Task (Recommended)
task test
```

```bash Go Test
go test -v ./...
```

```bash Specific Test
go test -v -run TestRun
```

```bash Run Multiple Times
go test -v -run TestRun -count=10
```
</CodeGroup>

<Note>
  The `-v` flag provides verbose output showing each test step. Remove it for quieter output.
</Note>

## Test Structure

The project includes one comprehensive integration test that validates the entire extraction pipeline.

### Test Files

```
tests/
├── db.xml                                 # Input: Sample FG campaign database
└── expected_character_id-00001_4.xml      # Expected output: Golden file
```

### Test Flow

The `TestRun` function in `main_test.go:10-43` follows this pattern:

<Steps>
  <Step title="Setup and Cleanup">
    ```go
    defer os.Remove("character_id-00001_4.xml")
    ```
    Ensures generated files are cleaned up after the test, even if it fails.
  </Step>

  <Step title="Execute Extraction">
    ```go
    if err := run("tests/db.xml"); err != nil {
        t.Fatalf("run() failed: %v", err)
    }
    ```
    Runs the extraction against the test database file.
  </Step>

  <Step title="Verify File Creation">
    ```go
    if _, err := os.Stat(expectedOutput); os.IsNotExist(err) {
        t.Fatalf("Expected output file %s was not created", expectedOutput)
    }
    ```
    Confirms the output file was generated.
  </Step>

  <Step title="Compare with Golden File">
    ```go
    if !bytes.Equal(expectedContent, generatedContent) {
        t.Errorf("Generated content does not match golden file")
    }
    ```
    Performs byte-for-byte comparison with the expected output.
  </Step>
</Steps>

## Golden File Pattern

The golden file approach provides several benefits:

<CardGroup cols={2}>
  <Card title="Comprehensive Validation" icon="check-double">
    Validates the entire output structure, not just specific fields
  </Card>
  <Card title="Regression Detection" icon="shield">
    Catches unintended changes to output format
  </Card>
  <Card title="Easy Updates" icon="sync">
    When output format changes intentionally, update the golden file
  </Card>
  <Card title="Visual Diffs" icon="code-compare">
    Failed tests can be inspected with standard diff tools
  </Card>
</CardGroup>

### How Golden Files Work

1. **Initial Creation**: Generate expected output manually, verify it's correct, save as `expected_*.xml`
2. **Test Execution**: Run extraction and compare output to golden file
3. **Validation**: Byte-for-byte comparison ensures exact match
4. **Updates**: When output format changes, regenerate and review golden files

## Adding New Tests

To add a new test case:

<Steps>
  <Step title="Create test input">
    Add a new Fantasy Grounds database XML file to `tests/`:
    ```bash
    tests/new_scenario.xml
    ```
  </Step>

  <Step title="Generate expected output">
    Run the extraction manually to generate the output:
    ```bash
    go run main.go tests/new_scenario.xml
    ```
  </Step>

  <Step title="Verify and save golden file">
    Review the generated `character_*.xml` file carefully. If correct, move it to the tests directory:
    ```bash
    mv character_id-00002_5.xml tests/expected_character_id-00002_5.xml
    ```
  </Step>

  <Step title="Write the test function">
    Add a new test function to `main_test.go`:
    ```go
    func TestRunMultipleCharacters(t *testing.T) {
        expectedOutput := "character_id-00002_5.xml"
        defer os.Remove(expectedOutput)
        
        if err := run("tests/new_scenario.xml"); err != nil {
            t.Fatalf("run() failed: %v", err)
        }
        
        goldenFile := filepath.Join("tests", "expected_"+expectedOutput)
        expectedContent, err := os.ReadFile(goldenFile)
        if err != nil {
            t.Fatalf("Failed to read golden file: %v", err)
        }
        
        generatedContent, err := os.ReadFile(expectedOutput)
        if err != nil {
            t.Fatalf("Failed to read generated file: %v", err)
        }
        
        if !bytes.Equal(expectedContent, generatedContent) {
            t.Errorf("Content mismatch for %s", expectedOutput)
        }
    }
    ```
  </Step>

  <Step title="Run and validate">
    ```bash
    task test
    ```
  </Step>
</Steps>

## Debugging Test Failures

When tests fail, follow these debugging steps:

<AccordionGroup>
  <Accordion title="Compare files manually" icon="code-compare">
    Use a diff tool to see what changed:
    ```bash
    diff character_id-00001_4.xml tests/expected_character_id-00001_4.xml
    ```
    
    Or use a visual diff tool:
    ```bash
    code --diff character_id-00001_4.xml tests/expected_character_id-00001_4.xml
    ```
  </Accordion>

  <Accordion title="Check file sizes" icon="ruler">
    Compare file sizes to identify major discrepancies:
    ```bash
    ls -lh character_id-00001_4.xml tests/expected_character_id-00001_4.xml
    ```
  </Accordion>

  <Accordion title="Inspect XML structure" icon="code">
    Validate that both files are well-formed XML:
    ```bash
    xmllint --format character_id-00001_4.xml > generated_formatted.xml
    xmllint --format tests/expected_character_id-00001_4.xml > expected_formatted.xml
    diff generated_formatted.xml expected_formatted.xml
    ```
  </Accordion>

  <Accordion title="Review recent code changes" icon="git-alt">
    If the test previously passed, check what changed:
    ```bash
    git diff main.go
    git log --oneline -10
    ```
  </Accordion>

  <Accordion title="Update golden file if intentional" icon="check">
    If the output change is intentional and correct:
    ```bash
    # Verify the new output is correct
    cat character_id-00001_4.xml
    
    # Update the golden file
    cp character_id-00001_4.xml tests/expected_character_id-00001_4.xml
    
    # Run tests again
    task test
    ```
  </Accordion>
</AccordionGroup>

## Test Data Structure

The test database (`tests/db.xml`) contains:

- **Fantasy Grounds campaign data** with character sheets
- **Sample character** with ID `id-00001` at level 4
- **Ability scores and bonuses** for skill calculation testing
- **Skill list data** to validate proficiency bonus calculations
- **Tags to filter** (`<public>`, `<holder*>`) to test exclusion logic

The expected output (`tests/expected_character_id-00001_4.xml`) validates:

- Correct XML structure with proper root element
- Character data extraction and filtering
- Skill total calculation (ability bonus + proficiency bonus)
- Special character escaping (`&`, `<`, `>`)
- Proper XML formatting and indentation

## Running Tests in CI/CD

For continuous integration, run tests with additional flags:

```bash
go test -v -race -coverprofile=coverage.out ./...
```

<Note>
  The `-race` flag detects race conditions, and `-coverprofile` generates coverage data.
</Note>

## Test Coverage

Check test coverage:

```bash
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out
```

This opens an HTML report showing which lines are covered by tests.

## Next Steps

<CardGroup cols={2}>
  <Card title="Building" icon="hammer" href="./building-the-project">
    Learn about build commands and cross-platform compilation
  </Card>
  <Card title="Contributing" icon="code-pull-request" href="./contributing-guide">
    Review contribution guidelines and workflow
  </Card>
</CardGroup>


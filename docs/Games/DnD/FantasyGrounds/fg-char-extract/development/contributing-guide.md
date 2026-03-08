---
title: 'Contributing Guide'
description: 'How to contribute to the FG Character Extractor project'
---

## Welcome Contributors!

Thank you for your interest in contributing to FG Character Extractor. This guide will help you understand the project structure, coding standards, and contribution workflow.

## Project Overview

FG Character Extractor is a Go CLI tool that extracts individual character sheets from Fantasy Grounds `db.xml` campaign files. The project emphasizes:

- **Simplicity**: Standard library only, no external dependencies
- **Reliability**: Comprehensive testing with golden file validation
- **Cross-platform**: Builds for macOS (Intel/ARM) and Windows

<Info>
  The project uses Go 1.25.7+ and is built with standard tooling (Go, Task, optional devbox).
</Info>

## Getting Started

<Steps>
  <Step title="Fork and clone the repository">
    ```bash
    git clone https://github.com/sdelrio/fg-char-extract.git
    cd fg-char-extract
    ```
  </Step>

  <Step title="Set up your development environment">
    Install prerequisites:
    - [Go 1.25.7+](https://go.dev/dl/)
    - [Task](https://taskfile.dev/installation/)
    - [devbox](https://www.jetpack.io/devbox/) (optional)

    See [Building](../building-the-project/) for details.
  </Step>

  <Step title="Verify your setup">
    ```bash
    task build
    task test
    ```
  </Step>

  <Step title="Create a feature branch">
    ```bash
    git checkout -b feat/your-feature-name
    ```
  </Step>
</Steps>

## Code Style Guidelines

FG Character Extractor follows specific conventions based on `AGENTS.md`. Please adhere to these standards:

### Naming Conventions

<AccordionGroup>
  <Accordion title="Functions: snake_case" icon="function">
    Use `snake_case` for all function names:
    ```go
    // Good
    func skip_element(d *xml.Decoder, start xml.StartElement) error
    func write_character(c *Character) error

    // Avoid
    func SkipElement(d *xml.Decoder, start xml.StartElement) error
    func writeCharacter(c *Character) error
    ```

    Start function names with verbs for clarity.
  </Accordion>

  <Accordion title="Variables: snake_case" icon="code">
    Use `snake_case` for variables:
    ```go
    // Good
    current_char := &Character{}
    xml_depth := 0
    
    // Avoid
    currentChar := &Character{}
    xmlDepth := 0
    ```
    
    Short names are acceptable when context is clear (`f` for file, `c` for character).
  </Accordion>

  <Accordion title="Types: PascalCase" icon="cube">
    Export struct types and fields:
    ```go
    type Character struct {
        ID             string
        Level          string
        Tokens         []xml.Token
        ProfBonus      int
        AbilityBonuses map[string]int
    }
    ```
  </Accordion>
</AccordionGroup>

### Error Handling

Always handle errors explicitly and provide context:

```go
// Good: Wrap errors with context
f, err := os.Open(filename)
if err != nil {
    return fmt.Errorf("opening %s: %w", filename, err)
}
defer f.Close()

// Avoid: Generic error messages
f, err := os.Open(filename)
if err != nil {
    return err
}
```

<Note>
  Use `fmt.Errorf` with `%w` to wrap errors, preserving the error chain.
</Note>

### XML Handling Patterns

Follow these patterns when working with XML:

<CodeGroup>
```go Token Traversal
// Use xml.CopyToken to avoid buffer reuse issues
tok := xml.CopyToken(t)

switch token := tok.(type) {
case xml.StartElement:
    // Handle start element
case xml.EndElement:
    // Handle end element
case xml.CharData:
    // Handle character data
}
```

```go Escaping Special Characters
// Escape XML special characters in character data
s := string(token)
s = strings.ReplaceAll(s, "&", "&amp;")
s = strings.ReplaceAll(s, "<", "&lt;")
s = strings.ReplaceAll(s, ">", "&gt;")
```

```go Element Skipping
// Skip unwanted elements efficiently
if ignoredRegex.MatchString(token.Name.Local) {
    if err := skipElement(decoder, token); err != nil {
        return err
    }
    continue
}
```
</CodeGroup>

### File I/O Patterns

```go
// Always use defer for cleanup
f, err := os.Create(filename)
if err != nil {
    return err
}
defer f.Close()

// Check write errors
if _, err := f.WriteString("content"); err != nil {
    return err
}
```

### Code Formatting

- **No gofmt required** - Code uses tabs for indentation
- 2-space indent within function bodies
- No trailing whitespace
- Single blank line between logical blocks
- Maximum line length: 80-100 characters

## Testing Requirements

All contributions must include appropriate tests:

<Steps>
  <Step title="Add test cases for new features">
    Use the golden file pattern for integration tests. See [Testing](../testing-guide/) for details.
  </Step>

  <Step title="Ensure existing tests pass">
    ```bash
    task test
    ```
    All tests must pass before submitting a pull request.
  </Step>

  <Step title="Update golden files if needed">
    If your change intentionally modifies output format, update golden files:
    ```bash
    go run main.go tests/db.xml
    cp character_id-00001_4.xml tests/expected_character_id-00001_4.xml
    task test
    ```
  </Step>
</Steps>

## Git Workflow

Follow the Conventional Commits format for all commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Commit Types

<AccordionGroup>
  <Accordion title="feat: New feature" icon="sparkles">
    ```bash
    feat(extraction): add support for item lists
    feat(output): include character race and class
    ```
  </Accordion>

  <Accordion title="fix: Bug fix" icon="wrench">
    ```bash
    fix(parser): handle missing level field
    fix(skills): correct proficiency bonus calculation
    ```
  </Accordion>

  <Accordion title="docs: Documentation" icon="book">
    ```bash
    docs(readme): update installation instructions
    docs(contributing): clarify testing requirements
    ```
  </Accordion>

  <Accordion title="refactor: Code refactoring" icon="code">
    ```bash
    refactor(main): extract XML encoding to separate function
    refactor(parser): simplify depth tracking logic
    ```
  </Accordion>

  <Accordion title="test: Testing" icon="vial">
    ```bash
    test(extraction): add golden file for multi-character scenario
    test(skills): validate ability score calculations
    ```
  </Accordion>

  <Accordion title="chore: Maintenance" icon="tools">
    ```bash
    chore(deps): update go.mod to 1.25.7
    chore(taskfile): add coverage report task
    ```
  </Accordion>
</AccordionGroup>

### Example Commits

```bash
# Good commit messages
feat(main): add proficiency bonus to character skillset xml
fix(parser): resolve test failures on skill calculations
docs(readme): update deployment instructions
refactor(writer): extract skill total calculation logic

# Avoid
Update code
Fix bug
WIP
```

## Pull Request Process

<Steps>
  <Step title="Ensure your branch is up to date">
    ```bash
    git checkout main
    git pull origin main
    git checkout feat/your-feature-name
    git rebase main
    ```
  </Step>

  <Step title="Run tests and build">
    ```bash
    task test
    task build-all
    ```
    
    Fix any issues before submitting.
  </Step>

  <Step title="Push your branch">
    ```bash
    git push origin feat/your-feature-name
    ```
  </Step>

  <Step title="Create a pull request">
    1. Go to the repository on GitHub
    2. Click **New Pull Request**
    3. Select your branch
    4. Fill in the PR template:
       - **Description**: What does this PR do?
       - **Motivation**: Why is this change needed?
       - **Testing**: How was this tested?
       - **Breaking changes**: Any backward incompatibilities?
  </Step>

  <Step title="Address review feedback">
    Respond to comments and push additional commits as needed:
    ```bash
    git add .
    git commit -m "fix(review): address PR feedback"
    git push origin feat/your-feature-name
    ```
  </Step>
</Steps>

## What to Contribute

<CardGroup cols={2}>
  <Card title="Bug Fixes" icon="bug">
    Found a bug? Submit a fix with a test case that reproduces the issue
  </Card>
  <Card title="New Features" icon="plus">
    Propose new extraction features or output formats in an issue first
  </Card>
  <Card title="Documentation" icon="book">
    Improve documentation, add examples, or clarify usage instructions
  </Card>
  <Card title="Tests" icon="vial">
    Add test cases for edge cases or untested scenarios
  </Card>
</CardGroup>

## Code Review Guidelines

When reviewing code, we focus on:

- **Correctness**: Does it solve the problem?
- **Testing**: Are there appropriate tests?
- **Style**: Does it follow project conventions?
- **Performance**: Is it efficient for large XML files?
- **Maintainability**: Is it clear and well-documented?

## Questions and Support

<AccordionGroup>
  <Accordion title="How do I ask a question?" icon="question">
    Open a GitHub issue with the "question" label, or start a discussion.
  </Accordion>

  <Accordion title="How do I report a bug?" icon="bug">
    Open a GitHub issue with:
    - Steps to reproduce
    - Expected vs actual behavior
    - Sample `db.xml` (if possible)
    - Go version and OS
  </Accordion>

  <Accordion title="How do I propose a feature?" icon="lightbulb">
    Open a GitHub issue describing:
    - The use case
    - Proposed solution
    - Alternatives considered
    - Example usage
  </Accordion>
</AccordionGroup>

## License

By contributing to FG Character Extractor, you agree that your contributions will be licensed under the **MIT License**.

See the [LICENSE](https://github.com/sdelrio/fg-char-extract/blob/main/LICENSE) file for details.

## Recognition

All contributors will be recognized in the project's README. Thank you for helping make FG Character Extractor better!

<Note>
  **First time contributing to open source?** Check out the [First Timers Only](https://www.firsttimersonly.com/) guide.
</Note>


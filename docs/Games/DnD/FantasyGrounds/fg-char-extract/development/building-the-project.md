---
title: 'Building the Project'
description: 'Build instructions and cross-platform compilation for FG Character Extractor'
---

## Prerequisites

Before building FG Character Extractor, ensure you have the following installed:

<CardGroup cols={2}>
  <Card title="Go 1.25.7+" icon="golang">
    Download from [go.dev](https://go.dev/dl/)
  </Card>
  <Card title="Task" icon="check-double">
    Install from [taskfile.dev](https://taskfile.dev/installation/)
  </Card>
</CardGroup>

<Note>
  **Optional**: [devbox](https://www.jetpack.io/devbox/) provides a consistent development environment. Install with:
  ```bash
  curl -fsSL https://get.jetpack.io/devbox/install.sh | bash
  ```
</Note>

## Building for Your Platform

The project uses [Task](https://taskfile.dev/) for build automation. All build outputs are placed in the `dist/` directory.

<Steps>
  <Step title="Navigate to the project directory">
    ```bash
    cd ~/workspace/source
    ```
  </Step>

  <Step title="Build for your current platform">
    ```bash
    task build
    ```
    
    This creates `dist/fg-char-extract` for your current OS and architecture.
  </Step>

  <Step title="Run the binary">
    ```bash
    ./dist/fg-char-extract path/to/db.xml
    ```
  </Step>
</Steps>

## Cross-Platform Builds

Build for all supported platforms in one command:

```bash
task build-all
```

This produces binaries for:
- **macOS Intel** (darwin/amd64): `dist/fg-char-extract-darwin-amd64`
- **macOS Apple Silicon** (darwin/arm64): `dist/fg-char-extract-darwin-arm64`
- **Windows** (windows/amd64): `dist/fg-char-extract-windows-amd64.exe`

<Info>
  The `build-all` task automatically runs `clean` first to ensure a fresh build.
</Info>

## Available Task Commands

The project's `Taskfile.yml` defines several useful commands:

<AccordionGroup>
  <Accordion title="task build" icon="hammer">
    Includes source tracking - only rebuilds if `*.go` files have changed.
  </Accordion>

  <Accordion title="task build-all" icon="layer-group">
    Build for all supported platforms (macOS amd64/arm64, Windows amd64).

    Automatically cleans the `dist/` directory first.
  </Accordion>

  <Accordion title="task run" icon="play">
    Quick test run against the test database:
    ```bash
    task run
    ```

    Equivalent to: `go run main.go ./tests/db.xml`
  </Accordion>

  <Accordion title="task test" icon="vial">
    Run the full test suite:
    ```bash
    task test
    ```

    See [Testing](./testing-guide.md) for more details.
  </Accordion>

  <Accordion title="task clean" icon="broom">
    Remove build artifacts and generated files:
    ```bash
    task clean
    ```

    Deletes:
    - `dist/` directory (all binaries)
    - `character_*.xml` (generated output files)
  </Accordion>
</AccordionGroup>

## Building for a Specific Platform

While not exposed as a public task, you can build for a specific platform using Go's cross-compilation:

<CodeGroup>
```bash macOS Intel
GOOS=darwin GOARCH=amd64 go build -o dist/fg-char-extract-darwin-amd64 main.go
```

```bash macOS Apple Silicon
GOOS=darwin GOARCH=arm64 go build -o dist/fg-char-extract-darwin-arm64 main.go
```

```bash Windows
GOOS=windows GOARCH=amd64 go build -o dist/fg-char-extract-windows-amd64.exe main.go
```

```bash Linux
GOOS=linux GOARCH=amd64 go build -o dist/fg-char-extract-linux-amd64 main.go
```
</CodeGroup>

## Development with Devbox

Devbox provides an isolated, reproducible development environment. The project includes devbox configuration for consistent builds.

<Steps>
  <Step title="Enter the devbox shell">
    ```bash
    cd ~/workspace/source
    devbox shell
    ```
  </Step>

  <Step title="Build with devbox">
    ```bash
    devbox run -- task build-all
    ```
  </Step>
</Steps>

All dependencies (Go, Task) are automatically available in the devbox environment without affecting your system installation.

## Output Structure

After building, your directory structure will look like:

```
fg-char-extract/
├── dist/
│   ├── fg-char-extract                    # Current platform
│   ├── fg-char-extract-darwin-amd64       # macOS Intel
│   ├── fg-char-extract-darwin-arm64       # macOS Apple Silicon
│   └── fg-char-extract-windows-amd64.exe  # Windows
├── main.go
├── main_test.go
└── Taskfile.yml
```

## Build Troubleshooting

<AccordionGroup>
  <Accordion title="Go version mismatch">
    The project requires Go 1.25.7 or higher. Check your version:
    ```bash
    go version
    ```

    If needed, download the latest version from [go.dev](https://go.dev/dl/).
  </Accordion>

  <Accordion title="Task not found">
    Install Task from [taskfile.dev](https://taskfile.dev/installation/):

    ```bash
    # macOS
    brew install go-task

    # Linux
    sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin
    ```
  </Accordion>

  <Accordion title="Build cache issues">
    Clear Go's build cache and start fresh:
    ```bash
    task clean
    go clean -cache
    task build
    ```
  </Accordion>
</AccordionGroup>

## Next Steps

<CardGroup cols={2}>
  <Card title="Testing" icon="vial" href="../testing-guide/">
    Learn how to run tests and add new test cases
  </Card>
  <Card title="Contributing" icon="code-pull-request" href="../contributing-guide/">
    Read the contribution guidelines before submitting changes
  </Card>
</CardGroup>


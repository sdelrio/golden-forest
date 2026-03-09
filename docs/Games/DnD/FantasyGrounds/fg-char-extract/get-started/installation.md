---
title: Installation
description: Install FG Character Extractor on macOS, Windows, or Linux
sidebar_position: 20
---

# Installation

FG Character Extractor is easy to install on any platform. Choose the method that works best for you.

## Platform-Specific Instructions

import { Icon } from '@iconify/react';


### macOS

[<Icon icon="material-symbols:download" width="1.25em" />](https://github.com/sdelrio/fg-char-extract/releases)

<Steps>

  <Step title="Or Download Pre-built Binary">
    Choose the correct architecture for your Mac:

    **Apple Silicon (M1/M2/M3)**:
    ```bash
    curl -LO https://github.com/sdelrio/fg-char-extract/releases/latest/download/fg-char-extract-darwin-arm64
    chmod +x fg-char-extract-darwin-arm64
    sudo mv fg-char-extract-darwin-arm64 /usr/local/bin/fg-char-extract
    ```

    **Intel Macs**:
    ```bash
    curl -LO https://github.com/sdelrio/fg-char-extract/releases/latest/download/fg-char-extract-darwin-amd64
    chmod +x fg-char-extract-darwin-amd64
    sudo mv fg-char-extract-darwin-amd64 /usr/local/bin/fg-char-extract
    ```
  </Step>

  <Step title="Verify Installation">
    Run the tool to verify it's installed:

    ```bash
    fg-char-extract
    ```

    You should see an error about missing `db.xml` if run in an empty directory, which confirms the tool is working.
  </Step>
</Steps>

:::warning
On macOS, you may see a security warning when first running the binary. Go to **System Preferences > Security & Privacy** and click "Allow Anyway".
:::

### Windows
[<Icon icon="material-symbols:download" width="1.25em" />](https://github.com/sdelrio/fg-char-extract/releases)

<Steps>
  <Step title="Download Windows Binary">
    Download the Windows executable from GitHub Releases:

    ```powershell
    # Using PowerShell
    Invoke-WebRequest -Uri "https://github.com/sdelrio/fg-char-extract/releases/latest/download/fg-char-extract-windows-amd64.exe" -OutFile "fg-char-extract.exe"
    ```
  </Step>

  <Step title="Add to PATH (Optional)">
    Move the executable to a directory in your PATH, such as `C:\Program Files\FGCharExtract\`, and add that directory to your system PATH.

    Or simply run it from the download directory.
  </Step>

  <Step title="Verify Installation">
    Run the tool to verify it's working:

    ```powershell
    .\fg-char-extract.exe
    ```

    You should see an error about missing `db.xml` if run in an empty directory, which confirms the tool is working.
  </Step>
</Steps>

## Prerequisites for manual install

<Info>
If you're using pre-built binaries, you don't need Go installed. For building from source, you'll need Go 1.25.7 or later.
</Info>

<Steps>
  <Step title="Verify Go Installation (Optional)">
    If you plan to build from source, verify your Go installation:

    ```bash
    go version
    ```

    You should see output like `go version go1.25.7 darwin/arm64` or similar. If you need to install Go, visit [go.dev/dl](https://go.dev/dl/).
  </Step>
</Steps>

## Installation Methods

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="Go Install (Recommended)" default>
    ```bash title="Go Install (Recommended)"
    # Install directly from source using Go
    go install github.com/sdelrio/fg-char-extract@latest

    # Verify installation by running without arguments (uses db.xml in current dir)
    fg-char-extract
    ```
  </TabItem>
  <TabItem value="2" label="Manual Build">
    ```bash title="Manual Build"
    # Clone the repository
    git clone https://github.com/sdelrio/fg-char-extract.git
    cd fg-char-extract

    # Build for your current platform
    go build -o fg-char-extract main.go

    # Move to your PATH (optional)
    sudo mv fg-char-extract /usr/local/bin/
    ```
  </TabItem>
  <TabItem value="3" label="Using Task (Advanced)">
    ```bash title="Using Task (Advanced)"
    # Install Task first: https://taskfile.dev
    # Clone and build
    git clone https://github.com/sdelrio/fg-char-extract.git
    cd fg-char-extract

    # Build for current platform
    task build

    # Or build for all platforms
    task build-all
    ```
  </TabItem>
  <TabItem value="4" label="Using Task (Advanced)">
    ```bash title="Pre-built Binaries"
    # Download from GitHub Releases
    curl -LO https://github.com/sdelrio/fg-char-extract/releases/latest/download/fg-char-extract-darwin-arm64

    # Make executable
    chmod +x fg-char-extract-darwin-arm64

    # Move to your PATH
    sudo mv fg-char-extract-darwin-arm64 /usr/local/bin/fg-char-extract
    ```
  </TabItem>
</Tabs>

## Building from Source

### With Task

For advanced users, the project includes a `Taskfile.yml` for task automation:

<Steps>
  <Step title="Install Task">
    Follow instructions at [taskfile.dev](https://taskfile.dev) or:

    ```bash
    # macOS
    brew install go-task

    # Linux
    sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin
    ```
  </Step>

  <Step title="Clone and Build">
    ```bash
    git clone https://github.com/sdelrio/fg-char-extract.git
    cd fg-char-extract

    # Build for current platform
    task build

    # Or build for all platforms (macOS x86_64, macOS arm64, Windows x86_64)
    task build-all
    ```

    Binaries will be created in the `dist/` directory.
  </Step>

  <Step title="Run Tests">
    ```bash
    task test
    ```
  </Step>
</Steps>

### Using Devbox

If you're contributing to the project or want a reproducible development environment:

```bash
# Install Devbox
curl -fsSL https://get.jetpack.io/devbox/install.sh | bash

# Clone and enter the environment
git clone https://github.com/sdelrio/fg-char-extract.git
cd fg-char-extract
devbox shell

# Build using Task
task build
```

<Tip>
Devbox ensures you have the exact Go version (1.25.7) and environment variables configured correctly.
</Tip>

## Verify Installation

Regardless of your installation method, verify everything works:

<Steps>
  <Step title="Check Tool is Available">
    Run the tool without arguments:

    ```bash
    fg-char-extract
    ```

    You should see an error about missing `db.xml` if run in an empty directory, which confirms the tool is in your PATH and working.
  </Step>

  <Step title="Test with Sample File">
    If you have a Fantasy Grounds `db.xml` file handy, try a quick extraction:

    ```bash
    fg-char-extract /path/to/db.xml
    ```
  </Step>
</Steps>

## Troubleshooting

### Command Not Found

If you get a "command not found" error:

1. **Check your PATH**: Ensure `~/go/bin` (for `go install`) or your installation directory is in your PATH
2. **Use full path**: Try running with the full path to the binary
3. **Check permissions**: Ensure the binary is executable (`chmod +x`)

### Permission Denied

On macOS or Linux, if you get permission errors:

```bash
chmod +x fg-char-extract
```

### Go Version Mismatch

If building from source with an older Go version, you may see errors. Upgrade to Go 1.25.7 or later:

```bash
# Check current version
go version

# Update Go from go.dev/dl
```

## Next Steps

Now that you have FG Character Extractor installed, let's extract your first character!

<Card title="Quickstart Guide" icon="rocket" href="../quickstart/">
  Extract your first character in under 2 minutes
</Card>

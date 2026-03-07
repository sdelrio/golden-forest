---
title: Get PC from xml.db
description: Script to extract the Player Character XML from the campaign file (xml.db)
tags:
  - DnD
  - FantasyGrounds
  - Go
  - scripting
  - XML
---
# Get PC from db.xml

Here is a Go script to extract player characters from an old Fantasy Grounds campaign `db.xml` file:

```go title="main.go"
package main

import (
  "encoding/xml"
  "fmt"
  "os"
)

type Character struct {
  XMLName xml.Name `xml:"character"`
  Name    string   `xml:"name"`
  ID      string   `xml:"id,attr"`
  Level   string   `xml:"level"`
}

type Root struct {
  Characters []Character `xml:"character"`
}

func main() {
  if len(os.Args) != 2 {
    fmt.Println("Usage: go run extract.go <path-to-db.xml>")
    return
  }

  file, err := os.Open(os.Args[1])
  if err != nil {
    fmt.Printf("Error opening file: %v\n", err)
    return
  }
  defer file.Close()

  decoder := xml.NewDecoder(file)
  var root Root
  err = decoder.Decode(&root)
  if err != nil {
    fmt.Printf("Error parsing XML: %v\n", err)
    return
  }

  for _, char := range root.Characters {
    fmt.Printf("Found Character: ID=%s, Name=%s\n", char.ID, char.Name)

    // Write individual character file
    charData, _ := xml.MarshalIndent(char, "", "  ")
    charFile := fmt.Sprintf("character_%s_%s.xml", char.ID, char.Level)

    err = os.WriteFile(charFile, append([]byte(xml.Header), charData...), 0644)
    if err != nil {
      fmt.Printf("Error writing file %s: %v\n", charFile, err)
    } else {
      fmt.Printf("Saved to %s\n", charFile)
    }
  }
}
```

## How to Use:

1. Save the script as extract.go.

2. Run:

```bash title="Terminal"
go run extract.go /path/to/db.xml
```

3. It will extract each `<character>` into separate XML files (`character_id-xxxxx.xml`).

:::note
This assumes characters are direct children of the root. If not, adjust the struct tags or parse the full node path (e.g., /charsheet/character). For complex cases, consider using the official FGUtils as a reference.
:::

## Compile script for multiple targets

### Init project
```bash title="Terminal"
go mod init
```

### Build script

```bash title="compile.sh"
#!/bin/bash
APP_NAME="fantasy-ground-extractor"
OUTPUT_DIR="dist"
PLATFORMS=("linux/amd64" "linux/arm64" "darwin/amd64" "darwin/arm64" "windows/amd64")

mkdir -p $OUTPUT_DIR

for PLATFORM in "${PLATFORMS[@]}"; do
  GOOS=${PLATFORM%/*}
  GOARCH=${PLATFORM#*/}
  BINARY="$APP_NAME-$GOOS-$GOARCH"
  if [ "$GOOS" = "windows" ]; then
    BINARY+=".exe"
  fi
  echo "Building for $GOOS/$GOARCH..."
  CGO_ENABLED=0 GOOS=$GOOS GOARCH=$GOARCH go build -o "$OUTPUT_DIR/$BINARY" .
done

echo "Build complete. Binaries in $OUTPUT_DIR"
```

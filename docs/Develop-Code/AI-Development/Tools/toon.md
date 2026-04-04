---
title: TOON
description: Token-Oriented Object Notation (TOON) is a compact, human-readable data format specifically designed as an efficient encoding layer for Large Language Models (LLMs).
tags:
  - TOON
  - JSON
  - YAML
  - LLM
---
# TOON: Token-Oriented Object Notation

## Summary
Token-Oriented Object Notation (TOON) is a compact, human-readable data format specifically designed as an efficient encoding layer for Large Language Models (LLMs). It represents the same objects, arrays, and primitives as JSON but with significantly less boilerplate (eliminating unnecessary brackets, braces, quotes, and commas). By providing a minimal, YAML-like syntax with CSV-style data tables, TOON serves as an optimal translation layer for AI inputs and outputs. 

## Advantages and Token Cost Savings
Using TOON provides several critical advantages for AI applications:

* **Massive Token Reductions:** By removing structural noise, TOON reduces token overhead by **70–75%** compared to standard JSON. This translates directly into substantial API cost reductions.
* **Increased Context Capacity:** Because data is so dense, you can fit up to 4× more records into an LLM's context window compared to JSON representations.
* **Improved Parsing Reliability:** TOON provides "LLM-Friendly Guardrails" such as explicit array lengths (`[N]`) and explicit field headers (`{fields}`). This gives the model a clear schema to follow and improves parsing accuracy in mixed-structure benchmarks.
* **Retained Compatibility:** TOON is a lossless, deterministic encoding of the JSON data model. Any valid JSON can be represented as TOON, ensuring seamless integration with existing data pipelines.

## Structure Description

Creating TOON data structures is straightforward if you are familiar with JSON or YAML. TOON eliminates commas, quotes, and braces where possible and relies on indentation to represent nested data.

### Simple Objects

Basic Key-Value Pairs and Primitives. Simply define pairs on each line. Empty values or nulls can be represented with a tilde (`~`):

```toon
app_name: MyApp
version: 1.0.0
debug: false
```

### Nested Objects (Nested TOON)
To create nested structures, use indentation natively without any brackets or braces:

```toon
server:
  host: 0.0.0.0
  port: 8080
  timeout: 30
database:
  host: localhost
  port: 5432
  pool:
    min: 2
    max: 10
```

### Arrays and Data Tables

For typical uniform data like arrays of objects, TOON uses a highly compressed tabular format. You define the array name, its length `[N]`, and the fields `{fields}` in the header. Values are streamed row by row:

#### Primitive Arrays (inline)

Arrays of primitives (strings, numbers, booleans, null) are rendered inline:

```toon
tags[3]: admin,ops,dev
```

#### Arrays of objects

When all objects in an array share the same set of primitive-valued keys, TOON uses tabular format:

```toon
users[3]{id,name,role}:
  1,Alice,admin
  2,Bob,editor
  3,Charlie,viewer
```

### Complex Nested Arrays
If your array objects contain nested fields or long properties, you define the array length and separate items with `---`:

```toon
documents[2]:
  id: doc_1
  text: This is the first chunk of text.
  metadata:
    source: book.pdf
    page: 1
  ---
  id: doc_2
  text: This is the second chunk of text.
  metadata:
    source: book.pdf
    page: 2
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Format Comparison Examples

Below is a simple example showing the same data structure represented in JSON, YAML, and TOON. Notice how TOON collapses the uniform array of objects into a table, declaring fields once.

<Tabs groupId="data-format">
  <TabItem value="toon" label="TOON" default>

```toon
users[2]{id,name,active}:
  1,User1,true
  2,User2,false
```

  </TabItem>
  <TabItem value="json" label="JSON">

```json
{
  "users": [
    {
      "id": 1,
      "name": "User1",
      "active": true
    },
    {
      "id": 2,
      "name": "User2",
      "active": false
    }
  ]
}
```

  </TabItem>
  <TabItem value="yaml" label="YAML">

```yaml
users:
  - id: 1
    name: User1
    active: true
  - id: 2
    name: User2
    active: false
```

  </TabItem>
</Tabs>

## Converting Between Formats
Since TOON directly maps to the standard JSON data model, conversion between JSON, YAML, and TOON is straightforward. 
Developers typically handle this layer right before sending data to the LLM and right after receiving a response:

1. **Before Prompting (Serialization):** Your application logic processes standard JSON objects. Right before appending to the LLM context, you run the JSON through a TOON serializer to compress the prompt.
2. **After Generation (Deserialization):** The LLM is instructed to respond in TOON format. When the application receives the output string, it parses the TOON response back into native JSON objects for subsequent processing.

There is a growing multi-language ecosystem supporting these conversions, with official or community libraries available in TypeScript, Python, Go, Rust, and .NET.

## References
* [TOON Official Documentation](https://toonformat.dev)
* [TOON vs TRON vs JSON vs YAML vs CSV Format Comparison](https://www.piotr-sikora.com/blog/2025-12-05-toon-tron-csv-yaml-json-format-comparison)

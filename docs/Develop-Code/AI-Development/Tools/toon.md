---
title: "TOON: Token-Oriented Object Notation"
description: "Token-Oriented Object Notation (TOON) is a compact, human-readable data format specifically designed as an efficient encoding layer for Large Language Models (LLMs)."
tags: [toon, json, yaml, llm, tokens, optimization]
sidebar_label: "TOON"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# TOON: Token-Oriented Object Notation

Token-Oriented Object Notation (TOON) is a compact, human-readable data format specifically designed as an efficient encoding layer for Large Language Models (LLMs). It represents the same objects, arrays, and primitives as JSON but with significantly less boilerplate—eliminating unnecessary brackets, braces, quotes, and commas. 

By providing a minimal, YAML-like syntax with CSV-style data tables, TOON serves as an optimal translation layer for AI inputs and outputs, maximizing token efficiency without sacrificing structural clarity.

## Core Advantages & Efficiency

Using TOON provides several critical advantages for AI applications, primarily focused on density and reliability.

:::info
**Massive Token Reductions:** By removing structural noise, TOON reduces token overhead by **70–75%** compared to standard JSON, translating directly into substantial API cost reductions.
:::

<CardGroup cols={2}>
  <Card title="Context Capacity" icon="mdi:database-outline">
    Fit up to 4× more records into an LLM's context window compared to JSON representations.
  </Card>
  <Card title="Parsing Reliability" icon="mdi:check-decagram-outline">
    Explicit array lengths (`[N]`) and field headers (`{fields}`) provide clear guardrails and improve accuracy.
  </Card>
  <Card title="JSON Compatibility" icon="mdi:sync">
    A lossless, deterministic encoding of the JSON data model, ensuring seamless integration with existing pipelines.
  </Card>
  <Card title="Human Readable" icon="mdi:eye-outline">
    Designed to be easily audited by humans while remaining optimal for machine processing.
  </Card>
</CardGroup>

## Structure Description

TOON eliminates commas, quotes, and braces where possible and relies on indentation to represent nested data.

<AccordionGroup>
  <Accordion title="Simple Objects" icon="mdi:format-list-bulleted">
    Basic Key-Value Pairs and Primitives. Simply define pairs on each line. Empty values or nulls can be represented with a tilde (`~`):

    ```toon
    app_name: MyApp
    version: 1.0.0
    debug: false
    ```
  </Accordion>

  <Accordion title="Nested Objects" icon="mdi:file-tree">
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
  </Accordion>

  <Accordion title="Arrays & Data Tables" icon="mdi:table">
    For typical uniform data like arrays of objects, TOON uses a highly compressed tabular format. You define the array name, its length `[N]`, and the fields `{fields}` in the header. Values are streamed row by row.

    **Primitive Arrays (inline):**
    ```toon
    tags[3]: admin,ops,dev
    ```

    **Arrays of Objects:**
    ```toon
    users[3]{id,name,role}:
      1,Alice,admin
      2,Bob,editor
      3,Charlie,viewer
    ```
  </Accordion>

  <Accordion title="Complex Nested Arrays" icon="mdi:layers-outline">
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
  </Accordion>
</AccordionGroup>

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

## Integration Workflow

Developers typically handle the TOON layer right before sending data to the LLM and right after receiving a response.

<Steps>
  <Step title="Serialization (Before Prompting)">
    Your application processes standard JSON objects. Right before appending to the LLM context, you run the JSON through a TOON serializer to compress the prompt.
  </Step>
  <Step title="LLM Processing">
    The LLM processes the dense TOON input and is instructed to respond in TOON format, maximizing its output speed and token efficiency.
  </Step>
  <Step title="Deserialization (After Generation)">
    When the application receives the TOON response, it parses it back into native JSON objects for subsequent processing in your application logic.
  </Step>
</Steps>

There is a growing multi-language ecosystem supporting these conversions, with official or community libraries available in TypeScript, Python, Go, Rust, and .NET.

## References
* [TOON Official Documentation](https://toonformat.dev)
* [TOON vs TRON vs JSON vs YAML vs CSV Format Comparison](https://www.piotr-sikora.com/blog/2025-12-05-toon-tron-csv-yaml-json-format-comparison)


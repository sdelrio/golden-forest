---
title: "Mac-Code"
description: "An open-source AI coding agent that runs locally on macOS, utilizing SSD flash-paging and persistent KV cache for high-speed inference."
tags: [ai, local-llm, agents, mac-code, llama.cpp, mlx]
sidebar_position: 10
sidebar_label: "Mac-Code"
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';
import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# Mac-Code

Mac-Code is an open-source AI coding agent designed to run entirely on your Mac for $0/month. Rather than being just a chat UI wrapper, it is a fully functional autonomous agent equipped with web search, shell commands, file operations, and code generation capabilities.

The core breakthrough of Mac-Code is its ability to run large 35B parameter Mixture of Experts (MoE) models that exceed available RAM by leveraging Apple Silicon's unified memory and SSD flash-paging. This allows the model to run impressively fast even on entry-level hardware like a $600 Mac mini with 16GB of RAM.

## Core Advantages & Performance

- **Unprecedented Speed**: On Apple Silicon, paging a model from NVMe achieves 30 tokens per second—an 18.6x increase compared to the 1.6 tok/s achieved when paging from NVMe on NVIDIA hardware.
- **Self-Routing LLM**: The model intelligently classifies its own intent (search, shell, chat) purely at the text level. Even with extreme 2.6-bit quantization that typically breaks JSON function calling, routing works flawlessly (8/8 accuracy in testing).
- **Dual Inference Backends**:
  - **llama.cpp**: Utilizes SSD flash-paging to run massive 35B MoE models at 30 tok/s on just 16GB of RAM.
  - **MLX**: Delivers 25% faster generation and features a persistent KV cache that saves to disk and synchronizes across your Macs via Cloudflare R2.

:::info
Running a 35B MoE model that does not fit in RAM at 30 tok/s on a standard $600 Mac mini showcases a massive leap in local AI efficiency for Apple Silicon.
:::

### Measured Results & Hardware Requirements

All performance numbers below were measured on a 16 GB Mac mini M4 across 5 varied prompts from a cold start. The tests used a cache-aware routing bias (1.0), co-activation prefetch, and a right-sized LRU cache.

| Model | Total Size | RAM Used | Free Disk Needed | Speed | Quality |
|-------|-----------|---------|-----------------|-------|---------|
| Qwen3-32B (dense) | 18.4 GB | 4.5 GB | ~20 GB | 0.15 tok/s | Full 4-bit |
| **Qwen3.5-27B (dense hybrid)** | **16.1 GB** | **5.5 GB** | **~20 GB** | **0.18 tok/s** | **Full 4-bit** |
| Qwen3-30B / Coder-30B (MoE) | 17.2 GB | 8.7 GB | ~20 GB | 4.3 tok/s | Full 4-bit |
| Qwen3.5-35B-A3B (MoE) | 19.5 GB | 8.7 GB | ~25 GB | 5.4 tok/s | Full 4-bit |
| Qwen-80B | 43.0 GB | - | ~50 GB | - | - |
| Qwen-122B | ~65.0 GB | - | ~70 GB | - | - |
| Qwen-235B | ~130.0 GB | - | ~140 GB | - | - |

:::tip
For larger models (like the 80B+ variants), it is highly recommended to use an external NVMe drive to handle the massive disk requirements and maintain fast streaming.
:::

## Context & Memory Optimization

Mac-Code employs several advanced optimizations to minimize memory footprints while maximizing context windows:

<CardGroup cols={2}>
  <Card title="Instant Context Resumption" icon="mdi:flash">
    Loading saved context from SSD takes just 0.0003 seconds compared to 1.01 seconds for reprocessing 141 tokens—a 6,677x speedup. You can analyze a large codebase once and resume instantly the next day.
  </Card>
  <Card title="Quantized KV Cache" icon="mdi:memory">
    Using `--cache-type-k q4_0 --cache-type-v q4_0` doubles the context window for free. For example, a 9B model goes from 32K to 64K context with zero quality loss, shrinking memory usage from 1024 MB to 288 MB.
  </Card>
</CardGroup>

### TurboQuant Compression

TurboQuant technology compresses the saved context cache by 4x (from 26.6 MB down to 6.7 MB) while maintaining a 0.993 cosine similarity, resulting in virtually no information loss.

## Setup & Installation

<Steps>
  <Step title="Execute Setup Script">
    Run the quick installation script directly from your terminal.
    ```bash
    bash http://setup.sh
    ```
  </Step>
  <Step title="Consult the Guides">
    Check the official documentation for step-by-step guides, code insights, and a comprehensive table matching model sizes to VRAM and Mac models.
  </Step>
</Steps>

## References

- [Mac-Code GitHub Repository](https://github.com/walter-grace/mac-code)

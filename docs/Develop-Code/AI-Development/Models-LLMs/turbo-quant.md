---
title: "TurboQuant: Extreme LLM Compression"
description: "Google's TurboQuant compresses KV cache to 3 bits with zero accuracy loss, achieving 8x speedup on H100 GPUs."
tags:
  - AI
  - LLM
  - Quantization
  - Compression
  - KV Cache
  - Google Research
sidebar_label: "TurboQuant"
---

import BarChart from '@site/src/components/BarChart/BarChart';

# TurboQuant: Extreme LLM Compression

TurboQuant is a compression algorithm from Google Research that dramatically reduces the memory footprint of large language models. It compresses the key-value (KV) cache to just 3 bits — without any training, fine-tuning, or loss in model accuracy. The result: up to 8x faster attention computation on H100 GPUs while maintaining the precision of full 32-bit models.

## Key Benefits

- **3-bit KV cache compression** — no training or fine-tuning required
- **Up to 8x speedup** on H100 GPUs for attention logits computation
- **6x memory reduction** for key-value pairs
- **Zero accuracy loss** across long-context benchmarks
- **Data-oblivious** — no dataset-specific tuning needed

:::info
TurboQuant achieves 4-bit quantization speedup of up to **8x over 32-bit unquantized keys** on NVIDIA H100 accelerators, with negligible runtime overhead.
:::

## How It Works (Simplified)

TurboQuant combines two algorithms to achieve compression without the memory overhead that plagues traditional methods:

### Step 1: PolarQuant — The Heavy Lifter

Instead of using standard X/Y/Z coordinates, PolarQuant rotates vectors into **polar coordinates** (radius + angle). This simplifies the data geometry so a standard quantizer can be applied to each part individually. Because the angle distribution is predictable, the expensive normalization step is eliminated entirely — removing the memory overhead that traditional quantization carries.

### Step 2: QJL — The 1-Bit Error Corrector

The small residual error from Step 1 is compressed with QJL (Quantized Johnson-Lindenstrauss), which reduces each value to a single sign bit (+1 or -1). This acts as a mathematical bias corrector, ensuring attention scores remain accurate despite the aggressive compression in Step 1.

## Benchmark Performance

Aggregated performance across long-context benchmarks (LongBench, Needle In A Haystack, ZeroSCROLLS, RULER, L-Eval) on the Llama-3.1-8B-Instruct model:

<BarChart
  title="LongBench Aggregated Score (Llama-3.1-8B-Instruct)"
  data={[
    { name: 'TurboQuant (3-bit)', value: 57 },
    { name: 'PolarQuant (3-bit)', value: 52 },
    { name: 'KIVI Baseline', value: 47 },
  ]}
  colorMap={{
    'TurboQuant (3-bit)': '#388e3c',
    'PolarQuant (3-bit)': '#1976d2',
    'KIVI Baseline': '#f57c00',
  }}
  yAxisLabel="Score"
  maxValue={65}
/>

:::tip
TurboQuant achieves perfect downstream results on needle-in-haystack tasks while reducing KV memory by at least 6x.
:::

## Practical Impact

The KV cache is a high-speed memory store that grows linearly with context length. For long-context models, it becomes a major bottleneck — consuming gigabytes of GPU memory. TurboQuant addresses this directly:

- **No fine-tuning** — Drop-in compression for existing models
- **Faster inference** — 8x speedup means lower latency and higher throughput
- **Lower cost** — 6x memory reduction translates directly to cheaper deployment
- **Production-ready** — Near-zero preprocessing time, state-of-the-art accuracy

This makes it practical for real-world deployment in search engines, long-context chatbots, and any application where the KV cache is a bottleneck.

## References

- [TurboQuant Paper (ICLR 2026)](https://arxiv.org/abs/2504.19874)
- [QJL: Quantized Johnson-Lindenstrauss](https://arxiv.org/abs/2406.03482)
- [PolarQuant Paper (AISTATS 2026)](https://arxiv.org/abs/2502.02617)
- [Google Research Blog Post](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/)
- [YouTube: Google Shrunk 31GB of AI Memory Down to 4GB](https://youtu.be/LvBsACJy4ww)

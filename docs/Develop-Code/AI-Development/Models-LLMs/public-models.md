---
title: "Public Model Access"
description: "A curated list of public model providers, endpoints, and inference services categorized by access type."
tags: [ai, llm, inference, providers, nvidia, groq]
---

import Card from '@site/src/components/Card/Card';
import CardGroup from '@site/src/components/Card/CardGroup';

# Public Model Access 🌐

A collection of reliable providers and endpoints for accessing Large Language Models (LLMs) and other AI models. This list is categorized by access type to help you find the right balance between cost, latency, and capability.

## 🎁 Free Access (Credits/Tiers)

Providers that offer free usage tiers, generous trial credits, or rate-limited public endpoints.

<CardGroup cols={2}>
  <Card title="NVIDIA NIM (Build)" icon="mdi:server-network" href="https://build.nvidia.com/models">
    High-performance inference optimized for NVIDIA hardware, with free credits for developers to explore and prototype.
    <br/><br/>
    **Models:** Llama 3, Mixtral 8x7B, Nemotron, Gemma, and more.
  </Card>
  <Card title="Groq Cloud" icon="mdi:lightning-bolt" href="https://console.groq.com">
    Industry-leading tokens-per-second (TPS) leveraging their specialized LPU (Language Processing Unit).
    <br/><br/>
    **Models:** Llama 3 (8B, 70B), Mixtral 8x7B, Gemma.
  </Card>
  <Card title="Z.ai" icon="mdi:chip" href="https://docs.z.ai/guides/overview/overview">
    Extremely fast inference for large-scale models, leveraging their specialized AI hardware.
    <br/><br/>
    **Models:** Llama 3 (8B, 70B, 405B), Rerankers.
  </Card>
  <Card title="Hugging Face Inference API" icon="mdi:robot-outline" href="https://huggingface.co/docs/api-inference">
    "Serverless Inference" API allowing you to run many models from the Hub for free with rate limits.
    <br/><br/>
    **Models:** Thousands of open-source models.
  </Card>
</CardGroup>

## 💰 Paid Access (Commercial)

Premium providers offering production-grade stability, high rate limits, and specialized models.

<CardGroup cols={2}>
  <Card title="Anthropic" icon="mdi:brain" href="https://console.anthropic.com">
    Creators of the Claude family, known for high reasoning capabilities and large context windows.
    <br/><br/>
    **Models:** Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku.
  </Card>
  <Card title="OpenAI" icon="mdi:robot" href="https://platform.openai.com">
    The industry standard for general-purpose LLMs and multi-modal capabilities.
    <br/><br/>
    **Models:** GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo.
  </Card>
  <Card title="OpenRouter" icon="mdi:router-wireless" href="https://openrouter.ai">
    A unified interface that provides access to dozens of models from various providers through a single API. Pay-as-you-go with a single API key.
    <br/><br/>
    **Models:** Virtually every major open and closed model.
  </Card>
</CardGroup>

## 🛠️ Self-Hosted / Local

For maximum privacy and zero cost (if you have the hardware).

<CardGroup cols={2}>
  <Card title="Ollama" icon="mdi:server" href="https://ollama.com">
    Get up and running with large language models locally.
  </Card>
  <Card title="vLLM" icon="mdi:memory" href="https://github.com/vllm-project/vllm">
    A high-throughput and memory-efficient LLM inference and serving engine.
  </Card>
  <Card title="LM Studio" icon="mdi:desktop-classic" href="https://lmstudio.ai">
    Discover, download, and run local LLMs.
  </Card>
</CardGroup>

## References

- [OpenRouter Models](https://openrouter.ai/docs/models)
- [NVIDIA Build Console](https://build.nvidia.com)

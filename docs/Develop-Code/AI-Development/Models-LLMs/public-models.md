---
title: Public Model Access
description: A curated list of public model providers, endpoints, and inference services categorized by access type.
tags: [ai, llm, inference, providers, nvidia, groq]
---

# Public Model Access 🌐

A collection of reliable providers and endpoints for accessing Large Language Models (LLMs) and other AI models. This list is categorized by access type to help you find the right balance between cost, latency, and capability.

## 🎁 Free Access (Credits/Tiers)

Providers that offer free usage tiers, generous trial credits, or rate-limited public endpoints.

### NVIDIA NIM (Build)
NVIDIA NIM offers a suite of easy-to-use microservices designed to accelerate the deployment of generative AI models across the cloud, data center, and workstation.

*   **Models:** Llama 3, Mixtral 8x7B, Nemotron, Gemma, and more.
*   **Access:** [build.nvidia.com/models](https://build.nvidia.com/models)
*   **Key Feature:** High-performance inference optimized for NVIDIA hardware, with free credits for developers to explore and prototype.

### Groq Cloud
Known for their LPU (Language Processing Unit), Groq provides incredibly low-latency inference for open-source models.

*   **Models:** Llama 3 (8B, 70B), Mixtral 8x7B, Gemma.
*   **Access:** [console.groq.com](https://console.groq.com)
*   **Key Feature:** Industry-leading tokens-per-second (TPS).

### Z.ai
Provides a high-performance inference platform for open-source models, leveraging their specialized AI hardware.

*   **Models:** Llama 3 (8B, 70B, 405B), Rerankers.
*   **Access:** [docs.z.ai/guides/overview/overview](https://docs.z.ai/guides/overview/overview)
*   **Key Feature:** Extremely fast inference for large-scale models like Llama 3 405B.

### Hugging Face Inference API
The "Serverless Inference" API allows you to run many models from the Hub for free with rate limits.

*   **Models:** Thousands of open-source models.
*   **Access:** [huggingface.co/docs/api-inference](https://huggingface.co/docs/api-inference)

---

## 💰 Paid Access (Commercial)

Premium providers offering production-grade stability, high rate limits, and specialized models.

### Anthropic
The creators of the Claude family, known for high reasoning capabilities and large context windows.

*   **Models:** Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku.
*   **Access:** [console.anthropic.com](https://console.anthropic.com)

### OpenAI
The industry standard for general-purpose LLMs and multi-modal capabilities.

*   **Models:** GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo.
*   **Access:** [platform.openai.com](https://platform.openai.com)

### OpenRouter
A unified interface that provides access to dozens of models from various providers through a single API.

*   **Models:** Virtually every major open and closed model.
*   **Access:** [openrouter.ai](https://openrouter.ai)
*   **Key Feature:** Pay-as-you-go with a single API key, great for comparing models.

---

## 🛠️ Self-Hosted / Local
For maximum privacy and zero cost (if you have the hardware).

*   **Ollama:** [ollama.com](https://ollama.com)
*   **vLLM:** [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)
*   **LM Studio:** [lmstudio.ai](https://lmstudio.ai)

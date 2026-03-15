---
title: "VRAM & Local LLM Configuration on macOS"
description: "Optimize VRAM allocation, model selection, and quantization for running local LLMs on Apple Silicon Macs (edge computing)"
tags:
  - macOS
  - Apple Silicon
  - LLM
  - MLX
  - GGUF
  - quantization
  - edge computing
---

# 🚀 VRAM & Local LLM Configuration Guide for Apple Silicon

Running local LLMs on Apple Silicon Macs (M1/M2/M3) requires careful tuning of VRAM (Unified Memory) allocation and model choices. This guide covers everything from format selection to model parameter sizes that fit your hardware constraints.

> 💡 **Concept**: Apple Silicon uses **Unified Memory** - RAM shared between CPU and GPU. The GPU can only use a portion of this as "wired" (locked) VRAM. We're not adding RAM; we're optimizing how much existing RAM the GPU can reserve.

## 📚 Understanding Local LLM Formats

### MLX Format (Recommended for Apple Silicon)
- **Native Apple format** created by Apple's MLX library
- **Direct Metal backend** - runs entirely on GPU with 0% CPU overhead
- **Best performance** on macOS with Apple Silicon
- Examples: `model-name:32b-f16`, `model-name:14b-q8_0`, `model-name:8b-q4_0`

### GGUF Format
- **LLaMA.cpp format** - CPU-focused quantized format
- Falls back to CPU when GPU memory is insufficient
- Less efficient on Metal compared to MLX format
- Common in broader AI ecosystem, less native macOS support

---

## 📊 Model Parameters & Quantization Guide

### Parameter Sizes: When to Choose What

| Model Size | Best For | Min VRAM Required (8-bit) | Min VRAM Required (4-bit) |
|------------|----------|---------------------------|---------------------------|
| **7B**      | Chat, light tasks, phones/tablets | ~12 GB | ~6 GB |
| **14B**     | Better language understanding | ~25 GB | ~13 GB |
| **32B**     | High-quality reasoning, research | ~60 GB | ~30 GB |
| **70B+**    | Enterprise, maximum quality | ~140 GB | ~70 GB |

> ⚡ **Rule of thumb**: Your model should be **~70-80%** of your available VRAM (leaving room for context, KV cache, and OS).

### Quantization: Size vs Quality Tradeoff

| Quantization | Size Reduction | Quality Loss | Recommended Use |
|--------------|----------------|--------------|-----------------|
| **F16**      | 1.0x (full)    | None         | Critical tasks, maximum accuracy |
| **Q8**       | ~0.37x         | Negligible   | When you need near-full precision |
| **Q5_K_M**   | ~0.25x         | Very slight  | Balanced default choice |
| **Q4_K_M**   | ~0.21x         | Minimal      | **Best balance** for most cases |
| **Q3_K_M**   | ~0.16x         | Noticeable   | Low-RAM edge devices, quick inference |
| **IQ2_XXS**  | ~0.08x         | Significant  | Extreme size constraints only |

**Key Insight**: 
- **4-bit (Q4_K_M)** is widely considered the sweet spot - you lose barely 0.1-0.5% quality while getting 50% smaller models than 8-bit
- For edge devices with limited memory, Q3_K_M is acceptable for faster inference

### Format Comparison for Edge Devices

```
MLX Q4_K_M    = Native GPU acceleration, best edge performance
GGUF Q4_K_M   = Falls back to CPU, slower on Metal, but more cross-platform
```

---

## 🔧 VRAM Tuning: Calculate & Apply

### Understanding Default VRAM Allocation

Apple Silicon systems have **implicit limits** based on total unified memory:

| Total RAM    | Default GPU Allocation | Default Limit Ratio |
|--------------|------------------------|---------------------|
| **8 GB**     | ~5.3 GB                | ~66%               |
| **16 GB**    | ~10.7 GB               | ~66%               |
| **32 GB**    | ~21.3 GB               | ~66%               |
| **64 GB**    | ~48 GB                 | ~75%               |
| **128 GB**   | ~96 GB                 | ~75%               |

To run larger models and contexts, you need to **increase this allocation**.

### Step 1: Check Current Limit

Open Terminal and run:

```bash
sysctl iogpu.wired_limit_mb
```

Output `0` means default allocation is active.

### Step 2: Calculate Your Target VRAM

**Formula**: `Target VRAM (MB) = (Your Total RAM GB × 1024) - OS Reserve (4096 MB)`

**Example for 32GB Mac wanting 6GB OS reserve:**
```bash
Target = 32 × 1024 - 4096 = 28672 MB = 28 GB
```

**Example for 64GB Mac wanting 8GB OS reserve:**
```bash
Target = 64 × 1024 - 8192 = 56064 MB = 54 GB
```

### Step 3: Apply the New Limit

```bash
sudo sysctl -w iogpu.wired_limit_mb=28672
```

Replace `28672` with your target value. Enter your admin password when prompted.

> ⚠️ **Warning**: Setting VRAM too high causes:
> - System lag or freezing
> - "Red" Memory Pressure in Activity Monitor
> - OS crashes or application instability
> - Worst case: System unresponsive

### Step 4: Verify the Change

```bash
sysctl iogpu.wired_limit_mb
```

You should see your new value (not `0`).

### Step 5: Test Your Model

Relaunch your LLM application. Check:
1. Activity Monitor → Memory tab → "Memory Pressure" should stay **Green**
2. CPU/GPU utilization should be high (80-100%)
3. No system stuttering

If Memory Pressure turns **Yellow** or **Red**, reduce VRAM allocation.

---

## 📈 Permanent Configuration (Optional)

To make VRAM settings persist across reboots, add to `/etc/sysctl.conf`:

```bash
# Create or edit the configuration file
sudo touch /etc/sysctl.conf
sudo chown root:wheel /etc/sysctl.conf
sudo chmod 0644 /etc/sysctl.conf

# Add your setting
echo "iogpu.wired_limit_mb=28672" | sudo tee -a /etc/sysctl.conf
```

> 🔄 To reset to default: `sudo sysctl -w iogpu.wired_limit_mb=0`

## 🎯 Model Selection Workflow

Follow this process to find the perfect model for your system:

### 1. Determine Available VRAM
```bash
# Check current limit
sysctl iogpu.wired_limit_mb

# Convert MB to GB for estimation
limit_mb / 1024
```

### 2. Start with Conservative Estimates
| Your VRAM | Try First | Then Try |
|-----------|-----------|----------|
| **&lt;12 GB** | 7B Q4_0 / Q3_K_M | 7B Q5_K_M / 7B Q4_K_M |
| **12-21 GB** | 7B F16 / 8B Q5_K_M | 7B Q8 / 14B Q4_K_M |
| **21-32 GB** | 14B Q5_K_M | 14B Q8 / 70B Q2_K (distilled) |
| **32-48 GB** | 14B F16 or 32B Q4_K_M | 14B Q8 / 32B Q5_K_M |
| **48+ GB** | 32B Q5_K_M | 32B Q8 / 70B Q4_K_M |

### 3. Consider Your Use Case

| Use Case | Recommended Size | Notes |
|----------|------------------|-------|
| **Simple chat** | 7B-8B | Fast responses adequate quality |
| **Code generation** | 14B | Better syntax understanding |
| **Reasoning/analysis** | 32B | Complex problem solving |
| **Creative writing** | 14B-32B | Balance creativity vs coherence |
| **Scientific/technical** | 32B+ | Depth of knowledge matters |

### 4. Iterate and Optimize
- Download a model slightly **larger** than you think you need
- If it fits (no crashes, green memory pressure), you can use it!
- If it's too large or slow, try a lower quantization or parameter count

## 🧠 Context Length Explained

### What is Context Length?
The number of tokens (words/pieces of words) that can be processed **in one go**.

- **Default Ollama**: 2048 tokens
- **Default LM Studio**: 4096 tokens
- **1 English word** ≈ 1.3 tokens
- **1 Japanese character** ≈ 1 token

### Context Length vs VRAM

Context window size **directly consumes VRAM**:

```
Total VRAM Needed = Model Size + (Context / 256) + KV Cache (~5%)

Example: 14B Q4_K_M (10GB) + 32K context
= 10 GB + (32000 / 256) + buffer
= 10 GB + 125 MB tokens + KV cache overhead
= ~11-13 GB total
```

> ⚠️ **Important**: Increasing context length **beyond the model's limit** will slow inference significantly. Check model max context before increasing.

### Recommended Context Sizes

| Use Case | Context Length | VRAM Cost |
|----------|----------------|-----------|
| Short chat | 4096 tokens | Baseline |
| Document analysis | 8192-16K tokens | +10-20% VRAM |
| Long-form writing | 32K-128K tokens | +40-80% VRAM |
| Codebase search | 128K+ tokens | +100%+ VRAM |

**Max context length** varies by model - check with:
```bash
# In Ollama
ollama show model-name

# In LM Studio
Click gear icon next to model → Properties
```

## 🔍 Monitoring Your Setup

### Activity Monitor (Built-in Tool)

1. **Open**: Spotlight → "Activity Monitor"
2. **Memory Tab**:
   - **Green** = Healthy, plenty of RAM
   - **Yellow** = Acceptable, steady yellow is fine
   - **Red** = Too much memory pressure, reduce VRAM or model size
3. **GPU Monitor** (macOS 15+):
   - Should show **100% GPU utilization** during inference
   - CPU should be ~10-30% (ideally lower)

### Command-Line Monitoring

**Check VRAM in use (Ollama):**
```bash
ollama ps
```
Output shows model name, size in use, and processor percentage.

**Check model status (Ollama):**
```bash
ollama list
```

**Check model details:**
```bash
ollama show <MODEL_NAME>
```

### LM Studio Hardware Check

1. Open LM Studio
2. **Settings** → **Hardware**
3. View:
   - **VRAM**: Shows your current allocation
   - **GPU Usage**: Should be 100% during inference
   - **Context Length**: Your current setting

## 👁️ Vision Models (VLMs) - Special Consideration

If you're using **vision-language models** (like LLaVA, Pixtral, Qwen-VL):

| Factor | Impact on VRAM |
|--------|----------------|
| **Model size** | Same as LLM |
| **Image tokens** | +4-8x VRAM per image depending on resolution |
| **Vision encoder** | Requires additional VRAM allocation |

**Recommendation**: Use models with built-in VRAM management or lower VRAM allocation for image processing:
- Set VRAM limit **20-30% lower** than text-only LLM
- Keep context length moderate (8K-16K)
- Choose smaller parameter sizes (7B-14B preferred)

## 📋 Quick Reference Cards

### Model Recommendation by RAM

```
8GB  → 7B Q3_K_M      Fast chat, basic tasks
12GB → 7B Q4_K_M      Better chat, decent code
16GB → 7B Q5_K_M      Balanced quality/size
21GB → 7B Q8 / 14B Q4  High quality or larger
32GB → 14B F16 or 32B Q4  Premium models, advanced use
48GB → 32B F16 or 70B Q2_K  Near production quality
64GB → 70B Q4_K_M    Maximum quality for most use cases
80GB → 70B F16       Near-lossless, best reasoning
```

### Common Model Variants

| Model Name | Type | Notes |
|------------|------|-------|
| **Llama-3** | General purpose | 8B/70B variants, strong baseline |
| **Mistral** | Compact efficient | 7B/8B, great for edge devices |
| **Qwen** | Chinese/English | 7B-72B, good multilingual |
| **Command** | Code-focused | R1 family, reasoning strong |
| **DeepSeek** | Research grade | Good performance benchmarks |

### Useful Commands Cheat Sheet

```bash
# Check current VRAM limit
sysctl iogpu.wired_limit_mb

# Set VRAM limit (temporarily)
sudo sysctl -w iogpu.wired_limit_mb=28672

# Set VRAM limit (permanently)
echo "iogpu.wired_limit_mb=28672" | sudo tee -a /etc/sysctl.conf

# Reset to default
sudo sysctl -w iogpu.wired_limit_mb=0

# List models (Ollama)
ollama list

# Show model details
ollama show <MODEL_NAME>

# View running models (Ollama)
ollama ps

# Check memory model size
du -sh ~/.ollama/models/blocks/model-name/
```

## 🚨 Troubleshooting

### System Lag/Crashes
**Cause**: VRAM too high, memory pressure
**Fix**: Run `sudo sysctl -w iogpu.wired_limit_mb=0`, try a smaller limit

### Slow Inference
**Cause**:
1. Model too large (VRAM overflow)
2. Wrong quantization
3. Insufficient VRAM allocation
**Fix**: Reduce model size/quantization, increase VRAM appropriately

### "Likely too large" Warning
**Meaning**: Model exceeds your VRAM capacity
**Fix**: Choose smaller model or higher quantization (Q4 instead of F16)

### Yellow Memory Pressure
**Status**: Acceptable if steady
**Action**: Monitor long-term. If staying yellow → reduce VRAM slightly

## 🔗 Resources

**Primary Source**: [Optimizing VRAM Settings for Using Local LLM on macOS (Fine-tuning: 1)](https://blog.peddals.com/en/fine-tune-vram-size-of-mac-for-llm/)

**MLX Documentation**: [Apple MLX - Metal Acceleration](https://ml-explore.github.io/mlx/)

**Model Zoo**: [Hugging Face MLX Models](https://huggingface.co/mlx-community)

---

*Last updated: March 2026*

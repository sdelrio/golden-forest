---
title: "THX-02 vs Jev"
description: "THX-02 against Jev 1.13: what the public Decision Index actually says, where each model runs, and which one to pick for routing, triage or moderation."
tags: [ai, llm, self-hosted, tooling]
---

import Accordion from '@site/src/components/Accordion/Accordion';
import AccordionGroup from '@site/src/components/Accordion/AccordionGroup';

# THX-02 vs Jev

**Jev** is TypeSafe's decision model, the first of their "System One" models, and the reference point the whole category measures itself against. **THX-02** is HAL-X's 4.5 B open answer to it. Both take a state, ask typed questions in plain language, and return a probability for every option instead of prose, so choosing between them is not a taste question about output style. It is a question about where the model runs, what it costs at your volume, and whether you can trust the number on the box.

The headline is real but narrow: on the same public index, THX-02's vendor-run score is 7 points above Jev 1.13 while being a fraction of the size and open weights. The headline does not settle the category, because the leaderboard around Jev has moved and THX-02 is not on it.

:::tip
For the full API, installation and local deployment of THX-02, see [THX-02 Decision Model](../Models-LLMs/thx-02-decision-model.md). This article only compares.
:::

## At a glance

| | THX-02 | Jev 1.13 |
|---|---|---|
| **Vendor** | HAL-X | TypeSafe AI |
| **Weights** | Open, Apache-2.0 | Closed, hosted API only |
| **Parameters** | 4.5 B decision model + 60 M think adapter | Not published |
| **Context** | 32k tokens per request | 64k per request, 32k per question |
| **Question types** | `choice` (up to 255 options), `noul`, `score` | `Choice` (up to 255 options), `Score` (2 to 10 levels), `Noul`, `Box` (1.14 only) |
| **Questions per request** | 1 to 64 | No separate limit, bounded by context |
| **Images** | Up to 4 per request | Accepted in state, instructions and criteria, marked "Dreamer-ready" |
| **Where it runs** | Your GPU, CPU or phone, or the HAL-X API | TypeSafe API only |
| **Median latency** | 50 ms direct, 79 ms with thinking, on one RTX PRO 6000 | 127 ms per task (Artificial Analysis), 524 ms per request (Jev Decision Index) |
| **Price** | Free when self-hosted, free tier on the HAL-X API | $0.042 per 1M input tokens, about $42 per 1M tasks |
| **Decision Index 0.3** | 65.06 with thinking, 63.83 direct, vendor run only | 57.96 on the public board |

The two APIs are close cousins. Jev's `Choice`, `Score` and `Noul` map one to one onto THX-02's `choice`, `score` and `noul`, both return `probabilities` and `confidence`, and both read option descriptions you write in the request. Migrating a working classifier from one to the other is a request-shape change, not a redesign. THX-02 has no `Box` primitive, so anything that needs coordinates in an image stays with Jev 1.14.

## The score, and what it does not settle

The [Jev Decision Index](https://huggingface.co/spaces/multimodalart/jev-decision-index) is the public leaderboard both vendors quote. Its 2026-11-06 dump covers 274 models over a 37-benchmark panel, and this is the shape of it:

| Model | Size in its name | Public score |
|---|---|---|
| baselabs mammoth-1 | 27 B | 75.34 |
| Jeffan-31b-1710 | 31 B | 73.13 |
| Sieve 31B v3 | 31 B | 71.68 |
| OneJev1.6-27B | 27 B | 69.55 |
| WeMM-JEV-27B | 27 B | 69.37 |
| AutoTrust-JEV-27B v1.1 | 27 B | 67.32 |
| VisionJEV 1.0.0 | 27 B | 66.46 |
| RSI-Jev v6.1 VL 27B | 27 B | 65.64 |
| AJev lm6q (Gemma 4 31B) | 31 B | 65.46 |
| OneJev1.6-9B | 9 B | 65.30 |
| Cerno 4B v1.2 | 4 B | 65.05 |
| OneJev1.6-4B | 4 B | 61.95 |
| **Jev 1.13** | not published | **57.96** |
| JEV-27B | 27 B | 53.64 |

Four things follow from that table, and all four matter.

**1. THX-02's vendor number is 7 points above Jev 1.13, at a fraction of the size.** HAL-X reports 65.06 with thinking and 63.83 without, against 57.96 for Jev 1.13 and 4.5 B of its own parameters against the 27 B class where the Jev name is reproduced. That is a genuine result: if the board carried it, 65.06 would land between RSI-Jev v6.1 VL 27B at 65.64 and VisionJEV 1.0.0 at 66.46, while being about six times smaller than either.

**2. THX-02 is not on the board, so treat 65.06 as a claim.** Its name does not appear in the 274-model dump, which means the number comes from HAL-X's own run on a 6,018-request stratified sample of the public suite. The model card is explicit that the full public suite and the private tests were not run. Nobody independent has reproduced it, and the board lists Jev 1.13 as hosted with no parameter count at all.

**3. "Beats Jev" is true. "Beats the Jev family" is not established.** The open reproductions around Jev are not one model with one score. They run from 53.64 (JEV-27B) to 69.55 (OneJev1.6-27B), and three of them sit above THX-02's claim: OneJev1.6-27B at 69.55, WeMM-JEV-27B at 69.37 and AutoTrust-JEV-27B v1.1 at 67.32. Two of them are within a point of it: VisionJEV at 66.46 and RSI-Jev at 65.64. Beating the hosted flagship is not the same as topping the family, and only the first is on the record.

**4. The vendor's own comparison table has aged.** It lists Sieve-31B at 62.52 and Cerno 4B v1.1 at 57.60, both from the authors' full-suite result files at the time. The board now carries later checkpoints of those same models: Sieve 31B v3 at 71.68 and Cerno 4B v1.2 at 65.05. A vendor table freezes the moment it is written, and in this category that moment is short.

:::warning
The two runs also differ in sample. THX-02's rows come from 6,018 requests, about 117 per benchmark. The rows it stars for other vendors come from their full 140,178-request runs. Per-benchmark sampling error on 117 requests is several points, so compare the overall index and the areas, never a single benchmark score across the two.
:::

A curiosity worth one line: the model that started the "Jeff" naming confusion, literally named `jeff` at 575 M parameters, scores 8.27 on the same board. It is not a contender.

## Where each one can run

This is the axis where the two are not close.

| | THX-02 | Jev 1.13 |
|---|---|---|
| Your own GPU | Yes, BF16, about 9 GB of weights, one RTX 4090 is enough | No |
| Your own CPU | Yes, BF16 or FP32, about 7.6 GB and 0.6 s per short request on 8 threads | No |
| A phone | Yes in client mode, and experimentally on-device under Termux with 12 GB of RAM | No, API client only |
| Air-gapped | Yes | No |
| Data leaves your network | Only if you use the HAL-X API | Always |
| Ops burden | You run and patch the server, and a separate vLLM thinker if you want thinking | None |

Jev is one HTTP call to an endpoint you do not control. THX-02 is a package you install, and the trade is explicit: you own the uptime and the GPU bill, and you keep the data.

:::info
Thinking is the one capability that does not survive the move to small hardware. THX-02's 60 M think adapter runs as a separate vLLM server, so CPU and phone deployments always answer directly and lose the reasoning gains that produce the 65.06. Those deployments are the 63.83 model in practice.
:::

## Latency and cost

Read the latency numbers with the harness attached to them, because the same model shows two very different figures.

| Measure | THX-02 | Jev 1.13 |
|---|---|---|
| Median per request, Jev Decision Index harness | Not on the board | 524 ms |
| Median per task, Artificial Analysis | Not measured | 127 ms |
| Median direct, self-hosted, RTX PRO 6000 | 50 ms | Not applicable |
| Median with `think="auto"` | 79 ms, 0.3 to 1 s when it thinks | Not applicable |
| Throughput | 129 requests per second in-process on one RTX 4090, 105 over HTTP | Not published |
| Cost per 1M input tokens | Free when self-hosted, rate-limited free tier on the HAL-X API | $0.042 |
| Cost per 1M tasks | Hardware and electricity | About $42 |

Jev 1.13 shows 524 ms on one board and 127 ms on another, which is not a contradiction: the two harnesses send different request shapes and measure different things. It is a warning against comparing a latency number from one table with a latency number from the other, and against comparing either with the 50 ms a self-hosted 4.5 B model gets on a quiet GPU.

At volume the shapes of the two bills diverge. Jev scales linearly with usage at $42 per million tasks. THX-02 has a fixed cost, one GPU, and a marginal cost near zero once that GPU exists, so on hardware you already own the API bill is pure saving at any volume. If you would have to buy the GPU, do the arithmetic on your own numbers: $42 per million tasks buys a lot of rental, and a 24 GB card that sits idle is the most expensive option on this page.

## What each one admits it is bad at

Both vendors publish their weak spots, which is the most useful documentation either of them ships.

| Weak spot | THX-02 | Jev 1.13 |
|---|---|---|
| Arithmetic, counting, dates | Partly covered by the think adapter, which adds 25.2 points on GSM8K | Documented as unreliable, keep the maths in code |
| Literal reading of instructions | Not listed | Yes, answers the question you wrote |
| Indirection and long irrelevant input | Not listed | Yes, filter the state first |
| Adversarial text | Not listed | Yes, test edge cases before deploying |
| Option order sensitivity | Handled by `tta`, which averages four option orders at about half the throughput | Listed, reorder and check the answer |
| Image work | 72.19 on the public vision index, but 53.8 on meme moderation and 36.0 on MMMU-Pro vision | Marked "Dreamer-ready": the format, the answers and the limits may change between releases |
| Calibration | Calibrated on the training distribution, relabel a few hundred examples for a new domain | Calibrated, and confidence is the documented routing signal |

The pattern is that Jev's docs assume a generative model is nearby and tell you to push arithmetic and date logic into code, while THX-02's thinking mode tries to absorb some of that work itself. Neither is a calculator, and neither should own your compliance arithmetic.

## When to choose which

<AccordionGroup>
  <Accordion title="Choose THX-02 if..." icon="mdi:server">
    - The decisions cannot leave your network, or the deployment is air-gapped
    - You need it on a CPU, in a container without a GPU, or on a phone
    - Your volume makes $42 per 1M tasks more expensive than the GPU you already own
    - You want to fine-tune, quantize or vendor the weights
    - You need it to attempt a small calculation rather than refuse it
  </Accordion>

  <Accordion title="Choose Jev if..." icon="mdi:cloud-outline">
    - You want an API call and no ops, and the volume is modest
    - You need draw-a-box answers, which only exist from Jev 1.14
    - 64k requests and a 32k per-question budget fit your documents better than 32k flat
    - You want a vendor with published patterns, SDKs in two languages and a support contract
    - You want the model whose behaviour the public indexes are calibrated around
  </Accordion>
</AccordionGroup>

## The decision rule

Four questions in order, and stop at the first one that settles it.

1. **Can the state leave your network?** If no, THX-02, and the rest of the comparison is moot.
2. **Is this a prototype under a few million tasks a month?** If yes, Jev, because you are buying nothing and shipping this week.
3. **Do you need to be near the top of the public board?** Then neither. The top is baselabs mammoth-1 at 75.34 and Jeffan-31b-1710 at 73.13, both open 27 to 31 B models. THX-02 at 65.06 and Jev 1.13 at 57.96 are mid-board choices made for other reasons.
4. **Is the decision arithmetic, dates or counting?** Then neither model should own it. Extract in the model, compute in code, and use the model only for the judgement.

Whatever survives those four, run your own pilot before you commit. Label 200 to 500 of your own examples, measure whether `confidence` separates the right answers from the wrong ones on your distribution, and pick the model whose failures are cheapest to catch. Every number in this article was measured on someone else's data.

## References

- [Jev Decision Index on Hugging Face](https://huggingface.co/spaces/multimodalart/jev-decision-index) - all public board scores, data generated 2026-11-06, 274 models, 37-benchmark panel
- [Artificial Analysis Decision Index](https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index) - 58 for Jev, rank 6 of 20 when checked, 127 ms per task, about $42 per 1M tasks
- [TypeSafe models and pricing](https://docs.typesafe.ai/models) - Jev 1.13 and 1.14, $0.042 per 1M input tokens, 64k per request, 32k per question
- [TypeSafe primitives](https://docs.typesafe.ai/introduction) - Choice, Score, Noul and Box
- [TypeSafe model jaggedness](https://docs.typesafe.ai/model-jaggedness) - Jev's documented failure modes
- [TypeSafe images documentation](https://docs.typesafe.ai/images) - the "Dreamer-ready" status of images and Box
- [THX-02 model card](https://huggingface.co/HAL-X-AI/THX-02) - 65.06 and 63.83, vision 72.19, latency and throughput
- [THX-02 Decision Model](../Models-LLMs/thx-02-decision-model.md) - the full article

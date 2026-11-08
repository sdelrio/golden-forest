---
title: "THX-02 Decision Model"
description: "THX-02 is a 4.5B open decision model that takes a state plus typed questions and returns calibrated probabilities for every option, running locally on a GPU, a CPU or a phone."
tags: [ai, llm, agents, self-hosted]
---

import Steps from '@site/src/components/Steps/Steps';
import Step from '@site/src/components/Steps/Step';

# THX-02 Decision Model

**THX-02** is a decision model by **HAL-X**, released under Apache-2.0. It does not answer with free text. You give it a **state** (a message, a ticket, a document, a JSON record, an agent trace, a photo or a chart) and a set of **typed questions** written in plain language, and it returns a probability for every option you supplied. When a question needs a calculation or a chain of logic, it can write a short thought first and decide with it.

The whole point is what it refuses to do. It never invents an option, it never writes prose unless it is thinking, and every answer is a full distribution you can threshold. For agent routing, ticket triage, moderation or quality control that is a better shape than parsing a paragraph of LLM output and hoping the label is spelled the way your code expects.

The model is small enough to matter: 4.5 B parameters for the decision model plus a 60 M think adapter, about 9 GB of weights, one RTX 4090 (24 GB) is enough, and the API client has no dependencies, so it also runs in Termux on Android.

## Why a decision model instead of a chat model

Asking a general LLM "is this ticket billing or shipping?" works until you need it to be cheap, fast and stable. THX-02 changes the contract in four ways:

- **The label set is part of the request.** New categories need no retraining: you write short plain-language descriptions of each option and the model reads them. A new department, intent or moderation class is a request edit, not a fine-tune.
- **Answers are calibrated distributions.** Every answer carries `probabilities` and `confidence`, so a `0.38` top score can be routed to a human instead of silently guessed.
- **Questions are typed.** `choice`, `noul` (yes/no) and `score` (ordered scale) each have a defined output, so there is nothing to parse out of prose.
- **Many questions share one read.** Up to 64 named questions about the same state go in one request: department, priority, refund request and churn risk are answered in one pass.

:::info
The reference demo routes 24 customer messages in 16 languages to a department, plus a priority and a sentiment for each, in a single `/v1/decide/batch` call of 641 ms. The vague message that scored `0.38` on its top department was sent to human review rather than guessed.
:::

## State and typed questions

A request has a `state`, 1 to 64 `questions`, optionally up to 4 images, and two knobs: `think` and `tta`.

| Question type | What you write | What comes back |
|---|---|---|
| `choice` | `instructions` plus `criteria` as `{key: description}`, 1 to 255 options | `choice`, `probabilities`, `confidence` |
| `noul` | `instructions` only | `noul`, the probability of yes |
| `score` | `instructions` plus `criteria` as an ordered list of labels | `probabilities` per level and the expected `score` |

`tta` is option-order averaging for `choice` questions: `4` reads the options in four orders and is more accurate at roughly half the throughput. Write the criteria as short definitions of what each option means, because those descriptions are what the model reads.

## Quickstart over the API

<Steps>
  <Step title="Install the client">
    The `thx02` package has no dependencies, so this step also works on a laptop or in Termux.
    ```bash
    pip install thx02
    export HALX_API_KEY=sk-...          # optional on the free tier, which is limited per IP
    ```
  </Step>
  <Step title="Ask from the command line">
    ```bash
    thx02 "Salam, kartımdan iki dəfə pul çıxılıb, geri qaytarın" \
      --choice "team=billing:charges and refunds,support:technical problems,sales:buying a product" \
      -i "Which team should handle this?" --yesno "Does the customer ask for a refund?"
    ```

    The CLI prints a small bar chart per question and the latency, for example `billing 96.0%` and `yes 95.8%` in `126 ms`.
  </Step>
  <Step title="Or call it from Python">
    ```python
    from thx02 import Client, choice, noul, score

    thx = Client()                       # reads HALX_API_KEY
    out = thx.decide(
        "Salam, kartımdan iki dəfə pul çıxılıb, geri qaytarın zəhmət olmasa.",
        {
            "team":   choice("Which team should handle this?", billing="Charges and refunds",
                             support="Technical problems", sales="Buying a product"),
            "refund": noul("Does the customer ask for a refund?"),
            "anger":  score("How frustrated is the customer?", ["calm", "annoyed", "angry"]),
        },
    )
    print(out["answers"]["team"]["choice"])           # billing
    print(out["answers"]["refund"]["noul"])           # 0.957
    ```
  </Step>
</Steps>

The same client covers the rest of the surface: `thx.batch([...])` sends up to 1,024 states per call and returns results in order, `images=[...]` accepts paths, bytes or data URIs (up to 4), and `Client.top(answer)` returns the winning `(label, probability)` of any answer. `thx02 --json` gives raw JSON for scripting, and `--batch tickets.txt --choice team=billing,shipping` emits one JSON object per line.

## Run the model locally

Three installs exist, and the difference is only what ships in the box:

| Install | What you get |
|---|---|
| `pip install thx02` | API client and the `thx02` command, no dependencies |
| `pip install "thx02[local]"` | Also runs the model on your own GPU or CPU |
| `pip install "thx02[server]"` | Also serves your own HTTP API (`thx02 serve`) |

```bash
pip install "thx02[local]"                     # add [fast] on NVIDIA GPUs for the compiled kernels
```

```python
from thx02 import THX02
m = THX02.load("HAL-X-AI/THX-02")              # downloads the weights once (about 9 GB); or a local folder
m.decide("I was charged twice", {"refund": {"type": "noul", "instructions": "Refund request?"}})
```

`THX02.load(".", device="cpu")` runs on CPU, slower. On GPU the model is BF16, on CPU BF16 or FP32. Trained context is up to 32k tokens per request.

To serve it to other applications, run the bundled HTTP server, which speaks the same API as `api.hal-x.ai`:

```bash
pip install "thx02[server]"
thx02 serve --model HAL-X-AI/THX-02 --port 8200 --gpus 0          # add --thinker-url to enable thinking
thx02 --server http://localhost:8200 "I was charged twice" --yesno "Refund request?"
```

The endpoints are `POST /v1/decide`, `POST /v1/decide/batch` (up to 1,024 items), `GET /health` and `GET /v1/models`. In production mode the server runs one worker per GPU on the same port (SO_REUSEPORT) and batches incoming requests into packed forward passes of up to 64, which is how it reaches its throughput numbers.

:::tip
The Python client accepts `Client(base_url="http://host:8200")`, so pointing an application at your own server instead of the public API is a one-argument change.
:::

## Thinking, on demand

Most decisions are recognition: the answer is visible in the state. Some need a step of work first, like subtracting two series off a chart or checking a chain of conditions in a bank policy. THX-02 handles that with three modes:

| `think` | Behaviour | Latency |
|---|---|---|
| `False` (default) | Direct answer only | 40 to 90 ms |
| `"auto"` | Thinks only when the direct answer is unsure *and* an internal gate says reasoning helps | median 79 ms, 0.3 to 1 s when it thinks |
| `True` | Thinks on almost every question | 0.5 to 2 s |

The mechanism is worth knowing because it explains the numbers. THX-02 reads the question once and gets a distribution `p0`. A self-gate answers an internal yes/no about whether this request needs step-by-step work. If the top probability of `p0` is below `tau` (0.6 in auto mode) and the gate fires, the same network with the 60 M think adapter writes a note of at most a few dozen words and reads the question again with that note attached. The final answer mixes both reads, weighted 0.7 to `p0` and 0.3 to `p1`, so a wrong note cannot override a confident direct read.

In practice: on the vendor's evaluation thinking adds 25.2 points on GSM8K, 6.1 on ANLI, 5.1 on CRUXEval and 4.3 on GPQA Diamond, and costs one to three points on matters of taste or recognition such as color preference or WinoGrande. The gate keeps most of those on the direct path, which is why `auto` is the setting behind the headline score.

```python
out = thx.decide(
    "Applicant income $4,200/month; rent $1,500; car loan $450; cards $250; new loan payment $600. "
    "Policy: total debt payments (including rent) must not exceed 50% of income.",
    {"policy": choice("Does the application pass the bank policy?", passes="Within the limit", fails="Over the limit")},
    think=True, return_thoughts=True,
)
a = out["answers"]["policy"]
print(a["choice"], a["thought"])
# fails  Total monthly debt payments = $1,500 + $450 + $250 + $600 = $2,800. 50% of income = $2,100. $2,800 > $2,100 ...
```

:::warning
The thinker is not part of the decision model pass. It is a vLLM server built from the files in `thinker/`, and without one `think` is ignored and THX-02 answers directly. On CPU and on phones there is no thinker, so those deployments always answer directly.
:::

## Benchmarks: the vendor's own index

These are HAL-X's numbers, measured on their Decision Index 0.3, not an independent leaderboard. The index covers 37 benchmarks in five areas, every benchmark is chance-corrected (0 is random guessing, 100 is perfect), and unanswered requests count as wrong.

| Model | Size | Decision Index 0.3 | Median latency |
|---|---|---|---|
| **THX-02, thinking (`auto`)** | 4.5 B | **65.06** | 79 ms |
| **THX-02, direct** | 4.5 B | **63.83** | 50 ms |
| Sieve-31B | 31 B | 62.52 | |
| Verdin-4B | 4.2 B | 58.29 | |
| H2O-Lightning-4B | 4.7 B | 57.86 | |
| d3-flash | 8.4 B | 57.79 | |
| Cerno 4B v1.1 | 4.2 B | 57.60 | |
| CoCo-Decision-4B v2.3 | 4.2 B | 55.38 | |
| d3-mini | 4.5 B | 54.90 | |
| d1-3B | 3.1 B | 48.19 | 19 ms |
| THX-01 (predecessor) | 0.3 B | 11.30 | 9 ms |

The package description puts THX-02 above **Jev (57.96)** and above 27B decision models. That claim is worth checking rather than repeating: the 2026-11-06 dump of the public Jev Decision Index does not list THX-02 at all, while several open JEV-27B reproductions score above 65.06. See [THX-02 vs Jev](../comparatives/thx-02-vs-jev.md) for the leaderboard rows, the deployment trade-offs and a decision rule.

The predecessor comparison is the more interesting one: THX-01, at 0.3 B, scored 11.30 on the same evaluation, so nearly all of the capability arrives with the 4.5 B model.

For image work the vendor reports **72.19** on the public sets of the Decision Vision Index, averaging ten of eleven public sets (Winoground is gated on Hugging Face and was not run). Per-benchmark scores range from 94.5 on InfographicVQA and 92.9 on key-information extraction from receipts and forms down to 53.8 on meme moderation and 36.0 on MMMU-Pro vision. That spread is the honest part: charts and forms are strong, exam questions rendered inside an image are not.

Throughput with production-size requests (111 tokens: support tickets, refunds, model routing, frustration scores in four languages) on one RTX 4090 in BF16: **129 requests per second** in-process on the compiled path and 105 requests per second through the HTTP API with 64 concurrent clients.

## What it is good for

The shape of the API points at a specific class of problem: decisions where you already know the answer space and want a cheap, calibrated pick.

- **Routing between models and tools.** Write the backends as criteria and send each message to the cheapest one that can answer it. In the vendor's table a SQL request goes to `code 1.00`, a live exchange rate goes to `search 0.94`, a word problem goes to `reasoning 0.95`, and "thanks, that was helpful!" goes to `small 0.98`, all around 120 to 140 ms.
- **Ticket triage.** Department, priority, refund request and churn risk in one request, with the four examples in the model card landing at `billing 0.94`, `shipping 0.98`, `security 0.99` and `sales 0.97`, including tickets written in Azerbaijani, Kazakh and Chinese.
- **Moderation and quality control.** The demo runs an open-vocabulary detector over an egg grading line and asks THX-02 `clean`, `dirty` or `cracked` per egg: 16 eggs per frame in about 320 ms on one GPU, with no training on eggs.
- **Policy and document checks.** Pass or fail against a written rule, with the arithmetic in the thought when it is not obvious.
- **Screen agents and games from pixels.** The model card shows a flight booking agent picking the next numbered button from a screenshot at about 170 ms per step, and THX-02 playing Snake from screenshots at about 130 ms per move.

:::tip
The `0.38` threshold pattern from the demo is the most reusable idea here. Pick a confidence floor per question, send anything below it to a human or to a bigger model, and you get a routing system whose failure mode is "asked for help" rather than "confidently wrong".
:::

## Running on a phone with Termux

The API client has no dependencies, which means the interesting mobile path works with plain Python. Install Termux from F-Droid or GitHub, then:

```bash
pkg update -y && pkg install -y python
pip install thx02
echo 'export HALX_API_KEY=sk-...' >> ~/.bashrc && source ~/.bashrc
thx02 "Kargom gelmedi, param ne zaman iade edilir?" --choice team=billing,shipping,support
```

Keeping a session alive across app switches is a tmux job:

```bash
pkg install -y tmux
tmux new -s thx                                  # start a session
thx02 --choice intent=question,complaint,order   # interactive: type messages, get decisions
# detach: Ctrl-b then d       re-attach later: tmux attach -t thx
```

A script that classifies every SMS you paste is one line: `while read -r s; do thx02 "$s" --yesno "Is this a scam?" ; done`.

Running the weights *on* the phone is the experimental path, not the recommended one. It needs an aarch64 phone with 12 GB or more RAM and about 9 GB of free storage, inside an Ubuntu userland:

```bash
pkg install -y proot-distro && proot-distro install ubuntu
proot-distro login ubuntu -- bash -c '
  apt-get update && apt-get install -y python3 python3-venv
  python3 -m venv /opt/thx02 && . /opt/thx02/bin/activate
  pip install torch --index-url https://download.pytorch.org/whl/cpu && pip install "thx02[local]"
  THX02_DEVICE=cpu thx02 --local HAL-X-AI/THX-02 "I was charged twice" --choice team=billing,shipping'
```

Expect about 0.6 s per short request and 7.6 GB of memory in BF16 on an 8-thread CPU. For a phone acting as a client, the API mode is the sane choice; local mode is for offline or privacy-bound cases.

## Limitations

The vendor lists these, and they matter more than the benchmark table:

- **The scores are a sample, not the leaderboard.** 6,018 requests from the public Decision Index suite, about 117 per benchmark. The full public suite (140,178 requests) and the private leaderboard tests have not been run. Per-benchmark sampling error on 117 requests is several points, so compare areas and the overall index rather than single benchmarks.
- **Thinking needs a GPU server.** The thinker runs under vLLM, so CPU and phone deployments answer directly and lose the reasoning gains.
- **Calibration is distribution-bound.** The probabilities are calibrated on the training distribution. On a very different domain, label a few hundred examples before acting on `confidence` alone.
- **Thoughts are not explanations.** Notes written while thinking can contain mistakes. They are inputs to the decision, not text to show end users without review.
- **Vision has holes.** Meme moderation at 53.8 and MMMU-Pro vision at 36.0 are both far from the chart and form scores.

## References

- [THX-02 model card on Hugging Face](https://huggingface.co/HAL-X-AI/THX-02)
- [thx02 on PyPI](https://pypi.org/project/thx02/)
- [HAL-X API reference](https://api.hal-x.ai/docs/thx-02/)
- [HAL-X API status](https://api.hal-x.ai/status/thx)
- [THX-02 on ModelScope](https://modelscope.ai/models/HAL-X/THX-02)
- [THX-01, the 0.3 B predecessor](https://huggingface.co/doofz/THX-01)
- [Announcement thread on X](https://x.com/reversedoofz/status/2118376454564299123)
- [TurboQuant: Extreme LLM Compression](turbo-quant.md) and [Qwen3.5 Small Models](Qwen3.5-Small-Series.md) for other local-model options

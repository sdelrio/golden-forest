---
title: "Kubernetes GPU Guide 2026: Scheduling, Sharing, Monitoring, and Running AI Workloads"
description: "How Kubernetes schedules GPUs, which sharing strategy fits your workload (MIG, time-slicing, MPS, DRA), what DCGM worth alerting on, and when a GPU does not belong in a cluster."
tags: [kubernetes, gpu, devops, ai]
sidebar_label: "GPU Workloads"
---

# Kubernetes GPU Guide 2026: Scheduling, Sharing, Monitoring, and Running AI Workloads

Kubernetes has no idea what a GPU is. A device plugin on each node tells the kubelet "this box has four devices called `nvidia.com/gpu`", the scheduler treats that as a countable resource, and everything else - driver, container toolkit, metrics, MIG layout - is a stack of DaemonSets you have to keep alive. That stack is where GPU clusters actually fail, not in the pod spec.

This article is the decision layer: which setup to install, when to share a GPU and how, what to watch, and when the answer is "do not run this on Kubernetes at all". For the full walkthrough with every manifest and verification step, follow the [Kubezilla GPU guide](https://kubezilla.io/kubernetes-gpu-guide/).

## How a GPU Request Actually Works

A pod asking for a GPU gets one whole device, handed over by the device plugin after the scheduler picks a node with a free one. The pieces and what breaks without them:

| Component | Job | Symptom when missing |
| :--- | :--- | :--- |
| NVIDIA driver | Kernel module talking to the card | Node has no GPU at all |
| Container Toolkit (CDI) | Makes devices and driver libs visible in the container | Pod starts, `nvidia-smi` sees nothing |
| Device plugin | Advertises `nvidia.com/gpu` to the kubelet | `nvidia.com/gpu` absent from `kubectl describe node` |
| GPU Feature Discovery | Labels nodes with `nvidia.com/gpu.product`, `.memory` | You cannot target a GPU model |
| DCGM Exporter | Prometheus metrics from the GPU | `kubectl top` shows CPU only, GPU usage is invisible |

Three rules follow from the extended-resource model: GPUs go in `limits` (the request is copied automatically), request and limit must be equal because GPUs cannot be overcommitted, and `0.5` is not a valid value. Fractions only exist through the sharing options below.

## Setup: Operator or Hand-Rolled Stack

```bash
helm install --wait gpu-operator -n gpu-operator \
  nvidia/gpu-operator --version=v26.7.2
```

| Situation | Choice |
| :--- | :--- |
| Self-managed cluster, many GPU nodes | NVIDIA GPU Operator, pinned version, values in Git |
| EKS, GKE, AKS with preinstalled drivers | Operator with `driver.enabled=false` |
| One node, one card, you already run `nvidia-smi` daily | Device plugin alone is enough |
| You need MIG layouts or DCGM with no extra work | Operator, because it installs MIG Manager and the exporter |
| Driver installed by the OS image | Never let the Operator install a second one |

:::warning
Two owners for the driver is the most common way to break a node: a host package upgrade changes the kernel module while the container libraries stay behind, and pods fail with `Driver/library version mismatch`. Pick one owner per node pool and pin kernel plus driver as a tested pair.
:::

## Scheduling a GPU Pod

```yaml
spec:
  nodeSelector:
    nvidia.com/gpu.product: NVIDIA-L4
  tolerations:
    - key: nvidia.com/gpu
      operator: Exists
      effect: NoSchedule
  containers:
    - name: app
      image: registry.example.com/inference:1.4.0
      resources:
        limits:
          nvidia.com/gpu: 1
```

Two habits matter more than the manifest. Taint GPU nodes, otherwise ordinary CPU pods fill their memory and your GPU pod sits `Pending` with the card free. Target GPU types through Feature Discovery labels, never node names, so a replacement node still matches.

## Sharing One GPU: Which Strategy

| Strategy | Isolation | When to use | When not to |
| :--- | :--- | :--- | :--- |
| Exclusive (default) | Full | Training, large-model inference, anything latency sensitive | Notebooks and CI that idle 90% of the day |
| MIG | Hardware: own memory and compute slices | Multi-tenant inference, predictable small models, Ampere or newer data center GPUs | Old GPUs, workloads that need the whole card |
| Time-slicing | None: shared memory, one OOM kills everyone | Dev, notebooks, CI, bursty light jobs | Tenants that must not affect each other, per-pod metrics |
| MPS | Partial: memory and compute caps per client | Many small steady processes on one full GPU | MIG-enabled nodes, anything untested in production |
| DRA | Depends on driver config | New clusters needing attribute-based selection (Kubernetes 1.34+) | Teams that want the best-documented path today |

Four questions decide it:

1. Do tenants trust each other? No trust means MIG or separate cards, never time-slicing.
2. Does the workload need the whole card's memory? If yes, sharing only adds failure modes.
3. Is the goal density for intermittent users? Time-slicing is the cheap answer for dev and CI.
4. Are you on Kubernetes 1.34+ and want device attributes instead of counts? DRA is GA, but NVIDIA's sharing features under it are still partly alpha, so test outside production.

Two traps: time-slicing makes `nvidia.com/gpu` capacity look like `replicas x GPUs` while the hardware is unchanged, and DCGM can no longer attribute metrics to a pod. MIG layouts need a node drain and a reboot cycle, so they are a per-node-pool decision, not something to toggle per workload.

## Running AI Workloads: What Actually Bites

- **Model weights need a PersistentVolume.** Without one, every restart re-downloads from Hugging Face, and autoscaled nodes pay for it in egress.
- **`/dev/shm` is too small by default.** Mount an in-memory `emptyDir` or multi-GPU jobs fail in NCCL.
- **Loading takes minutes.** A `startupProbe` with a generous `failureThreshold`, not a liveness probe that kills the pod mid-load.
- **One GPU means `strategy: Recreate`.** A rolling update on a single-GPU node asks for a second card and deadlocks.
- **Never scale LLM serving on CPU.** vLLM exposes queue depth (`vllm:num_requests_waiting`); use KEDA or the Prometheus Adapter on that instead.
- **Keep one warm replica for user-facing traffic.** A new GPU node takes minutes to boot, load the driver, pull the image and load weights.
- **Spot instances suit training with checkpoints and batch jobs.** Not online serving.

## Monitoring

The operator installs DCGM Exporter on port 9400. Four metrics carry most of the value:

| Metric | Why |
| :--- | :--- |
| `DCGM_FI_DEV_GPU_UTIL` | Allocated but near zero means you are paying for idle silicon |
| `DCGM_FI_DEV_FB_USED` / `FB_FREE` | Memory pressure shows up before the OOM |
| `DCGM_FI_DEV_XID_ERRORS` | Any non-zero value is a hardware or driver problem |
| `DCGM_FI_DEV_GPU_TEMP` | Sustained heat means throttling and shorter card life |

Use Grafana dashboard 12219, then add the panel that pays for itself: `avg by (exported_namespace) (DCGM_FI_DEV_GPU_UTIL)`, plus an alert for any pod holding a GPU under 5% for two hours. `GPU_UTIL` only means "a kernel was running"; when the profiling counters are available, `DCGM_FI_PROF_PIPE_TENSOR_ACTIVE` tells you whether the AI workload uses the tensor cores at all.

## Keeping the Bill Down

1. Measure first, with the idle-GPU alert above.
2. Right-size: a 7B model rarely needs 80 GB, and a MIG slice often serves it.
3. Share dev and CI with time-slicing, multi-tenant inference with MIG.
4. Bin-pack GPU node pools. Use `MostAllocated` scoring or a batch scheduler so empty nodes can be removed instead of spread.
5. Set `ttlSecondsAfterFinished` on Jobs and a policy for idle notebooks.
6. Queue instead of over-provisioning: Kueue gives each team a quota and a turn.

## When Kubernetes Is the Wrong Choice

- **One machine, one user.** `docker run --gpus all` plus a systemd unit has fewer moving parts than a control plane, a CNI and an operator.
- **A single long-lived model for one team.** A VM with the model and a reverse proxy is cheaper to run and to debug.
- **Hard real-time inference.** Scheduler and CNI overhead plus no CPU pinning guarantees make the tail latency unpredictable.
- **Experiments you will delete this week.** Driver, toolkit and operator bring-up costs more than the experiment.
- **Workloads needing full GPU control** (custom kernel modules, exclusive NVLink topologies). Bare metal or a dedicated VM is honest about it.
- **No one to own the platform.** GPU nodes are a maintenance commitment, not a one-time install.

Kubernetes earns its place when GPUs are shared across teams, when workloads come and go, and when you want the same quotas, rollouts and observability you already use for CPU services. Below that threshold it is overhead with a control plane.

## References

- [Kubernetes GPU Guide 2026 (Kubezilla)](https://kubezilla.io/kubernetes-gpu-guide/)
- [Scheduling GPUs, Kubernetes documentation](https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/)
- [Dynamic Resource Allocation, Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/)
- [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html)
- [MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/)
- [vLLM on Kubernetes](https://docs.vllm.ai/en/latest/deployment/k8s.html)
- [K8s Machine Learning](k8s-ml.md)
- [Multi-Environment K8s](k8s-environments.md)

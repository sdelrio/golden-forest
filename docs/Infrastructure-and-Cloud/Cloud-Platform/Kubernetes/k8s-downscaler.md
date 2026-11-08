---
title: "GoKubeDownscaler, a horizontal autoscaler for Kubernetes workloads"
description: "Schedule-based downscaling for Kubernetes: what GoKubeDownscaler does, how it differs from HPA, VPA, KEDA and the Cluster Autoscaler, and when not to use it."
tags: [kubernetes, devops, cloud]
sidebar_label: "GoKubeDownscaler"
---

# GoKubeDownscaler, a horizontal autoscaler for Kubernetes workloads

GoKubeDownscaler is the Go rewrite and successor of [py-kube-downscaler](https://github.com/caas-team/py-kube-downscaler). It is a Kubernetes controller that scales workloads down to zero outside the hours you declare, then brings them back to their original state when the window ends. It is GPL-3.0, installed with a Helm chart, and runs on any conformant cluster (EKS, GKE, AKS, k3s, on-prem).

The important part is what its input is: not CPU, not requests per second, but a calendar. That is why it does not compete with the Horizontal Pod Autoscaler. HPA answers "how many replicas does this workload need right now". GoKubeDownscaler answers "should this workload exist at all right now". Non-production environments, internal tools and demo stacks usually should not exist at 3 AM.

:::info
The project's headline "70% savings" assumes a 40-hour work week with everything scaled to zero outside it. Your mileage depends on how much of the cluster is non-production and whether nodes actually get drained afterwards (see the Cluster Autoscaler row below).
:::

## What it does

- **Schedule-driven scaling.** You define uptime or downtime as recurring windows (`Mon-Fri 09:00-17:00 Europe/Madrid`), RFC3339 timespans (holidays, one-off freezes) or `always`/`never`.
- **Three levels of configuration.** Cluster-wide defaults (environment variables or CLI flags), namespace annotations, and workload annotations. The most specific level wins.
- **Exclusions at the same granularity.** Whole namespaces by regex (`EXCLUDE_NAMESPACES`), or a single workload with `downscaler/exclude` / `downscaler/exclude-until`.
- **Restores what it changed.** Once the window closes, the controller puts the workload back to its previous state instead of guessing a replica count.
- **Dry-run mode and Prometheus metrics.** You can measure the savings before letting it touch anything.
- **No CRDs and no code changes.** It works with stock annotations, which means it fits GitOps setups without new operators.

Windows are evaluated per workload on every scan (30 seconds by default), so a workload created at 2 AM is handled on the next pass. The default grace period of 15 minutes keeps freshly created workloads from being downscaled before they finish starting.

## The annotations that matter

| Annotation | Effect |
| :--- | :--- |
| `downscaler/uptime` | Keep the workload up inside this window, scale it down outside. |
| `downscaler/downtime` | Scale the workload down inside this window, up outside. |
| `downscaler/exclude` | `true` or a timespan. Never scale this workload. |
| `downscaler/exclude-until` | RFC3339 timestamp. Temporary exemption, typically a hotfix branch. |
| `downscaler/force-uptime` | Force up regardless of the schedule. |
| `downscaler/force-downtime` | Force down regardless of the schedule. |
| `downscaler/downscale-replicas` | Replica count during downtime, default `0`. |
| `downscaler/grace-period` | How long a workload must exist before its first scaling, default 15 minutes. |

`uptime` and `downtime` are mutually exclusive in the same scope, and so are `force-uptime` and `force-downtime`. If windows overlap, the controller logs an error for that workload and skips it for the cycle instead of guessing.

## Supported workloads

Deployments are the default (`--include-resources` defaults to `deployments`), and everything else has to be listed explicitly. The current set covers:

- **Core:** Deployments, StatefulSets, DaemonSets (by setting a node selector that matches nothing), CronJobs and Jobs (`suspend`), HPAs (`minReplicas`), PodDisruptionBudgets.
- **Load balancer cost, since 1.4.0:** Services of type LoadBalancer (switched back to ClusterIP), Ingresses and Gateways (class switched to a `downscaler-*` class).
- **Operators and CRDs:** Argo Rollouts, KEDA ScaledObjects, Zalando Stacks and Postgresqls, Prometheus, GitHub Actions AutoscalingRunnerSets, Strimzi Kafka connectors and mirrors, and several OpenKruise kinds.

## Install and first schedule

```bash
helm upgrade -i gokubedownscaler oci://ghcr.io/caas-team/charts/go-kube-downscaler
```

Set a cluster-wide window in the chart values, and exclude the namespaces that must never go down:

```yaml
configMap:
  extraConfig: |
    DEFAULT_DOWNTIME: "Mon-Fri 18:00-08:00 UTC, Sat-Sun 00:00-24:00 UTC"
    EXCLUDE_NAMESPACES: "^(kube-system|kube-downscaler|monitoring|.*prod.*)$"
```

Or scope it to one namespace, or to one workload, without touching the global config:

```bash
kubectl annotate ns staging downscaler/uptime="Mon-Fri 08:00-19:00 Europe/Madrid"
kubectl annotate deploy api -n staging downscaler/exclude-until="2027-07-29T21:30:00Z"
```

:::tip
Run it in dry-run mode for a week first and watch the `kubedownscaler_potential_current_saved_cpu_cores` and `kubedownscaler_potential_current_saved_memory_bytes` metrics. They estimate what would have been saved, per namespace, before you commit to a schedule.
:::

Metrics are exposed on port `8085` of the controller and have to be enabled explicitly; `kubedownscaler_scaling_errors` and `kubedownscaler_cycle_duration_seconds` are the two worth alerting on. The webhook component is optional: it intercepts workload creation and applies the schedule immediately, instead of waiting for the next scan.

## Comparison with the built-in autoscalers

| Tool | What it scales | Input | What it does not do |
| :--- | :--- | :--- | :--- |
| **HPA** | Pod replica count of one workload | CPU, memory, custom or external metrics | Cannot reach zero; ignores the clock; needs metrics-server or an adapter |
| **VPA** | CPU and memory requests of a pod | Historical usage | Does not change replica count, so it saves nothing in an empty cluster; needs a restart |
| **KEDA** | Pod replica count, down to zero | Event sources (queue depth, HTTP, cron triggers) | Needs the event source to be reachable; cron triggers cover simple schedules, not multi-timezone business hours, exclusions or LB teardown |
| **Cluster Autoscaler / Karpenter** | Number of nodes | Pending pods and node utilisation | Scales nothing inside a namespace; only reacts after pods are evicted or created |
| **GoKubeDownscaler** | Workloads, HPAs, LB services, ingresses, CRDs | Wall clock and timezones | Does not react to load; does not resize pods; needs a schedule you maintain |

Read it as two layers rather than four alternatives. GoKubeDownscaler removes demand on a schedule, the HPA and KEDA shape whatever demand remains, and the Cluster Autoscaler or Karpenter turns the resulting pod count into a node count and a bill. Without a node autoscaler the pods go to zero and the nodes stay up, so the savings stop at the pod level.

Two interactions are worth knowing before you combine them:

- **HPA:** the downscaler patches `minReplicas`, and it refuses a downscale value below `1` because the HPA API does not allow `minReplicas: 0`. A true scale-to-zero therefore requires targeting the Deployment directly, or going through KEDA, whose ScaledObject supports zero.
- **KEDA:** when `scaledobjects` is in `--include-resources`, the downscaler pauses the ScaledObject and automatically excludes the workloads that object manages, so the two controllers do not fight over the replica count.

## Pitfalls

- **Stateful workloads.** Scaling a StatefulSet to zero is not the same as deleting it: PVCs survive, but restart is ordered, slower, and can be minutes for a large dataset. Clustered databases lose quorum, and some operators react badly to a member disappearing.
- **Databases and backups.** A suspended CronJob does not run late; the backup you expected at 2 AM simply never happens. Exclude backup jobs, or move them outside the downtime window.
- **Cold starts.** Image pulls, JIT warmup, cache refills and connection pools all land on the first user after the window. If 9:00 is a rush, scale up 15 minutes early with a separate `upscale-period`.
- **Workloads that must stay up.** Anything the cluster itself depends on: ingress controllers, cert-manager, the monitoring stack, the operators that recreate the very workloads being scaled. `kube-system` and the downscaler's own namespace are excluded by default, and you should extend that list deliberately.
- **Load balancers and DNS.** Dropping a Service to ClusterIP or switching the Ingress class removes the cloud load balancer. DNS records managed by ExternalDNS may stay stale until they are reconciled, so the hostname can resolve to nothing for a while.
- **GitOps drift.** Argo CD or Flux will see the patched replica count as drift and revert it, and the downscaler will patch it back. Exclude those workloads, or configure `ignoreDifferences` on the scaled fields.
- **Timezone and holidays.** Windows accept IANA timezones and DST is handled for you, but public holidays are not: they need explicit `exclude-until` annotations or RFC3339 windows.

## When not to use it

- Production services with a 24/7 SLA, or anything a customer can hit outside business hours.
- Clusters where the cost is storage, licenses or idle managed services rather than compute. Scaling pods to zero does not shrink a managed database or an S3 bill.
- Workloads where a cold start breaks the contract: streaming consumers with replay costs, long-running batch with deadlines, stateful quorum systems.
- Teams that cannot maintain a schedule. A wrong annotation silently takes an environment down at the wrong hour, and the failure mode is "nobody could work this morning", not a metric spike.

Used on non-production namespaces with a node autoscaler behind it, it is one of the cheapest wins available: a Helm release, a handful of annotations, and no application changes.

## References

- [Official documentation](https://kube-downscaler.io/)
- [GitHub repository](https://github.com/caas-team/GoKubeDownscaler)
- [Workload types and scaling behaviour](https://kube-downscaler.io/docs/downscaler/workload-types)
- [Annotations and scopes](https://kube-downscaler.io/docs/downscaler/configurations/values)
- [Related: HPA autoscalers with Prometheus](Concepts/hpa-autoscalers.md)
- [Related: short notes on Kubernetes autoscalers](k8s-autoscalers.md)

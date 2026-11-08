---
tags: [kubernetes, performance]
---

# K8s autoscalers

Autoscaling in Kubernetes is not one feature but a stack: pod-level scaling driven by load, node-level scaling driven by pending pods, and schedule-based scaling where the input is the clock rather than a metric.

## Scaling on load

- [Horizontal Pod Autoscaler](Concepts/HPA.md) for replicas based on CPU, memory or custom metrics.
- [HPA autoscalers with Prometheus](Concepts/hpa-autoscalers.md) for external metrics through the Prometheus adapter.

## Scaling on a schedule

[GoKubeDownscaler](k8s-downscaler.md) scales workloads, HPAs and load balancer resources to zero outside working hours. It complements the load-based autoscalers rather than replacing them.

## Hetzner

[Cluster Autoscaler for Hetzner Cloud](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/cloudprovider/hetzner) adds and removes Hetzner Cloud servers when Pods cannot be scheduled.


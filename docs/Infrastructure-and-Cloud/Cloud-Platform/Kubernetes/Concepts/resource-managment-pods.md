---
sidebar_position: 1
title: "Resources/Limits"
---

## Resources/Limits 

### Requests

Are usually used to determine the average consumption.
When schedulers need to asign the pod, it doesn't know how much it will consume, so it will use this value for selecting the node to start.
It means "give me at least X ammount of CPU".
It doesn't help on limiting the CPU usage.

### Limits

Set the max number of resources allowed.
You are defining a period and a quota.

Example: `cpu: 100m`

Period $= 0.1s = 100,000 \mu s$

Quota $= 0.01s = 10,000 \mu s$


Can use the CPU for 0.01 seconds every 0.1 seconds.

If your container has a hard limit and wants more CPU, it has to wait for the next period.

## What to do with limits

### Always use limits?

### Never use limits?

### Don't use?


## References

* [Documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers)
* https://itnext.io/cpu-limits-and-requests-in-kubernetes-fa9d55948b7c
* [Why you should keep using CPU limits on k8s](https://dnastacio.medium.com/why-you-should-keep-using-cpu-limits-on-kubernetes-60c4e50dfc61)
* [Stop using CPU limits](https://home.robusta.dev/blog/stop-using-cpu-limits)


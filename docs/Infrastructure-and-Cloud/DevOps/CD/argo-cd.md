---
tags: [ci-cd, kubernetes, devops]
---

# Argo CD

A declarative GitOps continuous delivery toold for Kubernetes.

* [Homepage](https://argoproj.github.io/cd/)
* [Doc](https://argo-cd.readthedocs.io/en/stable/)
  * [Plugins](https://argo-cd.readthedocs.io/en/stable/user-guide/config-management-plugins/)
* [ApplicationSet Controller](https://argocd-applicationset.readthedocs.io/en/stable/)
  * [Generators](https://argocd-applicationset.readthedocs.io/en/stable/Generators/)

## Multi-Cluster

Where Argo CD lives once there is more than one cluster, and the tradeoffs of each topology, is its own topic: [Multi-Cluster Argo CD Architecture](argo-cd-multi-cluster.md).

## Plugins

### Lovely plugin with Vault Replacer

* [https://github.com/crumbhole/argocd-lovely-plugin/tree/main/examples/argocd-vault-replacer](https://github.com/crumbhole/argocd-lovely-plugin/tree/main/examples/argocd-vault-replacer)


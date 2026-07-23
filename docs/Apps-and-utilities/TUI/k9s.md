---
title: "k9s"
description: "A fast, real-time terminal UI for managing Kubernetes clusters with vim-style navigation and built-in resource monitoring."
tags:
  - CLI
  - terminal
  - kubernetes
  - k8s
  - TUI
---

# k9s

[k9s](https://k9scli.io/) is a terminal-based UI for interacting with Kubernetes clusters. It continuously watches Kubernetes for changes and offers real-time commands to navigate, observe, and manage your deployed applications. The interface uses vim-style key bindings familiar to power users.

```
 Context: mycluser.local                           <c>      Cordon     <u> Uncordon        ____  __.________
 Cluster: mycluster.local                          <ctrl-d> Delete     <y> YAML           |    |/ _/   __   \______
 User:    kube-admin-mycluster.local               <d>      Describe                      |      < \____    /  ___/
 K9s Rev: v0.25.18                                 <r>      Drain                         |    |  \   /    /\___ \
 K8s Rev: v1.20.14                                 <e>      Edit                          |____|__ \ /____//____  >
 CPU:     26%                                      <?>      Help                                  \/            \/
 MEM:     44%
┌───────────────────────────────────────────────── Nodes(all)[3] ──────────────────────────────────────────────────┐
│ NAME↑   STATUS  ROLE                       VERSION     PODS   CPU   MEM   %CPU   %MEM   CPU/A   MEM/A AGE        │
│ node0   Ready   etcd,worker                v1.20.14      45   656  4198     16     53    4000    7818 2y153d     │
│ node1   Ready   controlplane,etcd,worker   v1.20.14      30  1066  3710     26     37    4000    9770 2y351d     │
│ node2   Ready   controlplane,etcd,worker   v1.20.14      38  1482  4384     37     44    4000    9838 2y351d     │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Key Features

- **Real-time Monitoring**: Tracks live activities of resources running in your Kubernetes cluster.
- **CRD Support**: Handles both standard Kubernetes resources and custom resource definitions.
- **Cluster Metrics**: Displays real-time CPU, memory, and resource consumption for pods, containers, and nodes.
- **Error Zoom**: Drill down directly to diagnose what's wrong with your cluster's resources.
- **RBAC Viewing**: View cluster/roles, bindings, and reverse-lookup what a user or ServiceAccount can do.
- **Benchmarking**: Run HTTP benchmarks against services directly from the UI.
- **Resource Graph Traversals**: Navigate dependencies between Kubernetes resources.
- **Skinnable**: Customize the look and feel with skins and configurable column layouts.
- **Plugin Support**: Extend k9s with custom cluster commands.
- **Multi-Resource Views**: Pulse and XRay views for cluster-wide overviews.

:::info
k9s tracks resource changes in real-time — no manual refresh needed. It polls the Kubernetes API and updates the UI automatically.
:::

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="homebrew" label="Homebrew" default>

```bash
brew install derailed/k9s/k9s
```

  </TabItem>
  <TabItem value="macport" label="MacPorts">

```bash
sudo port install k9s
```

  </TabItem>
  <TabItem value="scoop" label="Scoop (Windows)">

```bash
scoop install k9s
```

  </TabItem>
  <TabItem value="choco" label="Chocolatey (Windows)">

```bash
choco install k9s
```

  </TabItem>
  <TabItem value="pacman" label="Pacman (Arch)">

```bash
pacman -S k9s
```

  </TabItem>
  <TabItem value="snap" label="Snap (Linux)">

```bash
snap install k9s --devmode
```

  </TabItem>
  <TabItem value="go" label="Go install">

```bash
go install github.com/derailed/k9s@latest
```

  </TabItem>
  <TabItem value="docker" label="Docker">

```bash
docker run --rm -it -v ~/.kube/config:/root/.kube/config derailed/k9s
```

  </TabItem>
  <TabItem value="binary" label="Binary Release">

Download from the [GitHub Releases](https://github.com/derailed/k9s/releases) page.

  </TabItem>
</Tabs>

## Preflight Check

Before using k9s, ensure your terminal supports 256 colors and your editor is configured:

```bash
export TERM=xterm-256color
export KUBE_EDITOR=nvim  # or your preferred editor
```

:::info
k9s prefers Kubernetes 1.28+. Check compatibility with your cluster version on the [K8s Compatibility Matrix](https://github.com/derailed/k9s#k8s-compatibility-matrix).
:::

## Common Commands

| Action | Command |
| :--- | :--- |
| Launch k9s | `k9s` |
| Start in a specific namespace | `k9s -n mynamespace` |
| Start in pod view | `k9s -c pod` |
| Use a different kubeconfig context | `k9s --context myctx` |
| Start in read-only mode | `k9s --readonly` |
| Show all resource aliases | `ctrl-a` |
| Show help / key bindings | `?` |
| Quit k9s | `:q` or `ctrl-c` |

## Keyboard Navigation

k9s uses vim-style navigation for resource management:

| Action | Key |
| :--- | :--- |
| Describe a resource | `d` |
| View resource YAML | `v` |
| Edit a resource | `e` |
| View logs | `l` |
| Shell into container | `s` |
| Port-forward | `shift-f` |
| Delete a resource | `ctrl-d` |
| Kill a resource (no confirm) | `ctrl-k` |
| Cordon a node | `<c>` |
| Uncordon a node | `<u>` |
| Drain a node | `r` |
| Restart resource | `r` |
| Filter resources | `/filter` |
| Inverse filter | `/!filter` |
| Switch context | `:ctx` |
| Switch namespace | `:ns` |
| Toggle wide columns | `ctrl-w` |
| Refresh view | `ctrl-r` |
| Pulses dashboard | `:pulses` |
| XRay view | `:xray RESOURCE` |
| Popeye scan | `:popeye` |

## Customization

K9s stores configuration under `$XDG_CONFIG_HOME/k9s` (typically `~/.config/k9s/` on macOS/Linux, `%LOCALAPPDATA%\k9s` on Windows). Run `k9s info` to see the exact paths for your system.

### Skins

Customize colors and layout by placing skin files in `$XDG_DATA_HOME/k9s/skins/` or set a skin in your config:

```yaml
# $XDG_CONFIG_HOME/k9s/config.yaml
k9s:
  ui:
    skin: dracula
```

### Hotkeys

Configure custom hotkeys in `$XDG_CONFIG_HOME/k9s/hotkeys.yaml`:

```yaml
hotKeys:
  shift-l:
    shortCut: Shift-L
    description: Get logs
    command: logs
  shift-0:
    shortCut: Shift-0
    description: Viewing pods
    command: pods
```

### Aliases

Create resource aliases in `$XDG_CONFIG_HOME/k9s/aliases.yaml` using GVR (Group/Version/Resource) format:

```yaml
aliases:
  pp: v1/pods
  crb: rbac.authorization.k8s.io/v1/clusterrolebindings
  sg: apps/v1/deployments
```

### Plugins

Extend k9s with custom commands via plugins in `$XDG_CONFIG_HOME/k9s/plugins.yaml`:

```yaml
plugins:
  view-pod-logs:
    shortCut: Shift-L
    description: Pod logs
    command: kubectl
    args:
      - logs
      - -f
      - $POD
      - -n
      - $NAMESPACE
```

## Popeye Integration

k9s integrates with [Popeye](https://popeyecli.io/), a Kubernetes cluster sanitizer. Press `:popeye` (or `:pop`) inside k9s to scan your cluster for misconfigurations and potential issues. Configure per-cluster spinach files at `$XDG_DATA_HOME/k9s/clusters/<cluster>/<context>/spinach.yml`.

## Debug Logs

K9s produces logs that can help diagnose issues. View runtime info with:

```bash
k9s info
```

This prints the log file location. Then tail it:

```bash
tail -f ~/.local/state/k9s/k9s.log
```

Start k9s in debug mode:

```bash
k9s -l debug
```

## References

- [Official Documentation](https://k9scli.io/)
- [GitHub Repository](https://github.com/derailed/k9s)
- [K9ers Slack](https://k9sers.slack.com/)
- [Commands Reference](https://k9scli.io/topics/commands/)

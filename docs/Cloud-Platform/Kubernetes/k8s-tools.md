# K8s tools 

## k9s

K9s is a terminal based UI to interact with your Kubernetes clusters. Easy to navigate, observe and manage your deployed applications in the wild. K9s continually watches Kubernetes for changes and offers subsequent commands to interact with your observed resources. It uses common keys used in the editor vim.

* [k9s homepage](https://k9scli.io/)

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
│                                                                                                                  │
│                                                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
<node>
```

## Telepresence

Telepresence is an open source tool that lets you run a single service locally, while connecting that service to a remote Kubernetes cluster.

* [Telepresence Homepage](https://www.telepresence.io/)
* [Telepresence docs](https://www.telepresence.io/docs/latest/quick-start/)


## [kubeval](https://www.kubeval.com/)

Validate one or more Kubernetes configuration files, and is often used locally as part of a development workflow as well as in CI pipelines.

At the most basic level, Kubeval is used like so:

```bash
$ kubeval my-invalid-rc.yaml
WARN - my-invalid-rc.yaml contains an invalid ReplicationController - spec.replicas: Invalid type. Expected: integer, given: string
$ echo $?
1
```

## [datree.io](https://hub.datree.io/)

Datree prevents Kubernetes misconfigurations from reaching production.

As your organization's infrastructure owner, the product’s stability is your primary concern. Toolchain engineering and architecture gets pushed to the wayside because you must constantly put out fires configured in the development stage.

It has a free Community and a paid Enterprise version.


```bash
$ datree test ./k8s-demo.yaml
>>  File: k8s-demo.yaml

[V] YAML validation
[V] Kubernetes schema validation

[X] Policy check

❌  Ensure each container image has a pinned (tag) version  [1 occurrence]
    — metadata.name: rss-site (kind: Deployment)
💡  Incorrect value for key `image` - specify an image version to avoid unpleasant "version surprises" in the future

❌  Ensure each container has a configured memory limit  [1 occurrence]
    — metadata.name: rss-site (kind: Deployment)
💡  Missing property object `limits.memory` - value should be within the accepted boundaries recommended by the organization

❌  Ensure workload has valid label values  [1 occurrence]
    — metadata.name: rss-site (kind: Deployment)
💡  Incorrect value for key(s) under `labels` - the vales syntax is not valid so the Kubernetes engine will not accept it

❌  Ensure each container has a configured liveness probe  [1 occurrence]
    — metadata.name: rss-site (kind: Deployment)
💡  Missing property object `livenessProbe` - add a properly configured livenessProbe to catch possible deadlocks


(Summary)

- Passing YAML validation: 1/1

- Passing Kubernetes (1.19.0) schema validation: 1/1

- Passing policy check: 0/1

+-----------------------------------+----------------------------------------------------------+
| Enabled rules in policy “Default” | 21                                                       |
| Configs tested against policy     | 1                                                        |
| Total rules evaluated             | 21                                                       |
| Total rules failed                | 4                                                        |
| Total rules passed                | 17                                                       |
| See all rules in policy           | https://app.datree.io/login?cliId=C2JWeCNE5G7cybebjhszFR |
+-----------------------------------+----------------------------------------------------------+

```

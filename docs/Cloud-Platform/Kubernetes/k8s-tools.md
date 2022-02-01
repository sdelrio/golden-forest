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



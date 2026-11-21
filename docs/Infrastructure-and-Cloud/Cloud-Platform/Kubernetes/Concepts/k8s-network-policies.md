---
tags: [kubernetes, networking]
---

# k8s Network Policies

It allows you to control the flow of the traffic to specify how the Pod is allowed to communicate (IP address and port).

You can communicate with:

1. Other allowed pods.
2. Alowed Namespaces.
3. IP Blocks

By default no traffic is filtered until a pod gets a policy, then, only the specified [`NetworkPolicy`](https://kubernetes.io/docs/concepts/services-networking/network-policies/) connections are allowed.


```mermaid
    flowchart BT

        subgraph level-1 [" "]
            subgraph sub-level-1 ["and/or"]
              ps1[podSelector]
              ns1[namespaceSelector]
            end
            ip1[ipBlock]
        end
        subgraph level-2 ["and/or"]
            subgraph sub-level-2 ["and/or"]
            ps2[podSelector]
            ns2[namespaceSelector]
            end
            ip2[ipBlock]
        end

        from --- np
        to --- np

        subgraph kind[" "]
            np[NetworkPolicy]
        end

        ps1 --- from
        ns1 --- from
        ip1 --- from


        ps2 --- to
        ns2 --- to
        ip2 --- to

        subgraph section-from["ingress"]
            from
        end
        subgraph section-to["egress"]
            to
        end

        class level-1,level-2,kind plain
        class np highlight
```

* NetworkPolicy 
  * `ingress[from]`: Traffic allowed to go **into** the pod.
    * selector
  * `egress[to]`: Traffic allowed to go **out** of pod.
    * selector

* selectors
Just as in the deployments, we can use labels to determine which Pods or namespaces the NetworkPolicy applies:
  * `podSelector:`
    * `matchLabels:`
      * key: value
  * `namespaceSelector:`
    * `matchLabels`
      * key: value
  * `ipBlock:`
    * `cidr:`
    * `except:` list of cidrs


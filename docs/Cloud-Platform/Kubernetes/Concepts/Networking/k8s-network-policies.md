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

        subgraph section-from ["ingress"]
            from
        end
        subgraph section-to ["egress"]
            to
        end

        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0

        classDef green fill:#beb,stroke:#ada,stroke-width:2px
        classDef gray fill:#eee,stroke:#999,stroke-width:2px
        classDef yellow fill:#eeb,stroke:#dda,stroke-width:2px
        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px
        classDef npstyle color:#808020,fill:#F0F0F0,stroke:#c0c020,stroke-width:2px
        classDef ext color:#808020,fill:none,stroke:#606010,stroke-width:2px

        class level-1,level-2,section-from,section-to,kind section
        class sub-level-1,sub-level-2 gray
        class np npstyle
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


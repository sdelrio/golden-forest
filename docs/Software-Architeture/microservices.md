# Microservices

## Approach

Using a microservices approach to application development enables us to improve resilience and expedite our time to market.

It’s easier to develop, test, deploy, and most importantly, change and maintain our entire application stack when it’s broken up into little pieces.

That said, breaking an app into smaller units does not mean that everything works perfectly right away. Without the proper investigation we could just end with a distributed monolith. It’s important to implement microservices in a particular way. 


## Services coupled to each other

**Bad practice** for production large scale usage.

The “request-driven” architectures (e.g. REST) are the simplest and most common pattern of service communication (e.g. Service A asks for some information from Service B and waits. Service B then responds and sends the information to Service A).

Working with HTTP APIs is one of these basic things developers learn and commonly utilize. It’s clear when a request was received and acknowledged by the corresponding service, and there are plenty of tools to debug HTTP APIs. As such, it was our default go-to method to communicate between services across the system. The simplicity of the “request-driven” communication served us very well in moving fast, delivering new features, and growing our systems to accommodate all needs.

Unfortunately, this pattern means a tight coupling of services. 
  * In small systems it works perfectly fine
  * For microserviers with dozens or hunderds os services, this sort of coupling stops agility and blocks rapid scaling.


An illustration of microservices "request-driven" communication, Service A is dependent on B and C

```mermaid
    graph LR;
        subgraph "request-driven"
            SA[Service A] --> SB[Service B]
            SB --> SA
            SB --> SC[Service C]
            SC --> SB
        end
        subgraph external [External]
            users[Users] -.-> SA
            SA -.-> users
        end

        linkStyle 4 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 5 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0
        classDef green fill:#beb,stroke:#ada,stroke-width:2px
        classDef gray fill:#eee,stroke:#999,stroke-width:2px
        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px
        class users green
        class SA,SB,SC gray
        class request-driven,external section
```

#### Risks

* When using this pattern is that each "core" service (e.g. service C in the above illustration) becomes a single point of failure.
* Dependency chain gets disrupted (mega-disaster):
  * It can potentially create a performance bottleneck
  * It can potentionally create a downtime of the dependent services.
  * It might sound like it’s easy to work around, but every service being added to the chain requires:
    * A service discovery mechanism (or even a service mesh in big systems)
    * Failover/retries
    * Circuit breakers
    * Timeouts
    * Caching mechanisms in place - making it a great challenge to work flawlessly end-to-end.

In practice, using synchronous communications, like REST, across the entire system makes it behave like a monolith or more precisely a distributed monolith that prevents the full benefits of microservices from being enjoyed.


An illustration of overly chatty microservices (AKA spaghetti)


```mermaid
    graph BT;

        subgraph "request-driven"
            subgraph level-1 [" "]
                auth[Auth] 
                reporting[Reporting]
                analytics[Analytics]
            end
            reporting --- auth
            reporting --- analytics

            subgraph level-2 [" "]
                configs[Configs]
                tracking[Tracking]
            end
            configs --- tracking
            configs --- analytics & tracking & campaings 
    
            subgraph level-3 [" "]
                customers[Customers]
                campaings[Campaings]
            end
            customers --- campaings
            analytics --- tracking
            campaings --- tracking
        end

        subgraph external-1 [" "]
            users-1[Users]
        end
        users-1 --- reporting

        subgraph external-2 [" "]
            users-2[Users]
        end
        users-2 --- tracking

        subgraph external-3 [" "]
            users-3[Users]
        end
        users-3 --- customers

        subgraph external-4 [" "]
            users-4[Users]
        end
        users-4 --- campaings


        linkStyle 9 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 10 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 11 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 12 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0

        classDef green fill:#beb,stroke:#ada,stroke-width:2px
        class users-1,users-2,users-3,users-4 green

        classDef ext color:#808020,fill:none,stroke:#606010,stroke-width:2px
        class external-1,external-2,external-3,external-4 ext

        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px
        classDef sectiontrans color:none,fill:none,stroke:none,stroke-width:2px
        class level-1,level-2,level-3 sectiontrans
        class request-driven section
```

## Good practices

In order to untangle that mess, the idea is to move many core services to communicate using an asynchronous event-driven architecture.

Let the core service publish the information it provides whenever that information is updated, rather than waiting for another service to request that information.

By using "push" instead of "pull",  they system handles data in realtime. Now can dispose of many of the complex cache management and purging mechanisms, service discovery, and retries techniques used in the past in order to maintain the reliability and performance of the system while using synchronous services communication.

Services can now:
* Publish events to a resilient message broker asynchronously (Kafka in the example ). 
* Trust the broker to route the message to the right service, and the receiving parties subscribe to key events that interest them. 
* Easy to add subscribers and that way they don’t put a further load on the publisher service.

```mermaid

    flowchart TB

        subgraph external-1 [" "]
            users-1[Users]
        end
        subgraph external-2 [" "]
            users-2[Users]
        end
        subgraph level-1 [" "]
            auth[Auth]
            report[Reporting API]
        end

        users-1 --- auth
        users-2 --- report

        subgraph queuesys[" "]
            queue[Kafka]
        end

        auth --- queue
        report --- queue

        subgraph level-2 [" "]
            analytics
            configs
            campaign
            customers
        end

        analytics --- queue
        configs --- queue
        campaign --- queue
        customers --- queue

        subgraph external-3 [" "]
            users-3[Users]
        end
        subgraph external-4 [" "]
            users-4[Users]
        end

        users-3 --- customers
        users-4 --- campaign

        linkStyle 0 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 1 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 8 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle 9 stroke:green,stroke-width:3px,stroke-dasharray:3;
        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0

        classDef green fill:#beb,stroke:#ada,stroke-width:2px
        classDef gray fill:#eee,stroke:#999,stroke-width:2px
        classDef yellow fill:#eeb,stroke:#dda,stroke-width:2px
        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px
        classDef queuesection color:#808020,fill:none,stroke:#c0c020,stroke-width:2px
        classDef ext color:#808020,fill:none,stroke:#606010,stroke-width:2px

        class users-1,users-2,users-3,users-4 green
        class report,auth,analytics,configs,customers,tracking,campaign gray
        class queue yellow
        class level-1,level-2, section
        class external-1,external-2,external-3,external-4 ext
        class queuesys queuesection
```

## References

* [2019: Are Your Microservices Overly Chatty?](https://thenewstack.io/are-your-microservices-overly-chatty/)


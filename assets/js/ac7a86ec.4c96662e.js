(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2693],{2811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(83117),s=(r(67294),r(3905)),a=r(93456);const i={},o="Microservices",l={unversionedId:"Software-Architecture/microservices",id:"Software-Architecture/microservices",title:"Microservices",description:"Approach",source:"@site/docs/Software-Architecture/microservices.md",sourceDirName:"Software-Architecture",slug:"/Software-Architecture/microservices",permalink:"/docs/Software-Architecture/microservices",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Software-Architecture/microservices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Office alternatives",permalink:"/docs/Software/office"},next:{title:"Streaming and Queue Systems",permalink:"/docs/Software-Architecture/streaming"}},c={},u=[{value:"Approach",id:"approach",level:2},{value:"Services coupled to each other",id:"services-coupled-to-each-other",level:2},{value:"Risks",id:"risks",level:4},{value:"Good practices",id:"good-practices",level:2},{value:"Event-driven runtimes",id:"event-driven-runtimes",level:2},{value:"Dapr.io",id:"daprio",level:3},{value:"References",id:"references",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"microservices"},"Microservices"),(0,s.kt)("h2",{id:"approach"},"Approach"),(0,s.kt)("p",null,"Using a microservices approach to application development enables us to improve resilience and expedite our time to market."),(0,s.kt)("p",null,"It\u2019s easier to develop, test, deploy, and most importantly, change and maintain our entire application stack when it\u2019s broken up into little pieces."),(0,s.kt)("p",null,"That said, breaking an app into smaller units does not mean that everything works perfectly right away. Without the proper investigation we could just end with a distributed monolith. It\u2019s important to implement microservices in a particular way. "),(0,s.kt)("h2",{id:"services-coupled-to-each-other"},"Services coupled to each other"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Bad practice")," for production large scale usage."),(0,s.kt)("p",null,"The \u201crequest-driven\u201d architectures (e.g. REST) are the simplest and most common pattern of service communication (e.g. Service A asks for some information from Service B and waits. Service B then responds and sends the information to Service A)."),(0,s.kt)("p",null,"Working with HTTP APIs is one of these basic things developers learn and commonly utilize. It\u2019s clear when a request was received and acknowledged by the corresponding service, and there are plenty of tools to debug HTTP APIs. As such, it was our default go-to method to communicate between services across the system. The simplicity of the \u201crequest-driven\u201d communication served us very well in moving fast, delivering new features, and growing our systems to accommodate all needs."),(0,s.kt)("p",null,"Unfortunately, this pattern means a tight coupling of services. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In small systems it works perfectly fine"),(0,s.kt)("li",{parentName:"ul"},"For microserviers with dozens or hunderds os services, this sort of coupling stops agility and blocks rapid scaling.")),(0,s.kt)("p",null,'An illustration of microservices "request-driven" communication, Service A is dependent on B and C'),(0,s.kt)(a.Mermaid,{chart:'    graph LR;\n        subgraph "request-driven"\n            SA[Service A] --\x3e SB[Service B]\n            SB --\x3e SA\n            SB --\x3e SC[Service C]\n            SC --\x3e SB\n        end\n        subgraph external [External]\n            users[Users] -.-> SA\n            SA -.-> users\n        end\n\n        linkStyle 4 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 5 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0\n        classDef green fill:#beb,stroke:#ada,stroke-width:2px\n        classDef gray fill:#eee,stroke:#999,stroke-width:2px\n        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px\n        class users green\n        class SA,SB,SC gray\n        class request-driven,external section',mdxType:"Mermaid"}),(0,s.kt)("h4",{id:"risks"},"Risks"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'When using this pattern is that each "core" service (e.g. service C in the above illustration) becomes a single point of failure.'),(0,s.kt)("li",{parentName:"ul"},"Dependency chain gets disrupted (mega-disaster):",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"It can potentially create a performance bottleneck"),(0,s.kt)("li",{parentName:"ul"},"It can potentionally create a downtime of the dependent services."),(0,s.kt)("li",{parentName:"ul"},"It might sound like it\u2019s easy to work around, but every service being added to the chain requires:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"A service discovery mechanism (or even a service mesh in big systems)"),(0,s.kt)("li",{parentName:"ul"},"Failover/retries"),(0,s.kt)("li",{parentName:"ul"},"Circuit breakers"),(0,s.kt)("li",{parentName:"ul"},"Timeouts"),(0,s.kt)("li",{parentName:"ul"},"Caching mechanisms in place - making it a great challenge to work flawlessly end-to-end.")))))),(0,s.kt)("p",null,"In practice, using synchronous communications, like REST, across the entire system makes it behave like a monolith or more precisely a distributed monolith that prevents the full benefits of microservices from being enjoyed."),(0,s.kt)("p",null,"An illustration of overly chatty microservices (AKA spaghetti)"),(0,s.kt)(a.Mermaid,{chart:'    graph BT;\n\n        subgraph "request-driven"\n            subgraph level-1 [" "]\n                auth[Auth] \n                reporting[Reporting]\n                analytics[Analytics]\n            end\n            reporting --- auth\n            reporting --- analytics\n\n            subgraph level-2 [" "]\n                configs[Configs]\n                tracking[Tracking]\n            end\n            configs --- tracking\n            configs --- analytics & tracking & campaings \n    \n            subgraph level-3 [" "]\n                customers[Customers]\n                campaings[Campaings]\n            end\n            customers --- campaings\n            analytics --- tracking\n            campaings --- tracking\n        end\n\n        subgraph external-1 [" "]\n            users-1[Users]\n        end\n        users-1 --- reporting\n\n        subgraph external-2 [" "]\n            users-2[Users]\n        end\n        users-2 --- tracking\n\n        subgraph external-3 [" "]\n            users-3[Users]\n        end\n        users-3 --- customers\n\n        subgraph external-4 [" "]\n            users-4[Users]\n        end\n        users-4 --- campaings\n\n\n        linkStyle 9 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 10 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 11 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 12 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0\n\n        classDef green fill:#beb,stroke:#ada,stroke-width:2px\n        class users-1,users-2,users-3,users-4 green\n\n        classDef ext color:#808020,fill:none,stroke:#606010,stroke-width:2px\n        class external-1,external-2,external-3,external-4 ext\n\n        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px\n        classDef sectiontrans color:none,fill:none,stroke:none,stroke-width:2px\n        class level-1,level-2,level-3 sectiontrans\n        class request-driven section',mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"good-practices"},"Good practices"),(0,s.kt)("p",null,"In order to untangle that mess, the idea is to move many core services to communicate using an asynchronous event-driven architecture."),(0,s.kt)("p",null,"Let the core service publish the information it provides whenever that information is updated, rather than waiting for another service to request that information."),(0,s.kt)("p",null,'By using "push" instead of "pull",  they system handles data in realtime. Now can dispose of many of the complex cache management and purging mechanisms, service discovery, and retries techniques used in the past in order to maintain the reliability and performance of the system while using synchronous services communication.'),(0,s.kt)("p",null,"Services can now:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Publish events to a resilient message broker asynchronously (Kafka in the example ). "),(0,s.kt)("li",{parentName:"ul"},"Trust the broker to route the message to the right service, and the receiving parties subscribe to key events that interest them. "),(0,s.kt)("li",{parentName:"ul"},"Easy to add subscribers and that way they don\u2019t put a further load on the publisher service.")),(0,s.kt)(a.Mermaid,{chart:'\n    flowchart TB\n\n        subgraph external-1 [" "]\n            users-1[Users]\n        end\n        subgraph external-2 [" "]\n            users-2[Users]\n        end\n        subgraph level-1 [" "]\n            auth[Auth]\n            report[Reporting API]\n        end\n\n        users-1 --- auth\n        users-2 --- report\n\n        subgraph queuesys[" "]\n            queue[Kafka]\n        end\n\n        auth --- queue\n        report --- queue\n\n        subgraph level-2 [" "]\n            analytics\n            configs\n            campaign\n            customers\n        end\n\n        analytics --- queue\n        configs --- queue\n        campaign --- queue\n        customers --- queue\n\n        subgraph external-3 [" "]\n            users-3[Users]\n        end\n        subgraph external-4 [" "]\n            users-4[Users]\n        end\n\n        users-3 --- customers\n        users-4 --- campaign\n\n        linkStyle 0 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 1 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 8 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle 9 stroke:green,stroke-width:3px,stroke-dasharray:3;\n        linkStyle default stroke-width:2px,fill:none,stroke:#c0c0c0\n\n        classDef green fill:#beb,stroke:#ada,stroke-width:2px\n        classDef gray fill:#eee,stroke:#999,stroke-width:2px\n        classDef yellow fill:#eeb,stroke:#dda,stroke-width:2px\n        classDef section color:#808080,fill:none,stroke:#c0c0c0,stroke-width:2px\n        classDef queuesection color:#808020,fill:none,stroke:#c0c020,stroke-width:2px\n        classDef ext color:#808020,fill:none,stroke:#606010,stroke-width:2px\n\n        class users-1,users-2,users-3,users-4 green\n        class report,auth,analytics,configs,customers,tracking,campaign gray\n        class queue yellow\n        class level-1,level-2, section\n        class external-1,external-2,external-3,external-4 ext\n        class queuesys queuesection',mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"event-driven-runtimes"},"Event-driven runtimes"),(0,s.kt)("h3",{id:"daprio"},(0,s.kt)("a",{parentName:"h3",href:"https://dapr.io"},"Dapr.io")),(0,s.kt)("p",null,"Dapr is a portable, event-driven runtime that makes it easy for any developer to build resilient, stateless and stateful applications that run on the cloud and edge and embraces the diversity of languages and developer frameworks. Leveraging the benefits of a sidecar architecture, Dapr helps you tackle the challenges that come with building microservices and keeps your code platform agnostic."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://thenewstack.io/are-your-microservices-overly-chatty/"},"2019: Are Your Microservices Overly Chatty?"))))}p.isMDXComponent=!0},11748:(e,t,r)=>{var n={"./locale":89234,"./locale.js":89234};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=11748}}]);
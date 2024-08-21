"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7101],{17575:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));t(61839);const i={},r="Go",l={unversionedId:"Coding/Go/go",id:"Coding/Go/go",title:"Go",description:"Go), also known as Golang, is an open-source programming language developed by Google in 2009. It is designed for simplicity, efficiency, and strong concurrency support, making it well-suited for building scalable and high-performance applications. Go combines the ease of use of dynamically typed languages with the performance and safety of statically typed languages. It features a clean syntax, garbage collection, and built-in support for concurrent programming through goroutines. Go is widely used in cloud services, distributed systems, and other performance-critical application",source:"@site/docs/Coding/Go/go.md",sourceDirName:"Coding/Go",slug:"/Coding/Go/",permalink:"/docs/Coding/Go/",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/Go/go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Localizer",permalink:"/docs/Coding/Debug/k8s-localizer"},next:{title:"Javascript Frameworks",permalink:"/docs/Coding/Javascript/js-frameworks"}},s={},d=[{value:"History",id:"history",level:2},{value:"Usefull links",id:"usefull-links",level:2}],p={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"go"},"Go"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Go_(programming_language)"},"Go"),", also known as Golang, is an open-source programming language developed by Google in 2009. It is designed for simplicity, efficiency, and strong concurrency support, making it well-suited for building scalable and high-performance applications. Go combines the ease of use of dynamically typed languages with the performance and safety of statically typed languages. It features a clean syntax, garbage collection, and built-in support for concurrent programming through goroutines. Go is widely used in cloud services, distributed systems, and other performance-critical application"),(0,n.kt)("h2",{id:"history"},"History"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2007-2009: Early Development"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2007: The Go language was conceived by Robert Griesemer, Rob Pike, and Ken Thompson at Google. The aim was to create a language that combined the performance of C with the ease of use of modern languages."),(0,n.kt)("li",{parentName:"ul"},"2009: Go was officially announced to the public as an open-source project on November 10, 2009. The initial version (Go 1.0) included key features like goroutines, channels, and garbage collection."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2012: Go 1.0 Release"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2012: Go 1.0 was released in March 2012. It was the first stable release, establishing Go\u2019s core features and compatibility guidelines. This version provided a stable base for developers, with a focus on backward compatibility in future updates."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2013-2014: Early Adoption and Growth"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2013-2014: Go gained popularity, particularly in the cloud infrastructure and DevOps communities. During this period, various improvements were made in libraries, tools, and performance, but the language itself remained stable to maintain backward compatibility."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2015-2016: Go 1.5 and Go 1.6"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2015: Go 1.5 was released, marking a significant milestone as it was the first version to be self-hosted (written in Go itself, rather than C). This release included improvements to the garbage collector and the introduction of the vendoring feature for dependency management."),(0,n.kt)("li",{parentName:"ul"},"2016: Go 1.6 focused on further performance improvements and introduced HTTP/2 support in the net/http package, enhancing the language\u2019s capability for web services."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2017-2018: Go 1.8 to Go 1.10"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2017-2018: These years saw incremental updates (Go 1.8 to Go 1.10) that focused on performance optimizations, tooling enhancements (like go vet improvements), and better support for various platforms. Go 1.9 introduced type aliases, while Go 1.10 improved build caching for faster compile times."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2019: Go 1.12 and the Go Modules System"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2019: Go 1.12 was released with improved support for modules, a new dependency management system that became the default in Go 1.13. The introduction of modules marked a significant change in how dependencies were managed, moving away from GOPATH."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2020: Go 1.14 and Beyond"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2020: Go 1.14 introduced goroutine preemption, improving the language\u2019s concurrency model. The releases continued to enhance performance and developer experience, with refinements to the runtime and standard library."),(0,n.kt)("li",{parentName:"ul"},"2021: Go 1.16 brought native support for file embedding and the //go:embed directive, as well as better module support. Go 1.17 introduced a new way of calling functions (register ABI) for performance gains."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2022-2023: Go 1.18 and Generics"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2022: Go 1.18 was a landmark release with the introduction of generics, a long-awaited feature that allows developers to write more flexible and reusable code."),(0,n.kt)("li",{parentName:"ul"},"2023: Subsequent versions continued to refine generics and improve overall language performance and stability, making Go even more powerful and efficient for modern software development.")))),(0,n.kt)("h2",{id:"usefull-links"},"Usefull links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://roadmap.sh/golang"},"Go Developer"),". Step by step guide to become a Go developer in 2024."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://roadmap.sh/golang"},"Common Go Mistakes"),". 100 Go mistakes and how to avoid them.")))}m.isMDXComponent=!0}}]);
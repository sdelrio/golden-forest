"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[9735],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=i,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78072:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var n=a(83117),i=(a(67294),a(3905));const r={},o="API Standards",s={unversionedId:"Coding/api",id:"Coding/api",title:"API Standards",description:"REST",source:"@site/docs/Coding/api.md",sourceDirName:"Coding",slug:"/Coding/api",permalink:"/docs/Coding/api",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Visual Studio Code",permalink:"/docs/Coding/Tools/visual-studio-code"},next:{title:"Dev in k8s",permalink:"/docs/Coding/dev-in-k8s"}},p={},l=[{value:"REST",id:"rest",level:2},{value:"OpenAPI",id:"openapi",level:3},{value:"AsyncAPI",id:"asyncapi",level:3},{value:"Advantages",id:"advantages",level:3},{value:"OData",id:"odata",level:2},{value:"Advantages",id:"advantages-1",level:3},{value:"When to use it",id:"when-to-use-it",level:3},{value:"GraphQL",id:"graphql",level:2},{value:"Advantages",id:"advantages-2",level:3},{value:"When to use it",id:"when-to-use-it-1",level:3},{value:"References",id:"references",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-standards"},"API Standards"),(0,i.kt)("h2",{id:"rest"},"REST"),(0,i.kt)("p",null,"REST is more concerned with API durability than query optimization like OData and GraphQL"),(0,i.kt)("p",null,"GraphQL, on the other hand, is designed to operate over a single endpoint over HTTP, hence improving performance and adaptability. Meanwhile, OData defines best practices for developing REST APIs that work on top of the REST architecture."),(0,i.kt)("h3",{id:"openapi"},"OpenAPI"),(0,i.kt)("p",null,"The current standard for describing REST API is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI"),". OpenAPI is a description, in YAML or JSON, of what the backend capabilities are. So, for example, here is a snippet from devto.io:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\npaths:\n  /articles:\n    get:\n      description: |\n        ...\n      parameters:\n        - $ref: "#/components/parameters/pageParam"\n        - $ref: "#/components/parameters/perPageParam30to1000"\n')),(0,i.kt)("p",null,"As you can see, it specifies that the API supports GET /articles?pageParam."),(0,i.kt)("h3",{id:"asyncapi"},"AsyncAPI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/"},"AsyncAPI")," addresses the need for a unified, open source, protocol-agnostic asynchronous specification that is both human-readable and machine-readable, while also being backed by a diverse and rich tooling ecosystem. With its maturity and elegant abstractions, the AsyncAPI Specification has emerged as the industry standard for defining asynchronous, event-driven APIs."),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("p",null,"Here are some of the key AsyncAPI specification features that we found particularly useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clean separation between ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#definitionsChannel"},"channels"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#operationObject"},"operations")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#serverObject"},"servers"),". This allows a complete representation of the event-driven topology (the ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#definitionsProducer"},"producer"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#definitionsConsumer"},"consumer")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#definitionsMessage"},"message")," perspectives), resulting in a standardized and precise representation of a message-driven ecosystem."),(0,i.kt)("li",{parentName:"ul"},"Support for defining bindings at the ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#operationBindingsObject"},"operation"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#serverBindingsObject"},"broker"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#channelBindingsObject"},"channel")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/docs/specifications/2.0.0#messageBindingsObject"},"message")," level."),(0,i.kt)("li",{parentName:"ul"},"Support for traits and external references. This promotes reusability."),(0,i.kt)("li",{parentName:"ul"},"Support for correlation Ids using dynamic runtime expressions."),(0,i.kt)("li",{parentName:"ul"},"Extensibility of the specification, for those one-off customization needs."),(0,i.kt)("li",{parentName:"ul"},"Support for a wide range of asynchronous protocols to satisfy most industry needs."),(0,i.kt)("li",{parentName:"ul"},"Compatibility with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md"},"OpenAPI specification"),". This enables the re-use of schema definitions from existing models, which leads to a short adoption cycle for organizations that have already standardized on the OpenAPI specification.")),(0,i.kt)("h2",{id:"odata"},"OData"),(0,i.kt)("p",null,"OData (Open Data Protocol) is an ",(0,i.kt)("a",{parentName:"p",href:"https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata"},"OASIS standard")," that defines the best practice for building and consuming RESTful APIs. OData provides a rich query language with capabilities for sorting, filtering, querying and reducing fields in the output of the API. It is strictly RESTful and expects to be delivered in conjunction with best REST practice."),(0,i.kt)("p",null,"Usage: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.odata.org/libraries/"},"OData")," + OpenAPI or other APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.odata.org/libraries/"},"Apache Olingo LIbrary")," for mapping entities to OData entities, and converting OData entities to Java OSGi calls."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.odata.org/libraries/"},"Multitude of libraries"))),(0,i.kt)("h3",{id:"advantages-1"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good documentation."),(0,i.kt)("li",{parentName:"ul"},"REST-based framework easy to most programmers."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://restfulapi.net/hateoas/"},"HATEOAS"),", it is possible to solve an often-cited complaint with OData: that it doesn\u2019t support versioning. The argument of OData not supporting versioning or field deprecation is moot, in that it is extremely easy to develop around this problem.")),(0,i.kt)("h3",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An OData API is a good fit when you know that consumers of your API will come from a broad group of developers of different technologies."),(0,i.kt)("li",{parentName:"ul"},"OData is a simpler concept and has a simpler definition for queries than GraphQL, which are powerful enough to meet most use cases."),(0,i.kt)("li",{parentName:"ul"},"If as an organization I want to control the data produced by the API but don\u2019t want unlimited data queries for performance reasons, OData presents an attractive option as a strong RESTful standard with an advanced feature set.")),(0,i.kt)("h2",{id:"graphql"},"GraphQL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," was created by Facebook(Meta), a signle URI mapped to a web services which allows you to have an API capable of meeting the most complex cata requiremetns. It is most certanly no RESTful."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/code/"},"Multitude of libraries")," for implementing and discovering GraphQL.")),(0,i.kt)("p",null,"And GraphQL, by default, is introspective. What that means is that GraphQL endpoints support a GraphQL query like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  __schema {\n    queryType {\n      name\n    }\n  }\n}\n")),(0,i.kt)("p",null,"We ask a GraphQL endpoint to tell us what queries it supports using a GraphQL query. This allows a whole set of third-party tools to work against any GraphQL endpoint."),(0,i.kt)("p",null,"If the GraphQL endpoint changes, the introspection query returns a different - current or updated - result. Consequently, as long as the program issues the query periodically, the production of an API endpoint and its use stays up to date. How awesome is that? In contrast, in OpenAPI, the spec is a separate doc. So if that is not updated, the endpoint will do something, and the spec will say something else."),(0,i.kt)("h3",{id:"advantages-2"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single ednpoint + GraphQL standard"),(0,i.kt)("li",{parentName:"ul"},"Support ",(0,i.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/advanced/subscriptions/"},"Subscriptions")," "),(0,i.kt)("li",{parentName:"ul"},"Self-contained query")),(0,i.kt)("h3",{id:"when-to-use-it-1"},"When to use it"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GraphQL in most circumstances the more powerful query language, but it can be expensive to implement and is not RESTful."),(0,i.kt)("li",{parentName:"ul"},"Harder learning curve."),(0,i.kt)("li",{parentName:"ul"},"Is the fastest, most cost-effective way you can delight that consumer."),(0,i.kt)("li",{parentName:"ul"},"Much can be achieved by just going the OpenAPI route or rolling whatever you like while sticking to a RESTful standard of your own making. ")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thenewstack.io/the-state-of-introspection-for-rest-and-graphql-apis/"},"2021: The State of Introspection for REST and GraphQL APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thenewstack.io/odata-or-graphql-the-best-tech-for-developing-an-api-is-neither-or-both/"},"2019: OData or GraphQL? The Best Tech for Developing an API Is Neither or Both")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thenewstack.io/asyncapi-2-0-enabling-the-event-driven-world/"},"2017: https://thenewstack.io/asyncapi-2-0-enabling-the-event-driven-world/"))))}d.isMDXComponent=!0}}]);
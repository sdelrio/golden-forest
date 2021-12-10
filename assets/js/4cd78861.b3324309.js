"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[1936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Content Delivery Network",c={unversionedId:"Networking/CDN/cdn",id:"Networking/CDN/cdn",isDocsHomePage:!1,title:"Content Delivery Network",description:"A distributed group of servers (network) geographic distributed to offer a fast delivery of static content using internet. The goal is to provide high performance to the end users. CDN existance began in late 1990s",source:"@site/docs/Networking/CDN/cdn.md",sourceDirName:"Networking/CDN",slug:"/Networking/CDN/cdn",permalink:"/docs/Networking/CDN/cdn",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Networking/CDN/cdn.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"10 GB Network at home",permalink:"/docs/Networking/10Gb/Gb-Network"},next:{title:"HTTP caching",permalink:"/docs/Networking/CDN/mozilla"}},u=[{value:"How to implement",id:"how-to-implement",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"content-delivery-network"},"Content Delivery Network"),(0,i.kt)("p",null,"A distributed group of servers (network) geographic distributed to offer a fast delivery of static content using internet. The goal is to provide high performance to the end users. CDN existance began in late 1990s"),(0,i.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://imagekit.io/blog/ultimate-guide-to-http-caching-for-static-assets/"},"2020: Guide for Cahing and HTTP Cache Headeres for Static Content"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"How does Caching Work?"),(0,i.kt)("li",{parentName:"ul"},"Caching with CDN in play"),(0,i.kt)("li",{parentName:"ul"},"Best practices for cache control",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Expires")," header"),(0,i.kt)("li",{parentName:"ul"},"The Cache control ",(0,i.kt)("inlineCode",{parentName:"li"},"max-age")," directive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public")," vs ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," Cache-Control directive"),(0,i.kt)("li",{parentName:"ul"},"Setting Optimal Cache Lifetime"),(0,i.kt)("li",{parentName:"ul"},"Cache content Validation: ",(0,i.kt)("inlineCode",{parentName:"li"},"ETag"),"and ",(0,i.kt)("inlineCode",{parentName:"li"},"Last-Modified")),(0,i.kt)("li",{parentName:"ul"},"Ensuring fresh content is served - Fingeprints in the URLs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WebPack: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jantimon/html-webpack-plugin#long-term-caching"},(0,i.kt)("inlineCode",{parentName:"a"},"html-webpack-plugin"))),(0,i.kt)("li",{parentName:"ul"},"Gulp: ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/gulp-cache-bust"},(0,i.kt)("inlineCode",{parentName:"a"},"gulp-cache-bust"))))),(0,i.kt)("li",{parentName:"ul"},"Improving cache hit ratio on the CDN"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"Vary")," header responsibly"),(0,i.kt)("li",{parentName:"ul"},"How to Invalidate CAche"),(0,i.kt)("li",{parentName:"ul"},"Purge from CDN"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MUIGehj3s1Y"},"2020: Video - Build your own CDN in under 1h | DZone webinar by Varnish software")," (Route53 + Varnish cloud)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.insightdatascience.com/how-to-build-your-own-cdn-with-kubernetes-5cab00d5c258"},"2019: How to build your own CDN with Kubernets")," (KubeCDN)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://debugged.it/blog/building-your-own-cdn/"},"2018: Building your own CDN for Fun and Profit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://css-tricks.com/adding-a-cdn-to-your-website/"},"2016: Adding and Leveragin a CDN on your website"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://css-tricks.com/google-cdn-naming/"},"2010: Google CDN Naming Conventions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.greenfelt.net/2009/09/01/caching-javascript-safely/"},"2009: Hash Javascrit for better cahing and less breakage on updates")))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Content_delivery_network"},"Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/es-es/learning/cdn/what-is-a-cdn/"},"Cloudflare"))))}m.isMDXComponent=!0}}]);
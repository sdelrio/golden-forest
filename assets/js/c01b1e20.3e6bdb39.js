"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6254],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58580:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=t(83117),o=(t(67294),t(3905));const i={},a="Dockerfile for node.js",l={unversionedId:"Containers/Docker/dockerfile-node",id:"Containers/Docker/dockerfile-node",title:"Dockerfile for node.js",description:"node.js server",source:"@site/docs/Containers/Docker/dockerfile-node.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/dockerfile-node",permalink:"/docs/Containers/Docker/dockerfile-node",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/dockerfile-node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dockerfile for Java",permalink:"/docs/Containers/Docker/dockerfile-java"},next:{title:"Dockerfile for Python",permalink:"/docs/Containers/Docker/dockerfile-python"}},s={},c=[{value:"node.js server",id:"nodejs-server",level:2},{value:"References",id:"references",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dockerfile-for-nodejs"},"Dockerfile for node.js"),(0,o.kt)("h2",{id:"nodejs-server"},"node.js server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base")," image with ",(0,o.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tini")," (init app)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependencies")," wich contains aditional required dependencies for final image only."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test")," which will run linters, setup and tests (like ",(0,o.kt)("inlineCode",{parentName:"li"},"mocha"),"), if this run command fails, there wont be a production image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Release")," with the application code and all node modules dependencies.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#\n# ---- Base Node ----\nFROM alpine:3.5 AS base\n# install node\nRUN apk add --no-cache nodejs-current tini\n# set working directory\nWORKDIR /root/chat\n# Set tini as entrypoint\nENTRYPOINT ["/sbin/tini", "--"]\n# copy project file\nCOPY package.json .\n\n#\n# ---- Dependencies ----\nFROM base AS dependencies\n# install node packages\nRUN npm set progress=false && npm config set depth 0\nRUN npm install --only=production\n# copy production node_modules aside\nRUN cp -R node_modules prod_node_modules\n# install ALL node_modules, including \'devDependencies\'\nRUN npm install\n\n#\n# ---- Test ----\n# run linters, setup and tests\nFROM dependencies AS test\nCOPY . .\nRUN  npm run lint && npm run setup && npm run test\n\n#\n# ---- Release ----\nFROM base AS release\n# copy production node_modules\nCOPY --from=dependencies /root/chat/prod_node_modules ./node_modules\n# copy app sources\nCOPY . .\n# expose port and define CMD\nEXPOSE 5000\nCMD npm run start\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codefresh.io/docker-tutorial/node_docker_multistage/"},"2017: Create lean Node.js image with Docker multi-stage buil"))))}p.isMDXComponent=!0}}]);
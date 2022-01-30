"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},s="Docker tag",c={unversionedId:"Containers/Docker/docker-tag",id:"Containers/Docker/docker-tag",title:"Docker tag",description:"Based on git commit",source:"@site/docs/Containers/Docker/docker-tag.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/docker-tag",permalink:"/docs/Containers/Docker/docker-tag",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/docker-tag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker registry",permalink:"/docs/Containers/Docker/docker-registry"},next:{title:"Docker for windows",permalink:"/docs/Containers/Docker/docker-windows"}},u=[{value:"Based on git commit",id:"based-on-git-commit",children:[{value:"Makefile",id:"makefile",children:[],level:3}],level:2},{value:"Version + commit + date",id:"version--commit--date",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-tag"},"Docker tag"),(0,i.kt)("h2",{id:"based-on-git-commit"},"Based on git commit"),(0,i.kt)("p",null,"Very useful for integration/staging environments or any automated release."),(0,i.kt)("p",null,"Get the latest commit of your repo and use as the tag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Long version",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log -1 --pretty=%H\na4b31e3966d51716e0a5794daed664208194c65e\n"))),(0,i.kt)("li",{parentName:"ul"},"Short version",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log -1 --pretty=%h\na4b31e3\n")))),(0,i.kt)("h3",{id:"makefile"},"Makefile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME   := your_org/your_app\nTAG    := $$(git log -1 --pretty=%!H)\nIMG    := ${NAME}:${TAG}\nLATEST := ${NAME}:latest\n\nbuild:\n  @docker build -t ${IMG} .\n  @docker tag ${IMG} ${LATEST}\n\npush:\n  @docker push ${NAME}\n\nlogin:\n  @docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}\n")),(0,i.kt)("h2",{id:"version--commit--date"},"Version + commit + date"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# version based on git tag\nTAG_COMMIT := $(shell git rev-list --abbrev-commit --tags --max-count=1)\n# `2>/dev/null` suppress errors and `|| true` suppress the error codes.\nTAG := $(shell git describe --abbrev=0 --tags ${TAG_COMMIT} 2>/dev/null || true)\n# get the latest commit hash in the short form\nCOMMIT := $(shell git rev-parse --short HEAD)\n# get the latest commit date in the form of YYYYmmdd\nDATE := $(shell git log -1 --format=%cd --date=format:"%Y%m%d")\n# strip version prefix "v"\nVERSION := $(TAG:v%=%)\n# Deal with nightly builds that appeared after a particular\nversion\nifneq ($(COMMIT), $(TAG_COMMIT))\n  VERSION := $(VERSION)-next-$(COMMIT)-$(DATE)\nendif\n# Check if the version string is empty\nifeq $(VERSION,)\n  VERSION := $(COMMIT)-$(DATA)\nendif\n# git status --porcelain outputs a machine-readable text and the output is empty\n# if the working tree is clean\nifneq ($(shell git status --porcelain),)\n  VERSION := $(VERSION)-dirty\nendif\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.container-solutions.com/tagging-docker-images-the-right-way"},"Tagging docker images the right way")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.scottlowe.org/2017/11/08/how-tag-docker-images-git-commit-information/"},"How to Tag Docker Images with Git Commit Information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/eugenebabichenko/generating-pretty-version-strings-including-nightly-with-git-and-makefiles-48p3"},"Generating pretty version strings (including nightly) with Git and Makefiles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eugene-babichenko.github.io/blog/2019/09/28/nightly-versions-makefiles/"},"Generating pretty version strings (including nightly) with Git and Makefiles"))))}d.isMDXComponent=!0}}]);
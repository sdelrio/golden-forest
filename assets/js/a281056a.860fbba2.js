"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2376],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s="Docker build best practices",c={unversionedId:"Containers/Docker/docker-build",id:"Containers/Docker/docker-build",title:"Docker build best practices",description:"docker build builds an image from a Dockerfile.",source:"@site/docs/Containers/Docker/docker-build.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/docker-build",permalink:"/docs/Containers/Docker/docker-build",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/docker-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Goodbye Docker Desktop",permalink:"/docs/Containers/Docker/docker-desktop-goodbye"},next:{title:"Docker Desktop for mac",permalink:"/docs/Containers/Docker/docker-mac"}},u=[{value:"Don&#39;t run containers as root",id:"dont-run-containers-as-root",children:[],level:2},{value:"Don&#39;t use maintainer",id:"dont-use-maintainer",children:[],level:2},{value:"Avoid ENV where possible",id:"avoid-env-where-possible",children:[],level:2},{value:"Build with cache mount",id:"build-with-cache-mount",children:[],level:2},{value:"Use SSH agent",id:"use-ssh-agent",children:[],level:2},{value:"Use build secrets",id:"use-build-secrets",children:[],level:2},{value:"Use <code>ONBUILD</code> Commands in Images",id:"use-onbuild-commands-in-images",children:[],level:2},{value:"Articles",id:"articles",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-build-best-practices"},"Docker build best practices"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," builds an image from a Dockerfile."),(0,o.kt)("h2",{id:"dont-run-containers-as-root"},"Don't run containers as root"),(0,o.kt)("p",null,"Even though containers are theoretically isolated, it is not good security practice to run processes as root inside them in the same way as you don\u2019t run your web server as root."),(0,o.kt)("p",null,"Towards the end of your build you should add something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN useradd app\nUSER app\n")),(0,o.kt)("h2",{id:"dont-use-maintainer"},"Don't use maintainer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MAINTAINER")," is deprecated. Instead of"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"MAINTAINER myfullname (myuser@mydomain.com)\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"LABEL"),"s instead so they can be inspected just like any other metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'LABEL maintainer="myfullname (myuser@mydomain.com)"\n')),(0,o.kt)("h2",{id:"avoid-env-where-possible"},"Avoid ENV where possible"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ENV")," variables remain in the container at run time and pollute its own environment. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ARG"),"s instead."),(0,o.kt)("h2",{id:"build-with-cache-mount"},"Build with cache mount"),(0,o.kt)("p",null,"Speed up your builds by providing a cache for your package manager, ccache, git and so on. This needs to be enabled with DOCKER_CLI_EXPERIMENTAL=enabled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"# syntax=docker/dockerfile:experimental\n# FROM and the rest\n\nRUN --mount=type=cache,target=/var/cache/apt --mount=type=cache,target=/var/lib/apt \\\n    apt-get install -y --no-install-recommends mongodb-server\n")),(0,o.kt)("h2",{id:"use-ssh-agent"},"Use SSH agent"),(0,o.kt)("p",null,"If you require SSH credentials for your build don\u2019t copy ~/.ssh because it will stay in the layer even if you remove it later.\nSet up SSH agent, and use the experimental feature for ssh mounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN --mount=type=ssh git clone https://github.com/private_repo/repo.git\n")),(0,o.kt)("h2",{id:"use-build-secrets"},"Use build secrets"),(0,o.kt)("p",null,"If you need sensitive files that should not be public for your build, use secrets. This way, those files will only be visible to that ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN")," command during its execution and its contents will disappear without a trace from all layers after that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN --mount=type=secret,id=signing_key,dst=/tmp/sign.cert signing_command\n")),(0,o.kt)("h2",{id:"use-onbuild-commands-in-images"},"Use ",(0,o.kt)("inlineCode",{parentName:"h2"},"ONBUILD")," Commands in Images"),(0,o.kt)("p",null," What this does is it specifies commands which are to be run when a new image is being built from the image with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ONBUILD")," commands."),(0,o.kt)("p",null,"One way to think of it is as a form of inheritance for images and it can be very useful in reducing code duplication up your Dockerfiles. In fact, oftentimes Dockerfiles in your individual projects can be just a single ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," command using your onbuild image. The one caveat to this is that you must have a standard set of build and run commands for all projects of that type."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sample:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:8-alpine\n\nONBUILD CMD ["node", "/app/index.js"]\nONBUILD COPY package.json /appONBUILD\nRUN npm set progress=false && \\\n    npm install --silent\nONBUILD RUN npm test && \\\n    npm coverage\nONBUILD COPY . /app\n')),(0,o.kt)("p",null,"Now, say we build an image from the above Dockerfile and tag it as ",(0,o.kt)("inlineCode",{parentName:"p"},"theimage/node:8-onbuild")," and publish this image."),(0,o.kt)("p",null,"Then we can use this image for any Node.js project so long as it has the npm scripts for test and coverage and can be run from the file ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," in the root of the project. The Dockerfile for our projects will be one line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM theimage/node:8-onbluild\n")),(0,o.kt)("p",null,"And all of the logic will live in the shared image."),(0,o.kt)("p",null,"It is very beneficial for you and your organization to create and maintain common base images for all types of applications you plan to support and even create onbuild images off of these bases. This provides a good place to make sweeping changes, reduce the amount of code, and simplify your CI pipelines."),(0,o.kt)("h2",{id:"articles"},"Articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ownyourbits.com/2019/05/13/building-docker-containers-in-2019/"},"Building Docker containers in 2019")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tech.cars.com/docker-for-continuous-delivery-advanced-topics-and-patterns-7532235998af"},"2017: Docker for CD: Advanced Topics and Patters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices"},"Docker best practices"))))}p.isMDXComponent=!0}}]);
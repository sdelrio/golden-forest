"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[5609],{99770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));r(61839);const l={},a="Docker build multi-platform",n={unversionedId:"Containers/Docker/docker-multi-platform-build",id:"Containers/Docker/docker-multi-platform-build",title:"Docker build multi-platform",description:"How it works?",source:"@site/docs/Containers/Docker/docker-multi-platform-build.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/docker-multi-platform-build",permalink:"/docs/Containers/Docker/docker-multi-platform-build",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/docker-multi-platform-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Desktop for mac",permalink:"/docs/Containers/Docker/docker-mac"},next:{title:"Docker Hub Rate Limits",permalink:"/docs/Containers/Docker/docker-rate-limit"}},s={},u=[{value:"How it works?",id:"how-it-works",level:2},{value:"Stages",id:"stages",level:2},{value:"Stage 1: ARM",id:"stage-1-arm",level:3},{value:"Stage 2: x86",id:"stage-2-x86",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-build-multi-platform"},"Docker build multi-platform"),(0,o.kt)("h2",{id:"how-it-works"},"How it works?"),(0,o.kt)("p",null,"The easiest way to use multi-platform functionality in Docker is to invoke it from the command line.\nUsing the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx"),", we can tap into new beta functionalities."),(0,o.kt)("p",null,"By running docker `",(0,o.kt)("inlineCode",{parentName:"p"},"buildx build --platform linux/arm/v7 -t arm-build"),". This command builds the docker image as per the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the current directory using ARMv7 emulation. Behind the scenes, Docker runs the whole Docker build process in a QEMU virtualized environment (qemu-user-static to be precise). By doing this, the complexity of setting up a custom VM is removed. Once built, we can even use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," to launch containers in ARMv7 mode automagically."),(0,o.kt)("h2",{id:"stages"},"Stages"),(0,o.kt)("h3",{id:"stage-1-arm"},"Stage 1: ARM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM --platform=linux/arm/v7 balenalib/rpi-raspbian:buster as builder\n")),(0,o.kt)("p",null,"This part is running using QEMU"),(0,o.kt)("h3",{id:"stage-2-x86"},"Stage 2: x86"),(0,o.kt)("p",null,"Once we installed our dependencies we can switch to native x86 arch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM --platform=linux/amd64 debian:buster\n")),(0,o.kt)("p",null,"After we have switched over to x86, we can copy files from the previous step. We do this in order to create a sysroot that we can use for Qt. We complete this step by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RUN mkdir -p /sysroot/usr /sysroot/opt /sysroot/lib\nCOPY --from=builder /lib/ /sysroot/lib/\nCOPY --from=builder /usr/include/ /sysroot/usr/include/\nCOPY --from=builder /usr/lib/ /sysroot/usr/lib/\nCOPY --from=builder /opt/vc/ sysroot/opt/vc/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/blog/compiling-qt-with-docker-multi-stage-and-multi-platform/"},"Compiling Qt with Docker multi-stage and multi-platform"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Screenly/screenly-ose/blob/master/webview/Dockerfile"},"Dockerfile for QT multi-stage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Screenly/screenly-ose/blob/master/webview/build_qt5.sh"},"build QT script")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://daniel-dc.medium.com/build-a-multi-arch-docker-image-with-vagrant-d903355dace5"},"Build a multi-architecture docker image with Vagrant"))))}m.isMDXComponent=!0}}]);
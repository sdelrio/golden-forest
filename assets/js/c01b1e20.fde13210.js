"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6254],{8580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));t(1839);const i={},s="Dockerfile for node.js",a={unversionedId:"Containers/Docker/dockerfile-node",id:"Containers/Docker/dockerfile-node",title:"Dockerfile for node.js",description:"node.js server",source:"@site/docs/Containers/Docker/dockerfile-node.md",sourceDirName:"Containers/Docker",slug:"/Containers/Docker/dockerfile-node",permalink:"/docs/Containers/Docker/dockerfile-node",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/Docker/dockerfile-node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dockerfile for Java",permalink:"/docs/Containers/Docker/dockerfile-java"},next:{title:"Dockerfile for Python",permalink:"/docs/Containers/Docker/dockerfile-python"}},d={},l=[{value:"node.js server",id:"nodejs-server",level:2},{value:"References",id:"references",level:3}],c={toc:l},p="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dockerfile-for-nodejs"},"Dockerfile for node.js"),(0,r.kt)("h2",{id:"nodejs-server"},"node.js server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base")," image with ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tini")," (init app)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependencies")," wich contains aditional required dependencies for final image only."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test")," which will run linters, setup and tests (like ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha"),"), if this run command fails, there wont be a production image."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Release")," with the application code and all node modules dependencies.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#\n# ---- Base Node ----\nFROM alpine:3.5 AS base\n# install node\nRUN apk add --no-cache nodejs-current tini\n# set working directory\nWORKDIR /root/chat\n# Set tini as entrypoint\nENTRYPOINT ["/sbin/tini", "--"]\n# copy project file\nCOPY package.json .\n\n#\n# ---- Dependencies ----\nFROM base AS dependencies\n# install node packages\nRUN npm set progress=false && npm config set depth 0\nRUN npm install --only=production\n# copy production node_modules aside\nRUN cp -R node_modules prod_node_modules\n# install ALL node_modules, including \'devDependencies\'\nRUN npm install\n\n#\n# ---- Test ----\n# run linters, setup and tests\nFROM dependencies AS test\nCOPY . .\nRUN  npm run lint && npm run setup && npm run test\n\n#\n# ---- Release ----\nFROM base AS release\n# copy production node_modules\nCOPY --from=dependencies /root/chat/prod_node_modules ./node_modules\n# copy app sources\nCOPY . .\n# expose port and define CMD\nEXPOSE 5000\nCMD npm run start\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codefresh.io/docker-tutorial/node_docker_multistage/"},"2017: Create lean Node.js image with Docker multi-stage buil"))))}k.isMDXComponent=!0}}]);
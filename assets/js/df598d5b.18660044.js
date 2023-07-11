"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[1102],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(k,s(s({ref:n},l),{},{components:t})):r.createElement(k,s({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(83117),a=(t(67294),t(3905));const o={},s="Jenkinsfile React app",i={unversionedId:"DevOps/CI/Platforms/Jenkins/Jenkinsfile-react",id:"DevOps/CI/Platforms/Jenkins/Jenkinsfile-react",title:"Jenkinsfile React app",description:"* Continuous delivery of react app with Jenkins and Docker",source:"@site/docs/DevOps/CI/Platforms/Jenkins/Jenkinsfile-react.md",sourceDirName:"DevOps/CI/Platforms/Jenkins",slug:"/DevOps/CI/Platforms/Jenkins/Jenkinsfile-react",permalink:"/docs/DevOps/CI/Platforms/Jenkins/Jenkinsfile-react",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/Platforms/Jenkins/Jenkinsfile-react.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jenkinsfile node app",permalink:"/docs/DevOps/CI/Platforms/Jenkins/Jenkinsfile-node"},next:{title:"Jenkins Chaos engineering",permalink:"/docs/DevOps/CI/Platforms/Jenkins/jenkins-chaos-engineering"}},c={},p=[{value:"Jenkinsfile",id:"jenkinsfile",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Dockerfile.test",id:"dockerfiletest",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jenkinsfile-react-app"},"Jenkinsfile React app"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackernoon.com/continuous-delivery-of-react-app-with-jenkins-and-docker-8a1ae1511b86"},"Continuous delivery of react app with Jenkins and Docker"))),(0,a.kt)("h2",{id:"jenkinsfile"},"Jenkinsfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"node {\n  try {\n    stage('Checkout') {\n      checkout scm\n    }\n    stage('Environment') {\n      sh 'git --version'\n      echo \"Branch: ${env.BRANCH_NAME}\"\n      sh 'docker -v'\n      sh 'printenv'\n    }\n    stage('Build Docker test'){\n     sh 'docker build -t react-test -f Dockerfile.test --no-cache .'\n    }\n    stage('Docker test'){\n      sh 'docker run --rm react-test'\n    }\n    stage('Clean Docker test'){\n      sh 'docker rmi react-test'\n    }\n    stage('Deploy'){\n      if(env.BRANCH_NAME == 'master'){\n        sh 'docker build -t react-app --no-cache .'\n        sh 'docker tag react-app localhost:5000/react-app'\n        sh 'docker push localhost:5000/react-app'\n        sh 'docker rmi -f react-app localhost:5000/react-app'\n      }\n    }\n  }\n  catch (err) {\n    throw err\n  }\n}\n")),(0,a.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'# Extending image\nFROM node:carbon\n\nRUN apt-get update\nRUN apt-get upgrade -y\nRUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils\n\n# Create app directory\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\n\n# Versions\nRUN npm -v\nRUN node -v\n\n# Install app dependencies\nCOPY package.json /usr/src/app/\nCOPY package-lock.json /usr/src/app/\n\nRUN npm install\n\n# Bundle app source\nCOPY . /usr/src/app\n\n# Port to listener\nEXPOSE 3000\n\n# Environment variables\nENV NODE_ENV production\nENV PORT 3000\nENV PUBLIC_PATH "/"\n\nRUN npm run start:build\n\n# Main command\nCMD [ "npm", "run", "start:server" ]\n')),(0,a.kt)("h2",{id:"dockerfiletest"},"Dockerfile.test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Extending image\nFROM node:carbon\n\nRUN apt-get update\nRUN apt-get upgrade -y\nRUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils\n\n# Create app directory\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\n\n# Versions\nRUN npm -v\nRUN node -v\n\n# Install app dependencies\nCOPY package.json /usr/src/app/\nCOPY package-lock.json /usr/src/app/\n\nRUN npm install\n\n# Bundle app source\nCOPY . /usr/src/app\n\n# Environment variables\nENV NODE_ENV test\n\n# Main command\nCMD [ "npm", "test" ]\n')))}u.isMDXComponent=!0}}]);
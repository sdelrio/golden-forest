"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[464],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,g=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40541:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=r(83117),a=(r(67294),r(3905));const i={},l="GitLab",o={unversionedId:"DevOps/CI/Platforms/gitlab",id:"DevOps/CI/Platforms/gitlab",title:"GitLab",description:"Gitlab runners access",source:"@site/docs/DevOps/CI/Platforms/gitlab.md",sourceDirName:"DevOps/CI/Platforms",slug:"/DevOps/CI/Platforms/gitlab",permalink:"/docs/DevOps/CI/Platforms/gitlab",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/Platforms/gitlab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docs/DevOps/CI/Platforms/gh-actions"},next:{title:"Jenkis-X",permalink:"/docs/DevOps/CI/Platforms/jenkins-x"}},s={},c=[{value:"Gitlab runners access",id:"gitlab-runners-access",level:2},{value:"How to get IPs and mask for public gitlab runners",id:"how-to-get-ips-and-mask-for-public-gitlab-runners",level:3},{value:"Official documentation",id:"official-documentation",level:2},{value:"Articles",id:"articles",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab"},"GitLab"),(0,a.kt)("h2",{id:"gitlab-runners-access"},"Gitlab runners access"),(0,a.kt)("p",null,"Allow access from gitlab runners SaaS to your webook located in port 6443:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow proto tcp from 67.205.128.0/18 to YOUR_PUB_IP port 6443\nufw allow proto tcp from 192.241.128.0/17 to YOUR_PUB_IP port 6443\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gitlab-shared-runners-manager-2.gitlab.com"),(0,a.kt)("li",{parentName:"ul"},"gitlab-shared-runners-manager-1.gitlab.com"),(0,a.kt)("li",{parentName:"ul"},"shared-runners-manager-2.gitlab.com"),(0,a.kt)("li",{parentName:"ul"},"shared-runners-manager-1.gitlab.com")),(0,a.kt)("h3",{id:"how-to-get-ips-and-mask-for-public-gitlab-runners"},"How to get IPs and mask for public gitlab runners"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dig +short gitlab-shared-runners-manager-2.gitlab.com\n67.205.141.121\n$ dig +short gitlab-shared-runners-manager-1.gitlab.com\n67.205.137.49\n$ dig +short shared-runners-manager-2.gitlab.com\n67.205.166.117\n$ whois 67.205.137.49 | grep -i ^cidr\nCIDR:           67.205.128.0/18\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4"},"https://forum.gitlab.com/t/gitlab-ci-runners-public-ip-addresses-range/4301/4"))),(0,a.kt)("h2",{id:"official-documentation"},"Official documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/"},"Gitlab CI/CD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://about.gitlab.com/blog/2017/07/13/making-ci-easier-with-gitlab/"},"Making CI/CD easier with GitLab"))),(0,a.kt)("h2",{id:"articles"},"Articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/how-to-improve-your-kubernetes-ci-cd-pipelines-with-gitlab-and-open-source/%5D"},"2020: How to Improve Your Kubernetes CI/CD Pipelines with GitLab and Open Source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/why-i-moved-my-personal-projects-to-gitlab/"},"2020: Why I Moved My Personal Projects to GitLab")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/part-1-how-to-improve-enhance-your-kubernetes-ci-cd-pipelines-with-gitlab-and-open-source/"},"2020: How Containerized CI/CD Pipelines Work with Kubernetes and GitLab")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/how-digitalocean-and-northwestern-mutual-use-gitlab-to-help-run-ci-cd/"},"2019: How DigitalOcean and Northwestern Mutual Use GitLab to Help Run CI/CD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/gitlab-uses-triggermesh-to-offer-knative-based-serverless-workflows/"},"2019: GitLab Uses TriggerMesh to Offer Knative-Based Serverless Workflows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://campfirecode.medium.com/debugging-gitlab-ci-pipelines-locally-e2699608f4df"},"2018: Debugging GitLab CI pipelines locally")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@teeks99/continuous-integration-with-jenkins-and-gitlab-fa770c62e88a#.c4j4to4ys"},"2016: Continuous Initegration with Jenkins and GitLab"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/gitlab-plugin/wiki/Setup-Example"},"https://github.com/jenkinsci/gitlab-plugin/wiki/Setup-Example")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aboullaite.me/docker-security-scan/"},"2019: Docker security scanning using Microscanner (in Jenkins & Gitlab CI)!"))))}p.isMDXComponent=!0}}]);
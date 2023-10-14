"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8564],{79456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));r(61839);const a={},o="Container Registry",s={unversionedId:"Containers/container-registry",id:"Containers/container-registry",title:"Container Registry",description:"GitLab container registry",source:"@site/docs/Containers/container-registry.md",sourceDirName:"Containers",slug:"/Containers/container-registry",permalink:"/docs/Containers/container-registry",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Containers/container-registry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dockerfile for Python",permalink:"/docs/Containers/Docker/dockerfile-python"},next:{title:"DevOps",permalink:"/docs/DevOps/"}},l={},c=[{value:"GitLab container registry",id:"gitlab-container-registry",level:2}],g={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"container-registry"},"Container Registry"),(0,i.kt)("h2",{id:"gitlab-container-registry"},"GitLab container registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Jenkinsfile")," sample")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"env.TAG = \"$BUILD_TIMESTAMP-$BUILD_ID\"\nenv.IMAGE_X86 = \"registry.gitlab.com/yourproject/yourrepo\"\n\nwithCredentials([usernamePassword(\n        credentialsId: 'gitlab-reg', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER'\n        )]) {\n    sh 'docker login --username $DOCKER_USER --password $DOCKER_PASS registry.gitlab.com'\n    sh 'docker push ${IMAGE_X86}:${TAG}'\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sloppy.io/gitlab-container-registry-alternative-docker-hub/"},"sloopy.io - GitLab Container Registry as an alternative to Docker Hub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlabfan.com/setting-up-your-own-fully-functional-gitlab-https-registry-ci-runners-79901ac617c0"},"2017: Setting up your own fully functional GitLab: HTTPS, Registry, CI + Runners")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://about.gitlab.com/blog/2016/05/23/gitlab-container-registry/"},"2016: GitLab Container Registry"))))}p.isMDXComponent=!0}}]);
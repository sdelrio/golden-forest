"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(o,".").concat(m)]||c[m]||k[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(83117),a=(n(67294),n(3905));const r={},l="Jenkins",s={unversionedId:"DevOps/CI/Platforms/Jenkins/jenkins",id:"DevOps/CI/Platforms/Jenkins/jenkins",title:"Jenkins",description:"Jenkins provides hundreds of plugins to support building, deploying and automating any project. Like a Swiss knives, it can do a lot of things.",source:"@site/docs/DevOps/CI/Platforms/Jenkins/jenkins.md",sourceDirName:"DevOps/CI/Platforms/Jenkins",slug:"/DevOps/CI/Platforms/Jenkins/",permalink:"/docs/DevOps/CI/Platforms/Jenkins/",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/Platforms/Jenkins/jenkins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/docs/DevOps/CI/Chatbots/slack"},next:{title:"Groovy scripts",permalink:"/docs/DevOps/CI/Platforms/Jenkins/Groovy-start-scripts"}},o={},p=[{value:"References",id:"references",level:2},{value:"Setup",id:"setup",level:3},{value:"Articles",id:"articles",level:3},{value:"Global Libraries",id:"global-libraries",level:3},{value:"Sample Pipelines/Jenkinsfiles",id:"sample-pipelinesjenkinsfiles",level:3},{value:"Test Pipelines",id:"test-pipelines",level:3},{value:"Plugins",id:"plugins",level:3},{value:"2021",id:"2021",level:4},{value:"Videos",id:"videos",level:3},{value:"Backup",id:"backup",level:3},{value:"Backup and restore script",id:"backup-and-restore-script",level:4},{value:"Logs",id:"logs",level:3},{value:"Local Development with Jenkins pipelines",id:"local-development-with-jenkins-pipelines",level:3}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jenkins"},"Jenkins"),(0,a.kt)("p",null,"Jenkins provides hundreds of plugins to support building, deploying and automating any project. Like a Swiss knives, it can do a lot of things."),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@jdrawlings/serverless-jenkins-with-jenkins-x-9134cbfe6870"},"serverless version")," called ",(0,a.kt)("a",{parentName:"p",href:"https://jenkins-x.io/es/"},"Jenkins-X")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jenkins.io/"},"Homepage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jenkins.io/doc/book/pipeline/syntax/#stages"},"Pipeline Syntax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/"},"Jenkinsfile Syntax"))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ittroubleshooter.in/run-parallel-build-kubernetes-cluster-jenkins/"},"2020: Run Parallel Builds in Kubernetes Cluster with Jenkins Pipeline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devops.com/using-jenkins-configuration-as-code/"},"2019: Using Jenkins Configuration as Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2w8dbJCTNaA"},"2018: KubeCon NA - Migrationg Jenkins to Kubernetes Broke our brains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudbees.com/blog/build-your-own-jenkins-introducing-custom-wardocker-package"},"2018: Build Your Own Jenkins! Introducing Custom WAR/Docker Package")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1VsvDuffinmxOjg0a7irhgJSRWpCzLg_Yskf7Fw7FpBg/edit#slide=id.g2deaad7e50_0_16"},"2018: Devops world - Jenkins Config as Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/muhammet-arslan/how-ive-created-scaled-and-distributed-jenkins-top-of-kubernetes-441db62b15cd"},"2018: Scaled and distributed Jenkins top of Kubernetes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.blazemeter.com/blog/how-to-setup-scalable-jenkins-on-top-of-a-kubernetes-cluster"},"2018: BlazeMeter - Setup Scalable Jenkins on Top of a Kubernetes Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://technologyconversations.com/2017/06/16/automating-jenkins-docker-setup/comment-page-1/#comment-11768"},"2017: Technology Converstations - Automating Jenkins Docker Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hayderimran7/demo-jenkins-config-as-code"},"2017: Demo Jenkins Config as Code with Docker + Groovy hook scripts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://antonfisher.com/posts/2017/01/16/run-jenkins-in-docker-container-with-persistent-configuration/"},"2017: Run Jenkins in Docker container with persistent config in git"))),(0,a.kt)("h3",{id:"articles"},"Articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudbees.com/blog/top-10-best-practices-jenkins-pipeline-plugin"},"2021: CloudBees - Top 10 Best Practices for Jenkins Pipeline Plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/devops-as-a-service-our-internal-solution/"},"2020: NetApp - DevOps-as-a-Service: Our internal Solution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aboullaite.me/docker-security-scan/"},"2019: Docker security scanning using Microscanner (in Jenkins & Gitlab CI)!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nNBWVVlI1Uk"},"2017: Jenkins World - Jenkins Pipeline on your Local Box to Reduce Cycle Time"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This session is a case study on how to reduce continuous delivery cycle time by using your local resources as the starting point for the continuous delivery Jenkins Pipeline. Your local box has spare CPU, memory and a Git repo to be used with a local Jenkins Pipeline. You get fast feedback and create lots of precious artifacts."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://davehunt.uk/2017/03/23/migrating-to-declarative-jenkins-pipelines.html"},"2017: Mozilla - fxtest-jenkins-pipeline"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxtest-jenkins-pipeline"},"GitHub")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zwischenzugs.com/2017/04/23/things-i-wish-i-knew-before-using-jenkins-pipelines/"},"2017: Ten Things I Wish I\u2019d Known Before Using Jenkins Pipelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://humanwhocodes.com/blog/2015/10/triggering-jenkins-builds-by-url/"},"Trigger job by URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudbees.com/blog/build-your-own-jenkins-introducing-custom-wardocker-package"},"Docker packaging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thenewstack.io/give-jenkins-a-software-bill-of-materials-with-syft/"},"Jenkins software bill of materials with Syft")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.thegeekstuff.com/2017/03/jenkins-users-groups-roles/"},"Restrict Jenkins Project access using Roles (Project Matrix)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jenkins.io/blog/2016/10/16/stage-lock-milestone/"},"2016: Controlling the Flow with Stage, Lock, and Milestone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@teeks99/continuous-integration-with-jenkins-and-gitlab-fa770c62e88a"},"2016: Continous Integraiton with Jenkins and GitLab"))),(0,a.kt)("h3",{id:"global-libraries"},"Global Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fabric8io/fabric8-pipeline-library"},"fabric8"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fabric8.io/guide/cdelivery.html"},"ci/cd fabric")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/pipeline-examples/tree/master/pipeline-examples"},"jenkinsci - pipeline-examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/pipeline-model-definition-plugin/wiki/Reporting-test-results-and-storing-artifacts"},"jenkinsci - report test results")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/liatrio/pipeline-developer"},"jenkins server to develop pipelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/jalogut/centralise-jenkins-pipelines-configuration-using-shared-libraries"},"2017: Centralise Jenkins Pipelines configuration using Shared Libraries")),(0,a.kt)("li",{parentName:"ul"},"[2016: Making your own DSL with plugins, written in Pipeline script]","(Making your own DSL with plugins, written in Pipeline script)")),(0,a.kt)("h3",{id:"sample-pipelinesjenkinsfiles"},"Sample Pipelines/Jenkinsfiles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/leszko/calculator/blob/master/Jenkinsfile"},"2019: Java 8 Pipeline with tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/jonico/e205b16cf07451b2f475543cf1541e70"},"2017: CodeQL, GitHub, Heroku, manual webhook urls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bitbucket.org/snippets/fahl-design/koxKe"},"2016: fahl-design - Slack/mail notifications")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tutorials.releaseworksacademy.com/learn/building-your-first-docker-image-with-jenkins-2-guide-for-developers"},"Building your first Docker image with Jenkins 2: Guide for developers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/continuous-deployment-on-kubernetes/blob/master/sample-app/Jenkinsfile"},"2017: Jenkins Canary releases demo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PXJu8ujNEmU"},"Infoshare 2p017: carter morgan (google) what does a production ready kuberntees application look like")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wade.be/development/2017/09/03/php-ci.html"},"2017: PHP CI with Jenkins and Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vetlugin.wordpress.com/2017/01/31/guide-jenkins-pipeline-merge-requests/"},"2017: A Guide to Handling Merge Requests in Jenkins Pipelines"))),(0,a.kt)("h3",{id:"test-pipelines"},"Test Pipelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RmrpUtbVR7o"},"2017: Jenkins World: JenkinsPipelineUnit: Test your CD pipeline"))),(0,a.kt)("h3",{id:"plugins"},"Plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/role-strategy/"},"Plugin: Role-based Authorization Strategy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/delivery-pipeline-plugin/"},"Plugin: Delivery Pipeline "))),(0,a.kt)("h4",{id:"2021"},"2021"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devopscurry.com/best-jenkins-plugins-for-2021/"},"https://devopscurry.com/best-jenkins-plugins-for-2021/"))),(0,a.kt)("h3",{id:"videos"},"Videos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DDBzm-KT24E"},"2019: CloudBeesTV - Creating a CI/CD Pipeline for Your Shared Libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=IDoRWieTcMc"},"2018: Cloud Next - Continuous Delivery Best Practices with Jenkins and GKE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=dxv0-O63fDM"},"2018: Jenkins World - A Cloud Native Jenkins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://static.sched.com/hosted_files/devopsworldjenkinsworld2018/8f/DWJW2018%20-%20A%20Cloud%20Native%20Jenkins.pdf"},"Presentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jenkins.io/blog/2018/09/12/speaker-blog-a-cloud-native-jenkins/"},"Speaker blogpost: A Cloud Native Jenkins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Pi2kJ2RJS50"},"2017: Jenkins Minutes - Using a Dockerfile with Jenkins Pipeline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LivUvzkXASs"},"2017: Jenkins World - Disposable Jenkins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jenkins.io/blog/2017/07/17/speaker-blog-care/"},"Speaker blogpost: Indispensable, Disposable Jenkins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.joyent.com/blog/fireside-chat-indispensable-disposable-jenkins"},"Joyent + Care.com/HomePay Fireside Chat: Indispensable, Disposable Jenkins")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qaUPESDcsGg"},"2017: Jenkins World - Mastering the Jenkins Script Console"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://groovy-lang.org/learn.html"},"Learging Groovy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/jenkins-scripts"},"Jenkins Community Scripts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.jenkins.io/display/JENKINS/Jenkins+Script+Console"},"Script Console in Jenkins wiki")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.jenkins.io/display/JENKINS/GitHub+Oauth+Plugin"},"Examples in GitHub OAuth Plugin Wiki")),(0,a.kt)("li",{parentName:"ul"},"Configuration via Script Console",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://issues.jenkins-ci.org/browse/JENKINS-31094"},"https://issues.jenkins-ci.org/browse/JENKINS-31094")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sandscape"},"https://github.com/sandscape")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/samrocketman"},"https://github.com/samrocketman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/samrocketman/jenkins-bootstrap-shared/"},"https://github.com/samrocketman/jenkins-bootstrap-shared/"))))))),(0,a.kt)("h3",{id:"backup"},"Backup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devopscube.com/jenkins-backup-data-configurations/"},"2021: How To Backup Jenkins Data and Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://confluence.cornell.edu/display/CLOUD/Backup+Jenkins+Home+EFS+Volume"},"Job on Jenkins to make backup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudbees.com/blog/backup-jenkins-cloud"},"Backup Jenkins to the Cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/luispabon/d181724ee80589d12e4b0de44b921a4f"},"gist - Backup Jenkins config to S3"))),(0,a.kt)("h4",{id:"backup-and-restore-script"},"Backup and restore script"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/luispabon/d181724ee80589d12e4b0de44b921a4f"},"https://gist.github.com/luispabon/d181724ee80589d12e4b0de44b921a4f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backup to S3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n# Generate timestamped filename\nTIMESTAMPED_TAG=`date +%Y-%m-%d-%H%M%S`\nBACKUP_ARCHIVE="./jenkins-backup-${TIMESTAMPED_TAG}.tar.gz"\n\n# Inconceivable race condition avoidance\nif [-f $BACKUP_ARCHIVE ]; then\n    rm ${BACKUP_ARCHIVE}\nfi\n\n# Archive everything on jenkins but workspace, .file, .folders and m2 files, whatever these are\n# If the jenkins folder changes half way through, tar will fail; retry up to 5 times\nCOUNTER=0\nuntil [ $COUNTER -ge 5 ]\ndo\n    tar -czvf ${BACKUP_ARCHIVE} --exclude="workspace" --exclude=".m2" --exclude=builds --exclude=".*" /var/lib/jenkins && break\n\n    # If we get here, tar failed!\n    echo "Archive creation failed, retrying..."\n    COUNTER=$[$COUNTER+1]\n    sleep 15\ndone\n\n# Place on s3 and cleanup\naws s3 cp ${BACKUP_ARCHIVE} s3://${S3_BUCKET}/jenkins-backups/\nrm ${BACKUP_ARCHIVE}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restore from S3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n# Fetch backup generated from script above from s3 and restore\n# This works best BEFORE you install and start jenkins for the first time\n# We use this as part of our jenkins-up logic\nJENKINS_CONFIG_ARCHIVE=`aws s3 ls ${S3_BUCKET}/jenkins-backups/ | sort | tail -n 1 | awk \'{print $4}\'`\naws s3 cp s3://${S3_BUCKET}/jenkins-backups/${JENKINS_CONFIG_ARCHIVE} .\nif [ -f ${JENKINS_CONFIG_ARCHIVE} ]; then\n    echo "Archive found, restoring..."\n    tar -xvf ${JENKINS_CONFIG_ARCHIVE}\n    mkdir -p /var/lib/jenkins\n    mv var/lib/jenkins/* /var/lib/jenkins/\n    chown ${JENKINS_USER}:${JENKINS_GROUP} /var/lib/jenkins -Rf\n    rm ${JENKINS_CONFIG_ARCHIVE}\n    rm var -Rf\nelse\n    echo "No backups found on s3, skipping..."\nfi\n')),(0,a.kt)("h3",{id:"logs"},"Logs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dzone.com/articles/putting-jenkins-build-logs-into-elk-stack-filebeat"},"2017: Putting Jenkins Build log into dockerized ELK stack"))),(0,a.kt)("h3",{id:"local-development-with-jenkins-pipelines"},"Local Development with Jenkins pipelines"),(0,a.kt)("p",null,"Jenkins server for developing pipelines locally without requiring git commits.\nThe goal here is to be able to immediately run a pipeline locally without needing to manually copy code or make a git commit before running changes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://liatrio.com/local-development-with-jenkins-pipelines/"},"2017: Building with Docker Using Jenkins Pipelines"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/liatrio/pipeline-developer"},"https://github.com/liatrio/pipeline-developer"))))))}k.isMDXComponent=!0}}]);
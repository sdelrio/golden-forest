"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[325],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6175:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],s={},l="Jenkins Groovy scripts",c={unversionedId:"DevOps/CI/Platforms/Jenkins/Groovy-start-scripts",id:"DevOps/CI/Platforms/Jenkins/Groovy-start-scripts",title:"Jenkins Groovy scripts",description:"Jenkins server configuration",source:"@site/docs/DevOps/CI/Platforms/Jenkins/Groovy-start-scripts.md",sourceDirName:"DevOps/CI/Platforms/Jenkins",slug:"/DevOps/CI/Platforms/Jenkins/Groovy-start-scripts",permalink:"/docs/DevOps/CI/Platforms/Jenkins/Groovy-start-scripts",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/CI/Platforms/Jenkins/Groovy-start-scripts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docs/DevOps/CI/Platforms/Jenkins/"},next:{title:"Jenkinsfile node app",permalink:"/docs/DevOps/CI/Platforms/Jenkins/Jenkinsfile-node"}},p=[{value:"Jenkins server configuration",id:"jenkins-server-configuration",children:[],level:2},{value:"Load an extra Jenkinsfile",id:"load-an-extra-jenkinsfile",children:[],level:2},{value:"Groovy file check",id:"groovy-file-check",children:[],level:2},{value:"Groovy environment vars",id:"groovy-environment-vars",children:[{value:"General enviornment vars",id:"general-enviornment-vars",children:[],level:3}],level:2},{value:"Build environment vars",id:"build-environment-vars",children:[],level:2},{value:"Jenkins OK/Cancel button",id:"jenkins-okcancel-button",children:[],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jenkins-groovy-scripts"},"Jenkins Groovy scripts"),(0,a.kt)("h2",{id:"jenkins-server-configuration"},"Jenkins server configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hayderimran7/useful-jenkins-groovy-init-scripts/blob/master/init.groovy"},"Usefull jenkins groovy init scripts"),": A script that setups and configure Jenkins with a script, non-interactive mode.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/samrocketman/jenkins-bootstrap-jervis"},"Automated Jenkins CI env which provisions agent infra on the fly per build"),": Bootstrap Jenkins using Jervis (Jenkins as a Service)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/mvanholsteijn/docker-makefile/blob/master/Makefile"},"mvanholsteijn/docker-makefile"),": Makefile for building docker repository releases"))),(0,a.kt)("h2",{id:"load-an-extra-jenkinsfile"},"Load an extra Jenkinsfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/NET-A-PORTER/jenkinsworld-2017-sample-app/blob/master/Jenkinsfile"},"Jenkinsworld 2017 sample app"),": Load a ",(0,a.kt)("inlineCode",{parentName:"li"},"path/Jenkinsfile")," inside a ",(0,a.kt)("inlineCode",{parentName:"li"},"Jenkinsfile"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'node {\n    checkout scm\n\n    echo env.JENKINS_URL\n    if(env.JENKINS_URL ==~ /.*central-pipeline.*/) {\n        echo "loading central"\n        load "central/Jenkinsfile"\n    } else {\n        echo "loading local"\n        load "local/Jenkinsfile"\n    }\n}()\n')),(0,a.kt)("h2",{id:"groovy-file-check"},(0,a.kt)("a",{parentName:"h2",href:"https://stackoverflow.com/questions/39262999/groovy-file-check"},"Groovy file check")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file.exists()")," to check if the file exists on the filesystem "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file.readable()")," to check if it can be read by the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JSONSlurper")," to parse the file and catch ",(0,a.kt)("inlineCode",{parentName:"li"},"JSONException")," if the json is invalid:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import groovy.json.*\n\ndef filePath = "/tmp/file.json"\n\ndef file = new File(filePath)\n\nassert file.exists() : "file not found"\nassert file.canRead() : "file cannot be read"\n\ndef jsonSlurper = new JsonSlurper()\ndef object\n\ntry {\n  object = jsonSlurper.parse(file)\n} catch (JsonException e) {\n  println "File is not valid"\n  throw e\n}\n\nprintln object\n')),(0,a.kt)("p",null,'To pass the file path argument from the command line, replace def filePath = "/tmp/file.json" with'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'assert args.size == 1 : "missing file to parse"\ndef filePath = args[0]\n')),(0,a.kt)("p",null,"and execute on the command line groovy parse.groovy ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/file.json")),(0,a.kt)("h2",{id:"groovy-environment-vars"},(0,a.kt)("a",{parentName:"h2",href:"https://stackoverflow.com/questions/21236268/access-to-build-environment-variables-from-a-groovy-script-in-a-jenkins-build-st"},"Groovy environment vars")),(0,a.kt)("h3",{id:"general-enviornment-vars"},"General enviornment vars"),(0,a.kt)("p",null,"Vars like ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'System.getenv("BASE")\n')),(0,a.kt)("h2",{id:"build-environment-vars"},"Build environment vars"),(0,a.kt)("p",null,"To get vars like ",(0,a.kt)("inlineCode",{parentName:"p"},"JOB_NAME")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def myVar = build.getEnvironment(listener).get('myVar')\n")),(0,a.kt)("h2",{id:"jenkins-okcancel-button"},(0,a.kt)("a",{parentName:"h2",href:"https://support.cloudbees.com/hc/en-us/articles/226554067-Pipeline-How-to-add-an-input-step-with-timeout-that-continues-if-timeout-is-reached-using-a-default-value"},"Jenkins OK/Cancel button")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"def userInput = true\ndef didTimeout = false\ntry {\n    timeout(time: 15, unit: 'SECONDS') { // change to a convenient timeout for you\n        userInput = input(\n        id: 'Proceed1', message: 'Was this successful?', parameters: [\n        [$class: 'BooleanParameterDefinition', defaultValue: true, description: '', name: 'Please confirm you agree with this']\n        ])\n    }\n} catch(err) { // timeout reached or input false\n    def user = err.getCauses()[0].getUser()\n    if('SYSTEM' == user.toString()) { // SYSTEM means timeout.\n        didTimeout = true\n    } else {\n        userInput = false\n        echo \"Aborted by: [${user}]\"\n    }\n}\n\nnode {\n    if (didTimeout) {\n        // do something on timeout\n        echo \"no input was received before timeout\"\n    } else if (userInput == true) {\n        // do something\n        echo \"this was successful\"\n    } else {\n        // do something else\n        echo \"this was not successful\"\n        currentBuild.result = 'FAILURE'\n    }\n}\n")))}f.isMDXComponent=!0}}]);
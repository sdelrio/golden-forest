"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4771],{8200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(7462),s=(t(7294),t(3905));t(1839);const i={},r="Inspec.io",o={unversionedId:"QA/inspec",id:"QA/inspec",title:"Inspec.io",description:"Chef Inspec provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers.",source:"@site/docs/QA/inspec.md",sourceDirName:"QA",slug:"/QA/inspec",permalink:"/docs/QA/inspec",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/QA/inspec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quality Assurance",permalink:"/docs/category/quality-assurance"},next:{title:"Selenium",permalink:"/docs/QA/selenium-grid"}},c={},m=[{value:"Generate JUnit.xml",id:"generate-junitxml",level:2},{value:"Articles",id:"articles",level:2}],p={toc:m},l="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(l,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"inspecio"},"Inspec.io"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.chef.io/products/chef-inspec"},"Chef Inspec")," provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers."),(0,s.kt)("p",null,"Compliance, security, and other policy requirements become automated tests that can be run against traditional servers, containers, and cloud APIs, ensuring enforced consistent standards in every managed environment, at every stage of development."),(0,s.kt)("h2",{id:"generate-junitxml"},"Generate JUnit.xml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'set +x\ncd /packer\nexport machinename=win10-updated\n\nvboxmanage import "./output-${machinename}/${machinename}.ovf" --vsys 0 --unit 4 --ignore\nvboxmanage list vms\n# vboxmanage modifyvm "${machinename}" --natpf1 "winrm,tcp,,5985,,5985"\nvboxmanage showvminfo "${machinename}"\nvboxmanage startvm "${machinename}" --type headless\nsleep 5\nvboxmanage list runningvms\nexport RC=0\n\ninspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password \'soporte\' || inspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password \'mywindowspassword\' --format=junit > test/report-${machinename}.xml || RC=1\nchmod g+w test/report-${machinename}.xml\n\nvboxmanage controlvm "${machinename}" poweroff\nvboxmanage unregistervm "${machinename}" -delete\n\ncd -\ncp /packer/test/report-${machinename}.xml .\n\nexit $RC\n')),(0,s.kt)("h2",{id:"articles"},"Articles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blog.ragnarson.com/2017-03-13-inspec-inspect-your-infrastructure/"},"InSpec - Inspect Your Infrastructure")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://community.chef.io/tools/chef-inspec"},"https://community.chef.io/tools/chef-inspec"))))}d.isMDXComponent=!0}}]);
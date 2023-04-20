"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4771],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18200:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=(t(67294),t(3905));const o={},i="Inspec.io",c={unversionedId:"QA/inspec",id:"QA/inspec",title:"Inspec.io",description:"Chef Inspec provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers.",source:"@site/docs/QA/inspec.md",sourceDirName:"QA",slug:"/QA/inspec",permalink:"/docs/QA/inspec",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/QA/inspec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quality Assurance",permalink:"/docs/category/quality-assurance"},next:{title:"Selenium",permalink:"/docs/QA/selenium-grid"}},s={},p=[{value:"Generate JUnit.xml",id:"generate-junitxml",level:2},{value:"Articles",id:"articles",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inspecio"},"Inspec.io"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.chef.io/products/chef-inspec"},"Chef Inspec")," provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers."),(0,a.kt)("p",null,"Compliance, security, and other policy requirements become automated tests that can be run against traditional servers, containers, and cloud APIs, ensuring enforced consistent standards in every managed environment, at every stage of development."),(0,a.kt)("h2",{id:"generate-junitxml"},"Generate JUnit.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set +x\ncd /packer\nexport machinename=win10-updated\n\nvboxmanage import "./output-${machinename}/${machinename}.ovf" --vsys 0 --unit 4 --ignore\nvboxmanage list vms\n# vboxmanage modifyvm "${machinename}" --natpf1 "winrm,tcp,,5985,,5985"\nvboxmanage showvminfo "${machinename}"\nvboxmanage startvm "${machinename}" --type headless\nsleep 5\nvboxmanage list runningvms\nexport RC=0\n\ninspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password \'soporte\' || inspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password \'mywindowspassword\' --format=junit > test/report-${machinename}.xml || RC=1\nchmod g+w test/report-${machinename}.xml\n\nvboxmanage controlvm "${machinename}" poweroff\nvboxmanage unregistervm "${machinename}" -delete\n\ncd -\ncp /packer/test/report-${machinename}.xml .\n\nexit $RC\n')),(0,a.kt)("h2",{id:"articles"},"Articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.ragnarson.com/2017-03-13-inspec-inspect-your-infrastructure/"},"InSpec - Inspect Your Infrastructure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://community.chef.io/tools/chef-inspec"},"https://community.chef.io/tools/chef-inspec"))))}u.isMDXComponent=!0}}]);
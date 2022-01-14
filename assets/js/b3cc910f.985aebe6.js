"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[5090],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=o(n),h=i,d=f["".concat(c,".").concat(h)]||f[h]||p[h]||s;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46979:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return f}});var r=n(83117),i=n(80102),s=(n(67294),n(3905)),l=["components"],a={},c="Unit testing",o={unversionedId:"Shell-Script/bash-unit-testing",id:"Shell-Script/bash-unit-testing",title:"Unit testing",description:"Sample script",source:"@site/docs/Shell-Script/bash-unit-testing.md",sourceDirName:"Shell-Script",slug:"/Shell-Script/bash-unit-testing",permalink:"/docs/Shell-Script/bash-unit-testing",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Shell-Script/bash-unit-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OWASP",permalink:"/docs/Security/owasp"},next:{title:"Tmux",permalink:"/docs/Shell-Script/tmux"}},u=[{value:"Sample script",id:"sample-script",children:[],level:2},{value:"Dockerfile runtime",id:"dockerfile-runtime",children:[],level:2},{value:"Test script",id:"test-script",children:[],level:2},{value:"Dockerfile.test",id:"dockerfiletest",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,s.kt)("h2",{id:"sample-script"},"Sample script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nAMOUNT=$(ls crashdump | wc -l)\n\nif [[ AMOUNT -ge 3 ]]; then\n  mail -s \u201cAlert: Too many files: $AMOUNT\u201d alerts@toomanycrashes.com\nfi\n")),(0,s.kt)("h2",{id:"dockerfile-runtime"},"Dockerfile runtime"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM debian:stretch-slim\n\nRUN mkdir /script\nCOPY script.sh /script/script.sh\nRUN chmod +x /script/script.sh\n\nENTRYPOINT [ "/script/script.sh" ]\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build image")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t scriptimage:latest .\n")),(0,s.kt)("h2",{id:"test-script"},"Test script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nshopt -s expand_aliases\n\n# Execute before all tests\nalias mail="echo \'alert send\' > output;false"\necho \'Test results for our image/script\' > results.txt\ncount=0\n\n# test 1 (less than or equal)\n# Execute before test 1\nalias ls="echo -e \'file1\\nfile2\'"\necho \'No output\' > output\n\n# Run script\n. /script/script.sh\n\n# Check result (assert)\n((count=count+1))\nif [[ $(< output) == \'alert send\' ]]; then\n  echo "$count. FAIL: Alert mail send while less than three files" >> results.txt\nelse\n  echo "$count. PASS: Alert mail not send" >> results.txt\nfi\n\n# Prepare test 2 (greater than or equal)\nalias ls="echo -e \'file1\\nfile2\\nfile3\\nfile4\'"\necho \'No output\' > output\n\n# Run script\n. /script/script.sh\n\n# Check result (assert)\n((count=count+1))\nif [[ $(< output) == \'alert send\' ]]; then\n  echo "$count. PASS: Alert mail send" >> results.txt\nelse\n  echo "$count. FAIL: Did not send Alert mail" >> results.txt\nfi\n\n# After all\nunalias ls\nunalias mail\n\n# Display test results\ncat results.txt\n\n# Return exit 1 if FAIL found\nif grep -q "FAIL" results.txt; then\n  echo "exiting with exit 1"\n  exit 1\nfi\n\n')),(0,s.kt)("h2",{id:"dockerfiletest"},"Dockerfile.test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM scriptimage:latest\n\nCOPY test.sh /script/test.sh\nRUN chmod +x /script/test.sh\n\nENTRYPOINT [ "/script/test.sh" ]\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build & run test image")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t unittest:latest -f Dockerfile.test .\ndocker run unittest:latest\n")),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.flowfactor.be/unit-testing-bash-scripts-the-cloud-native-way/"},"Unit testing bash scripts the cloud-native way"))))}f.isMDXComponent=!0}}]);
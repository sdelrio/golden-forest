"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],u={title:"Temperature",date:20211106,author:"sdelrio",tags:["temperature","benchmark","cpu"]},l="Check CPU temperature",c={unversionedId:"OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature",id:"OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature",title:"Temperature",description:"Requirements",source:"@site/docs/OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature.md",sourceDirName:"OS/GNU-Linux/Hardware/CPU/Monitoring",slug:"/OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/Hardware/CPU/Monitoring/cpu-temperature.md",tags:[{label:"temperature",permalink:"/docs/tags/temperature"},{label:"benchmark",permalink:"/docs/tags/benchmark"},{label:"cpu",permalink:"/docs/tags/cpu"}],version:"current",frontMatter:{title:"Temperature",date:20211106,author:"sdelrio",tags:["temperature","benchmark","cpu"]},sidebar:"tutorialSidebar",previous:{title:"Linux Benchmark Apps",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Benchmarks/linux-cpu-bench"},next:{title:"Disable mitigations",permalink:"/docs/OS/GNU-Linux/Hardware/CPU/Tuning/disable-cpu-mitigations"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Sensors",id:"sensors",children:[],level:2},{value:"Gnome extensions",id:"gnome-extensions",children:[],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"check-cpu-temperature"},"Check CPU temperature"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apt install lm-sensors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo sensors-detect"))),(0,i.kt)("h2",{id:"sensors"},"Sensors"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> sensors\niwlwifi_1-virtual-0\nAdapter: Virtual device\ntemp1:            N/A  \n\nk10temp-pci-00c3\nAdapter: PCI adapter\nTdie:         +45.5\xb0C  (high = +70.0\xb0C)\nTctl:         +45.5\xb0C  \n\namdgpu-pci-0900\nAdapter: PCI adapter\nvddgfx:      1000.00 mV \nfan1:        1182 RPM  (min =    0 RPM, max = 2900 RPM)\nedge:         +36.0\xb0C  (crit = +94.0\xb0C, hyst = -273.1\xb0C)\npower1:       25.04 W  (cap = 110.00 W)\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Ryzen ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only newer kernels like ",(0,i.kt)("a",{parentName:"p",href:"/docs/OS/GNU-Linux/Kernel/linux-5.15"},"Linux 5.15")," will allow to get Zen 3 APU temperature."))),(0,i.kt)("h2",{id:"gnome-extensions"},"Gnome extensions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/1180/freon/"},"Freon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://extensions.gnome.org/extension/82/cpu-temperature-indicator/"},"Sensors"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/"},"https://www.cyberciti.biz/faq/how-to-check-cpu-temperature-on-ubuntu-linux/"))))}m.isMDXComponent=!0}}]);
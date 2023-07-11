"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[2466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(83117),o=(n(67294),n(3905));const i={},a="Netplan",s={unversionedId:"OS/GNU-Linux/netplan",id:"OS/GNU-Linux/netplan",title:"Netplan",description:"Netplan is an utility for easily configuring networking on a linux system. You simply create a YAML description of the required network interfaces and what each should be configured to do. From this description Netplan will generate all the necessary configuration for your chosen renderer tool.",source:"@site/docs/OS/GNU-Linux/netplan.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/netplan",permalink:"/docs/OS/GNU-Linux/netplan",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/netplan.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KVM/QEMU",permalink:"/docs/OS/GNU-Linux/kvm-qemu"},next:{title:"Systemd-resolved",permalink:"/docs/OS/GNU-Linux/resolved"}},l={},u=[{value:"Configure static IPs",id:"configure-static-ips",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"netplan"},"Netplan"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://netplan.io/"},"Netplan")," is an utility for easily configuring networking on a linux system. You simply create a YAML description of the required network interfaces and what each should be configured to do. From this description Netplan will generate all the necessary configuration for your chosen renderer tool."),(0,o.kt)("h2",{id:"configure-static-ips"},"Configure static IPs"),(0,o.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("p",null,"The new interfaces configuration file now live in the /etc/netplan directory. A file called 01-netcfg.yaml is used to configured the first interface. Below is the default configuration for a interface using DHCP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# This file describes the network interfaces available on your system\n# For more information, see netplan(5).\nnetwork:\n version: 2\n renderer: networkd\n ethernets:\n   ens33:\n     dhcp4: no\n     dhcp6: no\n     addresses: [192.168.1.2/24]\n     gateway4: 192.168.1.1\n     nameservers:\n       addresses: [8.8.8.8,8.8.4.4]\n")),(0,o.kt)("p",null,"Exit and save your changes by running the commands below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo netplan apply\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://websiteforstudents.com/how-to-configure-static-ip-address-on-ubuntu-linux/"},"https://websiteforstudents.com/how-to-configure-static-ip-address-on-ubuntu-linux/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://websiteforstudents.com/configuring-static-ips-ubuntu-17-10-servers/"},"https://websiteforstudents.com/configuring-static-ips-ubuntu-17-10-servers/"))))}p.isMDXComponent=!0}}]);
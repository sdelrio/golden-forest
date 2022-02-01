"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3745],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3516:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],o={},l="ssh client",c={unversionedId:"OS/GNU-Linux/ssh",id:"OS/GNU-Linux/ssh",title:"ssh client",description:"Tunnel",source:"@site/docs/OS/GNU-Linux/ssh.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/ssh",permalink:"/docs/OS/GNU-Linux/ssh",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ssh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Systemd-resolved",permalink:"/docs/OS/GNU-Linux/resolved"},next:{title:"Syslog",permalink:"/docs/OS/GNU-Linux/syslog"}},u=[{value:"Tunnel",id:"tunnel",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Advanced",id:"advanced",children:[],level:3}],level:2},{value:"Generate ed25519 ssh key",id:"generate-ed25519-ssh-key",children:[],level:2},{value:"Generate SSH pub key from priv key",id:"generate-ssh-pub-key-from-priv-key",children:[{value:"References",id:"references",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ssh-client"},"ssh client"),(0,i.kt)("h2",{id:"tunnel"},"Tunnel"),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh  -L:6443:<target_ip>:6443 <user>@<machine_if_ip>\n")),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -M -S my_tunnel -fnNT -l mysshuser -i $HOME/.ssh/id_rsa -L:6443:<target_ip>:6443 <machine_if_ip>\n")),(0,i.kt)("h2",{id:"generate-ed25519-ssh-key"},"Generate ed25519 ssh key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "john@example.com"\n\nssh-add ~/.ssh/id_ed25519\n')),(0,i.kt)("h2",{id:"generate-ssh-pub-key-from-priv-key"},"Generate SSH pub key from priv key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -y -f private_key.pem > public_key.pem\n")),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lwn.net/Articles/821544/"},"https://lwn.net/Articles/821544/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/"},"https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54"},"https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54"))))}d.isMDXComponent=!0}}]);
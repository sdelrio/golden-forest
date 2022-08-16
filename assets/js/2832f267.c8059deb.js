"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3745],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const s={},i="ssh client",o={unversionedId:"OS/GNU-Linux/ssh",id:"OS/GNU-Linux/ssh",title:"ssh client",description:"Tunnel",source:"@site/docs/OS/GNU-Linux/ssh.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/ssh",permalink:"/docs/OS/GNU-Linux/ssh",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/ssh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Systemd-resolved",permalink:"/docs/OS/GNU-Linux/resolved"},next:{title:"Syslog",permalink:"/docs/OS/GNU-Linux/syslog"}},l={},u=[{value:"Tunnel",id:"tunnel",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Generate ed25519 ssh key",id:"generate-ed25519-ssh-key",level:2},{value:"Generate SSH pub key from priv key",id:"generate-ssh-pub-key-from-priv-key",level:2},{value:"References",id:"references",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-client"},"ssh client"),(0,a.kt)("h2",{id:"tunnel"},"Tunnel"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh  -L:6443:<target_ip>:6443 <user>@<machine_if_ip>\n")),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -M -S my_tunnel -fnNT -l mysshuser -i $HOME/.ssh/id_rsa -L:6443:<target_ip>:6443 <machine_if_ip>\n")),(0,a.kt)("h2",{id:"generate-ed25519-ssh-key"},"Generate ed25519 ssh key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "john@example.com"\n\nssh-add ~/.ssh/id_ed25519\n')),(0,a.kt)("h2",{id:"generate-ssh-pub-key-from-priv-key"},"Generate SSH pub key from priv key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -y -f private_key.pem > public_key.pem\n")),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lwn.net/Articles/821544/"},"https://lwn.net/Articles/821544/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/"},"https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54"},"https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54"))))}p.isMDXComponent=!0}}]);
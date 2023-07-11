"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,f=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const l={},a="Tunnes to LAN",i={unversionedId:"Networking/VPN/tunnels-to-lan",id:"Networking/VPN/tunnels-to-lan",title:"Tunnes to LAN",description:"Inlets",source:"@site/docs/Networking/VPN/tunnels-to-lan.md",sourceDirName:"Networking/VPN",slug:"/Networking/VPN/tunnels-to-lan",permalink:"/docs/Networking/VPN/tunnels-to-lan",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Networking/VPN/tunnels-to-lan.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10 GB Network at home",permalink:"/docs/Networking/10Gb/Gb-Network"},next:{title:"WireGuard VPN",permalink:"/docs/Networking/VPN/wireguard-vpn"}},u={},s=[{value:"Inlets",id:"inlets",level:2},{value:"Ngrok",id:"ngrok",level:2},{value:"Cloudflared tunnel",id:"cloudflared-tunnel",level:2},{value:"UltraHook",id:"ultrahook",level:2},{value:"TincVPN",id:"tincvpn",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tunnes-to-lan"},"Tunnes to LAN"),(0,o.kt)("h2",{id:"inlets"},"Inlets"),(0,o.kt)("p",null,"Get live traffic to your development machine, just like in production."),(0,o.kt)("p",null,"inlets was built to run just as well in containers as on bare metal, and scales outs as you grow."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://inlets.dev/"},"Inlets Homepage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.inlets.dev/"},"Inlets Doc"))),(0,o.kt)("h2",{id:"ngrok"},"Ngrok"),(0,o.kt)("p",null,"Expose a local web server to the internet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example: Expose a secure web server on port 5001 of your local machine to the internet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ngrok http https://localhost:5001\n")),(0,o.kt)("p",null,"When you start ngrok, it will display a UI in your terminal with the public URL of your tunnel and other status and metrics information about connections made over your tunnel."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ngrok console UI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ngrok by @inconshreveable\n\nTunnel Status                 online\nVersion                       2.0/2.0\nWeb Interface                 http://127.0.0.1:4040\nForwarding                    http://92832de0.ngrok.io -> localhost:80\nForwarding                    https://92832de0.ngrok.io -> localhost:80\n\nConnnections                  ttl     opn     rt1     rt5     p50     p90\n                              0       0       0.00    0.00    0.00    0.00\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ngrok.com/"},"Ngrok Homepage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ngrok.com/docs"},"Ngrok Doc"))),(0,o.kt)("h2",{id:"cloudflared-tunnel"},"Cloudflared tunnel"),(0,o.kt)("p",null,"Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address. With Tunnel, you do not send traffic to an external IP \u2014 instead, a lightweight daemon in your infrastructure (cloudflared) creates outbound-only connections to Cloudflare\u2019s edge. Cloudflare Tunnel can connect HTTP web servers, SSH servers, remote desktops, and other protocols safely to Cloudflare. This way, your origins can serve traffic through Cloudflare without being vulnerable to attacks that bypass Cloudflare."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps"},"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps"))),(0,o.kt)("h2",{id:"ultrahook"},"UltraHook"),(0,o.kt)("p",null,"Receive webhooks on localhost trough all firewalls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ultrahook.com/"},"UltraHook Homepage"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gem install ultrahook\n$ ultrahook stripe 5000\nAuthenticated as senvee\nForwarding activated...\nhttps://senvee-stripe.ultrahook.com -> http://localhost:5000\n")),(0,o.kt)("h2",{id:"tincvpn"},"TincVPN"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tinc-vpn.org/"},"Homepage TincVPN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jordancrawford.kiwi/home-server-without-portforward/"},"Article home server without port forward"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jordancrawford.kiwi/setting-up-tinc/"},"https://jordancrawford.kiwi/setting-up-tinc/"))))))}p.isMDXComponent=!0}}]);
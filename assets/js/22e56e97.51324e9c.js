"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4912],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(83117),a=r(67294),l=r(72389),o=r(79443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(16681),c=r(86010),s="tabItem_1uMI";function p(e){var t,r,l,o=e.lazy,p=e.block,m=e.defaultValue,d=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=u(),k=w.tabGroupChoices,x=w.setTabGroupChoices,O=(0,a.useState)(g),T=O[0],S=O[1],E=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&S(j)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==T&&(N(t),S(n),null!=f&&x(f,n))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:P,onClick:P},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},54478:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=r(26396),u=r(58215),i=["components"],c={},s="Tmux",p={unversionedId:"Shell-Script/tmux",id:"Shell-Script/tmux",title:"Tmux",description:"Install",source:"@site/docs/Shell-Script/tmux.md",sourceDirName:"Shell-Script",slug:"/Shell-Script/tmux",permalink:"/docs/Shell-Script/tmux",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Shell-Script/tmux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OWASP",permalink:"/docs/Security/owasp"},next:{title:"Oh my Zsh",permalink:"/docs/Shell-Script/zsh/oh-my-zsh"}},m=[{value:"Install",id:"install",children:[],level:2},{value:"References",id:"references",children:[{value:"Boost terminal productivity",id:"boost-terminal-productivity",children:[],level:3},{value:"Tmux + Vim",id:"tmux--vim",children:[],level:3}],level:2}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tmux"},"Tmux"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"MacOs",label:"MacOs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install tmux\n"))),(0,l.kt)(u.Z,{value:"linux",label:"Ubuntu/Debian/Mint",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install tmux\n")))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("h3",{id:"boost-terminal-productivity"},"Boost terminal productivity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nickjanetakis.com/blog/who-else-wants-to-boost-their-productivity-with-tmux"},"https://nickjanetakis.com/blog/who-else-wants-to-boost-their-productivity-with-tmux"))),(0,l.kt)("h3",{id:"tmux--vim"},"Tmux + Vim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bugsnag.com/blog/tmux-and-vim"},"https://www.bugsnag.com/blog/tmux-and-vim"))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4912],{85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),s=a(16550),o=a(91980),i=a(67392),c=a(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,i]=b({queryString:a,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==s&&(m(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},u,{className:(0,l.Z)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},54478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=(a(61839),a(74866)),u=a(85162);const s={},o="Tmux",i={unversionedId:"Shell-Script/tmux",id:"Shell-Script/tmux",title:"Tmux",description:"Install",source:"@site/docs/Shell-Script/tmux.md",sourceDirName:"Shell-Script",slug:"/Shell-Script/tmux",permalink:"/docs/Shell-Script/tmux",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Shell-Script/tmux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unit testing",permalink:"/docs/Shell-Script/bash-unit-testing"},next:{title:"Oh my Zsh",permalink:"/docs/Shell-Script/zsh/oh-my-zsh"}},c={},m=[{value:"Install",id:"install",level:2},{value:"References",id:"references",level:2},{value:"Boost terminal productivity",id:"boost-terminal-productivity",level:3},{value:"Tmux + Vim",id:"tmux--vim",level:3}],d={toc:m},p="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tmux"},"Tmux"),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"MacOs",label:"MacOs",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"brew install tmux\n"))),(0,n.kt)(u.Z,{value:"linux",label:"Ubuntu/Debian/Mint",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install tmux\n")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("h3",{id:"boost-terminal-productivity"},"Boost terminal productivity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nickjanetakis.com/blog/who-else-wants-to-boost-their-productivity-with-tmux"},"https://nickjanetakis.com/blog/who-else-wants-to-boost-their-productivity-with-tmux"))),(0,n.kt)("h3",{id:"tmux--vim"},"Tmux + Vim"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bugsnag.com/blog/tmux-and-vim"},"https://www.bugsnag.com/blog/tmux-and-vim"))))}b.isMDXComponent=!0}}]);
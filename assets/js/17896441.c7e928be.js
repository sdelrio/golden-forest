"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7918],{31986:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(83117),l=n(67294),r=n(34334),o=n(35281),i=n(53438),s=n(48596),c=n(39960),d=n(44996),m=n(95999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function f(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(c.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function b(e){let{children:t,active:n,index:o,addMicrodata:i}=e;return l.createElement("li",(0,a.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function h(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}function p(){const e=(0,i.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},15154:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(67294),l=n(10833),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function c(){var e;const{metadata:t,frontMatter:n,assets:r}=s();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(34334),m=n(87524),u=n(80049);function v(){const{metadata:e}=s();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var f=n(23120),b=n(44364),h=n(35281),p=n(95999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:h.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=n(84881),N=n(71526),_="lastUpdated_vwxv";function k(e){return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(N.Z,e)))}function C(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(Z.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",_)},(n||l)&&a.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function T(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,c=!!(t||n||r);return i||c?a.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(k,{tags:o}),c&&a.createElement(C,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var x=n(86043),H=n(93743),U=n(83117),w="tocCollapsibleButton_TO0P",y="tocCollapsibleButtonExpanded_MG3E";function A(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,U.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",w,!t&&y,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var M="tocCollapsible_ETCw",I="tocCollapsibleContent_vkbj",B="tocCollapsibleExpanded_sAul";function V(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,x.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(M,!o&&B,n)},a.createElement(A,{collapsed:o,onClick:i}),a.createElement(x.z,{lazy:!0,className:I,collapsed:o},a.createElement(H.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var O="tocMobile_ITEo";function S(){const{toc:e,frontMatter:t}=s();return a.createElement(V,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,O)})}var P=n(39407);function D(){const{toc:e,frontMatter:t}=s();return a.createElement(P.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var R=n(92503),z=n(59588);function F(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(R.Z,{as:"h1"},n)),a.createElement(z.Z,null,t))}var j=n(31986),q="docItemContainer_Djhp",G="docItemCol_VOVn";function J(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(S,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(D,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&G)},a.createElement(f.Z,null),a.createElement("div",{className:q},a.createElement("article",null,a.createElement(j.Z,null),a.createElement(b.Z,null),n.mobile,a.createElement(F,null,t),a.createElement(T,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Q(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(c,null),a.createElement(J,null,a.createElement(n,null))))}},80049:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(83117),l=n(67294),r=n(95999),o=n(32244);function i(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(o.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),l=n(34334),r=n(95999),o=n(35281),i=n(74477);function s(e){let{className:t}=e;const n=(0,i.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),l=n(34334),r=n(52263),o=n(39960),i=n(95999),s=n(80143),c=n(35281),d=n(60373),m=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:i}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(i),{latestDocSuggestion:u,latestVersionSuggestion:b}=(0,s.Jo)(i),h=null!=u?u:(p=b).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:b.label,to:h.path,onClick:()=>m(b.name)})))}function h(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}},84881:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),l=n(95999),r=n(35281),o=n(83117),i=n(34334),s="iconEdit_Z9Sw";function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(c,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),l=n(34334),r=n(39960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},39407:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(83117),l=n(67294),r=n(34334),o=n(93743),i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(83117),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>s(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var v=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const b=(0,r.L)(),h=null!=d?d:b.tableOfContents.minHeadingLevel,p=null!=u?u:b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return m((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:p}}),[s,c,h,p])),l.createElement(v,(0,a.Z)({toc:g,className:n,linkClassName:s},f))}},13008:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),l=n(34334),r=n(39960),o="tag_zVej",i="tagRegular_sFm0",s="tagWithCount_h2kH";function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(o,c?s:i)},n,c&&a.createElement("span",null,c))}},71526:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),l=n(34334),r=n(95999),o=n(13008),i="tags_jXut",s="tag_QGVx";function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:s},a.createElement(o.Z,{label:t,permalink:n}))}))))}}}]);
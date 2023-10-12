"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4225],{5459:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=s(7462),n=(s(7294),s(3905));s(1839);const l={},a="Wordpress",i={unversionedId:"Networking/CDN/wordpress",id:"Networking/CDN/wordpress",title:"Wordpress",description:"Force CSS reload in WordPress every time when file is updated",source:"@site/docs/Networking/CDN/wordpress.md",sourceDirName:"Networking/CDN",slug:"/Networking/CDN/wordpress",permalink:"/docs/Networking/CDN/wordpress",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Networking/CDN/wordpress.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP caching",permalink:"/docs/Networking/CDN/mozilla"},next:{title:"10 GB Network at home",permalink:"/docs/Networking/10Gb/Gb-Network"}},o={},p=[{value:"References",id:"references",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(c,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wordpress"},"Wordpress"),(0,n.kt)("p",null,"Force CSS reload in WordPress every time when file is updated"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"$ver"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"check if actual file has changed, and if so ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"update it\u2019s version number.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"wp_enqueue_style(\n    'my_custom_style',\n    get_stylesheet_directory_uri() . '/sz_style.css',\n    array(),\n    filemtime( get_stylesheet_directory_uri() . '/sz_style.css')\n);\n")),(0,n.kt)("p",null,"This part:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"filemtime( get_stylesheet_directory_uri() . '/sz_style.css')\n")),(0,n.kt)("p",null,"will check when the script or stylesheet file you are adding was modified and fetch that time in Unix Timestamp format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<link rel='stylesheet' id='all-css-2-1' href='https://s0.wp.com/wp-content/themes/pub/baskerville-2/style.css?ver=1617209817' type='text/css' media='all' />\n")),(0,n.kt)("p",null,"In this example, ",(0,n.kt)("inlineCode",{parentName:"p"},"1617209817")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"Wed Mar 31 2021 16:56:57 GMT+0000")),(0,n.kt)("p",null,"So the version of the CSS or JavaScript file you enque will be equil to the time it was modified."),(0,n.kt)("p",null,"Depending on the wordpress version this usage may vary, for eample, it can have some extra parameters or name of vars:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<link rel='stylesheet' id='all-css-2-1' href='https://s0.wp.com/wp-content/themes/pub/baskerville-2/style.css?m=1626265455h&cssminify=yes' type='text/css' media='all' />\n")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sabrinazeidan.com/force-css-js-refresh-wordpress-development/"},"Force CSS and JS refresh in WordPress during development"))))}m.isMDXComponent=!0}}]);
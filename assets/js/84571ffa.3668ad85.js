"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[1167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,y=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const i={tags:["vm.dirty_ratio","vm.dirty_background_ratio"]},o="Disk Caching & Performance",s={unversionedId:"OS/GNU-Linux/disk-caching-and-performance",id:"OS/GNU-Linux/disk-caching-and-performance",title:"Disk Caching & Performance",description:"Get vm.dirtyratio & vm.dirtybackground_ratio",source:"@site/docs/OS/GNU-Linux/disk-caching-and-performance.md",sourceDirName:"OS/GNU-Linux",slug:"/OS/GNU-Linux/disk-caching-and-performance",permalink:"/docs/OS/GNU-Linux/disk-caching-and-performance",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/OS/GNU-Linux/disk-caching-and-performance.md",tags:[{label:"vm.dirty_ratio",permalink:"/docs/tags/vm-dirty-ratio"},{label:"vm.dirty_background_ratio",permalink:"/docs/tags/vm-dirty-background-ratio"}],version:"current",frontMatter:{tags:["vm.dirty_ratio","vm.dirty_background_ratio"]},sidebar:"tutorialSidebar",previous:{title:"Clean system",permalink:"/docs/OS/GNU-Linux/clean-system"},next:{title:"KVM/QEMU",permalink:"/docs/OS/GNU-Linux/kvm-qemu"}},c={},l=[{value:"Get vm.dirty_ratio &amp; vm.dirty_background_ratio",id:"get-vmdirty_ratio--vmdirty_background_ratio",level:2},{value:"Ansible",id:"ansible",level:2},{value:"Referenes",id:"referenes",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"disk-caching--performance"},"Disk Caching & Performance"),(0,a.kt)("h2",{id:"get-vmdirty_ratio--vmdirty_background_ratio"},"Get vm.dirty_ratio & vm.dirty_background_ratio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sysctl -a | grep dirty\n vm.dirty_background_ratio = 10\n vm.dirty_background_bytes = 0\n vm.dirty_ratio = 20\n vm.dirty_bytes = 0\n vm.dirty_writeback_centisecs = 500\n vm.dirty_expire_centisecs = 3000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"watch grep -A 1 dirty /proc/vmstat\nnr_dirty 2\nnr_writeback 0\n")),(0,a.kt)("p",null,"If these numbers are significantly higher you might be having a bigger problem on your system.  Though from what I have read this sometimes indicates sync\u2019ing.  If this becomes a problem on your server you can set system parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," to head this off by adding the following lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vm.dirty_background_ratio = 50\nvm.dirty_ratio = 80\n")),(0,a.kt)("p",null,"Then (as root) execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# sysctl -p\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.dirty_background_ratio")," tells at what ratio should the linux kernel start the background task of writing out dirty pages. The above increases this setting from the default 10% to 50%.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.dirty_ratio")," tells at what ratio all IO writes become synchronous, meaning that we cannot do IO calls without waiting for the underlying device to complete them (which is something you never want to happen)."),(0,a.kt)("p",null,"I did not add these to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl.conf")," file but thought it worth documenting."),(0,a.kt)("h2",{id:"ansible"},"Ansible"),(0,a.kt)("p",null,"Sample task"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Tune dirty sysctl\n  hosts: all\n  become: true\n\n  tasks:\n\n    sysctl:\n        name: "{{ item.key }}"\n        value: "{{ item.value }}"\n        state: present\n        reload: yes\n      with_items:\n        - { key: vm.swappiness, value: 1 }\n        - { key: vm.min_free_kbytes, value: 131072 }\n        - { key: vm.dirty_background_ratio, value: 1 } # https://www.vertica.com/kb/Tuning-Linux-Dirty-Data-Parameters-for-Vertica/Content/BestPractices/Tuning-Linux-Dirty-Data-Parameters-for-Vertica.htm#ForMoreInformation\n        - { key: vm.dirty_ratio, value: 3 } # https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/\n')),(0,a.kt)("h2",{id:"referenes"},"Referenes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://superuser.com/questions/1057007/adjust-linux-disk-flush-intervals-to-avoid-blocking-user-processes"},"2016: Adjust linux disk flush intervals to avoid blocking user processes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lonesysadmin.net/2013/12/22/better-linux-disk-caching-performance-vm-dirty_ratio/"},"2013:\nBetter Linux Disk Caching & Performance with vm.dirty_ratio & vm.dirty_background_ratio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linux.uits.uconn.edu/2013/08/06/flush-this-2/#"},"2013: Flush this"))))}d.isMDXComponent=!0}}]);
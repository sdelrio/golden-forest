"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7389],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(34334),l=n(12466),o=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=null!=s?s:d;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(72389),k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;n=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},52156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={},s="GIT",u={unversionedId:"Coding/CVS/git",id:"Coding/CVS/git",title:"GIT",description:"GIT is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).",source:"@site/docs/Coding/CVS/git.md",sourceDirName:"Coding/CVS",slug:"/Coding/CVS/git",permalink:"/docs/Coding/CVS/git",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/CVS/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gerrit",permalink:"/docs/Coding/CVS/gerrit"},next:{title:"Gitea",permalink:"/docs/Coding/CVS/gitea"}},c={},d=[{value:"Monorepo",id:"monorepo",level:2},{value:"Delete remote tag",id:"delete-remote-tag",level:2},{value:"Git Large File Storage",id:"git-large-file-storage",level:2},{value:"Setup",id:"setup",level:3},{value:"Add large file sample",id:"add-large-file-sample",level:3},{value:"Git terminal colors",id:"git-terminal-colors",level:2},{value:"Alias",id:"alias",level:2},{value:"Remove directory from cache",id:"remove-directory-from-cache",level:2},{value:"Commitizen",id:"commitizen",level:2},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:3},{value:"References",id:"references",level:3},{value:"pre-commit",id:"pre-commit",level:2},{value:"Install",id:"install-1",level:3},{value:"Configuration",id:"configuration",level:3},{value:"References",id:"references-1",level:3},{value:"Rolling back changes",id:"rolling-back-changes",level:2},{value:"Sample",id:"sample",level:3},{value:"Git blame",id:"git-blame",level:2},{value:"Git flows",id:"git-flows",level:2},{value:"Git Organized: A Better Git Flow",id:"git-organized-a-better-git-flow",level:3},{value:"Git for everything!",id:"git-for-everything",level:2},{value:"Progress List and Work-Plans",id:"progress-list-and-work-plans",level:3},{value:"Updating your website",id:"updating-your-website",level:3},{value:"Presentations",id:"presentations",level:3},{value:"Word and Excel documents",id:"word-and-excel-documents",level:3},{value:"Detect secrets in code",id:"detect-secrets-in-code",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"GIT"),(0,r.kt)("p",null,"GIT is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems)."),(0,r.kt)("p",null,"Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client\u2013server systems, every Git directory on every computer is a full-fledged repository with complet history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under the GPL-2.0-only license."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Homepage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Git"},"Wikipedia")," ")),(0,r.kt)("h2",{id:"monorepo"},"Monorepo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code"},"Speeding up a Git monorepo at Dropbox with"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dropbox.tech/infrastructure/continuous-integration-and-deployment-with-bazel"},"Beziel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dropbox.tech/infrastructure/athena-our-automated-build-health-management-system"},"Athena: Our automated build health management system"))))),(0,r.kt)("h2",{id:"delete-remote-tag"},"Delete remote tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push --delete origin tagName\ngit tag -d tagName\n")),(0,r.kt)("h2",{id:"git-large-file-storage"},"Git Large File Storage"),(0,r.kt)("p",null,"Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-lfs.github.com/"},"An open source it extension for versioning large files"))),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git lfs install\ngit lfs track "*.psd"\ngit add .gitattributes\n')),(0,r.kt)("h3",{id:"add-large-file-sample"},"Add large file sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add file.psd\ngit commit -m "Add design file"\ngit push origin main\n')),(0,r.kt)("h2",{id:"git-terminal-colors"},"Git terminal colors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.gitconfig"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'[color]\n    diff = always\n    ui = always\n    status = auto\n    branch = auto\n    interactive = auto\n    pager = true\n[color "status"]\n  added = green\n  changed = red bold\n  untracked = magenta bold\n\n[color "branch"]\n  remote = yellow\n')),(0,r.kt)("h2",{id:"alias"},"Alias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.gitconfig"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'[alias]\n    review = "!f() { git push -u ${1:-origin} HEAD:`git config branch.$(git name-rev --name-only HEAD).merge | sed -e \'s@refs/heads/@refs/for/@\'`; }; f"\n    unstage = reset --soft HEAD^\n    ls = log --pretty=format:"%C(yellow)%h%Cred%d\\\\ %Creset%s%Cblue\\\\ [%cn]" --decorate\n    ll = log --pretty=format:"%C(yellow)%h%Cred%d\\\\ %Creset%s%Cblue\\\\ [%cn]" --decorate --numstat\n    st = status -s\n    gl = clone\n    ci = commit\n    co = checkout\n    br = branch\n    dif = diff --word-diff\n    diff1 = diff HEAD^\n    diff2 = diff HEAD^^\n    dc = diff --cached\n    r = reset\n    r1 = reset HEAD^\n    r2 = reset HEAD^^\n    rh = reset --hard\n    rh1 = reset HEAD^ --hard\n    rh2 = reset HEAD^^ --hard\n')),(0,r.kt)("h2",{id:"remove-directory-from-cache"},"Remove directory from cache"),(0,r.kt)("p",null,"Remove directory from remote repository after adding them to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git rm -r --cached node_modules\ngit commit -m 'Remove the now ignored directory node_modules'\ngit push origin master\n")),(0,r.kt)("h2",{id:"commitizen"},"Commitizen"),(0,r.kt)("p",null,"Simple commit conventions for internet citizens."),(0,r.kt)("p",null,"When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit. No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields."),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g commitizen\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git add .\n$ git cz\n\nAll commit message lines will be cropped at 100 characters.\n? Select the type of change that you're commiting: (Use arrow keys)\n> feat:     A new feature\n  fix:      A bug fix\n  docs:     Documentaiton only changes\n  style:    Changes that do not aaffect the meaning of the code\n  refactor: A code change that neither fixes a bug or adds a feature\n  perf:     A code change that improves performance\n  test:     Adding missing tests\n  chore:    Changes to the build process or auxiliary tools and\n            libraires such as documetation generation\n")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-cli"},"Commitizen GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://commitizen.github.io/cz-cli/"},"Commitizen doc"))),(0,r.kt)("h2",{id:"pre-commit"},"pre-commit"),(0,r.kt)("p",null,"A framework for managing and maitining multi-language pre-commit hooks"),(0,r.kt)("h3",{id:"install-1"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pip",label:"pip",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\necho 'pre-commmit > requirements-dev.txt'\n"))),(0,r.kt)(l.Z,{value:"brew",label:"brew",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pre-commit\n")))),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create file ",(0,r.kt)("inlineCode",{parentName:"li"},".pre-commit-config.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n-   repo: https://github.com/pre-commit/pre-commit-hooks\n    rev: v2.3.0\n    hooks:\n    -   id: check-yaml\n    -   id: end-of-file-fixer\n    -   id: trailing-whitespace\n-   repo: https://github.com/psf/black\n    rev: 21.12b0\n    hooks:\n    -   id: black\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the git hoook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pre-commit install\n")),(0,r.kt)("h3",{id:"references-1"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"pre-commit homepage"))),(0,r.kt)("h2",{id:"rolling-back-changes"},"Rolling back changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git reset"),": Can't use when you have already commited the change. Is useful for wiping out uncommited change. Reset will unstage anytihng y'ave added in preparation to commit. But does nothing for anything thaat has been commited"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git revert"),": Create a commit with the reverse patch to cancel it out. This way you don\u2019t rewrite any history. But the original \u201cwhoops\u201d commit(s) and the patch are always going to be part of the version history.")),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"Check last commits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git log --oneline --all --graph --decorate\n* c78f1e0c (HEAD -> master, origin/master, origin/HEAD) k8s: linter tools\n* e3ba41b2 git: update content and adding tools\n* c90c2e85 CI: update db-migrations\n* 6b48bef0 CI: Update Jenkins & gitlab content\n* 6af4eea3 QA: update inspec content\n\n$ git revert c78f1e0c\n\n$ git log --oneline --all --graph --decorate\n* 3f67984 (HEAD -> master, origin/master, origin/HEAD) Revert "k8s: linter tools" will revert this commit c78f1e0c\n* e3ba41b2 git: update content and adding tools\n* c90c2e85 CI: update db-migrations\n* 6b48bef0 CI: Update Jenkins & gitlab content\n* 6af4eea3 QA: update inspec content\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/getting-legit-with-git-and-github-rolling-back-changes-with-revert-and-reset/"},"Getting Legit with Git and GitHub: Rolling Back Changes with Revert and Reset"))),(0,r.kt)("h2",{id:"git-blame"},"Git blame"),(0,r.kt)("p",null,"Don't blame people for changing whitespaces or moving code."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git blame")," will show the author of the last commit that modified the particular line. If whitespaces were removed or that piece of code was moved around, blame will show that commit and you might blame the wrong person."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git blame -w -M\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-w")," will ignore whitespaces "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-M")," will detect moved or copied lines.")),(0,r.kt)("h2",{id:"git-flows"},"Git flows"),(0,r.kt)("h3",{id:"git-organized-a-better-git-flow"},(0,r.kt)("a",{parentName:"h3",href:"https://render.com/blog/git-organized-a-better-git-flow"},"Git Organized: A Better Git Flow")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make your changes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git checkout -b my-feature-branch-name-doesnt-matter\n\n...make changes...\n\n$ git commit -m"WIP this message doesn\'t matter"\n\n...make more changes...\n\n$ git commit -m"WIP whatever"\n\n...make even more changes...\n\n$ git commit -m"WIP 12345"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Reset")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git reset origin/main\nUnstaged changes after reset:\nM       doc/Coding/CVS/git.md\nM       doc/Coding/CVS/gitea.md\nM       doc/Coding/CVS/gerrit.md\n\n$ git status\nOn branch feature-branch\nYour branch is behind \'origin/my-feature-branch-name-doesnt-matter\' by 3 commits, and can be fast-forwarded.\n  (use "git pull" to update your local branch)\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   doc/Coding/CVS/git.md\n        modified:   doc/Coding/CVS/gitea.md\n        modified:   doc/Coding/CVS/gerrit.md\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git reflog"),": To go back to a commit where things weren\u2019t broken, it will show you a timeline of every commit you\u2019ve referenced in your local repository, even across branches. Run git reflog to find the commit you want to return to and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"git reset <commit-sha>"),". This command will point the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," of your current branch to that commit."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create new, logically-grouped commits")),(0,r.kt)("p",null,"Look at all the files you\u2019ve changed. Try to group logically any changes related to a particular model and create a commit with the descsription."),(0,r.kt)("p",null,"If the same file contains multiple changes that should be grouped separately use ",(0,r.kt)("a",{parentName:"p",href:"https://nuclearsquid.com/writings/git-add/"},(0,r.kt)("inlineCode",{parentName:"a"},"git add --patch"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git add doc/Coding/CVS/git.md\n$ git commit -m"Add new section Git flows"\n\n$ git add docs/Coding/CVS/gitea.md\n$ git commit -m"Init section Gitea inside CVSU"\n\n$ git add docs/Coding/CVS/gerrit.md\n$ git commit -m"Fixed typo in references"\n')),(0,r.kt)("h2",{id:"git-for-everything"},"Git for everything!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Beyond Code Control: Git for Everything!]",")",(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/beyond-code-control-git-for-everything/"},"https://thenewstack.io/beyond-code-control-git-for-everything/"),")")),(0,r.kt)("h3",{id:"progress-list-and-work-plans"},"Progress List and Work-Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://projectmanagernews.com/news/what-happened-to-waffle-io/"},"Waffle.io"),": Looks at GitHub Issues and PR and uses them to create project management charts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zenhub.com/"},"ZenHub"),": Build a prroject management tool isnide GitHub itself that is operated by PR.")),(0,r.kt)("h3",{id:"updating-your-website"},"Updating your website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://projectmanagernews.com/news/what-happened-to-waffle-io/"},"Netifly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages")," + Static site like ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io"},"Docusuarus.io"))),(0,r.kt)("h3",{id:"presentations"},"Presentations"),(0,r.kt)("p",null,"Presentations browser-native and work almost anywhere."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://revealjs.com/http://revealjs.com/"},"Reveal.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://gitpitch.com.bitverzo.com/"},"GitPitch"))),(0,r.kt)("h3",{id:"word-and-excel-documents"},"Word and Excel documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.xltrail.com/"},"Xltrail"),": Keep track of the cell-by-cell commit history of an Excel spreadsheet that\u2019s stored in git, but it can\u2019t handle merges and pull requests itself. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.simuldocs.com/"},"Simul"),":  git-like experience via a plugin for Word docs. And using other Office suites like OpenOffice/LibreOffice, you can just save files natively as XML which lets git work its magic")),(0,r.kt)("h2",{id:"detect-secrets-in-code"},"Detect secrets in code"),(0,r.kt)("p",null,"An enterprise friendly way of detecting and preventing secrets in code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Yelp/detect-secrets"},"Yelp/detect-secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenewstack.io/why-securing-secrets-in-cloud-and-container-environments-is-important-and-how-to-do-it/"},"Why Securing Secrets in Cloud and Container Environments Is Important \u2013 and How to Do It"))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8886],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(3117),r=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6681),p=t(6010),c="tabItem_1uMI";function d(e){var n,t,a,o=e.lazy,l=e.block,d=e.defaultValue,u=e.values,m=e.groupId,h=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:y.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),b=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(f),P=w[0],j=w[1],T=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=b[m];null!=x&&x!==P&&v.some((function(e){return e.value===x}))&&j(x)}var E=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==P&&(C(n),j(a),null!=m&&N(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},h)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":P===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:E,onClick:E},null!=t?t:n)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function u(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},6486:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=t(6396),i=t(8215),s=["components"],p={},c="Python",d={unversionedId:"Coding/Python/python",id:"Coding/Python/python",title:"Python",description:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",source:"@site/docs/Coding/Python/python.md",sourceDirName:"Coding/Python",slug:"/Coding/Python/",permalink:"/docs/Coding/Python/",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/Python/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disable scroll on body",permalink:"/docs/Coding/Javascript/js-lock-scroll"},next:{title:"Compiling Python",permalink:"/docs/Coding/Python/python-compile"}},u=[{value:"History",id:"history",children:[],level:2},{value:"PyEnv",id:"pyenv",children:[{value:"Using <code>pyenv</code> to install a specific version of Python",id:"using-pyenv-to-install-a-specific-version-of-python",children:[{value:"Search versions",id:"search-versions",children:[],level:4},{value:"Install samples",id:"install-samples",children:[],level:4}],level:3},{value:"Install locations",id:"install-locations",children:[],level:3},{value:"Uninstall <code>pyenv</code> version",id:"uninstall-pyenv-version",children:[],level:3},{value:"Using your installed versions",id:"using-your-installed-versions",children:[],level:3},{value:"Global python version",id:"global-python-version",children:[],level:3},{value:"Local python version",id:"local-python-version",children:[],level:3},{value:"Virtual Env",id:"virtual-env",children:[{value:"Creating",id:"creating",children:[],level:4},{value:"Activating",id:"activating",children:[],level:4}],level:3}],level:2},{value:"Project Setup",id:"project-setup",children:[{value:"black &amp; flake8",id:"black--flake8",children:[{value:"<code>.flake8</code>",id:"flake8",children:[],level:4}],level:3},{value:"Pre-commit Hooks",id:"pre-commit-hooks",children:[{value:"<code>pre-commit-config.yaml</code>",id:"pre-commit-configyaml",children:[],level:4},{value:"Article",id:"article",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python"},"Python"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Python_%28programming_language%29"},"Python")," is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."),(0,o.kt)("p",null,'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.'),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language"),(0,o.kt)("li",{parentName:"ul"},"First released it in 1991 as Python 0.9.0."),(0,o.kt)("li",{parentName:"ul"},"Python 2.0 was released in 2000 and introduced new features, such as list comprehensions and a cycle-detecting garbage collection system (in addition to reference counting)."),(0,o.kt)("li",{parentName:"ul"},"Python 3.0 was released in 2008 and was a major revision of the language that is not completely backward-compatible."),(0,o.kt)("li",{parentName:"ul"},"Python 2 was discontinued with version 2.7.18 in 2020.")),(0,o.kt)("h2",{id:"pyenv"},"PyEnv"),(0,o.kt)("p",null,"Manage python versions with PyEnv"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv#installation"},"Install")," with brew, compiling or just a git clone. ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," works by building Python from source. "),(0,o.kt)("h3",{id:"using-pyenv-to-install-a-specific-version-of-python"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"pyenv")," to install a specific version of Python"),(0,o.kt)("h4",{id:"search-versions"},"Search versions"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"python",label:"CPython",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"To see all available ",(0,o.kt)("a",{parentName:"p",href:"https://realpython.com/cpython-source-code-guide/"},"CPython")," 3.8 through 3.10, you can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ pyenv install --list | grep " 3\\.\\([89]\\|10\\)"\n  3.8.0\n  3.8-dev\n  3.8.1\n  3.8.2\n  3.8.3\n  3.8.4\n  3.8.5\n  3.8.6\n  3.8.7\n  3.8.8\n  3.8.9\n  3.8.10\n  3.8.11\n  3.8.12\n  3.9.0\n  3.9-dev\n  3.9.1\n  3.9.2\n  3.9.4\n  3.9.5\n  3.9.6\n  3.9.7\n  3.10.0rc2\n  3.10-dev\n'))),(0,o.kt)(i.Z,{value:"jython",label:"Jython",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Python 2 deprecated in 2020")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ pyenv install --list | grep "jython"\n  jython-dev\n  jython-2.5.0\n  jython-2.5-dev\n  jython-2.5.1\n  jython-2.5.2\n  jython-2.5.3\n  jython-2.5.4-rc1\n  jython-2.7.0\n  jython-2.7.1\n  jython-2.7.2\n')))),(0,o.kt)("h4",{id:"install-samples"},"Install samples"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"python397",label:"Python 3.9.7",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 3.9.7\npython-build: use openssl@1.1 from homebrew\npython-build: use readline from homebrew\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\nDownloading Python-3.9.7.tar.xz...\n-> https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tar.xz\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561/Python-3.9.7 /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\nInstalling Python-3.9.7...\n(...)\nSuccessfully installed pip-21.2.3 setuptools-57.4.0\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\n~/github/golden-forest/docs/Coding\nInstalled Python-3.9.7 to /Users/sdelrio/.pyenv/versions/3.9.7\n"))),(0,o.kt)(i.Z,{value:"python372",label:"Python 3.7.2",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 3.7.2\n/tmp/python-build.20190208022403.30568 ~\nDownloading Python-3.7.2.tar.xz...\n-> https://www.python.org/ftp/python/3.7.2/Python-3.7.2.tar.xz\nInstalling Python-3.7.2...\n/tmp/python-build.20190208022403.30568/Python-3.7.2 /tmp/python-build.20190208022403.30568 ~\n[...]\nInstalling collected packages: setuptools, pip\nSuccessfully installed pip-18.1 setuptools-40.6.2\nInstalled Python-3.7.2 to /home/realpython/.pyenv/versions/3.7.2\n"))),(0,o.kt)(i.Z,{value:"python27",label:"Python 2.7.18",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Python 2 deprecated in 2020")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 2.7.18\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\nDownloading openssl-1.0.2q.tar.gz...\n-> https://www.openssl.org/source/old/1.0.2/openssl-1.0.2q.tar.gz\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129/openssl-1.0.2q /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\nInstalling openssl-1.0.2q...\nOperating system: i686-apple-darwinDarwin Kernel Version 20.5.0: Sat May 8 05:10:33 PDT 2021; root:xnu-7195.121.3~9/RELEASE_X86_64\nConfiguring for darwin64-x86_64-cc\n(...)\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\n~/github/golden-forest/docs/Coding\nInstalled Python-2.7.18 to /Users/sdelrio/.pyenv/versions/2.7.18\n")))),(0,o.kt)("h3",{id:"install-locations"},"Install locations"),(0,o.kt)("p",null,"Each version that you have installed is located nicely in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ls ~/.pyenv/versions\n2.7.18  3.6.8 3.8.10 3.9.10\n")),(0,o.kt)("h3",{id:"uninstall-pyenv-version"},"Uninstall ",(0,o.kt)("inlineCode",{parentName:"h3"},"pyenv")," version"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"uninstall",label:"pyenv uninstall",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv uninstall 2.7.18\n"))),(0,o.kt)(i.Z,{value:"rm",label:"manual rm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ rm -rf ~/.pyenv/versions/2.7.18\n")))),(0,o.kt)("h3",{id:"using-your-installed-versions"},"Using your installed versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check current versions, the ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," indicates current active version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv versions\n* system (set by /home/youruser/.pyenv/version)\n  2.7.18\n  3.8.10\n  3.9.10\n")),(0,o.kt)("h3",{id:"global-python-version"},"Global python version"),(0,o.kt)("p",null,"Not recommended to override system python, specially on macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv global 2.7.18\n\n$ pyenv versions\n  system (set by /home/youruser/.pyenv/version)\n* 2.7.18\n  3.8.10\n  3.9.10\n")),(0,o.kt)("h3",{id:"local-python-version"},"Local python version"),(0,o.kt)("p",null,"Application level version, recommended way."),(0,o.kt)("p",null,"You can create a ",(0,o.kt)("inlineCode",{parentName:"p"},".python-version")," into a folder to specify that version each time you enter in that path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv local 2.7.18\n\n$ pyenv versions\n  system (set by /home/youruser/.pyenv/version)\n* 2.7.18\n  3.8.10\n")),(0,o.kt)("h3",{id:"virtual-env"},"Virtual Env"),(0,o.kt)("h4",{id:"creating"},"Creating"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv <python_version> <environment_name>\n")),(0,o.kt)("h4",{id:"activating"},"Activating"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv 3.6.8 myproject\n$ pyenv local myproject\n")),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#poetry"},"Poetry")," for dependency management"),(0,o.kt)("li",{parentName:"ul"},"Make to leverage muscle memory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/"},"black")," for code formatting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy"},"mypy")," for type checking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#py-test"},"py.test")," for unit and e2e tests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"pre-commit")," hooks to run formatting and linting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://readthedocs.org/"},"ReadTheDocs")," for documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://calver.org/"},"CalVer")," for releases")),(0,o.kt)("h3",{id:"black--flake8"},"black & flake8"),(0,o.kt)("h4",{id:"flake8"},(0,o.kt)("inlineCode",{parentName:"h4"},".flake8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[flake8]\nignore=E501,E203\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ignore E501: black won't always ensure a max line length, e.g. it won't linebreak docstrings or comments"),(0,o.kt)("li",{parentName:"ul"},"ignore E203: black has problems formatting mylist","[len(prefix) :]")),(0,o.kt)("h3",{id:"pre-commit-hooks"},"Pre-commit Hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make sure that file endings are consistent (also important when working with Windows colleagues)"),(0,o.kt)("li",{parentName:"ul"},"strip unnecessary whitespace (avoids unnecessary git diffs)"),(0,o.kt)("li",{parentName:"ul"},"validate YAML/Dockerfile/... syntax"),(0,o.kt)("li",{parentName:"ul"},"validate Kubernetes manifests (easy to get some deployment spec wrong)"),(0,o.kt)("li",{parentName:"ul"},"format Python code with ",(0,o.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/"},"black")),(0,o.kt)("li",{parentName:"ul"},"lint Python code (",(0,o.kt)("a",{parentName:"li",href:"https://flake8.pycqa.org/"},"Flake8"),", ",(0,o.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy"},"mypy"),", ",(0,o.kt)("a",{parentName:"li",href:"https://bandit.readthedocs.io/"},"Bandit"),")")),(0,o.kt)("h4",{id:"pre-commit-configyaml"},(0,o.kt)("inlineCode",{parentName:"h4"},"pre-commit-config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'minimum_pre_commit_version: 1.21.0\nrepos:\n- repo: meta\n  hooks:\n  - id: check-hooks-apply\n  - id: check-useless-excludes\n\n# reorder Python imports\n- repo: https://github.com/asottile/reorder_python_imports\n  rev: v1.9.0\n  hooks:\n  - id: reorder-python-imports\n\n# format Python code with black\n- repo: https://github.com/ambv/black\n  rev: 19.10b0\n  hooks:\n  - id: black\n\n# check docstrings\n- repo: https://github.com/PyCQA/pydocstyle\n  rev: 5.0.2\n  hooks:\n  - id: pydocstyle\n    args: ["--ignore=D10,D21,D202"]\n\n# static type checking with mypy\n- repo: https://github.com/pre-commit/mirrors-mypy\n  rev: v0.761\n  hooks:\n  - id: mypy\n\n- repo: https://github.com/pre-commit/pre-commit-hooks\n  rev: v2.4.0\n  hooks:\n  - id: check-added-large-files\n  - id: check-docstring-first\n  - id: debug-statements\n  - id: end-of-file-fixer\n  - id: flake8\n    additional_dependencies: ["flake8-bugbear"]\n  - id: trailing-whitespace\n  - id: check-ast\n  - id: check-builtin-literals\n  - id: detect-private-key\n  - id: mixed-line-ending\n  - id: name-tests-test\n    args: ["--django"]\n')),(0,o.kt)("h4",{id:"article"},"Article"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html"},"2020: Python Project Setup"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://realpython.com/intro-to-pyenv/"},"Managing Multiple Python Versions With pyenv"))))}h.isMDXComponent=!0}}]);
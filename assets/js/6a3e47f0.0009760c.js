"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[8886],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),o=n(86010),r=n(12466),i=n(16550),s=n(91980),p=n(67392),c=n(50012);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=m({queryString:n,groupId:a}),[u,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??u;return h({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(u(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},r,{className:(0,o.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=y(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},l.createElement(k,(0,a.Z)({},e,t)),l.createElement(f,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return l.createElement(b,(0,a.Z)({key:String(t)},e))}},76486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),o=(n(61839),n(74866)),r=n(85162);const i={},s="Python",p={unversionedId:"Coding/Python/python",id:"Coding/Python/python",title:"Python",description:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",source:"@site/docs/Coding/Python/python.md",sourceDirName:"Coding/Python",slug:"/Coding/Python/",permalink:"/docs/Coding/Python/",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/Python/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disable scroll on body",permalink:"/docs/Coding/Javascript/js-lock-scroll"},next:{title:"Python Code Formater",permalink:"/docs/Coding/Python/python-code-formarter"}},c={},u=[{value:"History",id:"history",level:2},{value:"PyEnv",id:"pyenv",level:2},{value:"Using <code>pyenv</code> to install a specific version of Python",id:"using-pyenv-to-install-a-specific-version-of-python",level:3},{value:"Search versions",id:"search-versions",level:4},{value:"Install samples",id:"install-samples",level:4},{value:"Install locations",id:"install-locations",level:3},{value:"Uninstall <code>pyenv</code> version",id:"uninstall-pyenv-version",level:3},{value:"Using your installed versions",id:"using-your-installed-versions",level:3},{value:"Global python version",id:"global-python-version",level:3},{value:"Local python version",id:"local-python-version",level:3},{value:"Virtual Env",id:"virtual-env",level:3},{value:"Creating",id:"creating",level:4},{value:"Activating",id:"activating",level:4},{value:"Project Setup",id:"project-setup",level:2},{value:"black &amp; flake8",id:"black--flake8",level:3},{value:"<code>.flake8</code>",id:"flake8",level:4},{value:"Pre-commit Hooks",id:"pre-commit-hooks",level:3},{value:"<code>pre-commit-config.yaml</code>",id:"pre-commit-configyaml",level:4},{value:"Article",id:"article",level:4},{value:"References",id:"references",level:2}],d={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"python"},"Python"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Python_%28programming_language%29"},"Python")," is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."),(0,l.kt)("p",null,'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.'),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language"),(0,l.kt)("li",{parentName:"ul"},"First released it in 1991 as Python 0.9.0."),(0,l.kt)("li",{parentName:"ul"},"Python 2.0 was released in 2000 and introduced new features, such as list comprehensions and a cycle-detecting garbage collection system (in addition to reference counting)."),(0,l.kt)("li",{parentName:"ul"},"Python 3.0 was released in 2008 and was a major revision of the language that is not completely backward-compatible."),(0,l.kt)("li",{parentName:"ul"},"Python 2 was discontinued with version 2.7.18 in 2020.")),(0,l.kt)("h2",{id:"pyenv"},"PyEnv"),(0,l.kt)("p",null,"Manage python versions with PyEnv"),(0,l.kt)("p",null,"You can ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv#installation"},"Install")," with brew, compiling or just a git clone. ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," works by building Python from source. "),(0,l.kt)("h3",{id:"using-pyenv-to-install-a-specific-version-of-python"},"Using ",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv")," to install a specific version of Python"),(0,l.kt)("h4",{id:"search-versions"},"Search versions"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"python",label:"CPython",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"To see all available ",(0,l.kt)("a",{parentName:"p",href:"https://realpython.com/cpython-source-code-guide/"},"CPython")," 3.8 through 3.10, you can do this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ pyenv install --list | grep " 3\\.\\([89]\\|10\\)"\n  3.8.0\n  3.8-dev\n  3.8.1\n  3.8.2\n  3.8.3\n  3.8.4\n  3.8.5\n  3.8.6\n  3.8.7\n  3.8.8\n  3.8.9\n  3.8.10\n  3.8.11\n  3.8.12\n  3.9.0\n  3.9-dev\n  3.9.1\n  3.9.2\n  3.9.4\n  3.9.5\n  3.9.6\n  3.9.7\n  3.10.0rc2\n  3.10-dev\n'))),(0,l.kt)(r.Z,{value:"jython",label:"Jython",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Python 2 deprecated in 2020",type:"caution"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ pyenv install --list | grep "jython"\n  jython-dev\n  jython-2.5.0\n  jython-2.5-dev\n  jython-2.5.1\n  jython-2.5.2\n  jython-2.5.3\n  jython-2.5.4-rc1\n  jython-2.7.0\n  jython-2.7.1\n  jython-2.7.2\n')))),(0,l.kt)("h4",{id:"install-samples"},"Install samples"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"python397",label:"Python 3.9.7",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 3.9.7\npython-build: use openssl@1.1 from homebrew\npython-build: use readline from homebrew\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\nDownloading Python-3.9.7.tar.xz...\n-> https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tar.xz\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561/Python-3.9.7 /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\nInstalling Python-3.9.7...\n(...)\nSuccessfully installed pip-21.2.3 setuptools-57.4.0\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228211329.31561 ~/github/golden-forest/docs/Coding\n~/github/golden-forest/docs/Coding\nInstalled Python-3.9.7 to /Users/sdelrio/.pyenv/versions/3.9.7\n"))),(0,l.kt)(r.Z,{value:"python372",label:"Python 3.7.2",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 3.7.2\n/tmp/python-build.20190208022403.30568 ~\nDownloading Python-3.7.2.tar.xz...\n-> https://www.python.org/ftp/python/3.7.2/Python-3.7.2.tar.xz\nInstalling Python-3.7.2...\n/tmp/python-build.20190208022403.30568/Python-3.7.2 /tmp/python-build.20190208022403.30568 ~\n[...]\nInstalling collected packages: setuptools, pip\nSuccessfully installed pip-18.1 setuptools-40.6.2\nInstalled Python-3.7.2 to /home/realpython/.pyenv/versions/3.7.2\n"))),(0,l.kt)(r.Z,{value:"python27",label:"Python 2.7.18",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Python 2 deprecated in 2020",type:"caution"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install -v 2.7.18\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\nDownloading openssl-1.0.2q.tar.gz...\n-> https://www.openssl.org/source/old/1.0.2/openssl-1.0.2q.tar.gz\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129/openssl-1.0.2q /var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\nInstalling openssl-1.0.2q...\nOperating system: i686-apple-darwinDarwin Kernel Version 20.5.0: Sat May 8 05:10:33 PDT 2021; root:xnu-7195.121.3~9/RELEASE_X86_64\nConfiguring for darwin64-x86_64-cc\n(...)\n/var/folders/33/ms31kn2n7d5b4qbzrmnfngfc0000gn/T/python-build.20211228204134.2129 ~/github/golden-forest/docs/Coding\n~/github/golden-forest/docs/Coding\nInstalled Python-2.7.18 to /Users/sdelrio/.pyenv/versions/2.7.18\n")))),(0,l.kt)("h3",{id:"install-locations"},"Install locations"),(0,l.kt)("p",null,"Each version that you have installed is located nicely in your ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," root directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ls ~/.pyenv/versions\n2.7.18  3.6.8 3.8.10 3.9.10\n")),(0,l.kt)("h3",{id:"uninstall-pyenv-version"},"Uninstall ",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv")," version"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"uninstall",label:"pyenv uninstall",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv uninstall 2.7.18\n"))),(0,l.kt)(r.Z,{value:"rm",label:"manual rm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ rm -rf ~/.pyenv/versions/2.7.18\n")))),(0,l.kt)("h3",{id:"using-your-installed-versions"},"Using your installed versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check current versions, the ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," indicates current active version.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv versions\n* system (set by /home/youruser/.pyenv/version)\n  2.7.18\n  3.8.10\n  3.9.10\n")),(0,l.kt)("h3",{id:"global-python-version"},"Global python version"),(0,l.kt)("p",null,"Not recommended to override system python, specially on macOS."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv global 2.7.18\n\n$ pyenv versions\n  system (set by /home/youruser/.pyenv/version)\n* 2.7.18\n  3.8.10\n  3.9.10\n")),(0,l.kt)("h3",{id:"local-python-version"},"Local python version"),(0,l.kt)("p",null,"Application level version, recommended way."),(0,l.kt)("p",null,"You can create a ",(0,l.kt)("inlineCode",{parentName:"p"},".python-version")," into a folder to specify that version each time you enter in that path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv local 2.7.18\n\n$ pyenv versions\n  system (set by /home/youruser/.pyenv/version)\n* 2.7.18\n  3.8.10\n")),(0,l.kt)("h3",{id:"virtual-env"},"Virtual Env"),(0,l.kt)("h4",{id:"creating"},"Creating"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv <python_version> <environment_name>\n")),(0,l.kt)("h4",{id:"activating"},"Activating"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv 3.6.8 myproject\n$ pyenv local myproject\n")),(0,l.kt)("h2",{id:"project-setup"},"Project Setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#poetry"},"Poetry")," for dependency management"),(0,l.kt)("li",{parentName:"ul"},"Make to leverage muscle memory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/"},"black")," for code formatting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy"},"mypy")," for type checking"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#py-test"},"py.test")," for unit and e2e tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"pre-commit")," hooks to run formatting and linting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://readthedocs.org/"},"ReadTheDocs")," for documentation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://calver.org/"},"CalVer")," for releases")),(0,l.kt)("h3",{id:"black--flake8"},"black & flake8"),(0,l.kt)("h4",{id:"flake8"},(0,l.kt)("inlineCode",{parentName:"h4"},".flake8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[flake8]\nignore=E501,E203\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ignore E501: black won't always ensure a max line length, e.g. it won't linebreak docstrings or comments"),(0,l.kt)("li",{parentName:"ul"},"ignore E203: black has problems formatting mylist","[len(prefix) :]")),(0,l.kt)("h3",{id:"pre-commit-hooks"},"Pre-commit Hooks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"make sure that file endings are consistent (also important when working with Windows colleagues)"),(0,l.kt)("li",{parentName:"ul"},"strip unnecessary whitespace (avoids unnecessary git diffs)"),(0,l.kt)("li",{parentName:"ul"},"validate YAML/Dockerfile/... syntax"),(0,l.kt)("li",{parentName:"ul"},"validate Kubernetes manifests (easy to get some deployment spec wrong)"),(0,l.kt)("li",{parentName:"ul"},"format Python code with ",(0,l.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/"},"black")),(0,l.kt)("li",{parentName:"ul"},"lint Python code (",(0,l.kt)("a",{parentName:"li",href:"https://flake8.pycqa.org/"},"Flake8"),", ",(0,l.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html#mypy"},"mypy"),", ",(0,l.kt)("a",{parentName:"li",href:"https://bandit.readthedocs.io/"},"Bandit"),")")),(0,l.kt)("h4",{id:"pre-commit-configyaml"},(0,l.kt)("inlineCode",{parentName:"h4"},"pre-commit-config.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'minimum_pre_commit_version: 1.21.0\nrepos:\n- repo: meta\n  hooks:\n  - id: check-hooks-apply\n  - id: check-useless-excludes\n\n# reorder Python imports\n- repo: https://github.com/asottile/reorder_python_imports\n  rev: v1.9.0\n  hooks:\n  - id: reorder-python-imports\n\n# format Python code with black\n- repo: https://github.com/ambv/black\n  rev: 19.10b0\n  hooks:\n  - id: black\n\n# check docstrings\n- repo: https://github.com/PyCQA/pydocstyle\n  rev: 5.0.2\n  hooks:\n  - id: pydocstyle\n    args: ["--ignore=D10,D21,D202"]\n\n# static type checking with mypy\n- repo: https://github.com/pre-commit/mirrors-mypy\n  rev: v0.761\n  hooks:\n  - id: mypy\n\n- repo: https://github.com/pre-commit/pre-commit-hooks\n  rev: v2.4.0\n  hooks:\n  - id: check-added-large-files\n  - id: check-docstring-first\n  - id: debug-statements\n  - id: end-of-file-fixer\n  - id: flake8\n    additional_dependencies: ["flake8-bugbear"]\n  - id: trailing-whitespace\n  - id: check-ast\n  - id: check-builtin-literals\n  - id: detect-private-key\n  - id: mixed-line-ending\n  - id: name-tests-test\n    args: ["--django"]\n')),(0,l.kt)("h4",{id:"article"},"Article"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://srcco.de/posts/my-python-poetry-project-setup-calver-2020.html"},"2020: Python Project Setup"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/intro-to-pyenv/"},"Managing Multiple Python Versions With pyenv"))))}m.isMDXComponent=!0}}]);
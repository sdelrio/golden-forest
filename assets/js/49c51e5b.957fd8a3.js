"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[6941],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),y=o,d=m["".concat(p,".").concat(y)]||m[y]||c[y]||i;return n?r.createElement(d,a(a({ref:e},u),{},{components:n})):r.createElement(d,a({ref:e},u))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2871:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},p="Python Unit testing",s={unversionedId:"Coding/Python/python-unit-test",id:"Coding/Python/python-unit-test",title:"Python Unit testing",description:"Beyond Unit Tess",source:"@site/docs/Coding/Python/python-unit-test.md",sourceDirName:"Coding/Python",slug:"/Coding/Python/python-unit-test",permalink:"/docs/Coding/Python/python-unit-test",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Coding/Python/python-unit-test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python interesting libraries",permalink:"/docs/Coding/Python/python-libraries"},next:{title:"Testing Frameworks",permalink:"/docs/Coding/Testing/testing-frameworks"}},u=[{value:"Beyond Unit Tess",id:"beyond-unit-tess",children:[],level:2},{value:"Mocking",id:"mocking",children:[],level:2},{value:"Boilerplate",id:"boilerplate",children:[],level:2},{value:"References",id:"references",children:[],level:2}],c={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-unit-testing"},"Python Unit testing"),(0,i.kt)("h2",{id:"beyond-unit-tess"},"Beyond Unit Tess"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://hillelwayne.com/talks/beyond-unit-tests/"},"PyCon 2018: Beyond Unit Tests")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/deadpixi/contracts"},"GitHub dpcontracts"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dpcontracts")," Sample:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@require("l must not be empt "),\nlambda args: len(arg.1) >0)\ndef tail(l: List[Any]) -> List[Any]:\n\n  output = l[1:]\n  assert [l[0]] + output == l\n  return output\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@require("l must not be empt "),\n@ensure("result is tail of list",\nlambda a, r: [a.l[0]] + r == a.l)\nlambda args: len(arg.1) >0)\ndef tail(l: List[Any]) -> List[Any]:\n  return l[1:]\n')))),(0,i.kt)("h2",{id:"mocking"},"Mocking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/unittest.mock.html"},"python doc ",(0,i.kt)("inlineCode",{parentName:"a"},"unittest.mock"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.toptal.com/python/an-introduction-to-mocking-in-python"},"An introduction to mocking in python"))),(0,i.kt)("h2",{id:"boilerplate"},"Boilerplate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.python-boilerplate.com/py3+argparse+unittest"},"python 3 + argparse + unittest"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bogotobogo.com/python/python_private_attributes_methods.php"},"2018: ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.tutsplus.com/tutorials/write-professional-unit-tests-in-python--cms-25835"},"2016: Write Professional Unit Tests in Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ww1UsGZV8fQ"},"PyCon 2018: Demystifying the patch funcction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=pMgmKJyWKn8"},"PyCon 2018: Type-checked Python in the real world")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=G1lDk_WKXvY"},"PyCon 2018: Automatic Code Quality"))))}m.isMDXComponent=!0}}]);
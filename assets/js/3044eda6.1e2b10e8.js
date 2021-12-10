"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[7595],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={},l="Home Assistant",m={unversionedId:"Domotic/HomeAssistant/home-assistant",id:"Domotic/HomeAssistant/home-assistant",title:"Home Assistant",description:"Automations",source:"@site/docs/Domotic/HomeAssistant/home-assistant.md",sourceDirName:"Domotic/HomeAssistant",slug:"/Domotic/HomeAssistant/home-assistant",permalink:"/docs/Domotic/HomeAssistant/home-assistant",editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Domotic/HomeAssistant/home-assistant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker registry",permalink:"/docs/Containers/Docker/docker-registry"},next:{title:"CC2531",permalink:"/docs/Domotic/Zigbee/cc2531"}},u=[{value:"Automations",id:"automations",children:[],level:2},{value:"Amazon Smart Plugs",id:"amazon-smart-plugs",children:[],level:2},{value:"Change color temperature based on sun angle",id:"change-color-temperature-based-on-sun-angle",children:[],level:2},{value:"Prometheus and Grafana",id:"prometheus-and-grafana",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"home-assistant"},"Home Assistant"),(0,o.kt)("h2",{id:"automations"},"Automations"),(0,o.kt)("p",null,"Automations are created in Home Assistant via the UI, but are stored in a YAML format. If you want to edit the YAML of an automation, go to edit the automation, click on the menu button in the top right and turn on YAML mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/docs/automation/yaml/"},"https://www.home-assistant.io/docs/automation/yaml/"))),(0,o.kt)("h2",{id:"amazon-smart-plugs"},"Amazon Smart Plugs"),(0,o.kt)("p",null,"There is no directo control, but can make a forwarder through alexa."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'input_boolean:\n  alexa_fwd_charger:\n    name: "Charger"\n\nbinary_sensor:\n  - platform: template\n    sensors:\n      - alexa_fwd_charger:\n          friendly_name: "FWD-TRG-Device Charger"\n          device_class: garage_door\n          value_template: "{{ is_state(\'input_boolean.alexa_fwd_dev_charger\', \'on\') }}"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://community.home-assistant.io/t/amazon-smart-plugs/80994/18"},"https://community.home-assistant.io/t/amazon-smart-plugs/80994/18"))),(0,o.kt)("h2",{id:"change-color-temperature-based-on-sun-angle"},"Change color temperature based on sun angle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - condition: numeric_state\n    entity_id: sun.sun\n    value_template: "{{ state.attributes.elevation }}"\n    below: 9.5\n    above: -30.0\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://community.home-assistant.io/t/trying-to-change-color-temp-based-on-sun-angle-or-time/74774"},"https://community.home-assistant.io/t/trying-to-change-color-temp-based-on-sun-angle-or-time/74774"))),(0,o.kt)("h2",{id:"prometheus-and-grafana"},"Prometheus and Grafana"),(0,o.kt)("p",null,"You have to install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/prometheus/"},"prometheus-exporter")," and then gather metrics with the prometheus server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.technicallywizardry.com/home-assistant-prometheus-charts-grafana/"},"https://www.technicallywizardry.com/home-assistant-prometheus-charts-grafana/"))))}p.isMDXComponent=!0}}]);
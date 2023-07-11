"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4698],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(83117),a=(t(67294),t(3905));const i={},o="Zigbee2MQTT",s={unversionedId:"Domotic/Zigbee/zigbee2mqtt",id:"Domotic/Zigbee/zigbee2mqtt",title:"Zigbee2MQTT",description:"Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint.",source:"@site/docs/Domotic/Zigbee/zigbee2mqtt.md",sourceDirName:"Domotic/Zigbee",slug:"/Domotic/Zigbee/zigbee2mqtt",permalink:"/docs/Domotic/Zigbee/zigbee2mqtt",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Domotic/Zigbee/zigbee2mqtt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Air Quality Sensor",permalink:"/docs/Domotic/Zigbee/zigbee-air-quality"},next:{title:"CPU Coolers",permalink:"/docs/Hardware/CPU/coolers"}},l={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Helm",id:"helm",level:3},{value:"Install on Hassio",id:"install-on-hassio",level:2},{value:"References",id:"references",level:2}],c=(d="IconExternalLink",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zigbee2mqtt"},"Zigbee2MQTT"),(0,a.kt)("p",null,"Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint."),(0,a.kt)("p",null,"It allows you to use Zigbee devices ",(0,a.kt)("strong",{parentName:"p"},"without")," the vendors bridge or gateway. "),(0,a.kt)("p",null,"It bridges events and allows you to control your Zigbee devices via MQTT. In this way you can integrate your\nZigbee devices with whatever smart home infrastructure you are using."),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("h3",{id:"helm"},"Helm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chart: ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s-at-home/zigbee2mqtt")),(0,a.kt)("li",{parentName:"ul"},"sample ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yml"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  repository: koenkk/zigbee2mqtt\n  tag: 1.17.1\nenv:\n  TZ: Etc/UTC\n  ZIGBEE2MQTT_DATA: /data\nconfig:\n  homeassistant: true\n  device_options:\n    retain: true\n  # will use Permit join button on UI when needed\n  permit_join: false\n  mqtt:\n    base_topic: zigbee2mqtt\n    server: "mqtt://vernemq"\n    user: {{ .Values.vernemq_user }}\n    password: {{ .Values.vernemq_password }}\n  serial:\n    port: /dev/ttyACM0\n    disable_led: true\n  ota:\n    disable_automatic_update_check: true\n    update_check_interval: 86400\n  advanced:\n    ikea_ota_use_test_url: true\n    log_output:\n    - console\n    network_key:\n    - {{ .Values.zigbee_net_key_1 }}\n    - {{ .Values.zigbee_net_key_2 }}\n    - {{ .Values.zigbee_net_key_3 }}\n    - {{ .Values.zigbee_net_key_4 }}\n    - {{ .Values.zigbee_net_key_5 }}\n    - {{ .Values.zigbee_net_key_6 }}\n    - {{ .Values.zigbee_net_key_7 }}\n    - {{ .Values.zigbee_net_key_8 }}\n    - {{ .Values.zigbee_net_key_9 }}\n    - {{ .Values.zigbee_net_key_10 }}\n    - {{ .Values.zigbee_net_key_11 }}\n    - {{ .Values.zigbee_net_key_12 }}\n    - {{ .Values.zigbee_net_key_13 }}\n    - {{ .Values.zigbee_net_key_14 }}\n    - {{ .Values.zigbee_net_key_15 }}\n    - {{ .Values.zigbee_net_key_16 }}\n  frontend:\n    port: 8080\n  experimental:\n    new_api: true\nsecurityContext:\n  privileged: true\ningress:\n  enabled: true\n  annotations:\n# internal nginxclass = nginx\n    kubernetes.io/ingress.class: nginx\n  hosts:\n  - host: "zigbee2mqtt.internal.{{ .Values.dns_domain_1 }}"\n    paths:\n    - path: /\n      pathType: Prefix\n  tls:\n  - hosts:\n    - "zigbee2mqtt.internal.{{ .Values.dns_domain_1 }}"\npersistence:\n  data:\n    enabled: true\n    mountPath: /data\n    storageClass: "longhorn-r2"\n    accessMode: ReadWriteOnce\n    size: "1Gi"\npodAnnotations:\n  backup.velero.io/backup-volumes: data\nadditionalVolumeMounts:\n- name: usb\n  mountPath: /dev/ttyACM0\nadditionalVolumes:\n- name: usb\n  hostPath:\n    path: /dev/ttyACM0\naffinity:\n  nodeAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution:\n      nodeSelectorTerms:\n      - matchExpressions:\n        - {key: "feature.node.kubernetes.io/custom-ti-cc2531", operator: In, values: ["true"]}\naddons:\n  codeserver:\n    enabled: false\n    image:\n      repository: codercom/code-server\n      tag: 3.9.0\n    workingDir: "/data"\n    args:\n    - --user-data-dir\n    - "/data/.vscode"\n    - --auth\n    - "none"\n    ingress:\n      enabled: true\n      annotations:\n# internal nginxclass = nginx\n        kubernetes.io/ingress.class: nginx-internal\n      hosts:\n      - host: zigbee2mqtt-config.internal.{{ .Values.dns_domain_1 }}\n        paths:\n        - path: /\n          pathType: Prefix\n      tls:\n      - hosts:\n        - zigbee2mqtt-config.internal.{{ .Values.dns_domain_1 }}\n    volumeMounts:\n    - name: data\n      mountPath: /data\n')),(0,a.kt)("h2",{id:"install-on-hassio"},"Install on Hassio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://domoticaencasa.es/tutorial-instalar-zigbee2mqtt-hassio"},"Install zigbee2qtt on Hassio"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zigbee2mqtt.io/getting_started/running_zigbee2mqtt.html%3E*"},"Homepage",(0,a.kt)(c,{mdxType:"IconExternalLink"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Koenkk/zigbee2mqtt"},"GitHub",(0,a.kt)(c,{mdxType:"IconExternalLink"})))))}p.isMDXComponent=!0}}]);
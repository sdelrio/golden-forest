!function(){"use strict";var e,a,f,c,b,d={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=d,n.c=t,e=[],n.O=function(a,f,c,b){if(!f){var d=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],b=e[u][2];for(var t=!0,r=0;r<f.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,b<d&&(d=b));if(t){e.splice(u--,1);var o=c();void 0!==o&&(a=o)}}return a}b=b||0;for(var u=e.length;u>0&&e[u-1][2]>b;u--)e[u]=e[u-1];e[u]=[f,c,b]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){d[a]=function(){return e[a]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",62:"4f8a6ee0",115:"30a0e7dd",130:"b3086f15",229:"52e87856",318:"06af963a",330:"b5bebff9",343:"f5f55895",345:"087dc57e",382:"b95dcefa",383:"043b8994",463:"346a2179",464:"7fa1eea3",533:"b2b675dd",536:"4d00a314",654:"deb044bf",656:"79d65331",667:"65daa11e",713:"b5fae9ec",757:"5a913645",797:"fb8ba6c1",878:"bb65b79e",1078:"6b31c592",1081:"eb6e74b1",1167:"84571ffa",1273:"56c17765",1327:"3cb4dfae",1335:"5b6c37b1",1342:"a766a857",1348:"afc6003b",1367:"ed7554c5",1447:"88cc5920",1458:"917b54e2",1477:"b2f554cd",1511:"4ed4c83e",1517:"e82bb226",1591:"3fc66451",1672:"9f9ea2bf",1713:"a7023ddc",1773:"4a1120f8",1846:"eb0e3e00",1879:"6c5a7960",1907:"c2e354b8",1936:"4cd78861",2029:"e8865113",2057:"f89c53fe",2066:"e6056b41",2067:"e520250c",2071:"b5941307",2078:"2f7c4c7b",2131:"4b400e15",2155:"6ab50573",2174:"f5a5ab90",2193:"9b5f1b6c",2267:"db1ac494",2300:"63dfdf37",2314:"9dd4d928",2333:"04069acd",2360:"7279ae4b",2362:"c02fb013",2415:"452c29ed",2466:"4aee4b78",2535:"814f3328",2593:"494084f8",2595:"eaab9702",2654:"6d794213",2715:"a9204e06",2786:"1d00150d",2890:"76055cf2",2911:"3e393ada",2924:"b88c6181",3042:"5a2b7b63",3067:"f7f19b65",3085:"1f391b9e",3089:"a6aa9e1f",3127:"c15eed1e",3196:"892a1356",3205:"a80da1cf",3289:"991c942d",3332:"c16ec350",3360:"75f61abe",3382:"46ec9e07",3470:"97b83a15",3471:"26223297",3485:"a7dd8dbb",3492:"d1ea2d8b",3509:"4390ceb7",3608:"9e4087bc",3649:"84d31579",3653:"77b2e1a7",3708:"6d7afbd6",3710:"f9156c7b",3745:"2832f267",3751:"3720c009",3783:"208c22c0",3784:"c9ff47e1",3792:"d9006975",3831:"4f064c83",3912:"43a422f1",3920:"250d3b4a",3963:"b2088eb5",4013:"01a85c17",4018:"fed656c0",4028:"a0fba3c2",4116:"04baadca",4121:"55960ee5",4195:"c4f5d8e4",4225:"9d3f23f2",4233:"fd9afb94",4334:"c9dbff67",4339:"12aac010",4379:"3aa48778",4403:"82a46292",4438:"d9f85838",4462:"f76ca8ab",4497:"7e7aadab",4506:"1d6634ae",4555:"bedfd095",4673:"9b0c61df",4698:"989bdc99",4808:"76cebc19",4834:"33ec49f6",4903:"406fac10",4912:"22e56e97",4985:"44a322b5",5006:"0f8fcaf2",5110:"64b6c74f",5116:"dfe6a2c3",5239:"46322ecc",5278:"2a0f68af",5394:"8e5e0c37",5396:"d5f6f989",5509:"61dd07e5",5608:"af821dc0",5609:"beca213d",5656:"fdc1419b",5700:"fa653f8e",5738:"981e9d10",5740:"83d2c30f",5821:"56fad095",5822:"54bee2cb",5824:"9c34e19a",5981:"b35944e1",6025:"8cca1a0d",6059:"eb5542d6",6098:"b3f5327d",6103:"ccc49370",6122:"33debf20",6129:"b15d1034",6135:"7bf4a76e",6167:"12224ae3",6216:"a3ca461d",6225:"c0b1a2d5",6232:"5be2a219",6242:"2d527397",6288:"4c404fb8",6297:"cee1161a",6310:"4d361fbb",6339:"fdc7b2b4",6367:"e261f76c",6416:"e14c8eac",6512:"8d1a49ca",6558:"60a79b04",6711:"ecf98249",6748:"a59fbbe9",6760:"e46d5eb7",6838:"16b2b8e8",6931:"902a9c80",6941:"49c51e5b",6962:"87f48f25",6971:"5cec6303",6974:"232c92ba",6987:"b4c8f8a6",7095:"88c5f615",7130:"ba22154c",7131:"1bc81252",7221:"9ff5d104",7370:"092a4fd1",7389:"46a36444",7406:"c62ef0a8",7414:"393be207",7430:"1ba1276a",7557:"f3e09045",7590:"869bf668",7595:"3044eda6",7600:"4cdaffcc",7612:"0f797f91",7748:"913bdcf8",7765:"91a85011",7799:"fdeefd99",7865:"649a0995",7902:"27e5d8f3",7918:"17896441",8081:"e18b7efc",8154:"dc632cb1",8167:"4efdac7f",8188:"4201c9c5",8192:"568b5a77",8221:"6af14956",8311:"f64d0561",8344:"223417d2",8372:"46bd69a6",8610:"6875c492",8803:"c0d83213",8830:"8e76a1dd",8859:"de6a4070",8886:"6a3e47f0",8914:"04bad446",9083:"ab3b0464",9119:"a1604df1",9120:"10aa317e",9157:"880ffed0",9248:"1ba6178a",9287:"6d453d64",9306:"2f469fde",9312:"55a39e66",9328:"ef8e388b",9329:"1726abb7",9342:"b96e0fb7",9381:"7a4340ad",9456:"14ee4706",9514:"1be78505",9700:"e16015ca",9735:"c3d8a789",9737:"d2997049",9817:"14eb3368",9924:"df203c0f",9940:"4e7737f7",9972:"d195b298"}[e]||e)+"."+{53:"b06cdb88",62:"32702122",115:"ea9c93a5",130:"a650c7ec",229:"77cb0661",318:"cbce1bae",330:"8cc5df56",343:"0d9878f1",345:"7addc605",382:"f36d84a0",383:"f84fed02",463:"c6310f8b",464:"11e67309",533:"a4e2956e",536:"4795ccfc",654:"d3a0d979",656:"942d341b",667:"320e1a48",713:"a4957d4f",757:"de37d81e",797:"2927a714",878:"b77e7fb5",1078:"9591aa5c",1081:"a102c956",1167:"9144719d",1273:"53447e07",1327:"7a87ea72",1335:"4c27b37e",1342:"9d703293",1348:"2837e291",1367:"e26ab4a7",1447:"cd95c9fe",1458:"517fde90",1477:"29bcc9ee",1511:"129880d9",1517:"0b7a7ed0",1591:"d98e6e1f",1672:"d36a781f",1713:"ac405067",1773:"ab159e0c",1846:"635f68fa",1879:"0f4317f5",1907:"8a8a825d",1936:"a975e3ce",2029:"7f68e826",2057:"0e558b61",2066:"7e74c974",2067:"306fccfb",2071:"068da6f4",2078:"232d6455",2131:"09b47a15",2155:"c4e00f36",2174:"97c2cdaa",2193:"a631789d",2267:"3a24d467",2300:"0b48c602",2314:"e284e7a8",2333:"89ee7854",2360:"b560d30a",2362:"fd87e35b",2415:"510035ae",2466:"f3617209",2535:"7e411a5c",2593:"f7167683",2595:"cf759485",2654:"b1f08468",2715:"0d0b94b1",2786:"c39b565c",2890:"cdfc7f31",2911:"b97410ea",2924:"663ed0ae",3042:"39c76423",3067:"5a6ee784",3085:"5d22d23b",3089:"f6443f1c",3127:"eeb0a9a7",3196:"bb8ed987",3205:"b233375a",3289:"65ea9f2c",3332:"e2a8e898",3360:"2aa12dae",3382:"a411cfda",3470:"cf418bae",3471:"5fcd1ae6",3485:"12e3f51b",3492:"a9a6d6fb",3509:"2222220b",3608:"49a85d90",3649:"0ebc78ab",3653:"aa6dea4c",3708:"071a0bce",3710:"7e2aada4",3745:"8185cf8c",3751:"7d6a555b",3783:"9fc33ea4",3784:"96c8eb1c",3792:"fe9e6004",3829:"3f296088",3831:"6f2d78c3",3912:"38f33627",3920:"75b20cdd",3963:"1aa09bd4",4013:"8fdc286b",4018:"66a33f10",4028:"6e8ed776",4116:"0bca5399",4121:"9f53384d",4195:"8213754b",4225:"5e2e0db7",4233:"ce809705",4334:"d26e2f05",4339:"8910eff7",4379:"965e3e5f",4403:"d060ae85",4438:"62da044c",4462:"2aed1707",4497:"704a5d09",4506:"91e54bb0",4555:"67b81e15",4608:"06f038d8",4673:"552a0437",4698:"a6b5612b",4808:"dc9b0d47",4834:"a676e933",4903:"353beb70",4912:"a9604e18",4985:"9d6cb0bf",5006:"ad7ae293",5110:"54961053",5116:"241a5744",5239:"540212f8",5278:"3088ce86",5394:"54229d23",5396:"94b93e97",5509:"ac87caf5",5608:"f3a8b3bf",5609:"0d321cd5",5656:"88dbfcba",5700:"9d808658",5738:"caa468ef",5740:"9a660336",5821:"204bc99a",5822:"aeed7074",5824:"d53aa0d1",5981:"cdcbe120",6025:"caa0b321",6059:"ad297e2c",6098:"9a9ad843",6103:"28b1a744",6122:"6eada4d6",6129:"ee92c4fe",6135:"579b5263",6167:"1b6d40c5",6216:"4ea59982",6225:"4b6f30e5",6232:"07e14baa",6242:"552f9fb1",6288:"4c8b0333",6297:"ee83dc29",6310:"b7409ea3",6339:"e0df69c1",6367:"93e33cd3",6416:"619083c4",6512:"78fac49b",6558:"fabc6b2e",6711:"fc2a02cf",6748:"2f84ad85",6760:"7160c8eb",6838:"d20dfe03",6931:"0d49e774",6941:"f9aa5906",6962:"21957591",6971:"d5d076e1",6974:"7e770b79",6987:"0cb96d88",7095:"8df47312",7130:"1fa336f7",7131:"deb3ae44",7221:"e42396cf",7370:"985cb60c",7389:"aac76a3f",7406:"a852145b",7414:"c4f38f8c",7430:"468fc1b9",7557:"787ad7b4",7590:"c60ac2d4",7595:"7788974d",7600:"3364de08",7612:"a72131a5",7748:"dc971424",7765:"c8107697",7799:"91d09fe2",7865:"9b46ba45",7902:"dd3d15b8",7918:"f476da0a",8081:"d51cc295",8154:"6b88e9df",8167:"f1a521d3",8188:"dcf9f458",8192:"e7c56358",8221:"ec009a36",8311:"b2f74ad2",8344:"32dcbbdf",8372:"098a865e",8610:"7b26e643",8803:"0a2d78dc",8830:"83ec7069",8859:"eb8ffc1b",8886:"176e94a7",8914:"c49cd04e",9083:"1f188fe1",9119:"856884a6",9120:"11a7fdde",9157:"1387f174",9248:"db218ffb",9287:"b011c336",9306:"88b34df9",9312:"b32b2518",9328:"acb222df",9329:"e598bf20",9342:"d3113011",9381:"92cb3b99",9456:"dc1bb35a",9514:"9467b0fc",9700:"7e9725ed",9735:"8ca6663d",9737:"303a5c32",9817:"ae2ec678",9924:"b2b70ac7",9940:"fcfe8148",9972:"c2400671"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.3abcee9f.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},b="golden-forest-website:",n.l=function(e,a,f,d){if(c[e])c[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+f),t.src=e),c[e]=[a];var s=function(a,f){t.onerror=t.onload=null,clearTimeout(l);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",26223297:"3471","935f2afb":"53","4f8a6ee0":"62","30a0e7dd":"115",b3086f15:"130","52e87856":"229","06af963a":"318",b5bebff9:"330",f5f55895:"343","087dc57e":"345",b95dcefa:"382","043b8994":"383","346a2179":"463","7fa1eea3":"464",b2b675dd:"533","4d00a314":"536",deb044bf:"654","79d65331":"656","65daa11e":"667",b5fae9ec:"713","5a913645":"757",fb8ba6c1:"797",bb65b79e:"878","6b31c592":"1078",eb6e74b1:"1081","84571ffa":"1167","56c17765":"1273","3cb4dfae":"1327","5b6c37b1":"1335",a766a857:"1342",afc6003b:"1348",ed7554c5:"1367","88cc5920":"1447","917b54e2":"1458",b2f554cd:"1477","4ed4c83e":"1511",e82bb226:"1517","3fc66451":"1591","9f9ea2bf":"1672",a7023ddc:"1713","4a1120f8":"1773",eb0e3e00:"1846","6c5a7960":"1879",c2e354b8:"1907","4cd78861":"1936",e8865113:"2029",f89c53fe:"2057",e6056b41:"2066",e520250c:"2067",b5941307:"2071","2f7c4c7b":"2078","4b400e15":"2131","6ab50573":"2155",f5a5ab90:"2174","9b5f1b6c":"2193",db1ac494:"2267","63dfdf37":"2300","9dd4d928":"2314","04069acd":"2333","7279ae4b":"2360",c02fb013:"2362","452c29ed":"2415","4aee4b78":"2466","814f3328":"2535","494084f8":"2593",eaab9702:"2595","6d794213":"2654",a9204e06:"2715","1d00150d":"2786","76055cf2":"2890","3e393ada":"2911",b88c6181:"2924","5a2b7b63":"3042",f7f19b65:"3067","1f391b9e":"3085",a6aa9e1f:"3089",c15eed1e:"3127","892a1356":"3196",a80da1cf:"3205","991c942d":"3289",c16ec350:"3332","75f61abe":"3360","46ec9e07":"3382","97b83a15":"3470",a7dd8dbb:"3485",d1ea2d8b:"3492","4390ceb7":"3509","9e4087bc":"3608","84d31579":"3649","77b2e1a7":"3653","6d7afbd6":"3708",f9156c7b:"3710","2832f267":"3745","3720c009":"3751","208c22c0":"3783",c9ff47e1:"3784",d9006975:"3792","4f064c83":"3831","43a422f1":"3912","250d3b4a":"3920",b2088eb5:"3963","01a85c17":"4013",fed656c0:"4018",a0fba3c2:"4028","04baadca":"4116","55960ee5":"4121",c4f5d8e4:"4195","9d3f23f2":"4225",fd9afb94:"4233",c9dbff67:"4334","12aac010":"4339","3aa48778":"4379","82a46292":"4403",d9f85838:"4438",f76ca8ab:"4462","7e7aadab":"4497","1d6634ae":"4506",bedfd095:"4555","9b0c61df":"4673","989bdc99":"4698","76cebc19":"4808","33ec49f6":"4834","406fac10":"4903","22e56e97":"4912","44a322b5":"4985","0f8fcaf2":"5006","64b6c74f":"5110",dfe6a2c3:"5116","46322ecc":"5239","2a0f68af":"5278","8e5e0c37":"5394",d5f6f989:"5396","61dd07e5":"5509",af821dc0:"5608",beca213d:"5609",fdc1419b:"5656",fa653f8e:"5700","981e9d10":"5738","83d2c30f":"5740","56fad095":"5821","54bee2cb":"5822","9c34e19a":"5824",b35944e1:"5981","8cca1a0d":"6025",eb5542d6:"6059",b3f5327d:"6098",ccc49370:"6103","33debf20":"6122",b15d1034:"6129","7bf4a76e":"6135","12224ae3":"6167",a3ca461d:"6216",c0b1a2d5:"6225","5be2a219":"6232","2d527397":"6242","4c404fb8":"6288",cee1161a:"6297","4d361fbb":"6310",fdc7b2b4:"6339",e261f76c:"6367",e14c8eac:"6416","8d1a49ca":"6512","60a79b04":"6558",ecf98249:"6711",a59fbbe9:"6748",e46d5eb7:"6760","16b2b8e8":"6838","902a9c80":"6931","49c51e5b":"6941","87f48f25":"6962","5cec6303":"6971","232c92ba":"6974",b4c8f8a6:"6987","88c5f615":"7095",ba22154c:"7130","1bc81252":"7131","9ff5d104":"7221","092a4fd1":"7370","46a36444":"7389",c62ef0a8:"7406","393be207":"7414","1ba1276a":"7430",f3e09045:"7557","869bf668":"7590","3044eda6":"7595","4cdaffcc":"7600","0f797f91":"7612","913bdcf8":"7748","91a85011":"7765",fdeefd99:"7799","649a0995":"7865","27e5d8f3":"7902",e18b7efc:"8081",dc632cb1:"8154","4efdac7f":"8167","4201c9c5":"8188","568b5a77":"8192","6af14956":"8221",f64d0561:"8311","223417d2":"8344","46bd69a6":"8372","6875c492":"8610",c0d83213:"8803","8e76a1dd":"8830",de6a4070:"8859","6a3e47f0":"8886","04bad446":"8914",ab3b0464:"9083",a1604df1:"9119","10aa317e":"9120","880ffed0":"9157","1ba6178a":"9248","6d453d64":"9287","2f469fde":"9306","55a39e66":"9312",ef8e388b:"9328","1726abb7":"9329",b96e0fb7:"9342","7a4340ad":"9381","14ee4706":"9456","1be78505":"9514",e16015ca:"9700",c3d8a789:"9735",d2997049:"9737","14eb3368":"9817",df203c0f:"9924","4e7737f7":"9940",d195b298:"9972"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise((function(f,b){c=e[a]=[f,b]}));f.push(c[2]=b);var d=n.p+n.u(a),t=new Error;n.l(d,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,b,d=f[0],t=f[1],r=f[2],o=0;if(d.some((function(a){return 0!==e[a]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(a&&a(f);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[d[o]]=0;return n.O(u)},f=self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();
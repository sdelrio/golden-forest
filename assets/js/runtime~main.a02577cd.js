!function(){"use strict";var e,c,a,f,d,b={},t={};function n(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=b,n.c=t,e=[],n.O=function(c,a,f,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],f=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=f();void 0!==o&&(c=o)}}return c}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,f,d]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};c=c||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~c.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,c){for(var a in c)n.o(c,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,a){return n.f[a](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",115:"30a0e7dd",318:"06af963a",343:"f5f55895",382:"b95dcefa",383:"043b8994",463:"346a2179",533:"b2b675dd",536:"4d00a314",667:"65daa11e",713:"b5fae9ec",878:"bb65b79e",1078:"6b31c592",1081:"eb6e74b1",1167:"84571ffa",1273:"56c17765",1327:"3cb4dfae",1335:"5b6c37b1",1342:"a766a857",1348:"afc6003b",1367:"ed7554c5",1458:"917b54e2",1477:"b2f554cd",1511:"4ed4c83e",1517:"e82bb226",1713:"a7023ddc",1936:"4cd78861",2057:"f89c53fe",2067:"e520250c",2078:"2f7c4c7b",2131:"4b400e15",2155:"6ab50573",2174:"f5a5ab90",2193:"9b5f1b6c",2300:"63dfdf37",2314:"9dd4d928",2333:"04069acd",2362:"c02fb013",2415:"452c29ed",2466:"4aee4b78",2535:"814f3328",2593:"494084f8",2595:"eaab9702",2654:"6d794213",2715:"a9204e06",2786:"1d00150d",2890:"76055cf2",2911:"3e393ada",2924:"b88c6181",3042:"5a2b7b63",3067:"f7f19b65",3085:"1f391b9e",3089:"a6aa9e1f",3127:"c15eed1e",3196:"892a1356",3205:"a80da1cf",3332:"c16ec350",3382:"46ec9e07",3470:"97b83a15",3471:"26223297",3485:"a7dd8dbb",3509:"4390ceb7",3608:"9e4087bc",3649:"84d31579",3653:"77b2e1a7",3710:"f9156c7b",3745:"2832f267",3751:"3720c009",3783:"208c22c0",3792:"d9006975",3831:"4f064c83",3912:"43a422f1",3920:"250d3b4a",3963:"b2088eb5",4013:"01a85c17",4018:"fed656c0",4028:"a0fba3c2",4116:"04baadca",4121:"55960ee5",4195:"c4f5d8e4",4225:"9d3f23f2",4403:"82a46292",4497:"7e7aadab",4506:"1d6634ae",4673:"9b0c61df",4698:"989bdc99",4903:"406fac10",4912:"22e56e97",5006:"0f8fcaf2",5110:"64b6c74f",5116:"dfe6a2c3",5239:"46322ecc",5278:"2a0f68af",5396:"d5f6f989",5509:"61dd07e5",5608:"af821dc0",5656:"fdc1419b",5700:"fa653f8e",5738:"981e9d10",5740:"83d2c30f",5824:"9c34e19a",5981:"b35944e1",6059:"eb5542d6",6103:"ccc49370",6135:"7bf4a76e",6167:"12224ae3",6225:"c0b1a2d5",6232:"5be2a219",6310:"4d361fbb",6339:"fdc7b2b4",6416:"e14c8eac",6512:"8d1a49ca",6558:"60a79b04",6711:"ecf98249",6748:"a59fbbe9",6760:"e46d5eb7",6931:"902a9c80",6971:"5cec6303",7095:"88c5f615",7130:"ba22154c",7131:"1bc81252",7221:"9ff5d104",7370:"092a4fd1",7414:"393be207",7430:"1ba1276a",7557:"f3e09045",7590:"869bf668",7595:"3044eda6",7600:"4cdaffcc",7748:"913bdcf8",7765:"91a85011",7799:"fdeefd99",7902:"27e5d8f3",7918:"17896441",8081:"e18b7efc",8154:"dc632cb1",8167:"4efdac7f",8188:"4201c9c5",8221:"6af14956",8344:"223417d2",8610:"6875c492",8830:"8e76a1dd",9119:"a1604df1",9120:"10aa317e",9157:"880ffed0",9248:"1ba6178a",9312:"55a39e66",9328:"ef8e388b",9329:"1726abb7",9342:"b96e0fb7",9381:"7a4340ad",9456:"14ee4706",9514:"1be78505",9700:"e16015ca",9817:"14eb3368",9924:"df203c0f",9940:"4e7737f7",9972:"d195b298"}[e]||e)+"."+{53:"f31def92",115:"ea9c93a5",318:"c3e6041b",343:"a7530d6c",382:"f36d84a0",383:"8a661514",463:"f7d53d4a",533:"aee4a63c",536:"4795ccfc",667:"320e1a48",713:"a4957d4f",878:"b77e7fb5",1078:"9591aa5c",1081:"c5bdb618",1167:"9144719d",1273:"622c8542",1327:"7a87ea72",1335:"4c27b37e",1342:"9d703293",1348:"2837e291",1367:"274c3a0e",1458:"517fde90",1477:"7587b753",1511:"129880d9",1517:"0b7a7ed0",1713:"d325ead0",1936:"a975e3ce",2057:"11879270",2067:"306fccfb",2078:"232d6455",2131:"76dfd058",2155:"d5d70566",2174:"120a81cf",2193:"a631789d",2300:"46f5cda5",2314:"13d51da4",2333:"6f729517",2362:"fd87e35b",2415:"510035ae",2466:"1e9810ec",2535:"20b3e11a",2593:"f7167683",2595:"8c2c24fc",2654:"b1f08468",2715:"0d0b94b1",2786:"c39b565c",2890:"cdfc7f31",2911:"362e57ab",2924:"663ed0ae",3042:"39c76423",3067:"669e526d",3085:"5d22d23b",3089:"f6443f1c",3127:"eeb0a9a7",3196:"a7df412c",3205:"b233375a",3332:"e4686911",3382:"c85cba64",3470:"cf418bae",3471:"5fcd1ae6",3485:"12e3f51b",3509:"2222220b",3608:"49a85d90",3649:"0ebc78ab",3653:"aa6dea4c",3710:"7e2aada4",3745:"0dc5b7b9",3751:"7d6a555b",3783:"9fc33ea4",3792:"fe9e6004",3829:"54b91c7e",3831:"6f2d78c3",3912:"38f33627",3920:"75b20cdd",3963:"772e1c70",4013:"8fdc286b",4018:"66a33f10",4028:"6e8ed776",4116:"fec4d90b",4121:"9f53384d",4195:"193e8b39",4225:"5e2e0db7",4403:"d060ae85",4497:"c6bda551",4506:"91e54bb0",4608:"06f038d8",4673:"0bcbb9f1",4698:"f64235ed",4903:"353beb70",4912:"1b40d2ac",5006:"5e8941a9",5110:"54961053",5116:"241a5744",5239:"540212f8",5278:"3088ce86",5396:"94b93e97",5509:"ac87caf5",5608:"ae91d759",5656:"f556de50",5700:"9d808658",5738:"caa468ef",5740:"3d5785e9",5824:"0a8d6714",5981:"6ef5166c",6059:"ad297e2c",6103:"28b1a744",6135:"d4cd2d26",6167:"510fdfac",6225:"4b6f30e5",6232:"07e14baa",6310:"4dd495e3",6339:"14177404",6416:"619083c4",6512:"3f14d36c",6558:"fabc6b2e",6711:"fc2a02cf",6748:"2f84ad85",6760:"54f0b9d7",6931:"654846ec",6971:"e448773c",7095:"b38faeb3",7130:"3e3a523d",7131:"2ec67378",7221:"e42396cf",7370:"985cb60c",7414:"c4f38f8c",7430:"468fc1b9",7557:"787ad7b4",7590:"22a2e6ba",7595:"1e2b10e8",7600:"3364de08",7748:"304ed009",7765:"3b81be4f",7799:"91d09fe2",7902:"dd3d15b8",7918:"31053203",8081:"d51cc295",8154:"6b88e9df",8167:"457ce7d9",8188:"dcf9f458",8221:"ec009a36",8344:"06b6c66f",8610:"7b26e643",8830:"83ec7069",9119:"856884a6",9120:"11a7fdde",9157:"e574a3db",9248:"db218ffb",9312:"b32b2518",9328:"55a98898",9329:"e598bf20",9342:"dfa33978",9381:"92cb3b99",9456:"dc1bb35a",9514:"9467b0fc",9700:"7e9725ed",9817:"dde3d7fb",9924:"246a572d",9940:"fcfe8148",9972:"6504b361"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.392e0b50.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},d="golden-forest-website:",n.l=function(e,c,a,b){if(f[e])f[e].push(c);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),f[e]=[c];var s=function(c,a){t.onerror=t.onload=null,clearTimeout(l);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),c)return c(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",26223297:"3471","935f2afb":"53","30a0e7dd":"115","06af963a":"318",f5f55895:"343",b95dcefa:"382","043b8994":"383","346a2179":"463",b2b675dd:"533","4d00a314":"536","65daa11e":"667",b5fae9ec:"713",bb65b79e:"878","6b31c592":"1078",eb6e74b1:"1081","84571ffa":"1167","56c17765":"1273","3cb4dfae":"1327","5b6c37b1":"1335",a766a857:"1342",afc6003b:"1348",ed7554c5:"1367","917b54e2":"1458",b2f554cd:"1477","4ed4c83e":"1511",e82bb226:"1517",a7023ddc:"1713","4cd78861":"1936",f89c53fe:"2057",e520250c:"2067","2f7c4c7b":"2078","4b400e15":"2131","6ab50573":"2155",f5a5ab90:"2174","9b5f1b6c":"2193","63dfdf37":"2300","9dd4d928":"2314","04069acd":"2333",c02fb013:"2362","452c29ed":"2415","4aee4b78":"2466","814f3328":"2535","494084f8":"2593",eaab9702:"2595","6d794213":"2654",a9204e06:"2715","1d00150d":"2786","76055cf2":"2890","3e393ada":"2911",b88c6181:"2924","5a2b7b63":"3042",f7f19b65:"3067","1f391b9e":"3085",a6aa9e1f:"3089",c15eed1e:"3127","892a1356":"3196",a80da1cf:"3205",c16ec350:"3332","46ec9e07":"3382","97b83a15":"3470",a7dd8dbb:"3485","4390ceb7":"3509","9e4087bc":"3608","84d31579":"3649","77b2e1a7":"3653",f9156c7b:"3710","2832f267":"3745","3720c009":"3751","208c22c0":"3783",d9006975:"3792","4f064c83":"3831","43a422f1":"3912","250d3b4a":"3920",b2088eb5:"3963","01a85c17":"4013",fed656c0:"4018",a0fba3c2:"4028","04baadca":"4116","55960ee5":"4121",c4f5d8e4:"4195","9d3f23f2":"4225","82a46292":"4403","7e7aadab":"4497","1d6634ae":"4506","9b0c61df":"4673","989bdc99":"4698","406fac10":"4903","22e56e97":"4912","0f8fcaf2":"5006","64b6c74f":"5110",dfe6a2c3:"5116","46322ecc":"5239","2a0f68af":"5278",d5f6f989:"5396","61dd07e5":"5509",af821dc0:"5608",fdc1419b:"5656",fa653f8e:"5700","981e9d10":"5738","83d2c30f":"5740","9c34e19a":"5824",b35944e1:"5981",eb5542d6:"6059",ccc49370:"6103","7bf4a76e":"6135","12224ae3":"6167",c0b1a2d5:"6225","5be2a219":"6232","4d361fbb":"6310",fdc7b2b4:"6339",e14c8eac:"6416","8d1a49ca":"6512","60a79b04":"6558",ecf98249:"6711",a59fbbe9:"6748",e46d5eb7:"6760","902a9c80":"6931","5cec6303":"6971","88c5f615":"7095",ba22154c:"7130","1bc81252":"7131","9ff5d104":"7221","092a4fd1":"7370","393be207":"7414","1ba1276a":"7430",f3e09045:"7557","869bf668":"7590","3044eda6":"7595","4cdaffcc":"7600","913bdcf8":"7748","91a85011":"7765",fdeefd99:"7799","27e5d8f3":"7902",e18b7efc:"8081",dc632cb1:"8154","4efdac7f":"8167","4201c9c5":"8188","6af14956":"8221","223417d2":"8344","6875c492":"8610","8e76a1dd":"8830",a1604df1:"9119","10aa317e":"9120","880ffed0":"9157","1ba6178a":"9248","55a39e66":"9312",ef8e388b:"9328","1726abb7":"9329",b96e0fb7:"9342","7a4340ad":"9381","14ee4706":"9456","1be78505":"9514",e16015ca:"9700","14eb3368":"9817",df203c0f:"9924","4e7737f7":"9940",d195b298:"9972"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,a){var f=n.o(e,c)?e[c]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(a,d){f=e[c]=[a,d]}));a.push(f[2]=d);var b=n.p+n.u(c),t=new Error;n.l(b,(function(a){if(n.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,a){var f,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(f in t)n.o(t,f)&&(n.m[f]=t[f]);if(r)var u=r(n)}for(c&&c(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[b[o]]=0;return n.O(u)},a=self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();
!function(){"use strict";var e,a,f,c,d,t={},b={};function n(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={id:e,loaded:!1,exports:{}};return t[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=t,n.c=b,e=[],n.O=function(a,f,c,d){if(!f){var t=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],d=e[u][2];for(var b=!0,r=0;r<f.length;r++)(!1&d||t>=d)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(b=!1,d<t&&(t=d));if(b){e.splice(u--,1);var o=c();void 0!==o&&(a=o)}}return a}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[f,c,d]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var t={};a=a||[null,f({}),f([]),f(f)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=f(b))Object.getOwnPropertyNames(b).forEach((function(a){t[a]=function(){return e[a]}}));return t.default=function(){return e},n.d(d,t),d},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",115:"30a0e7dd",318:"06af963a",463:"346a2179",533:"b2b675dd",536:"4d00a314",713:"b5fae9ec",878:"bb65b79e",1078:"6b31c592",1273:"56c17765",1342:"a766a857",1348:"afc6003b",1458:"917b54e2",1477:"b2f554cd",1511:"4ed4c83e",1517:"e82bb226",1713:"a7023ddc",2067:"e520250c",2078:"2f7c4c7b",2193:"9b5f1b6c",2362:"c02fb013",2535:"814f3328",2593:"494084f8",2654:"6d794213",2715:"a9204e06",2786:"1d00150d",2911:"3e393ada",3085:"1f391b9e",3089:"a6aa9e1f",3196:"892a1356",3203:"2fc2fbbd",3205:"a80da1cf",3470:"97b83a15",3471:"26223297",3485:"a7dd8dbb",3608:"9e4087bc",3649:"84d31579",3745:"2832f267",3751:"3720c009",3783:"208c22c0",3792:"d9006975",3831:"4f064c83",3920:"250d3b4a",4013:"01a85c17",4018:"fed656c0",4028:"a0fba3c2",4121:"55960ee5",4195:"c4f5d8e4",4506:"1d6634ae",4903:"406fac10",5110:"64b6c74f",5239:"46322ecc",5278:"2a0f68af",5396:"d5f6f989",5509:"61dd07e5",5700:"fa653f8e",5738:"981e9d10",5740:"83d2c30f",6059:"eb5542d6",6103:"ccc49370",6135:"7bf4a76e",6167:"12224ae3",6225:"c0b1a2d5",6232:"5be2a219",6310:"4d361fbb",6512:"8d1a49ca",6558:"60a79b04",6711:"ecf98249",6748:"a59fbbe9",7221:"9ff5d104",7370:"092a4fd1",7414:"393be207",7430:"1ba1276a",7590:"869bf668",7600:"4cdaffcc",7748:"dc632cb1",7799:"fdeefd99",7902:"27e5d8f3",7918:"17896441",8081:"e18b7efc",8188:"4201c9c5",8221:"6af14956",8344:"223417d2",8610:"6875c492",9119:"a1604df1",9120:"10aa317e",9248:"1ba6178a",9381:"7a4340ad",9456:"14ee4706",9514:"1be78505",9700:"e16015ca",9924:"df203c0f",9972:"d195b298"}[e]||e)+"."+{53:"07212dbf",115:"615dc78c",318:"294ca522",463:"570b523b",533:"aee4a63c",536:"4795ccfc",713:"c29745bc",878:"8422459f",1078:"75d16d3c",1273:"3ad275f9",1342:"9d703293",1348:"9892e3a3",1458:"be07adad",1477:"7587b753",1511:"129880d9",1517:"db3549ba",1713:"d325ead0",2067:"306fccfb",2078:"b6d35cc4",2193:"42a39d36",2362:"70f5f2aa",2535:"20b3e11a",2593:"f7167683",2654:"09a2a632",2715:"0d0b94b1",2786:"c39b565c",2911:"a78cb2bb",3085:"4a0b7be1",3089:"24e27a45",3196:"1156960a",3203:"9081dfef",3205:"b233375a",3470:"61302e46",3471:"5fcd1ae6",3485:"e64037cd",3608:"562a2cb0",3649:"0ebc78ab",3745:"7fd0bb43",3751:"df32db14",3783:"016b2f45",3792:"bd6794a9",3829:"3ac3c7ff",3831:"6f2d78c3",3920:"38b89f83",4013:"42b93f95",4018:"66a33f10",4028:"6e8ed776",4121:"431c39ab",4195:"abfac5b1",4506:"91e54bb0",4608:"22b94a3d",4814:"341ab8b2",4903:"353beb70",5110:"4a3929cd",5239:"540212f8",5278:"3088ce86",5396:"94b93e97",5509:"e13d78ce",5700:"9d808658",5738:"122857e9",5740:"b3b3f46e",6059:"ad297e2c",6103:"41378161",6135:"9dd2730a",6167:"d0064393",6225:"e25d1826",6232:"915c3df3",6310:"a6a0141d",6512:"5ded527b",6558:"fabc6b2e",6667:"f2d644b7",6711:"6ae5fc5c",6748:"cb04e0bb",7221:"e42396cf",7370:"583a8276",7414:"ac2a3203",7430:"468fc1b9",7590:"15c1fcbc",7600:"3364de08",7748:"55711d51",7799:"1dd7d421",7902:"f2c0713d",7918:"0eae57cd",8081:"d51cc295",8188:"dcf9f458",8221:"ec009a36",8344:"f61bf3bf",8610:"3ed2f1fb",9119:"b2f2886f",9120:"11a7fdde",9248:"1c5c7757",9381:"92cb3b99",9456:"15874043",9514:"23f3ce94",9700:"7e9725ed",9924:"525def69",9972:"715460d5"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.6f81dbd5.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},d="golden-forest-website:",n.l=function(e,a,f,t){if(c[e])c[e].push(a);else{var b,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+f){b=i;break}}b||(r=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,n.nc&&b.setAttribute("nonce",n.nc),b.setAttribute("data-webpack",d+f),b.src=e),c[e]=[a];var s=function(a,f){b.onerror=b.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),d&&d.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=s.bind(null,b.onerror),b.onload=s.bind(null,b.onload),r&&document.head.appendChild(b)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",26223297:"3471","935f2afb":"53","30a0e7dd":"115","06af963a":"318","346a2179":"463",b2b675dd:"533","4d00a314":"536",b5fae9ec:"713",bb65b79e:"878","6b31c592":"1078","56c17765":"1273",a766a857:"1342",afc6003b:"1348","917b54e2":"1458",b2f554cd:"1477","4ed4c83e":"1511",e82bb226:"1517",a7023ddc:"1713",e520250c:"2067","2f7c4c7b":"2078","9b5f1b6c":"2193",c02fb013:"2362","814f3328":"2535","494084f8":"2593","6d794213":"2654",a9204e06:"2715","1d00150d":"2786","3e393ada":"2911","1f391b9e":"3085",a6aa9e1f:"3089","892a1356":"3196","2fc2fbbd":"3203",a80da1cf:"3205","97b83a15":"3470",a7dd8dbb:"3485","9e4087bc":"3608","84d31579":"3649","2832f267":"3745","3720c009":"3751","208c22c0":"3783",d9006975:"3792","4f064c83":"3831","250d3b4a":"3920","01a85c17":"4013",fed656c0:"4018",a0fba3c2:"4028","55960ee5":"4121",c4f5d8e4:"4195","1d6634ae":"4506","406fac10":"4903","64b6c74f":"5110","46322ecc":"5239","2a0f68af":"5278",d5f6f989:"5396","61dd07e5":"5509",fa653f8e:"5700","981e9d10":"5738","83d2c30f":"5740",eb5542d6:"6059",ccc49370:"6103","7bf4a76e":"6135","12224ae3":"6167",c0b1a2d5:"6225","5be2a219":"6232","4d361fbb":"6310","8d1a49ca":"6512","60a79b04":"6558",ecf98249:"6711",a59fbbe9:"6748","9ff5d104":"7221","092a4fd1":"7370","393be207":"7414","1ba1276a":"7430","869bf668":"7590","4cdaffcc":"7600",dc632cb1:"7748",fdeefd99:"7799","27e5d8f3":"7902",e18b7efc:"8081","4201c9c5":"8188","6af14956":"8221","223417d2":"8344","6875c492":"8610",a1604df1:"9119","10aa317e":"9120","1ba6178a":"9248","7a4340ad":"9381","14ee4706":"9456","1be78505":"9514",e16015ca:"9700",df203c0f:"9924",d195b298:"9972"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise((function(f,d){c=e[a]=[f,d]}));f.push(c[2]=d);var t=n.p+n.u(a),b=new Error;n.l(t,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.src;b.message="Loading chunk "+a+" failed.\n("+d+": "+t+")",b.name="ChunkLoadError",b.type=d,b.request=t,c[1](b)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,d,t=f[0],b=f[1],r=f[2],o=0;if(t.some((function(a){return 0!==e[a]}))){for(c in b)n.o(b,c)&&(n.m[c]=b[c]);if(r)var u=r(n)}for(a&&a(f);o<t.length;o++)d=t[o],n.o(e,d)&&e[d]&&e[d][0](),e[t[o]]=0;return n.O(u)},f=self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();
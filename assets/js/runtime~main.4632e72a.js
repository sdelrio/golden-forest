(()=>{"use strict";var e,f,a,b,c,d={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=d,r.c=t,e=[],r.O=(f,a,b,c)=>{if(!a){var d=1/0;for(i=0;i<e.length;i++){a=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(f=n)}}return f}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[a,b,c]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};f=f||[null,a({}),a([]),a(a)];for(var t=2&b&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((f=>d[f]=()=>e[f]));return d.default=()=>e,r.d(c,d),c},r.d=(e,f)=>{for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,a)=>(r.f[a](e,f),f)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",62:"4f8a6ee0",115:"30a0e7dd",130:"b3086f15",133:"a6266e1f",229:"52e87856",318:"06af963a",325:"bb33adc7",330:"b5bebff9",343:"f5f55895",345:"087dc57e",382:"b95dcefa",463:"346a2179",464:"7fa1eea3",533:"b2b675dd",536:"4d00a314",596:"c9bb0b86",630:"7097b717",654:"deb044bf",656:"79d65331",667:"65daa11e",706:"3219adb2",713:"b5fae9ec",757:"5a913645",776:"2b5deba3",797:"fb8ba6c1",826:"725f8533",877:"31d9fd8b",878:"bb65b79e",1078:"6b31c592",1081:"eb6e74b1",1095:"0e043608",1102:"df598d5b",1167:"84571ffa",1226:"e84ce92e",1273:"56c17765",1286:"6479af61",1327:"3cb4dfae",1335:"5b6c37b1",1342:"a766a857",1343:"9af3d545",1348:"afc6003b",1365:"8dbe6879",1366:"af991a9f",1367:"ed7554c5",1447:"88cc5920",1458:"917b54e2",1477:"b2f554cd",1511:"4ed4c83e",1517:"e82bb226",1564:"10548214",1591:"3fc66451",1648:"136b3fa1",1672:"9f9ea2bf",1713:"a7023ddc",1749:"6222d46c",1773:"4a1120f8",1846:"eb0e3e00",1879:"6c5a7960",1907:"c2e354b8",1936:"4cd78861",1957:"86cfe51b",1990:"79418877",2066:"e6056b41",2067:"e520250c",2071:"b5941307",2078:"2f7c4c7b",2115:"da5526be",2131:"4b400e15",2155:"6ab50573",2174:"f5a5ab90",2183:"c668e110",2193:"9b5f1b6c",2196:"f98d8366",2232:"f71e46c2",2243:"6af1075f",2267:"db1ac494",2300:"63dfdf37",2314:"9dd4d928",2333:"04069acd",2360:"7279ae4b",2362:"c02fb013",2376:"a281056a",2415:"452c29ed",2438:"6aa6c2d1",2466:"4aee4b78",2535:"814f3328",2593:"494084f8",2595:"eaab9702",2650:"fcd3243f",2654:"6d794213",2693:"ac7a86ec",2715:"a9204e06",2733:"4b7d6745",2769:"8fad744c",2786:"1d00150d",2852:"158f8932",2911:"3e393ada",2924:"b88c6181",2993:"02c8433e",3041:"e9230a8b",3042:"5a2b7b63",3067:"f7f19b65",3085:"1f391b9e",3089:"a6aa9e1f",3127:"c15eed1e",3173:"4fb07697",3196:"892a1356",3205:"a80da1cf",3263:"33fc6fb9",3289:"991c942d",3324:"fbb6a56d",3332:"c16ec350",3347:"aff1be96",3360:"75f61abe",3413:"60f415f4",3416:"c9f1ce63",3470:"97b83a15",3471:"26223297",3485:"a7dd8dbb",3492:"d1ea2d8b",3509:"4390ceb7",3559:"38991af2",3597:"e4d0ff51",3608:"9e4087bc",3649:"84d31579",3653:"77b2e1a7",3710:"f9156c7b",3745:"2832f267",3751:"3720c009",3783:"208c22c0",3784:"c9ff47e1",3792:"d9006975",3814:"43b21fff",3831:"4f064c83",3912:"43a422f1",3920:"250d3b4a",3963:"b2088eb5",3997:"bc0514df",4013:"01a85c17",4018:"fed656c0",4028:"a0fba3c2",4116:"04baadca",4121:"55960ee5",4195:"c4f5d8e4",4225:"9d3f23f2",4233:"fd9afb94",4299:"c3e2f2d5",4309:"b972e4bd",4334:"c9dbff67",4339:"12aac010",4379:"3aa48778",4403:"82a46292",4438:"d9f85838",4462:"f76ca8ab",4497:"7e7aadab",4506:"1d6634ae",4555:"bedfd095",4628:"9f95854d",4673:"9b0c61df",4698:"989bdc99",4745:"65e8b052",4771:"aeef2b12",4802:"1cdd1b71",4808:"76cebc19",4811:"2905cdb1",4834:"33ec49f6",4870:"ce958bfd",4903:"406fac10",4912:"22e56e97",4925:"3b86f7ed",4985:"44a322b5",4994:"b9fd4869",5006:"0f8fcaf2",5090:"b3cc910f",5110:"64b6c74f",5116:"dfe6a2c3",5149:"747d6cb3",5160:"49e72007",5178:"24c0ba9b",5193:"00d580e4",5239:"46322ecc",5256:"06447d66",5278:"2a0f68af",5322:"9e0bb3f7",5335:"245f4ee6",5394:"8e5e0c37",5396:"d5f6f989",5444:"10d6e67a",5509:"61dd07e5",5608:"af821dc0",5609:"beca213d",5630:"a4464d10",5656:"fdc1419b",5700:"fa653f8e",5738:"981e9d10",5740:"83d2c30f",5821:"56fad095",5822:"739f9a8c",5824:"9c34e19a",5826:"f8de77c0",5977:"e8c8ab3f",5981:"b35944e1",5999:"bceebf15",6025:"8cca1a0d",6046:"a7a48f13",6059:"eb5542d6",6060:"d106a616",6098:"b3f5327d",6103:"ccc49370",6122:"33debf20",6129:"b15d1034",6134:"848f0fa3",6135:"7bf4a76e",6163:"7cf402ab",6167:"12224ae3",6216:"a3ca461d",6219:"776d094c",6225:"c0b1a2d5",6232:"5be2a219",6242:"2d527397",6254:"c01b1e20",6263:"a3d5a668",6288:"4c404fb8",6297:"cee1161a",6310:"4d361fbb",6325:"3a5fc67f",6339:"fdc7b2b4",6367:"e261f76c",6377:"b2e1f501",6416:"e14c8eac",6499:"ad5f6be6",6512:"8d1a49ca",6523:"427702c4",6541:"fab77ab2",6558:"60a79b04",6647:"59d3a4e4",6664:"74753261",6697:"b1593e92",6704:"a18c280b",6711:"ecf98249",6748:"a59fbbe9",6760:"e46d5eb7",6788:"050cf89e",6838:"16b2b8e8",6856:"d951d52f",6931:"902a9c80",6938:"608ae6a4",6941:"49c51e5b",6962:"87f48f25",6971:"5cec6303",6974:"232c92ba",6987:"b4c8f8a6",7130:"ba22154c",7131:"1bc81252",7138:"ef2cc320",7189:"89f21f38",7193:"5f5ea2fc",7221:"9ff5d104",7222:"0be9de06",7246:"253172c2",7370:"092a4fd1",7377:"40e2aa62",7389:"46a36444",7406:"c62ef0a8",7414:"393be207",7430:"1ba1276a",7485:"f2360e4f",7519:"e4352101",7557:"f3e09045",7590:"869bf668",7595:"3044eda6",7600:"4cdaffcc",7612:"0f797f91",7627:"7f1ba2ed",7748:"913bdcf8",7765:"91a85011",7777:"b7154169",7799:"fdeefd99",7902:"27e5d8f3",7918:"17896441",7920:"1a4e3797",8081:"e18b7efc",8110:"15026ccb",8154:"dc632cb1",8167:"4efdac7f",8188:"4201c9c5",8192:"568b5a77",8221:"6af14956",8228:"c61b9ab3",8242:"3c198301",8311:"f64d0561",8344:"223417d2",8352:"a51454e4",8369:"605332f9",8372:"46bd69a6",8442:"34026b50",8535:"a319474b",8564:"1097d480",8592:"common",8610:"6875c492",8627:"8c74b814",8803:"c0d83213",8830:"8e76a1dd",8859:"de6a4070",8886:"6a3e47f0",8914:"04bad446",9018:"0e505efa",9024:"5ba24f63",9035:"4c9e35b1",9083:"ab3b0464",9119:"a1604df1",9120:"10aa317e",9157:"880ffed0",9246:"69dc5d94",9248:"1ba6178a",9261:"120e2753",9287:"6d453d64",9306:"2f469fde",9312:"55a39e66",9328:"ef8e388b",9329:"1726abb7",9342:"b96e0fb7",9357:"f7466fa9",9362:"5bab868e",9381:"7a4340ad",9449:"32311fda",9456:"14ee4706",9514:"1be78505",9645:"929eabf3",9696:"657c0359",9700:"e16015ca",9735:"c3d8a789",9737:"d2997049",9796:"d36e9adb",9817:"14eb3368",9898:"e10f49cb",9906:"556ef1ee",9924:"df203c0f",9930:"8d4fc6fd",9940:"4e7737f7",9972:"d195b298"}[e]||e)+"."+{53:"a8f50949",62:"572a43c9",115:"5c63f915",130:"eb11b37d",133:"29272371",229:"121db75f",318:"79cfda14",325:"86193a43",330:"7fdb0155",343:"aa93660b",345:"d08d34e4",382:"2be2d5c3",463:"f26ff0ba",464:"19a1f6dd",533:"ceac0b15",536:"6f0ed65b",596:"8f5e000f",614:"ba057dcc",630:"38d6fed2",654:"cede5581",656:"ccfbd2e3",667:"9e45bcce",706:"7d294d09",713:"7c07738f",757:"a9817474",776:"fab37d7c",797:"c063a44f",826:"7c1cef1e",877:"d68448c0",878:"ccdbc934",1078:"a02b4459",1081:"108e3733",1095:"08db1fb5",1102:"1abddfa1",1167:"e962a513",1226:"bdb33e25",1273:"fb974214",1286:"41070fb8",1327:"5a2b2f6d",1335:"5ed3e361",1342:"ae39f988",1343:"603c7e16",1348:"666925d5",1365:"06d87d4e",1366:"937f4b4a",1367:"85d1251d",1426:"8746b502",1447:"bb7102e2",1458:"5097a414",1477:"bb5f43e8",1511:"c4ec90f0",1517:"61575cbd",1564:"408762e6",1591:"d52fb7d1",1648:"7fb99961",1672:"39b8aa4b",1713:"083893f8",1749:"d670cc3d",1773:"e469df1a",1846:"c761e890",1879:"e30dad81",1907:"7efdeeca",1936:"8cf70584",1957:"6f54de41",1990:"8c18d1cb",2066:"6d0c8df2",2067:"8adf5c61",2071:"c9ebf0c6",2078:"35567cb8",2115:"03823e98",2131:"ca65abaf",2155:"c597d072",2174:"4b222ab1",2183:"372246f1",2193:"2b37da1c",2196:"439536f9",2232:"a503541d",2243:"892c71a1",2267:"1a41f332",2300:"f7c5eb66",2314:"3d743b69",2333:"302e0cd9",2360:"3304ea82",2362:"75721731",2376:"f17ba84d",2403:"2849f04c",2415:"f2432edd",2438:"86f6900e",2466:"e4f5c9de",2535:"8edfd72c",2593:"b2094cb6",2595:"af318178",2650:"618da6fd",2654:"32bf4495",2693:"65bee48a",2715:"3ea58da7",2733:"c575eb7a",2769:"6ace515b",2786:"50da069e",2852:"3ce83378",2911:"1bf052b8",2924:"0003da1c",2993:"20cd5f21",3041:"16a29001",3042:"9fba9097",3067:"0c200cdc",3085:"1386a39d",3089:"2338f877",3127:"f5b97be4",3173:"2abce6fa",3196:"0c55ccac",3205:"4d8c8e52",3263:"54b1bc7d",3289:"e62e9d08",3324:"16b1148d",3332:"b6b5769c",3347:"b9c9e8d7",3360:"41a814e6",3413:"4cf97e96",3416:"60465f6d",3470:"b2436e69",3471:"b4398ac4",3485:"8984dba7",3492:"354a45d4",3509:"d26a21a5",3559:"bdb6e4ac",3597:"22a6e5b0",3608:"ca0deef9",3649:"dac46c49",3653:"3fee6455",3710:"e52f52f6",3745:"03a0245b",3751:"2f1e59d9",3783:"3afc631f",3784:"9220574b",3792:"c85dfd94",3814:"e3e95f28",3831:"66376f13",3912:"493f131c",3920:"edd4d677",3963:"49962158",3997:"c035eb96",4013:"6f355203",4018:"01e8c778",4028:"7d1e96b4",4116:"b3f2a5e4",4121:"3aa98aeb",4195:"b8cc082c",4225:"e25cd499",4233:"7db36fae",4299:"1358287a",4309:"efe05be0",4334:"64213e20",4339:"e9e6d8a6",4379:"1baaa816",4403:"1c840a24",4438:"d2dec1bd",4462:"9f3f4c8b",4497:"d647782f",4506:"141b0517",4555:"ab736b14",4628:"d7faf597",4673:"8ed37e71",4698:"55bf84a7",4745:"28176457",4771:"ef0c97ac",4802:"22919de7",4808:"1fc70a29",4811:"c0012517",4834:"fc99416e",4870:"685b2588",4903:"831f6ca3",4912:"d400bba8",4925:"3a050fd7",4972:"ebe65c25",4985:"ac01924b",4994:"0e6acda0",5006:"14f0d22c",5090:"90b6f741",5110:"8756702b",5116:"4d1a3fad",5149:"8c3a573a",5160:"0d50952f",5178:"2dbe8a67",5193:"10d39e53",5239:"edbec56f",5256:"1f96b78c",5278:"903c43b5",5322:"b9c4377d",5335:"77b9f8b7",5394:"e5e6a71c",5396:"0cecef92",5444:"4fd38c5c",5509:"bc3c587d",5608:"4e159d6b",5609:"9cbf872a",5630:"6d1588bc",5656:"8ae2872f",5700:"4ec9f99b",5738:"8ccd018b",5740:"560fa2ab",5821:"ab6e12ba",5822:"73ea9c31",5824:"378707be",5826:"fa19a6bd",5977:"985bd9b6",5981:"7c96cd3b",5999:"73231b3f",6025:"7d8e587e",6046:"8b2a121f",6048:"b38b63e0",6059:"8cc1f727",6060:"716c5c6f",6098:"5368ef06",6103:"c9e6f4d2",6122:"9f8ddd59",6129:"3a95e753",6134:"374d780f",6135:"2a2d8563",6163:"74d41f49",6167:"cc004000",6216:"6d136406",6219:"0168f82f",6225:"ad00172d",6232:"784f323a",6242:"eafedb7e",6254:"d9663877",6263:"2e86c62d",6288:"eb3d35b9",6297:"b91ca1f5",6310:"6b1572b6",6325:"cc4918a3",6339:"5cf0f166",6367:"5cc5dd2c",6377:"3beca351",6416:"b2925074",6499:"27a5994e",6512:"de4ef478",6523:"141e127f",6541:"0d2b1ede",6558:"b0671e47",6647:"6c88cf12",6664:"a4a55455",6697:"1bf07d78",6704:"2dfdf241",6711:"31bf2e2a",6748:"2d68731d",6760:"e77a7207",6788:"186d7105",6838:"dedebb69",6856:"5ed4a88d",6931:"611e0911",6938:"4bb75cfa",6941:"24ce4c09",6945:"6e6f82e3",6962:"481c3346",6971:"8047e622",6974:"df692a2c",6987:"cfc6840c",7130:"9d98af3a",7131:"75f09148",7138:"4570a258",7189:"dcfa254a",7193:"5a8d9fa2",7221:"feb3ce06",7222:"8d0e83ca",7246:"66e6a540",7370:"168e887a",7377:"a1daf359",7389:"08aa2a0d",7406:"3f9c20f9",7414:"9e95299e",7430:"13fd56bc",7485:"2ad23d38",7519:"65ee8039",7557:"718decf9",7590:"c6a33b26",7595:"172d4ccb",7600:"c0dc7c85",7612:"c965bf4c",7627:"c959e1bb",7748:"8c589db8",7765:"221b6e5e",7777:"ba49f67f",7799:"c6f274e8",7902:"f2f8b5c9",7918:"043a07ba",7920:"edc255bc",8081:"259e5543",8110:"f73c80b6",8154:"c6b52433",8167:"19933576",8188:"60694b53",8192:"35fe5b30",8221:"7b28c522",8228:"ab444f89",8242:"a4c27815",8311:"7d4ec878",8344:"b2dc23d8",8352:"90533b41",8369:"f0e1678d",8372:"0a08c348",8442:"bea48fd5",8535:"a77ce01c",8564:"100b2fd0",8592:"3119f2ea",8610:"9e058fb8",8627:"ad49129c",8803:"b18b43fb",8830:"bc0967c6",8859:"9c66d107",8886:"0009760c",8894:"a64eb9e0",8914:"bd3d9d91",9018:"e6548a0f",9024:"9d16dca5",9035:"ac3b8157",9083:"90c62a67",9119:"fd709392",9120:"038edca5",9157:"3cef8a2e",9246:"877df982",9248:"b33049fe",9261:"60b9321b",9287:"bec4594b",9306:"282d9808",9312:"637e0bd4",9328:"96296570",9329:"56beae45",9342:"3833f6a7",9357:"19eecfb2",9362:"36ef44be",9381:"ae733af1",9449:"7082c6a4",9456:"4e97764b",9514:"ff94845e",9645:"32f03f77",9696:"d8a9e876",9700:"324cbb24",9735:"e4afd2dd",9737:"8fc791f7",9796:"01a40b11",9817:"918b9f42",9898:"c448e916",9906:"f843e236",9924:"63c7f699",9930:"f3da5334",9940:"ca2ec906",9972:"4cb111a6"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),b={},c="golden-forest-website:",r.l=(e,f,a,d)=>{if(b[e])b[e].push(f);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+a){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+a),t.src=e),b[e]=[f];var u=(f,a)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(a))),f)return f(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={10548214:"1564",17896441:"7918",26223297:"3471",74753261:"6664",79418877:"1990","935f2afb":"53","4f8a6ee0":"62","30a0e7dd":"115",b3086f15:"130",a6266e1f:"133","52e87856":"229","06af963a":"318",bb33adc7:"325",b5bebff9:"330",f5f55895:"343","087dc57e":"345",b95dcefa:"382","346a2179":"463","7fa1eea3":"464",b2b675dd:"533","4d00a314":"536",c9bb0b86:"596","7097b717":"630",deb044bf:"654","79d65331":"656","65daa11e":"667","3219adb2":"706",b5fae9ec:"713","5a913645":"757","2b5deba3":"776",fb8ba6c1:"797","725f8533":"826","31d9fd8b":"877",bb65b79e:"878","6b31c592":"1078",eb6e74b1:"1081","0e043608":"1095",df598d5b:"1102","84571ffa":"1167",e84ce92e:"1226","56c17765":"1273","6479af61":"1286","3cb4dfae":"1327","5b6c37b1":"1335",a766a857:"1342","9af3d545":"1343",afc6003b:"1348","8dbe6879":"1365",af991a9f:"1366",ed7554c5:"1367","88cc5920":"1447","917b54e2":"1458",b2f554cd:"1477","4ed4c83e":"1511",e82bb226:"1517","3fc66451":"1591","136b3fa1":"1648","9f9ea2bf":"1672",a7023ddc:"1713","6222d46c":"1749","4a1120f8":"1773",eb0e3e00:"1846","6c5a7960":"1879",c2e354b8:"1907","4cd78861":"1936","86cfe51b":"1957",e6056b41:"2066",e520250c:"2067",b5941307:"2071","2f7c4c7b":"2078",da5526be:"2115","4b400e15":"2131","6ab50573":"2155",f5a5ab90:"2174",c668e110:"2183","9b5f1b6c":"2193",f98d8366:"2196",f71e46c2:"2232","6af1075f":"2243",db1ac494:"2267","63dfdf37":"2300","9dd4d928":"2314","04069acd":"2333","7279ae4b":"2360",c02fb013:"2362",a281056a:"2376","452c29ed":"2415","6aa6c2d1":"2438","4aee4b78":"2466","814f3328":"2535","494084f8":"2593",eaab9702:"2595",fcd3243f:"2650","6d794213":"2654",ac7a86ec:"2693",a9204e06:"2715","4b7d6745":"2733","8fad744c":"2769","1d00150d":"2786","158f8932":"2852","3e393ada":"2911",b88c6181:"2924","02c8433e":"2993",e9230a8b:"3041","5a2b7b63":"3042",f7f19b65:"3067","1f391b9e":"3085",a6aa9e1f:"3089",c15eed1e:"3127","4fb07697":"3173","892a1356":"3196",a80da1cf:"3205","33fc6fb9":"3263","991c942d":"3289",fbb6a56d:"3324",c16ec350:"3332",aff1be96:"3347","75f61abe":"3360","60f415f4":"3413",c9f1ce63:"3416","97b83a15":"3470",a7dd8dbb:"3485",d1ea2d8b:"3492","4390ceb7":"3509","38991af2":"3559",e4d0ff51:"3597","9e4087bc":"3608","84d31579":"3649","77b2e1a7":"3653",f9156c7b:"3710","2832f267":"3745","3720c009":"3751","208c22c0":"3783",c9ff47e1:"3784",d9006975:"3792","43b21fff":"3814","4f064c83":"3831","43a422f1":"3912","250d3b4a":"3920",b2088eb5:"3963",bc0514df:"3997","01a85c17":"4013",fed656c0:"4018",a0fba3c2:"4028","04baadca":"4116","55960ee5":"4121",c4f5d8e4:"4195","9d3f23f2":"4225",fd9afb94:"4233",c3e2f2d5:"4299",b972e4bd:"4309",c9dbff67:"4334","12aac010":"4339","3aa48778":"4379","82a46292":"4403",d9f85838:"4438",f76ca8ab:"4462","7e7aadab":"4497","1d6634ae":"4506",bedfd095:"4555","9f95854d":"4628","9b0c61df":"4673","989bdc99":"4698","65e8b052":"4745",aeef2b12:"4771","1cdd1b71":"4802","76cebc19":"4808","2905cdb1":"4811","33ec49f6":"4834",ce958bfd:"4870","406fac10":"4903","22e56e97":"4912","3b86f7ed":"4925","44a322b5":"4985",b9fd4869:"4994","0f8fcaf2":"5006",b3cc910f:"5090","64b6c74f":"5110",dfe6a2c3:"5116","747d6cb3":"5149","49e72007":"5160","24c0ba9b":"5178","00d580e4":"5193","46322ecc":"5239","06447d66":"5256","2a0f68af":"5278","9e0bb3f7":"5322","245f4ee6":"5335","8e5e0c37":"5394",d5f6f989:"5396","10d6e67a":"5444","61dd07e5":"5509",af821dc0:"5608",beca213d:"5609",a4464d10:"5630",fdc1419b:"5656",fa653f8e:"5700","981e9d10":"5738","83d2c30f":"5740","56fad095":"5821","739f9a8c":"5822","9c34e19a":"5824",f8de77c0:"5826",e8c8ab3f:"5977",b35944e1:"5981",bceebf15:"5999","8cca1a0d":"6025",a7a48f13:"6046",eb5542d6:"6059",d106a616:"6060",b3f5327d:"6098",ccc49370:"6103","33debf20":"6122",b15d1034:"6129","848f0fa3":"6134","7bf4a76e":"6135","7cf402ab":"6163","12224ae3":"6167",a3ca461d:"6216","776d094c":"6219",c0b1a2d5:"6225","5be2a219":"6232","2d527397":"6242",c01b1e20:"6254",a3d5a668:"6263","4c404fb8":"6288",cee1161a:"6297","4d361fbb":"6310","3a5fc67f":"6325",fdc7b2b4:"6339",e261f76c:"6367",b2e1f501:"6377",e14c8eac:"6416",ad5f6be6:"6499","8d1a49ca":"6512","427702c4":"6523",fab77ab2:"6541","60a79b04":"6558","59d3a4e4":"6647",b1593e92:"6697",a18c280b:"6704",ecf98249:"6711",a59fbbe9:"6748",e46d5eb7:"6760","050cf89e":"6788","16b2b8e8":"6838",d951d52f:"6856","902a9c80":"6931","608ae6a4":"6938","49c51e5b":"6941","87f48f25":"6962","5cec6303":"6971","232c92ba":"6974",b4c8f8a6:"6987",ba22154c:"7130","1bc81252":"7131",ef2cc320:"7138","89f21f38":"7189","5f5ea2fc":"7193","9ff5d104":"7221","0be9de06":"7222","253172c2":"7246","092a4fd1":"7370","40e2aa62":"7377","46a36444":"7389",c62ef0a8:"7406","393be207":"7414","1ba1276a":"7430",f2360e4f:"7485",e4352101:"7519",f3e09045:"7557","869bf668":"7590","3044eda6":"7595","4cdaffcc":"7600","0f797f91":"7612","7f1ba2ed":"7627","913bdcf8":"7748","91a85011":"7765",b7154169:"7777",fdeefd99:"7799","27e5d8f3":"7902","1a4e3797":"7920",e18b7efc:"8081","15026ccb":"8110",dc632cb1:"8154","4efdac7f":"8167","4201c9c5":"8188","568b5a77":"8192","6af14956":"8221",c61b9ab3:"8228","3c198301":"8242",f64d0561:"8311","223417d2":"8344",a51454e4:"8352","605332f9":"8369","46bd69a6":"8372","34026b50":"8442",a319474b:"8535","1097d480":"8564",common:"8592","6875c492":"8610","8c74b814":"8627",c0d83213:"8803","8e76a1dd":"8830",de6a4070:"8859","6a3e47f0":"8886","04bad446":"8914","0e505efa":"9018","5ba24f63":"9024","4c9e35b1":"9035",ab3b0464:"9083",a1604df1:"9119","10aa317e":"9120","880ffed0":"9157","69dc5d94":"9246","1ba6178a":"9248","120e2753":"9261","6d453d64":"9287","2f469fde":"9306","55a39e66":"9312",ef8e388b:"9328","1726abb7":"9329",b96e0fb7:"9342",f7466fa9:"9357","5bab868e":"9362","7a4340ad":"9381","32311fda":"9449","14ee4706":"9456","1be78505":"9514","929eabf3":"9645","657c0359":"9696",e16015ca:"9700",c3d8a789:"9735",d2997049:"9737",d36e9adb:"9796","14eb3368":"9817",e10f49cb:"9898","556ef1ee":"9906",df203c0f:"9924","8d4fc6fd":"9930","4e7737f7":"9940",d195b298:"9972"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(f,a)=>{var b=r.o(e,f)?e[f]:void 0;if(0!==b)if(b)a.push(b[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var c=new Promise(((a,c)=>b=e[f]=[a,c]));a.push(b[2]=c);var d=r.p+r.u(f),t=new Error;r.l(d,(a=>{if(r.o(e,f)&&(0!==(b=e[f])&&(e[f]=void 0),b)){var c=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,b[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,a)=>{var b,c,d=a[0],t=a[1],o=a[2],n=0;if(d.some((f=>0!==e[f]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(f&&f(a);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},a=self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/images/images"],{2027:function(n,e,t){"use strict";(function(n){t("fbbb");a(t("66fd"));var e=a(t("35c5"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"35c5":function(n,e,t){"use strict";t.r(e);var a=t("9368"),i=t("92db");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("d68b");var c,o=t("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports},"88b4":function(n,e,t){},"92db":function(n,e,t){"use strict";t.r(e);var a=t("b3ea"),i=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=i.a},9368:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var a={cuBar:function(){return t.e("components/cu-bar/cu-bar").then(t.bind(null,"95a1"))},uniImageList:function(){return t.e("components/uni-image-list/uni-image-list").then(t.bind(null,"9863"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},b3ea:function(n,e,t){"use strict";(function(n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,a,i,u,c){try{var o=n[u](c),r=o.value}catch(s){return void t(s)}o.done?e(r):Promise.resolve(r).then(a,i)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(a,i){var u=n.apply(e,t);function o(n){c(u,a,i,o,r,"next",n)}function r(n){c(u,a,i,o,r,"throw",n)}o(void 0)}))}}var r=function(){t.e("components/uni-image-list/uni-image-list").then(function(){return resolve(t("9863"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/cu-search/search").then(function(){return resolve(t("79ab"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/cu-swiper/img-swipper").then(function(){return resolve(t("0bc3"))}.bind(null,t)).catch(t.oe)},d={components:{cuSearch:s,CuSwipper:l,uniImageList:r},data:function(){return{pageSize:20,pageNum:1,hasMore:!1,list:[],imagesList:["https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/1608180571852.png","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/969a8a1d8c86fb950eec91837a81657e.png","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatard4b924350ec2b93d2fd589fa58f01ed7.png"],pageUrl:"/page/images/index"}},onLoad:function(){this.handleGetImg()},onReachBottom:function(){console.log("页码",this.pageNum),this.hasMore&&(this.pageNum=this.pageNum+1,this.handleGetImg())},methods:{onExtra:function(){n.navigateTo({url:"/pages/images/index"})},choose:function(n){console.log(n)},handleGetImg:function(){var e=this;return o(i.default.mark((function t(){var u,c,o,r,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.showLoading({title:"加载中..."}),u=e.pageNum,c=e.pageSize,t.next=4,a.callFunction({name:"img-query",data:{pageNum:u,pageSize:c}}).catch((function(e){n.hideLoading(),n.showModal({content:"查询失败，错误信息为：".concat(e.message),showCancel:!1}),console.error(e)}));case 4:o=t.sent,r=o.result.data,s=o.result,e.hasMore=null===s||void 0===s?void 0:s.hasMore,e.list=e.list.concat(r),n.hideLoading();case 10:case"end":return t.stop()}}),t)})))()}}};e.default=d}).call(this,t("543d")["default"],t("a9ff")["default"])},d68b:function(n,e,t){"use strict";var a=t("88b4"),i=t.n(a);i.a}},[["2027","common/runtime","common/vendor"]]]);
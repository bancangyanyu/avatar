(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/special/detail"],{"1e97":function(n,e,t){},"2e46":function(n,e,t){"use strict";t.r(e);var a=t("a2d3"),i=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);e["default"]=i.a},"462d":function(n,e,t){"use strict";(function(n){t("fbbb");a(t("66fd"));var e=a(t("a504"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"761a":function(n,e,t){"use strict";var a=t("1e97"),i=t.n(a);i.a},a2d3:function(n,e,t){"use strict";(function(n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(t("a34a")),o=t("b313");function u(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,a,i,o,u){try{var c=n[o](u),r=c.value}catch(s){return void t(s)}c.done?e(r):Promise.resolve(r).then(a,i)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(a,i){var o=n.apply(e,t);function u(n){c(o,a,i,u,r,"next",n)}function r(n){c(o,a,i,u,r,"throw",n)}u(void 0)}))}}var s=function(){t.e("components/uni-fab/uni-fab").then(function(){return resolve(t("27a0"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/uni-image-list/uni-image-list").then(function(){return resolve(t("9863"))}.bind(null,t)).catch(t.oe)},f={components:{uniImageList:l,uniFab:s},data:function(){return{fabList:o.fabList,specialInfo:{page:"",title:"",content:""},list:[],pageSize:10,pageNum:1,hasMore:!1,type:1}},onLoad:function(n){var e=JSON.parse(null===n||void 0===n?void 0:n.info),t=e.type,a=e.page,i=e.title,o=e.content;console.log(n),this.type=parseInt(t),this.specialInfo={page:a,title:i,content:o},this.handleGetImg()},onShareAppMessage:function(){var n=this.specialInfo,e=void 0===n?{}:n,t=this.type,a=void 0===t?1:t,i=Object.assign(e,{type:a}),o=JSON.stringify(i);return{title:e.content,imageUrl:e.page,path:"/pages/special/detail?info=".concat(o),success:function(n){console.log(n)}}},onPullDownRefresh:function(){this.$refs.ImgList.refresh()},onReachBottom:function(){console.log("页码",this.pageNum),this.hasMore&&(this.pageNum=this.pageNum+1,this.handleGetImg())},methods:{choose:function(){},handleTrigger:function(e){var t=e.index;switch(t){case 0:n.navigateBack({delta:1});break;case 1:n.switchTab({url:"/pages/images/images"});break;default:n.navigateBack({delta:1});break}console.log(e)},handleGetImg:function(){var e=this;return r(i.default.mark((function t(){var o,u,c,r,s,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.type,n.showLoading({title:"加载中..."}),u=e.pageNum,c=e.pageSize,t.next=5,a.callFunction({name:"img-query",data:{pageNum:u,pageSize:c,filter:{img_id:o}}}).catch((function(e){n.hideLoading(),n.showModal({content:"查询失败，错误信息为：".concat(e.message),showCancel:!1}),console.error(e)}));case 5:r=t.sent,s=r.result.data,l=r.result,console.log("hasmore",l),e.hasMore=null===l||void 0===l?void 0:l.hasMore,e.list=e.list.concat(s),n.hideLoading();case 12:case"end":return t.stop()}}),t)})))()}}};e.default=f}).call(this,t("543d")["default"],t("a9ff")["default"])},a504:function(n,e,t){"use strict";t.r(e);var a=t("bc42"),i=t("2e46");for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t("761a");var u,c=t("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=r.exports},bc42:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a}));var a={cuButton:function(){return t.e("components/cu-button/cu-button").then(t.bind(null,"5537"))},uniImageList:function(){return t.e("components/uni-image-list/uni-image-list").then(t.bind(null,"9863"))},uniFab:function(){return t.e("components/uni-fab/uni-fab").then(t.bind(null,"27a0"))}},i=function(){var n=this,e=n.$createElement;n._self._c},o=[]}},[["462d","common/runtime","common/vendor"]]]);
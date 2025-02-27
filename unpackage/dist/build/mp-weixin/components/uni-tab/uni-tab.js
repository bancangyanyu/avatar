(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-tab/uni-tab"],{"001b":function(t,n,e){},"575d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,n){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};n.default=u},"59ee":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},r=[]},8397:function(t,n,e){"use strict";e.r(n);var u=e("59ee"),r=e("876a");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("dcf7");var i=e("828b"),c=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);n["default"]=c.exports},"876a":function(t,n,e){"use strict";e.r(n);var u=e("575d"),r=e.n(u);for(var a in u)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=r.a},dcf7:function(t,n,e){"use strict";var u=e("001b"),r=e.n(u);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-tab/uni-tab-create-component',
    {
        'components/uni-tab/uni-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("8397"))
        })
    },
    [['components/uni-tab/uni-tab-create-component']]
]);

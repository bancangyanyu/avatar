(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-picker/index"],{"2bfa":function(e,t,n){"use strict";n.r(t);var a=n("e325"),u=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=u.a},6417:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},u=[]},b785:function(e,t,n){"use strict";n.r(t);var a=n("6417"),u=n("2bfa");for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);var r=n("828b"),c=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=c.exports},e325:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"cuPicker",model:{prop:"value",event:"change"},props:{title:{type:String,default:"选择"},data:{type:Array,default:function(){return[]}},value:{type:[Number],default:-1}},data:function(){return{index:this.value}},methods:{PickerChange:function(e){var t=e.detail.value;this.data;this.index=parseInt(t),this.$emit("change",this.index)}}};t.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-picker/index-create-component',
    {
        'components/cu-picker/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b785"))
        })
    },
    [['components/cu-picker/index-create-component']]
]);

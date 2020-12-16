(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-picker/index"],{2109:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cuPicker",model:{prop:"value",event:"change"},props:{title:{type:String,default:"选择"},data:{type:Array,default:function(){return[]}},value:{type:[Number],default:-1}},data:function(){return{index:this.value}},methods:{PickerChange:function(t){var e=t.detail.value;this.data;this.index=parseInt(e),this.$emit("change",this.index)}}};e.default=a},3026:function(t,e,n){"use strict";n.r(e);var a=n("8820"),u=n("a987");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var i,c=n("f0c5"),l=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=l.exports},8820:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},a987:function(t,e,n){"use strict";n.r(e);var a=n("2109"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-picker/index-create-component',
    {
        'components/cu-picker/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3026"))
        })
    },
    [['components/cu-picker/index-create-component']]
]);

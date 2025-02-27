(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-tag/cu-tag"],{2054:function(t,n,e){"use strict";e.r(n);var r=e("2f9d"),a=e("9aa6");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("5457");var u=e("828b"),i=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=i.exports},"2eef":function(t,n,e){},"2f9d":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},a=[]},"2fdd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("646c"),a={props:{color:{type:String,default:"blue"},label:{type:[String,Number],default:"label"}},computed:{bgColor:function(){var t=this.colorList,n=(this.handleRandom,this.handleRandom(9,0));return t[n]}},data:function(){return{colorList:r.colorList}},methods:{handleClick:function(){this.$emit("click")},handleRandom:function(t,n){var e=Math.random();if(t>n){var r=[n,t];t=r[0],n=r[1]}var a=new Array(n).fill(0).map((function(t,n){return n})).sort((function(){return.5-Math.random()})).filter((function(t,n){return n<10})),o=Math.floor(e*(n-t)),u=a[o];return console.log(parseInt(u)),parseInt(u)}}};n.default=a},5457:function(t,n,e){"use strict";var r=e("2eef"),a=e.n(r);a.a},"9aa6":function(t,n,e){"use strict";e.r(n);var r=e("2fdd"),a=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-tag/cu-tag-create-component',
    {
        'components/cu-tag/cu-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("2054"))
        })
    },
    [['components/cu-tag/cu-tag-create-component']]
]);

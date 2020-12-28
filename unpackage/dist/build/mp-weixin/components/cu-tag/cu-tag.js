(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-tag/cu-tag"],{5594:function(t,n,r){"use strict";r.r(n);var e=r("fa37"),a=r.n(e);for(var o in e)"default"!==o&&function(t){r.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},6814:function(t,n,r){},"71ee":function(t,n,r){"use strict";r.r(n);var e=r("e0a2"),a=r("5594");for(var o in a)"default"!==o&&function(t){r.d(n,t,(function(){return a[t]}))}(o);r("af1c");var u,c=r("f0c5"),i=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=i.exports},af1c:function(t,n,r){"use strict";var e=r("6814"),a=r.n(e);a.a},e0a2:function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},fa37:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r("7dc8"),a={props:{color:{type:String,default:"blue"},label:{type:[String,Number],default:"label"}},computed:{bgColor:function(){var t=this.colorList,n=(this.handleRandom,9),r=0,e=this.handleRandom(n,r);return t[e]}},data:function(){return{colorList:e.colorList}},methods:{handleClick:function(){this.$emit("click")},handleRandom:function(t,n){var r=Math.random();if(t>n){var e=[n,t];t=e[0],n=e[1]}var a=new Array(n).fill(0).map((function(t,n){return n})).sort((function(){return.5-Math.random()})).filter((function(t,n){return n<10})),o=Math.floor(r*(n-t)),u=a[o];return console.log(parseInt(u)),parseInt(u)}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-tag/cu-tag-create-component',
    {
        'components/cu-tag/cu-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("71ee"))
        })
    },
    [['components/cu-tag/cu-tag-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-swiper/index-top-swiper"],{"212b":function(t,n,a){"use strict";var e=a("cf5b"),i=a.n(e);i.a},"4f8d":function(t,n,a){"use strict";a.r(n);var e=a("7ad9"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a},"78f0":function(t,n,a){"use strict";a.r(n);var e=a("9b20"),i=a("4f8d");for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);a("212b");var u,r=a("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=s.exports},"7ad9":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"index-top-swiper",props:{list:{type:Array,default:function(){return[]}},mode:{type:String,default:"aspectFill"}},data:function(){return{accessStatus:!1,testList:["https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/a5cfc26b98952bd1f27d0e9c1d4281b9.1yh1f0gq6o00.jpg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg"]}},methods:{toSeller:function(){t.navigateTo({url:"/pages/staging/buyer"})},toFactory:function(){t.navigateTo({url:"/pages/staging/factory"})},close:function(){this.accessStatus=!1},toDetail:function(n){console.log(n);var a="../../static/img/banner.png",e="../../static/img/banner1.jpg",i="../../static/img/banner4.png";n==a?this.accessStatus=!0:t.navigateTo({url:n==e?"./h5":n==i?"/pages/staging/staging":""})}}};n.default=a}).call(this,a("543d")["default"])},"9b20":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},cf5b:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-swiper/index-top-swiper-create-component',
    {
        'components/cu-swiper/index-top-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("78f0"))
        })
    },
    [['components/cu-swiper/index-top-swiper-create-component']]
]);

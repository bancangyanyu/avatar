(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-swiper/index-top-swiper"],{"4f8d":function(t,n,a){"use strict";a.r(n);var e=a("7ad9"),c=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=c.a},"78f0":function(t,n,a){"use strict";a.r(n);var e=a("b9ed"),c=a("4f8d");for(var i in c)"default"!==i&&function(t){a.d(n,t,(function(){return c[t]}))}(i);a("d6d0");var u,r=a("f0c5"),d=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"2cb215ea",null,!1,e["a"],u);n["default"]=d.exports},"7ad9":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"index-top-swiper",props:{data:{type:Array,default:function(){return["https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201211133722_f61cd.thumb.400_0.jpg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201205192440_9b781.thumb.400_0.jpg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200217122458_StUuE.thumb.1000_0.jpeg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201207153529_f6385.thumb.400_0.jpeg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201208214751_b925d.thumb.400_0.jpeg"]}},mode:{type:String,default:"a"},height:{type:[String,Number],default:412}},data:function(){return{accessStatus:!1,testList:["https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201205192440_9b781.thumb.400_0.jpg","https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg"]}},methods:{toSeller:function(){t.navigateTo({url:"/pages/staging/buyer"})},toFactory:function(){t.navigateTo({url:"/pages/staging/factory"})},close:function(){this.accessStatus=!1},toDetail:function(n){console.log(n);var a="../../static/img/banner.png",e="../../static/img/banner1.jpg",c="../../static/img/banner4.png";n==a?this.accessStatus=!0:t.navigateTo({url:n==e?"./h5":n==c?"/pages/staging/staging":""})}}};n.default=a}).call(this,a("543d")["default"])},b9ed:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var c=function(){var t=this,n=t.$createElement;t._self._c},i=[]},d6d0:function(t,n,a){"use strict";var e=a("dbd3"),c=a.n(e);c.a},dbd3:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-swiper/index-top-swiper-create-component',
    {
        'components/cu-swiper/index-top-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("78f0"))
        })
    },
    [['components/cu-swiper/index-top-swiper-create-component']]
]);

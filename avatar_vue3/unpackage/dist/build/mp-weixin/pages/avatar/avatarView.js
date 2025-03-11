"use strict";const e=require("../../common/vendor.js"),a=require("../../utils/index.js");if(!Array){(e.resolveComponent("fui-tabs")+e.resolveComponent("n-list"))()}Math||((()=>"../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js")+(()=>"../../components/list/index.js"))();const o={},t=Object.assign(o,{__name:"avatarView",setup(o){const t=e.ref([{name:"国庆"},{name:"中秋节"},{name:"圣诞"},{name:"新年"},{name:"王者"},{name:"和平精英"},{name:"情人节"},{name:"端午节"},{name:"元宵节"},{name:"其他"}]),n=e.ref([]),l=e.reactive({pageSize:20,pageNum:1}),i=e.ref(!1),s=e.ref(!1),r=e.ref(200),c=e.ref(0),d=e.ref(1);e.ref("发现一张好看的头像，快来看看吧！");const u=e.ref([]),v=e.ref(""),h=e.ref(""),g=e.ref(""),m=e.ref(-1),f=e.ref(!1);e.ref(getApp().globalData.IS_ANDROID),e.ref(e.wx$1.getSystemInfoSync().windowWidth/2),e.ref(300),e.ref(e.wx$1.getSystemInfoSync().windowWidth/2+50-2),e.ref(300),e.ref(100),e.ref(1),e.ref(0),e.ref(0),e.computed((()=>5===d.value?["text-white"]:""));const w=e.computed((()=>5===d.value?["bg-white"]:""));e.computed((()=>v.value)),e.computed((()=>ImgPath[d.value]));const x=({index:e})=>{y(e+1)},p=async(a=0)=>{e.index.showLoading({title:"加载中..."});const{pageNum:o,pageSize:t}=l,{result:{data:s},result:r}=await e.er.callFunction({name:"img-query",data:{pageNum:o,pageSize:t,img_id:a||c.value}}).catch((a=>{e.index.hideLoading(),e.index.showModal({content:`查询失败，错误信息为：${a.message}`,showCancel:!1}),console.error(a)}));i.value=null==r?void 0:r.hasMore,n.value=n.value.concat(s),console.log("shuju ",n.value),e.index.hideLoading()},y=async(a=1)=>{e.index.showLoading({title:"加载中..."});try{const{result:{data:o}}=await e.er.callFunction({name:"page-url-query",data:{type:a}}),[t]=o;t.photo_url=t&&t.photo_url?null==t?void 0:t.photo_url.split("*"):[],u.value=(null==t?void 0:t.photo_url)||"",h.value=h.value||t.avatar_url,v.value=t.page_url}catch(o){console.error(o)}finally{e.index.hideLoading()}},_=e=>{console.log("选择的头像",e),h.value=e.detail.avatarUrl},I=e=>{const{maskId:a}=e.target.dataset;m.value=a,g.value=u.value[a],f.value=!0},S=async()=>{const o=a.getCache("AD_");if(console.log("xxxxx",o),o)return void b();let t=null;e.wx$1.createRewardedVideoAd&&(t=e.wx$1.createRewardedVideoAd({adUnitId:"adunit-0efd6c94cf468f53"}),t.onLoad((()=>{e.index.showToast({icon:"none",title:"当天观看一次视频可无限次下载"})})),t.onError((e=>{console.error("激励视频光告加载失败",e)})),t.onClose((async o=>{o&&o.isEnded?(b(),a.setCache("AD_",1)):e.index.showToast({icon:"none",title:"当天观看一次视频可解锁无限次下载"})}))),t&&t.show().catch((()=>{t.load().then((()=>t.show())).catch((e=>{console.error("激励视频 广告显示失败",e)}))}))},b=async a=>{if(-1===m.value){const a=await L(h.value);return P({tempFilePath:a}),void e.index.showToast({title:"您还没选择挂件哦",duration:2e3,icon:"none"})}C()},L=a=>(e.index.showLoading({title:"加载中"}),new Promise(((o,t)=>{e.index.getImageInfo({src:a,success:a=>{console.log("获取的图片信息",a.path),e.index.hideLoading(),o(a.path)}})}))),C=async()=>{const a=e.wx$1.createSelectorQuery();a.select("#avatar-bg").boundingClientRect(),a.exec((async a=>{const o=e.wx$1.createCanvasContext("cans-id-mask");e.wx$1.getSystemInfoSync().windowWidth;const t=await L(g.value),n=await L(h.value);o.clearRect(0,0,r.value,r.value),o.drawImage(n,0,0,r.value,r.value),o.drawImage(t,0,0,r.value,r.value),await o.draw(!1,(()=>{A()}))}))},P=a=>{const{tempFilePath:o}=a;e.index.hideLoading(),e.index.saveImageToPhotosAlbum({filePath:o,success:a=>{e.index.showModal({title:"保存成功",content:"头像已经在您的相册里啦",showCancel:!1}),e.index.vibrateShort({success:()=>{console.log("vibrateShort")}})},fail:a=>{console.log("error",a),a.errMsg.indexOf("fail")&&e.index.showModal({title:"您需要授权相册权限",success:a=>{a.confirm&&e.index.openSetting({success(e){console.log("相册授权成功")},fail(e){console.log(e)}})}})}})},$=()=>{e.index.canvasToTempFilePath({x:0,y:0,height:r.value,width:r.value,destWidth:3*r.value,destHeight:3*r.value,canvasId:"cans-id-mask",success:e=>{console.log("canvas",e.tempFilePath),P(e)},fail:a=>{e.index.hideLoading()}},this)},A=()=>{e.index.showLoading({title:"保存...",mask:!0}),$()};e.onLoad((a=>{(async()=>{const a=await e.er.callFunction({name:"show-share"});s.value=a.result.data[0].show,console.log("show",a)})(),(e=>{console.log("ddddddd",e);const a=(null==e?void 0:e.item)?JSON.parse(null==e?void 0:e.item):{},{img_url:o,img_id:t}=a;h.value=o,y(),p(t)})(a)}));return(a,o)=>e.e({a:h.value,b:e.o((a=>{return o=h.value,void e.index.previewImage({current:0,urls:[o]});var o})),c:m.value>-1},m.value>-1?{d:f.value?1:"",e:g.value}:{},{f:e.o(_),g:e.n(w.value),h:e.o(S),i:e.n(w.value),j:s.value},s.value?{k:e.n(w.value)}:{},{l:e.o(x),m:e.o((e=>c.value=e)),n:e.p({scroll:!0,tabs:t.value,selectClass:"text-yellow",modelValue:c.value}),o:e.f(u.value,((a,o,t)=>({a:a,b:o,c:e.o(I,o),d:o}))),p:`url(${h.value}) no-repeat left/100%`,q:e.p({list:n.value})})}}),n=e._export_sfc(t,[["__scopeId","data-v-ec6f9056"]]);t.__runtimeHooks=2,wx.createPage(n);

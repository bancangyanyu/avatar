<template>
	<view class="main">
		<cu-img-list :data="imgList" />
	</view>
</template>

<script>
	import CuImgList from '@/components/cu-img-list/cu-img-list.vue';
	export default {
		components: {
			CuImgList
		},
		data() {  
			return { 
				imgList:[
					{type:12,title:"圣诞",content:"初雪和热咖啡麋鹿和圣诞树，新年的钟声和倒计时。所有糟糕的都是经历，所有的美好都会在未来相遇",date:"第一期",img:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201220132011_HEnjB.thumb.1000_0.jpeg",page:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201210205611_ddd33.thumb.1000_0.jpeg"},
					{type:2,title:"男生篇",content:"谁的华裳覆我肩膀",date:"第一期",img:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201221212734_1f0cf.thumb.1000_0.jpeg",page:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200119100747_KZNCw.thumb.1000_0.png"},
					{type:3,title:"女生篇",content:"谁的青春覆我华裳",date:"第一期",img:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200123171540_5PumV.thumb.1000_0.png",page:"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200909094817_jtctf.thumb.1000_0.jpg"},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200119102613_JjTvA.thumb.1000_0.png'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/2020021694105_h4rvM.thumb.1000_0.jpeg'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200122193318_HfXYC.thumb.1000_0.png'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200324085318_fmqun.thumb.1000_0.jpg'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200214222052_xfgnw.thumb.1000_0.jpeg'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200513123734_C3N3m.thumb.1000_0.jpeg'},
					
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200119101930_SECJ3.thumb.1000_0.png'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200828220041_ceda9.thumb.1000_0.jpeg'},
					// {title:"xxx",content:"xxx",date:"1233",img:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200409121925_swNnj.thumb.1000_0.jpeg'},
				]
			};
		}
	} 
</script>

<style lang="scss">

</style>

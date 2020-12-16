<template>
	<view class="main">
		<view class="top">
			<cu-swipper :data="imagesList" height="250"/>
		</view>
		<view class="center">
			<cu-bar title="头图壁纸" extra="更多" @click='onExtra'/>
			<uni-image-list :list="list" @click="choose" />
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/data.json');
	import uniImageList from '@/components/uni-image-list/uni-image-list.vue';
	import cuSearch from "@/components/cu-search/search.vue"
	import CuSwipper from '@/components/cu-swiper/index-top-swiper.vue';
	export default {
		components:{
			cuSearch,
			CuSwipper,
			uniImageList
		},
		data() {
			return {	 
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
				imagesList:[
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/a5cfc26b98952bd1f27d0e9c1d4281b9.1yh1f0gq6o00.jpg",
				],
				pageUrl:"/page/images/index"
			};
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
		},
		methods: {
			onExtra(){
				uni.navigateTo({
					url:"/pages/images/index"
				})
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
			// 模拟加载数据
			getList() {
				if (this.list.length < data.list.length) {
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						this.end = this.page * 10;
						this.list = this.list.concat(data.list.slice(this.start, this.end));
						this.start = this.end;
						uni.hideLoading();
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="scss">
.top{
	
}
.center{
	margin: 16rpx 0 132rpx;
}
</style>

<template>
	<view class="main">
		<view class="top">
			<cu-swipper :data="imagesList" height="250"/>
		</view>
		<view class="center"> 
			<cu-bar title="头像壁纸" extra="更多" @click='onExtra'/>
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
				pageSize:20,
				pageNum:1, 
				hasMore:false ,
				list: [], // 列表
				imagesList:[
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/a5cfc26b98952bd1f27d0e9c1d4281b9.1yh1f0gq6o00.jpg",
				],
				pageUrl:"/page/images/index"
			};
		},
		onLoad() {
			this.handleGetImg()
		},
		onReachBottom() {
			console.log("页码",this.pageNum);
			if (this.hasMore) {
				this.pageNum  = this.pageNum +1
				this.handleGetImg();
			}
			
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
			async handleGetImg() {
				uni.showLoading({
					title:"加载中..."
				})
				const {pageNum,pageSize} = this
				const {
					result: { data },
					result
				} = await uniCloud
					.callFunction({
						name: 'img-query',
						data: {
							pageNum,
							pageSize
						}
					})
					.catch(err => {
						uni.hideLoading();
						uni.showModal({
							content: `查询失败，错误信息为：${err.message}`,
							showCancel: false
						});
						console.error(err);
					})
				this.hasMore = result?.hasMore //云端返回的是否有更多数据
				this.list = this.list.concat(data)  //云端返回的查询数据,追加到数组datalist
				uni.hideLoading();
			},
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

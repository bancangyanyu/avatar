<template>
	<view class="content">
		<n-list :list="imageList" imgType='bg' height='700rpx'  />
	</view>
</template>

<script setup>
	import {
		onLoad, 
		onReachBottom,onPullDownRefresh
	 } from '@dcloudio/uni-app' 
	import {
		ref,
		reactive,
		computed,
		onMounted,
		onUnmounted,
	} from 'vue';
	const pageInfo = reactive({
		pageSize: 20,
		pageNum: 1
	})
	const hasMore = ref(false)
	const imageList = ref([]);
	onPullDownRefresh(()=>{
		getImageData(1) 
	})
	const getImageData = async (index=1) => {
		uni.showLoading({
			title: "加载中..."
		})
		const {
			pageNum,
			pageSize
		} = pageInfo
		const {
			result: {
				data
			},
			result 
		} = await uniCloud
			.callFunction({
				name: 'img-query',
				data: {
					pageNum, 
					pageSize,
					img_id: index,
					 pageType:'bg'
				},
			})
			.catch(err => {
				uni.stopPullDownRefresh();		
				uni.hideLoading();
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				}); 
				console.error(err);
			})
		hasMore.value = result?.hasMore //云端返回的是否有更多数据
		imageList.value = imageList.value.concat(data) //云端返回的查询数据,追加到数组datalist
		console.log("shuju ",imageList.value);
		uni.hideLoading();
		uni.stopPullDownRefresh();		
	}
	onMounted(()=>{
		getImageData() 
	})
	onReachBottom(()=>{
		if (hasMore.value) {
			pageInfo.pageNum++
			getImageData()
		} 
	}) 

</script> 

<style lang="scss" scoped>

</style>

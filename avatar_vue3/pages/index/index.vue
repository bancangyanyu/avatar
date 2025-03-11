<template>
	<view class="content">
<!-- 		<view class="search-input">
			<fui-input borderTop placeholder="请输入名称" class="input"></fui-input>
			<fui-button radius="12rpx" width='120rpx' height='60rpx' size='22'>查询</fui-button>
		</view> -->
		<view class="image-con">
			<view class="tab-list">
				<fui-tabs scroll :tabs="tabList" v-model="tabActive" @change="onTabSelect" selectClass="text-yellow" />
			</view>
			<n-list :list="imageList" />
		</view>
	</view>
</template>

<script setup>
	import {
		onReachBottom,
		onPullDownRefresh
	 } from '@dcloudio/uni-app'
	import {
		ref,
		onMounted,
		shallowRef, 
		reactive
	} from 'vue';
	const tabList = ref([])
	const tabActive = ref(0)
	const pageInfo = reactive({
		pageSize: 20,
		pageNum: 1
	})
	const hasMore = ref(false)
	const imageList = ref([]);
	onReachBottom(()=>{
		if (hasMore.value) {
			pageInfo.pageNum++
			getImageData()
		} 
	}) 
	onPullDownRefresh(()=>{
		getImageData(tabActive.value)
	})
	const getTypeData = async ()=>{
		
		const {
			result: {
				data
			},
			result
		} = await uniCloud
			.callFunction({
				name: 'img-type-query',
			})
			.catch(err => {
				uni.hideLoading();
				console.error(err);
			})
			console.log("type",data);
			tabList.value = data.map(item=>{
				return{
					name: item.img_type,
					value:item.img_id
				}
			})
	}
	
	const getImageData = async (index=0) => {
		
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
					img_id: index || tabActive.value
				},
			}) 
			.catch(err => {
				uni.hideLoading();
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				});
				console.error(err);
				uni.stopPullDownRefresh();		 
			})
		uni.stopPullDownRefresh();
		hasMore.value = result?.hasMore //云端返回的是否有更多数据
		imageList.value = imageList.value.concat(data) //云端返回的查询数据,追加到数组datalist
		console.log("shuju ",imageList.value);
		uni.hideLoading();
	}
	const onTabSelect = ({value})=>{
		console.log("点击",value);
		imageList.value = []
		pageInfo.pageNum = 1
		tabActive.value = value
		getImageData(value)
	}
	onMounted(() => {
		console.log('mounted');
		getImageData()
		getTypeData()
	});
</script>

<style lang="scss" scoped>
	$border-radius: 24rpx;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		.search-input {
			height: 100rpx;
			box-sizing: border-box;
			padding: 0 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #e9e9f0;

			::v-deep .fui-input__wrap {
				background: transparent !important;
				color: #000;
			}
		}

		.image-con {
			width: 100%;
			margin-top: 100rpx;
			min-height: calc(100vh - 100rpx);
			overflow-y: auto;
			background-color: #f2f2f8;
			.tab-list{
				position: fixed;
				background-color: #fff;
				width: 100%;
				top: 0;
				left: 0;
				z-index: 2;
			}
			// padding: 30rpx;
			// box-sizing: border-box;
		}
	}
</style>
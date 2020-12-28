<template>
	<view class="main">
		<cu-swipper />
		<cu-grid :data="gridList" class="margin-top"/>
		<cu-bar title="头像贴图" class="margin-top"/>
		<cu-share-list :data="newsList" />
	</view>  
</template> 

<script>
import CuSwipper from '@/components/cu-swiper/index-top-swiper.vue';
import CuShareList from '@/components/cu-share-list/cu-share-list.vue';
import CuGrid from '@/components/cu-grid/grid.vue';
import { gridList } from './index';
export default {
	components: {  
		CuSwipper,
		CuShareList,
		CuGrid
	},
	data() {
		return {
			gridList,
			newsList:[],
			
		};
	},
	onLoad() {
		this.init();
	},
	methods: {
		init() {
			const { getNewsList } = this;
			getNewsList();
		},
		async getNewsList(id) {
			uni.showLoading({ title: '加载中' });

			const { 
				result: { data }
			} = await uniCloud
			.callFunction({
				name: 'news-query' 
			})
			.catch(err => {
				uni.hideLoading();
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				});
				console.error(err);
			});
			uni.hideLoading();
			this.newsList = data;
			console.log(data);
		}
	}
};
</script>

<style lang="scss">
	.main{
		background-color: #f1f1f1;
		margin-bottom: 120rpx;
	}
</style>

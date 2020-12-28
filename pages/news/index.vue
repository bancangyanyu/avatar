<template>
	<view class="main bg-white">
		<view class="news bg-white">
			<view class="news-title">{{ newsInfo.title || '' }}</view>
			<view class="news-content"><parser :html="html" ref="article" use-cache>加载中...</parser></view>
		</view>
	</view>
</template>

<script>
import parser from '@/components/uni-parser/parser.vue';
export default {
	components: {
		parser 
	},
	data() {
		return {
			html: '',
			newsInfo: {}
		};
	},
	onLoad(option) {
		const { id } = option;
		console.log(option);
		this.getNewsInfo(id);
	},
	methods: {
		async getNewsInfo(id = 1) {
			uni.showLoading({ title: '加载中' });
			const { result:{data=[]}} = await uniCloud
				.callFunction({
					name: 'news-query-id',
					data: { _id: id }
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
			console.log('列表数据', data)
			const [newsInfo = {}] = data
			this.newsInfo = newsInfo
			this.html = newsInfo?.content
		}
	}
};
</script>

<style lang="scss">
.news {
	padding: 0 30rpx 30rpx;
	.news-title {
		text-align: center;
		padding: 20rpx 0;
		margin-bottom: 20rpx;
		height: 60rpx;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 60rpx;
	}
}
</style>

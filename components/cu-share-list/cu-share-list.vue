<template>
	<view class="article-list ">
		<view v-for="(item, index) in data" :key="index" class="href">
			<article-item :data="item" />
		</view>
	</view>
</template>

<script>
import ArticleItem from './list-item.vue';
export default {
	name: 'article',
	components: {
		ArticleItem
	},
	props: {
		data: {
			type: Array,
			default: () => [
			
			]
		}
	},
};
</script>
<style lang="scss" scoped>
.article-list {
	.href {
		padding: 20rpx 2rpx;
		cursor: pointer;
		max-height: 150rpx;
		border-bottom: 1rpx solid rgba(178, 186, 194, 0.15);
		background-color: white;
		&:hover {
			// background-color: rgba(243, 243, 243, 0.466);
		}
	}
}
</style>

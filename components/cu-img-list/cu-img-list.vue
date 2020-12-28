<template>
	<view class="img-list ">
		<view v-for="(item, index) in data" :key="index" class="href">
			<img-item :data="item" />
		</view>
	</view>
</template>

<script>
import ImgItem from './list-item.vue';
export default {
	name: 'article',
	components: {
		ImgItem
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
	$border-radius:15rpx;
.img-list {
	padding: 0rpx 20rpx;
	.href {
		padding: 0 2rpx;
		cursor: pointer;
		margin: 20rpx 0;
		border-bottom: 1rpx solid rgba(178, 186, 194, 0.15);
		background-color: white;
		height: 100%;
		border-radius: $border-radius;
		&:hover {
			// background-color: rgba(243, 243, 243, 0.466);
		}
	}
}
</style>

<template>
	<view >
		<view class="cu-tag-list" >
			<cu-tag :label="item.label" v-for="(item, index) in list" :key="index" class="cu-tag-item"/>
		</view>
	</view>
</template> 
 
<script>
import cuTag from '@/components/cu-tag/cu-tag.vue';
export default {
	components:{
		cuTag
	},  
	data() {
		return{ 
			list: [{ label: '动漫' }	,{ label: '风景' },{ label: '男头' },{ label: '女头' },{ label: '可爱' }]
		}
	}
	
};
</script>

<style lang="scss" scoped >
	.cu-tag-list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 30rpx ;
		.cu-tag-item {
			margin: 2rpx 5rpx;
		}
		.cu-tag-item{
			text-align: center;
			height: 60rpx;
			width: calc(100vw/8)
		}
	}
</style>

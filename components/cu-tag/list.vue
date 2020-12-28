<template>
	<view class="cu-tag-list" >
		<block v-for="(item, index) in list" :key="index">
			<cu-tag :label="item.img_type" class="cu-tag-item" @click="handleClick(item.img_id)" /> 
		</block>
	</view> 
</template>  

<script>
import cuTag from '@/components/cu-tag/cu-tag.vue';
export default {
	components:{
		cuTag
	},  
	props:{
		list:{
			type:Array,
			default:()=>[]
		}
	},
	data() {
		return{ 
			
		}
	},
	methods: { 
		handleClick(e) {
			// const { id } = e.currentTarget
			console.log("click",e); 
			this.$emit("click",e)
		}
	},
}
</script>

<style lang="scss" scoped >
	.cu-tag-list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 15rpx ;
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

<template>
	<view class="cu-modal bottom-modal" :class="showModal?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white">
				<view class="action text-green" @tap="hide">确定</view>
				<!-- <view class="action text-blue" @tap="hide">取消</view> -->
			</view>
			<view class="padding-xl">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'cu-modal',
		data() {
			return {
				showModal:false
			};
		},
		methods:{
			show(){
				this.showModal = true
			},
			hide(){
				this.showModal = false
			}
		}
		
	}
</script>

<style lang="scss">

</style>

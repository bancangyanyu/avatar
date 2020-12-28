<template>
	<view>
		<cu-button type="default" @click="handleClick(1)">上传类型</cu-button>
		<cu-button type="default" @click="handleClick(2)">上传图片</cu-button>
	</view>
</template>

<script>
	import cuButton from "@/components/cu-button/cu-button.vue"
	export default {
		components:{
			cuButton
		},
		data() {
			return { 
				
			}; 
		},
		methods: {
			handleClick(upload){
				const type = 1
				switch (upload){
					case 1:
						uni.navigateTo({ 
							url:`../update/update?type=${type}`
						})
						break;
					case 2:
						uni.navigateTo({ 
							url:`../update/update?type=${type}`
						})
						break;
					default:
						break;
				}
				

			}
		},
	}
</script>

<style lang="scss">

</style>

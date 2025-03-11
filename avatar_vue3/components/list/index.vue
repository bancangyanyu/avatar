<template>
	<view class="img-list">
		<view class="waterfalls-box" >
			<image v-for="(item, index) in list" class="waterfalls-list-image" mode="aspectFill" 
				:src="item[imageSrcKey] || ' '" :key="item[idKey]" :id="'waterfalls-list-id-' + item[idKey]"
				@click="handleClick(item,index)" :style="{ height: height}">
			</image>
		</view> 
	</view> 
</template>
<script setup>
	import {
		ref,
		defineProps,
		onMounted
	} from 'vue'
	const $emit = defineEmits('click')
	const porps = defineProps({
		list: {
			type: Array,
			required: true
		},
		// 列表渲染的 key 的键名，值必须唯一，默认为 id
		idKey: {
			type: String,
			default: '_id'
		},
		// 图片 src 的键名
		imageSrcKey: {
			type: String,
			default: 'img_url'
		},
		imgType:{
			type: String,
			default: 'img'
		},
		height:{
			type: String,
			default: '300rpx' 
		}
	})
	const navigate = (url) => {
		const pages = getCurrentPages(); // 获取当前页面栈
		const currentLevel = pages.length; // 当前页面层级

		if (currentLevel >= 2) {
			// 如果当前层级超过 2 层，使用 redirectTo 替代 navigateTo
			uni.redirectTo({
				url: url
			});
		} else {
			// 如果当前层级小于 2 层，正常使用 navigateTo
			uni.navigateTo({
				url: url
			});
		}
	}
	const handleClick = (item, index) => {

		$emit('click', item)
		console.log("预览", [item, index]);
		const {
			img_url,
			img_id
		} = item
		const data = JSON.stringify(item)
		if(porps.imgType==='bg'){
			navigate(`/pages/bg/bgView?item=${data}`)
			return
		}else{
			navigate(`/pages/avatar/avatarView?item=${data}`)
		}
		// handlePreview(index) 
	}
	const handlePreview = (idx) => {
		const list = porps.list.map(item => item[porps.imageSrcKey])
		// list：图片 url 数组
		if (list && list.length > 0) {
			uni.previewImage({
				current: list[idx], //  传 Number H5端出现不兼容 
				urls: list
			});
		}
	}
</script>
<style lang="scss" scoped>
	// 这里可以自行配置
	$border-radius: 24rpx;

	.img-list {
		padding: 30rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
	}

	.waterfalls-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: flex-start;
		gap: 30rpx;
		width: 100%;

		.waterfalls-list-image {
			width: 47.5%;
			will-change: transform;
			display: block; 
			border-radius: $border-radius;

			&.single {
				border-radius: $border-radius;
			}
		}
	}
</style>
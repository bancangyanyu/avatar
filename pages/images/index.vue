<template>
	<view class="main">
		<view class="top">
			<cu-search/>
		</view>
		<view class="center">
			<cu-tag-list/>
		</view>
		<view class="bottom">
			<uni-image-list :list="list" @click="choose" />
		</view>
		<view class="footer">
			<uni-label-card/>
		</view>
	</view> 
</template>
  
<script>
	
	const data = require('@/common/json/data.json');
	import cuTagList from '@/components/cu-tag/list.vue'
	import cuSearch from "@/components/cu-search/search.vue"
	import uniLabelCard from '@/components/uni-label/index.vue'
	import uniImageList from '@/components/uni-image-list/uni-image-list.vue';
	export default {
		components:{
			cuSearch,
			uniLabelCard,
			uniImageList,
			cuTagList
		},
		data() { 
			return {
				page: 1,
				start: 0,
				end: 0, 
				list: [], // 列表
			};
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
		},
		methods: {
			choose(item) {
				console.log(item)
			},
			// 模拟加载数据
			getList() {
				if (this.list.length < data.list.length) {
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						this.end = this.page * 10;
						this.list = this.list.concat(data.list.slice(this.start, this.end));
						this.start = this.end;
						uni.hideLoading();
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="scss">
.main{
	.footer{
		width: 100vw;
		position: fixed;
		bottom: 16rpx;
		left: 0;
	}
	.top{
		
	}
	.center{
		
	}
	.bottom{ 
		// padding-bottom: 320rpx;
	}
}
</style>
 
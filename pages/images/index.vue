<template>
	<view class="main">
		<!-- <view class="top"><cu-search /></view> -->
		<view class="center">
			<!-- <cu-tab :values="TabNav" @clickItem="handleTabClick" ></cu-tab> -->
			<cu-tag-list @click="handleTagClick"  :list="TypeList"/></view>
		<view class="bottom"><uni-image-list :list="list" @click="choose" single ref="ImgList" v-if="list.length>0"/></view>
		<!-- <view class="footer"> -->
			 <uni-fab
				:content="fabList"
				direction="vertical"
				@trigger="handleTrigger"
			/>
		<!-- </view> -->
	</view>
</template>  

<script>
import cuTagList from '@/components/cu-tag/list.vue';
import cuSearch from '@/components/cu-search/search.vue';
import uniLabelCard from '@/components/uni-label/index.vue';
import uniImageList from '@/components/uni-image-list/uni-image-list.vue';
import uniFab from "@/components/uni-fab/uni-fab.vue"
import cuTab from "@/components/cu-tab/tab-nav.vue"
import { fabList } from "./index.js"
export default { 
	components: {
		cuSearch, 
		uniLabelCard,
		uniImageList,
		uniFab,
		cuTagList,
		cuTab
	},
	data() {
		return {
			pageSize: 20,
			pageNum: 1,
			hasMore: false,
			list: [], // 列表
			type: 1,
			fabList,
			TypeList:[],
			TabNav:[],
			tabNavcurrent:0
		};
	},
	onLoad() {
		this.getTypeList()
		this.handleGetImg();
	},
	onPullDownRefresh() {
		this.$refs.ImgList.refresh();
		// 重新获取渲染列表
	},
	onReachBottom() {
		console.log('页码', this.pageNum);
		if (this.hasMore) {
			this.pageNum = this.pageNum + 1;
			this.handleGetImg();
		}
	},
	methods: {
		handleTabClick(e){
			const { currentIndex } = e
			this.tabNavcurrent = currentIndex
			console.log(e);
		},
		async getTypeList(){
			const {
				result: { data },
				result
			} = await uniCloud
				.callFunction({
					name: 'img-type-query',
				})
			this.TabNav = data.map(item=>item.img_type)
			this.TypeList = data
		},
		handleTrigger(e){
			const { index} =e
			switch (index){
				case 0:
				uni.navigateBack({
					delta:1
				})
					break;
				default:
				uni.navigateBack({
					delta:1
				})
					break;
			}
			console.log(e);
		},
		handleTagClick(e) {
			this.type = e;
			this.pageNum = 1;
			this.list = [];
			// this.$refs.ImgList.refresh()
			this.$nextTick(() => {
				this.handleGetImg();
			});
			console.log('dianji', e);
		},
		choose(item) {
			console.log(item);
		},
		// 模拟加载数据
		async handleGetImg() {
			const { type } = this;
			uni.showLoading({
				title: '加载中...'
			});
			const { pageNum, pageSize } = this;
			const {
				result: { data },
				result
			} = await uniCloud
				.callFunction({
					name: 'img-query',
					data: {
						pageNum,
						pageSize,
						filter: {
							img_id: type
						}
					}
				})
				.catch(err => {
					uni.hideLoading();
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					}); 
					console.error(err);  
				});
			console.log('hasmore', result);
			this.hasMore = result?.hasMore; //云端返回的是否有更多数据
			this.list = this.list.concat(data); //云端返回的查询数据,追加到数组datalist
			uni.hideLoading();
		}
	}
};
</script>

<style lang="scss">
.main {
	min-height: 100vh;
	.footer {
		width: 100vw;
		position: fixed;
		bottom: 16rpx;
		left: 0;
	}
	// .top {
	// }
	// .center {
	// }
	.bottom {
		height: 100%;
		padding-bottom: 140rpx;
	}
}
</style>

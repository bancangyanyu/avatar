<template>
	<view class="main">
		<view class="top">
			<view class="img">
				<image :src="specialInfo.page" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						{{ specialInfo.title }}
					</view>
					<view class="info">
						{{ specialInfo.content }}
					</view>
				</view>
			</view>
			<cu-button color="red" open-type="share" >分享</cu-button>
		</view>
		<view class="bottom">
			<uni-image-list :list="list" 
							@click="choose" 
							single 
							cols="2"
							ref="ImgList" v-if="list.length>0"/>
		</view>
		<uni-fab
			:content="fabList"
			direction="vertical"
			@trigger="handleTrigger"
		/>
	</view>
</template>

<script>
	import uniFab from "@/components/uni-fab/uni-fab.vue"
	import uniImageList from '@/components/uni-image-list/uni-image-list.vue';
	import { fabList } from "./index.js"
	export default {
		components: {
			uniImageList,
			uniFab
		},
		data() {
			return {
				fabList,
				specialInfo:{
					page:"",
					title:'',
					content:""
				},
				list: [], // 列表
				pageSize: 10,
				pageNum: 1,
				hasMore: false,
				type:1
			};
		},
		onLoad(option) {
			const {type ,page,title,content} = JSON.parse(option?.info) 
			console.log(option);
			this.type = parseInt(type) 
			this.specialInfo = {
				page,
				title,
				content
			}
			this.handleGetImg();
		},
		onShareAppMessage() {
			const { specialInfo = {},type=1 } = this;
			const params = Object.assign(specialInfo,{ type })
			const data = JSON.stringify(params)
			return {
				title: specialInfo.content,
				imageUrl: specialInfo.page, 
				path: `/pages/special/detail?info=${data}`,
				success: res => {
					console.log(res);
				}
			};
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
			choose(){
				
			},
			handleTrigger(e){
				const { index} =e
				switch (index){
					case 0:
					uni.navigateBack({
						delta:1
					})
						break;
					case 1:
					uni.switchTab({
						url:"/pages/images/images"
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
		},
	}
</script>

<style lang="scss">
$color:#ffffff;
.main{
	background-color: #1e1314;
}

.top{
	background:linear-gradient(to bottom,#fff 0%,#fff 36%,#000 100%);
	.img{
		image{
			width: 100%;
			-webkit-mask : -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
		}
		.content{
			bottom: 0; 
			padding: 10rpx 20rpx ;
			z-index: 10000;
			margin-top: -200rpx;
			position: relative;
			
			.title{
				color: $color;
				font-size: 45rpx;
				font-weight: bold;
				
			}
			.info{ 
				color: $color;
			}
		}
	}

}
.bottom{
	
}

</style>

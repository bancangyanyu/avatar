<template>
	<view class="bg-content">
		<image :src="bgUrl" mode="scaleToFill" class="bg" ></image>
		<image src="/static/chat-bg.png" mode="" class="chat-bg" v-if="showBg"></image>
		<view class="action-btn-con">
			<view class="action-btn">
				<view class="item" @click="handleAction(1)">
					返回
				</view>
				<view class="item" @click="handleAction(3)" :class="{ active:showBg}">
					切换背景
				</view>
				<view class="item" @click="handleAction(2)">
					下载 
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad, 
		onReachBottom
	 } from '@dcloudio/uni-app'
	import {
		ref,
		computed,
		onMounted,
		onUnmounted,
	} from 'vue';
	const bgUrl = ref('')
	const showBg = ref(true)
	const handleAction = async(type=1)=>{
		if(type===1){
			uni.navigateBack()
		}else if(type===2){
			if(bgUrl.value){
				const data = await getImageInfo(bgUrl.value)
				handleDownLoad(data)
			}
		}else{
			showBg.value = !showBg.value
		}
	}
	const getImageInfo = (imgUrl) => {
		uni.showLoading({
			title: "加载中"
		}) 
		return new Promise((reslove, reject) => {
			uni.getImageInfo({
				src: imgUrl,
				success: (image) => {
					console.log("获取的图片信息", image.path)
					uni.hideLoading()
					reslove(image.path)
				}
			})
		})
	}
	const handleDownLoad = (data) => {
		uni.hideLoading();
		uni.saveImageToPhotosAlbum({
			filePath: data,
			success: saveData => {
				uni.showModal({
					title: '保存成功',
					content: '聊天背景图已经在您的相册里啦',
					showCancel: false
				})
				uni.vibrateShort({
					success: () => {
						console.log('vibrateShort');
					}
				});
			},
			fail: error => {
				console.log("error",error); 
				if (error.errMsg.indexOf('fail')) {
					uni.showModal({
						title: '您需要授权相册权限',
						success: res => {
							if (res.confirm) {
								uni.openSetting({
									success(res) {
										console.log('相册授权成功');
									},
									fail(res) {
										console.log(res);
									}
								});
							}
						}
					});
				}
			}
		});
	}
	onLoad(options=>{
		handleOption(options); 
	})
	const handleOption = (option)=>{
		const data = option?.item ? JSON.parse(option?.item) : {};
		const {
			img_url,
			img_id
		} = data; 
		bgUrl.value = img_url; 
	}
</script>

<style scoped lang="scss">
.bg-content{
	position: relative;
	overflow: hidden;
	width: 100%;
	.chat-bg{
		position: absolute;
		top: 0;
		left: 0; 
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%; 
		z-index: 1;
	}
	// background-size:  100% 100%;
	.bg{
		width: 100vw;
		height: 100vh;
		z-index: 0;
	}
	.action-btn-con{
		position: absolute;
		bottom: 40rpx;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		z-index: 1;
		.action-btn{
			width: 90%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item{
				width: 200rpx;
				height: 70rpx;
				text-align: center;
				color: #fff;
				border-radius: 30rpx;
				background-color: #000;
				display: flex;
				align-items: center; 
				justify-content: center;
				&.active{
					background-color: #ff5500;
				}
			}
		}
	}
}
</style>

<template>
	<view class="content">
		<view class="avatar-container grid justify-center" id="avatar-container" >
			<view class="avatar-bg-border" @click.stop="handlePreview(avatarUrl)">
				<image  class="bg avatar-bg" id="avatar-bg" :src="avatarUrl"  />
			</view>
			<image v-if="currentMaskId > -1" class="mask flip-horizontal" :class="{ maskWithBorder: showBorder }"
				id="mask" :src="maskPic" style="height:400rpx;width:400rpx;" />
		</view>
		<view class="canvas-wrapper">
			<canvas class="cans-id-mask" canvas-id="cans-id-mask"
				style="height:400rpx;width:400rpx;margin-left: auto;margin-right: auto;" />
		</view>
		<view class="btn-con">
			<view class="action-wrapper">
				<button id="btn-my-avatar" class="cu-btn normal action-btn bg-yellow shadow" open-type="chooseAvatar"
					@chooseavatar="onChooseavatar" :class="btnColor">我的头像</button>
				<button id="btn-save" class="cu-btn round action-btn pink shadow" @click="draw"
					:class="btnColor">保存头像</button>
				<button id="btn-save" class="cu-btn round action-btn blue shadow" open-type="share"
					:class="btnColor" v-if='showShare'>分享朋友</button>
			</view>
		</view>

		<view class="scrollView">
			<view class="tab-list">
				<fui-tabs scroll :tabs="tabList" v-model="tabActive" @change="onTabSelect" selectClass="text-yellow" />
			</view>
			<scroll-view class="mask-scroll-view" scroll-y="true">
				<view :style="{background: `url(${avatarUrl}) no-repeat left/100%`}" v-for="(item, index) in imgList" :key="index" class="image-view" style="display: inline-flex;">
					<image class="imgList" :src="item" :data-mask-id="index" @tap="changeMask" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
	 } from '@dcloudio/uni-app'
	import {
		ref,
		computed,
		onMounted,
		onUnmounted,
	} from 'vue';
	import {
		AvatarUrl,
		PageUrl, 
		fabList
	} from './index.js';

	const tabList = ref(
		[{
			name: "国庆",
		},
		{
			name: "中秋节",
		},
		{
			name: "圣诞",
		},
		{
			name: "新年",
		},
		{
			name: "王者",
		},
		{
			name: "和平精英",
		},
		{
			name: "情人节",
		},
		{
			name: "端午节",
		},
		{
			name: "元宵节",
		},
		{
			name: "其他",
		}
	]);
	const showShare = ref(false)
	const imageSize = ref(200)
	const tabActive = ref(0); 
	const avatarType = ref(1);
	const imageInfo = ref('发现一张好看的头像，快来看看吧！');
	const imgList = ref([]);
	const pageUrl = ref('');
	const avatarUrl = ref('');
	const maskPic = ref('');
	const currentMaskId = ref(-1);
	const showBorder = ref(false);
	const isAndroid = ref(getApp().globalData.IS_ANDROID);

	const maskCenterX = ref(wx.getSystemInfoSync().windowWidth / 2);
	const maskCenterY = ref(300);
	const handleCenterX = ref(wx.getSystemInfoSync().windowWidth / 2 + 50 - 2);
	const handleCenterY = ref(300);
	const maskSize = ref(100);
	const scale = ref(1);
	const rotate = ref(0);
	const rotateY = ref(0);

	const imgInfoColor = computed(() => {
		return avatarType.value === 5 ? ['text-white'] : '';
	});

	const btnColor = computed(() => {
		return avatarType.value === 5 ? ['bg-white'] : '';
	});

	const pageImage = computed(() => {
		return pageUrl.value;
	});

	const imgPath = computed(() => {
		return ImgPath[avatarType.value];
	});

	const handleOption = (option) => {
		console.log("ddddddd",option);
		const data = option?.item ? JSON.parse(option?.item) : {};
		const {
			img_url
		} = data;
		avatarUrl.value = img_url; 
		handelGetPageUrl();
	}; 
    const onTabSelect = ({index})=>{
		handelGetPageUrl(index+1);
	}
	const getShowData = async ()=>{
		const data = await uniCloud.callFunction({
			name: 'show-share',
		});
		showShare.value = data.result.data[0].show
		if(!showShare.value){
			wx.hideShareMenu({
				success: function () {
				  console.log("成功隐藏分享按钮")
				},
				fail: function () {
				  console.log("隐藏分享按钮失败")
				} 
			})
		}

		console.log("show",data);
	}
	const handelGetPageUrl = async (type = 1) => {
		uni.showLoading({
			title: '加载中...'
		});
		try {
			const {
				result: {
					data
				}
			} = await uniCloud.callFunction({
				name: 'page-url-query',
				data: { 
					type
				}
			});
			const [pageData] = data;
			pageData.photo_url = pageData&&pageData.photo_url ? pageData?.photo_url.split('*') : []
			imgList.value = pageData?.photo_url || '';
			avatarUrl.value = avatarUrl.value || pageData.avatar_url;
			pageUrl.value = pageData.page_url;
		} catch (err) {
			console.error(err);
		} finally {
			uni.hideLoading();
		}
	};

	const onChooseavatar = (e) => {
		console.log("选择的头像", e);
		avatarUrl.value = e.detail.avatarUrl;
	};

	const changeMask = (e) => {
		const {
			maskId
		} = e.target.dataset;
		currentMaskId.value = maskId;
		maskPic.value = imgList.value[maskId];
		showBorder.value = true;
	};

	const draw = async () => {
		if (currentMaskId.value === -1) {
			const data = await getImageInfo(avatarUrl.value)
			handleSaveSuccess({tempFilePath:data})
			uni.showToast({
				title: '您还没选择挂件哦',
				duration: 2000,
				icon: 'none'
			});
			return;
		}
		handleDrawImage();
	};
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
	const handleDrawImage = async () => {

		const query = wx.createSelectorQuery();
		query.select('#avatar-bg').boundingClientRect();
		query.exec(async (res) => {
			const pc = wx.createCanvasContext('cans-id-mask');
			const windowWidth = wx.getSystemInfoSync().windowWidth;
			const path = await getImageInfo(maskPic.value);
			const avatarPath = await getImageInfo(avatarUrl.value);
			pc.clearRect(0, 0, imageSize.value, imageSize.value);
			pc.drawImage(avatarPath, 0, 0, imageSize.value, imageSize.value);
			pc.drawImage(path, 0, 0, imageSize.value, imageSize.value);
			await pc.draw(false, () => {
				saveCans();
			});
		});
	};
	const handleSaveSuccess = (res) => {
		const {
			tempFilePath
		} = res;
		uni.hideLoading();
		uni.saveImageToPhotosAlbum({
			filePath: tempFilePath,
			success: saveData => {
				uni.showModal({
					title: '保存成功',
					content: '头像已经在您的相册里啦',
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
	const handleSaveImage = () => {
		uni.canvasToTempFilePath({
				x: 0,
				y: 0,
				height: imageSize.value,
				width: imageSize.value,
				destWidth: imageSize.value * 3,
				destHeight: imageSize.value * 3,
				canvasId: 'cans-id-mask',
				success: res => {
					console.log('canvas', res.tempFilePath);
					handleSaveSuccess(res);
				},
				fail: res => {
					uni.hideLoading();
				}
			},
			this
		);
	}
	// 保存头像
	const saveCans = () => {
		uni.showLoading({ 
			title: '保存...',
			mask: true
		});
		handleSaveImage();
	}
	onLoad(options=>{ 
		getShowData()
		handleOption(options); 
		// 若在开发者工具中无法预览广告，请切换开发者工具中的基础库版本
		// 在页面中定义插屏广告
		let interstitialAd = null
		// 在页面onLoad回调事件中创建插屏广告实例
		if (wx.createInterstitialAd) {
		  interstitialAd = wx.createInterstitialAd({
			adUnitId: 'adunit-c1116f19272e97a2'
		  })
		  interstitialAd.onLoad(() => {})
		  interstitialAd.onError((err) => {
			console.error('插屏广告加载失败', err)
		  })
		  interstitialAd.onClose(() => {})
		}
		// 在适合的场景显示插屏广告
		if (interstitialAd) {
		  interstitialAd.show().catch((err) => {
			console.error('插屏广告显示失败', err)
		  })
		}
	})
	const handlePreview = (url) => { 
		uni.previewImage({
			current: 0, //  传 Number H5端出现不兼容 
			urls: [url]
		});
	}
</script> 
<script>
	export default{
		// onShareAppMessage(res){
		// 	return {
		// 	  title: "发现一张好看的头像，快来看看吧！",
		// 	  path: '/pages/avatar/avatar'
		// 	}
		// } 
	}
</script>
<style lang="scss" scoped>
	$border-radius: 20rpx;
	$boder: 12rpx;
	.content {
		// height: calc(10vh); 
		overflow-x:hidden; 
		height: 100%;
		.scrollView {
			width: 100%;
			height: calc(100vh - 460rpx);
			.tab-list {
				height: 100rpx;
			}
		}
		.mask-scroll-view {
			display: flex;
			flex-wrap: wrap;
			padding: 30rpx;
			box-sizing: border-box;
			overflow-y: auto;
			height: calc(100vh - 660rpx);
			.image-view{
				height: 130rpx;
				// width: 130rpx;
				.imgList{ 
					height: 130rpx;
					width: 130rpx;
					border: 4rpx solid white;
					border-radius: 10rpx;
					z-index: 2;
				}
			}
		}
	}

	.avatar-container {
		height: 400rpx;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		.avatar-bg-border {
			width: 400rpx;
			height: 400rpx;
			.avatar-bg {
				position: absolute;
				z-index: 0;
				height: 400rpx;
				width: 400rpx;
				background-color: #fff;
			}
		}
	}

	.btn-con{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		.action-wrapper {
			width: 600rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			.cu-btn {
				height: 60rpx;
				line-height: 60rpx;
				background-color: #55aaff;
				color: #fff;
				font-size: 24rpx;
				margin: 0 ;
				&.blue{
					background-color: #55aaff;
				}
				&.pink{
					background-color: #ff00ff;
				}
				&.normal{
					background-color: #000000;
				}
			}
		}
	}
	.mask {
		height: 100px;
		width: 100px;
		position: absolute;
		top: 0;
	}
	.cans-id-mask {
		position: absolute;
		top: 0;
		left: 1000px;
	}
	.my-text {
		font-size: 40rpx;
	}
</style>
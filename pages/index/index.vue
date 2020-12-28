<template>
	<view class="container" :style="{ height: '100vh' }">
		<image class="page-bg" :style="{ height: '100vh' }" mode="scaleToFill" :src="pageImage"></image>
		<view class="avatar-container grid justify-center" id="avatar-container" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
			<view class="avatar-bg-border"><image @touchstart="touchAvatarBg" class="bg avatar-bg" id="avatar-bg" :src="avatarUrl" /></view>
			<image
				v-if="currentMaskId > -1"
				class="mask flip-horizontal"
				:class="{ maskWithBorder: showBorder }"
				id="mask"
				:src="maskPic"
				:style="{
					top: maskCenterY - maskSize / 2 - 2 + 'px',
					left: maskCenterX - maskSize / 2 - 2 + 'px',
					transform: 'rotate(' + rotate + 'deg)' + 'scale(' + scale + ')' + 'rotateY(' + rotateY + 'deg)'
				}" 
			/>
			<text class="cuIcon-full handle circle" :class="{ hideHandle: !showBorder }" id="handle" :style="{ top: handleCenterY - 10 + 'px', left: handleCenterX - 10 + 'px' }" />
		</view>
		<view><canvas class="cans-id-mask" canvas-id="cans-id-mask" style="height:270px;width:270px;margin-left: auto;margin-right: auto;" /></view>
		<view class="flex-sub text-center">
			<view class="solid-bottom">
				<text class="text-yellow text-bold my-text text-shadow-info" :class="imgInfoColor">{{ imageInfo }}</text>
			</view>
		</view>
		<view class="grid justify-around action-wrapper">
			<view class="grid col-1">
				<button id="btn-my-avatar" class="cu-btn round action-btn bg-yellow shadow " open-type="getUserInfo" @getuserinfo="getUserInfo" :class="btnColor">我的头像</button>
			</view>
			<view class="grid col-2"><button id="btn-save" class="cu-btn round action-btn bg-yellow shadow" @click="draw" :class="btnColor">保存头像</button></view>
			<view class="grid col-3"><button id="btn-save" class="cu-btn round action-btn bg-yellow shadow" open-type="share" :class="btnColor">分享朋友</button></view>
		</view>
		<view class="ad-wraper"><!-- <ad unit-id="adunit-e52230f6b15ba325a"></d> --></view>
		<scroll-view class="scrollView mask-scroll-view" scroll-x="true">
			<view v-for="(item, index) in imgList" :key="index" style="display: inline-flex;"><image class="imgList" :src="item" :data-mask-id="index" @tap="changeMask" /></view>
		</scroll-view>

		<!-- </view> -->
		<view class="avatar-list-bg"></view>
		<!-- <uni-fab :content="fabList" direction="vertical" vertical="top" @trigger="handleTrigger" /> -->
	</view>
</template>
<script>
const ImgPath = {
	1: 'china',
	2: 'chris',
	3: 'holiday',
	4: 'new',
	5: 'love'
};
import { range, AvatarUrl, PageUrl } from './index.js';
import uniFab from '@/components/uni-fab/uni-fab.vue';
import { fabList } from './index.js';
export default {
	components: {
		uniFab
	},
	data() {
		return {
			fabList,
			AvatarUrl,
			PageUrl,
			duration: 15,
			windowHeight: 0,
			cansWidth: 270, // 宽度 px
			cansHeight: 270, // 高度 px

			currentMaskId: -1,
			showBorder: false,
			maskCenterX: wx.getSystemInfoSync().windowWidth / 2,
			maskCenterY: 250,
			cancelCenterX: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
			cancelCenterY: 200,
			handleCenterX: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
			handleCenterY: 300,
			maskSize: 100,
			scale: 1,
			rotate: 0,
			rotateY: 0, // 值180时，则水平翻转
			mask_center_x: wx.getSystemInfoSync().windowWidth / 2,
			mask_center_y: 250,
			cancel_center_x: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
			cancel_center_y: 200,
			handle_center_x: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
			handle_center_y: 300,
			scaleCurrent: 1,
			rotateCurrent: 0, 
			touch_target: '',
			start_x: 0,
			start_y: 0,
			avatarType: 1,
			avatarPath: '',
			imageInfo: '把袜子翻过来，里朝外，挂起来，整个世界都是你的礼物',
			imgList: [], // 第二个参数是个数
			pageUrl: '',
			avatarUrl: '',
			maskPic:'',
			isAndroid: getApp().globalData.IS_ANDROID,
		};
	},
	computed: {
		
		pageImage() {
			const { pageUrl } = this;
			return pageUrl;
		},
		imgPath() {
			const { avatarType } = this;
			return ImgPath[avatarType];
		},
		// avatarImage: {
		// 	get() {
		// 		const { avatarUrl } = this;
		// 		this.avatarPath = avatarUrl
		// 		return avatarUrl
		// 	},
		// 	set(val) {
		// 		this.avatarPath = val;
		// 	}
		// },
		imgInfoColor() {
			const { avatarType } = this;
			const color = avatarType === 5 ? ['text-white'] : '';
			return color;
		},
		btnColor() {
			const { avatarType } = this;
			const color = avatarType === 5 ? ['bg-white'] : '';
			return color;
		}
	},
	onLoad(option) {
		// #ifdef MP-WEIXIN
		wx.showShareMenu({
			menus: ['shareAppMessage', 'shareTimeline'],
			success(res) {
				console.log(res);
			},
			fail(e) {
				console.log(e);
			}
		});
		// #endif
		this.handleOption(option);
		console.log(option);
	},
	onShareAppMessage() {
		const { imageInfo, avatarUrl } = this;
		return {
			title: "把袜子翻过来，里朝外，挂起来，整个世界都是你的礼物",
			imageUrl: avatarUrl,
			path: '/pages/index/index',
			success: res => {
				console.log(res);
			}
		};
	},
	methods: {
		handleTrigger(e) {
			const { index } = e;
			switch (index) {
				case 0:
					uni.navigateBack({
						delta: 1
					});
					break;
				default:
					uni.navigateBack({
						delta: 1
					});
					break;
			}
			console.log(e);
		},
		async handelGetPageUrl(type) {
			uni.showLoading({
				title: '加载中...'
			});
			const {
				result: { data }
			} = await uniCloud
				.callFunction({
					name: 'page-url-query',
					data: {
						type
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
			const [pageData] = data;
			const { photo_url } = pageData;
			pageData.photo_url = photo_url.split('*');
			this.imgList = pageData.photo_url;
			this.avatarUrl = pageData.avatar_url;
			this.pageUrl = pageData.page_url;
			console.log('查询的数据', pageData);
			uni.hideLoading();
		},
		handleOption(option) {
			const data = option?.item ? JSON.parse(option?.item) : {};
			const { avatarType = 1, info } = data;
			this.avatarType = avatarType;
			this.imageInfo = info;
			this.handelGetPageUrl(avatarType);
			this.windowHeight = getApp().globalData.windowHeight;
		},
		touchAvatarBg() {
			this.showBorder = false;
		},
		touchStart(e) {
			console.log('e.target.id', e.target.id);
			if (e.target.id == 'mask') {
				this.touch_target = 'mask';
				this.showBorder = true;
			} else if (e.target.id == 'handle') {
				this.touch_target = 'handle';
			} else {
				this.touch_target = '';
			}

			if (this.touch_target != '') {
				this.start_x = e.touches[0].clientX;
				this.start_y = e.touches[0].clientY;
			}
		},
		touchMove(e) {
			const current_x = e.touches[0].clientX;
			const current_y = e.touches[0].clientY;
			const moved_x = current_x - this.start_x;
			const moved_y = current_y - this.start_y;
			if (this.touch_target == 'mask') {
				this.maskCenterX = this.maskCenterX + moved_x;
				this.maskCenterY = this.maskCenterY + moved_y;
				this.cancelCenterX = this.cancelCenterX + moved_x;
				this.cancelCenterY = this.cancelCenterY + moved_y;
				this.handleCenterX = this.handleCenterX + moved_x;
				this.handleCenterY = this.handleCenterY + moved_y;
			}
			if (this.touch_target == 'handle') {
				this.handleCenterX = this.handleCenterX + moved_x;
				this.handleCenterY = this.handleCenterY + moved_y;
				this.cancelCenterX = 2 * this.maskCenterX - this.handleCenterX;
				this.cancelCenterY = 2 * this.maskCenterY - this.handleCenterY;
				const diff_x_before = this.handle_center_x - this.mask_center_x;
				const diff_y_before = this.handle_center_y - this.mask_center_y;
				const diff_x_after = this.handleCenterX - this.mask_center_x;
				const diff_y_after = this.handleCenterY - this.mask_center_y;
				const distance_before = Math.sqrt(diff_x_before * diff_x_before + diff_y_before * diff_y_before);
				const distance_after = Math.sqrt(diff_x_after * diff_x_after + diff_y_after * diff_y_after);
				const angle_before = (Math.atan2(diff_y_before, diff_x_before) / Math.PI) * 180;
				const angle_after = (Math.atan2(diff_y_after, diff_x_after) / Math.PI) * 180;
				this.scale = (distance_after / distance_before) * this.scaleCurrent;
				this.rotate = angle_after - angle_before + this.rotateCurrent;
			}
			this.start_x = current_x;
			this.start_y = current_y;
		},
		touchEnd(e) {
			this.mask_center_x = this.maskCenterX;
			this.mask_center_y = this.maskCenterY;
			this.cancel_center_x = this.cancelCenterX;
			this.cancel_center_y = this.cancelCenterY;
			this.handle_center_x = this.handleCenterX;
			this.handle_center_y = this.handleCenterY;
			this.touch_target = '';
			this.scaleCurrent = this.scale;
			this.rotateCurrent = this.rotate;
		},
		// 获取用户信息
		getUserInfo(result) {
			if (result.detail.errMsg !== 'getUserInfo:ok') {
				uni.showModal({
					title: '获取用户头像失败',
					content: '用户信息仅用于创建新的图片，请放心使用',
					showCancel: false
				});
				return;
			}
			const { userInfo } = result.detail;
			userInfo.avatarUrl = userInfo.avatarUrl.replace('132', '0'); // 使用最大分辨率头像 959 * 959
			console.log('头像', userInfo.avatarUrl);
			uni.showLoading({
				title: '加载中...'
			});
			uni.downloadFile({
				url: userInfo.avatarUrl,
				success: res => {
					uni.hideLoading();
					this.avatarUrl = res.tempFilePath;
				}, 
				fail: e => {
					console.log(e);
					this.handleImageModal();
				}
			});
		},
		handleImageModal() {
			uni.hideLoading();
			uni.showModal({
				title: '图片加载超时',
				content: '网络异常，请稍后重试',
				success: res => {
					if (res.confirm) {
						this.downloadAvatarAndPaintAll();
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		// 选择挂件
		async changeMask(e) {
			const {maskId } = e.target.dataset
			this.currentMaskId = maskId
			const maskPic = this.imgList[maskId]
			this.maskPic = maskPic 
			this.showBorder = true;
		},
		// 绘制头像
		draw() {
			if (this.currentMaskId == -1) {
				uni.showToast({
					title: '您还没选择挂件哦',
					duration: 2000,
					icon: 'none'
				});
				return;
			}
			this.handleDrawImage();
		},
		getImageInfo(imgUrl) {
			 uni.showLoading({
			 	title:"加载中"
			 })
			return new Promise((reslove,reject) => {
				uni.getImageInfo({
					src: imgUrl,
					success:  (image)=> {
						console.log("获取的图片信息",image.path)
						uni.hideLoading()
						reslove(image.path)
					}
				})
			})
		},
		async handleDrawImage() { 
			const {  scale, rotate, isAndroid, cansWidth, cansHeight ,currentMaskId} = this;
			let { mask_center_x, mask_center_y } = this;
			// 创建节点选择器
			// 口罩中心位置的计算是从屏幕左上角开始，所以我们需要获取头像图片的位置，来得到口罩相对头像的位置
			const query = wx.createSelectorQuery();
			// this.getImageInfo(avatarUrl, 'avatarUrl'); 
			query.select('#avatar-bg').boundingClientRect();
			query.exec( async (res) => {
				//res就是 所有标签为#的元素的信息的数组
				mask_center_x = mask_center_x - res[0].left;
				mask_center_y = mask_center_y - res[0].top;
				const pc = wx.createCanvasContext('cans-id-mask');
				const windowWidth = wx.getSystemInfoSync().windowWidth;
				const mask_size = 100 * scale;
				const path = await this.getImageInfo(this.maskPic);
				const avatarPath = await this.getImageInfo(this.avatarUrl);
				pc.clearRect(0, 0, cansWidth, cansHeight);
				pc.drawImage(avatarPath, 0, 0, cansWidth, cansHeight);
				pc.translate(mask_center_x, mask_center_y);
				pc.rotate((rotate * Math.PI) / 180);
				if (isAndroid) {
					this.rotateY == 180 && pc.scale(-1, 1);
				}
				pc.drawImage(path, -mask_size / 2, -mask_size / 2, mask_size, mask_size);
				await pc.draw(false,()=>{  
					this.saveCans();
				}); 
			});
		},
		handleSaveSuccess(res) {
			const { tempFilePath } = res;
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
					if (error.errMsg.indexOf('fail')) {
						this.hadleSaveErrorModal();
					}
				}
			});
		},
		hadleSaveErrorModal() {
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
		},
		handleSaveImage() {
			uni.canvasToTempFilePath(
				{
					x: 0,
					y: 0,
					height: this.cansWidth,
					width: this.cansHeight,
					destWidth: this.cansWidth * 3,
					destHeight: this.cansHeight * 3,
					canvasId: 'cans-id-mask',
					// fileType: 'png',
					success: res => {
						console.log('canvas', res.tempFilePath);
						this.handleSaveSuccess(res);
					},
					fail: res => {
						uni.hideLoading();
					}
				},
				this
			);
		},
		// 保存头像
		saveCans() {
			uni.showLoading({
				title: '保存...',
				mask: true
			});
			this.handleSaveImage();
		}
	}
};
</script>

<style lang="scss" scoped>
$border-radius: 20rpx;
$boder: 12rpx;
.avatar-container {
	height: 290px;
	width: 100%;
	margin-top: 185rpx;
	margin-left: auto;
	margin-right: auto;
}

.avatar-bg-border {
	border: $boder solid white;
	border-radius: 10px;
	width: 282px;
	height: 282px;
}

.avatar-bg {
	position: absolute;
	z-index: 0;
	height: 270px;
	width: 270px;
	background-color: #fff;
	border-radius: $border-radius;
}

.action-wrapper {
	padding-top: 30rpx;
	padding-left: 50rpx;
	padding-right: 50rpx;
	font-weight: 800;
}

.share-wrapper {
	padding-top: 10rpx;
	padding-left: 100rpx;
	padding-right: 100rpx;
	font-weight: 800;
}

.mask {
	height: 100px;
	width: 100px;
	position: absolute;
	top: 100px;
	border: 3px solid rgba(255, 255, 255, 0);
	border-radius: $border-radius;
}

.maskWithBorder {
	border: dashed 3px white;
}

.hideHandle {
	display: none;
}

.circle {
	border-radius: 50%;
	font-size: 15px;
	color: #000;
	line-height: 25px;
	text-align: center;
	background: #fff;
}

.handle,
.cancel {
	position: absolute;
	z-index: 1;
	width: 25px;
	height: 25px;
	background-color: white;
	color: black;
}

.scrollView {
	width: 100%;
	position: absolute;
	bottom: 30rpx;
	white-space: nowrap;
}

.infoView {
	width: 95%;
	position: absolute;
	bottom: 85px;
	white-space: nowrap;
	background-color: white;
	margin: 10px;
	padding: 1px 5px;
	border-radius: 5px;
	white-space: pre-wrap;
}

.imgList {
	height: 65px;
	width: 65px;
	border: 4rpx solid white;
	border-radius: 5px;
	margin: 10px 10px 10px 10px;
	z-index: 9999999;
}

.cans-id-mask {
	position: absolute;
	top: 2000px;
	left: 1000px;
}

.flip-horizontal {
	-moz-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	-o-transform: scaleX(-1);
	transform: scaleX(-1);
}

.my-text {
	font-size: 40rpx;
}

.ad-wraper {
	min-height: 110rpx;
	margin: 30px auto 0;
	width: 700rpx;
}
.avatar-list-bg {
	width: 100%;
	height: 230rpx;
	position: absolute;
	bottom: 0;
	left: 0;
	background: rgba($color: #090001, $alpha: 0.4);
}
button {
	z-index: 999;
}
</style>

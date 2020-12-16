<template>

	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				{{title}}
			</view>
			<view class="action">
				{{imgList.length}}/2
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view> 
				<view class="solids" 
					 @tap="ChooseImage" 
					 v-if="imgList.length<2">
					<text :class="imgList.length==1?'cuIcon-reverse':'cuIcon-positive'">{{imgList.length==1?"副":"正"}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	import { baseUrl } from '@/apis/request.js'
	export default {
		name:'cu-upload',
		props:{
			title:{
				type:String,
				default:''
			},

		},
		data() {
			return {
				imgList:[],
				imgUrl:[]
			};
		},
		computed: {
			...mapState(['token']),
		
		},
		methods:{
			ChooseImage(e) {
				// common/upload
				console.log(e);
				if(!this.token){
					this.$api._showLogin()
					return
				}else{
					uni.chooseImage({
							count: 1, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							sourceType: ['album'], //从相册选择
							success: (res) => {
					
								console.log('ChooseImage',res);
								uni.uploadFile({
									url: `${baseUrl()}common/upload`, //仅为示例，非真实的接口地址
									filePath: res.tempFilePaths[0],
									name: 'file',
									success: (uploadFileRes) => {
						
										console.log('上传成功',uploadFileRes);
										const {fileName,code} = JSON.parse(uploadFileRes.data)
										if(code==200){
											if (this.imgList.length != 0) {
												this.imgList = this.imgList.concat(res.tempFilePaths)
											} else {
												this.imgList = res.tempFilePaths
											}
											if (this.imgUrl.length != 0) {
												this.imgUrl = this.imgUrl.concat([fileName])
											} else {
												this.imgUrl = [fileName]
											}
											this.$emit('change',this.imgUrl)
										}else{
											this.$msg('服务器错误，上传失败')
										}
					
										
										
									},
									 fail: (res) => {
									 	console.log('上传失败',res);
									 }
								});  
							},
							fail: (res) => {
								console.log('上传失败');
							}
						});
					
				}
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除？',
					cancelText: '再看看',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>

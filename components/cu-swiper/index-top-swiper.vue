<template>
	<view class="">
		<swiper class="screen-swiper square-dot skeleton skeleton-rect"
				:indicator-dots="true" 
				:circular="true"
				:autoplay="true" 
				interval="5000" 
				duration="500"
				:style="{ height:` ${height}rpx`}">
				<swiper-item @click="toDetail(item)"
					class="swiper-item"
					v-for="item in data">
					<image :src="item"
							id="img"
						   mode="aspectFill" ></image>
				</swiper-item>   
		</swiper> 
	</view>

</template>

<script>
	export default {
		name:'index-top-swiper',
		props:{
			data:{
				type:Array,
				default:()=>[
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201211133722_f61cd.thumb.400_0.jpg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201205192440_9b781.thumb.400_0.jpg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20200217122458_StUuE.thumb.1000_0.jpeg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201207153529_f6385.thumb.400_0.jpeg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201208214751_b925d.thumb.400_0.jpeg"
				]
			},
			mode:{
				type:String,
				default:'a'
			},
			height:{
				type:[String,Number],
				default:412
			}
		},
		data() { 
			return {
				accessStatus:false,
				testList:[ 
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn/avatar/cdn/20201205192440_9b781.thumb.400_0.jpg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg",
				] 
			};
		},
		methods:{
			toSeller(){
				uni.navigateTo({
					url:'/pages/staging/buyer'
				})
			}, 
			toFactory(){
				uni.navigateTo({
					url:'/pages/staging/factory'
				})
			},
			close(){
				this.accessStatus = false
			},
			toDetail(e){ 
				console.log(e);
				let banner = "../../static/img/banner.png";
				let banner1 = "../../static/img/banner1.jpg";
				let banner4 = "../../static/img/banner4.png";

				if(e == banner){
					this.accessStatus = true;
				}else{
					
					uni.navigateTo({
						url:e == banner1?'./h5':e == banner4?'/pages/staging/staging':''
					}) 
				}
				// window.location.href = 'http://' +'iiucloud.com'
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	swiper{
		
		.swiper-item{
			// padding: ;
		}
	}
	.cu-dialog{
		width: 568rpx;
		border-radius: 8rpx;
		background-color:transparent; 
		padding: 20rpx;
		.title{
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-weight: bold;
			text{
				font-weight: normal;
				margin-top: 5rpx;
				font-size: 25rpx;
				color: #cccccc;
			}
		}
		.modal-content{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 10rpx;
			
			padding: 20rpx;
			.left {
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				image{
					height: 90rpx;
					margin-bottom: 20rpx;
				}
				text{
					
					color: #f77f1e;
					font-size: 25rpx;
				}

			}
			.right{
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				image{
					height: 90rpx;
					margin-bottom: 20rpx;
				}
				text{
					color: #0079ee;
					font-size: 25rpx;
				}
			}
		}
		.close{
			// background-color:transparent; 
			color: #FFF;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 999;
			text{
				font-size: 70rpx;
				margin-top: 52rpx;
			}
		}
		.cu-content{
			border-radius: 8rpx;
			padding: 20rpx 3rpx ;
		}
	}
</style>

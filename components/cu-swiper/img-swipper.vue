<template>
	<view class="">
		<swiper class="card-swiper" 
				:class="'square-dot'" 
				:indicator-dots="true" 
				:circular="true"
				:autoplay="true"  
				interval="5000" 
				duration="500" 
				indicator-color="#8799a3"
				indicator-active-color="#0081ff"
				@change="cardSwiper"
				:style="{ height:` ${height}rpx`}">
				<swiper-item @click="toDetail(item)"
					class="swiper-item"
					:key="index"
					:class="cardCur==index?'cur':''"
					v-for="(item,index) in data">
					<view class="swiper-item">
						<image :src="item"
								id="img"
							   :mode="mode" />
					</view>
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
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/a5cfc26b98952bd1f27d0e9c1d4281b9.1yh1f0gq6o00.jpg",
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg",
				]
			},
			mode:{
				type:String,
				default:'aspectFill'
			},
			height:{
				type:[String,Number],
				default:412
			}
		},
		data() { 
			return {
				cardCur: 0,
				accessStatus:false,
				testList:[ 
					"https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/a5cfc26b98952bd1f27d0e9c1d4281b9.1yh1f0gq6o00.jpg",
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
			cardSwiper(e) { 
				this.cardCur = e.detail.current
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
			image{
				// padding: 0 20rpx ;
			}
		}
	}
</style>
<template>
	<view>
		<view class="cu-list grid" :class="['col-' + column,border?'':'no-border']">
			<view class="cu-item "  
				  v-for="(item,index) in data" 
				  :key="index" 
				  @click="toUrl(item.url,item)"> 
				<view :class="[item.icon?item.icon:'cuIcon-' + item.cuIcon,'text-' + item.color]" >
					<view class="cu-tag badge" v-if="item.badge!=0&&item.badge">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
 import {
 	mapState,
 } from 'vuex' 
 
	export default {

		name:'grid',
		computed: {
			...mapState(['token'])
		}, 
		props:{
			column:{
				type:Number,
				default:4
			},
			border:{ 
				type:Boolean,
				default:false
			},
			data:{
				type:Array,
				default:()=>{[]}
			},
			// 权限控制
			access:{
				type:[Number,String],
				default:10
			}
		},
		data() {
			return {
				
			};
		},

		methods:{
			toUrl(url,item){
				if(url=='/pages/user/user'){
					const timer = setTimeout(_=>{
						this.$msg('请点击意见反馈按钮进行反馈')
					},500)
					uni.switchTab({
						url: url,
						success: res => {},
						fail: () => {},
						complete: () => {}
					}); 
				}else{
					const itemStr = JSON.stringify(item)
					const {switchTab} = item
					if(switchTab){
						uni.switchTab({
							url: `${url}?item=${itemStr}`,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}else{
						uni.navigateTo({
							url: `${url}?item=${itemStr}`,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}

				}

			}
		}
	}
</script>

<style lang="scss">


</style>

<template>
	<view>
		<view class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">{{title}}</view></view>
				<view class="content article-content">
					<image :src="img"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 
							{{content}}
						</view>
			
					</view>
				</view>
			</view>
		</view>	 
	</view>
</template>

<script>
	export default {
		name:'notice-item',
		props:{
			title:{
				type:String,
				default:''
			},
			content:{
				type:String,
				default:''
			},
			img:{
				type:String,
				default:''
			},
		}
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>

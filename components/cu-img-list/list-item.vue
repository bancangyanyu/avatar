<template>
	<navigator :url="`/pages/special/detail?info=${JSON.stringify(data)}`" >
		<view class="content main-content" :style="{backgroundImage: `url(${data.img})`}">
			<view class="context-box">
				<view class="list-info">
					<view class="info-title">{{ data.title || '' }}</view>
					<view class="info-content">
						{{ data.content || '' }}
					</view>
					<view class="info-date">
						{{ data.date || '' }}
					</view>
				</view>
			</view>
			<view class="list-action"></view>
		</view>
	</navigator>
</template>

<script>
export default {
	name: 'ImgItem',
	components: {},
	props: {
		data: {
			type: Object,
			default: () => {
				[];
			}
		}
	}
};
</script>
<style lang="scss" scoped>
$border-radius:15rpx;
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	border-radius: $border-radius;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}
.context-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: $border-radius;
	.list-info {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-bottom: 20rpx;
		.info-title {
			max-width: 558rpx;
			font-size: 50rpx;
			font-weight: bold;
			font-style: italic;
			text-shadow: 1rpx 2rpx 1rpx #ffffff;
		}
		.info-content {
			font-size: 34rpx;
			padding: 10rpx 0 10rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			text-shadow: 1rpx 2rpx 1rpx #ffffff;
			white-space: nowrap;
			// font-weight: bold;
		}
		.info-date{
			width: 120rpx;
			height: 40rpx;
			display: flex; 
			align-items: center;
			justify-content: center;
			background-color: rgba($color: #eee, $alpha: .6);
			border-radius: $border-radius;
			padding: 0 4rpx;
			font-size: 24rpx;  
		}
	}
	.list-img {
		// padding-left: 20rpx;
		width: 30%;
		height: 100%;
		image {
			float: right;
			width: 120rpx;
			height: 120rpx;
		}
	}
	.list-action {
	}
}
.ul {
	padding: 0;
	margin: 0;
}
</style>

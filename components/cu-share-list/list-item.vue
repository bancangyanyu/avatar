<template>
	<navigator :url="`/pages/news/index?id=${data._id}`">
		<view class="content main-content">
			<view class="context-box">
				<view class="list-info">
					<view class="info-title">
						<view class="ul">
							<view class="username item">{{ data.username || '' }}</view>
							<view class="date item">{{ data.date || '' }}</view>
							<view class="tag item">{{ data.tag || '' }}</view>
						</view>
					</view>
					<view class="info-content">
						<view class="info-url">{{ data.title || '' }}</view>
					</view>
				</view>
				<view class="list-img"><image :src="data.img_url" alt="主图" mode="aspectFill"/></view>
			</view>
			<view class="list-action"></view>
		</view>
	</navigator>
</template>

<script>
export default {
	name: 'ArticleItem',
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
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
}
.context-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.list-info {
		display: flex;
		flex-direction: column;
		width: 70%; 
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		.info-title {
			max-width: 558rpx;
			color: #b2bac2;
			font-size: 32rpx;
			.ul {
				display: flex;
				.item {
					margin-left: 20rpx;
					&:first-child {
						margin-left: 0;
					}
				}
				.username {
					&:not(:last-child):after {
						content: '·';
						margin: 0 20rpx;
						color: #b2bac2;
					}
				}
			}
		}
		.info-content {
			font-size: 32rpx;
			padding: 10rpx 0 10rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			.info-url {
				color: #2e3135;
				text-decoration: none;
				&:link {
					// color: #2e3135;
				}
				&:hover {
					text-decoration: underline;
				}
			}
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

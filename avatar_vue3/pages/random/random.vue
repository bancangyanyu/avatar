<template>
	<view class="content ">
		<image :src="avatarUrl" alt="" class="avatar" :class="{ flashing: isFlashing }" @click="handlePreview(avatarUrl)"/>
		<span class="text">抽取今日幸运头像</span>
		<div class="random" @click="rollDice">
			<image src="/static/r_r.png" alt="" class="dice" :class="{ rolling: isRolling }" />
		</div>
	</view>
</template>

<script setup> 
	import {
		onMounted,
		ref
	} from 'vue'
	const avatarUrl = ref('')
	const imgList = ref('')
	const isRolling = ref(false); // 控制色子是否正在滚动
	const isFlashing = ref(false)
	onMounted(_ => {
		getImageData()
	})
	const handlePreview = (url) => {
		uni.previewImage({
			current: 0, //  传 Number H5端出现不兼容 
			urls: [url]
		});
	}
	const getImageData = async () => {
		const {
			result: {
				data
			},
			result
		} = await uniCloud
			.callFunction({
				name: 'img-query',
				data: {
					pageNum: 0,
					pageSize: 10,
					img_id: 0
				},
			})
		imgList.value = data
		console.log("imgList", data);
		getRandomAvatar()
	}
	// 随机抽取头像
	const getRandomAvatar = () => {
		if (imgList.value.length === 0) {
			console.error('头像列表为空');
			return;
		}
		const randomIndex = Math.floor(Math.random() * imgList.value.length);
		avatarUrl.value = imgList.value[randomIndex].img_url; // 假设头像地址在 avatarUrl 字段
		isRolling.value = false; // 动画结束后停止
		isFlashing.value = false; // 触发头像闪烁
	};
	// 色子转动事件
	const rollDice = () => {
		isRolling.value = true; // 触发动画
		isFlashing.value = true; // 触发头像闪烁
		setTimeout(() => {
			getRandomAvatar(); // 随机抽取头像
		}, 1000); // 动画持续时间（1秒） 
	}
</script>

<style lang="scss" scoped>
	
	@keyframes roll {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes flash {
			0%, 100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5; // 闪烁效果
			}
		}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40rpx;
		padding-top: 100rpx;

		.text {
			color: red;
			font-weight: blod;
		}

		.avatar {
			width: 500rpx;
			height: 500rpx;
			border-radius: 50%;
			&.flashing {
				animation: flash 1s infinite; // 闪烁动画
			}
		}

		.random {
			width: 150rpx;
			height: 150rpx;
			cursor: pointer;
			position: relative;
			.dice {
				width: 100%;
				height: 100%; 
				transition: transform 1s ease; // 动画持续时间
				&.rolling {
					animation: roll 1s forwards;
				}
			}
		} 
	}

</style>
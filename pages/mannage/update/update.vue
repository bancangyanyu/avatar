<template>
	<view class="main">
		<cu-picker :data="TypeData" v-model="formData.type" />
		<form-item title="背景:" :maxlength="128" inputPlace="请输入背景URL" v-model="formData.page_url" />
		<form-item title="默认头图" :maxlength="128" inputPlace="请输入背景URL" v-model="formData.avatar_url" />
		<cu-bar title="头图贴纸:" />
		
		<view class="bg-white padding-xl">
			<view class="cuIcon-add bg-green" @click="handleAdd" />
			<view class="avatar-list">
				<block v-for="(item, index) in avatarList" :key="item.value">
					<view class="avatar">
						<cu-input class="avatar-input" v-model="item.value"/>
						<view class="cuIcon-close bg-red avatar-action" @click="handleClear(index)" v-if="index > 0" />
					</view>
				</block>
			</view>
		</view>
		<cu-button @click="handleSubmit" /> 
	</view>
</template>

<script>
import cuBar from '@/components/cu-bar/cu-bar.vue';
import cuInput from '@/components/cu-input/cu-input.vue';
import cuPicker from '@/components/cu-picker/index.vue';
import formItem from '@/components/cu-form/form-item.vue';
export default {
	name: 'UpdateMannage',
	components: {
		formItem,
		cuPicker,
		cuBar
	},
	data() {
		return {
			formData: {
				page_url: '',
				avatar_url: '',
				photo_url: '',
				type: 0
			},
			avatarListData:[],
			avatarList: [1],
			TypeData: ['国庆','圣诞','新年', '中秋','情人节', '国风']
		};
	},
	onLoad(option) {
		console.log(option);
		const { type = ""} = option
		this.formData.type =parseInt(type) 
		type && this.handelGetPageUrl(parseInt(type) )
	},
	methods: {
		async handelGetPageUrl(type) {
				uni.showLoading({
					title:"加载中..."
				})
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
				const [pageData] = data
				const { photo_url } = pageData 
				const urlList = photo_url.split("*")
				const url = urlList.map(item=>{return {value:item}})
				this.avatarList = url
				console.log("请求的接口",pageData );
				this.formData.avatar_url = pageData.avatar_url
				this.formData.page_url = pageData.page_url
				this.formData.id = pageData._id ||""
				console.log("查询的数据",url);
				uni.hideLoading();
			},
		
		onPickerChange() {},
		
		handleAdd() {
			this.avatarList.push({value:""});
		},
		handleClear(index) {
			if (index > 0) {
				this.avatarList.splice(index, 1);
			}
		},
		
		handleSubmit() { 
			uni.showLoading({
				title: '处理中...'
			});
			const { formData = {} ,avatarList=[]} = this;
			const list = avatarList.map(itrm=>item.value)
			formData.photo_url = list.join("*")
			uniCloud 
				.callFunction({
					name: 'page-url-update',
					data: formData
				})
				.then(res => {
					uni.hideLoading();
					const formData = {
						page_url: '',
						avatar_url: '',
						photo_url: '',
						type: 0
					}
					uni.showModal({
						content: `添加数据为：${JSON.stringify(res)}`,
						showCancel: false
					});
					this.formData = formData
					this.avatarList = []
					console.log(res);
				})
				.catch(err => {
					uni.hideLoading();
					uni.showModal({
						content: `添加数据失败，错误信息为：${err.message}`,
						showCancel: false
					});
					console.error(err);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

$icon-width: 45rpx;
.cuIcon-add {
	width: $icon-width;
	height: $icon-width;
	font-size: 33rpx;
	text-align: center;
	@extend .flex-center;
}
.cuIcon-close {
	@extend .flex-center;
	width: 45rpx;
	height: 45rpx;
}

.avatar-list {
	display: flex;
	flex-direction: column;
	margin-top: 10rpx;
	.avatar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1rpx dashed #f1f1f1;
		padding: 0.5rpx;
		padding-right: 10rpx;
		.avatar-input {
			width: 95%;
		}
		.avatar-action {
		}
	}
}
</style>

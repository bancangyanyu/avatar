<template>
	<view class="main">
		<cu-picker :data="TypeData" v-model="formData.img_id" />
		<cu-bar title="头图贴纸:" />
		<view class="bg-white padding-xl">
			<view class="avatar-list">
				<view class="avatar">
					<cu-input class="avatar-input" v-model="formData.img_url"/>
				</view>
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
				img_url: '',
				img_id: 0
			},
			TypeData: ["热门",'漫头','男头','女头', '气质','小清新', '情头']
		};
	},
	onLoad(option) {
		// console.log(option);
		// const { type = ""} = option
		// this.formData.img_id =parseInt(type) 
		// type && this.handelGetPageUrl(parseInt(type) )
	},
	methods: {
		async handelGetPageUrl(img_id) {
				uni.showLoading({
					title:"加载中..."
				})
				const {
					result: { data }
				} = await uniCloud
					.callFunction({ 
						name: 'avatar-url-add',
						data: {
							...this.formData
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
			const { formData = {} } = this;
			uniCloud 
				.callFunction({
					name: 'avatar-url-add',
					data: formData
				})
				.then(res => {
					uni.hideLoading();
					const formData = {
						img_url: '',
						img_id: '',
					}
					uni.showModal({
						content: `添加数据为：${JSON.stringify(res)}`,
						showCancel: false
					});
					this.formData = formData
					console.log("添加数据为",res);
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

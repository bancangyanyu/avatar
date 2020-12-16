<template>
	<view class="cu-form-group margin-top">
		<view class="title text-bold">{{ title }}</view>
		<picker @change="PickerChange" :value="index" :range="data">
			<view class="picker">{{ index > -1 ? data[index] : '请选择' }}</view>
		</picker>
	</view>
</template>

<script>
export default { 
	name: 'cuPicker',
	model: {
		prop: 'value',
		event: 'change' 
	},
	props: {
		title: {
			type: String,
			default: '选择'
		},
		data: {
			type: Array,
			default: () => []
		},
		value: {
			type: [Number],
			default: -1
		}
	},
	data() {
		return {
			index:this.value
		};
	},
	methods: {
		PickerChange(e) {
			const {value} = e.detail
			const { data } = this;
			this.index = parseInt(value) ; 
			this.$emit('change', this.index);
		}
	}
};
</script>

<style lang="scss"></style>

<template>
	<view class="cu-form-group cu-form-item">
		<input type="text" @input="handleChange" v-model="value"/>
	</view>
</template>

<script>
export default {
	name: 'CuInput',
	model: {
		prop: 'value',
		event: 'change'
	},
	props:{
		value:{
			type:[String,Number],
			default:""
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		handleChange(e) {
			const { value } = e.target
			this.value = value
			console.log("input", value);
			this.$emit('change', this.value);
		}
	}
};
</script>

<style lang="scss"></style>

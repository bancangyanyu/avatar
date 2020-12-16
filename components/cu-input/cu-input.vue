<template>
	<view class="cu-form-group cu-form-item"><input type="text" @input="handleChange" /></view>
</template>

<script>
export default {
	name: 'CuInput',
	model: {
		prop: 'value',
		event: 'change'
	},
	data() {
		return {};
	},
	methods: {
		handleChange(e) {
			const { value } = e.target
			console.log("input",value);
			this.$emit('change', value);
		}
	}
};
</script>

<style lang="scss"></style>

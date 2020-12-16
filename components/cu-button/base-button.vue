<template>
	<button
		@click="hanldeClick"
		class="base-button cu-btn"
		:disabled="disabled"
		:class="[light ? 'light' : link ? 'link' : 'dark',"bg-"+ bgColor]"
		:loading="loading"
	><slot/></button>
</template>

<script>
export default {
	name: 'BaseButton',
	computed: {}, 
	props: {
		size: {
			type: [String, Number],
			default: 14
		},
		color: {
			type: String,
			default: '#025D60'
		},
		light: {
			type: Boolean,
			default: false
		},
		link: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		},
		showLine: {
			type: Boolean,
			default: false
		},
		btnTxt: {
			type: String,
			default: '确定'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		bgColor: {
			type: String,
			default: "yellow"
		}
	},
	data() {
		return {
			downColor: '#F0F9EB',
			defaultColor: '#F6F5FF',
			darkColor: '#6181D7',
			lightDownColor: '#F0F9EB',
			lightDefaultColor: '#E1FFFC',
			lightColor: '#60A8A8'
		};
	},
	methods: {
		hanldeClick() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

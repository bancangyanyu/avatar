<template>
	<view class="cu-tag radius xl" :class="[`bg-${bgColor}`]" @click="handleClick">
		<text>{{ label }}</text>
	</view>
</template>

<script>
import { colorList } from './index.js'
export default {
	props: {
		color: {
			type: String,
			default: 'blue'
		},
		label: {
			type: [String, Number],
			default: 'label'
		}
	},
	computed: {
		bgColor() {
			const {colorList,handleRandom}  = this
			const max = 9;
			const min = 0;
			const random = this.handleRandom(max,min)
			// console.log(random,colorList[random]);
			return colorList[random]
		}
	},
	data() {
		return {
			colorList
		};
	},
	methods: {
		handleClick(){
			this.$emit("click")
		},
		handleRandom(min, max) {
			const random = Math.random()
			if (min > max) {
				[min, max] = [max, min];
			} 
			const array = new Array(max)
			    .fill(0)
			    .map((v,i)=>i)
			    .sort(()=>0.5 - Math.random())
			    .filter((v,i)=>i<10);
			const randomData =  Math.floor(random * (max - min))
			const randomNum = array[randomData]
				console.log(parseInt(randomNum));
			return parseInt(randomNum);
		}
	}
};
</script>

<style lang="scss">
.cu-tag {
	text {
		width: 100%;
	}
}
</style>

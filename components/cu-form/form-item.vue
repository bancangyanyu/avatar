<template>
		<view class="cu-form-group cu-form-item" :class="row?'row':'column'">
			<view class="left">
				<text class="cuIcon-xin text-red" v-if="need"></text> 
				<view class="title text-bold" :class="[`text-${titleColor}`]">{{title}}</view>
			</view>
			<view class="right">
				<block v-if="!showInput">
					<input :placeholder="inputPlace?inputPlace:'请输入'+title"
							@input="handleInput"
							:value='isUpperCase?toUpper(value):value||""'  
		 					:maxlength="maxlength"
							:type="inputType" 
							:style="{textAlign:inputRight?'right':'left'}"/>
					<button class='cu-btn bg-white ' 
							v-if="showButton"
							@click="captcha">{{sendTxt}}</button>
				</block> 
				<block v-else-if="showInputCar">
					<view class="car-input">
						<slot >
						</slot>
					</view>

				</block> 

			</view>

		</view>
</template> 

<script> 
	export default {
		name:'formItem', 
		behaviors: ['uni://form-field'], 
		props:{
			titleColor:{
				type:String,
				default:''
			},
			showInputCar:{ 
				type:Boolean,
				default:false
			},
			isUpperCase:{
				type:Boolean,
				default:false
			},
			row:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:''
			},
			showInput:{
				type:Boolean,
				default:false
			},
				
			inputRight:{
				type:Boolean,
				default:false
			},
			showButton:{
				type:Boolean,
				default:false
			},
			inputType:{
				type:String,
				default:'text'
			},
			value:{
				type:[String , Number], 
				default:''
			},

			inputPlace:{
				type:String,
				default:''
			},
			maxlength:{
				type:Number
			},
			need:{
				type:Boolean ,
				default:true
			},
			sendTxt:{
				type:String,
				default:'获取验证码'
			},
			list:{
				type:Array,
				default:()=>[]
			}
		},
		filters:{
			numToStr(num) {
			  num = num.toString()
			  return num
			}
		},
		computed:{
			ranglist(){
				const list = this.list.map(item=>{
					
					return item.equipName
				})
				return list
			}
		},
		data() { 
			return { 
				inputValue:this.value,
				index:0
			};
		},
		methods:{ 
			toUpper(value){
				return value.toUpperCase()
			},
			PickerChange(e) {
				console.log(e);
				this.$emit('picker',e.detail.value)
				this.index = e.detail.value
			},
			isNumber(value) {
			  return !Number.isNaN(Number(value))
			},
			handleInput(e){  
				this.$emit('input',e.target.value||'')
			},
			captcha(){
				this.$emit('click')
			},

			
		}

	}
</script>

<style lang="scss">
	// .cu-form-group:last-child{ 
	// 	border-top: none !important;
	// }
	.cu-form-group{ 
		border-bottom: 1rpx solid #eee !important;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 25rpx;
		.left{
			display: flex;
			align-items: center;
			padding: 15rpx 0;
		}
		.right{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			text-align: right;
			.cu-btn{
				color: #999;
				border: 1rpx solid #888;
			}
			.car-input{
				margin-left: 120rpx;
			}
		}
		input{
			color: #888;
			// text-align: left;
			border-radius: 3rpx;
			padding-right: 0;
		}
	}
	.column{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.row{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding-bottom: 0;
		.left{
			width: 250rpx;
			display: flex;
			align-items: center;
			// padding: 15rpx 0;
		}
		.right{
			width:  100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			text-align: right;
			.cu-btn{
				color: #999;
				border: 1rpx solid #888;
			}
		}
	}
</style>

<script>
	import Vue from 'vue'
	import { setupAppUpdateListener } from '@/apis/util.js';
	const sysInfo = uni.getSystemInfoSync();
	const windowHeight = sysInfo.windowHeight;
	const IS_ANDROID = !sysInfo.model.includes('iPhone');
	const statusBarHeight = sysInfo.statusBarHeight;
	const STORAGE_KEY = 'PLUG-ADD-MYAPP-KEY';
	const envId = 'ncov-production-wwomb';
	const collectionName = 'config_jill';
	const docId = 'mp_launch_config_doc';
	export default {
		globalData: {
			windowHeight: windowHeight,
			statusBarHeight: statusBarHeight,
			SHOW_TIP: false,
			duration: 20,
			cropImageFilePath: '',
			rapaintAfterCrop: false,
			PAGE_BG_COLOR: '#C12928',
			enableSecurityCheck: true,
			userAvatarUrl: null,
			userAvatarFilePath: null,
			maskAvatarSavedTempPath: null
		},
		onLaunch: function() {
			setupAppUpdateListener();
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "app.css";
	.main{
		min-height: 100vh;
		background-color: #f1f1f1;
	}
	.main-content{ 
		padding: 0 30rpx;
	}
</style>
 
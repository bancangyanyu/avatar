
<script>
	import { setupAppUpdateListener } from './utils'
	export default {
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLaunch: function() {
			setupAppUpdateListener()
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>

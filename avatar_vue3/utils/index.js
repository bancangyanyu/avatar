export const setupAppUpdateListener = () => {
	let updateManager = null
	if (wx.getUpdateManager) { 
		updateManager = wx.getUpdateManager()
	} else {
		return
	}

	updateManager.onCheckForUpdate(function(res) {

	}) 

	updateManager.onUpdateReady(function() {
		wx.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启应用？',
			confirmText: '重 启',
			showCancel: false,
			success: function(res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate()
				}
			}
		})
	})

	updateManager.onUpdateFailed(function() {
		// 新的版本下载失败
		console.error("新的版本下载失败！");
	})
}

// 设置缓存
export  function setCache(key, value, expireSeconds=86400) {
  const currentTime = Date.now();
  const expireTime = currentTime + expireSeconds * 1000; // 转换为毫秒
  uni.setStorage({
    key: key,
    data: {
      value: value,
      expireTime: expireTime
    },
    success: function() {
      console.log('缓存设置成功');
    }
  });
}

// 获取缓存
export function getCache(key) {
  const res = uni.getStorageSync(key);
  if (res && res.expireTime > Date.now()) {
    return res.value;
  } else {
    uni.removeStorage({
      key: key,
      success: function() {
        console.log('缓存已过期，已移除');
      }
    });
    return null; // 缓存过期，返回null
  }
}

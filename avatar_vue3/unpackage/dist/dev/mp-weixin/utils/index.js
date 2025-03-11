"use strict";
const common_vendor = require("../common/vendor.js");
const setupAppUpdateListener = () => {
  let updateManager = null;
  if (common_vendor.wx$1.getUpdateManager) {
    updateManager = common_vendor.wx$1.getUpdateManager();
  } else {
    return;
  }
  updateManager.onCheckForUpdate(function(res) {
  });
  updateManager.onUpdateReady(function() {
    common_vendor.wx$1.showModal({
      title: "更新提示",
      content: "新版本已经准备好，是否重启应用？",
      confirmText: "重 启",
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          updateManager.applyUpdate();
        }
      }
    });
  });
  updateManager.onUpdateFailed(function() {
    common_vendor.index.__f__("error", "at utils/index.js:30", "新的版本下载失败！");
  });
};
function setCache(key, value, expireSeconds = 86400) {
  const currentTime = Date.now();
  const expireTime = currentTime + expireSeconds * 1e3;
  common_vendor.index.setStorage({
    key,
    data: {
      value,
      expireTime
    },
    success: function() {
      common_vendor.index.__f__("log", "at utils/index.js:45", "缓存设置成功");
    }
  });
}
function getCache(key) {
  const res = common_vendor.index.getStorageSync(key);
  if (res && res.expireTime > Date.now()) {
    return res.value;
  } else {
    common_vendor.index.removeStorage({
      key,
      success: function() {
        common_vendor.index.__f__("log", "at utils/index.js:59", "缓存已过期，已移除");
      }
    });
    return null;
  }
}
exports.getCache = getCache;
exports.setCache = setCache;
exports.setupAppUpdateListener = setupAppUpdateListener;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/index.js.map

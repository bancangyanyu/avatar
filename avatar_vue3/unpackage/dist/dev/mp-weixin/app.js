"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_index = require("./utils/index.js");
if (!Math) {
  "./pages/avatar/avatar.js";
  "./pages/index/index.js";
  "./pages/random/random.js";
  "./pages/avatar/avatarView.js";
  "./pages/bg/bg.js";
  "./pages/bg/bgView.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:6", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:9", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:12", "App Hide");
  },
  onLaunch: function() {
    utils_index.setupAppUpdateListener();
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map

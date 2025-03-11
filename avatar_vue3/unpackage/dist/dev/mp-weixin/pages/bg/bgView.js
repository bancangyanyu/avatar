"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "bgView",
  setup(__props) {
    const bgUrl = common_vendor.ref("");
    const showBg = common_vendor.ref(true);
    const handleAction = async (type = 1) => {
      if (type === 1) {
        common_vendor.index.navigateBack();
      } else if (type === 2) {
        if (bgUrl.value) {
          const data = await getImageInfo(bgUrl.value);
          handleDownLoad(data);
        }
      } else {
        showBg.value = !showBg.value;
      }
    };
    const getImageInfo = (imgUrl) => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      return new Promise((reslove, reject) => {
        common_vendor.index.getImageInfo({
          src: imgUrl,
          success: (image) => {
            common_vendor.index.__f__("log", "at pages/bg/bgView.vue:54", "获取的图片信息", image.path);
            common_vendor.index.hideLoading();
            reslove(image.path);
          }
        });
      });
    };
    const handleDownLoad = (data) => {
      common_vendor.index.hideLoading();
      common_vendor.index.saveImageToPhotosAlbum({
        filePath: data,
        success: (saveData) => {
          common_vendor.index.showModal({
            title: "保存成功",
            content: "聊天背景图已经在您的相册里啦",
            showCancel: false
          });
          common_vendor.index.vibrateShort({
            success: () => {
              common_vendor.index.__f__("log", "at pages/bg/bgView.vue:73", "vibrateShort");
            }
          });
        },
        fail: (error) => {
          common_vendor.index.__f__("log", "at pages/bg/bgView.vue:78", "error", error);
          if (error.errMsg.indexOf("fail")) {
            common_vendor.index.showModal({
              title: "您需要授权相册权限",
              success: (res) => {
                if (res.confirm) {
                  common_vendor.index.openSetting({
                    success(res2) {
                      common_vendor.index.__f__("log", "at pages/bg/bgView.vue:86", "相册授权成功");
                    },
                    fail(res2) {
                      common_vendor.index.__f__("log", "at pages/bg/bgView.vue:89", res2);
                    }
                  });
                }
              }
            });
          }
        }
      });
    };
    common_vendor.onLoad((options) => {
      handleOption(options);
    });
    const handleOption = (option) => {
      const data = (option == null ? void 0 : option.item) ? JSON.parse(option == null ? void 0 : option.item) : {};
      const {
        img_url,
        img_id
      } = data;
      bgUrl.value = img_url;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: bgUrl.value,
        b: showBg.value
      }, showBg.value ? {
        c: common_assets._imports_0$1
      } : {}, {
        d: common_vendor.o(($event) => handleAction(1)),
        e: common_vendor.o(($event) => handleAction(3)),
        f: showBg.value ? 1 : "",
        g: common_vendor.o(($event) => handleAction(2))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c6e8c829"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/bg/bgView.js.map

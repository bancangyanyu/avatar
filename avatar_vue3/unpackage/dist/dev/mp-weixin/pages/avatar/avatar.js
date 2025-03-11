"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_tabs2 = common_vendor.resolveComponent("fui-tabs");
  _easycom_fui_tabs2();
}
const _easycom_fui_tabs = () => "../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js";
if (!Math) {
  _easycom_fui_tabs();
}
const __default__ = {
  // onShareAppMessage(res){
  // 	return {
  // 	  title: "发现一张好看的头像，快来看看吧！",
  // 	  path: '/pages/avatar/avatar'
  // 	}
  // } 
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "avatar",
  setup(__props) {
    const tabList = common_vendor.ref(
      [
        {
          name: "国庆"
        },
        {
          name: "中秋节"
        },
        {
          name: "圣诞"
        },
        {
          name: "新年"
        },
        {
          name: "王者"
        },
        {
          name: "和平精英"
        },
        {
          name: "情人节"
        },
        {
          name: "端午节"
        },
        {
          name: "元宵节"
        },
        {
          name: "其他"
        }
      ]
    );
    const showShare = common_vendor.ref(false);
    const imageSize = common_vendor.ref(200);
    const tabActive = common_vendor.ref(0);
    const avatarType = common_vendor.ref(1);
    common_vendor.ref("发现一张好看的头像，快来看看吧！");
    const imgList = common_vendor.ref([]);
    const pageUrl = common_vendor.ref("");
    const avatarUrl = common_vendor.ref("");
    const maskPic = common_vendor.ref("");
    const currentMaskId = common_vendor.ref(-1);
    const showBorder = common_vendor.ref(false);
    common_vendor.ref(getApp().globalData.IS_ANDROID);
    common_vendor.ref(common_vendor.wx$1.getSystemInfoSync().windowWidth / 2);
    common_vendor.ref(300);
    common_vendor.ref(common_vendor.wx$1.getSystemInfoSync().windowWidth / 2 + 50 - 2);
    common_vendor.ref(300);
    common_vendor.ref(100);
    common_vendor.ref(1);
    common_vendor.ref(0);
    common_vendor.ref(0);
    common_vendor.computed(() => {
      return avatarType.value === 5 ? ["text-white"] : "";
    });
    const btnColor = common_vendor.computed(() => {
      return avatarType.value === 5 ? ["bg-white"] : "";
    });
    common_vendor.computed(() => {
      return pageUrl.value;
    });
    common_vendor.computed(() => {
      return ImgPath[avatarType.value];
    });
    const handleOption = (option) => {
      common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:125", "ddddddd", option);
      const data = (option == null ? void 0 : option.item) ? JSON.parse(option == null ? void 0 : option.item) : {};
      const {
        img_url
      } = data;
      avatarUrl.value = img_url;
      handelGetPageUrl();
    };
    const onTabSelect = ({ index }) => {
      handelGetPageUrl(index + 1);
    };
    const getShowData = async () => {
      const data = await common_vendor.er.callFunction({
        name: "show-share"
      });
      showShare.value = data.result.data[0].show;
      if (!showShare.value) {
        common_vendor.wx$1.hideShareMenu({
          success: function() {
            common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:144", "成功隐藏分享按钮");
          },
          fail: function() {
            common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:147", "隐藏分享按钮失败");
          }
        });
      }
      common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:152", "show", data);
    };
    const handelGetPageUrl = async (type = 1) => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      try {
        const {
          result: {
            data
          }
        } = await common_vendor.er.callFunction({
          name: "page-url-query",
          data: {
            type
          }
        });
        const [pageData] = data;
        pageData.photo_url = pageData && pageData.photo_url ? pageData == null ? void 0 : pageData.photo_url.split("*") : [];
        imgList.value = (pageData == null ? void 0 : pageData.photo_url) || "";
        avatarUrl.value = avatarUrl.value || pageData.avatar_url;
        pageUrl.value = pageData.page_url;
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/avatar/avatar.vue:175", err);
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    const onChooseavatar = (e) => {
      common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:182", "选择的头像", e);
      avatarUrl.value = e.detail.avatarUrl;
    };
    const changeMask = (e) => {
      const {
        maskId
      } = e.target.dataset;
      currentMaskId.value = maskId;
      maskPic.value = imgList.value[maskId];
      showBorder.value = true;
    };
    const draw = async () => {
      if (currentMaskId.value === -1) {
        const data = await getImageInfo(avatarUrl.value);
        handleSaveSuccess({ tempFilePath: data });
        common_vendor.index.showToast({
          title: "您还没选择挂件哦",
          duration: 2e3,
          icon: "none"
        });
        return;
      }
      handleDrawImage();
    };
    const getImageInfo = (imgUrl) => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      return new Promise((reslove, reject) => {
        common_vendor.index.getImageInfo({
          src: imgUrl,
          success: (image) => {
            common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:216", "获取的图片信息", image.path);
            common_vendor.index.hideLoading();
            reslove(image.path);
          }
        });
      });
    };
    const handleDrawImage = async () => {
      const query = common_vendor.wx$1.createSelectorQuery();
      query.select("#avatar-bg").boundingClientRect();
      query.exec(async (res) => {
        const pc = common_vendor.wx$1.createCanvasContext("cans-id-mask");
        common_vendor.wx$1.getSystemInfoSync().windowWidth;
        const path = await getImageInfo(maskPic.value);
        const avatarPath = await getImageInfo(avatarUrl.value);
        pc.clearRect(0, 0, imageSize.value, imageSize.value);
        pc.drawImage(avatarPath, 0, 0, imageSize.value, imageSize.value);
        pc.drawImage(path, 0, 0, imageSize.value, imageSize.value);
        await pc.draw(false, () => {
          saveCans();
        });
      });
    };
    const handleSaveSuccess = (res) => {
      const {
        tempFilePath
      } = res;
      common_vendor.index.hideLoading();
      common_vendor.index.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: (saveData) => {
          common_vendor.index.showModal({
            title: "保存成功",
            content: "头像已经在您的相册里啦",
            showCancel: false
          });
          common_vendor.index.vibrateShort({
            success: () => {
              common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:255", "vibrateShort");
            }
          });
        },
        fail: (error) => {
          common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:260", "error", error);
          if (error.errMsg.indexOf("fail")) {
            common_vendor.index.showModal({
              title: "您需要授权相册权限",
              success: (res2) => {
                if (res2.confirm) {
                  common_vendor.index.openSetting({
                    success(res3) {
                      common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:268", "相册授权成功");
                    },
                    fail(res3) {
                      common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:271", res3);
                    }
                  });
                }
              }
            });
          }
        }
      });
    };
    const handleSaveImage = () => {
      common_vendor.index.canvasToTempFilePath(
        {
          x: 0,
          y: 0,
          height: imageSize.value,
          width: imageSize.value,
          destWidth: imageSize.value * 3,
          destHeight: imageSize.value * 3,
          canvasId: "cans-id-mask",
          success: (res) => {
            common_vendor.index.__f__("log", "at pages/avatar/avatar.vue:291", "canvas", res.tempFilePath);
            handleSaveSuccess(res);
          },
          fail: (res) => {
            common_vendor.index.hideLoading();
          }
        },
        this
      );
    };
    const saveCans = () => {
      common_vendor.index.showLoading({
        title: "保存...",
        mask: true
      });
      handleSaveImage();
    };
    common_vendor.onLoad((options) => {
      getShowData();
      handleOption(options);
      let interstitialAd = null;
      if (common_vendor.wx$1.createInterstitialAd) {
        interstitialAd = common_vendor.wx$1.createInterstitialAd({
          adUnitId: "adunit-c1116f19272e97a2"
        });
        interstitialAd.onLoad(() => {
        });
        interstitialAd.onError((err) => {
          common_vendor.index.__f__("error", "at pages/avatar/avatar.vue:322", "插屏广告加载失败", err);
        });
        interstitialAd.onClose(() => {
        });
      }
      if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          common_vendor.index.__f__("error", "at pages/avatar/avatar.vue:329", "插屏广告显示失败", err);
        });
      }
    });
    const handlePreview = (url) => {
      common_vendor.index.previewImage({
        current: 0,
        //  传 Number H5端出现不兼容 
        urls: [url]
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: avatarUrl.value,
        b: common_vendor.o(($event) => handlePreview(avatarUrl.value)),
        c: currentMaskId.value > -1
      }, currentMaskId.value > -1 ? {
        d: showBorder.value ? 1 : "",
        e: maskPic.value
      } : {}, {
        f: common_vendor.o(onChooseavatar),
        g: common_vendor.n(btnColor.value),
        h: common_vendor.o(draw),
        i: common_vendor.n(btnColor.value),
        j: showShare.value
      }, showShare.value ? {
        k: common_vendor.n(btnColor.value)
      } : {}, {
        l: common_vendor.o(onTabSelect),
        m: common_vendor.o(($event) => tabActive.value = $event),
        n: common_vendor.p({
          scroll: true,
          tabs: tabList.value,
          selectClass: "text-yellow",
          modelValue: tabActive.value
        }),
        o: common_vendor.f(imgList.value, (item, index, i0) => {
          return {
            a: item,
            b: index,
            c: common_vendor.o(changeMask, index),
            d: index
          };
        }),
        p: `url(${avatarUrl.value}) no-repeat left/100%`
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e7391881"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/avatar/avatar.js.map

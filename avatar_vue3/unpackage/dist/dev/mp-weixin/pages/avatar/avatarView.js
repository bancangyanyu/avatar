"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_fui_tabs2 = common_vendor.resolveComponent("fui-tabs");
  const _easycom_n_list2 = common_vendor.resolveComponent("n-list");
  (_easycom_fui_tabs2 + _easycom_n_list2)();
}
const _easycom_fui_tabs = () => "../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js";
const _easycom_n_list = () => "../../components/list/index.js";
if (!Math) {
  (_easycom_fui_tabs + _easycom_n_list)();
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
  __name: "avatarView",
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
    const imageList = common_vendor.ref([]);
    const pageInfo = common_vendor.reactive({
      pageSize: 20,
      pageNum: 1
    });
    const hasMore = common_vendor.ref(false);
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
      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:136", "ddddddd", option);
      const data = (option == null ? void 0 : option.item) ? JSON.parse(option == null ? void 0 : option.item) : {};
      const {
        img_url,
        img_id
      } = data;
      avatarUrl.value = img_url;
      handelGetPageUrl();
      getImageData(img_id);
    };
    const onTabSelect = ({ index }) => {
      handelGetPageUrl(index + 1);
    };
    const getShowData = async () => {
      const data = await common_vendor.er.callFunction({
        name: "show-share"
      });
      showShare.value = data.result.data[0].show;
      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:154", "show", data);
    };
    const getImageData = async (index = 0) => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      const {
        pageNum,
        pageSize
      } = pageInfo;
      const {
        result: {
          data
        },
        result
      } = await common_vendor.er.callFunction({
        name: "img-query",
        data: {
          pageNum,
          pageSize,
          img_id: index || tabActive.value
        }
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询失败，错误信息为：${err.message}`,
          showCancel: false
        });
        common_vendor.index.__f__("error", "at pages/avatar/avatarView.vue:184", err);
      });
      hasMore.value = result == null ? void 0 : result.hasMore;
      imageList.value = imageList.value.concat(data);
      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:188", "shuju ", imageList.value);
      common_vendor.index.hideLoading();
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
        common_vendor.index.__f__("error", "at pages/avatar/avatarView.vue:212", err);
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    const onChooseavatar = (e) => {
      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:219", "选择的头像", e);
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
      const value = utils_index.getCache("AD_");
      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:236", "xxxxx", value);
      if (value) {
        initDrawImage();
        return;
      }
      let videoAd = null;
      if (common_vendor.wx$1.createRewardedVideoAd) {
        videoAd = common_vendor.wx$1.createRewardedVideoAd({
          adUnitId: "adunit-0efd6c94cf468f53"
        });
        videoAd.onLoad(() => {
          common_vendor.index.showToast({
            icon: "none",
            title: "当天观看一次视频可无限次下载"
          });
        });
        videoAd.onError((err) => {
          common_vendor.index.__f__("error", "at pages/avatar/avatarView.vue:254", "激励视频光告加载失败", err);
        });
        videoAd.onClose(async (res) => {
          if (res && res.isEnded) {
            initDrawImage();
            utils_index.setCache("AD_", 1);
          } else {
            common_vendor.index.showToast({
              icon: "none",
              title: "当天观看一次视频可解锁无限次下载"
            });
          }
        });
      }
      if (videoAd) {
        videoAd.show().catch(() => {
          videoAd.load().then(() => videoAd.show()).catch((err) => {
            common_vendor.index.__f__("error", "at pages/avatar/avatarView.vue:279", "激励视频 广告显示失败", err);
          });
        });
      }
    };
    const initDrawImage = async (res) => {
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
            common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:306", "获取的图片信息", image.path);
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
              common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:345", "vibrateShort");
            }
          });
        },
        fail: (error) => {
          common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:350", "error", error);
          if (error.errMsg.indexOf("fail")) {
            common_vendor.index.showModal({
              title: "您需要授权相册权限",
              success: (res2) => {
                if (res2.confirm) {
                  common_vendor.index.openSetting({
                    success(res3) {
                      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:358", "相册授权成功");
                    },
                    fail(res3) {
                      common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:361", res3);
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
            common_vendor.index.__f__("log", "at pages/avatar/avatarView.vue:381", "canvas", res.tempFilePath);
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
        p: `url(${avatarUrl.value}) no-repeat left/100%`,
        q: common_vendor.p({
          list: imageList.value
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fa740e13"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/avatar/avatarView.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_n_list2 = common_vendor.resolveComponent("n-list");
  _easycom_n_list2();
}
const _easycom_n_list = () => "../../components/list/index.js";
if (!Math) {
  _easycom_n_list();
}
const _sfc_main = {
  __name: "bg",
  setup(__props) {
    const pageInfo = common_vendor.reactive({
      pageSize: 20,
      pageNum: 1
    });
    const hasMore = common_vendor.ref(false);
    const imageList = common_vendor.ref([]);
    common_vendor.onPullDownRefresh(() => {
      getImageData(1);
    });
    const getImageData = async (index = 1) => {
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
          img_id: index,
          pageType: "bg"
        }
      }).catch((err) => {
        common_vendor.index.stopPullDownRefresh();
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询失败，错误信息为：${err.message}`,
          showCancel: false
        });
        common_vendor.index.__f__("error", "at pages/bg/bg.vue:58", err);
      });
      hasMore.value = result == null ? void 0 : result.hasMore;
      imageList.value = imageList.value.concat(data);
      common_vendor.index.__f__("log", "at pages/bg/bg.vue:62", "shuju ", imageList.value);
      common_vendor.index.hideLoading();
      common_vendor.index.stopPullDownRefresh();
    };
    common_vendor.onMounted(() => {
      getImageData();
    });
    common_vendor.onReachBottom(() => {
      if (hasMore.value) {
        pageInfo.pageNum++;
        getImageData();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: imageList.value,
          imgType: "bg",
          height: "700rpx"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/bg/bg.js.map

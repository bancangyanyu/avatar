"use strict";
const common_vendor = require("../../common/vendor.js");
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
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabList = common_vendor.ref([]);
    const tabActive = common_vendor.ref(0);
    const pageInfo = common_vendor.reactive({
      pageSize: 20,
      pageNum: 1
    });
    const hasMore = common_vendor.ref(false);
    const imageList = common_vendor.ref([]);
    common_vendor.onReachBottom(() => {
      if (hasMore.value) {
        pageInfo.pageNum++;
        getImageData();
      }
    });
    common_vendor.onPullDownRefresh(() => {
      getImageData(tabActive.value);
    });
    const getTypeData = async () => {
      const {
        result: {
          data
        },
        result
      } = await common_vendor.er.callFunction({
        name: "img-type-query"
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.__f__("error", "at pages/index/index.vue:57", err);
      });
      common_vendor.index.__f__("log", "at pages/index/index.vue:59", "type", data);
      tabList.value = data.map((item) => {
        return {
          name: item.img_type,
          value: item.img_id
        };
      });
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
        common_vendor.index.__f__("error", "at pages/index/index.vue:97", err);
        common_vendor.index.stopPullDownRefresh();
      });
      common_vendor.index.stopPullDownRefresh();
      hasMore.value = result == null ? void 0 : result.hasMore;
      imageList.value = imageList.value.concat(data);
      common_vendor.index.__f__("log", "at pages/index/index.vue:103", "shuju ", imageList.value);
      common_vendor.index.hideLoading();
    };
    const onTabSelect = ({ value }) => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:107", "点击", value);
      imageList.value = [];
      pageInfo.pageNum = 1;
      tabActive.value = value;
      getImageData(value);
    };
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:114", "mounted");
      getImageData();
      getTypeData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onTabSelect),
        b: common_vendor.o(($event) => tabActive.value = $event),
        c: common_vendor.p({
          scroll: true,
          tabs: tabList.value,
          selectClass: "text-yellow",
          modelValue: tabActive.value
        }),
        d: common_vendor.p({
          list: imageList.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "random",
  setup(__props) {
    const avatarUrl = common_vendor.ref("");
    const imgList = common_vendor.ref("");
    const isRolling = common_vendor.ref(false);
    const isFlashing = common_vendor.ref(false);
    common_vendor.onMounted((_) => {
      getImageData();
    });
    const handlePreview = (url) => {
      common_vendor.index.previewImage({
        current: 0,
        //  传 Number H5端出现不兼容 
        urls: [url]
      });
    };
    const getImageData = async () => {
      const {
        result: {
          data
        },
        result
      } = await common_vendor.er.callFunction({
        name: "img-query",
        data: {
          pageNum: 0,
          pageSize: 10,
          img_id: 0
        }
      });
      imgList.value = data;
      common_vendor.index.__f__("log", "at pages/random/random.vue:45", "imgList", data);
      getRandomAvatar();
    };
    const getRandomAvatar = () => {
      if (imgList.value.length === 0) {
        common_vendor.index.__f__("error", "at pages/random/random.vue:51", "头像列表为空");
        return;
      }
      const randomIndex = Math.floor(Math.random() * imgList.value.length);
      avatarUrl.value = imgList.value[randomIndex].img_url;
      isRolling.value = false;
      isFlashing.value = false;
    };
    const rollDice = () => {
      isRolling.value = true;
      isFlashing.value = true;
      setTimeout(() => {
        getRandomAvatar();
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return {
        a: avatarUrl.value,
        b: isFlashing.value ? 1 : "",
        c: common_vendor.o(($event) => handlePreview(avatarUrl.value)),
        d: common_assets._imports_0,
        e: isRolling.value ? 1 : "",
        f: common_vendor.o(rollDice)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f688de71"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/random/random.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    list: {
      type: Array,
      required: true
    },
    // 列表渲染的 key 的键名，值必须唯一，默认为 id
    idKey: {
      type: String,
      default: "_id"
    },
    // 图片 src 的键名
    imageSrcKey: {
      type: String,
      default: "img_url"
    },
    imgType: {
      type: String,
      default: "img"
    },
    height: {
      type: String,
      default: "300rpx"
    }
  },
  emits: "click",
  setup(__props, { emit: __emit }) {
    const $emit = __emit;
    const porps = __props;
    const navigate = (url) => {
      const pages = getCurrentPages();
      const currentLevel = pages.length;
      if (currentLevel >= 2) {
        common_vendor.index.redirectTo({
          url
        });
      } else {
        common_vendor.index.navigateTo({
          url
        });
      }
    };
    const handleClick = (item, index) => {
      $emit("click", item);
      common_vendor.index.__f__("log", "at components/list/index.vue:61", "预览", [item, index]);
      const data = JSON.stringify(item);
      if (porps.imgType === "bg") {
        navigate(`/pages/bg/bgView?item=${data}`);
        return;
      } else {
        navigate(`/pages/avatar/avatarView?item=${data}`);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: item[__props.imageSrcKey] || " ",
            b: item[__props.idKey],
            c: "waterfalls-list-id-" + item[__props.idKey],
            d: common_vendor.o(($event) => handleClick(item, index), item[__props.idKey])
          };
        }),
        b: __props.height
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c984f117"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/list/index.js.map

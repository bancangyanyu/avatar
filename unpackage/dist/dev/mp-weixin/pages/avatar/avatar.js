(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/avatar/avatar"],{

/***/ 55:
/*!***************************************************************************!*\
  !*** D:/GIT_WORK/learn/avatar/main.js?{"page":"pages%2Favatar%2Favatar"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./pages/avatar/avatar.vue */ 56));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_avatar.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 56:
/*!********************************************************!*\
  !*** D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.vue?vue&type=template&id=3cba10b4&scoped=true& */ 57);
/* harmony import */ var _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.vue?vue&type=script&lang=js& */ 59);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar.vue?vue&type=style&index=0&id=3cba10b4&lang=scss&scoped=true& */ 62);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 46);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cba10b4",
  null,
  false,
  _avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/avatar/avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/*!***************************************************************************************************!*\
  !*** D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=template&id=3cba10b4&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./avatar.vue?vue&type=template&id=3cba10b4&scoped=true& */ 58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_template_id_3cba10b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 58:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=template&id=3cba10b4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTab: function () {
      return __webpack_require__.e(/*! import() | components/uni-tab/uni-tab */ "components/uni-tab/uni-tab").then(__webpack_require__.bind(null, /*! @/components/uni-tab/uni-tab.vue */ 133))
    },
    uniFab: function () {
      return __webpack_require__.e(/*! import() | components/uni-fab/uni-fab */ "components/uni-fab/uni-fab").then(__webpack_require__.bind(null, /*! @/components/uni-fab/uni-fab.vue */ 140))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 59:
/*!*********************************************************************************!*\
  !*** D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./avatar.vue?vue&type=script&lang=js& */ 60);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni, uniCloud) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var _index = __webpack_require__(/*! ./index.js */ 61);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ImgPath = {
  1: 'china',
  2: 'chris',
  3: 'holiday',
  4: 'new',
  5: 'love'
};
var uniFab = function uniFab() {
  __webpack_require__.e(/*! require.ensure | components/uni-fab/uni-fab */ "components/uni-fab/uni-fab").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-fab/uni-fab.vue */ 140));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    uniFab: uniFab
  },
  data: function data() {
    return {
      tabList: [{
        name: "国庆",
        icon: ""
      }, {
        name: "NBA",
        icon: ""
      }, {
        name: "圣诞",
        icon: ""
      }],
      tabActive: 0,
      fabList: _index.fabList,
      AvatarUrl: _index.AvatarUrl,
      PageUrl: _index.PageUrl,
      duration: 15,
      windowHeight: 0,
      cansWidth: 220,
      // 宽度 px
      cansHeight: 220,
      // 高度 px

      currentMaskId: -1,
      showBorder: false,
      maskCenterX: wx.getSystemInfoSync().windowWidth / 2,
      maskCenterY: 250,
      cancelCenterX: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
      cancelCenterY: 200,
      handleCenterX: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
      handleCenterY: 300,
      maskSize: 100,
      scale: 1,
      rotate: 0,
      rotateY: 0,
      // 值180时，则水平翻转
      mask_center_x: wx.getSystemInfoSync().windowWidth / 2,
      mask_center_y: 250,
      cancel_center_x: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
      cancel_center_y: 200,
      handle_center_x: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
      handle_center_y: 300,
      scaleCurrent: 1,
      rotateCurrent: 0,
      touch_target: '',
      start_x: 0,
      start_y: 0,
      avatarType: 1,
      avatarPath: '',
      imageInfo: '圣诞快乐呀！',
      imgList: [],
      // 第二个参数是个数
      pageUrl: '',
      avatarUrl: '',
      maskPic: '',
      isAndroid: getApp().globalData.IS_ANDROID
    };
  },
  computed: {
    pageImage: function pageImage() {
      var pageUrl = this.pageUrl;
      return pageUrl;
    },
    imgPath: function imgPath() {
      var avatarType = this.avatarType;
      return ImgPath[avatarType];
    },
    // avatarImage: {
    // 	get() {
    // 		const { avatarUrl } = this;
    // 		this.avatarPath = avatarUrl
    // 		return avatarUrl
    // 	},
    // 	set(val) {
    // 		this.avatarPath = val;
    // 	}
    // },
    imgInfoColor: function imgInfoColor() {
      var avatarType = this.avatarType;
      var color = avatarType === 5 ? ['text-white'] : '';
      return color;
    },
    btnColor: function btnColor() {
      var avatarType = this.avatarType;
      var color = avatarType === 5 ? ['bg-white'] : '';
      return color;
    }
  },
  onLoad: function onLoad(option) {
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
      success: function success(res) {
        console.log(res);
      },
      fail: function fail(e) {
        console.log(e);
      }
    });
    this.handleOption(option);
    console.log(option);
  },
  //分享到朋友圈
  onShareTimeline: function onShareTimeline() {
    var imageInfo = this.imageInfo,
      avatarUrl = this.avatarUrl;
    return {
      title: imageInfo,
      // query: 'where=share',
      imageUrl: avatarUrl
    };
  },
  onShareAppMessage: function onShareAppMessage() {
    var imageInfo = this.imageInfo,
      avatarUrl = this.avatarUrl;
    return {
      title: imageInfo,
      imageUrl: avatarUrl,
      path: '/pages/avatar/avatar',
      success: function success(res) {
        console.log(res);
      }
    };
  },
  methods: {
    onTabSelect: function onTabSelect(index) {
      this.tabActive = index;
      this.handelGetPageUrl(index + 1);
    },
    handleTrigger: function handleTrigger(e) {
      var index = e.index;
      switch (index) {
        case 0:
          uni.navigateBack({
            delta: 1
          });
          break;
        case 1:
          uni.switchTab({
            url: "/pages/images/images"
          });
          break;
        default:
          uni.navigateBack({
            delta: 1
          });
          break;
      }
      console.log(e);
    },
    handelGetPageUrl: function handelGetPageUrl() {
      var _arguments = arguments,
        _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var type, _yield$uniCloud$callF, data, _data, pageData, photo_url, INFO;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                type = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                uni.showLoading({
                  title: '加载中...'
                });
                _context.next = 4;
                return uniCloud.callFunction({
                  name: 'page-url-query',
                  data: {
                    type: type
                  }
                }).catch(function (err) {
                  uni.hideLoading();
                  uni.showModal({
                    content: "\u67E5\u8BE2\u5931\u8D25\uFF0C\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A".concat(err.message),
                    showCancel: false
                  });
                  console.error(err);
                });
              case 4:
                _yield$uniCloud$callF = _context.sent;
                data = _yield$uniCloud$callF.result.data;
                _data = (0, _slicedToArray2.default)(data, 1), pageData = _data[0];
                photo_url = pageData.photo_url;
                pageData.photo_url = photo_url.split('*');
                _this.imgList = pageData.photo_url;
                _this.avatarUrl = pageData.avatar_url;
                _this.pageUrl = pageData.page_url;
                INFO = ['🇨🇳 盛世华章，头像换装庆华诞！', "🏀 换上主队球衣打造你的热血NBA！", "🎄 圣诞帽+小鹿角，点亮你的节日！"];
                _this.imageInfo = INFO[type - 1];
                console.log('查询的数据', pageData);
                uni.hideLoading();
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleOption: function handleOption(option) {
      var data = option !== null && option !== void 0 && option.item ? JSON.parse(option === null || option === void 0 ? void 0 : option.item) : {};
      var _data$avatarType = data.avatarType,
        avatarType = _data$avatarType === void 0 ? 1 : _data$avatarType,
        info = data.info;
      this.avatarType = avatarType;
      this.imageInfo = info;
      this.handelGetPageUrl(avatarType);
      this.windowHeight = getApp().globalData.windowHeight;
    },
    touchAvatarBg: function touchAvatarBg() {
      this.showBorder = false;
    },
    touchStart: function touchStart(e) {
      console.log('e.target.id', e.target.id);
      if (e.target.id == 'mask') {
        this.touch_target = 'mask';
        this.showBorder = true;
      } else if (e.target.id == 'handle') {
        this.touch_target = 'handle';
      } else {
        this.touch_target = '';
      }
      if (this.touch_target != '') {
        this.start_x = e.touches[0].clientX;
        this.start_y = e.touches[0].clientY;
      }
    },
    touchMove: function touchMove(e) {
      var current_x = e.touches[0].clientX;
      var current_y = e.touches[0].clientY;
      var moved_x = current_x - this.start_x;
      var moved_y = current_y - this.start_y;
      if (this.touch_target == 'mask') {
        this.maskCenterX = this.maskCenterX + moved_x;
        this.maskCenterY = this.maskCenterY + moved_y;
        this.cancelCenterX = this.cancelCenterX + moved_x;
        this.cancelCenterY = this.cancelCenterY + moved_y;
        this.handleCenterX = this.handleCenterX + moved_x;
        this.handleCenterY = this.handleCenterY + moved_y;
      }
      if (this.touch_target == 'handle') {
        this.handleCenterX = this.handleCenterX + moved_x;
        this.handleCenterY = this.handleCenterY + moved_y;
        this.cancelCenterX = 2 * this.maskCenterX - this.handleCenterX;
        this.cancelCenterY = 2 * this.maskCenterY - this.handleCenterY;
        var diff_x_before = this.handle_center_x - this.mask_center_x;
        var diff_y_before = this.handle_center_y - this.mask_center_y;
        var diff_x_after = this.handleCenterX - this.mask_center_x;
        var diff_y_after = this.handleCenterY - this.mask_center_y;
        var distance_before = Math.sqrt(diff_x_before * diff_x_before + diff_y_before * diff_y_before);
        var distance_after = Math.sqrt(diff_x_after * diff_x_after + diff_y_after * diff_y_after);
        var angle_before = Math.atan2(diff_y_before, diff_x_before) / Math.PI * 180;
        var angle_after = Math.atan2(diff_y_after, diff_x_after) / Math.PI * 180;
        this.scale = distance_after / distance_before * this.scaleCurrent;
        this.rotate = angle_after - angle_before + this.rotateCurrent;
      }
      this.start_x = current_x;
      this.start_y = current_y;
    },
    touchEnd: function touchEnd(e) {
      this.mask_center_x = this.maskCenterX;
      this.mask_center_y = this.maskCenterY;
      this.cancel_center_x = this.cancelCenterX;
      this.cancel_center_y = this.cancelCenterY;
      this.handle_center_x = this.handleCenterX;
      this.handle_center_y = this.handleCenterY;
      this.touch_target = '';
      this.scaleCurrent = this.scale;
      this.rotateCurrent = this.rotate;
    },
    // 获取用户信息
    getUserInfo: function getUserInfo(result) {
      var _this2 = this;
      if (result.detail.errMsg !== 'getUserInfo:ok') {
        uni.showModal({
          title: '获取用户头像失败',
          content: '用户信息仅用于创建新的图片，请放心使用',
          showCancel: false
        });
        return;
      }
      var userInfo = result.detail.userInfo;
      userInfo.avatarUrl = userInfo.avatarUrl.replace('132', '0'); // 使用最大分辨率头像 959 * 959
      console.log('头像', userInfo.avatarUrl);
      uni.showLoading({
        title: '加载中...'
      });
      uni.downloadFile({
        url: userInfo.avatarUrl,
        success: function success(res) {
          uni.hideLoading();
          _this2.avatarUrl = res.tempFilePath;
        },
        fail: function fail(e) {
          console.log(e);
          _this2.handleImageModal();
        }
      });
    },
    handleImageModal: function handleImageModal() {
      var _this3 = this;
      uni.hideLoading();
      uni.showModal({
        title: '图片加载超时',
        content: '网络异常，请稍后重试',
        success: function success(res) {
          if (res.confirm) {
            _this3.downloadAvatarAndPaintAll();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    // 选择挂件
    changeMask: function changeMask(e) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var maskId, maskPic;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                maskId = e.target.dataset.maskId;
                _this4.currentMaskId = maskId;
                maskPic = _this4.imgList[maskId];
                _this4.maskPic = maskPic;
                _this4.showBorder = true;
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 绘制头像
    draw: function draw() {
      if (this.currentMaskId == -1) {
        uni.showToast({
          title: '您还没选择挂件哦',
          duration: 2000,
          icon: 'none'
        });
        return;
      }
      this.handleDrawImage();
    },
    getImageInfo: function getImageInfo(imgUrl) {
      uni.showLoading({
        title: "加载中"
      });
      return new Promise(function (reslove, reject) {
        uni.getImageInfo({
          src: imgUrl,
          success: function success(image) {
            console.log("获取的图片信息", image.path);
            uni.hideLoading();
            reslove(image.path);
          }
        });
      });
    },
    handleDrawImage: function handleDrawImage() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var scale, rotate, isAndroid, cansWidth, cansHeight, currentMaskId, mask_center_x, mask_center_y, query;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                scale = _this5.scale, rotate = _this5.rotate, isAndroid = _this5.isAndroid, cansWidth = _this5.cansWidth, cansHeight = _this5.cansHeight, currentMaskId = _this5.currentMaskId;
                mask_center_x = _this5.mask_center_x, mask_center_y = _this5.mask_center_y; // 创建节点选择器
                // 口罩中心位置的计算是从屏幕左上角开始，所以我们需要获取头像图片的位置，来得到口罩相对头像的位置
                query = wx.createSelectorQuery(); // this.getImageInfo(avatarUrl, 'avatarUrl'); 
                query.select('#avatar-bg').boundingClientRect();
                query.exec( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {
                    var pc, windowWidth, mask_size, path, avatarPath;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            //res就是 所有标签为#的元素的信息的数组
                            mask_center_x = mask_center_x - res[0].left;
                            mask_center_y = mask_center_y - res[0].top;
                            pc = wx.createCanvasContext('cans-id-mask');
                            windowWidth = wx.getSystemInfoSync().windowWidth;
                            mask_size = 100 * scale;
                            _context3.next = 7;
                            return _this5.getImageInfo(_this5.maskPic);
                          case 7:
                            path = _context3.sent;
                            _context3.next = 10;
                            return _this5.getImageInfo(_this5.avatarUrl);
                          case 10:
                            avatarPath = _context3.sent;
                            pc.clearRect(0, 0, cansWidth, cansHeight);
                            pc.drawImage(avatarPath, 0, 0, cansWidth, cansHeight);
                            pc.translate(mask_center_x, mask_center_y);
                            pc.rotate(rotate * Math.PI / 180);
                            if (isAndroid) {
                              _this5.rotateY == 180 && pc.scale(-1, 1);
                            }
                            pc.drawImage(path, -mask_size / 2, -mask_size / 2, mask_size, mask_size);
                            _context3.next = 19;
                            return pc.draw(false, function () {
                              _this5.saveCans();
                            });
                          case 19:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    handleSaveSuccess: function handleSaveSuccess(res) {
      var _this6 = this;
      var tempFilePath = res.tempFilePath;
      uni.hideLoading();
      uni.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: function success(saveData) {
          uni.showModal({
            title: '保存成功',
            content: '头像已经在您的相册里啦',
            showCancel: false
          });
          uni.vibrateShort({
            success: function success() {
              console.log('vibrateShort');
            }
          });
        },
        fail: function fail(error) {
          if (error.errMsg.indexOf('fail')) {
            _this6.hadleSaveErrorModal();
          }
        }
      });
    },
    hadleSaveErrorModal: function hadleSaveErrorModal() {
      uni.showModal({
        title: '您需要授权相册权限',
        success: function success(res) {
          if (res.confirm) {
            uni.openSetting({
              success: function success(res) {
                console.log('相册授权成功');
              },
              fail: function fail(res) {
                console.log(res);
              }
            });
          }
        }
      });
    },
    handleSaveImage: function handleSaveImage() {
      var _this7 = this;
      uni.canvasToTempFilePath({
        x: 0,
        y: 0,
        height: this.cansWidth,
        width: this.cansHeight,
        destWidth: this.cansWidth * 3,
        destHeight: this.cansHeight * 3,
        canvasId: 'cans-id-mask',
        // fileType: 'png',
        success: function success(res) {
          console.log('canvas', res.tempFilePath);
          _this7.handleSaveSuccess(res);
        },
        fail: function fail(res) {
          uni.hideLoading();
        }
      }, this);
    },
    // 保存头像
    saveCans: function saveCans() {
      uni.showLoading({
        title: '保存...',
        mask: true
      });
      this.handleSaveImage();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["uniCloud"]))

/***/ }),

/***/ 62:
/*!******************************************************************************************************************!*\
  !*** D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=style&index=0&id=3cba10b4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./avatar.vue?vue&type=style&index=0&id=3cba10b4&lang=scss&scoped=true& */ 63);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_avatar_vue_vue_type_style_index_0_id_3cba10b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/GIT_WORK/learn/avatar/pages/avatar/avatar.vue?vue&type=style&index=0&id=3cba10b4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[55,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/avatar/avatar.js.map
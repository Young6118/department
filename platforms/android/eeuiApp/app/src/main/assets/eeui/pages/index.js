// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      components: [],
      uis: [],
      module: [],
      plugin: [],
      abouts: [],
      history: []
    };
  },
  created: function created() {
    this.components = [{
      title: '轮播控件',
      title_en: 'banner',
      icon: 'md-easel',
      url: 'component_banner.js'
    }, {
      title: '常用按钮',
      title_en: 'button',
      icon: 'logo-youtube',
      url: 'component_button.js'
    }, {
      title: '网格容器',
      title_en: 'grid',
      icon: 'md-grid',
      url: 'component_grid.js'
    }, {
      title: '字体图标',
      title_en: 'icon',
      icon: 'logo-ionic',
      url: 'component_icon.js'
    }, {
      title: '跑马文字',
      title_en: 'marquee',
      icon: 'md-code-working',
      url: 'component_marquee.js'
    }, {
      title: '导航栏',
      title_en: 'navbar',
      icon: 'md-menu',
      url: 'component_navbar.js'
    }, {
      title: '列表容器',
      title_en: 'scroll-view',
      icon: 'md-list',
      url: 'component_list.js'
    }, {
      title: '滚动文字',
      title_en: 'scroll-text',
      icon: 'ios-more',
      url: 'component_scroll_text.js'
    }, {
      title: '侧边栏',
      title_en: 'side-panel',
      icon: 'md-albums',
      url: 'component_side_panel.js'
    }, {
      title: '标签页面',
      title_en: 'tabbar',
      icon: 'md-filing',
      url: 'component_tabbar.js'
    }];
    this.uis = [{
      title: 'Echarts图表',
      title_en: 'w-echarts',
      icon: 'md-trending-up',
      url: 'ui_echarts.js'
    }, {
      title: 'Switch开关',
      title_en: 'w-switch',
      icon: 'md-switch',
      url: 'ui_switch.js'
    }];
    this.module = [{
      title: '页面功能',
      title_en: 'newPage',
      icon: 'md-book',
      url: 'module_page.js'
    }, {
      title: '系统信息',
      title_en: 'system',
      icon: 'ios-cog',
      url: 'module_system.js'
    }, {
      title: '数据缓存',
      title_en: 'storage',
      icon: 'md-beaker',
      url: 'module_caches.js'
    }, {
      title: '确认对话框',
      title_en: 'alert',
      icon: 'md-alert',
      url: 'module_alert.js'
    }, {
      title: '等待弹窗',
      title_en: 'loading',
      icon: 'tb-loading',
      url: 'module_loading.js'
    }, {
      title: '验证弹窗',
      title_en: 'captcha',
      icon: 'md-checkmark-circle',
      url: 'module_captcha.js'
    }, {
      title: '二维码扫描',
      title_en: 'scaner',
      icon: 'tb-scan',
      url: 'module_scaner.js'
    }, {
      title: '跨域异步请求',
      title_en: 'ajax',
      icon: 'md-git-pull-request',
      url: 'module_ajax.js'
    }, {
      title: '剪切板',
      title_en: 'clipboard',
      icon: 'md-copy',
      url: 'module_plate.js'
    }, {
      title: '提示消息',
      title_en: 'toast',
      icon: 'md-notifications',
      url: 'module_toast.js'
    }, {
      title: '广告弹窗',
      title_en: 'adDialog',
      icon: 'logo-buffer',
      url: 'module_ad_dialog.js'
    }];
    this.plugin = [{
      title: '城市选择器',
      title_en: 'citypicker',
      icon: 'md-pin',
      url: 'plugin_citypicker.js'
    }, {
      title: '图片选择器',
      title_en: 'picture',
      icon: 'md-camera',
      url: 'plugin_picture.js'
    }, {
      title: '组件截图',
      title_en: 'screenshots',
      icon: 'md-crop',
      url: 'plugin_screenshots.js'
    }, {
      title: '融云通信模块',
      title_en: 'rongim',
      icon: 'tb-community',
      url: 'plugin_rongim.js'
    }, {
      title: '友盟推送模块',
      title_en: 'umeng',
      icon: 'md-send',
      url: 'plugin_umeng.js'
    }, {
      title: '第三方支付(微信/支付宝)',
      title_en: 'pay',
      icon: 'tb-sponsor',
      url: 'plugin_pay.js'
    }, {
      title: '即时通讯',
      title_en: 'websocket',
      icon: 'md-repeat',
      url: 'plugin_websocket.js'
    }];
    this.abouts = [{
      title: '开发文档',
      title_en: 'document',
      icon: 'md-code-working',
      url: 'https://eeui.app'
    }, {
      title: '托管平台',
      title_en: 'github',
      icon: 'logo-github',
      url: 'https://github.com/kuaifan/eeui'
    }, {
      title: '交流社区',
      title_en: 'https://bbs.eeui.app',
      icon: 'logo-rss',
      url: 'https://bbs.eeui.app'
    }, {
      title: 'EEUI版本',
      title_en: eeui.getVersionName(),
      icon: 'md-information-circle',
      url: 'https://eeui.app'
    }];
    this.history = this.jsonParse(eeui.getCachesString("scaner", []), []); //

    eeui.setPageBackPressed(null, function () {
      eeui.confirm({
        title: "温馨提示",
        message: "你确定要退出eeui.app吗？",
        buttons: ["取消", "确定"]
      }, function (result) {
        if (result.status === "click" && result.title === "确定") {
          eeui.closePage(null);
        }
      });
    });
  },
  methods: {
    scaner: function scaner() {
      var _this = this;

      eeui.openScaner(null, function (res) {
        if (res.status === "success") {
          _this.history.unshift(res.text);

          eeui.setCachesString("scaner", _this.jsonStringify(_this.history), 0);

          _this.openAuto(res.text);
        }
      });
    },
    refresh: function refresh() {
      eeui.reloadPage();
    },
    clearHistory: function clearHistory() {
      var _this2 = this;

      eeui.confirm({
        title: "删除提示",
        message: "你确定要删除扫码记录吗？",
        buttons: ["取消", "确定"]
      }, function (result) {
        if (result.status === "click" && result.title === "确定") {
          _this2.history = [];
          eeui.setCachesString("scaner", _this2.jsonStringify(_this2.history), 0);
        }
      });
    },
    openUrl: function openUrl(url) {
      eeui.openPage({
        url: url,
        pageType: 'app'
      });
    },
    openWeb: function openWeb(url) {
      this.openViewUrl(url);
    },
    openAuto: function openAuto(url) {
      eeui.openPage({
        url: url,
        pageType: 'auto'
      });
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "navbar": {
    "width": "750",
    "height": "100"
  },
  "navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "navbar-logo": {
    "width": "36",
    "height": "36",
    "marginRight": "18"
  },
  "navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "navbar-icon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "list-title-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "list-title": {
    "flex": 1,
    "paddingTop": "32",
    "paddingRight": "24",
    "paddingBottom": "32",
    "paddingLeft": "24",
    "fontSize": "28",
    "color": "#757575",
    "backgroundColor": "#ffffff"
  },
  "list-subtitle": {
    "paddingRight": "24",
    "fontSize": "24"
  },
  "list-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "100",
    "width": "750",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderTopWidth": "1",
    "borderTopColor": "#f2f2f2",
    "borderTopStyle": "solid"
  },
  "list-item-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "height": "100",
    "flex": 1
  },
  "list-left-icon": {
    "width": "60",
    "height": "60",
    "color": "#3EB4FF"
  },
  "list-left-title": {
    "color": "#242424",
    "paddingLeft": "12",
    "width": "380",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-left-title-history": {
    "color": "#666666",
    "paddingLeft": "12",
    "width": "660",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 2
  },
  "list-right-title": {
    "color": "#a2a2a2",
    "paddingRight": "3",
    "fontSize": "22",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-right-icon": {
    "fontSize": "24",
    "width": "40",
    "height": "40",
    "color": "#C9C9CE",
    "content": "'tb-right'"
  },
  "list-item-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "100"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.scaner
    }
  }, [_c('icon', {
    staticClass: ["navbar-icon"],
    attrs: {
      "eeui": {
        content: 'tb-scan'
      }
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["navbar-main"]
  }, [_c('image', {
    staticClass: ["navbar-logo"],
    attrs: {
      "src": "root://pages/logo-white.png"
    }
  }), _c('text', {
    staticClass: ["navbar-title"]
  }, [_vm._v("EEUI")])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_c('icon', {
    staticClass: ["navbar-icon"],
    attrs: {
      "eeui": {
        content: 'md-refresh'
      }
    }
  })], 1)], 1), _c('scroll-view', {
    staticClass: ["list"]
  }, [_c('scroll-header', [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("组件 Components")])]), _vm._l((_vm.components), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v("<" + _vm._s(item.title_en) + ">")]), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }), _c('scroll-header', [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("自定义组件 UI")])]), _vm._l((_vm.uis), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v("<" + _vm._s(item.title_en) + ">")]), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }), _c('scroll-header', [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("模块 Module")])]), _vm._l((_vm.module), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }), _c('scroll-header', [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("插件化 Plugins")])]), _vm._l((_vm.plugin), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }), _c('div', {
    staticClass: ["list-item"],
    on: {
      "click": function($event) {
        _vm.openWeb('https://eeui.app/markets/')
      }
    }
  }, [_c('div', {
    staticClass: ["list-item-left"]
  }, [_c('icon', {
    staticClass: ["list-left-icon"],
    attrs: {
      "content": "tb-more"
    }
  }), _c('text', {
    staticClass: ["list-left-title"]
  }, [_vm._v("更多插件")])], 1), _c('div', {
    staticClass: ["list-item-right"]
  }, [_c('text', {
    staticClass: ["list-right-title"]
  }), _c('icon', {
    staticClass: ["list-right-icon"]
  })], 1)]), _c('scroll-header', [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("关于 About EEUI")])]), _vm._l((_vm.abouts), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openWeb(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }), (_vm.history.length > 0) ? _c('scroll-header', {
    staticClass: ["list-title-box"]
  }, [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("扫码历史")]), _c('text', {
    staticClass: ["list-subtitle"],
    on: {
      "click": function($event) {
        _vm.clearHistory()
      }
    }
  }, [_vm._v("清空历史")])]) : _vm._e(), (_vm.history.length > 0) ? _c('div', _vm._l((_vm.history), function(text, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openAuto(text)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('text', {
      staticClass: ["list-left-title-history"]
    }, [_vm._v(_vm._s(text))])]), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  })) : _vm._e()], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-57509004!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-57509004!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });
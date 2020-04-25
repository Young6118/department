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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component_search.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_search.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_search.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      text: '按钮',
      width: '702px',
      height: '80px',
      loading: false,
      disabled: false,
      backgroundColor: '#FF5000',
      borderColor: '#FF5000',
      borderRadius: '8px',
      fontSize: '28px',
      color: '#FFFFFF',
      keywords: '',
      lists: [],
      page_size: 6,
      isSearch: false
    };
  },
  mounted: function mounted() {},
  computed: {
    eeuiStyle: function eeuiStyle() {
      var backgroundColor = this.backgroundColor,
          borderColor = this.borderColor,
          borderRadius = this.borderRadius,
          text = this.text,
          color = this.color,
          loading = this.loading,
          disabled = this.disabled;
      var customStyle = {};

      if (backgroundColor) {
        customStyle.backgroundColor = backgroundColor;
      }

      if (borderColor) {
        customStyle.borderColor = borderColor;
        customStyle.borderWidth = "1px";
      }

      if (borderRadius) {
        customStyle.borderRadius = borderRadius;
      }

      if (text) {
        customStyle.text = text;
      }

      if (color) {
        customStyle.color = color;
      }

      customStyle.loading = loading;
      customStyle.disabled = disabled;
      return customStyle;
    },
    demoStyle: function demoStyle() {
      var width = this.width,
          height = this.height;
      var customStyle = {};
      customStyle.width = width;
      customStyle.height = height;
      return customStyle;
    }
  },
  methods: {
    search: function search() {
      eeui.toast(this.keywords);

      if (this.keywords) {
        this.refreshListener();
        this.isSearch = true;
      }
    },
    pullLoadListener: function pullLoadListener() {
      var _this = this;

      var count = this.lists.length;

      if (count >= 50) {
        this.$refs.reflectName.setHasMore(false);
        return;
      }

      setTimeout(function () {
        for (var i = 1; i <= _this.page_size; i++) {
          _this.lists.push(count + i);
        }

        _this.$refs.reflectName.pullloaded();

        eeui.toast("加载" + (count + 1) + "~" + _this.lists.length + "数据成功");
      }, 300);
    },
    refreshListener: function refreshListener() {
      var _this2 = this;

      var newList = [];

      for (var i = 1; i <= this.page_size; i++) {
        newList.push(i);
      }

      setTimeout(function () {
        _this2.lists = newList;

        _this2.$refs.reflectName.setHasMore(true);

        _this2.$refs.reflectName.refreshed();

        eeui.toast("刷新数据成功");
      }, 300);
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6753daa4!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_search.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6753daa4!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_search.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "navbar": {
    "width": "750",
    "height": "100"
  },
  "page-navbar": {
    "width": "750",
    "height": "90"
  },
  "page-navbar-title": {
    "color": "#ffffff",
    "fontSize": "28"
  },
  "title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "iconr": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "list-title": {
    "marginTop": "24",
    "marginBottom": "12",
    "paddingTop": "36",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "fontSize": "28",
    "color": "#757575"
  },
  "list-item": {
    "width": "750",
    "flexDirection": "row"
  },
  "button": {
    "fontSize": "24",
    "marginLeft": "37.5",
    "marginRight": "37.5",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "list-input-item": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "cell": {
    "paddingLeft": "50",
    "fontSize": "24",
    "color": "#666666"
  },
  "switch": {
    "marginRight": "40"
  },
  "input": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "70",
    "fontSize": "30",
    "borderRadius": "10",
    "width": "490",
    "borderColor": "#2d63da"
  },
  "icon": {
    "color": "#ffffff",
    "marginRight": "30",
    "width": "60",
    "height": "80",
    "fontSize": "60"
  },
  "panel": {
    "width": "750",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "panel-item": {
    "width": "750",
    "paddingTop": "22",
    "paddingBottom": "22",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "house-info": {
    "width": "520",
    "height": "180",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "house-type": {
    "width": "750",
    "height": "60",
    "backgroundColor": "#f8f8f8",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "borderBottomColor": "#e4e4e4",
    "borderBottomWidth": "1"
  },
  "type-button": {
    "width": "80",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "color": "#2d63da",
    "fontSize": "26",
    "backgroundColor": "#f8f8f8"
  },
  "panel-text": {
    "fontSize": "26",
    "textAlign": "left"
  },
  "house-tag": {
    "flexDirection": "row"
  },
  "house-tag-text": {
    "lineHeight": "50",
    "paddingLeft": "10",
    "backgroundColor": "#f8f8f8",
    "color": "#222222",
    "width": "380"
  },
  "fang-img": {
    "marginLeft": "10",
    "width": "200",
    "height": "140"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6753daa4!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_search.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6753daa4!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_search.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["page-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "autofocus": true,
      "placeholder": "丈八北路 | 西二旗 | 张江地铁站",
      "type": "text",
      "value": (_vm.keywords)
    },
    on: {
      "input": function($event) {
        _vm.keywords = $event.target.attr.value
      }
    }
  })]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.search
    }
  }, [_c('icon', {
    staticClass: ["icon"],
    attrs: {
      "eeui": {
        content: 'ios-search'
      }
    }
  })], 1)], 1), (_vm.isSearch) ? _c('div', {
    staticClass: ["house-type"]
  }, [_c('button', {
    staticClass: ["type-button"],
    attrs: {
      "text": "城市",
      "model": "white"
    }
  }), _c('button', {
    staticClass: ["type-button"],
    staticStyle: {
      marginRight: "10px"
    },
    attrs: {
      "text": "类型",
      "model": "white"
    }
  })], 1) : _vm._e(), _c('scroll-view', {
    ref: "reflectName",
    staticClass: ["list"],
    attrs: {
      "eeui": {
        pullTips: true,
      }
    },
    on: {
      "itemClick": _vm.itemClick,
      "pullLoadListener": _vm.pullLoadListener,
      "refreshListener": _vm.refreshListener
    }
  }, _vm._l((_vm.lists), function(num, index) {
    return _c('div', {
      key: index,
      staticClass: ["panel"]
    }, [_c('div', {
      staticClass: ["panel-item"]
    }, [_c('image', {
      staticClass: ["fang-img"],
      attrs: {
        "resize": "cover",
        "src": "https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"
      }
    }), _c('div', {
      staticClass: ["house-info"]
    }, [_c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v("檀香府南北通透三居室")]), _c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v("135.24㎡/南 北/高楼层 (共6层)")]), _c('div', {
      staticClass: ["house-tag"]
    }, [_c('image', {
      staticStyle: {
        height: "45px",
        width: "120px"
      },
      attrs: {
        "src": "https://img.ljcdn.com/beike/haofanglogo/1573111250229.png"
      }
    }), _c('text', {
      staticClass: ["house-tag-text"]
    }, [_vm._v("诚心卖，省心买")])]), _c('div', {
      staticClass: ["house-tag"]
    }, [_c('text', {
      staticClass: ["panel-text"],
      staticStyle: {
        color: "#fe615a",
        marginRight: "40px"
      }
    }, [_vm._v("439 万")]), _c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v("32460.8 元/平米")])])])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/component_search.vue?entry=true":
/*!***************************************************!*\
  !*** ./src/pages/component_search.vue?entry=true ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-6753daa4!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./component_search.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6753daa4!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_search.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./component_search.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_search.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-6753daa4!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./component_search.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6753daa4!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_search.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/component_search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6753daa4"
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
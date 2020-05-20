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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component_department.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_department.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_department.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
var stream = weex.requireModule('stream') || {};
var modal = weex.requireModule('modal') || {};
var API = 'https://api.unsplash.com/search/photos?page=1&query=ocean&orientation=landscape&client_id=8cd8d9f168aa2f3f57edfd5a883305df7f7ba96a9fb414231d77c244213efce8';
var mmmm = app.requireModule('modal');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imageList: [{
        src: 'http://img2.imgtn.bdimg.com/it/u=2296151058,2315950536&fm=11&gp=0.jpg'
      }, {
        src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938633178,3861272544&fm=26&gp=0.jpg'
      }, {
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3084942693,506713247&fm=26&gp=0.jpg'
      }],
      page_size: 4,
      department: {
        title: '汕尾恒大聘请首付',
        price: '132000',
        phone: '0880-3331223'
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    },
    goTo: function goTo(path) {
      eeui.toast({
        message: path,
        gravity: "middle"
      });
    },
    push: function push(file) {
      eeui.openPage({
        url: file,
        pageType: 'app'
      });
    },
    back: function back() {
      eeui.closePage(null);
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-52662458!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_department.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-52662458!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_department.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "iconr": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "tabbar": {
    "width": "750",
    "flex": 1
  },
  "page-content": {
    "width": "750",
    "paddingTop": 0,
    "paddingBottom": 0,
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": "24",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "menu-text": {
    "fontSize": "30",
    "paddingTop": "40",
    "paddingRight": "40",
    "paddingBottom": "40",
    "paddingLeft": "40",
    "textAlign": "right",
    "width": "750",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "page-navbar": {
    "width": "750",
    "height": "90"
  },
  "page-navbar-title": {
    "color": "#ffffff",
    "fontSize": "28"
  },
  "page-content-image": {
    "width": "480",
    "height": "480",
    "marginTop": "30",
    "marginBottom": "30"
  },
  "city": {
    "color": "#ffffff",
    "fontSize": "30",
    "lineHeight": "70"
  },
  "arrown-down": {
    "color": "#ffffff",
    "width": "40",
    "height": "20",
    "fontSize": "30",
    "lineHeight": "70"
  },
  "feedbac-icon": {
    "color": "#ffffff",
    "width": "120",
    "height": "40",
    "fontSize": "40"
  },
  "input": {
    "marginLeft": "20",
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "70",
    "fontSize": "30",
    "lineHeight": "70",
    "color": "#9c9a9a",
    "borderRadius": "10",
    "width": "490",
    "borderColor": "#2d63da"
  },
  "input-right": {
    "backgroundColor": "#ffffff",
    "borderRightWidth": "1",
    "borderRightColor": "#2d63da",
    "height": "70",
    "width": "105",
    "borderTopWidth": "1",
    "borderTopColor": "#2d63da",
    "borderBottomWidth": "1",
    "borderBottomColor": "#2d63da",
    "marginRight": "20",
    "borderBottomRightRadius": "10",
    "borderTopRightRadius": "10"
  },
  "flex": {
    "color": "#ffffff",
    "width": "120",
    "height": "100",
    "paddingLeft": "30",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "marquee": {
    "height": "60",
    "backgroundColor": "#ffffff",
    "paddingLeft": "20"
  },
  "banner": {
    "width": "750",
    "height": "420"
  },
  "banner-frame": {
    "width": "750",
    "height": "420",
    "position": "relative"
  },
  "banner-image": {
    "width": "750",
    "height": "420"
  },
  "grid": {
    "width": "750",
    "height": "180"
  },
  "grid-item": {
    "width": "150",
    "height": "180",
    "alignItems": "center"
  },
  "item-image": {
    "backgroundColor": "#3e9636",
    "fontSize": "60",
    "marginTop": "10",
    "color": "#ffffff",
    "width": "120",
    "height": "120",
    "borderRadius": 40
  },
  "item-title": {
    "width": "250",
    "height": "50",
    "lineHeight": "50",
    "textAlign": "center"
  },
  "myhouse": {
    "textAlign": "left",
    "width": "750",
    "marginTop": "25",
    "paddingTop": "15",
    "paddingRight": "50",
    "paddingBottom": "15",
    "paddingLeft": "50",
    "fontSize": "30"
  },
  "all-house": {
    "width": 600,
    "paddingTop": "15",
    "paddingRight": "50",
    "paddingBottom": "15",
    "paddingLeft": "50",
    "fontSize": "30"
  },
  "house-div": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "750",
    "height": "200"
  },
  "house-msg": {
    "width": "650",
    "height": "200",
    "borderWidth": "1",
    "borderRadius": "20",
    "borderColor": "#20c08d",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "house-text": {
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50",
    "height": "112",
    "fontSize": "24",
    "marginBottom": "30"
  },
  "button": {
    "fontSize": "30",
    "width": "650",
    "height": "60",
    "color": "#20c08d",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderWidth": "1",
    "borderRadius": "20",
    "borderColor": "#20c08d"
  },
  "buy-buttom": {
    "width": 200,
    "height": "150",
    "border": "none"
  },
  "list": {
    "width": "750",
    "flex": 1
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
  "msg-item": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "house-info": {
    "width": "520",
    "height": "180",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "msg-info": {
    "width": "600",
    "height": "160",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "msg-text": {
    "color": "#666666"
  },
  "house-type": {
    "marginTop": "25",
    "width": "750",
    "height": "60",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "type-button": {
    "width": "72",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "color": "#2d63da",
    "fontSize": "26"
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
  },
  "avatar-img": {
    "width": "120",
    "height": "120",
    "borderRadius": "60",
    "marginLeft": "15"
  },
  "msg-name-time": {
    "height": "80",
    "alignItems": "center",
    "paddingTop": "30",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "navbar": {
    "width": "100",
    "height": "100",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-52662458!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_department.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-52662458!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_department.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('banner', {
    staticClass: ["banner"],
    on: {
      "itemClick": _vm.itemClick
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["banner-frame"]
    }, [_c('image', {
      staticClass: ["banner-image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  })), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }, [_c('div', [_c('div', {
    staticStyle: {
      width: "450px",
      height: "150px"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "40px",
      lineHeight: "120px"
    }
  }, [_vm._v(_vm._s(_vm.department.title))])]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticStyle: {
      height: "40px",
      fontSize: "28px"
    }
  }, [_vm._v("参考价格：")]), _c('text', {
    staticStyle: {
      height: "40px",
      color: "#fe615a",
      fontSize: "28px"
    }
  }, [_vm._v(_vm._s(_vm.department.price) + "元/㎡")])]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticStyle: {
      height: "40px",
      fontSize: "28px"
    }
  }, [_vm._v("售楼热线：")]), _c('text', {
    staticStyle: {
      height: "40px",
      color: "#fe615a",
      fontSize: "28px"
    }
  }, [_vm._v(_vm._s(_vm.department.phone))])])]), _c('div', {
    staticStyle: {
      alignItems: "center"
    }
  }, [_c('button', {
    staticStyle: {
      width: "300px",
      height: "120px"
    },
    attrs: {
      "text": "网上认购",
      "model": "yellow",
      "borderRadius": "0"
    }
  }), _c('button', {
    staticStyle: {
      width: "200px",
      height: "200px",
      marginTop: "20px"
    },
    attrs: {
      "text": "咨询客服",
      "model": "red",
      "borderRadius": "100"
    }
  })], 1)]), _c('div', {
    staticStyle: {
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "750px",
      height: "150px",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }, [_c('div', [_c('icon', {
    staticStyle: {
      width: "100px",
      height: "100px",
      color: "red",
      fontSize: "100px"
    },
    attrs: {
      "content": "ios-call"
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "30px",
      textAlign: "center",
      width: "100px"
    }
  }, [_vm._v("电话")])], 1), _c('div', [_c('icon', {
    staticStyle: {
      width: "100px",
      height: "100px",
      color: "red",
      fontSize: "100px"
    },
    attrs: {
      "content": "ios-star-outline"
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "30px",
      textAlign: "center",
      width: "100px"
    }
  }, [_vm._v("收藏")])], 1), _c('div', [_c('icon', {
    staticStyle: {
      width: "100px",
      height: "100px",
      color: "red",
      fontSize: "100px"
    },
    attrs: {
      "content": "tb-share-light"
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "30px",
      textAlign: "center",
      width: "100px"
    }
  }, [_vm._v("分享")])], 1), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }, [_c('button', {
    staticClass: ["buy-buttom"],
    attrs: {
      "text": "网上认购",
      "model": "yellow",
      "borderRadius": "0"
    }
  }), _c('button', {
    staticClass: ["buy-buttom"],
    attrs: {
      "text": "立即咨询",
      "model": "red",
      "borderRadius": "0"
    }
  })], 1)]), _c('icon', {
    staticClass: ["navbar"],
    attrs: {
      "content": "tb-back-android"
    },
    on: {
      "click": _vm.back
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/component_department.vue?entry=true":
/*!*******************************************************!*\
  !*** ./src/pages/component_department.vue?entry=true ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-52662458!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./component_department.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-52662458!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_department.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./component_department.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_department.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-52662458!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./component_department.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-52662458!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_department.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/component_department.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-52662458"
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
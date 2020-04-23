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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/plugin_websocket.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_websocket.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_websocket.vue ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var websocket = app.requireModule('eeuiWebsocket');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: 'ws://echo.websocket.org',
      onLine: false,
      msgLists: [],
      sendText: ''
    };
  },
  mounted: function mounted() {
    if (typeof websocket === 'undefined') {
      eeui.alert({
        title: '温馨提示',
        message: "检测到未安装websocket插件，安装详细请登录https://eeui.app/"
      });
      return;
    }

    this.connect();
  },
  methods: {
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    },
    connect: function connect() {
      var _this = this;

      var loaddingName = eeui.loading({
        title: '正在连接，请稍后...'
      });
      websocket.connect(this.url, function (result) {
        switch (result.status) {
          case 'open':
            //连接已经准备好接受和发送数据
            eeui.loadingClose(loaddingName);
            _this.onLine = true;

            _this.addMsg({
              type: 'left',
              msg: '请问您有什么问题？'
            });

            break;

          case 'message':
            //接收到新消息：result.msg
            _this.addMsg({
              type: 'left',
              msg: result.msg
            });

            break;

          case 'closed':
          case 'failure':
          case 'error':
            //连接关闭
            eeui.loadingClose(loaddingName);
            eeui.confirm({
              title: "温馨提示",
              message: "连接关闭，点击确定重新连接？",
              buttons: ["取消", "确定"]
            }, function (result) {
              if (result.status === "click") {
                if (result.title === "确定") {
                  _this.connect();
                } else {
                  eeui.closePage();
                }
              }
            });
            break;
        }
      });
    },
    addMsg: function addMsg(data) {
      var _this2 = this;

      this.msgLists.push(data);
      setTimeout(function () {
        _this2.$refs.myLists.smoothScrollToPosition(-1);
      }, 300);
    },
    send: function send() {
      var msg = this.sendText.trim();

      if (msg === "") {
        eeui.toast("请输入要发送的内容！");
        return;
      }

      this.sendText = "";
      eeui.keyboardHide();

      if (!this.onLine) {
        eeui.alert({
          title: '温馨提示',
          message: "检测到未安装websocket插件，安装详细请登录https://eeui.app/"
        });
        return;
      }

      this.addMsg({
        type: 'right',
        msg: msg
      });
      websocket.send(msg);
    },
    returnSend: function returnSend(data) {
      if (data.returnKeyType === 'send') {
        this.send(data.value);
      }
    },
    startAjax: function startAjax() {
      var _this3 = this;

      this.status = "";
      this.content = "";
      eeui.ajax({
        url: this.url,
        dataType: 'text',
        beforeAfter: true
      }, function (res) {
        if (_this3.status === "") {
          _this3.status += res.status;
        } else {
          _this3.status += " > " + res.status;
        }

        if (res.status === "success") {
          _this3.content = res.result;
        }
      });
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-8ac4b682!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_websocket.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-8ac4b682!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_websocket.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1
  },
  "navbar": {
    "width": "750",
    "height": "100"
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
  "lists": {
    "flex": 1,
    "paddingBottom": "25",
    "backgroundColor": "#e8e8e8"
  },
  "left": {
    "width": "700",
    "flexDirection": "row",
    "marginTop": "25",
    "marginLeft": "25",
    "marginRight": "25"
  },
  "right": {
    "width": "700",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "marginTop": "25",
    "marginLeft": "25",
    "marginRight": "25"
  },
  "photo": {
    "width": "90",
    "height": "90",
    "backgroundColor": "#ffffff",
    "borderRadius": "45"
  },
  "detail": {
    "marginLeft": "24",
    "marginRight": "24",
    "justifyContent": "center",
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "borderRadius": "4",
    "backgroundColor": "#ffffff"
  },
  "detail-right": {
    "backgroundColor": "#7CBF57"
  },
  "text": {
    "maxWidth": "520",
    "fontSize": "28"
  },
  "bottom": {
    "width": "750",
    "height": "98",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "bottom-input": {
    "width": "570",
    "height": "80",
    "lineHeight": "80",
    "marginLeft": "20",
    "fontSize": "28",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "bottom-line": {
    "position": "absolute",
    "top": "89",
    "left": "20",
    "width": "570",
    "height": "1",
    "backgroundColor": "#dddddd"
  },
  "bottom-button": {
    "width": "130",
    "height": "70",
    "marginLeft": "10",
    "marginRight": "20",
    "lineHeight": "70",
    "fontSize": "24",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#00B4FF",
    "borderRadius": "6"
  },
  "bottom-button-null": {
    "width": "130",
    "height": "70",
    "marginLeft": "10",
    "marginRight": "20",
    "lineHeight": "70",
    "fontSize": "24",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#e4e4e4",
    "borderRadius": "6"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-8ac4b682!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_websocket.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-8ac4b682!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_websocket.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("即时通讯")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('markets/eeui/websocket')
      }
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "md-code-working"
    }
  })], 1)], 1), _c('scroll-view', {
    ref: "myLists",
    staticClass: ["lists"]
  }, _vm._l((_vm.msgLists), function(detail, index) {
    return _c('div', {
      key: index
    }, [(detail.type === 'left') ? _c('div', {
      staticClass: ["left"]
    }, [_c('image', {
      staticClass: ["photo"],
      attrs: {
        "resize": "cover",
        "src": "https://eeui.app/assets/grid/grid_7.jpg"
      }
    }), _c('div', {
      staticClass: ["detail"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(detail.msg))])])]) : _c('div', {
      staticClass: ["right"]
    }, [_c('div', {
      staticClass: ["detail", "detail-right"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(detail.msg))])]), _c('image', {
      staticClass: ["photo"],
      attrs: {
        "resize": "cover",
        "src": "https://eeui.app/assets/grid/grid_10.jpg"
      }
    })])])
  })), _c('div', {
    staticClass: ["bottom"]
  }, [_c('input', {
    staticClass: ["bottom-input"],
    attrs: {
      "hideDoneButton": true,
      "upriseOffset": 9,
      "placeholder": "输入要发送的内容",
      "returnKeyType": "send",
      "value": (_vm.sendText)
    },
    on: {
      "return": _vm.returnSend,
      "input": function($event) {
        _vm.sendText = $event.target.attr.value
      }
    }
  }), _c('text', {
    class: [_vm.sendText.trim() === '' ? 'bottom-button-null' : 'bottom-button'],
    on: {
      "click": _vm.send
    }
  }, [_vm._v("发送")]), _c('div', {
    staticClass: ["bottom-line"]
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/plugin_websocket.vue?entry=true":
/*!***************************************************!*\
  !*** ./src/pages/plugin_websocket.vue?entry=true ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-8ac4b682!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./plugin_websocket.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-8ac4b682!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_websocket.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./plugin_websocket.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_websocket.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-8ac4b682!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./plugin_websocket.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-8ac4b682!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_websocket.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/plugin_websocket.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8ac4b682"
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
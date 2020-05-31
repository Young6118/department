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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/plugin_rongim.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_rongim.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_rongim.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
var rongim = app.requireModule('eeuiRongim');

var ranNum = function ranNum(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      info: '',
      roomInfo: '',
      lists: [],
      msg: '',
      userInfo: {
        avatar: 'https://www.baidu.com/img/baidu_resultlogo@2.png',
        username: '测试',
        userid: ranNum(1, 100)
      }
    };
  },
  mounted: function mounted() {
    this.login();
    this.$refs.reflectName.setHasMore(true);
    this.getAll();
  },
  beforeDestroy: function beforeDestroy() {
    rongim.quitChatRoom(function () {
      rongim.logout();
      rongim.removeEventHandler();
    });
  },
  methods: {
    getAll: function getAll() {
      var _this = this;

      this.lists = [];
      rongim.addEventHandler(function (res) {
        var now = new Date();
        eeuiLog.log(res);

        _this.lists.push({
          avatar: res.userimg,
          user: res.username + res.userid,
          text: res.body,
          time: "".concat(now.getFullYear(), "/").concat((now.getMonth() + 1).toString().padStart(2, '0'), "/").concat(now.getDate().toString().padStart(2, '0'), " ").concat(now.getHours().toString().padStart(2, '0'), ":").concat(now.getMinutes().toString().padStart(2, '0'), ":").concat(now.getSeconds().toString().padStart(2, '0'))
        });
      });
    },
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    },
    itemClick: function itemClick(params) {
      eeui.toast("点击了" + (params.position + 1) + "项，可以引用回复");
    },
    login: function login() {
      var _this2 = this;

      if (typeof rongim === 'undefined') {
        eeui.alert({
          title: '温馨提示',
          message: "检测到未安装rongim插件，安装详细请登录https://eeui.app/"
        });
        return;
      }

      eeui.loading();
      rongim.login({
        userid: this.userInfo.userid,
        username: this.userInfo.username,
        userimg: this.userInfo.avatar
      }, function (result) {
        eeui.loadingClose();
        _this2.info = result;
        rongim.joinChatRoom(1314521, 50, function (res) {
          _this2.roomInfo = res;
        });
      });
    },
    pullLoadListener: function pullLoadListener() {
      var _this3 = this;

      var count = this.lists.length;

      if (count >= 100) {
        this.$refs.reflectName.setHasMore(false);
        return;
      }

      setTimeout(function () {
        for (var i = 1; i <= 20; i++) {
          _this3.lists.push(count + i);
        }

        _this3.$refs.reflectName.pullloaded();

        eeui.toast("加载" + (count + 1) + "~" + _this3.lists.length + "数据成功");
      }, 1000);
    },
    refreshListener: function refreshListener() {
      var _this4 = this;

      var newList = [];

      for (var i = 1; i <= 20; i++) {
        newList.push(i);
      }

      setTimeout(function () {
        _this4.lists = newList;

        _this4.$refs.reflectName.setHasMore(true);

        _this4.$refs.reflectName.refreshed();

        eeui.toast("刷新数据成功");
      }, 1000);
    },
    sendMsg: function sendMsg() {
      var _this5 = this;

      if (this.msg) {
        rongim.sendTextMessage(this.msg, function (res) {
          if (res.status === 'success') {
            var now = new Date();

            _this5.lists.push({
              avatar: _this5.userInfo.avatar,
              user: _this5.userInfo.username + _this5.userInfo.userid,
              text: _this5.msg,
              time: "".concat(now.getFullYear(), "/").concat((now.getMonth() + 1).toString().padStart(2, '0'), "/").concat(now.getDate().toString().padStart(2, '0'), " ").concat(now.getHours().toString().padStart(2, '0'), ":").concat(now.getMinutes().toString().padStart(2, '0'), ":").concat(now.getSeconds().toString().padStart(2, '0'))
            });

            _this5.msg = '';
          } else {
            eeui.toast("发送失败");
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-33e72fdc!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_rongim.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-33e72fdc!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_rongim.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "content": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "info": {
    "fontSize": "22",
    "marginBottom": "20"
  },
  "button": {
    "fontSize": "24",
    "textAlign": "center",
    "marginTop": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "width": "220",
    "color": "#ffffff",
    "backgroundColor": "#00B4FF"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "panel": {
    "width": "750",
    "height": "35"
  },
  "panel-item": {
    "width": "700",
    "height": "30",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "panel-text": {
    "fontSize": "30",
    "textAlign": "center"
  },
  "flex-input": {
    "flexDirection": "row",
    "width": "750",
    "height": "90",
    "justifyContent": "space-between"
  },
  "input": {
    "marginLeft": "20",
    "backgroundColor": "#ffffff",
    "paddingLeft": "20",
    "borderWidth": "1",
    "height": "70",
    "fontSize": "30",
    "borderRadius": "10",
    "width": "600",
    "borderColor": "#2d63da"
  },
  "icon": {
    "width": "60",
    "height": "70",
    "marginRight": "30",
    "fontSize": "67"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-33e72fdc!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_rongim.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-33e72fdc!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_rongim.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("聊天 " + _vm._s(_vm.info.status))])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('markets/eeui/rongim')
      }
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "md-code-working"
    }
  })], 1)], 1), _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["info"]
  }), _c('scroll-view', {
    ref: "reflectName",
    staticClass: ["list"],
    attrs: {
      "pullTips": "false"
    }
  }, _vm._l((_vm.lists), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["panel"]
    }, [_c('div', {
      staticClass: ["panel-item"]
    }, [_c('image', {
      staticStyle: {
        width: "30px",
        height: "30px"
      },
      attrs: {
        "src": item.avatar
      }
    }), _c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v(_vm._s(item.user))]), _c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v(_vm._s(item.text))]), _c('text', {
      staticClass: ["panel-text"]
    }, [_vm._v(_vm._s(item.time))])])])
  })), _c('div', {
    staticClass: ["flex-input"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "autofocus": true,
      "placeholder": "输入文字点击发送",
      "type": "text",
      "value": (_vm.msg)
    },
    on: {
      "input": function($event) {
        _vm.msg = $event.target.attr.value
      }
    }
  }), _c('icon', {
    staticClass: ["icon"],
    attrs: {
      "eeui": {
        content: 'md-send'
      }
    },
    on: {
      "click": _vm.sendMsg
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/plugin_rongim.vue?entry=true":
/*!************************************************!*\
  !*** ./src/pages/plugin_rongim.vue?entry=true ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-33e72fdc!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./plugin_rongim.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-33e72fdc!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/plugin_rongim.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./plugin_rongim.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/plugin_rongim.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-33e72fdc!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./plugin_rongim.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-33e72fdc!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/plugin_rongim.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/plugin_rongim.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33e72fdc"
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
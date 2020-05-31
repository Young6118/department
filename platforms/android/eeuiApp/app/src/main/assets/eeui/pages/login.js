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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/login.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/login.vue ***!
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
var eeui = app.requireModule('eeui');

var ranNum = function ranNum(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showForm: 1,
      user: {
        name: '',
        password: ''
      },
      loading: false,
      isRegister: false,
      text: '账号登录',
      textSignIn: '账号注册'
    };
  },
  mounted: function mounted() {},
  computed: {
    validate: function validate() {
      return this.user.name && this.user.password.length > 7;
    }
  },
  methods: {
    submit: function submit(command) {
      var _this = this;

      switch (command) {
        case 'login':
          eeuiLog.log('登录');
          this.loading = true;
          setTimeout(function () {
            _this.loading = false;
            eeui.openPage({
              url: 'component_tabbar.js',
              pageType: 'app'
            });
          }, 1000);
          break;

        case 'register':
          this.loading = true;
          setTimeout(function () {
            _this.loading = false;

            _this.goLogin(2, false);

            _this.user.password = '';
          }, 1000);
          break;
      }
    },
    goLogin: function goLogin(num, reg) {
      var _this2 = this;

      this.showForm = 0;
      this.$nextTick(function (res) {
        _this2.showForm = num;
      });
      this.isRegister = reg;
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-c40149d6!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/login.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-c40149d6!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/login.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
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
    "height": "100"
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
    "width": "750"
  },
  "input": {
    "marginLeft": "20",
    "backgroundColor": "#ffffff",
    "paddingLeft": "20",
    "borderWidth": "1",
    "height": "100",
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

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-c40149d6!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/login.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-c40149d6!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/login.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [(_vm.showForm === 1) ? _c('div', {
    staticClass: ["app"],
    staticStyle: {
      backgroundColor: "#fff"
    }
  }, [_c('div', {
    staticStyle: {
      width: "750px",
      marginBottom: "40px"
    }
  }, [_c('text', {
    staticStyle: {
      marginLeft: "100px",
      fontSize: "50px",
      fontWeight: "bold"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.isRegister ? _vm.textSignIn : _vm.text) + "\n            ")])]), _c('div', {
    staticClass: ["flex-input"]
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "tb-people"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "autofocus": true,
      "placeholder": "用户名",
      "type": "text",
      "value": (_vm.user.name)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.user, "name", $event.target.attr.value)
      }
    }
  })], 1), _c('div', {
    staticClass: ["flex-input"],
    staticStyle: {
      marginTop: "30px"
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "tb-lock"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": _vm.isRegister ? '请输入密码，7位以上' : '请输入密码',
      "value": (_vm.user.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.user, "password", $event.target.attr.value)
      }
    }
  })], 1), (_vm.isRegister) ? _c('button', {
    staticStyle: {
      width: "700px",
      height: "90px",
      marginTop: "60px"
    },
    attrs: {
      "disabled": !_vm.validate,
      "text": "注册账号",
      "backgroundColor": "#6abaff",
      "borderRadius": "30",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.submit('register')
      }
    }
  }) : _c('button', {
    staticStyle: {
      width: "700px",
      height: "90px",
      marginTop: "60px"
    },
    attrs: {
      "disabled": !_vm.validate,
      "text": "登录账号",
      "backgroundColor": "#6abaff",
      "borderRadius": "30",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.submit('login')
      }
    }
  }), (!_vm.isRegister) ? _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticStyle: {
      marginTop: "50px",
      fontSize: "25px",
      textAlign: "left",
      width: "140px",
      marginLeft: "50px"
    }
  }, [_vm._v("没有账号？")]), _c('text', {
    staticStyle: {
      marginTop: "50px",
      fontSize: "25px",
      textAlign: "left",
      width: "600px",
      color: "#6abaff"
    },
    on: {
      "click": function($event) {
        _vm.isRegister = true
      }
    }
  }, [_vm._v("立即注册")])]) : _vm._e()], 1) : (_vm.showForm === 2) ? _c('div', {
    staticClass: ["app"],
    staticStyle: {
      backgroundColor: "#8E8F90",
      width: "750px"
    }
  }, [_c('div', {
    staticStyle: {
      backgroundColor: "#fff",
      height: "800px",
      width: "600px",
      alignItems: "center"
    }
  }, [_c('div', {
    staticStyle: {
      width: "600px",
      backgroundColor: "#6abaff",
      height: "400px",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('icon', {
    staticStyle: {
      width: "150px",
      height: "150px",
      color: "#fff",
      fontSize: "150px"
    },
    attrs: {
      "content": "ios-checkmark-circle"
    }
  })], 1), _c('text', {
    staticStyle: {
      fontSize: "30px",
      width: "330px",
      lineHeight: "30px",
      marginLeft: "-90px",
      marginTop: "60px"
    }
  }, [_vm._v("\n                您已注册成功!\n            ")]), _c('button', {
    staticStyle: {
      width: "400px",
      height: "90px",
      marginTop: "60px"
    },
    attrs: {
      "backgroundColor": "#6abaff",
      "text": "点击去登录"
    },
    on: {
      "click": function($event) {
        _vm.goLogin(1, false)
      }
    }
  })], 1)]) : (_vm.showForm === 3) ? _c('div', {
    staticClass: ["app"],
    staticStyle: {
      backgroundColor: "#8E8F90",
      width: "750px"
    }
  }, [_c('div', {
    staticStyle: {
      backgroundColor: "#fff",
      height: "800px",
      width: "600px",
      alignItems: "center"
    }
  }, [_c('div', {
    staticStyle: {
      width: "600px",
      backgroundColor: "#6abaff",
      height: "400px",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('icon', {
    staticStyle: {
      width: "150px",
      height: "150px",
      color: "red",
      fontSize: "150px"
    },
    attrs: {
      "content": "ios-close-circle"
    }
  })], 1), _c('text', {
    staticStyle: {
      fontSize: "30px",
      width: "460px",
      lineHeight: "30px",
      marginLeft: "-90px",
      marginTop: "60px"
    }
  }, [_vm._v("\n                注册失败，请检查网络!\n            ")]), _c('button', {
    staticStyle: {
      width: "400px",
      height: "90px",
      marginTop: "60px"
    },
    attrs: {
      "backgroundColor": "#6abaff",
      "text": "点击重新注册"
    },
    on: {
      "click": function($event) {
        _vm.goLogin(1, true)
      }
    }
  })], 1)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/login.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/login.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-c40149d6!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./login.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-c40149d6!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/login.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./login.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/login.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-c40149d6!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./login.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-c40149d6!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/login.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c40149d6"
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
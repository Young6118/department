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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component_button.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_button.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_button.vue ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      color: '#FFFFFF'
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.text = '按钮文字';
    });
  },
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
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-0c0dff38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_button.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-0c0dff38!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_button.vue ***!
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
    "paddingRight": "50",
    "flex": 1,
    "height": "90",
    "textAlign": "right",
    "fontSize": "28"
  },
  "demo-item": {
    "width": "750",
    "paddingTop": "30",
    "paddingBottom": "30",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-0c0dff38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_button.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-0c0dff38!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_button.vue ***!
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
  }, [_vm._v("常用按钮")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('component/button')
      }
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "md-code-working"
    }
  })], 1)], 1), _c('scroller', {
    staticClass: ["list"]
  }, [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("预设样式")]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '默认'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '红色',
        model: 'red'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '绿色',
        model: 'green'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '蓝色',
        model: 'blue'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '粉红',
        model: 'pink'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '黄色',
        model: 'yellow'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '橙色',
        model: 'orange'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '灰色',
        model: 'gray'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '黑色',
        model: 'black'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '白色',
        model: 'white'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '加载中',
        loading: true
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '禁用',
        disabled: true
      }
    }
  })], 1), _c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("自定义样式")]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮文字")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "文字",
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        _vm.text = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("是否加载中")]), _c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.loading
    },
    on: {
      "change": function($event) {
        _vm.loading = !_vm.loading
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("是否禁用")]), _c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.disabled
    },
    on: {
      "change": function($event) {
        _vm.disabled = !_vm.disabled
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮宽度")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现, 默认全屏",
      "value": (_vm.width)
    },
    on: {
      "input": function($event) {
        _vm.width = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮高度")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现, 默认高度80px",
      "value": (_vm.height)
    },
    on: {
      "input": function($event) {
        _vm.height = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("背景颜色")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现",
      "value": (_vm.backgroundColor)
    },
    on: {
      "input": function($event) {
        _vm.backgroundColor = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("边框颜色")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现",
      "value": (_vm.borderColor)
    },
    on: {
      "input": function($event) {
        _vm.borderColor = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("边框圆角")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现,默认8px",
      "value": (_vm.borderRadius)
    },
    on: {
      "input": function($event) {
        _vm.borderRadius = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["demo-item"]
  }, [_c('button', {
    staticClass: ["demoButton"],
    style: _vm.demoStyle,
    attrs: {
      "eeui": _vm.eeuiStyle
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/component_button.vue?entry=true":
/*!***************************************************!*\
  !*** ./src/pages/component_button.vue?entry=true ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-0c0dff38!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./component_button.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-0c0dff38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_button.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./component_button.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_button.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-0c0dff38!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./component_button.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-0c0dff38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_button.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/component_button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0c0dff38"
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
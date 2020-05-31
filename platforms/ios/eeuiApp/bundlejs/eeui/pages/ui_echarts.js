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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/ui_echarts.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/ui_echarts.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/ui_echarts.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lists: [{
        title: '折线图 Basic Line Chart',
        src: 'https://www.echartsjs.com/examples/data/thumb/line-simple.jpg',
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      }, {
        title: '柱状图 Bar Simple',
        src: 'https://www.echartsjs.com/examples/data/thumb/bar-simple.jpg',
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        }
      }, {
        title: '饼图 Customized Pie',
        src: 'https://www.echartsjs.com/examples/data/thumb/pie-custom.jpg',
        option: {
          backgroundColor: '#2c343c',
          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [{
              value: 335,
              name: '直接访问'
            }, {
              value: 310,
              name: '邮件营销'
            }, {
              value: 274,
              name: '联盟广告'
            }, {
              value: 235,
              name: '视频广告'
            }, {
              value: 400,
              name: '搜索引擎'
            }].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function animationDelay(idx) {
              return Math.random() * 200;
            }
          }]
        }
      }, {
        title: '散点图 Basic Scatter Chart',
        src: 'https://www.echartsjs.com/examples/data/thumb/scatter-simple.jpg',
        option: {
          xAxis: {},
          yAxis: {},
          series: [{
            symbolSize: 20,
            data: [[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]],
            type: 'scatter'
          }]
        }
      }, {
        title: 'K 线图 Basic Candlestick',
        src: 'https://www.echartsjs.com/examples/data/thumb/candlestick-simple.jpg',
        option: {
          xAxis: {
            data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
          },
          yAxis: {},
          series: [{
            type: 'k',
            data: [[20, 30, 10, 35], [40, 35, 30, 55], [33, 38, 33, 40], [40, 40, 32, 42]]
          }]
        }
      }]
    };
  },
  methods: {
    openDemo: function openDemo(title, option) {
      eeui.openPage({
        url: 'ui_echarts_demo',
        pageType: 'app',
        params: {
          title: title,
          options: JSON.stringify(option)
        }
      });
    },
    openMore: function openMore() {
      this.openViewUrl("https://www.echartsjs.com/examples/");
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-d9f9bf5a!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/ui_echarts.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-d9f9bf5a!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/ui_echarts.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "list": {
    "width": "750",
    "flex": 1
  },
  "item": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#d4d4d4"
  },
  "item-img": {
    "width": "120",
    "height": "120",
    "backgroundColor": "#f4f4f4"
  },
  "item-title": {
    "flex": 1,
    "paddingLeft": "22",
    "paddingRight": "22",
    "fontSize": "26"
  },
  "item-icon": {
    "fontSize": "24",
    "width": "40",
    "height": "40",
    "color": "#C9C9CE",
    "content": "'tb-right'"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-d9f9bf5a!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/ui_echarts.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-d9f9bf5a!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/ui_echarts.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Echarts 图表")])])], 1), _c('scroll-view', {
    staticClass: ["list"]
  }, [_vm._l((_vm.lists), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["item"],
      on: {
        "click": function($event) {
          _vm.openDemo(item.title, item.option)
        }
      }
    }, [_c('image', {
      staticClass: ["item-img"],
      attrs: {
        "src": item.src,
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["item-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('icon', {
      staticClass: ["item-icon"]
    })], 1)
  }), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.openMore
    }
  }, [_c('image', {
    staticClass: ["item-img"],
    attrs: {
      "src": "https://www.echartsjs.com/examples/data/thumb/bar-histogram.jpg",
      "resize": "cover"
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("更多图表效果.....")]), _c('icon', {
    staticClass: ["item-icon"]
  })], 1)], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/ui_echarts.vue?entry=true":
/*!*********************************************!*\
  !*** ./src/pages/ui_echarts.vue?entry=true ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-d9f9bf5a!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./ui_echarts.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-d9f9bf5a!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/ui_echarts.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./ui_echarts.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/ui_echarts.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-d9f9bf5a!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./ui_echarts.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-d9f9bf5a!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/ui_echarts.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/ui_echarts.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d9f9bf5a"
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
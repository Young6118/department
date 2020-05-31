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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component_tabbar.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_tabbar.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_tabbar.vue ***!
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
var eeui = app.requireModule('eeui');
var stream = weex.requireModule('stream') || {};
var modal = weex.requireModule('modal') || {};
var API = 'https://api.unsplash.com/search/photos?page=1&query=ocean&orientation=landscape&client_id=8cd8d9f168aa2f3f57edfd5a883305df7f7ba96a9fb414231d77c244213efce8';
var mmmm = app.requireModule('modal');

var _citypicker = app.requireModule('eeuiCitypicker');

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      scrollText: "🔥热搜   恒大绿洲  世纪华阳  东方金典  碧桂园  绿地  丈八北路   👉👉👉",
      imageList: [{
        src: 'http://img2.imgtn.bdimg.com/it/u=2296151058,2315950536&fm=11&gp=0.jpg'
      }, {
        src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938633178,3861272544&fm=26&gp=0.jpg'
      }, {
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3084942693,506713247&fm=26&gp=0.jpg'
      }],
      gridLists: [{
        icon: "ios-trending-up",
        title: '房价'
      }, {
        icon: "tb-news",
        title: "房产资讯"
      }],
      lists: [],
      menuList: [{
        title: '意见反馈',
        file: ''
      }, {
        title: '分享应用',
        file: ''
      }, {
        title: '检查更新',
        file: ''
      }, {
        title: '关于我们',
        file: ''
      }],
      page_size: 4,
      location: {
        province: '河南省',
        city: '洛阳市',
        area: '宜阳县'
      }
    };
  },
  created: function created() {// const self = this;
    // stream.fetch({
    //     method: 'GET',
    //     url: API,
    //     type:'json'
    // }, function (ret) {
    //     if (!ret.ok) {
    //         modal.toast({
    //             message: 'Network Error!',
    //             duration: 3
    //         });
    //     } else {
    //         self.posts = self.posts.concat(ret.data.results);
    //     }
    // });
  },
  mounted: function mounted() {
    for (var i = 1; i <= this.page_size; i++) {
      this.lists.push(i);
    }

    this.$refs.reflectName.setHasMore(true);
    this.$refs.infoView.setUrl('https://www.yuque.com/zhouyang-kk2um/mfgvkg');
    this.$refs.infoView.canGoBack(); // this.$refs.infoView.setJavaScript(`
    //     var style = document.createElement('style')
    //     style.type = 'text/css'
    //     var textNode = document.createTextNode(".m-book-header, .slogan, .footer { display: none; }")
    //     style.appendChild(textNode)
    //     document.body.appendChild(style)
    // `);
  },
  methods: {
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    },
    pageSelected: function pageSelected(params) {
      eeui.toast({
        message: "切换到第" + (params.position + 1) + "个标签页",
        gravity: "middle"
      });
    },
    tabReselect: function tabReselect(params) {
      eeui.toast({
        message: "第" + (params.position + 1) + "个标签页被再次点击",
        gravity: "middle"
      });
    },
    refreshListener: function refreshListener(params) {
      var _this = this;

      setTimeout(function () {
        eeui.toast({
          message: "刷新成功：" + params.tabName,
          gravity: "middle"
        });

        _this.$refs[params.tabName].refreshEnd();
      }, 10);
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
    itemClick: function itemClick(res) {
      mmmm.toast({
        message: "点击" + (res.position + 1) + "项",
        duration: 0.3
      });
      this.push('component_department');
    },
    pullLoadListener: function pullLoadListener() {
      var _this2 = this;

      var count = this.lists.length;

      if (count >= 30) {
        this.$refs.reflectName.setHasMore(false);
        return;
      }

      setTimeout(function () {
        for (var i = 1; i <= _this2.page_size; i++) {
          _this2.lists.push(count + i);
        }

        _this2.$refs.reflectName.pullloaded();

        eeui.toast("加载" + (count + 1) + "~" + _this2.lists.length + "数据成功");
      }, 1000);
    },
    refreshListener2: function refreshListener2() {
      var _this3 = this;

      var newList = [];

      for (var i = 1; i <= this.page_size; i++) {
        newList.push(i);
      }

      setTimeout(function () {
        _this3.lists = newList;

        _this3.$refs.reflectName.setHasMore(true);

        _this3.$refs.reflectName.refreshed();

        eeui.toast("刷新数据成功");
      }, 1000);
    },
    openPage4: function openPage4() {
      eeui.openPage({
        url: 'https://www.yuque.com/zhouyang-kk2um/mfgvkg',
        pageType: 'web'
      });
    },
    openPage: function openPage(url, params) {
      eeui.openPage({
        url: url,
        pageType: 'web',
        params: params
      });
    },
    goToTrend: function goToTrend() {
      var city = this.location.city.slice(0, 2);
      this.openPage('https://m.baidu.com/sf', {
        openapi: 1,
        dspName: 'iphone',
        from_sf: 1,
        pd: 'fang_price',
        resource_id: 4769,
        group: 'xf',
        word: city + '房价',
        title: '房价走势',
        onlycity: city,
        ext: {
          "sf_tab_name": "新房"
        },
        frsrcid: '',
        frorder: '',
        lid: '',
        fctab: '全城',
        cityregion: city
      });
    },
    citypicker: function citypicker() {
      var _this4 = this;

      if (typeof _citypicker === 'undefined') {
        eeui.alert({
          title: '温馨提示',
          message: "检测到未安装citypicker插件，安装详细请登录https://eeui.app/"
        });
        return;
      }

      _citypicker.select({
        province: this.location.province,
        city: this.location.city,
        area: this.location.area
      }, function (result) {
        _this4.location.province = result.province;
        _this4.location.city = result.city;
        _this4.location.area = result.area;
      });
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-f3a30b38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_tabbar.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-f3a30b38!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_tabbar.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
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
    "width": "370",
    "height": "180",
    "alignItems": "center"
  },
  "item-image": {
    "backgroundColor": "#6abaff",
    "fontSize": "60",
    "marginTop": "10",
    "color": "#ffffff",
    "width": "300",
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
    "paddingRight": "20",
    "paddingBottom": "15",
    "paddingLeft": "20",
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
    "height": "60"
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
  "webview": {
    "flex": 1
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-f3a30b38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_tabbar.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-f3a30b38!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_tabbar.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('tabbar', {
    ref: "reflectName",
    staticClass: ["tabbar"],
    attrs: {
      "preload": "false",
      "eeui": {
        tabType: 'bottom'
      }
    },
    on: {
      "pageSelected": _vm.pageSelected,
      "tabReselect": _vm.tabReselect
    }
  }, [_c('tabbar-page', {
    ref: "name_1",
    attrs: {
      "eeui": {
        tabName: 'name_1',
        title: '首页',
        selectedIcon: 'md-home'
      }
    },
    on: {
      "refreshListener": _vm.refreshListener
    }
  }, [_c('navbar', {
    staticClass: ["page-navbar"]
  }, [_c('navbar-item', {
    staticClass: ["flex"],
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.citypicker
    }
  }, [_c('text', {
    staticClass: ["city"]
  }, [_vm._v(_vm._s(_vm.location.city.slice(0, 2)))]), _c('icon', {
    staticClass: ["arrown-down"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-down'
      }
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["input"],
    on: {
      "click": function($event) {
        _vm.push('component_search.js')
      }
    }
  }, [_vm._v("丈八北路 | 西二旗 | 张江地铁站")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('text', {
    staticClass: ["input-right"],
    on: {
      "click": function($event) {
        _vm.push('component_search.js')
      }
    }
  })])], 1), _c('div', {
    staticClass: ["page-content"]
  }, [_c('marquee', {
    ref: "reflectName",
    staticClass: ["marquee"],
    staticStyle: {
      width: "750px",
      height: "50px",
      fontSize: "24px"
    },
    attrs: {
      "text": _vm.scrollText
    },
    on: {
      "click": function($event) {
        _vm.goTo('前往热搜页面')
      }
    }
  }), _c('banner', {
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
  })), _c('grid', {
    staticClass: ["grid"],
    attrs: {
      "divider": false,
      "columns": "2",
      "row": "1",
      "indicatorShow": false
    }
  }, [_c('div', {
    staticClass: ["grid-item"],
    on: {
      "click": _vm.goToTrend
    }
  }, [_c('icon', {
    staticClass: ["item-image"],
    attrs: {
      "eeui": {
        content: 'ios-trending-up'
      }
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("房价")])], 1), _c('div', {
    staticClass: ["grid-item"]
  }, [_c('icon', {
    staticClass: ["item-image"],
    attrs: {
      "eeui": {
        content: 'tb-news'
      }
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("房产资讯")])], 1)]), _c('div', {
    staticClass: ["house-type"]
  }, [_c('text', {
    staticClass: ["all-house"],
    on: {
      "click": function($event) {
        _vm.push('index.js')
      }
    }
  }, [_vm._v("本地推荐  ➤ ")])]), _c('scroll-view', {
    ref: "reflectName",
    staticClass: ["list"],
    attrs: {
      "eeui": {
        pullTips: true,
        scrollBarEnabled: false
      }
    },
    on: {
      "itemClick": _vm.itemClick,
      "pullLoadListener": _vm.pullLoadListener,
      "refreshListener": _vm.refreshListener2
    }
  }, _vm._l((_vm.lists), function(num) {
    return _c('div', {
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
  }))], 1)], 1), _c('tabbar-page', {
    ref: "name_2",
    attrs: {
      "eeui": {
        tabName: 'name_2',
        title: '消息',
        message: 0,
        selectedIcon: 'ios-chatboxes'
      }
    },
    on: {
      "refreshListener": _vm.refreshListener
    }
  }, [_c('navbar', {
    staticClass: ["page-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["page-navbar-title"]
  }, [_vm._v("消息")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('icon', {
    staticClass: ["feedbac-icon"],
    attrs: {
      "eeui": {
        content: 'ios-headset'
      }
    },
    on: {
      "click": function($event) {
        _vm.goTo('前往用户反馈页面')
      }
    }
  })], 1)], 1), _c('div', {
    staticClass: ["page-content"]
  }, [_c('div', {
    staticClass: ["msg-item"],
    on: {
      "click": function($event) {
        _vm.push('plugin_rongim')
      }
    }
  }, [_c('image', {
    staticClass: ["avatar-img"],
    attrs: {
      "resize": "cover",
      "src": "https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"
    }
  }), _c('div', {
    staticClass: ["msg-info"]
  }, [_c('div', {
    staticClass: ["msg-name-time"]
  }, [_c('text', {
    staticStyle: {
      height: "45px",
      width: "120px",
      fontSize: "30px"
    }
  }, [_vm._v("薛之谦")]), _c('text', {
    staticStyle: {
      height: "45px",
      width: "110px"
    }
  }, [_vm._v("晚上1111")])]), _c('text', {
    staticClass: ["msg-text"]
  }, [_vm._v("刚刚看到vr看房，哼酷炫asdf空肥？")])])])])], 1), _c('tabbar-page', {
    ref: "name_3",
    attrs: {
      "eeui": {
        tabName: 'name_3',
        title: '知识库',
        dot: true,
        selectedIcon: 'md-gift'
      }
    },
    on: {
      "refreshListener": _vm.refreshListener
    }
  }, [_c('navbar', {
    staticClass: ["page-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["page-navbar-title"]
  }, [_vm._v("福利中心")])])], 1), _c('div', {
    staticClass: ["app"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('web-view', {
    ref: "infoView",
    staticClass: ["webview"]
  })], 1)])], 1), _c('tabbar-page', {
    ref: "name_4",
    attrs: {
      "eeui": {
        tabName: 'name_4',
        title: '我的',
        message: 0,
        selectedIcon: 'md-person'
      }
    },
    on: {
      "refreshListener": _vm.refreshListener
    }
  }, [_c('navbar', {
    staticClass: ["page-navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["page-navbar-title"]
  }, [_vm._v("我的")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('component/tabbar')
      }
    }
  }, [_c('icon', {
    staticClass: ["icon"],
    attrs: {
      "eeui": {
        content: 'md-settings'
      }
    }
  })], 1)], 1), _c('div', {
    staticClass: ["page-content"]
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      width: "750px"
    }
  }, [_c('image', {
    staticClass: ["avatar-img"],
    staticStyle: {
      marginTop: "40px",
      marginRight: "50px"
    },
    attrs: {
      "resize": "cover",
      "src": "https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"
    }
  }), _c('text', {
    staticStyle: {
      lineHeight: "200px",
      fontSize: "50px"
    }
  }, [_vm._v("WangWanWan")])]), _vm._l((_vm.menuList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["menu-text"]
    }, [_vm._v(_vm._s(item.title))])
  })], 2)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/component_tabbar.vue?entry=true":
/*!***************************************************!*\
  !*** ./src/pages/component_tabbar.vue?entry=true ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-f3a30b38!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./component_tabbar.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-f3a30b38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_tabbar.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./component_tabbar.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_tabbar.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-f3a30b38!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./component_tabbar.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-f3a30b38!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_tabbar.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/component_tabbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f3a30b38"
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
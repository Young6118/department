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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component_icon.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_icon.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_icon.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      active: '',
      ionicons_md: [],
      ionicons_ios: [],
      ionicons_logo: [],
      taobao: []
    };
  },
  mounted: function mounted() {
    this.active = "ionicons_md";
  },
  watch: {
    active: function active(val) {
      switch (val) {
        case "ionicons_md":
          {
            if (this.ionicons_md.length === 0) {
              var data, i, len;
              data = ["md-add-circle-outline", "md-add-circle", "md-add", "md-airplane", "md-alarm", "md-albums", "md-alert", "md-american-football", "md-analytics", "md-aperture", "md-apps", "md-appstore", "md-archive", "md-arrow-back", "md-arrow-down", "md-arrow-dropdown-circle", "md-arrow-dropdown", "md-arrow-dropleft-circle", "md-arrow-dropleft", "md-arrow-dropright-circle", "md-arrow-dropright", "md-arrow-dropup-circle", "md-arrow-dropup", "md-arrow-forward", "md-arrow-round-back", "md-arrow-round-down", "md-arrow-round-forward", "md-arrow-round-up", "md-arrow-up", "md-at", "md-attach", "md-backspace", "md-barcode", "md-baseball", "md-basket", "md-basketball", "md-battery-charging", "md-battery-dead", "md-battery-full", "md-beaker", "md-bed", "md-beer", "md-bicycle", "md-bluetooth", "md-boat", "md-body", "md-bonfire", "md-book", "md-bookmark", "md-bookmarks", "md-bowtie", "md-briefcase", "md-browsers", "md-brush", "md-bug", "md-build", "md-bulb", "md-bus", "md-business", "md-cafe", "md-calculator", "md-calendar", "md-call", "md-camera", "md-car", "md-card", "md-cart", "md-cash", "md-cellular", "md-chatboxes", "md-chatbubbles", "md-checkbox-outline", "md-checkbox", "md-checkmark-circle-outline", "md-checkmark-circle", "md-checkmark", "md-clipboard", "md-clock", "md-close-circle-outline", "md-close-circle", "md-close", "md-cloud-circle", "md-cloud-done", "md-cloud-download", "md-cloud-outline", "md-cloud-upload", "md-cloud", "md-cloudy-night", "md-cloudy", "md-code-download", "md-code-working", "md-code", "md-cog", "md-color-fill", "md-color-filter", "md-color-palette", "md-color-wand", "md-compass", "md-construct", "md-contact", "md-contacts", "md-contract", "md-contrast", "md-copy", "md-create", "md-crop", "md-cube", "md-cut", "md-desktop", "md-disc", "md-document", "md-done-all", "md-download", "md-easel", "md-egg", "md-exit", "md-expand", "md-eye-off", "md-eye", "md-fastforward", "md-female", "md-filing", "md-film", "md-finger-print", "md-fitness", "md-flag", "md-flame", "md-flash-off", "md-flash", "md-flashlight", "md-flask", "md-flower", "md-folder-open", "md-folder", "md-football", "md-funnel", "md-gift", "md-git-branch", "md-git-commit", "md-git-compare", "md-git-merge", "md-git-network", "md-git-pull-request", "md-glasses", "md-globe", "md-grid", "md-hammer", "md-hand", "md-happy", "md-headset", "md-heart-dislike", "md-heart-empty", "md-heart-half", "md-heart", "md-help-buoy", "md-help-circle-outline", "md-help-circle", "md-help", "md-home", "md-hourglass", "md-ice-cream", "md-image", "md-images", "md-infinite", "md-information-circle-outline", "md-information-circle", "md-information", "md-jet", "md-journal", "md-key", "md-keypad", "md-laptop", "md-leaf", "md-link", "md-list-box", "md-list", "md-locate", "md-lock", "md-log-in", "md-log-out", "md-magnet", "md-mail-open", "md-mail-unread", "md-mail", "md-male", "md-man", "md-map", "md-medal", "md-medical", "md-medkit", "md-megaphone", "md-menu", "md-mic-off", "md-mic", "md-microphone", "md-moon", "md-more", "md-move", "md-musical-note", "md-musical-notes", "md-navigate", "md-notifications-off", "md-notifications-outline", "md-notifications", "md-nuclear", "md-nutrition", "md-open", "md-options", "md-outlet", "md-paper-plane", "md-paper", "md-partly-sunny", "md-pause", "md-paw", "md-people", "md-person-add", "md-person", "md-phone-landscape", "md-phone-portrait", "md-photos", "md-pie", "md-pin", "md-pint", "md-pizza", "md-planet", "md-play-circle", "md-play", "md-podium", "md-power", "md-pricetag", "md-pricetags", "md-print", "md-pulse", "md-qr-scanner", "md-quote", "md-radio-button-off", "md-radio-button-on", "md-radio", "md-rainy", "md-recording", "md-redo", "md-refresh-circle", "md-refresh", "md-remove-circle-outline", "md-remove-circle", "md-remove", "md-reorder", "md-repeat", "md-resize", "md-restaurant", "md-return-left", "md-return-right", "md-reverse-camera", "md-rewind", "md-ribbon", "md-rocket", "md-rose", "md-sad", "md-save", "md-school", "md-search", "md-send", "md-settings", "md-share-alt", "md-share", "md-shirt", "md-shuffle", "md-skip-backward", "md-skip-forward", "md-snow", "md-speedometer", "md-square-outline", "md-square", "md-star-half", "md-star-outline", "md-star", "md-stats", "md-stopwatch", "md-subway", "md-sunny", "md-swap", "md-switch", "md-sync", "md-tablet-landscape", "md-tablet-portrait", "md-tennisball", "md-text", "md-thermometer", "md-thumbs-down", "md-thumbs-up", "md-thunderstorm", "md-time", "md-timer", "md-today", "md-train", "md-transgender", "md-trash", "md-trending-down", "md-trending-up", "md-trophy", "md-tv", "md-umbrella", "md-undo", "md-unlock", "md-videocam", "md-volume-high", "md-volume-low", "md-volume-mute", "md-volume-off", "md-walk", "md-wallet", "md-warning", "md-watch", "md-water", "md-wifi", "md-wine", "md-woman"];
              this.ionicons_md = [];

              for (i = 0, len = data.length; i < len; i += 5) {
                this.ionicons_md.push(data.slice(i, i + 5));
              }
            }

            break;
          }

        case "ionicons_ios":
          {
            if (this.ionicons_ios.length === 0) {
              var _data, _i, _len;

              _data = ["ios-add-circle-outline", "ios-add-circle", "ios-add", "ios-airplane", "ios-alarm", "ios-albums", "ios-alert", "ios-american-football", "ios-analytics", "ios-aperture", "ios-apps", "ios-appstore", "ios-archive", "ios-arrow-back", "ios-arrow-down", "ios-arrow-dropdown-circle", "ios-arrow-dropdown", "ios-arrow-dropleft-circle", "ios-arrow-dropleft", "ios-arrow-dropright-circle", "ios-arrow-dropright", "ios-arrow-dropup-circle", "ios-arrow-dropup", "ios-arrow-forward", "ios-arrow-round-back", "ios-arrow-round-down", "ios-arrow-round-forward", "ios-arrow-round-up", "ios-arrow-up", "ios-at", "ios-attach", "ios-backspace", "ios-barcode", "ios-baseball", "ios-basket", "ios-basketball", "ios-battery-charging", "ios-battery-dead", "ios-battery-full", "ios-beaker", "ios-bed", "ios-beer", "ios-bicycle", "ios-bluetooth", "ios-boat", "ios-body", "ios-bonfire", "ios-book", "ios-bookmark", "ios-bookmarks", "ios-bowtie", "ios-briefcase", "ios-browsers", "ios-brush", "ios-bug", "ios-build", "ios-bulb", "ios-bus", "ios-business", "ios-cafe", "ios-calculator", "ios-calendar", "ios-call", "ios-camera", "ios-car", "ios-card", "ios-cart", "ios-cash", "ios-cellular", "ios-chatboxes", "ios-chatbubbles", "ios-checkbox-outline", "ios-checkbox", "ios-checkmark-circle-outline", "ios-checkmark-circle", "ios-checkmark", "ios-clipboard", "ios-clock", "ios-close-circle-outline", "ios-close-circle", "ios-close", "ios-cloud-circle", "ios-cloud-done", "ios-cloud-download", "ios-cloud-outline", "ios-cloud-upload", "ios-cloud", "ios-cloudy-night", "ios-cloudy", "ios-code-download", "ios-code-working", "ios-code", "ios-cog", "ios-color-fill", "ios-color-filter", "ios-color-palette", "ios-color-wand", "ios-compass", "ios-construct", "ios-contact", "ios-contacts", "ios-contract", "ios-contrast", "ios-copy", "ios-create", "ios-crop", "ios-cube", "ios-cut", "ios-desktop", "ios-disc", "ios-document", "ios-done-all", "ios-download", "ios-easel", "ios-egg", "ios-exit", "ios-expand", "ios-eye-off", "ios-eye", "ios-fastforward", "ios-female", "ios-filing", "ios-film", "ios-finger-print", "ios-fitness", "ios-flag", "ios-flame", "ios-flash-off", "ios-flash", "ios-flashlight", "ios-flask", "ios-flower", "ios-folder-open", "ios-folder", "ios-football", "ios-funnel", "ios-gift", "ios-git-branch", "ios-git-commit", "ios-git-compare", "ios-git-merge", "ios-git-network", "ios-git-pull-request", "ios-glasses", "ios-globe", "ios-grid", "ios-hammer", "ios-hand", "ios-happy", "ios-headset", "ios-heart-dislike", "ios-heart-empty", "ios-heart-half", "ios-heart", "ios-help-buoy", "ios-help-circle-outline", "ios-help-circle", "ios-help", "ios-home", "ios-hourglass", "ios-ice-cream", "ios-image", "ios-images", "ios-infinite", "ios-information-circle-outline", "ios-information-circle", "ios-information", "ios-jet", "ios-journal", "ios-key", "ios-keypad", "ios-laptop", "ios-leaf", "ios-link", "ios-list-box", "ios-list", "ios-locate", "ios-lock", "ios-log-in", "ios-log-out", "ios-magnet", "ios-mail-open", "ios-mail-unread", "ios-mail", "ios-male", "ios-man", "ios-map", "ios-medal", "ios-medical", "ios-medkit", "ios-megaphone", "ios-menu", "ios-mic-off", "ios-mic", "ios-microphone", "ios-moon", "ios-more", "ios-move", "ios-musical-note", "ios-musical-notes", "ios-navigate", "ios-notifications-off", "ios-notifications-outline", "ios-notifications", "ios-nuclear", "ios-nutrition", "ios-open", "ios-options", "ios-outlet", "ios-paper-plane", "ios-paper", "ios-partly-sunny", "ios-pause", "ios-paw", "ios-people", "ios-person-add", "ios-person", "ios-phone-landscape", "ios-phone-portrait", "ios-photos", "ios-pie", "ios-pin", "ios-pint", "ios-pizza", "ios-planet", "ios-play-circle", "ios-play", "ios-podium", "ios-power", "ios-pricetag", "ios-pricetags", "ios-print", "ios-pulse", "ios-qr-scanner", "ios-quote", "ios-radio-button-off", "ios-radio-button-on", "ios-radio", "ios-rainy", "ios-recording", "ios-redo", "ios-refresh-circle", "ios-refresh", "ios-remove-circle-outline", "ios-remove-circle", "ios-remove", "ios-reorder", "ios-repeat", "ios-resize", "ios-restaurant", "ios-return-left", "ios-return-right", "ios-reverse-camera", "ios-rewind", "ios-ribbon", "ios-rocket", "ios-rose", "ios-sad", "ios-save", "ios-school", "ios-search", "ios-send", "ios-settings", "ios-share-alt", "ios-share", "ios-shirt", "ios-shuffle", "ios-skip-backward", "ios-skip-forward", "ios-snow", "ios-speedometer", "ios-square-outline", "ios-square", "ios-star-half", "ios-star-outline", "ios-star", "ios-stats", "ios-stopwatch", "ios-subway", "ios-sunny", "ios-swap", "ios-switch", "ios-sync", "ios-tablet-landscape", "ios-tablet-portrait", "ios-tennisball", "ios-text", "ios-thermometer", "ios-thumbs-down", "ios-thumbs-up", "ios-thunderstorm", "ios-time", "ios-timer", "ios-today", "ios-train", "ios-transgender", "ios-trash", "ios-trending-down", "ios-trending-up", "ios-trophy", "ios-tv", "ios-umbrella", "ios-undo", "ios-unlock", "ios-videocam", "ios-volume-high", "ios-volume-low", "ios-volume-mute", "ios-volume-off", "ios-walk", "ios-wallet", "ios-warning", "ios-watch", "ios-water", "ios-wifi", "ios-wine", "ios-woman"];
              this.ionicons_ios = [];

              for (_i = 0, _len = _data.length; _i < _len; _i += 5) {
                this.ionicons_ios.push(_data.slice(_i, _i + 5));
              }
            }

            break;
          }

        case "ionicons_logo":
          {
            if (this.ionicons_logo.length === 0) {
              var _data2, _i2, _len2;

              _data2 = ["logo-android", "logo-angular", "logo-apple", "logo-bitbucket", "logo-bitcoin", "logo-buffer", "logo-chrome", "logo-closed-captioning", "logo-codepen", "logo-css3", "logo-designernews", "logo-dribbble", "logo-dropbox", "logo-euro", "logo-facebook", "logo-flickr", "logo-foursquare", "logo-freebsd-devil", "logo-game-controller-a", "logo-game-controller-b", "logo-github", "logo-google", "logo-googleplus", "logo-hackernews", "logo-html5", "logo-instagram", "logo-ionic", "logo-ionitron", "logo-javascript", "logo-linkedin", "logo-markdown", "logo-model-s", "logo-no-smoking", "logo-nodejs", "logo-npm", "logo-octocat", "logo-pinterest", "logo-playstation", "logo-polymer", "logo-python", "logo-reddit", "logo-rss", "logo-sass", "logo-skype", "logo-slack", "logo-snapchat", "logo-steam", "logo-tumblr", "logo-tux", "logo-twitch", "logo-twitter", "logo-usd", "logo-vimeo", "logo-vk", "logo-whatsapp", "logo-windows", "logo-wordpress", "logo-xbox", "logo-xing", "logo-yahoo", "logo-yen", "logo-youtube"];
              this.ionicons_logo = [];

              for (_i2 = 0, _len2 = _data2.length; _i2 < _len2; _i2 += 5) {
                this.ionicons_logo.push(_data2.slice(_i2, _i2 + 5));
              }
            }

            break;
          }

        case "taobao":
          {
            if (this.taobao.length === 0) {
              var _data3, _i3, _len3;

              _data3 = ["tb-1111", "tb-1212", "tb-activity", "tb-activity-fill", "tb-add", "tb-add-1", "tb-add-light", "tb-address-book", "tb-album", "tb-all", "tb-appreciate", "tb-appreciate-fill", "tb-appreciate-fill-light", "tb-appreciate-light", "tb-apps", "tb-arrow-left-fill", "tb-arrow-up-fill", "tb-ask", "tb-ask-fill", "tb-attention", "tb-attention-favor", "tb-attention-favor-fill", "tb-attention-fill", "tb-attention-forbid", "tb-attention-forbid-fill", "tb-attention-light", "tb-auction", "tb-baby", "tb-baby-fill", "tb-back", "tb-back-android", "tb-back-android-light", "tb-back-delete", "tb-back-light", "tb-back-ward-fill", "tb-bad", "tb-barcode", "tb-big", "tb-brand", "tb-brand-fill", "tb-calendar", "tb-camera", "tb-camera-add", "tb-camera-add-fill", "tb-camera-fill", "tb-camera-light", "tb-camera-rotate", "tb-cardboard", "tb-cardboard-fill", "tb-cardboard-forbid", "tb-cart", "tb-cart-fill", "tb-cart-fill-light", "tb-cart-light", "tb-cascades", "tb-change", "tb-check", "tb-choiceness", "tb-choiceness-fill", "tb-circle", "tb-circle-fill", "tb-close", "tb-close-light", "tb-clothes", "tb-clothes-fill", "tb-coffee", "tb-coin", "tb-command", "tb-command-fill", "tb-comment", "tb-comment-fill", "tb-comment-fill-light", "tb-comment-light", "tb-community", "tb-community-fill", "tb-community-fill-light", "tb-community-light", "tb-copy", "tb-countdown", "tb-countdown-fill", "tb-creative", "tb-creative-fill", "tb-crown", "tb-crown-fill", "tb-cut", "tb-delete", "tb-delete-fill", "tb-delete-light", "tb-deliver", "tb-deliver-fill", "tb-discover", "tb-discover-fill", "tb-down", "tb-down-light", "tb-dress", "tb-edit", "tb-edit-light", "tb-emoji", "tb-emoji-fill", "tb-emoji-flash-fill", "tb-emoji-light", "tb-evaluate", "tb-evaluate-fill", "tb-exit", "tb-explore", "tb-explore-fill", "tb-expressman", "tb-favor", "tb-favor-fill", "tb-favor-fill-light", "tb-favor-light", "tb-female", "tb-file", "tb-filter", "tb-flashbuy-fill", "tb-flashlight-close", "tb-flashlight-open", "tb-focus", "tb-fold", "tb-footprint", "tb-form", "tb-form-favor-light", "tb-form-fill", "tb-form-fill-light", "tb-form-light", "tb-forward", "tb-forward-fill", "tb-friend", "tb-friend-add", "tb-friend-add-fill", "tb-friend-add-light", "tb-friend-famous", "tb-friend-favor", "tb-friend-fill", "tb-friend-light", "tb-friend-settings-light", "tb-full", "tb-furniture", "tb-game", "tb-global", "tb-global-light", "tb-goods", "tb-goods-favor", "tb-goods-favor-light", "tb-goods-fill", "tb-goods-hot-fill", "tb-goods-light", "tb-goods-new", "tb-goods-new-fill", "tb-goods-new-fill-light", "tb-goods-new-light", "tb-group", "tb-group-fill", "tb-group-fill-light", "tb-group-light", "tb-haodian", "tb-home", "tb-home-fill", "tb-home-fill-light", "tb-home-light", "tb-hot", "tb-hot-fill", "tb-hot-light", "tb-hua", "tb-info", "tb-info-fill", "tb-ju", "tb-juhuasuan", "tb-keyboard", "tb-keyboard-light", "tb-light", "tb-light-auto", "tb-light-fill", "tb-light-forbid", "tb-like", "tb-like-fill", "tb-link", "tb-list", "tb-living", "tb-loading", "tb-loading-a", "tb-loading-b", "tb-loading-c", "tb-loading-d", "tb-location", "tb-location-fill", "tb-location-light", "tb-lock", "tb-magic", "tb-mail", "tb-male", "tb-mao", "tb-mark", "tb-mark-fill", "tb-medal", "tb-medal-fill", "tb-medal-fill-light", "tb-medal-light", "tb-message", "tb-message-fill", "tb-message-fill-light", "tb-message-light", "tb-mobile", "tb-mobile-fill", "tb-mobile-tao", "tb-money-bag", "tb-money-bag-fill", "tb-more", "tb-more-android", "tb-more-android-light", "tb-more-light", "tb-move", "tb-music-fill", "tb-music-forbid-fill", "tb-my", "tb-my-fill", "tb-my-fill-light", "tb-my-light", "tb-new", "tb-new-fill", "tb-news", "tb-news-fill", "tb-news-fill-light", "tb-news-hot", "tb-news-hot-fill", "tb-news-hot-fill-light", "tb-news-hot-light", "tb-news-light", "tb-notice", "tb-notice-fill", "tb-notice-forbid-fill", "tb-notification", "tb-notification-fill", "tb-notification-forbid-fill", "tb-oppose-fill-light", "tb-oppose-light", "tb-order", "tb-paint", "tb-paint-fill", "tb-pay", "tb-people", "tb-people-fill", "tb-people-list", "tb-people-list-light", "tb-phone", "tb-phone-light", "tb-pic", "tb-pic-fill", "tb-pic-light", "tb-pick", "tb-play-fill", "tb-play-forward-fill", "tb-post", "tb-present", "tb-present-fill", "tb-profile", "tb-profile-fill", "tb-profile-light", "tb-pull-down", "tb-pull-down-1", "tb-pull-left", "tb-pull-right", "tb-pull-up", "tb-punch", "tb-punch-light", "tb-qi", "tb-qiang", "tb-qrcode-light", "tb-qrcode", "tb-question", "tb-question-fill", "tb-radiobox", "tb-radiobox-fill", "tb-rank", "tb-rank-fill", "tb-read", "tb-recharge", "tb-recharge-fill", "tb-record", "tb-record-fill", "tb-record-light", "tb-redpacket", "tb-redpacket-fill", "tb-refresh", "tb-refresh-arrow", "tb-refresh-light", "tb-refund", "tb-remind", "tb-repair", "tb-repair-fill", "tb-repeal", "tb-right", "tb-round", "tb-round-add", "tb-round-add-fill", "tb-round-add-light", "tb-round-check", "tb-round-check-fill", "tb-round-close", "tb-round-close-fill", "tb-round-close-fill-light", "tb-round-close-light", "tb-round-comment-light", "tb-round-crown-fill", "tb-round-down", "tb-round-down-light", "tb-round-favor-fill", "tb-round-friend-fill", "tb-round-left-fill", "tb-round-light-fill", "tb-round-like-fill", "tb-round-link-fill", "tb-round-list-light", "tb-round-location-fill", "tb-round-menu-fill", "tb-round-pay", "tb-round-pay-fill", "tb-round-people-fill", "tb-round-rank-fill", "tb-round-record-fill", "tb-round-redpacket", "tb-round-redpacket-fill", "tb-round-right", "tb-round-right-fill", "tb-round-shop-fill", "tb-round-skin-fill", "tb-round-text-fill", "tb-round-ticket", "tb-round-ticket-fill", "tb-round-transfer", "tb-round-transfer-fill", "tb-safe", "tb-same", "tb-same-fill", "tb-scan", "tb-scan-light", "tb-search", "tb-search-light", "tb-search-list", "tb-search-list-light", "tb-selection", "tb-selection-fill", "tb-send", "tb-service", "tb-service-fill", "tb-service-light", "tb-settings", "tb-settings-light", "tb-shake", "tb-share", "tb-share-light", "tb-shop", "tb-shop-fill", "tb-shop-light", "tb-similar", "tb-skin", "tb-skin-fill", "tb-skin-light", "tb-sort", "tb-sort-light", "tb-sound", "tb-sound-light", "tb-sponsor", "tb-sponsor-fill", "tb-sports", "tb-square", "tb-square-check", "tb-square-check-fill", "tb-stop", "tb-suan", "tb-subscription", "tb-subscription-light", "tb-subtitle-block-light", "tb-subtitle-unblock-light", "tb-tag", "tb-tag-fill", "tb-tao", "tb-tao-qianggou", "tb-tao-xiaopu", "tb-taxi", "tb-text", "tb-tian", "tb-tianmao", "tb-ticket", "tb-ticket-fill", "tb-ticket-money-fill", "tb-time", "tb-time-fill", "tb-tmall", "tb-top", "tb-triangle-down-fill", "tb-triangle-up-fill", "tb-unfold", "tb-unlock", "tb-upblock", "tb-upload", "tb-upstage", "tb-upstage-fill", "tb-use-full", "tb-use-full-fill", "tb-video", "tb-video-fill", "tb-video-fill-light", "tb-video-light", "tb-vip", "tb-vip-code-light", "tb-vipcard", "tb-voice", "tb-voice-fill", "tb-voice-light", "tb-wang", "tb-wang-fill", "tb-wang-light", "tb-warn", "tb-warn-fill", "tb-warn-light", "tb-we", "tb-we-fill", "tb-we-fill-light", "tb-we-light", "tb-we-block", "tb-we-unblock", "tb-weibo", "tb-wifi", "tb-write", "tb-write-fill", "tb-xiami", "tb-xiami-forbid", "tb-xiaoheiqun", "tb-ye"];
              this.taobao = [];

              for (_i3 = 0, _len3 = _data3.length; _i3 < _len3; _i3 += 5) {
                this.taobao.push(_data3.slice(_i3, _i3 + 5));
              }
            }

            break;
          }
      }
    }
  },
  methods: {
    viewCode: function viewCode(str) {
      this.openViewCode(str);
    },
    copyIcon: function copyIcon(text) {
      eeui.copyText(text);
      eeui.toast("复制成功：" + text);
    }
  }
});

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-7ac04702!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_icon.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-7ac04702!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_icon.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "tabs": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#333333"
  },
  "tab-item": {
    "flex": 1,
    "height": "68",
    "lineHeight": "68",
    "fontSize": "30",
    "color": "#333333",
    "textAlign": "center"
  },
  "tab-item-active": {
    "flex": 1,
    "height": "68",
    "lineHeight": "68",
    "fontSize": "30",
    "color": "#ffffff",
    "textAlign": "center",
    "backgroundColor": "#333333"
  },
  "lists": {
    "width": "750",
    "flex": 1
  },
  "list": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "item": {
    "width": "150"
  },
  "icon": {
    "width": "150",
    "height": "115",
    "fontSize": "38"
  },
  "text": {
    "width": "150",
    "paddingLeft": "5",
    "paddingRight": "5",
    "height": "55",
    "fontSize": "24",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-7ac04702!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_icon.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-7ac04702!/usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_icon.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("字体图标")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('component/icon')
      }
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "md-code-working"
    }
  })], 1)], 1), _c('div', {
    staticClass: ["tabs"]
  }, [_c('text', {
    class: [_vm.active === 'ionicons_md' ? 'tab-item-active' : 'tab-item'],
    on: {
      "click": function($event) {
        _vm.active = 'ionicons_md'
      }
    }
  }, [_vm._v("md")]), _c('text', {
    class: [_vm.active === 'ionicons_ios' ? 'tab-item-active' : 'tab-item'],
    on: {
      "click": function($event) {
        _vm.active = 'ionicons_ios'
      }
    }
  }, [_vm._v("ios")]), _c('text', {
    class: [_vm.active === 'ionicons_logo' ? 'tab-item-active' : 'tab-item'],
    on: {
      "click": function($event) {
        _vm.active = 'ionicons_logo'
      }
    }
  }, [_vm._v("logo")]), _c('text', {
    class: [_vm.active === 'taobao' ? 'tab-item-active' : 'tab-item'],
    on: {
      "click": function($event) {
        _vm.active = 'taobao'
      }
    }
  }, [_vm._v("tb")])]), (_vm.active === 'ionicons_md') ? _c('scroller', {
    staticClass: ["lists"]
  }, _vm._l((_vm.ionicons_md), function(list) {
    return _c('div', {
      staticClass: ["list"]
    }, _vm._l((list), function(item) {
      return _c('div', {
        staticClass: ["item"],
        on: {
          "click": function($event) {
            _vm.copyIcon(item)
          }
        }
      }, [_c('icon', {
        staticClass: ["icon"],
        attrs: {
          "eeui": {
            content: item
          }
        }
      }), _c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(item))])], 1)
    }))
  })) : (_vm.active === 'ionicons_ios') ? _c('scroller', {
    staticClass: ["lists"]
  }, _vm._l((_vm.ionicons_ios), function(list) {
    return _c('div', {
      staticClass: ["list"]
    }, _vm._l((list), function(item) {
      return _c('div', {
        staticClass: ["item"],
        on: {
          "click": function($event) {
            _vm.copyIcon(item)
          }
        }
      }, [_c('icon', {
        staticClass: ["icon"],
        attrs: {
          "eeui": {
            content: item
          }
        }
      }), _c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(item))])], 1)
    }))
  })) : (_vm.active === 'ionicons_logo') ? _c('scroller', {
    staticClass: ["lists"]
  }, _vm._l((_vm.ionicons_logo), function(list) {
    return _c('div', {
      staticClass: ["list"]
    }, _vm._l((list), function(item) {
      return _c('div', {
        staticClass: ["item"],
        on: {
          "click": function($event) {
            _vm.copyIcon(item)
          }
        }
      }, [_c('icon', {
        staticClass: ["icon"],
        attrs: {
          "eeui": {
            content: item
          }
        }
      }), _c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(item))])], 1)
    }))
  })) : (_vm.active === 'taobao') ? _c('scroller', {
    staticClass: ["lists"]
  }, _vm._l((_vm.taobao), function(list) {
    return _c('div', {
      staticClass: ["list"]
    }, _vm._l((list), function(item) {
      return _c('div', {
        staticClass: ["item"],
        on: {
          "click": function($event) {
            _vm.copyIcon(item)
          }
        }
      }, [_c('icon', {
        staticClass: ["icon"],
        attrs: {
          "eeui": {
            content: item
          }
        }
      }), _c('text', {
        staticClass: ["text"]
      }, [_vm._v(_vm._s(item))])], 1)
    }))
  })) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/component_icon.vue?entry=true":
/*!*************************************************!*\
  !*** ./src/pages/component_icon.vue?entry=true ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-7ac04702!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./component_icon.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-7ac04702!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/component_icon.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./component_icon.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/component_icon.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-7ac04702!../../../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./component_icon.vue */ "../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-7ac04702!../../../../../../usr/local/lib/node_modules/node/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/component_icon.vue")
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
__vue_options__.__file = "/Users/zhouyang/study/android/weex/findfang/src/pages/component_icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7ac04702"
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
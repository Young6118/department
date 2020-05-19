// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(t,e){var o=e.map((function(t){return"[object object]"===Object.prototype.toString.call(t).toLowerCase()?JSON.stringify(t):t}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(t,o)},debug:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("debug",t)},log:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("log",t)},info:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("info",t)},warn:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("warn",t)},error:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("error",t)}};!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=60)}({60:function(t,e,o){var i,n,r=[];r.push(o(61)),i=o(62);var l=o(63);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouyang/study/android/weex/findfang/src/pages/console.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-cc4ed5fa",n.style=n.style||{},r.forEach((function(t){for(var e in t)n.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},61:function(t,e){t.exports={app:{width:"750",flex:1},tabs:{flexDirection:"row",alignItems:"center",backgroundColor:"#DDE1E7"},tline:{width:"750",height:"1",backgroundColor:"#cccccc"},"tab-item":{flex:1,height:"68",lineHeight:"68",fontSize:"26",color:"#333333",textAlign:"center"},"tab-item-active":{flex:1,height:"68",lineHeight:"68",fontSize:"26",color:"#333333",textAlign:"center",backgroundColor:"#ffffff"},tismain:{width:"750",flex:1,justifyContent:"center",alignItems:"center"},tisbody:{paddingTop:"24",paddingRight:"24",paddingBottom:"24",paddingLeft:"24"},tisitem:{color:"#bbbbbb",fontSize:"26",paddingTop:"10",paddingBottom:"10"},lists:{width:"750",flex:1},item:{width:"750",paddingTop:"14",paddingRight:"12",paddingBottom:"14",paddingLeft:"12",borderBottomWidth:"1",borderBottomStyle:"solid",borderBottomColor:"#eeeeee"},text:{fontSize:"24"},"text-log":{color:"#333333"},"text-info":{color:"#428bca"},"text-warn":{color:"#ca8d1c"},"text-error":{color:"#ca3420"},"text-debug":{color:"#994dca"},fline:{width:"750",height:"1",backgroundColor:"#dddddd"},foot:{width:"750",height:"86",flexDirection:"row",justifyContent:"center",backgroundColor:"#ffffff"},"foot-item":{flex:1,textAlign:"center",fontSize:"24",lineHeight:"86"},"foot-line":{width:"1",marginTop:"20",height:"46",backgroundColor:"#dddddd"}}},62:function(t,e,o){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.r(e);var n=app.requireModule("eeui"),r=app.requireModule("debug"),l=app.requireModule("dom");e.default={data:function(){return{active:"",lists:[],noConsole:!1,scrollHeight:0,scrollBottom:!0,scrollDiffer:0,scrollInterval:null}},mounted:function(){var t=this;!0===console.open?(this.active="all",r.setLogListener((function(e){if("all"===t.active||e.type===t.active){var o=t.lists.push(e);o>550&&t.lists.splice(0,o-50),t.toBottom(o)}})),setInterval((function(){t.scrollBottom=t.scrollDiffer-t.scrollHeight<10}),300)):this.noConsole=!0},watch:{active:function(t){var e=this;switch(t){case"all":r.getLogAll((function(t){t.length>550&&t.splice(0,t.length-500),e.lists=t,e.toBottom(e.lists.length)}));break;default:r.getLog(t,(function(t){t.length>550&&t.splice(0,t.length-500),e.lists=t,e.toBottom(e.lists.length)}))}}},methods:{formatLog:function(t){var e=this,o="";return null!=t&&"object"==i(t)?this.each(t,(function(t,n){o+=null!=n&&"object"==i(n)?e.jsonStringify(n):n,o+=" "})):o=t,o},addLog:function(t,e){switch(t){case"log":eeuiLog.log(e,"随机字符："+this.randomString(16));break;case"info":eeuiLog.info(e,"随机字符："+this.randomString(16));break;case"warn":eeuiLog.warn(e,"随机字符："+this.randomString(16));break;case"error":eeuiLog.error(e,"随机字符："+this.randomString(16))}"all"!==this.active&&(this.active=t)},info:function(t){var e=this,o="[类型]："+t.type+"\n[时间]："+this.formatDate("Y-m-d H:i:s",t.time);t.page&&(o+="\n[页面]："+t.page),o+="\n[内容]："+this.formatLog(t.text),n.confirm({title:"日志详情",message:o,buttons:["复制","关闭"]},(function(o){"click"===o.status&&"复制"===o.title&&(n.copyText(e.jsonStringify(t)),n.toast("复制成功"))}))},scroll:function(t){this.scrollDiffer=t.contentSize.height+t.contentOffset.y},scrollend:function(){var t=this;l.getComponentRect(this.$refs.myList,(function(e){t.scrollHeight=e.size.height}))},toBottom:function(t){var e=this;if(this.scrollBottom){var o=0;clearInterval(this.scrollInterval),this.scrollInterval=setInterval((function(){o++;var i=e.$refs["item"+(t-1)];(i||o>5)&&(clearInterval(e.scrollInterval),e.scrollBottom&&i&&l.scrollToElement(i[0],{}))}),300)}},clear:function(){"all"===this.active?(r.clearLogAll(),this.lists=[]):(r.clearLog(this.active),this.lists=[])},close:function(){r.removeLogListener(),r.closeConsole()},isNullOrUndefined:function(t){return null==t},likeArray:function(t){return!this.isNullOrUndefined(t)&&"number"==typeof t.length},each:function(t,e){var o,i;if(this.likeArray(t)){if("number"==typeof t.length)for(o=0;o<t.length;o++)if(!1===e.call(t[o],o,t[o]))return t}else for(i in t)if(t.hasOwnProperty(i)&&!1===e.call(t[i],i,t[i]))return t;return t},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var o=new Date(e);return parseInt(o.getFullYear())+""=="NaN"?e:t=(t=(t=(t=(t=(t=t.replace(/Y/g,o.getFullYear())).replace(/m/g,this.zeroFill(o.getMonth()+1,2))).replace(/d/g,this.zeroFill(o.getDate(),2))).replace(/H/g,this.zeroFill(o.getHours(),2))).replace(/i/g,this.zeroFill(o.getMinutes(),2))).replace(/s/g,this.zeroFill(o.getSeconds(),2))},zeroFill:function(t,e,o){if((t+="").length>=e)return t;for(var i="",n=0;n<e;n++)i+="0";return o||void 0===o?(i+""+t).substr(-1*e):(t+""+i).substr(0,e)},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",o=e.length,i="",n=0;n<t;n++)i+=e.charAt(Math.floor(Math.random()*o));return i}}}},63:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["app"],on:{click:function(t){}}},[o("div",{staticClass:["tabs"]},[o("text",{class:["all"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="all"}}},[t._v("All")]),o("text",{class:["log"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="log"}}},[t._v("Log")]),o("text",{class:["info"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="info"}}},[t._v("Info")]),o("text",{class:["warn"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="warn"}}},[t._v("Warn")]),o("text",{class:["error"===t.active?"tab-item-active":"tab-item"],on:{click:function(e){t.active="error"}}},[t._v("Error")])]),o("div",{staticClass:["tline"]}),!0===t.noConsole?o("div",{staticClass:["tismain"]},[t._m(0)]):0===t.lists.length?o("div",{staticClass:["tismain"]},[o("div",{staticClass:["tisbody"]},[o("text",{staticClass:["tisitem"]},[t._v("可使用以下方法调试日志：")]),o("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("log","普通日志")}}},[t._v('console.log("普通日志")')]),o("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("info","蓝色日志")}}},[t._v('console.info("蓝色日志")')]),o("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("warn","黄色日志")}}},[t._v('console.warn("黄色日志")')]),o("text",{staticClass:["tisitem"],on:{click:function(e){t.addLog("error","红色日志")}}},[t._v('console.error("红色日志")')])])]):o("scroller",{ref:"myList",staticClass:["lists"],on:{scroll:t.scroll,scrollend:t.scrollend}},t._l(t.lists,(function(e,i){return o("div",{key:i,staticClass:["item"],on:{click:function(o){t.info(e)}}},[o("text",{staticClass:["text"],class:["text-"+e.type]},[t._v(t._s(t.formatLog(e.text)))]),o("div",{ref:"item"+i,refInFor:!0})])}))),o("div",{staticClass:["fline"]}),o("div",{staticClass:["foot"]},[o("text",{staticClass:["foot-item"],on:{click:t.clear}},[t._v("清除")]),o("div",{staticClass:["foot-line"]}),o("text",{staticClass:["foot-item"],on:{click:t.close}},[t._v("隐藏")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["tisbody"]},[e("text",{staticClass:["tisitem"]},[this._v("当前环境不支持，可能不是开发环境。")])])}]},t.exports.render._withStripped=!0}});
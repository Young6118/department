// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(t,e){var n=e.map((function(t){return"[object object]"===Object.prototype.toString.call(t).toLowerCase()?JSON.stringify(t):t}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(t,n)},debug:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("debug",t)},log:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("log",t)},info:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("info",t)},warn:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("warn",t)},error:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("error",t)}};!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=79)}({79:function(t,e,n){var r,o,i=[];i.push(n(80)),r=n(81);var a=n(82);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/zhouyang/study/android/weex/findfang/src/pages/module_ajax.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-db612082",o.style=o.style||{},i.forEach((function(t){for(var e in t)o.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},80:function(t,e){t.exports={app:{width:"750",flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},content:{flex:1,alignItems:"center"},button:{width:"380",fontSize:"24",textAlign:"center",marginTop:"50",paddingTop:"26",paddingBottom:"26",paddingLeft:"30",paddingRight:"30",color:"#ffffff",backgroundColor:"#00B4FF"},subtitle:{paddingTop:"26",paddingRight:"24",paddingBottom:"24",paddingLeft:"24",fontSize:"28",color:"#757575"},inPut:{marginTop:"50",fontSize:"26",width:"650",height:"80",paddingTop:"5",paddingBottom:"5",paddingLeft:"5",paddingRight:"5",borderWidth:"1",borderStyle:"solid",borderColor:"#65b4d8"},textarea:{fontSize:"20",width:"650",height:"480",marginTop:"20",paddingTop:"5",paddingBottom:"5",paddingLeft:"5",paddingRight:"5",color:"#666666",borderWidth:"2",borderStyle:"solid",borderColor:"#65b4d8"}}},81:function(t,e,n){"use strict";n.r(e);var r=app.requireModule("eeui");e.default={data:function(){return{url:"http://dotwe.org/raw/dist/7f90ed2135dc774fa2abb06c4fa1901f.bundle.wx",status:"",content:""}},methods:{viewCode:function(t){this.openViewCode(t)},startAjax:function(){var t=this;this.status="",this.content="",r.ajax({url:this.url,dataType:"text",beforeAfter:!0},(function(e){""===t.status?t.status+=e.status:t.status+=" > "+e.status,"success"===e.status&&(t.content=e.result)}))}}}},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[t._v("跨域异步请求")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(e){t.viewCode("module/ajax")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("div",{staticClass:["content"]},[n("input",{staticClass:["inPut"],attrs:{value:t.url},on:{input:function(e){t.url=e.target.attr.value}}}),n("text",{staticClass:["button"],on:{click:t.startAjax}},[t._v("开始请求")]),n("text",{staticClass:["subtitle"]},[t._v("状态："+t._s(t.status))]),n("textarea",{staticClass:["textarea"],attrs:{rows:"20",value:t.content},on:{input:function(e){t.content=e.target.attr.value}}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
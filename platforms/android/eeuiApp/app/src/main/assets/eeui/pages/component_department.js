// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(t,e){var i=e.map((function(t){return"[object object]"===Object.prototype.toString.call(t).toLowerCase()?JSON.stringify(t):t}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(t,i)},debug:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("debug",t)},log:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("log",t)},info:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("info",t)},warn:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("warn",t)},error:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("error",t)}};!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=16)}({16:function(t,e,i){var o,n,r=[];r.push(i(17)),o=i(18);var d=i(19);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouyang/study/android/weex/findfang/src/pages/component_department.vue",n.render=d.render,n.staticRenderFns=d.staticRenderFns,n._scopeId="data-v-52662458",n.style=n.style||{},r.forEach((function(t){for(var e in t)n.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)},17:function(t,e){t.exports={app:{flex:1},iconr:{width:"100",height:"100",color:"#ffffff"},tabbar:{width:"750",flex:1},"page-content":{width:"750",paddingTop:0,paddingBottom:0,alignItems:"center"},"content-text":{fontSize:"24",paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20"},"menu-text":{fontSize:"30",paddingTop:"40",paddingRight:"40",paddingBottom:"40",paddingLeft:"40",textAlign:"right",width:"750",borderBottomColor:"#e4e4e4",borderBottomStyle:"solid",borderBottomWidth:"1"},"page-navbar":{width:"750",height:"90"},"page-navbar-title":{color:"#ffffff",fontSize:"28"},"page-content-image":{width:"480",height:"480",marginTop:"30",marginBottom:"30"},city:{color:"#ffffff",fontSize:"30",lineHeight:"70"},"arrown-down":{color:"#ffffff",width:"40",height:"20",fontSize:"30",lineHeight:"70"},"feedbac-icon":{color:"#ffffff",width:"120",height:"40",fontSize:"40"},input:{marginLeft:"20",backgroundColor:"#ffffff",paddingLeft:"10",borderWidth:"1",height:"70",fontSize:"30",lineHeight:"70",color:"#9c9a9a",borderRadius:"10",width:"490",borderColor:"#2d63da"},"input-right":{backgroundColor:"#ffffff",borderRightWidth:"1",borderRightColor:"#2d63da",height:"70",width:"105",borderTopWidth:"1",borderTopColor:"#2d63da",borderBottomWidth:"1",borderBottomColor:"#2d63da",marginRight:"20",borderBottomRightRadius:"10",borderTopRightRadius:"10"},flex:{color:"#ffffff",width:"120",height:"100",paddingLeft:"30",flexDirection:"row",justifyContent:"center",alignItems:"center"},marquee:{height:"60",backgroundColor:"#ffffff",paddingLeft:"20"},banner:{width:"750",height:"420"},"banner-frame":{width:"750",height:"420",position:"relative"},"banner-image":{width:"750",height:"420"},grid:{width:"750",height:"180"},"grid-item":{width:"150",height:"180",alignItems:"center"},"item-image":{backgroundColor:"#3e9636",fontSize:"60",marginTop:"10",color:"#ffffff",width:"120",height:"120",borderRadius:40},"item-title":{width:"250",height:"50",lineHeight:"50",textAlign:"center"},myhouse:{textAlign:"left",width:"750",marginTop:"25",paddingTop:"15",paddingRight:"50",paddingBottom:"15",paddingLeft:"50",fontSize:"30"},"all-house":{width:600,paddingTop:"15",paddingRight:"50",paddingBottom:"15",paddingLeft:"50",fontSize:"30"},"house-div":{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"750",height:"200"},"house-msg":{width:"650",height:"200",borderWidth:"1",borderRadius:"20",borderColor:"#20c08d",flexDirection:"column",justifyContent:"center",alignItems:"center"},"house-text":{paddingTop:"50",paddingRight:"50",paddingBottom:"50",paddingLeft:"50",height:"112",fontSize:"24",marginBottom:"30"},button:{fontSize:"30",width:"650",height:"60",color:"#20c08d",marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,borderWidth:"1",borderRadius:"20",borderColor:"#20c08d"},"buy-buttom":{width:200,height:"150",border:"none"},list:{width:"750",flex:1},panel:{width:"750",borderBottomColor:"#e4e4e4",borderBottomStyle:"solid",borderBottomWidth:"1"},"panel-item":{width:"750",paddingTop:"22",paddingBottom:"22",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"msg-item":{width:"750",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomColor:"#e4e4e4",borderBottomStyle:"solid",borderBottomWidth:"1"},"house-info":{width:"520",height:"180",flexDirection:"column",justifyContent:"center"},"msg-info":{width:"600",height:"160",flexDirection:"column",justifyContent:"center"},"msg-text":{color:"#666666"},"house-type":{marginTop:"25",width:"750",height:"60",flexDirection:"row",justifyContent:"flex-end"},"type-button":{width:"72",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",color:"#2d63da",fontSize:"26"},"panel-text":{fontSize:"26",textAlign:"left"},"house-tag":{flexDirection:"row"},"house-tag-text":{lineHeight:"50",paddingLeft:"10",backgroundColor:"#f8f8f8",color:"#222222",width:"380"},"fang-img":{marginLeft:"10",width:"200",height:"140"},"avatar-img":{width:"120",height:"120",borderRadius:"60",marginLeft:"15"},"msg-name-time":{height:"80",alignItems:"center",paddingTop:"30",flexDirection:"row",justifyContent:"space-between"},navbar:{width:"100",height:"100",position:"absolute",top:0,left:0,color:"#ffffff"}}},18:function(t,e,i){"use strict";i.r(e);var o=app.requireModule("eeui");weex.requireModule("stream"),weex.requireModule("modal"),app.requireModule("modal");e.default={data:function(){return{imageList:[{src:"http://img2.imgtn.bdimg.com/it/u=2296151058,2315950536&fm=11&gp=0.jpg"},{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938633178,3861272544&fm=26&gp=0.jpg"},{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3084942693,506713247&fm=26&gp=0.jpg"}],page_size:4,department:{title:"汕尾恒大聘请首付",price:"132000",phone:"0880-3331223"}}},created:function(){},mounted:function(){},methods:{viewCode:function(t){this.openViewCode(t)},goTo:function(t){o.toast({message:t,gravity:"middle"})},push:function(t){o.openPage({url:t,pageType:"app"})},back:function(){o.closePage(null)}}}},19:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["app"]},[i("banner",{staticClass:["banner"],on:{itemClick:t.itemClick}},t._l(t.imageList,(function(t){return i("div",{staticClass:["banner-frame"]},[i("image",{staticClass:["banner-image"],attrs:{resize:"cover",src:t.src}})])}))),i("div",{staticStyle:{flexDirection:"row",justifyContent:"space-between"}},[i("div",[i("div",{staticStyle:{width:"450px",height:"150px"}},[i("text",{staticStyle:{fontSize:"40px",lineHeight:"120px"}},[t._v(t._s(t.department.title))])]),i("div",{staticStyle:{flexDirection:"row"}},[i("text",{staticStyle:{height:"40px",fontSize:"28px"}},[t._v("参考价格：")]),i("text",{staticStyle:{height:"40px",color:"#fe615a",fontSize:"28px"}},[t._v(t._s(t.department.price)+"元/㎡")])]),i("div",{staticStyle:{flexDirection:"row"}},[i("text",{staticStyle:{height:"40px",fontSize:"28px"}},[t._v("售楼热线：")]),i("text",{staticStyle:{height:"40px",color:"#fe615a",fontSize:"28px"}},[t._v(t._s(t.department.phone))])])]),i("div",{staticStyle:{alignItems:"center"}},[i("button",{staticStyle:{width:"300px",height:"120px"},attrs:{text:"网上认购",model:"yellow",borderRadius:"0"}}),i("button",{staticStyle:{width:"200px",height:"200px",marginTop:"20px"},attrs:{text:"咨询客服",model:"red",borderRadius:"100"}})],1)]),i("div",{staticStyle:{position:"fixed",bottom:"0",left:"0",width:"750px",height:"150px",flexDirection:"row",justifyContent:"space-between"}},[i("div",[i("icon",{staticStyle:{width:"100px",height:"100px",color:"red",fontSize:"100px"},attrs:{content:"ios-call"}}),i("text",{staticStyle:{fontSize:"30px",textAlign:"center",width:"100px"}},[t._v("电话")])],1),i("div",[i("icon",{staticStyle:{width:"100px",height:"100px",color:"red",fontSize:"100px"},attrs:{content:"ios-star-outline"}}),i("text",{staticStyle:{fontSize:"30px",textAlign:"center",width:"100px"}},[t._v("收藏")])],1),i("div",[i("icon",{staticStyle:{width:"100px",height:"100px",color:"red",fontSize:"100px"},attrs:{content:"tb-share-light"}}),i("text",{staticStyle:{fontSize:"30px",textAlign:"center",width:"100px"}},[t._v("分享")])],1),i("div",{staticStyle:{flexDirection:"row",justifyContent:"space-between"}},[i("button",{staticClass:["buy-buttom"],attrs:{text:"网上认购",model:"yellow",borderRadius:"0"}}),i("button",{staticClass:["buy-buttom"],attrs:{text:"立即咨询",model:"red",borderRadius:"0"}})],1)]),i("icon",{staticClass:["navbar"],attrs:{content:"tb-back-android"},on:{click:t.back}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
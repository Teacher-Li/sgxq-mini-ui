(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2153"],{"7cd5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-page"},[r("h1",[e._v("Card 卡片")]),e._m(0),r("p",[e._v("布局组件。")]),e._m(1),e._m(2),r("div",{staticClass:"code"},[r("a",{on:{click:e.copy}},[e._v("Copy")]),r("textarea",{domProps:{value:e.json}}),r("pre",{attrs:{bg:""}},[r("code",{domProps:{innerHTML:e._s(e.HLJSON(e.json))}})])]),e._m(3),e._m(4),r("div",{staticClass:"card"},[r("div",{staticClass:"code wxml"},[r("a",{on:{click:e.copy}},[e._v("Copy")]),r("textarea",{domProps:{value:e.wxml}}),r("pre",[r("code",{domProps:{innerHTML:e._s(e.HLHTML(e.wxml))}})])])]),e._m(5),r("o-table",[r("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,(function(t){return r("th",[e._v(e._s(t.label))])})),0),e._l(e.propsTbody1,(function(t){return r("tr",e._l(e.propsThead,(function(a){return r("td",{domProps:{innerHTML:e._s(t[a.value])}})})),0)}))],2),e._m(6),r("o-table",[r("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,(function(t){return r("th",[e._v(e._s(t.label))])})),0),e._l(e.propsTbody2,(function(t){return r("tr",e._l(e.propsThead,(function(a){return r("td",{domProps:{innerHTML:e._s(t[a.value])}})})),0)}))],2),e._m(7),r("o-table",[r("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,(function(t){return r("th",[e._v(e._s(t.label))])})),0),e._l(e.propsTbody3,(function(t){return r("tr",e._l(e.propsThead,(function(a){return r("td",{domProps:{innerHTML:e._s(t[a.value])}})})),0)}))],2)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("概述")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("使用指南")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("在页面的 "),r("em",[e._v("json")]),e._v(" 文件中引入组件：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("Example")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("在页面的 "),r("em",[e._v("wxml")]),e._v(" 中使用组件：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("CardBox Properties")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("CardRes Properties")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anchor"},[r("h2",[e._v("CardTopic Properties")])])}],s={name:"Card",data:function(){return{json:'"usingComponents": {\n  "sgxq-card-box": "/dist/components/card/card-box/card-box",\n  "sgxq-card-res": "/dist/components/card/card-res/card-res",\n  "sgxq-card-topic": "/dist/components/card/card-topic/card-topic"\n}',wxml:'<sgxq-card-box>\n  <view class="img">\n    <view class="img-default"></view>\n  </view>\n</sgxq-card-box>\n\n<sgxq-card-res res-cover="/static/images/bg_default.png"></sgxq-card-res>\n\n<sgxq-card-topic></sgxq-card-topic>',propsTbody1:[{label:"hover",type:"Boolean",introduce:"是否呈现点击态效果",default:"false"}],propsTbody2:[{label:"card-type",type:"String",introduce:"卡片的类型，可选为 <em>map</em> 和 <em>des</em>",default:"map"},{label:"title",type:"String",introduce:"标题的文案",default:"荒岛求生"},{label:"date",type:"String",introduce:"卡片的日期",default:"2019/04/01"},{label:"map-type",type:"String",introduce:"玩法地图的标签",default:"枪战"},{label:"des-type",type:"String",introduce:"设计图的标签",default:"像素风格"},{label:"des-size",type:"String",introduce:"设计图的尺寸",default:"10*10"},{label:"res-cover",type:"String",introduce:"卡片 <em>body</em> 部分的图片地址",default:"-"},{label:"heat",type:"Number",introduce:"卡片的火热度",default:"0"}],propsTbody3:[{label:"card-type",type:"String",introduce:"卡片的类型(<em warning>未实现</em>)",default:"0"},{label:"is-video",type:"Boolean",introduce:"是否是视频卡片",default:"false"},{label:"has-watch",type:"Number",introduce:"浏览量",default:"0"},{label:"has-commit",type:"Number",introduce:"评论量",default:"0"},{label:"img-list",type:"Array",introduce:"图片列表(<em warning>未实现</em>)",default:"[]"},{label:"content",type:"String",introduce:"卡片内容的文案",default:"-"}]}}},o=s,l=r("2877"),c=Object(l["a"])(o,a,n,!1,null,null,null);t["default"]=c.exports}}]);
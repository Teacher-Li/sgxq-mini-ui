(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231023"],{ef5a:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-page"},[r("h1",[t._v("Star 评分")]),t._m(0),r("p",[t._v("基础组件。")]),t._m(1),t._m(2),r("div",{staticClass:"code"},[r("a",{on:{click:t.copy}},[t._v("Copy")]),r("textarea",{domProps:{value:t.json}}),r("pre",{attrs:{bg:""}},[r("code",{domProps:{innerHTML:t._s(t.HLJSON(t.json))}})])]),t._m(3),t._m(4),r("div",{staticClass:"card"},[r("div",{staticClass:"code wxml"},[r("a",{on:{click:t.copy}},[t._v("Copy")]),r("textarea",{domProps:{value:t.wxml}}),r("pre",[r("code",{domProps:{innerHTML:t._s(t.HLHTML(t.wxml))}})])])]),t._m(5),r("o-table",[r("tr",{attrs:{slot:"thead"},slot:"thead"},t._l(t.propsThead,(function(e){return r("th",[t._v(t._s(e.label))])})),0),t._l(t.propsTbody1,(function(e){return r("tr",t._l(t.propsThead,(function(s){return r("td",{domProps:{innerHTML:t._s(e[s.value])}})})),0)}))],2),t._m(6),r("o-table",[r("tr",{attrs:{slot:"thead"},slot:"thead"},t._l(t.propsThead,(function(e){return r("th",[t._v(t._s(e.label))])})),0),t._l(t.propsTbody2,(function(e){return r("tr",t._l(t.propsThead,(function(s){return r("td",{domProps:{innerHTML:t._s(e[s.value])}})})),0)}))],2)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"anchor"},[r("h2",[t._v("概述")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"anchor"},[r("h2",[t._v("使用指南")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在页面的 "),r("em",[t._v("json")]),t._v(" 文件中引入组件：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"anchor"},[r("h2",[t._v("Example")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在页面的 "),r("em",[t._v("wxml")]),t._v(" 中使用组件：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"anchor"},[r("h2",[t._v("Star Properties")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"anchor"},[r("h2",[t._v("StarList Properties")])])}],n={name:"Star",data:function(){return{json:'"usingComponents": {\n  "sgxq-star": "/dist/components/star/star",\n  "sgxq-star-list": "/dist/components/star/star"\n}',wxml:'<sgxq-star-list value="2.5"></sgxq-star-list>',propsTbody1:[{label:"prefixCls",type:"String",introduce:"自定义类名",default:"-"},{label:"value",type:"Number",introduce:"评分绑定的值",default:"-"},{label:"count",type:"Number",introduce:"总评分值",default:"5"},{label:"index",type:"Number",introduce:"当前下标值",default:"-"}],propsTbody2:[{label:"value",type:"Number",introduce:"评分绑定的值",default:"-"},{label:"count",type:"Number",introduce:"总评分值",default:"5"}]}}},o=n,l=r("2877"),c=Object(l["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports}}]);
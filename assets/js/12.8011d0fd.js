(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{520:function(t,e,a){"use strict";a.r(e);var n=a(6),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Android打包之后使用adb安装apk文件时报错信息如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" Failure [INSTALL_FAILED_NO_MATCHING_ABIS: Failed to extract native libraries, res=-113]\n")])])]),a("blockquote",[a("p",[t._v("灵感来源："),a("a",{attrs:{href:"https://juejin.im/post/6844903522392080392",target:"_blank",rel:"noopener noreferrer"}},[t._v("根据不同的cpu架构打包"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("看到这篇文章之后，有根据不同的CPU打包，不如直接在配置中放入配置文件，所有的架构打一个包。配置文件如下：")])]),t._v(" "),a("blockquote",[a("p",[t._v("在android 的defaultConfig中加入ndk目录，后面加上所有的cpu支持")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("android{\n    ...\n    defaultConfig {\n        ndk {\n            abiFilters 'x86', 'armeabi-v7a','x86_64'\n        }\n    }\n    ...\n}\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
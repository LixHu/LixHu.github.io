(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{522:function(t,e,n){"use strict";n.r(e);var a=n(6),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("hr"),t._v(" "),n("p",[t._v("title: iframe跨域同域子父通信方法\ndate: 2019-05-15 10:05:12\ntags:")]),t._v(" "),n("ul",[n("li",[t._v("JavaScript\ncategories:")]),t._v(" "),n("li",[t._v("JavaScript")])]),t._v(" "),n("hr"),t._v(" "),n("h5",{attrs:{id:"前端iframe同域互相调用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端iframe同域互相调用方法"}},[t._v("#")]),t._v(" 前端iframe同域互相调用方法")]),t._v(" "),n("ul",[n("li",[t._v("假设A.html 与B.html domain 都是localhost(本地同域)")]),t._v(" "),n("li",[t._v("A.html中有iframe嵌入B.html name=myiframe")]),t._v(" "),n("li",[t._v("A.html 有js function fMain()")]),t._v(" "),n("li",[t._v("B.html 有js function fMain()")]),t._v(" "),n("li",[n("font",{attrs:{color:"red"}},[t._v("需要实现A.html调用B.html mainIframe(), B.html调用A.html的mainIframe()")])],1)]),t._v(" "),n("h4",{staticStyle:{color:"red"}},[t._v("A.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>A</title>\n        <script>\n            function mainIframe() {\n                alert(\'A.html function success\');\n            }\n    \n            function exec_iframe() {\n                window.myframe.mainIframe();\n            }\n        <\/script>\n    </head>\n    <body>\n        <p>A.html</p>\n        <p><input type="button" value="exec iframe function" onclick="exec_iframe()"></p>\n        <iframe src="B.html" name="myframe" frameborder="0" width="500" height="500"></iframe>\n    </body>\n    </html>\n')])])]),n("h4",{staticStyle:{color:"red"}},[t._v("B.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>B</title>\n        <script>\n            function mainIframe() {\n                alert(\'B.html function success\');\n            }\n    \n            function exec_main() {\n                parent.mainIframe();\n            }\n        <\/script>\n    </head>\n    <body>\n    <p>B.html</p>\n    <p><input type="button" value="exec main function" onclick="exec_main()"></p>\n    </body>\n    </html>\n')])])]),n("p",[t._v("点击A.html的button 调用的是B.html中的方法\n"),n("img",{attrs:{src:"http://liahu.cauyyl.com/1557971719847.jpg",alt:"avatar"}})]),t._v(" "),n("p",[t._v("点击B.html的button 调用的是A.html中的方法\n"),n("img",{attrs:{src:"http://liahu.cauyyl.com/1557971738047.jpg",alt:"avatar"}})]),t._v(" "),n("h4",{attrs:{id:"跨域互相调用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域互相调用方法"}},[t._v("#")]),t._v(" 跨域互相调用方法")]),t._v(" "),n("ul",[n("li",[t._v("假设A.html的 domain 是http://a.com ， B.html 的domain 是http://b.com")]),t._v(" "),n("li",[t._v("A.html中的iframe嵌入B.html, name=myframe")]),t._v(" "),n("li",[t._v("A.html有js function fMain()")]),t._v(" "),n("li",[t._v("B.html有js function fIframe()")])]),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[t._v("需要实现A.html调用B.html的fIframe(), B.html调用A.html的fMain()")])],1),t._v(" "),n("p",[t._v("如果上面是同域的方法，浏览器判断A.html和B.html不同域，会有错误提示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://liahu.cauyyl.com/1557976836471.jpg",alt:"avatar"}})]),t._v(" "),n("p",[t._v("实现原理：\n因为浏览器为了安全，禁止不同域访问。"),n("font",{attrs:{color:"red"}},[t._v("因此只要调用与执行的双方是同域则可以互相访问")])],1),t._v(" "),n("p",[t._v("首先，A.html 如何调用B.html的fIframe方法")]),t._v(" "),n("ol",[n("li",[t._v("在A.html创建一个iframe")]),t._v(" "),n("li",[t._v("iframe的页面放入B.html 同域下，命名为execB.html")]),t._v(" "),n("li",[t._v("execB.html里有调用B.html fIframe 方法的js调用")])]),t._v(" "),n("p",[t._v("这样，A.html 就能通过execB.html调用B.html的 fIframe 方法了")]),t._v(" "),n("p",[t._v("同理，B.html 需要调用A.html fMain方法，需要在B.html 嵌入与A.html 同域的 execA.html")]),t._v(" "),n("p",[t._v("execA.html 里有调用 A.html fMain 方法的js 调用")]),t._v(" "),n("h4",{staticStyle:{color:"red"}},[t._v("A.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>A</title>\n        <script>\n            // main js function\n            function fMain(){\n                alert(\'a.html function success\');\n            }\n    \n            // exec iframe function\n            function exec_iframe(){\n                if(typeof(exec_obj)==\'undefined\'){\n                    exec_obj = document.createElement(\'iframe\');\n                    exec_obj.name = \'tmp_frame\';\n                    exec_obj.src = \'http://b.com/execB.html\';\n                    exec_obj.style.display = \'none\';\n                    document.body.appendChild(exec_obj);\n                }else{\n                    exec_obj.src = \'http://b.com/execB.html?\' + Math.random();\n                }\n            }\n        <\/script>\n    </head>\n    <body>\n    <p>A.html</p>\n    <p><input type="button" value="exec iframe function" onclick="exec_iframe()"></p>\n    <iframe src="http://b.com/B.html" name="myframe" frameborder="0" width="500" height="500"></iframe>\n    </body>\n    </html>\n')])])]),n("h4",{staticStyle:{color:"red"}},[t._v("B.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>B</title>\n        <script>\n            function fIframe(){\n                alert('b.html function success');\n            }\n    \n            // exec main function\n            function exec_main() {\n                if (typeof (exec_obj) == 'undefined') {\n                    exec_obj = document.createElement('iframe');\n                    exec_obj.name = 'tmp_frame';\n                    exec_obj.src = 'http://a.com/execA.html';\n                    exec_obj.style.display = 'none';\n                    document.body.appendChild(exec_obj);\n                } else {\n                    exec_obj.src = 'http://a.com/execA.html?' + Math.random();\n                }\n            }\n        <\/script>\n    </head>\n    <body>\n    <p>B.html</p>\n    <p><input type=\"button\" value=\"exec main function\" onclick=\"exec_main()\"></p>\n    </body>\n    </html>\n")])])]),n("h4",{staticStyle:{color:"red"}},[t._v("execA.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Title</title>\n    </head>\n    <body>\n        <script>\n            parent.parent.fMain();\n        <\/script>\n    </body>\n    </html>\n')])])]),n("h4",{staticStyle:{color:"red"}},[t._v("execB.html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Title</title>\n    </head>\n    <body>\n        <script>\n            parent.window.myframe.fIframe();\n        <\/script>\n    </body>\n    </html>\n')])])]),n("p",[t._v("执行如下图\n"),n("img",{attrs:{src:"http://liahu.cauyyl.com/1557978129803.jpg",alt:"avatar"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"http://liahu.cauyyl.com/1557978154771.jpg",alt:"avatar"}})])])}),[],!1,null,null,null);e.default=l.exports}}]);
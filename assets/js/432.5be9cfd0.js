(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1319:function(s,e,a){"use strict";a.r(e);var n=a(17),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("介绍了nodejs中的基本知识")])]),s._v(" "),a("h2",{attrs:{id:"是什么-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么-nodejs"}},[s._v("#")]),s._v(" 是什么 nodejs")]),s._v(" "),a("ul",[a("li",[s._v("基于chrome v8引擎的js运行时")]),s._v(" "),a("li",[s._v("nodejs出现前，js只能在浏览器运行")]),s._v(" "),a("li",[s._v("nodejs出现后，js可以在任何安装nodejs的环境运行")])]),s._v(" "),a("h2",{attrs:{id:"commonjs和es6-module的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs和es6-module的区别"}},[s._v("#")]),s._v(" commonjs和es6 module的区别")]),s._v(" "),a("ul",[a("li",[s._v("语法不同")]),s._v(" "),a("li",[s._v("commonjs是动态引入，执行的时候才引入  const xx =require('xx') 可以放在if等语句中")]),s._v(" "),a("li",[s._v("es6 modules是静态引入，编译时引入 import {xx}  from '.yy' 不能放在if等的语句中，否则会报错")])]),s._v(" "),a("h2",{attrs:{id:"nodejs和前端js的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs和前端js的区别"}},[s._v("#")]),s._v(" nodejs和前端js的区别")]),s._v(" "),a("ul",[a("li",[s._v("语法都是使用es语法，比如函数 class 变量")]),s._v(" "),a("li",[s._v("前端js使用js web api 比如：dom，bom，ajax")]),s._v(" "),a("li",[s._v("nodejs使用node api ，比如 http querystring")])]),s._v(" "),a("h2",{attrs:{id:"nodejs和前端js的应用区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs和前端js的应用区别"}},[s._v("#")]),s._v(" nodejs和前端js的应用区别")]),s._v(" "),a("ul",[a("li",[s._v("前端js用于网页，在浏览器运行")]),s._v(" "),a("li",[s._v("nodejs可用于服务端，如开发web server")]),s._v(" "),a("li",[s._v("nodejs也可用于本机，如webpack等本机的工具")])]),s._v(" "),a("h2",{attrs:{id:"node基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node基本使用"}},[s._v("#")]),s._v(" node基本使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const http = require('http')\nconst qs = require('querystring')\nconst server = http.createServer((req, res) => {\n    const method = req.method // 得到的是大写 ： GET POST \n    const url = req.url // 获取的是完整的url\n    const pathname = url.split('?')[0] // 获取pathname\n    if (method === 'GET' && pathname === 'xx') {\n        req.end('xx路由')     // res.end -- 【返回的永远是字符串】\n    }\n    req.query = qs.parse(url.split('?')[1])   // 获取querystring\n    res.end(JSON.stringify(req.query)) \n    console.log('已经收到http请求')\n    res.end('hello')\n})\nserver.listen(3000, () => {\n    console.log('服务器启动成功')\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"结构化和非结构化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构化和非结构化"}},[s._v("#")]),s._v(" 结构化和非结构化")]),s._v(" "),a("ul",[a("li",[s._v("结构化的数据，易于通过程序访问和分析，如对象和数组")]),s._v(" "),a("li",[s._v("非结构化的数据，不易于通过程序访问和分析，如字符串")]),s._v(" "),a("li",[s._v("编程中，都尽量结构化")])]),s._v(" "),a("h2",{attrs:{id:"如何获取requestbody"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取requestbody"}},[s._v("#")]),s._v(" 如何获取requestBody")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const http = require('http')\nconst server = http.createServer((req, res) => {\n    if (req.method === 'POST') {\n        // 得到数据格式\n        console.log('content-type', req.headers['content-type'])\n        // 接收数据\n        let postData = ''\n        // 得到的请求的数据是流 stream，需要使用 data一点一点的接收\n        req.on('data', chunk => {\n            postData += chunk.toString()\n        })\n        req.on('end', () => {\n            console.log(postData)\n            res.end('hello')   // 在这里返回数据，因为是异步的\n        })\n    }\n})\nserver.listen(3000, () => {\n    console.log('服务器启动成功')\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"如何返回json格式的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何返回json格式的数据"}},[s._v("#")]),s._v(" 如何返回json格式的数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('res.writeHead(200,{\n    "Content-type":"application/json"\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"session如何实现登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session如何实现登录"}},[s._v("#")]),s._v(" session如何实现登录")]),s._v(" "),a("h2",{attrs:{id:"async和await执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async和await执行顺序"}},[s._v("#")]),s._v(" async和await执行顺序")]),s._v(" "),a("h2",{attrs:{id:"koa2如何实现路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa2如何实现路由"}},[s._v("#")]),s._v(" koa2如何实现路由")]),s._v(" "),a("h2",{attrs:{id:"koa2的洋葱圈模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa2的洋葱圈模型"}},[s._v("#")]),s._v(" koa2的洋葱圈模型")])])}),[],!1,null,null,null);e.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1012:function(t,n,a){"use strict";a.r(n);var s=a(17),p=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cnpm的简介与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cnpm的简介与使用"}},[t._v("#")]),t._v(" cnpm的简介与使用")]),t._v(" "),a("h3",{attrs:{id:"_1-国内使用npm存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-国内使用npm存在的问题"}},[t._v("#")]),t._v(" 1.国内使用npm存在的问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装npm后，每次我们安装包时，我们的电脑都要和npm服务器进行对话，去npm仓库获取包。")])]),t._v(" "),a("li",[a("p",[t._v("npm默认的仓库地址为：http://registry.npmjs.org")])]),t._v(" "),a("li",[a("p",[t._v("查看当前npm仓库地址命令："),a("code",[t._v("npm config get registry")]),t._v("，提示如下图：\n"),a("img",{attrs:{src:"https://s2.ax1x.com/2019/01/08/FqtKhR.png",alt:"Alt text"}})])]),t._v(" "),a("li",[a("p",[t._v("因为npm的远程服务器在国外，所以有时候难免出现访问过慢，甚至无法访问的情况。")])]),t._v(" "),a("li",[a("p",[t._v("为了解决这个问题，我们有以下几个解决办法")])])]),t._v(" "),a("h3",{attrs:{id:"_2-使用淘宝的cnpm代替npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用淘宝的cnpm代替npm"}},[t._v("#")]),t._v(" 2.使用淘宝的cnpm代替npm")]),t._v(" "),a("blockquote",[a("p",[t._v("淘宝为我们搭建了一个国内的npm服务器，它目前是每隔10分钟将国外npm仓库的所有内容“搬运”回国内的服务器上，这样我们直接访问淘宝的国内服务器就可以了，它的地址是：https://registry.npm.taobao.org")])]),t._v(" "),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法：")]),t._v(" "),a("h4",{attrs:{id:"第一种-直接安装cnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种-直接安装cnpm"}},[t._v("#")]),t._v(" 第一种：直接安装cnpm")]),t._v(" "),a("p",[t._v("安装淘宝提供的cnpm，并更改服务器地址为淘宝的国内地址，\n命令："),a("code",[t._v("npm install -g cnpm --registry=https://registry.npm.taobao.org")]),t._v("，以后安装直接采用"),a("code",[t._v("cnpm")]),t._v("替代"),a("code",[t._v("npm")]),t._v("，\n例如原生npm命令为："),a("code",[t._v("npm install uniq --save")]),t._v("，cnpm命令为："),a("code",[t._v("cnpm install uniq --save")])]),t._v(" "),a("h4",{attrs:{id:"第二种-替换npm仓库地址为淘宝镜像地址-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种-替换npm仓库地址为淘宝镜像地址-推荐"}},[t._v("#")]),t._v(" 第二种：替换npm仓库地址为淘宝镜像地址（推荐）")]),t._v(" "),a("p",[t._v("命令："),a("code",[t._v("npm config set registry https://registry.npm.taobao.org")]),t._v("，\n查看是否更改成功："),a("code",[t._v("npm config get registry")]),t._v("，以后安装时，依然用npm命令，但是实际是从淘宝国内服务器下载的")])])}),[],!1,null,null,null);n.default=p.exports}}]);
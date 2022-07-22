(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{988:function(s,a,t){"use strict";t.r(a);var e=t(17),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"prototype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[s._v("#")]),s._v(" prototype")]),s._v(" "),t("h2",{attrs:{id:"一-说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-说明"}},[s._v("#")]),s._v(" 一.说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在JavaScript中，每个构造函数都有一个prototype属性，这个属性指向函数的原型对象。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二-例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-例子"}},[s._v("#")]),s._v(" 二.例子")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function Person(age) {\n    this.age = age       \n}\nPerson.prototype.name = 'kavin'\nvar person1 = new Person()\nvar person2 = new Person()\nconsole.log(person1.name) //kavin\nconsole.log(person2.name)  //kavin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h1",{attrs:{id:"proto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[s._v("#")]),s._v(" "),t("strong",[s._v("proto")])]),s._v(" "),t("h2",{attrs:{id:"一-说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-说明-2"}},[s._v("#")]),s._v(" 一.说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("每个实例对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二-代码演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-代码演示"}},[s._v("#")]),s._v(" 二.代码演示")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function Person() {\n\n}\nvar person = new Person();\nconsole.log(person.__proto__ === Person.prototype); // true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"constructor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[s._v("#")]),s._v(" constructor")]),s._v(" "),t("h2",{attrs:{id:"一-说明-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-说明-3"}},[s._v("#")]),s._v(" 一.说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("每个原型都有一个constructor属性，指向该关联的构造函数。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-代码"}},[s._v("#")]),s._v(" 二.代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function Person() {\n\n}\nconsole.log(Person===Person.prototype.constructor)  //true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function Person() {\n\n}\n\nvar person = new Person();\n\nconsole.log(person.__proto__ == Person.prototype) // true\nconsole.log(Person.prototype.constructor == Person) // true\n// 顺便学习一个ES5的方法,可以获得实例对象\nconsole.log(Object.getPrototypeOf(person) === Person.prototype) // true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"三-补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-补充说明"}},[s._v("#")]),s._v(" 三.补充说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function Person() {\n\n}\nvar person = new Person();\nconsole.log(person.constructor === Person); // true\n\n当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的实例对象(__proto__)也就是 Person.prototype 中读取，正好原型中有该属性，所以：person.constructor === Person.prototype.constructor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h1",{attrs:{id:"重点补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点补充"}},[s._v("#")]),s._v(" 重点补充 ：")]),s._v(" "),t("h2",{attrs:{id:"一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一"}},[s._v("#")]),s._v(" 一.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("构造函数.prototype（原型对象） === 实例对象.__proto__(实例对象) ,既然也是对象,那么也有__proto__属性\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二"}},[s._v("#")]),s._v(" 二.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("console.log(Object.prototype.__proto__ === null) // true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三"}},[s._v("#")]),s._v(" 三.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("一直沿着__proto__ 形成的链条即为原型链\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
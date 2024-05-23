(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{525:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"框架系列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架系列"}},[t._v("#")]),t._v(" 框架系列")]),t._v(" "),s("h2",{attrs:{id:"vue框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue框架"}},[t._v("#")]),t._v(" Vue框架")]),t._v(" "),s("h3",{attrs:{id:"_1-vue-和-react-的相同点和区别。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-和-react-的相同点和区别。"}},[t._v("#")]),t._v(" 1. Vue 和 React 的相同点和区别。")]),t._v(" "),s("p",[t._v("相同点：")]),t._v(" "),s("ul",[s("li",[t._v("都有组件化思想")]),t._v(" "),s("li",[t._v("都支持服务端渲染")]),t._v(" "),s("li",[t._v("都有虚拟DOM")]),t._v(" "),s("li",[t._v("数据驱使视图")]),t._v(" "),s("li",[t._v("都有支持Native的工具")]),t._v(" "),s("li",[t._v("都有自己的构建工具")])]),t._v(" "),s("p",[t._v("区别：")]),t._v(" "),s("ul",[s("li",[t._v("数据流向的不同，react从诞生开始就推崇单向数据流，而Vue是双向数据流。")]),t._v(" "),s("li",[t._v("数据变化的实现原理不同。react是不可变数据，而Vue使用的是可变数据")]),t._v(" "),s("li",[t._v("组件化通信不同，react中通过使用回调函数来进行通信的，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数")]),t._v(" "),s("li",[t._v("diff算法不同。react主要使用diff队列保存哪些要更新的DOM，得到Patch树，再统一操作批量更新DOM，vue使用的是双向指针，边对比，边更新dom。")])]),t._v(" "),s("h3",{attrs:{id:"_2-vue和react的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue和react的生命周期"}},[t._v("#")]),t._v(" 2.Vue和React的生命周期：")]),t._v(" "),s("p",[t._v("Vue的生命周期：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- 创建阶段 beforeCreate， Created\n- 挂载阶段 beforeMount Mounted\n- 运行阶段 beforeUpdate Updated\n- 销毁阶段 beforeDestroy Destroyed\n")])])]),s("p",[t._v("React的生命周期：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- 创建阶段 constructor render componentDidMount\n- 更新阶段 shouldComponentUpdate render componentDidUpdate\n- 卸载阶段 componentWillUnMount\n")])])]),s("h3",{attrs:{id:"_3-spa单页面应用首屏加载慢怎么解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-spa单页面应用首屏加载慢怎么解决"}},[t._v("#")]),t._v(" 3. SPA单页面应用首屏加载慢怎么解决？")]),t._v(" "),s("p",[t._v("要解决首屏加载慢的原因首先要知道是什么问题造成的：")]),t._v(" "),s("ul",[s("li",[t._v("网络延时问题")]),t._v(" "),s("li",[t._v("资源文件体积过大")]),t._v(" "),s("li",[t._v("资源是否重复发送请求")]),t._v(" "),s("li",[t._v("加载脚本的时候，渲染内容堵塞了")])]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("ul",[s("li",[t._v("减小入口文件体积")]),t._v(" "),s("li",[t._v("静态资源本地缓存")]),t._v(" "),s("li",[t._v("UI框架按需加载")]),t._v(" "),s("li",[t._v("图片资源压缩")]),t._v(" "),s("li",[t._v("组件重复打包")]),t._v(" "),s("li",[t._v("开启GZIP压缩")]),t._v(" "),s("li",[t._v("使用SSR")])]),t._v(" "),s("h3",{attrs:{id:"_4-vue2-和vue3的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue2-和vue3的区别"}},[t._v("#")]),t._v(" 4. Vue2 和Vue3的区别")]),t._v(" "),s("p",[t._v("性能优化： 重写了虚拟DOM，提升了渲染性能，Vue3的Tree-Shaking支持更好，构建时剔除了未使用的代码，打包体积更小。")]),t._v(" "),s("p",[t._v("响应式系统的改进：Vue3使用了Proxy，而不是Object.defineProperty, 提供了更好的类型判断，使得在ts等静态类型语言中开发更加友好")]),t._v(" "),s("p",[t._v("组件化改进：采用了Composition API，更符合函数式编程思想，更易维护，更易复用，更易测试。")]),t._v(" "),s("p",[t._v("TS支持更加完善：vue3支持ts，更易开发，更易维护，更易测试。")]),t._v(" "),s("h3",{attrs:{id:"_5-vue-computed-和-watch-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-computed-和-watch-的区别"}},[t._v("#")]),t._v(" 5. vue computed 和 watch 的区别")]),t._v(" "),s("p",[t._v("computed： 计算属性，依赖其他属性值，并且当依赖的属性值发生变化时，会重新计算，并且缓存计算结果，只有依赖的属性值发生变化时才会重新计算。\nwatch： 监听属性，当属性值发生变化时，会执行回调函数，可以执行一些逻辑操作。")]),t._v(" "),s("h3",{attrs:{id:"_6-vue2-的data属性为什么是一个函数而不是一个对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue2-的data属性为什么是一个函数而不是一个对象"}},[t._v("#")]),t._v(" 6. Vue2 的data属性为什么是一个函数而不是一个对象")]),t._v(" "),s("p",[t._v("根实例对象的data可以是对象也可以是函数（根实例是单例的），不会产生污染情况\n组件实例必须是函数，目的是为了防止多个组件实例对象公用一个data，产生数据污染，采用函数的形式，initData 时会将其作为工厂函数，每次创建组件实例时，都会调用该函数，返回一个新的对象。")]),t._v(" "),s("h3",{attrs:{id:"_7-v-for-和-v-if-为什么不建议一起使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-v-for-和-v-if-为什么不建议一起使用"}},[t._v("#")]),t._v(" 7. V-for 和 V-if 为什么不建议一起使用")]),t._v(" "),s("p",[t._v("每次渲染都会先循环再进行条件判断，带来性能浪费\n如果要避免出现这种情况，则在外层套一个template（页面渲染不生成DOM节点）在这一层进行v-if 判断，然后在内部进行v-for循环\n如果条件出现循环内部，可通过计算属性computed 提前过滤")]),t._v(" "),s("h2",{attrs:{id:"react框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react框架"}},[t._v("#")]),t._v(" React框架")]),t._v(" "),s("h3",{attrs:{id:"_1-常用的hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用的hook"}},[t._v("#")]),t._v(" 1. 常用的hook")]),t._v(" "),s("ul",[s("li",[t._v("useState 定义state对象以及回调函数")]),t._v(" "),s("li",[t._v("useEffect 副作用hook")]),t._v(" "),s("li",[t._v("useLayoutEffect 有DOM操作的副作用hook，作用是在DOM更新完成之后执行某个操作。")]),t._v(" "),s("li",[t._v("useMemo 只有在依赖项发生变化的时候才会重新调用该函数， 返回任何，函数、对象都可以")]),t._v(" "),s("li",[t._v("useCallback 返回一个函数")]),t._v(" "),s("li",[t._v("useRef 返回一个子元素索引")]),t._v(" "),s("li",[t._v("useContext 是让子组件之间共享父组件传入状态的。")]),t._v(" "),s("li",[t._v("useReducer 从状态管理中获取想要的状态。")])]),t._v(" "),s("h3",{attrs:{id:"_2-redux-和-mobx的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-redux-和-mobx的区别"}},[t._v("#")]),t._v(" 2. Redux 和 mobx的区别")]),t._v(" "),s("ul",[s("li",[t._v("Redux更多的是遵循函数式编程思想，而mobx更多的是从面向对象角度考虑问题。")]),t._v(" "),s("li",[t._v("Redux将共享的应用数据集中在一个大的store中，而mobx通常将模块将应用状态划分，在多个store中管理。")]),t._v(" "),s("li",[t._v("Redux默认以原生对象存储数据，而mobx使用可观察对象。")]),t._v(" "),s("li",[t._v("Redux对象通常是不可变的，而mobx可以直接使用新值更新状态对象。")]),t._v(" "),s("li",[t._v("Redux更适合大型项目，mobx更适合小型项目。")])]),t._v(" "),s("h3",{attrs:{id:"_3-react-真实dom-和虚拟dom的区别-以及优缺点。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-真实dom-和虚拟dom的区别-以及优缺点。"}},[t._v("#")]),t._v(" 3. React 真实DOM 和虚拟DOM的区别，以及优缺点。")]),t._v(" "),s("p",[t._v("RealDOM： 真实DOM，意思是文档对象类型。在页面渲染的每一个节点都是一个真实DOM结构。\nVirtualDOM: 虚拟DOM，本质上是JavaScript对象存在的形式对DOM的描述。\n区别：")]),t._v(" "),s("ul",[s("li",[t._v("虚拟DOM不会进行排版和重绘操作，而真实DOM会频繁进行排版和重绘。")]),t._v(" "),s("li",[t._v("虚拟DOM的总损耗是“虚拟DOM增删改+真实DOM差异增删改+排版和重绘”，真实DOM的总损耗是“真实DOM完全增删改+排版和重绘”")])]),t._v(" "),s("p",[t._v("优缺点：")]),t._v(" "),s("ul",[s("li",[t._v("真实DOM的优势：\n"),s("ul",[s("li",[t._v("易用")])])]),t._v(" "),s("li",[t._v("真实DOM的缺点：\n"),s("ul",[s("li",[t._v("效率低，解析速度慢，内存占用量过高。")]),t._v(" "),s("li",[t._v("性能差，频繁操作真实DOM，易于导致重绘与回流。")])])]),t._v(" "),s("li",[t._v("虚拟DOM的优势：\n"),s("ul",[s("li",[t._v("简单方便：如果手动操作真实DOM来完成页面，繁琐又容易出错，在大规模应用维护起来也很困难。")]),t._v(" "),s("li",[t._v("性能方面：使用虚拟DOM，能够有效的避免真实DOM树频繁更新，减少多次引起重绘与回流，提高性能。")]),t._v(" "),s("li",[t._v("跨平台：React借助虚拟DOM，带来了跨平台的能力，一套代码多段运行。")])])]),t._v(" "),s("li",[t._v("虚拟DOM的缺点：\n"),s("ul",[s("li",[t._v("在一些性能要求极高的应用中使用虚拟DOM无法进行针对性的极致优化。")]),t._v(" "),s("li",[t._v("首次渲染大量DOM时，由于多了一些虚拟DOM的计算，速度比正常稍慢。")])])])]),t._v(" "),s("h2",{attrs:{id:"javascript基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础"}},[t._v("#")]),t._v(" JavaScript基础")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是闭包-闭包的优点和缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是闭包-闭包的优点和缺点"}},[t._v("#")]),t._v(" 1. 什么是闭包， 闭包的优点和缺点")]),t._v(" "),s("p",[t._v("闭包是指有权访问另一个函数作用域中的变量的函数。闭包是在其词法作用域外部执行的函数，它使用这个作用域中的变量。闭包是一种保护私有变量的机制。\n优点：")]),t._v(" "),s("ul",[s("li",[t._v("可以访问外部函数的变量")]),t._v(" "),s("li",[t._v("可以保护私有变量")]),t._v(" "),s("li",[t._v("可以实现数据封装")]),t._v(" "),s("li",[t._v("可以实现模块化")]),t._v(" "),s("li",[t._v("可以减少全局变量的使用\n缺点：")]),t._v(" "),s("li",[t._v("闭包会使得内存泄漏")]),t._v(" "),s("li",[t._v("闭包会使得性能下降")])]),t._v(" "),s("h3",{attrs:{id:"_2-什么是防抖和节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是防抖和节流"}},[t._v("#")]),t._v(" 2. 什么是防抖和节流")]),t._v(" "),s("p",[t._v("防抖：防抖是指在一段时间内，不管触发多少次回调，只执行最后一次。防抖的实现方式是使用定时器，当触发事件时，清除定时器，然后重新设置定时器。\n节流：节流是指在一段时间内，不管触发多少次回调，只执行一次。节流的实现方式是使用时间戳，当触发事件时，获取当前时间戳，然后与上一次触发事件的时间戳进行比较，如果大于指定时间间隔，则执行回调。")]),t._v(" "),s("h3",{attrs:{id:"_3-什么是事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是事件委托"}},[t._v("#")]),t._v(" 3. 什么是事件委托")]),t._v(" "),s("p",[t._v("事件委托是指将事件绑定到父元素上，然后通过事件冒泡的原理，将事件委托给父元素的子元素。事件委托的好处是可以减少内存消耗，提高性能。")]),t._v(" "),s("h3",{attrs:{id:"_4-typeof-和-instanceof-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-typeof-和-instanceof-的区别"}},[t._v("#")]),t._v(" 4. typeof 和 instanceof 的区别")]),t._v(" "),s("p",[t._v("typeof 会返回一个变量的基本类型， instanceof 返回布尔值\ninstanceof 可以准确的判断复杂引用数据类型，但是不能正确判断基础数据类型\ntypeof 也存在弊端，它虽然可以判断基本数据类型（null除外， typeof null 会返回 object），但是引用数据类型中，除了function类型以外，其它的也无法判断")]),t._v(" "),s("h3",{attrs:{id:"_5-symbol和bigint的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-symbol和bigint的使用场景"}},[t._v("#")]),t._v(" 5. Symbol和Bigint的使用场景")]),t._v(" "),s("p",[t._v("Symbol是一种新的数据类型，用来表示独一无二的值，主要用来解决对象属性名冲突的问题。\nBigInt是一种新的数据类型，用来表示大整数，主要用来解决大整数计算的问题。")]),t._v(" "),s("h3",{attrs:{id:"_6-js垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-js垃圾回收机制"}},[t._v("#")]),t._v(" 6. JS垃圾回收机制")]),t._v(" "),s("p",[t._v("Javascript 具有自动垃圾回收机制，也就是说，执行环境会负责管理代码执行过程中使用的内存。")]),t._v(" "),s("p",[t._v("原理：垃圾收集器会定期找出不在继续使用的变量，然后释放内存，通常有两种实现方式")]),t._v(" "),s("p",[t._v("标记清除：JavaScript最常用的垃圾回收机制，当变量进入执行环境，标记为“进入环境”， 进入环境的变量内存就不会被释放，当变量离开环境时，则标记为离开环境，\n垃圾回收程序运行的时候，会标记内存中存储的变量，然后它会将所有在上下文中的变量，以及在上下文中的变量引用的变量的标记去掉，\n在此之后，再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到他们了，然后垃圾回收程序进行一次内存清理，销毁代表及的所有值并回收他们的内存。")]),t._v(" "),s("p",[t._v("引用计数：语言引擎有一张“引用表”，保存了内存里面的所有资源的引用次数，如果一个值的引用次数为0，就表示这个值不在用到了，因此可以将这块内存释放掉。")]),t._v(" "),s("h3",{attrs:{id:"_7-bind、call、apply的区别-如何实现一个bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-bind、call、apply的区别-如何实现一个bind"}},[t._v("#")]),t._v(" 7. bind、call、apply的区别， 如何实现一个bind？")]),t._v(" "),s("p",[t._v("apply 接受两个参数，第一个是this的指向，第二个参数是函数接受的参数，以数组形式传入\n改变this指向会立即执行，且此方法只是临时改变this指向一次\n当第一个参数为null或undefined，则默认指向window")]),t._v(" "),s("p",[t._v("call 方法第一个参数也是this的指向，后面传入一个参数列表\n跟apply 一样，改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次\n同样，当一个参数为null或undefined，则默认指向window")]),t._v(" "),s("p",[t._v("bind和call很相似，第一个参数也是this的指向，后面传入的也是一个参数列表（但是这个参数列表可以分多次传入）\n改变this指向不会立即执行，而是返回一个永久改变this指向的函数")]),t._v(" "),s("p",[t._v("区别：")]),t._v(" "),s("ul",[s("li",[t._v("三者都可以改变函数的this指向")]),t._v(" "),s("li",[t._v("三者第一个参数都是this指向的对象，如果没有这个参数，或者参数为null或undefined，则默认指向全局window")]),t._v(" "),s("li",[t._v("三者都可以传参，apply 是数组，而call是参数列表，且apply和call是一次性传入参数，而bind 可以分为多次传参")]),t._v(" "),s("li",[t._v("bind是返回绑定this之后的函数，apply和call是立即执行")])]),t._v(" "),s("p",[t._v("实现bind：")]),t._v(" "),s("p",[t._v("实现bind的步骤，我们可以分为三步：")]),t._v(" "),s("ol",[s("li",[t._v("修改this指向")]),t._v(" "),s("li",[t._v("动态传递参数")]),t._v(" "),s("li",[t._v("兼容new关键字")])]),t._v(" "),s("p",[t._v("整体实现代码如下")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myBind")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断调用对象是否为函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取参数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据调用方式，传入不同的绑定值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_8-tcp和udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-tcp和udp"}},[t._v("#")]),t._v(" 8. TCP和UDP")]),t._v(" "),s("h3",{attrs:{id:"_9-tcp三次握手和四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-tcp三次握手和四次挥手"}},[t._v("#")]),t._v(" 9. TCP三次握手和四次挥手")]),t._v(" "),s("p",[t._v("三次握手：建立TCP连接时，需要客户端和服务器总共发送3个包\n过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("客户端发送SYN包，请求与服务器建立连接")]),t._v(" "),s("li",[t._v("服务器收到SYN包，确认连接，发送SYN+ACK包")]),t._v(" "),s("li",[t._v("客户端收到SYN+ACK包，确认连接，发送ACK包")])]),t._v(" "),s("p",[t._v("四次挥手：TCP终止连接，需要经过四次挥手\n过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("客户端发送FIN包，表示自己不再发送数据，等待服务器")]),t._v(" "),s("li",[t._v("服务器收到FIN包，确认收到数据，发送ACK包")]),t._v(" "),s("li",[t._v("如果服务器也想断开连接，则发送FIN包，等待客户端")]),t._v(" "),s("li",[t._v("客户端收到FIN包，确认收到数据，发送ACK包，服务器收到ACK包，断开连接")])]),t._v(" "),s("h2",{attrs:{id:"css系列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css系列"}},[t._v("#")]),t._v(" CSS系列")]),t._v(" "),s("h3",{attrs:{id:"_1-水平垂直居中的方法-并且写出代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-水平垂直居中的方法-并且写出代码"}},[t._v("#")]),t._v(" 1. 水平垂直居中的方法,并且写出代码")]),t._v(" "),s("ul",[s("li",[t._v("flex布局")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("绝对定位")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("table-cell")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table-cell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-盒子模型"}},[t._v("#")]),t._v(" 2. 盒子模型")]),t._v(" "),s("ul",[s("li",[t._v("标准盒子模型：浏览器默认的盒子模型，盒子的宽高都和border、padding、margin有关。")]),t._v(" "),s("li",[t._v("怪异盒子模型：width 和height 包含了padding 和border 的值。")])]),t._v(" "),s("p",[t._v("css中的box-sizing 属性定义了应该如何计算一个元素的总宽高。")]),t._v(" "),s("ul",[s("li",[t._v("content-box：默认值，width和height只包含内容部分。")]),t._v(" "),s("li",[t._v("border-box：width和height包含内容、padding和border。")]),t._v(" "),s("li",[t._v("inherit：继承父元素的box-sizing属性。")])]),t._v(" "),s("h3",{attrs:{id:"_3-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-position"}},[t._v("#")]),t._v(" 3. position")]),t._v(" "),s("ul",[s("li",[t._v("static：默认值，元素不会被定位，元素出现在正常的流中。")]),t._v(" "),s("li",[t._v("relative：元素相对于其正常位置进行定位。")]),t._v(" "),s("li",[t._v("absolute：元素相对于最近的已定位的父元素进行定位。")]),t._v(" "),s("li",[t._v("fixed：元素相对于浏览器窗口进行定位。")])]),t._v(" "),s("h2",{attrs:{id:"http系列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http系列"}},[t._v("#")]),t._v(" HTTP系列")]),t._v(" "),s("h3",{attrs:{id:"_1-http和https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-http和https"}},[t._v("#")]),t._v(" 1. HTTP和HTTPS")]),t._v(" "),s("ul",[s("li",[t._v("HTTP： 是一种用于传输超文本的协议，它使用TCP/IP协议栈。")]),t._v(" "),s("li",[t._v("HTTPS： 是一种安全协议，它使用TCP/IP协议栈，并使用SSL/TLS协议来加密传输的数据。")])]),t._v(" "),s("p",[t._v("区别：")]),t._v(" "),s("ol",[s("li",[t._v("HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用SSL/TLS协议进行了加密处理，相对更安全。")]),t._v(" "),s("li",[t._v("HTTP和HTTPS使用链接方式不同，HTTP使用http://开头，HTTPS使用https://开头。默认端口也不一样，HTTP默认端口是80，HTTPS默认端口是443。")]),t._v(" "),s("li",[t._v("HTTPS由于需要涉及加密以及多次握手，所以性能相对HTTP会慢一些。")]),t._v(" "),s("li",[t._v("HTTPS需要SSL/TLS证书，需要购买证书，或者使用自签名证书。")])]),t._v(" "),s("h3",{attrs:{id:"_2-udp-和-tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-udp-和-tcp"}},[t._v("#")]),t._v(" 2. UDP 和 TCP")]),t._v(" "),s("h2",{attrs:{id:"threejs-webgl-canvas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threejs-webgl-canvas"}},[t._v("#")]),t._v(" ThreeJS & WebGL & Canvas ==")]),t._v(" "),s("h3",{attrs:{id:"_1-threejs-中自带灯光的材质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-threejs-中自带灯光的材质"}},[t._v("#")]),t._v(" 1. ThreeJS 中自带灯光的材质")]),t._v(" "),s("ul",[s("li",[t._v("MeshBasicMaterial: 不受光影响的基本材质，不会考虑任何光照信息。")]),t._v(" "),s("li",[t._v("MeshLambertMaterial: Lambert 材质，考虑漫反射光照，不会产生高光效果，适用于创建没有镜面反射的表面。")]),t._v(" "),s("li",[t._v("MeshPhongMaterial: Phong 材质，考虑漫反射光照和镜面反射光照，可以产生高光效果，适用于需要有镜面反射的光滑表面")]),t._v(" "),s("li",[t._v("MeshPhysicalMaterial: 物理材质，扩展了标准材质，更加精细的模拟物理光照效果，包括金属度和粗糙度等属性")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
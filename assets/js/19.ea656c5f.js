(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{524:function(t,a,v){"use strict";v.r(a);var e=v(6),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ol",[v("li",[v("p",[t._v("用户输入网址后，都进行了什么操作")]),t._v(" "),v("ul",[v("li",[t._v("用户输入网址，浏览器进行地址解析")]),t._v(" "),v("li",[t._v("应用层将解析出的域名进行域名解析")]),t._v(" "),v("li",[t._v("传输层进行tcp三次握手，建立tcp连接。")]),t._v(" "),v("li",[t._v("应用层客户端向web服务器发送http请求")]),t._v(" "),v("li",[t._v("网络层IP协议查询Mac地址")]),t._v(" "),v("li",[t._v("服务器收到处理请求")]),t._v(" "),v("li",[t._v("服务器发送http响应报文，浏览器收到服务器响应，得到html代码")]),t._v(" "),v("li",[t._v("页面渲染\n"),v("ul",[v("li",[t._v("解析html")]),t._v(" "),v("li",[t._v("构建dom树")]),t._v(" "),v("li",[t._v("dom树与css样式进行附着构造呈现树")]),t._v(" "),v("li",[t._v("布局")]),t._v(" "),v("li",[t._v("绘制")])])])])]),t._v(" "),v("li",[v("p",[t._v("主键索引和普通索引查询时的区别")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tb'")]),t._v("\n")])])]),v("blockquote",[v("p",[t._v("上面两个语句都返回了一条数据，这边就查询的时候会有区别，如果查询为主键，mysql 只需要搜索id这颗B+树，而查询普通索引时，mysql会先搜索name索引树，得到id为1，再到ID树搜索一次。这个过程称为回表。")])])]),t._v(" "),v("li",[v("p",[t._v("数据库分表\n"),v("a",{attrs:{href:"https://www.cnblogs.com/butterfly100/p/9034281.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库分库分表"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[t._v("数据库的读写分离有时候会有主从延迟问题问题，你知道怎么解决吗？")])])]),t._v(" "),v("blockquote",[v("p",[t._v("这个我确实是不了解，但是我瞎吹比了，emmm，也是头疼，这个就应该说不会啊。。。\n解决方法：")])]),t._v(" "),v("ul",[v("li",[t._v("分库，将一个主库拆分为多个主库，每个主库的写并发就减少了几倍，此时主从延迟忽略不计。")]),t._v(" "),v("li",[t._v("打开mysql的并行复制，多个库进行复制。如果说某个库的写入时间并发特别高，单库写入并发达到了200/s，并行复制还是没意义。")]),t._v(" "),v("li",[t._v("重写代码，插入数据不是立马就能查得到。")]),t._v(" "),v("li",[t._v("如果必须存在插入时就查出这条数据，对这个查询直接连接主库，这样读写分离就无意义了。")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("laravel的核心：")])]),t._v(" "),v("ul",[v("li",[t._v("门面")]),t._v(" "),v("li",[t._v("契约")]),t._v(" "),v("li",[t._v("服务容器")])]),t._v(" "),v("h3",{attrs:{id:"更新-20200806"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新-20200806"}},[t._v("#")]),t._v(" 更新： 20200806")]),t._v(" "),v("h4",{attrs:{id:"laravel的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#laravel的生命周期"}},[t._v("#")]),t._v(" laravel的生命周期：")]),t._v(" "),v("p",[t._v("laravel的所有请求都是 public/index.php文件，所有请求都会被web服务器导入到此文件 接下来，请求发送到HTTP内核或者console内核（分别用于处理web请求和artisan命令） 内核启动过程中最重要的内容之一就是为应用载入服务提供者。应用所有的服务提供者都被配置在 config/app 配置文件的providers 数组中 ，首先，所有提供者的register方法被调用，然后，所有提供者注册之后，boot方法被调用。 接下来就是分发请求，一旦应用被启动并且所有的服务提供者被注册，request 将会被交给路由器分发 ，路由器将会分发请求到路由或者控制器，同事运行所有路由指定的中间件。")]),t._v(" "),v("h3",{attrs:{id:"用redis存储10w用户一年365天的登陆状态-你会怎么存储。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用redis存储10w用户一年365天的登陆状态-你会怎么存储。"}},[t._v("#")]),t._v(" 用redis存储10w用户一年365天的登陆状态，你会怎么存储。")]),t._v(" "),v("p",[t._v("方法有很多种。下面这种是:")]),t._v(" "),v("p",[t._v("使用redis的bitmap数据结构，setbit getbit两条命令是对字符串的位操作，每个位只能是0/1 然后用bitcount命令计算这个key有多少个1")]),t._v(" "),v("p",[t._v("比如今天是第30天，用户a进入了网站，那么执行setbit a 30 1 如果明天a用户也浏览了网站 那么执行setbit a 31 1 ，以此类推 然后使用bitcount命令，执行 bitcount a， 得出结果就是a上线的总天数")]),t._v(" "),v("p",[t._v("使用bittops命令来对多天的key做一个或运算，就知道某个时间段内的活跃人数 bittops key bit [start][end] 返回为图中第一个值为bit的二进制位的位置")]),t._v(" "),v("p",[t._v("比如 bittops a 1 10 100")]),t._v(" "),v("h4",{attrs:{id:"redis如何做持久化的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis如何做持久化的"}},[t._v("#")]),t._v(" redis如何做持久化的？")]),t._v(" "),v("p",[t._v("bgsave做镜像全量持久化，aof做增量持久化，因为bgsave会耗费较长时间，不够实时，在停机的时候会导致大量丢失数据， 所以需要aof来配合使用。在redis实力重启时，有限使用aof来恢复内存的状态，如果没有aof日志，就会使用rdb文件来恢复。")]),t._v(" "),v("p",[t._v("顺便整理下有可能会问的问题：\naof文件过大恢复时间过长怎么办：")]),t._v(" "),v("p",[t._v("redis会定期做aof重写，压缩aof文件的日志大小。Redis4.0之后有了混合持久化的功能，将bgsave的全量和aof的增量做了融合处理，这样既保证了恢复的效率 又兼顾了数据的安全性。")]),t._v(" "),v("p",[t._v("如果机器突然断电会怎么样？")]),t._v(" "),v("p",[t._v("取决于aof日志sync属性的配置，如果不要求性能，在每条写指令时都sync一下磁盘，就不会丢失数据。 但在高性能的要求下每次都sync是不显示的，一般都使用定时sync，比如1s1次。这个时候最多就会丢失1s的数据。")]),t._v(" "),v("h3",{attrs:{id:"缓存穿透-缓存雪崩-缓存预热-缓存更新。缓存降级。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透-缓存雪崩-缓存预热-缓存更新。缓存降级。"}},[t._v("#")]),t._v(" 缓存穿透，缓存雪崩，缓存预热，缓存更新。缓存降级。")]),t._v(" "),v("ol",[v("li",[t._v("缓存雪崩：\n简单理解为：由于原有缓存失效，新缓存未到期间。（例如：我们设置缓存时采用了相同的过期时间，在同一时刻出现大面积的缓存过期，所有原本应该为访问缓存的请求都去查询数据库了，而对数据库CPU和内存造成了巨大压力，严重的可能造成数据库宕机。从而形成一系列的连锁反应，造成了整个系统崩溃。）\n解决方法： 大多数系统设计者考虑枷锁，或者队列的方式保证不会有大量的线程对数据库一次性的进行读写，从而避免失效时大量的并发请求落到底层存储系统上。 另一种则是缓存失效时间分散开。")]),t._v(" "),v("li",[t._v("缓存穿透：\n缓存穿透是指用户查询数据，在数据库没有，自然在缓存中也不会有，这样就导致用户查询的时候，在缓存中找不到，每次都要去数据库再查询一遍，然后返回空。这样请求就绕过缓存直接查数据库，这也是经常提的缓存命中率问题。\n解决方法：最常见的则是采用布隆过滤器，将所有可能存在数据哈希到一个足够大的bitmap中，一个一定补中存在的数据会被这个bitmap拦截掉，从而避免了对底层存储系统的查询压力。")])]),t._v(" "),v("h3",{attrs:{id:"微信获取userinfo时进行了哪些操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信获取userinfo时进行了哪些操作"}},[t._v("#")]),t._v(" 微信获取userinfo时进行了哪些操作")]),t._v(" "),v("p",[t._v("公众号：")]),t._v(" "),v("ol",[v("li",[t._v("用户同意授权，获取code")]),t._v(" "),v("li",[t._v("通过code换取access_token和openid")]),t._v(" "),v("li",[t._v("刷新access_token(如果需要)")]),t._v(" "),v("li",[t._v("使用access_token和openid获取用户详细信息（scope为snsapi_userinfo)")])]),t._v(" "),v("p",[t._v("小程序：")]),t._v(" "),v("ol",[v("li",[t._v("使用wx.login() 获取code，发送到服务器端")]),t._v(" "),v("li",[t._v("服务器端使用小程序appid+code+secret换取session_key 和openid等")]),t._v(" "),v("li",[t._v("授权之后使用wx.getuserinfo()获取用户信息")])]),t._v(" "),v("h3",{attrs:{id:"linux命令top和free"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux命令top和free"}},[t._v("#")]),t._v(" Linux命令Top和Free")]),t._v(" "),v("p",[t._v("top: 性能分析工具，实时分析进程中各个资源的占用情况\nfree: 显示内存情况，包括物理内存，交换内存和内存缓冲区内存。")]),t._v(" "),v("h3",{attrs:{id:"tp和laravel的优缺点和不同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tp和laravel的优缺点和不同"}},[t._v("#")]),t._v(" Tp和laravel的优缺点和不同")]),t._v(" "),v("p",[t._v("ThinkPHP：\nthinkPHP简单，快读，基于MVC和面向对象，易用性较高，是一款简洁实用的轻量级框架。")]),t._v(" "),v("p",[t._v("Laravel:\nLaravel 优雅，很好的支持了composer，实现更丰富的扩展，社区文档活跃，相较于TP，laravel更庞大，安全性也较高，更适合开发中大型项目")]),t._v(" "),v("p",[t._v("区别：")]),t._v(" "),v("ol",[v("li",[t._v("提交数据的方式不同，laravel在提交表单的时候需要在表单中加入{csrf_field}来防止跨域攻击，而TP不会")]),t._v(" "),v("li",[t._v("路由，laravel必须先定义，再使用，Tp需要再配置文件中开启路由，才可以使用路由。")]),t._v(" "),v("li",[t._v("Laravel升级比较方便，而Tp升级大版本需要重构。")])]),t._v(" "),v("h3",{attrs:{id:"简述vue的生命周期-因为我简历上写了前端的内容-所以有这块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简述vue的生命周期-因为我简历上写了前端的内容-所以有这块"}},[t._v("#")]),t._v(" 简述Vue的生命周期（因为我简历上写了前端的内容，所以有这块）")]),t._v(" "),v("p",[t._v("Vue实例从创建到销毁的过程，就是生命周期，也就是从开始创建，初始化数据，编译模板，挂载DOM-渲染，更新-渲染，卸载等一系列过程，成为Vue生命周期。分为8个阶段，创建前后，载入前后，更新前后，销毁前后。")]),t._v(" "),v("h3",{attrs:{id:"php的事务嵌套"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#php的事务嵌套"}},[t._v("#")]),t._v(" PHP的事务嵌套")]),t._v(" "),v("ol",[v("li",[t._v("基本实现原理是存储节点")]),t._v(" "),v("li",[t._v("开始事务的时候判断有没有节点，就把当前节点+1")]),t._v(" "),v("li",[t._v("在commit和rollback的时候把节点-1")]),t._v(" "),v("li",[t._v("在最后一个commit的时候提交")])]),t._v(" "),v("h3",{attrs:{id:"crontab实现单进程执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#crontab实现单进程执行"}},[t._v("#")]),t._v(" crontab实现单进程执行")]),t._v(" "),v("p",[t._v("运行该任务时，获取当前进程中是否有该进程，有则停止，否则执行")]),t._v(" "),v("p",[t._v("使用flock的独占锁去实现，访问文件有文件所则停止，没有就上锁，之后执行，执行完释放文件锁。")]),t._v(" "),v("h3",{attrs:{id:"单例模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),v("p",[t._v("被问到一个问题就是单例模式中两次请求过来的对象是一个对象吗？这个不是一个对象，因为内存地址是不同的\n如果不是一个对象，那么单例模式的好处在哪？\n单例模式对单次请求的对象只声明一次，节省了内存的使用，减少了对象的实例化。")]),t._v(" "),v("h3",{attrs:{id:"网关限流-这块一般不用网关的公司问的很少"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网关限流-这块一般不用网关的公司问的很少"}},[t._v("#")]),t._v(" 网关限流（这块一般不用网关的公司问的很少）")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000020745218",target:"_blank",rel:"noopener noreferrer"}},[t._v("网关限流"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"tcp-udp的使用-下期更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp的使用-下期更新"}},[t._v("#")]),t._v(" TCP,UDP的使用（下期更新）")]),t._v(" "),v("p",[t._v("持续更新中....")])])}),[],!1,null,null,null);a.default=s.exports}}]);
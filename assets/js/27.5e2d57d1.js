(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{530:function(e,t,r){"use strict";r.r(t);var a=r(6),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("刚入手了一个MacPro M1芯片的电脑，这边马上就准备安装开发环境，这边记录下遇到的坑，以及怎么解决。M1芯片装起来还是有点东西的。。不过网上的文章也很多，搜索起来比较复杂，我这边就整理一下。。")]),e._v(" "),r("h3",{attrs:{id:"首先-安装homebrew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首先-安装homebrew"}},[e._v("#")]),e._v(" 首先，安装HomeBrew")]),e._v(" "),r("p",[e._v("因为直接安装brew安装软件的时候会出错误，这边错误你们装软件的时候应该能看到。。稍微晚点我把截图扔过来。这边需要安装两个版本的HomeBrew")]),e._v(" "),r("ul",[r("li",[e._v("首先，安装ARM版本的HomeBrew\n根据官方规划，ARM 版 Homebrew 必须安装在 "),r("code",[e._v("/opt/homebrew")]),e._v(" 路径下，而非此前的 "),r("code",[e._v("/usr/local/Homebrew")]),e._v("，通过下面命令来安装：")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\tcd /opt\n\tmkdir homebrew\n\tcurl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew\n")])])]),r("p",[e._v("如果安装和使用过程中报错，可能是因为当前用户对于 "),r("code",[e._v("/opt/homebrew")]),e._v(" 路径没有权限。对此，可以通过 "),r("code",[e._v("sudo chown -R $(whoami) /opt/homebrew")]),e._v(" 接管该目录。")]),e._v(" "),r("ul",[r("li",[e._v("然后安装X86版本的HomeBrew")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\tarch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\t#官方\n\tarch -x86_64 /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\t\t#这是一键安装脚本\n')])])]),r("p",[e._v("官方脚本应该是跑不动的，如果跑不动的话使用一键安装脚本运行")]),e._v(" "),r("ul",[r("li",[e._v("两个版本安装完之后，设置下别名，避免两个brew重复\n直接编辑"),r("code",[e._v("~/.zshrc")]),e._v("，添加如下内容")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('abrew="/opt/homebrew/bin/brew"\nxbrew="arch -x86_64 /usr/local/bin/brew"\n')])])]),r("p",[r("code",[e._v("abrew")]),e._v("就是ARM版本的brew "),r("code",[e._v("xbrew")]),e._v("就是x86版本的brew，然后运行"),r("code",[e._v("source ~/.zshrc")]),e._v(" 或者重启终端生效命令。")]),e._v(" "),r("h3",{attrs:{id:"快快乐乐的安装git和其它内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快快乐乐的安装git和其它内容"}},[e._v("#")]),e._v(" 快快乐乐的安装git和其它内容")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("xbrew install git \t#使用xbrew安装git\nxbrew install node \n")])])]),r("p",[e._v("使用记录我以及遇到的困难我这边都会更新一下，这边会持续更新。\n持续更新中~")])])}),[],!1,null,null,null);t.default=s.exports}}]);
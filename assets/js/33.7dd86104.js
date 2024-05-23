(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{536:function(t,e,n){"use strict";n.r(e);var a=n(6),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"php多线程模式配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php多线程模式配置"}},[t._v("#")]),t._v(" PHP多线程模式配置")]),t._v(" "),n("blockquote",[n("p",[t._v("个人理解的PHP多线程模式是一次调用可以发送出多个请求，因为PHP的生命周期可能就设置了30s，PHP的数据处理可能还没完成，生命周期就结束了，这时就需要异步并发处理策略。")])]),t._v(" "),n("blockquote",[n("p",[t._v("实现思路： 一次调用发出的多个请求，这些请求不按顺序来执行，而且可以异步并发执行的，一些请求用于在后台处理数据，一些请求用户接受后台响应状态，根据状态，与用户做一个简单的交互。")])]),t._v(" "),n("blockquote",[n("p",[t._v("书写部分来源于"),n("a",{attrs:{href:"https://www.w3cschool.cn/php/php-thread.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通俗易懂的php多线程"),n("OutboundLink")],1),t._v(" "),n("span",{staticStyle:{color:"red"}},[t._v("侵删")]),t._v(" 后面我会整理下我的思路，现在部分思路来源于此文章")])]),t._v(" "),n("h3",{attrs:{id:"一、-php模式实现多线程的三种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、-php模式实现多线程的三种方法"}},[t._v("#")]),t._v(" 一、 PHP模式实现多线程的三种方法")]),t._v(" "),n("ol",[n("li",[t._v("linux下的PHP现成")])]),t._v(" "),n("blockquote",[n("p",[t._v("下面所讲的东西是源自php的pcntl_fork函数.方法说明来源于PHP官网：")])]),t._v(" "),n("h4",{attrs:{id:"pcntl-fork"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pcntl-fork"}},[t._v("#")]),t._v(" pcntl_fork")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("(PHP 4 >= 4.1.0, PHP 5, PHP 7)")]),t._v(" "),n("p",[t._v("pcntl_fork — 在当前进程当前位置产生分支（子进程）。译注：fork是创建了一个子进程，父进程和子进程 都从fork的位置开始向下继续执行，不同的是父进程执行过程中，得到的fork返回值为子进程 号，而子进程得到的是0。")]),t._v(" "),n("p",[t._v("pcntl_fork()函数创建一个子进程，这个子进程仅PID（进程号） 和PPID（父进程号）与其父进程不同。")]),t._v(" "),n("h4",{attrs:{id:"返回值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("成功时，在父进程执行线程内返回产生的子进程的PID，在子进程执行线程内返回0。失败时，在 父进程上下文返回-1，不会创建子进程，并且会引发一个PHP错误。")]),t._v(" "),n("h4",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\n    $pid = pcntl_fork();\n    //父进程和子进程都会执行下面代码\n    if ($pid == -1) {\n        //错误处理：创建子进程失败时返回-1.\n         die('could not fork');\n    } else if ($pid) {\n         //父进程会得到子进程号，所以这里是父进程执行的逻辑\n         pcntl_wait($status); //等待子进程中断，防止子进程成为僵尸进程。\n    } else {\n         //子进程得到的$pid为0, 所以这里是子进程执行的逻辑。\n    }\n?>\n")])])]),n("p",[t._v("如果你父进程希望知道子进程正常退出的话,可以加上前面的pcntl_wait。这边就不做说明")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("通过stream_socket_client 方式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    function sendStream() { \n        $english_format_number = number_format($number, 4, \'.\', \'\'); \n  \n        echo $english_format_number;  \n        exit(); \n        $timeout = 10; \n        $result = array(); \n        $sockets = array(); \n        $convenient_read_block = 8192; \n        $host = "localhost.com"; \n        $sql = "select waybill_id,order_id from xm_waybill where status>40 order by update_time desc limit 1 ";  \n        $data = Yii::app()->db->createCommand($sql)->queryAll(); \n        $id = 0; \n  \n        foreach ($data as $k => $v) { \n            if ($k % 2 == 0) { \n            $send_data[$k][\'body\'] = NoticeOrder::getSendData($v[\'waybill_id\']); \n  \n         } else { \n            $send_data[$k][\'body\'] = array($v[\'order_id\'] => array(\'extra\' => 16));  \n        }  \n        $data = json_encode($send_data[$k][\'body\']); \n        $s = stream_socket_client($host . ":80", $errno, $errstr, $timeout, STREAM_CLIENT_ASYNC_CONNECT | STREAM_CLIENT_CONNECT); \n        if ($s) {  \n            $sockets[$id++] = $s; \n            $http_message = "GET /php/test.php?data=" . $data . " HTTP/1.0\\r\\nHost:" . $host . "\\r\\n\\r\\n";  \n            fwrite($s, $http_message); \n        } else {  \n            echo "Stream " . $id . " failed to open correctly."; \n        }  \n    } \n  \n    while (count($sockets)) { \n  \n        $read = $sockets; \n  \n        stream_select($read, $w = null, $e = null, $timeout); \n        if (count($read)) {  \n        /* stream_select generally shuffles $read, so we need to \n         compute from which socket(s) we\'re reading. */\n            foreach ($read as $r) { \n  \n            $id = array_search($r, $sockets); \n            $data = fread($r, $convenient_read_block); \n            if (strlen($data) == 0) { \n                echo "Stream " . $id . " closes at " . date(\'h:i:s\') . ".<br>  "; \n                fclose($r); \n                unset($sockets[$id]); \n            } else { \n                $result[$id] = $data; \n            } \n        } \n      } else {  \n        /* A time-out means that *all* streams have failed \n         to receive a response. */\n            echo "Time-out!\\n"; \n            break; \n        }  \n    }  \n    print_r($result); \n  \n  }\n')])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("通过多进程代替多线程")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('function daemon($func_name,$args,$number){ \n    while(true){ \n        $pid=pcntl_fork(); \n        if($pid==-1){ \n            echo "fork process fail"; \n            exit(); \n        }elseif($pid){//创建的子进程 \n            static $num=0; \n            $num++; \n            if($num>=$number){ \n                //当进程数量达到一定数量时候，就对子进程进行回收。 \n                pcntl_wait($status); \n      \n                $num--; \n            }  \n        }else{ \n            //为0 则代表是子进程创建的，则直接进入工作状态 \n            if(function_exists($func_name)){ \n                while (true) { \n                    $ppid=posix_getpid(); \n                    var_dump($ppid); \n                    call_user_func_array($func_name,$args); \n                    sleep(2); \n                } \n            }else{ \n                echo "function is not exists"; \n            } \n            exit();   \n        } \n    } \n}  \nfunction worker($args){  \n  //do something \n  \n}  \ndaemon(\'worker\',array(1),2); \n')])])]),n("h3",{attrs:{id:"二、真正实现php多线程的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、真正实现php多线程的方法"}},[t._v("#")]),t._v(" 二、真正实现php多线程的方法")]),t._v(" "),n("p",[t._v("php 真正实现多线程的方法，通过安装PHP扩展pthread 可以做到")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/krakjoe/pthreads",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载扩展"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[t._v("但是下载的是 版本3 也就是PHP7才能用的，我们需要下载版本2")])],1),t._v(" "),n("p",[n("img",{attrs:{src:"http://liahu.cauyyl.com/pthread1.png",alt:"pthread1"}})]),t._v(" "),n("p",[t._v("然后刷新的页面如下，拖到最底部：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://liahu.cauyyl.com/pthread2.png",alt:"pthread2"}})]),t._v(" "),n("p",[t._v("找到版本2")]),t._v(" "),n("p",[t._v("下载下来，这个V2才是PHP5用的")]),t._v(" "),n("p",[t._v("下载下来，安装")]),t._v(" "),n("p",[t._v("或者，可以直接这样安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd /tools  \n   wget https://github.com/krakjoe/pthreads/archive/v2.0.10.zip  \n   unzip   v2.0.10.zip  \n   cd pthreads-2.0.10  \n   /usr/local/php/bin/phpize  \n   ./configure --with-php-config=/usr/local/php/bin/php-config    \n   make  \n   make install\n")])])]),n("p",[t._v("注意：您的php 在编译的时候需要开启 –enable-maintainer-zts")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("./configure --prefix=/usr/local/php --disable-fileinfo   --enable-fpm --with-config-file-path=/etc --with-config-file-scan-dir=/etc/php.d --with-openssl --with-zlib --with-curl --enable-ftp --with-gd --with-xmlrpc  --with-jpeg-dir --with-png-dir --with-freetype-dir --enable-gd-native-ttf --enable-mbstring --with-mcrypt=/usr/local/libmcrypt --enable-zip --with-mysql=/usr/local/mysql --without-pear --enable-maintainer-zts \n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("vim /etc/php.ini \n添加\nextension=pthreads.so\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("重启php  \n/etc/init.d/php-fpm restart\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
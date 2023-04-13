作者：繁弱
链接：https://www.zhihu.com/question/21567720/answer/43795625
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



Node：

1.《nodejs入门》,才38页，很好，书中项目做一下，学会基础

2.《[nodejs开发指南](https://www.zhihu.com/search?q=nodejs开发指南&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A43795625})》。180多页，很好，书中项目做一下，知道基础，及基本的配合express，jquery，[bootstrap](https://www.zhihu.com/search?q=bootstrap&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A43795625})，数据库MongoDB

 另附一些node实现书中例子的一些变化[使用Express3.0实现

3.开始看express创建初始项目的源代码对比2中的书，发现express更新后新的特性：[Migrating from 3.x to 4.x · strongloop/express Wiki · GitHub](https://link.zhihu.com/?target=https%3A//github.com/strongloop/express/wiki/Migrating%20from%203.x%20to%204.x)

看express官网api

英文：[Express 4.x - API Reference](https://link.zhihu.com/?target=http%3A//expressjs.com/api.html)

中文：[Express - api参考](https://link.zhihu.com/?target=http%3A//expressjs.jser.us/api)

4.之后发现，一个系列课程，从零开始nodejs系列文章：[从零开始nodejs系列文章](https://link.zhihu.com/?target=http%3A//blog.fens.me/series-nodejs/)

其中 文章： Node.js开发框架Express4.x：[Node.js开发框架Express4.x](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-express4/) ，详细介绍了express4项目的基本内容，很好

​        文章：用Nodejs连接MySQL：[用Nodejs连接MySQL](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-mysql-intro/)，介绍mysql与node基本，及数据库连接池，宕机，连接超时等node问题解决办法，node-mysql官网也有相应英文解决办法

5.node+json：[node.js里面怎么创建和解析JSON格式的文件?](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/4f81b167827290275d2b7c8f)

更全的是这一个[How to parse JSON using Node.js?](https://link.zhihu.com/?target=http%3A//stackoverflow.com/questions/5726729/how-to-parse-json-using-node-js) 但要注意如果require json，只加载一次，更新之后，再使用，可能还是老版本

json不好查看的问题：[读写 JSON 文件  · Issue #73 · zhanhongtao/blog · GitHub](https://link.zhihu.com/?target=https%3A//github.com/zhanhongtao/blog/issues/73)

6.node邮件验证：[Nodejs发邮件组件Nodemailer](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-email-nodemailer/)

[选择适合的Node.js授权认证策略](https://link.zhihu.com/?target=http%3A//blog.csdn.net/chszs/article/details/24928985)

7.很全的node module [Modules · joyent/node Wiki · GitHub](https://link.zhihu.com/?target=https%3A//github.com/joyent/node/wiki/Modules%23parsers-json)

8.文件操作，要么官方文档：[File System Node.js v0.12.2 Manual & Documentation](https://link.zhihu.com/?target=https%3A//nodejs.org/api/fs.html%23fs_fs_writefile_filename_data_options_callback)，

或者[node基础-文件系统](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/chyingp/p/node-guide-file-write.html)[node.js 文件操作](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/rubylouvre/archive/2011/11/28/2264717.html)，有一个要注意的是 存储文件时，比如writefile写路径 要使用path.join(__dirname, “相对于当前文件路径”); 如path.join(__dirname, "../upload/recordList/" + generateID("record") + ".json");,后端要采用这种dirname的形式，前端可以直接写相对于当前文件路径的形式



node+express

1.整体介绍框架[Express框架 -- JavaScript 标准参考教程（alpha）](https://link.zhihu.com/?target=http%3A//javascript.ruanyifeng.com/nodejs/express.html%23toc5)

2.express取值：[使用 NodeJS + Express 從 GET/POST Request 取值](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/50a333d7637ffa4155c62ddb)

3.session+cookie：[node.js web开发:EXPRESS 4.x 以上使用session和cookie 的记录](https://link.zhihu.com/?target=http%3A//www.tuicool.com/articles/INbmuy)

[express 框架之session](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/chenchenluo/p/4197181.html)   express-session官网 [npmjs.com 的页面](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/express-session)

[Node.js Express 从入门到菜鸟（二）——Cookie+Session+三层搭建](https://link.zhihu.com/?target=http%3A//my.oschina.net/braveqin/blog/208556)

[express 4.2.0 使用session和cookies](https://link.zhihu.com/?target=http%3A//my.oschina.net/u/1466553/blog/294336)

[在Express 使用session 做登录控制](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/516517a56d38277306c614da)

去掉flash之后，可以只用session，在每次post一开始 置req.session.error为null，之后，验证过程中，检查错误再设置req.session.error，然后根据结果redirect之后，检测是否error为null，来决定是否展示

node session保存的只是中间键值对，不管赋予res.locals.user等，都不是对象，需要在中间件中重新生成对象，才能调用方法，当然如果只是使用属性值，则不需要

4.express基本的中间件官方网站：[senchalabs/connect · GitHub](https://link.zhihu.com/?target=https%3A//github.com/senchalabs/connect%23middleware)





node+mysql

1.node所用的mysql官网：[felixge/node-mysql · GitHub](https://link.zhihu.com/?target=https%3A//github.com/felixge/node-mysql)

2.[Nodejs学习笔记（四）--- 与MySQL交互（felixge/node-mysql）](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/zhongweiv/p/nodejs_mysql.html%23mysql_curd)

3.[用Nodejs连接MySQL](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-mysql-intro/)

4.[三种常用数据库（Oracle、MySQL、SQLServer）的分页之MySQL分页](https://link.zhihu.com/?target=http%3A//blog.csdn.net/justdb/article/details/8200512)

5.sq语句注意顺序，order by group by limit..一般放在where后面



express+ejs

1.[EJS学习总结 -  双月通天的个人空间](https://link.zhihu.com/?target=http%3A//my.oschina.net/u/1540325/blog/311901)

2.[EJS 模板快速入门](https://link.zhihu.com/?target=http%3A//blog.csdn.net/zhangxin09/article/details/18409119)

3.[nodejs express template (模版)的使用 (ejs + express)_node.js 笔记](https://link.zhihu.com/?target=http%3A//node-js.diandian.com/post/2012-07-03/40029704518)

4.ejs我的总结：

 ejs 写法：

```text
普通传入并使用变量：<%= title %>
普通for执行js代码（for中间的代码一定可以执行到）：
<% for(var i=0; i<headerNavbar.length; i++) {%>
    <li><a href="/reg"><%= headerNavbar[i].name %></a></li>
<% } %>
特殊if语句的js代码（if中间的额代码不一定可以执行到）：
 <% if(active=='index'){%>
class="active"
 <% }%>>
```



jquery

1.[jQuery 教程](https://link.zhihu.com/?target=http%3A//www.w3school.com.cn/jquery/index.asp)

2.[jQuery工具方法 -- JavaScript 标准参考教程（alpha）](https://link.zhihu.com/?target=http%3A//javascript.ruanyifeng.com/jquery/utility.html)

3.[在线文档-jquery](https://link.zhihu.com/?target=http%3A//tool.oschina.net/apidocs/apidoc%3Fapi%3Djquery)

4.[jQuery设计思想](https://link.zhihu.com/?target=http%3A//www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)!!



jquery ui

1.[jQuery UI](https://link.zhihu.com/?target=https%3A//jqueryui.com/)

2.中文API:[http://www.css88.com/jquery-ui-api/](https://link.zhihu.com/?target=http%3A//www.css88.com/jquery-ui-api/resizable/)

3.[jQuery UI 实例](https://link.zhihu.com/?target=http%3A//www.w3cschool.cc/jqueryui/example-resizable.html)

4.jqueryrain神站：tabs：[80+ Best jQuery Tabs with Examples](https://link.zhihu.com/?target=http%3A//www.jqueryrain.com/example/jquery-tabs/)

  js tree 库：[15+ jQuery Treeview Plugin & jQuery Tree with Example](https://link.zhihu.com/?target=http%3A//www.jqueryrain.com/demo/jquery-treeview/)

[jsTree](https://link.zhihu.com/?target=http%3A//www.jstree.com/api/%23/%3Ff%3D%24.jstree.defaults.core.expand_selected_onload)



Bootstrap：

1.[基本CSS样式 · Bootstrap](https://link.zhihu.com/?target=http%3A//v2.bootcss.com/base-css.html%23typography) v2

2.[全局 CSS 样式 · Bootstrap 中文文档](https://link.zhihu.com/?target=http%3A//v3.bootcss.com/css/%23type) v3

3.bootstrap row等偏移-20px

4.[补充：学会Twitter Bootstrap不再难](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/niuox/p/3583650.html) ：从2.x升级到3.0版本



html5 

1.drag：库：[interact.js - JavaScript drag and drop, resizing and gestures with inertia and snapping](https://link.zhihu.com/?target=http%3A//interactjs.io/)[Dragdealer.js](https://link.zhihu.com/?target=http%3A//skidding.github.io/dragdealer/)   教程：[HTML 5 拖放](https://link.zhihu.com/?target=http%3A//w3school.com.cn/html5/html_5_draganddrop.asp)[HTML5 drag & drop 拖拽与拖放简介 «  张鑫旭](https://link.zhihu.com/?target=http%3A//www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/)



git:

1.[Git:代码冲突常见解决方法](https://link.zhihu.com/?target=http%3A//blog.csdn.net/iefreer/article/details/7679631)

2.[使用WebStorm和Git开发Node.js应用](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/by1990/archive/2013/02/19/2916860.html)

3.[git生成ssh key及本地解决多个ssh key的问题](https://link.zhihu.com/?target=http%3A//riny.net/2014/git-ssh-key/) 写的非常清楚

4.[Generating SSH keys](https://link.zhihu.com/?target=https%3A//help.github.com/articles/generating-ssh-keys/)



js：

1.对象本身方法，可以用于对这类对象的工具类方法，当作对象manager方法

 对象原型中方法，用于每个不同对象实例的方法

2.[Javascript异步编程的4种方法](https://link.zhihu.com/?target=http%3A//www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html) callback尽量写成return callback()

3.[JS对象类型的确定](https://link.zhihu.com/?target=http%3A//liaofeng-xiao.iteye.com/blog/697029)

4.js取属性,一般用[object.pro](https://www.zhihu.com/search?q=object.pro&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A43795625}) ,如果需要动态确定属性,可以使用 object['dynamic'+pro],动态取属性,包括session,虽然为键值对,但这样也可以



json：

1.jquery操作：[jQuery中读取json文件](https://link.zhihu.com/?target=http%3A//blog.csdn.net/abeetle/article/details/8910189)



后端更新前端：

1.[怎么使用 JavaScript 将网站后台的数据变化实时更新到前端？ - 前端开发](http://www.zhihu.com/question/20255036)

2.[Socket.io在线聊天室](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-socketio-chat/)

3.[迈出nodejs的第二步,用nodejs+socket.io搭建一个websocket聊天室](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/4f32142e69bab4d67601bd1b)

4.[使用Node.js实现数据推送](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/zhaodongyu/p/3905500.html)

5.[Automattic/socket.io · GitHub](https://link.zhihu.com/?target=https%3A//github.com/Automattic/socket.io)

6.[Nodejs实现websocket的4种方式](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-websocket/)



RESTFul:

1.[Pixelhandler's Blog](https://link.zhihu.com/?target=http%3A//pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose)

2.[理解RESTful架构](https://link.zhihu.com/?target=http%3A//www.ruanyifeng.com/blog/2011/09/restful.html)





杂：

\1. passportJS配置用户验证：[PassportJS 配置失败：req.user 未定义](https://link.zhihu.com/?target=http%3A//blog.ssyog.com/blog/webbuild/passportjs-req-user-is-undefined.html)

[Passport  | Configure](https://link.zhihu.com/?target=http%3A//passportjs.org/guide/configure/)

2.回调函数：回调函数，就是放在另外一个函数（如 parent）的参数列表中，作为参数传递给这个 parent，然后在 parent 函数体的某个位置执行。[理解javascript中的回调函数(callback)_javascript技巧](https://link.zhihu.com/?target=http%3A//www.jb51.net/article/54641.htm)

3.不再用的req.flsah():[express 版本更新后遇到的问题](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/502b7f61f767cc9a51525b4a)
[flash()](https://link.zhihu.com/?target=https%3A//cnodejs.org/topic/502b7f61f767cc9a51525b4a)

4.app.locals和res.locals [图灵社区 : 阅读 : express配置项more](https://link.zhihu.com/?target=http%3A//www.ituring.com.cn/article/55098)

5.Crypto加密解密：[Node.js加密算法库Crypto](https://link.zhihu.com/?target=http%3A//blog.fens.me/nodejs-crypto/)

6.[在 CSS 中如何使用百分比设置页面 Div 高度？ - 前端开发](http://www.zhihu.com/question/20392388)

7.[HTML:scrollLeft,scrollWidth,clientWidth,offsetWidth之完全详解(转载)](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/suzongwei/archive/2009/02/23/1396337.html)

8.[文件上传的渐进式增强](https://link.zhihu.com/?target=http%3A//www.ruanyifeng.com/blog/2012/08/file_upload.html)

拖动上传 js库：[Dropzone.js](https://link.zhihu.com/?target=http%3A//www.dropzonejs.com/)

9.js diagram 需求图：[JointJS - the HTML 5 JavaScript diagramming library.](https://link.zhihu.com/?target=http%3A//www.jointjs.com/)

[http://gojs.net/latest/index.html](https://link.zhihu.com/?target=http%3A//gojs.net/latest/index.html)

10js 网页分析：[Google Analytics Official Website](https://link.zhihu.com/?target=http%3A//www.google.com/analytics/)

11.js network网状图 ，时间线，2d，3d 库：[vis.js - A dynamic, browser based visualization library.](https://link.zhihu.com/?target=http%3A//visjs.org/index.html)

12.js fileManager：[10 jQuery Based File Manager Plugins](https://link.zhihu.com/?target=http%3A//www.sitepoint.com/10-jquery-file-manager-plugins/)

   在线富文本编辑器：[RESPONSIVE filemanager 9.9.2](https://link.zhihu.com/?target=http%3A//www.responsivefilemanager.com/index.php)（php tinyMCE）

推荐：[Redactor Plugins](https://link.zhihu.com/?target=http%3A//imperavi.com/redactor/plugins/file-manager/)轻量且美观

13.小型：file explore：[Kloudless/file-explorer · GitHub](https://link.zhihu.com/?target=https%3A//github.com/Kloudless/file-explorer)：可以实现从多处上传，选择文件

[Cute File Browser with jQuery and PHP](https://link.zhihu.com/?target=http%3A//tutorialzine.com/2014/09/cute-file-browser-jquery-ajax-php/) 美观轻量但是需要jquery ajax php

\14. js tree 库：[15+ jQuery Treeview Plugin & jQuery Tree with Example](https://link.zhihu.com/?target=http%3A//www.jqueryrain.com/demo/jquery-treeview/)

[jsTree](https://link.zhihu.com/?target=http%3A//www.jstree.com/api/%23/%3Ff%3D%24.jstree.defaults.core.expand_selected_onload)

15.messageBox 通知框 js库：[Bootbox.js—alert, confirm and flexible modal dialogs for the Bootstrap framework](https://link.zhihu.com/?target=http%3A//bootboxjs.com/)

16.[【css】清除浮动（clearfix 和 clear）的用法](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/yjzhu/p/3227912.html)

[六种实现元素水平居中](https://link.zhihu.com/?target=http%3A//www.w3cplus.com/css/elements-horizontally-center-with-css.html)

17.button css库：[Buttons - 一个高度可定制的按钮（button） CSS 样式库。](https://link.zhihu.com/?target=http%3A//www.bootcss.com/p/buttons/)

18.[Html 解决长串英文字母显示不能自动换行](https://link.zhihu.com/?target=http%3A//blog.csdn.net/maxracer/article/details/6103348)

19.非input元素使用focus等方法：[让元素获得焦点](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/rubylouvre/archive/2010/05/03/1726334.html)

20.text file等在表单中同时上传时，记得表单设enctype="multipart/form-data"，否则可能拿不到数据，还有一个，ajax传输data，记得设置data-type为json，尤其jstree使用ajax传输节点

21.多文件，多图片上传预览，进度等，可以用webuploader，busboy等

22.busboy [nodejs+busboy实现文件上传](https://link.zhihu.com/?target=http%3A//www.duanzhihe.com/1178.html)[https://www.npmjs.com/package/busboy](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/busboy)

23.前端字体：[字体选择_有字库](https://link.zhihu.com/?target=http%3A//www.youziku.com/Home/FontSelect)

24.$('#btn').on('click',function(e){ e.preventDefaults();  or  return false; })均能在表单提交之前阻止提交

24.404 not found 网页设计[真没见识过，原来404错误页面可以这样设计](https://link.zhihu.com/?target=http%3A//www.ithome.com/html/it/28489.htm)

25.[阅读以 JavaScript 编写的本地文件](https://link.zhihu.com/?target=http%3A//www.html5rocks.com/zh/tutorials/file/dndfiles/)[FileReader - Web API 接口](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/API/FileReader) 读写客户端本地文件

26.chrome下 页面退出时发送ajax写法：

```text
$(window).on('beforeunload', function ()
{
//this will work only for Chrome
    $.ajax({
type:'GET',
url:'/ajaxRequest/myClassesOfteacherclose',
async:false
    });
});
```

27.前端中下面两个的$('a').text()是不一样的，会计算空格

```text
<a class='button'>关注</a>
<a class='button'>
    关注
</a>
```

性能优化：

1.!!![毫秒必争，前端网页性能最佳实践](https://link.zhihu.com/?target=http%3A//www.cnblogs.com/developersupport/p/webpage-performance-best-practices.html)

2.[HTML 5 应用程序缓存](https://link.zhihu.com/?target=http%3A//www.w3school.com.cn/html5/html_5_app_cache.asp)

3.[Lazy Load Plugin for jQuery](https://link.zhihu.com/?target=http%3A//www.appelsiini.net/projects/lazyload)
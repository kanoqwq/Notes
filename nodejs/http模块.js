//引入http模块
const http = require('http');

//创建web服务器实例
const server = http.createServer();

//为服务器实例绑定requert事件 监听客户端的请求
//req是请求对象，包含了与客户端相关的数据和属性
server.on('request', function(req, res) {
    //设置utf8,避免乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //req.url 客户端请求的 URL
    //req.method 客户端请求的 method
    let str = `new request：${req.url} method：${req.method}`;
    console.log(str);

    //获取请求的url地址
    const url = req.url;
    //默认为404
    let content = '404 Not Found';

    //判断
    if (url === '/' || url === '/index.html') {
        content = " <h1>首页</h1> ";
    } else if (url === '/about.html') {
        content = " <h1>关于页面</h1> ";
    }
    //调用 res.end() 方法，向客户端响应一些内容
    res.end(content)
});



//启动服务器
server.listen(8080, function(req, res) {
    console.log("server is running at http://127.0.0.1:8080");
})
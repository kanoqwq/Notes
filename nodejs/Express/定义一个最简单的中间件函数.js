const express = require('express');
const app = express();

//定义一个最简单的中间件函数
const mw = function(req, res, next) {
    console.log("这是最简单的中间件函数");

    //中间件的 req 与res 和路由的req res 是共享的
    let date = new Date();
    req.date = date;
    //把流转关系，转交给下一个中间件或者路由
    next();
}

//将mv注册为全局生效的中间件
app.use(mw);

app.get('/', function(req, res) {
    res.send('home page' + req.date);
});
//监听
app.listen('88', function() {
    console.log("server is running on http://127.0.0.1:88");
})
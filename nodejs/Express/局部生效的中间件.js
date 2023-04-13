const express = require('express');
const app = express();
//定义中间件的函数mw1
const mw1 = function(req, res, next) {
        console.log('这是中间件函数1');
        //一定要next放行！！
        next();
    }
    //定义中间件的函数mw2
const mw2 = function(req, res, next) {
    console.log('这是中间件函数2');
    //一定要next放行！！
    next();
}

//mw1只在这个当前这个路由生效，这种用法就叫做局部生效的中间件
app.get('/', mw1, mw2, function(req, res) {
    res.send('home page');
});

//mw1不会对下面这个路由生效
app.get('/get', function(req, res) {
    res.send('User page.');
});

app.listen(88, () => {
    console.log('server is running on http://localhost:88');
})
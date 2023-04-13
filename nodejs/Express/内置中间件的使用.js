//导入 express 模块
const express = require('express');
//创建express 的服务器实例
const app = express();
//使用 express.json()中间件解析
app.use(express.json());
//使用 express.urlencoded()中间件解析 extended: false 表示不需要使用第三方中间件插手
app.use(express.urlencoded({ extended: false }));


app.post('/', (req, res) => {
    //在服务器，可以使用 req.body 这个属性，来接收客户端post过来的数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body 默认等于undefined
    console.log(req.body);
    res.send('ok');
});

//监听端口，启动web服务器
app.listen(88, function() {
    console.log(`Server is Running on http://127.0.0.1:88`);
})
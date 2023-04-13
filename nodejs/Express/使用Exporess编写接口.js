const express = require('express');

const app = express();

//优先创建JSONP接口，防止被覆盖为CORS接口
app.get('/api/jsonp', (req, res) => {
    //JSONP接口实现
    //获取客户端发来的回调函数名称
    const funcName = req.query.callback;
    //待发送数据
    const data = { name: "kano", age: 31 };
    //模板字符串拼接
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    res.send(scriptStr)

});

//在路由之前配置cros
const cors = require('cors');
app.use(cors());

//这两个插件非常重要，post需要与预解析
//使用 express.json()中间件解析
app.use(express.json());
//使用 express.urlencoded()中间件解析 extended: false 表示不需要使用第三方中间件插手
app.use(express.urlencoded({ extended: false }));


//导入路由
const router = require('./apiRouter');

//注册路由模块
app.use('/api', router);


app.listen(88, () => {
    console.log("Server is running in http://127.0.0.1:88");
})
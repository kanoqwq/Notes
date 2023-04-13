//导入express
const express = require('express');
//创建 web 服务器
const app = express();


//监听get请求
app.get('/user', (req, res) => {
    res.send({ name: 'kano', age: 31, gender: '女' });
});

//监听post请求
app.post('/user', (req, res) => {
    res.send("请求成功！！！");
})


app.get('/', (req, res) => {
    //    通过req.query 可以获取到客户端发送过来的 查询参数
    //    注意： 默认情况下，req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
})

//这里的id 与name是动态参数 名称随意
app.get('/kano/:id/:name', (req, res) => {
    //    通过req.params 可以匹配到客户端发送过来的 动态参数
    console.log(req.params)
    res.send(req.params)
})

//启动web服务器
app.listen(88, () => {
    console.log("Express server running in http://127.0.0.1:88");
});
//首先导入模块
const express = require('express');
const app = express();
const parser = require('./custom-body-parser');

//定义一个解析表单数据的中间件
app.use(parser);

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(88, () => {
    console.log("http://localhost:88");
})
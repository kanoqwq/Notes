//路由模块
const express = require('express');
const router = express.Router();

//挂载你想要挂载的路由
//其实业务逻辑，不应该写在路由里面的。。不过功能比较简单，就不用分模块了
router.get('/get', (req, res) => {
    //调用send方法响应客户端的请求
    const query = req.query;
    res.send({
        status: 0, //0成功1失败
        msg: "GET OK",
        data: query
    })
})

router.post('/post', (req, res) => {
    //调用send方法响应客户端的请求
    const body = req.body;
    res.send({
        status: 0, //0成功1失败
        msg: "POST OK",
        data: body
    })
})


module.exports = router;
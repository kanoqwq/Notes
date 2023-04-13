//导入模块
const express = require('express');

//创建 express 的服务器实例
const app = express();

//导入jwt相关的包

const jwt = require('jsonwebtoken');
//expressjwt现在已经更新，需要使用es6特性的对象赋值法
var { expressjwt: expressJWT } = require("express-jwt");

//允许跨域共享
const cors = require('cors');
app.use(cors());

//解析post表单数据的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//定义secret密钥
const secretKey = 'minikano1234';

//注册 jwt 字符串解析还原成json对象的中间件
//expressJWT 就是用来解析 TOKEN 的中间件
//.unless 是用来指定，哪一些请求目录下的接口，不需要访问权限
//比如我写了一个免费的接口集，在/api/下，我可以使用unless来绕过中间件，免验证
//新的expressjwt需强制指定algorithms属性来指定加密方法
//注意一点，只要配置成功了 jwt 中间件，就可以把解析出来的用户信息，直接挂载到req.auth上
app.use(expressJWT({ algorithms: ["HS256"], secret: secretKey }).unless({ path: [/^\/api\//] }));


//错误处理中间件，如果未认证的话，就返回错误信息
app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("您没有权限访问此页面！");
    } else {
        //只处理UnauthorizedError一种错误，所以万一有其他错误的话，就交给下一步路由/中间件来处理
        next(err);
    }

});


//登录接口
//注意，请求的header，必须要
app.post('/api/login', function(req, res) {
    //将 req.body 请求体中的数据，转存位 userinofo常量
    const userinfo = req.body;

    //登录失败
    if (userinfo.username !== 'kano' || userinfo.password !== '123') {
        return res.send({
            status: 401,
            message: "登录失败"
        })
    }

    //登录成功
    //用户登录成功后，生成jwt字符串，通过token属性响应给客户端
    res.send({
        status: 200,
        message: '登录成功',
        //调用jwt.sign()生成jwt字符串，包含三个参数:用户信息对象，加密密钥，配置对象（有效期）
        token: jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    })
});

//有权限的 API 接口
//注意，请求的header，是 BEARER类型的token 所以 value部分必须要加上 Bearer+空格+token
app.get('/user/info', function(req, res) {
    //使用 req.auth 获取用户信息，使用data属性，将用户信息发送给客户端
    console.log(req.auth);
    res.send({
        status: 200,
        message: 'ok',
        data: req.auth
    })
});

app.listen(88, () => {
    console.log('jwt-server is running on http://127.0.0.1:88');
})
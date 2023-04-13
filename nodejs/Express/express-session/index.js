//导入express
const express = require('express');
const path = require('path');
const app = express();
//导入 session 中间件
const session = require('express-session');

//导入mysql模块
const mysql = require('mysql');
//建立于MySQL的数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'jialiang',
    database: 'my_frist_sql'
});

//配饰Session 中间件
app.use(session({
    secret: 'fhdskjfhnkjgis', // secret 属性可以是任意的字符串
    resave: false, //固定值 
    saveUninitialized: true
}));


//解析post提交过来的数据
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./'));


//登录的API接口
app.post('/api/login', (req, res) => {
    const queryStr = "SELECT * FROM users WHERE username=? AND password=?";
    //查询表
    db.query(queryStr, [req.body.username, req.body.password], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.length < 1) {
            return res.send({
                status: 1,
                msg: '登录失败，请检查用户名和密码'
            });
        } else {
            //执行的是select语句，则result结果是一个数组
            console.log(req.body.username, req.body.password);
            console.log(results);

            //将登录成功后的用户信息，保存到Session中
            //只有成功配置了express-session中间件之后才能使用session属性
            req.session.user = req.body; //用户的信息
            req.session.isLogin = true; //用户的登录状态

            res.send({
                status: 0,
                msg: '登录成功'
            })
        }
    });
})

//获取用户姓名的接口
app.get('/api/username', (req, res) => {
    //判断用户是否登录
    if (!req.session.isLogin) {
        return res.send({
            status: 1,
            msg: "未登录，请登录"
        });
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    });
})

//退出登录接口
app.get("/api/logout", (req, res) => {
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功！'
    });
})

//侦听端口
app.listen(88, () => {
    console.log("express is running on http://127.0.0.1:88");
})
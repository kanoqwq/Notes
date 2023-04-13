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

//查询表
db.query('SELECT * FROM users', (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //执行的是select语句，则result结果是一个数组
    console.log(results);
});

//插入数据
const user = { username: "kano123", password: "ddddddddd" };
// ？表示占位符 据说这样可以防止sql注入
const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)';
//query的第二个参数里写一个数组，内容依次按照问号占位符替换
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //affectdRows 影响的行数，为1就是插入了一行
    if (results.affectedRows === 1) {
        console.log("插入成功！");
    }
})

//插入数据的便捷方式
const user1 = { username: "kanoEasy", password: "EASY!!" };
//这里的？也是占位符
const sqlStr1 = 'INSERT INTO users SET ?';

db.query(sqlStr1, user1, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //affectdRows 影响的行数，为1就是插入了一行
    if (results.affectedRows === 1) {
        console.log("插入成功1！");
    }
})

//更新/修改数据
const user11 = { id: 2, username: 'kanooooo', password: '123' }
const sqlStr2 = 'UPDATE users SET username=?, password=? WHERE id=?';
db.query(sqlStr2, [user11.username, user11.password, user11.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //affectdRows 影响的行数，为1就是插入了一行
    if (results.affectedRows === 1) {
        console.log("更新数据成功！");
    }
});

//更新/修改数据的简便方式
const user111 = { id: 2, username: 'kanooo111111oo', password: '1211111113' }
const sqlStr22 = 'UPDATE users SET ? WHERE id=?';
db.query(sqlStr22, [user111, user111.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //affectdRows 影响的行数，为1就是插入了一行
    if (results.affectedRows === 1) {
        console.log("更新数据成功1！");
    }
});

//删除数据
const sqlStr222 = 'DELETE FROM users WHERE id=?';
//调用query函数执行sql语句的同时，为占位符指定具体的值
//注意：如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果SQL语句中只有一个占位符，则可以省略数组
db.query(sqlStr222, 3, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log("删除数据成功");
    }
});
//标记删除
db.query('UPDATE users SET status=1 WHERE id=?', 1, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log("标记删除数据成功");
    }
})
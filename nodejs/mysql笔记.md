## MySQL小记

### 增删查改基础命令

```mysql
-- 选择表中指定行列
select username,password from users
```

```mysql
-- 插入数据
insert into users (username,password) values ('kanom','ddd')
insert into users (username,password,status) values ('kanokanokano','kkkkkk',1)
```

```mysql
-- 修改数据
update users set password="kanokano",status=1 where id=2;
```

```mysql
-- 删除数据
delete from users where id=4;
```

```mysql
-- 查找数据
SELECT * from users where id<>4
```

```mysql
-- 条件查找
SELECT * FROM users where status=0 AND id<3
```

```mysql
-- 升序排序 asc
SELECT * FROM users ORDER BY id 
```

```mysql
-- 降序排序
SELECT * FROM users ORDER BY id DESC
```

```mysql
-- 多重排序 先按照status降序排序，再按照username升序排序 条件之间用逗号隔开就行
SELECT * FROM users ORDER BY status DESC,username ASC
```

```mysql
-- 返回users表数据条数/返回status=0的数据总个数
SELECT COUNT(*) FROM users
SELECT COUNT(*) FROM users WHERE status=0
```

```mysql
-- 可以给查找到的数据起一个字段别名found，看起来更好
SELECT COUNT(*) AS found FROM users WHERE status=0
```

### 配合 Node.js 模块

#### 安装

```powershell
npm i mysql
```

#### 导入模块并创建连接

```javascript
//导入mysql模块
const mysql = require('mysql');
//建立于MySQL的数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '*****',
    database: 'my_frist_sql'
});

```

#### 查询操作

```javascript
//查询表
db.query('SELECT * FROM users', (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //执行的是select语句，则result结果是一个数组
    console.log(results);
});
```

**注意点：当使用select语句的时候，回调函数里面的result是数组的形式**

#### 插入数据

```javascript
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
```

**注意点：**

* ? 表示占位符，配合const变量存储SQL语句 可以防止sql注入，也方便后期维护
* 在query方法中，第二个参数填写占位符替换的变量，以数组形式按顺序进行替换。
* result.affectedRows表示插入语句影响到表的行数，如果是1行的话，说明插入成功了

##### 插入数据的便捷方式

```javascript
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
```

注意点： 这里的 `'INSERT INTO users SET ?'` 里的SET是MySQL里向系统变量或者用户变量赋值的语句，这里的？也是占位符

#### 更新数据

可以通过以下方式，更新表中的数据

```javascript
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
```

同样的，更新数据也有更简便的方式

```javascript
//更新/修改数据
const user11 = { id: 2, username: 'kanooooo', password: '123' }
const sqlStr2 = 'UPDATE users SET ? WHERE id=?';
db.query(sqlStr2, [user11, user11.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    //affectdRows 影响的行数，为1就是插入了一行
    if (results.affectedRows === 1) {
        console.log("更新数据成功！");
    }
});
```

#### 删除数据

```javascript
//删除数据
const sqlStr222 = 'DELETE FROM users WHERE id=?';
db.query(sqlStr222, 3, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log("删除数据成功");
    }
})
```

**注意：**

* 调用query函数执行sql语句的同时，为占位符指定具体的值
* 如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
* 如果SQL语句中只有一个占位符，则可以省略数组

#### 标记删除

> 使用DELETE语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
>
> 所谓的标记删除，就是在表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除。
>
> 当用户执行了删除的动作时，我们并没有执行DELETE语句把数据删除掉，而是执行了UPDATE语句，将这条数据对应的status字段标记为删除即可。

```javascript
//标记删除
db.query('UPDATE users SET status=? WHERE id=?', [1,1], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log("标记删除数据成功");
    }
})
```


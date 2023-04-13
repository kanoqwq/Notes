//引入fs模块
const fs = require('fs');
// //调用方法读取文件
// fs.readFile('./函数高级.md', (err, data) => {
//     //如果失败，则抛出错误
//     if (err) throw err;
//     //如果没有出错，则输出内容
//     console.log(data.toString());
// })

//使用promise封装
const p = new Promise((resove, reject) => {
    fs.readFile('./函数高级.md', (err, data) => {
        //如果失败，则抛出错误
        if (err) reject();
        //如果成功
        resove(data);
    })
});
p.then((val) => {
    console.log(val);
}, (reason) => {
    console.log('读取失败！');
})
//引入fs模块
const fs = require('fs');
// //回调地狱
// fs.readFile('./sss.js', (err, data1) => {

//     fs.readFile('./promise.html', (err, data2) => {

//         fs.readFile('./Promise.md', (err, data3) => {
//             let result = data1 + data2 + data3;
//             console.log(result);
//         })
//     })
// })

//使用promise 实现
//因为成功返回的仍然是promise对象，所以咱可以试试链式调用，看下面的代码
const p = new Promise((resolve, reject) => {
        fs.readFile('./sss.js', (err, data) => {
            resolve([data.toString()]);
        })
    })
    //这里的value是上一个的[data.toString()]
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./promise.html', (err, data) => {
            value.push(data.toString());
            resolve(value);
        })
    });
    //这里的value是上一个的resolve(value);
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./Promise.md', (err, data) => {
            value.push(data.toString())
            resolve(value);
        })
    });
    //这里的value是上一个的resolve(value);ss
}).then(value => {
    console.log(value);
})
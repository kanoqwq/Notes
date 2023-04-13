//
const fs = require('fs');
const { resolve } = require('path');

//回调函数形式
// fs.readFile('./res/haokangde.txt', (err, data) => {
//     //出错就抛出错误
//     if (err) throw err;
//     console.log(data.toString());
// })

//promise
let p = new Promise((resolve, reject) => {
    fs.readFile('./res/haokangde.txt', (err, data) => {
        //出错就抛出错误
        if (err) reject(err);
        //成功
        resolve(data);
    })
})
p.then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
)
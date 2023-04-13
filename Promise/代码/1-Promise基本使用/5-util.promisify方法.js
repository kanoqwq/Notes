/**
 * util.promisify 方法
 */
const util = require('util');
const fs = require('fs');

//返回一个被promise化的新函数
let myReadfile = util.promisify(fs.readFile)

myReadfile('./res/haokangde.txt').then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
)
/**
 * resource 1.html 2.html 3.html 文件内容读取
 */

//async 与 awiat

const fs = require('fs')
const util = require('util')
const myReadFile = util.promisify(fs.readFile);
async function main() {
    try {
        //读取第一个文件的内容
        let data1 = await myReadFile('./resoutce/1.html')
        let data2 = await myReadFile('./resoutce/2.html')
        let data3 = await myReadFile('./resoutce/3.html')

        console.log(data1 + data2 + data3);
    } catch (e) {
        console.log(e);
    }
}

main();
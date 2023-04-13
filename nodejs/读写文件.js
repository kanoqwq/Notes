const fs = require('fs');

//读取文件
fs.readFile('./我是一个文本文件.txt', 'utf8', function(err, data) {
    //如果文件读取失败了
    if (err) {
        console.err('文件读取失败咯：' + err.message)
    }
    //如果文件读取成功
    if (data) {
        console.log(data);
    }
});

//写入文件 writeFile / appendFile
//参数2为要写入的字符串
fs.appendFile('./我是一个文本文件.txt', " hello Node.js~ ", function(err) {
    if (err) {
        console.error(err.message);
    }
})
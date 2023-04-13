//创建web服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

//创建web服务器
const server = http.createServer();

//监听web服务器的request操作
server.on('request', (req, res) => {
    //获取url地址
    const url = req.url;
    //映射结合路径
    let fpath;

    //判断根目录
    if (url === '/' || url === '/index.html') {
        fpath = path.join(__dirname, '/lis.html');
    } else {
        fpath = path.join(__dirname, url);
    }

    //读取相应的文件
    fs.readFile(fpath, 'utf8', (err, data) => {
        //读取失败
        if (err) {
            res.end('404 Not Found');
        } else {
            res.end(data);
        }
    })
});

//启动服务器
server.listen(9090, () => {
    console.log("http://127.0.0.1:9090");
})
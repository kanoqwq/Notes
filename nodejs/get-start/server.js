const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url;
    //接受来自url的请求
    response.write(url);
    //结束
    response.end();
});

server.listen(8090, 'localhost', () => {
    console.log('server is running on http://localhost:8090')
});
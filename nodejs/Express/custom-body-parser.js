//这玩意已经弃用了，所以咱用其他的
// const qs = require('querystring');
const qs = require('querystringify');

function bodyParser(req, res, next) {
    //定义一个str字符串，专门用来存储请求体数据
    let str = '';

    //监听req 的 data事件
    req.on('data', (chunk) => {
        str = str.concat(chunk);
    });

    // 监听 req 对象的 end 事件（请求体发送完毕后自动触发）
    req.on('end', () => {
        // 完整的请求体数据
        str = qs.parse(str)
        console.log(str);
        req.body = str;
        //完成了就可以下一步了
        next();
    })
}
module.exports = bodyParser
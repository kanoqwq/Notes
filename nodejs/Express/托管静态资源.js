const Express = require('express');
const app = Express();
app.use(Express.static('../'));
//如果要托管多个静态资源目录，请多次调用express.static() 函数，执行顺序按照调用先后顺序
app.use('/离散作业', Express.static('../离散作业'));
app.listen('88', () => {
    console.log('app is running at http://localhost:88');
});
const express = require('express')
const app = express();
const paeser = require('body-parser');
//注册第三方中间件
app.use(paeser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    res.send('ok');
    console.log(req.body);
})

app.listen('88', function() {
    console.log("Express is running on http://localhost:88");
})
const express = require('express');
const app = express();
const path = require('path')
    // const cors = require('cors');

//跨域
// app.use(cors());

app.get('/student', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    console.log("请求服务器1一次");
    res.send([{
            id: '001',
            name: 'tom',
            age: 18
        },
        {
            id: '002',
            name: 'jerry',
            age: 13
        },
        {
            id: '003',
            name: 'daoge',
            age: 114514
        }
    ])
});

app.listen(5000, () => {
    console.log('server1 API is running on http://localhost:5000/student');
})
const express = require('express')
const os = require('os')
const app = express()

app.get('/index', (req, res) => {
    res.json({
        code: 200,
        message: 'kanokanodddd',
        list: os
    })
})

app.listen(9090, () => {
    console.log('index.js=>' + 'https://localhost:9090/index');
})

b0:8c:75:06:f1:9c
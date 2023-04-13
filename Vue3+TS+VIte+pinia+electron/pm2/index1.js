const express = require('express')

const app = express()

app.get('/index1', (req, res) => {
    res.json({
        code: 200,
        message: 'kanokano1'
    })
})

app.listen(9091, () => {
    console.log('index1.js=>' + 'https://localhost:9091/index1');
})
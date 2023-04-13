const express = require('express');
const app = express();
const path = require('path')

app.get('/cars', (req, res) => {
    res.send([{
            id: '001',
            name: 'benz',
            price: 114514
        },
        {
            id: '002',
            name: '马自达',
            price: 1
        },
        {
            id: '003',
            name: 'rose royce',
            price: 1919810
        }
    ])
});

app.listen(5001, () => {
    console.log('server1 API is running on http://127.0.0.1:5001/cars');
})
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('戳啦，是throw嘛');
    res.send('Home Page kanokano');
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.send(err.message);
    // next();
})

app.listen(88, () => {
    console.log("http://localhost:88");
})
const express = require('express');
const app = express();

let song = "";
app.get('/', (req, res) => {
    if (req.query.song) {
        song = req.query.song;
        res.send('OK');
        console.log(song);
    } else {
        res.json({ song: song })
    }
})
app.listen(88, () => {
    console.log("ok");
})

// let lastdanmaku = "";
// setInterval(function() {
//     var dan = document.querySelector('#chat-items').lastElementChild.getAttribute("data-danmaku");
//     if (lastdanmaku != dan && /^点歌/.exec(lastdanmaku)) {
//         console.log(dan);
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', 'http://127.0.0.1:88?song='+ lastdanmaku);
//         xhr.send();
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 || xhr.status === 200) {
//                 console.log(xhr.responseText);
//             }
//         }
//         lastdanmaku = dan;
//     }
// }, 1000)

// let lastdanmaku = "";
// setInterval(function() {
//     var dan = document.querySelector('#chat-items').lastElementChild.getAttribute("data-danmaku");
//     if (lastdanmaku != dan) {
//         console.log(dan);
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', 'http://127.0.0.1:88?song='+ lastdanmaku);
//         xhr.send();
//         }
//         lastdanmaku = dan;
// }, 1000)
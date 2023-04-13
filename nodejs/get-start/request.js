//导入插件包
const https = require('https');
const fs = require('fs');
let str = '';


//promise
let ps = new Promise((accept, reject) => {
    https.get('https://www.baidu.com', res => {
        res.on('data', (chunk) => {
            str += chunk;
        });
        res.on('end', () => {
            accept(str);
            console.log(str);
        });
        res.on('error', () => {
            reject('fail');
        })
    });
});
ps.then((value) => {
    fs.writeFile('./log.html', str, (err, data) => {
        if (err) {
            console.error('fail');
        } else {
            console.log('success');
        }
    })
}, (reason) => {
    console.log(reason);
})
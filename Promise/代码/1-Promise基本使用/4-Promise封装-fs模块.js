/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数： path 文件路径
 * 返回 promise 对象
 */


//封装promise形式的文件操作
function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path, (err, data) => {
            //判断
            if (err) reject(err);
            //成功
            resolve(data);
        })
    })
}

mineReadFile('./res/haokangde.txt').then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
)
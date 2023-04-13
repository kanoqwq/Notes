//引入模块
const fs = require('fs');
const path = require('path');

//创建正则
const regStyle = /<style>[\S\s]*<\/style>/;
const regScript = /<script>[\S\s]*<\/script>/;
//获取控制台参数
let arg = process.argv[2];
if (arg) {
    main();
} else {
    console.log('请提供文件参数');
}
//异步函数
async function main() {
    let htmlStr = await readfile(path.join(__dirname, arg));
    await sliptHTML(htmlStr);
    await resolveHTML(htmlStr, path.join(__dirname, arg));
}

//读取文件
function readfile(filePath) {
    //返回一个promise对象
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject('读取文件失败！')
            } else {
                resolve(data);
            }
        });
    });
}
//处理css与js
function sliptHTML(str) {
    return new Promise((resolve, reject) => {
        //匹配style内容
        let css = regStyle.exec(str.toString());
        let Script = regScript.exec(str.toString());
        //匹配不到直接返回
        if (!(css && Script)) {
            reject("未找到样式或js，无需替换");
        }
        css = css[0].replaceAll('<style>', '').replaceAll('</style>', '');
        Script = Script[0].replace(/(<\/script>)|(<script>)/g, '');
        //修复注释
        Script = Script.replace(/<!--.*?-->/g, '');

        //创建目录
        fs.mkdir(path.join(__dirname, './css'), () => {});
        fs.mkdir(path.join(__dirname, './script'), () => {});

        //分别导出css和js到对应目录
        fs.writeFile(path.join(__dirname, './css/style.css'), css, (err) => {
            if (err) {
                reject('写入css文件失败')
            }
        });
        fs.writeFile(path.join(__dirname, './script/index.js'), Script, (err) => {
            if (err) {
                reject('写入js文件失败')
            }
        });
        resolve('success');
    });
}
//替换成链接引用
function resolveHTML(str, filePath) {
    return new Promise((resolve, reject) => {
        //删掉当前html文件中的样式和脚本块，并引入刚创建的外部样式脚本
        str = str.replaceAll(regStyle.exec(str.toString()), '<link rel="stylesheet" href="./css/style.css"></link>')
        str = str.replaceAll(regScript.exec(str.toString()), '<script src="./script/index.js"></script>');
        //console.log(str);
        //保存
        fs.writeFile(filePath, str, (err) => {
            if (err) {
                reject('保存失败');
            }
        });
        console.log('success');
        resolve('success');
    });
}
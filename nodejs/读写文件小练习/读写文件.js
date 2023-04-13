//导入fs模块
const { log } = require('console');
const fs = require('fs');



//创建一个数组，用于存放姓名与成绩
let arr = null;
//创建一个平均数
let average = 0;

//调用fs.readFile()方法读取文件的内容
fs.readFile(__dirname + '/成绩.txt', '', function(err, data) {
    if (err) {
        console.error('读取文件失败');
    } else {
        console.log(data.toString());
        arr = ((data.toString()).replaceAll('=', ':')).split(' ');
        console.log(arr);
        //循环遍历分数累加求平均值
        arr.forEach(element => {
            average += parseFloat(element.replace(/[^(0-9)+]/g, ''))
        });
        //求平均值
        average /= arr.length;

        //调用fs.writeFile方法写入文件内容
        //__dirname 取当前目录文件
        fs.writeFile(__dirname + '/成绩整理.txt', arr.join('\r\n') + `\r\n平均分：${average}`, (err) => {
            if (err) {
                console.error('文件写入失败！');
            }
        })
    }
});
//由于这里涉及异步操作，后面会使用promise做会更好
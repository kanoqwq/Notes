const s = require('./exportss.js');
console.log(s); //以为module.exports对象里面没有东西，所以打印空对象
//当填写了module.exports之后,输出{ name: 'kano', say: [Function: say] }
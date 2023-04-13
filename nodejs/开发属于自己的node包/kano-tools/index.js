const date = require('./src/dateFormat');
const Escape = require('./src/htmlEscape');
//向外暴露需要的成员
module.exports = {...date, ...Escape };
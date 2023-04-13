module.exports = { Name: 'kano' }
exports = { Name: 'kano1' }
console.log(module.exports);
console.log(exports);
//可见他们俩并不是完全相等的，export只是是引用了module.exports的值
//module.exports 被改变的时候，exports不会被改变，而模块导出的时候，真正导出的执行是module.exports，而不是exports，当module.exports改变时，exports与module.exports也就断开了链接。
// 构造器
function Obj(name, age, say) {
    this.name = name;
    this.age = age;
    this.saysth = function() {
        console.log(say);
    }
}
var op = new Obj('张三', '123', 'hello');
var $ = new Obj('？', '111', 'OK');
console.log(op.name, op.age);
op.saysth();
console.log($.name, $.age);
$.saysth();
console.log('\n\n\n\n\n\n');
// 遍历对象
for (var k in op) {
    if (typeof op[k] == 'function')
        op[k]();
    else
        console.log(op[k]);
}
//TS中的类型
//kano的类型设置为了number，以后kano变量就只能赋值为number了
var kano = 123;
// kano = 'ddd' //不能这么写,会报错，但是默认情况下即使有错，但还是会编译成功，除非ts设置的语法检查非常严格
console.log(kano);
var b;
b = 'kano';
console.log(b);
var c = false;
//TS自动类型设置
var d = false; //当对变量的声明和赋值是同时进行的时候，TS编译器会自动判断变量的类型
// d = 123 //不能这么做
var e; //先声明再赋值的话，TS就不会自动判断了
e = 123; //可以这么做
e = false; //可以这么做
//TS中的函数是需要考虑返回值还有参数类型和个数的
function sum(a, b) {
    return a + b;
    // return a + b + 'ddd'//返回值类型不对
}
// console.log(sum(1, '2'));//编译会报错
// sum(1,2,3)//参数多了也会报错
// sum(1)//参数少了也会报错
//字面量，可以理解为常量
var aa;
aa = '114514';
// aa = '191981'//无法更改字面量的值
//但区别于常量，字面量还有其他的玩法
//可以使用 | 来连接多个类型
var sex;
sex = 'male';
sex = 'female';
// sex = '哈哈'//不行
//联合类型还可以用在其他地方
var kanokano;
kanokano = 1;
kanokano = '哈哈';
// number
var decimal = 2;
var hex = 0x66ccff;
var binary = 9;
var octal = 511;
// let big: bigint = 100n;//es2020可用
//any
var dd;
dd = 111;
dd = '鸡';
dd = false;
//unknown 是any的类型安全版本
var un;
var str;
un = 123;
str = 'NM$L';
// str = un; //不能赋值
un = str; //可以赋值
if (typeof un === 'string') {
    console.log('un变量是string类型的');
}
//类型断言
// str = un as string
var dy;
var str2;
dy = 'ddd';
str2 = dy;
// str2 = <number>dy;
console.log(str2);
//可以返回undefined或者null
function fn1() {
    return null;
}
//不能有return ，用never修饰函数就是专门用来抛出错误的
function fn2() {
    throw new Error('这是一个报错');
}
//object,实际开发中很少使用，因为它不能明确的指定是对象还是其他的引用类型
var obj;
obj = {};
obj = function () { return null; };
//{}用来指定对象中的必选属性、属性类型
//语法：{属性名:属性类型}
//可选属性：{属性名?:属性类型}
var obj2;
obj2 = { a: 'dd' };
//可以使用索引签名让对象开放任意个数的属性限制
//propName:string 表示属性名为string类型，这里可以选 string number或者symbol或者模板文本类型
var obj3;
obj3 = { b: 'dd', c: '23', d: 123 };
//如果你希望d2是一个函数的话
var d2; //变量名是什么无所谓
d2 = function (n1, n2) {
    return n1 + n2;
};
//声明一个类型限定的数组
var ee;
ee = ['1', 'a', "hello"];
var num;
num = [1, 2, 3, 4, 5, 6];
//这种写法也是可以的
var kano11;
//元组：固定长度的数组
var hh;
hh = ['111', 'ddd'];
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
//使用枚举就可以方便代码管理者，不用去特意知道男是1还是女是1了
var i;
i = {
    name: 'kano',
    gender: Gender.Female
};
var k;
var l;
var m;

"use strict";
class Person {
    constructor(name, age) {
        //只读属性,无法修改
        this.onyRead = 123;
        this.name = name;
        this.age = age;
    }
    sing() {
        console.log(this.name + " is singing");
    }
}
//静态变量，不需要实例化即可使用
Person.money = 33333;
let kano = new Person('kano', 18);
kano.sing();
console.log(Person.money);

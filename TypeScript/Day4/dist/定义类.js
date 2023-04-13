"use strict";
class Person {
    //构造器
    constructor(name, age) {
        //只读属性,无法修改
        this.onyRead = 123;
        //this指向创建时候的示例
        this.name = name;
        this.age = age;
    }
    //方法
    sing() {
        // this表示实例
        console.log(this.name + " is singing");
    }
}
//静态属性
Person.money = 33333;
let kano = new Person('kano', 18);
kano.sing();
console.log(Person.money);

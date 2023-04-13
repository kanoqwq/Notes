"use strict";
(() => {
    //Animal抽象类，禁止被作为实例
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    //Dog
    //抽象类的内容必须全部实现
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        say() {
            console.log('Dog Bark');
        }
        run() {
            console.log(this.name + 'is running');
        }
    }
    //cat
    class Cat extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        //不写override默认重写父类方法
        say() {
            console.log('cat miaomiao');
        }
    }
    const dog = new Dog('旺财', 3);
    const cat = new Cat('喵喵', 1);
})();

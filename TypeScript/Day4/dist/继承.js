"use strict";
(() => {
    //Animal
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('Something say');
        }
    }
    //Dog
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        say() {
            console.log('Dog Bark');
        }
        //父类的say
        originalSay() {
            super.say();
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
    // console.log(dog);
    console.log(dog);
    console.dir(Animal);
    // dog.say();
    // dog.originalSay()
    // dog.run();
    // console.log(cat);
    // cat.say();
})();

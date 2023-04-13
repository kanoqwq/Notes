"use strict";
(() => {
    //定义一个表示人的类
    class Person {
        //可以直接将属性定义在构造函数里面（感觉好绕，不建议这么写）
        constructor(_name, _age) {
            this._name = _name;
            this._age = _age;
            // this._name = name
            // this._age = age
        }
        // private _name: string;
        // private _age: number;
        //getter与setter
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    const p = new Person('nana', 18);
    //不规范赋值
    p.age = -111;
    p.name = 'kano';
})();

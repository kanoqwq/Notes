"use strict";
(() => {
    //实现接口
    const obj = {
        name: 'xxs',
        age: 1,
        gender: 'male',
        hello() {
            return 'hello';
        }
    };
    //实现类型
    const typeObj = {
        name: 'zs',
        age: 11
    };
    //定义类时，可以使类去实现接口(满足接口的要求)
    //和其他面向对象语言一样，TS的接口也是可以多继承的
    class MyUSBCable {
        constructor(pins, type) {
            this.pins = pins;
            this.type = type;
        }
        transferData() {
            if (this.pins <= 4) {
                console.log('lowSpeed type:' + this.type);
            }
            else {
                console.log('hiSpeed type:' + this.type);
            }
        }
    }
    const uselessCable = new MyUSBCable(4, "MicroUSB");
    uselessCable.transferData();
})();

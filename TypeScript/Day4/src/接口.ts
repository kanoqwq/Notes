(() => {
    //描述一个对象的类型
    type myType = {
        name: string,
        age: number
    }

    //接口用来定义一个类结构,规范
    interface myInterface {
        name: string,
        age: number,

        hello(): void
    }

    //同名接口可以合并
    interface myInterface {
        gender: string
    }

    //实现接口
    const obj: myInterface = {
        name: 'xxs',
        age: 1,
        gender: 'male',
        hello() {
            return 'hello'
        }
    }
    //实现类型
    const typeObj: myType = {
        name: 'zs',
        age: 11
    }


    //USB2.0规范
    interface USB2 {
        type: string
        pins: number
        transferData(): void
    }

    //USB3.0规范(老)
    interface USB3 {
        type: string
        transferData(): void
    }

    //定义类时，可以使类去实现接口(满足接口的要求)
    //和其他面向对象语言一样，TS的接口也是可以多继承的
    class MyUSBCable implements USB3, USB2 {
        constructor(pins: number, type: string) {
            this.pins = pins
            this.type = type
        }
        pins: number;
        type: string;
        transferData(): void {
            if(this.pins <= 4){
                console.log('lowSpeed type:' + this.type)
            }else{
                console.log('hiSpeed type:'+this.type)
            }
        }
    }
    const uselessCable = new MyUSBCable(4,"MicroUSB")
    uselessCable.transferData()


})()
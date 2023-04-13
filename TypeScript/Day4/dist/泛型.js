"use strict";
(() => {
    //泛型
    //T表示任意类型，名字随意
    function fn(a) {
        return a;
    }
    //可以直接调用具有泛型的函数
    console.log(fn(10)); //不指定泛型，TS会自动推断
    //手动指定类型
    console.log(fn(false)); //指定泛型，执行效率更高
    //多参数泛型
    function fn2(a, b) {
        console.log(a, b);
        return a;
    }
    fn2(123, 'kano');
    //限定泛型
    //函数只接收实现了IO接口的对象
    function fn3(a) {
        return a.someNumber;
    }
    // class cable implements IO{
    //     public someNumber:string
    //     constructor(cable:string) {
    //         this.someNumber = cable
    //     }
    // }
    // const usbCable = new cable('usbCable')
    console.log(class cable {
        constructor(cable) {
            this.someNumber = cable;
        }
    });
})();

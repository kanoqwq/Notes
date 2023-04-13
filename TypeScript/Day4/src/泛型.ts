(() => {
    //泛型
    //T表示任意类型，名字随意
    function fn<T>(a: T): T {
        return a;
    }

    //可以直接调用具有泛型的函数
    console.log(fn(10));//不指定泛型，TS会自动推断
    //手动指定类型
    console.log(fn<boolean>(false));//指定泛型，执行效率更高

    //多参数泛型
    function fn2<T, K>(a: T, b: K): T {
        console.log(a, b)
        return a;
    }

    fn2<number, string>(123, 'kano')


    interface IO {
        someNumber: string
    }
    //限定泛型
    //函数只接收实现了IO接口的类/对象
    function fn3<T extends IO>(a: T): string {
        return a.someNumber
    }

    // class cable implements IO{
    //     public someNumber:string
    //     constructor(cable:string) {
    //         this.someNumber = cable
    //     }
    // }
    //传一个实现IO接口的对象
    // const usbCable = new cable('usbCable')
    //传一个实现IO接口的类
    console.log(class cable implements IO{
        public someNumber:string
        constructor(cable:string) {
            this.someNumber = cable
        }
    });

    //泛型类
    class cls<T>{
        prop:T
        constructor(props:T) {
            this.prop = props
        }
    }
    const obj = new cls<number>(123)
})()

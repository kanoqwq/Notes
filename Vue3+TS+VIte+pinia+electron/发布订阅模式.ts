//事件总线
type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}
//参数键key
type PramsKey = string | number | symbol
//存放Callback数组的对象列表
type List = {
    [key: PramsKey]: Array<Function>
}
class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {}
    }

    emit(name: string, ...args: Array<any>): void {
        let callbacks: Array<Function> = this.list[name] || [];
        if (callbacks.length) {
            callbacks.forEach((cb) => {
                cb.apply(this, args)
            })
        }
    }

    on(name: string, callback: Function): void {
        //通过签名索引获取
        let fn: Array<Function> = this.list[name] || []
        //推入新回调
        fn.push(callback)
        //重新赋值
        this.list[name] = fn
    }

    // off()
    // once()
}
export default {

}
//发布订阅模式演示

//接口规范
interface Eventt {
    on: (name: string, fn: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void,
    once: (name: string, fn: Function) => void,
}
interface List {
    [key: string]: Array<Function>
}

//订阅模式类实现
class Dispatch implements Eventt {
    list: List
    constructor() {
        this.list = {}
    }
    //发布消息
    on(name: string, fn: Function) {
        const callback = this.list[name] || []
        callback.push(fn)
        this.list[name] = callback
        console.log(this.list);
    }
    //订阅消息
    emit(name: string, ...args: Array<any>) {
        let eventName = this.list[name]
        if (eventName) {
            eventName.forEach((fn: Function) => {
                fn.apply(this, args)
            })
        } else {
            console.error('没有找到订阅');
        }
    }
    //取消订阅
    off(name: string, fn: Function) {
        let eventName = this.list[name]
        if (eventName && fn) {
            //寻找函数所在下标
            let index = eventName.findIndex(fns => fns === fn)
            eventName.splice(index, 1)
        } else {
            console.error('没有找到订阅');

        }
    }
    //单次订阅
    once(name: string, fn: Function) {
        // 包裹一层函数
        let tempfn = (...args: Array<any>) => {
            //调用完之后删除
            fn.apply(this, args)
            this.off(name, tempfn)
        }
        this.on(name, tempfn)
    }
}

const o = new Dispatch()

o.on('post', (...args: Array<any>) => {
    console.log(args, 1);
})
o.on('post', (...args: Array<any>) => {
    console.log(args, 2);
})
let fn = (...args: Array<any>) => {
    console.log(args, 3);
}
o.on('post', fn)
// o.off('post', fn)
o.once('post1', fn)
o.emit('post1', 1, 'kano', { ddd: true })
o.emit('post1', 1, 'kano', { ddd: true })
o.emit('post1', 1, 'kano', { ddd: true })
o.emit('post1', 1, 'kano', { ddd: true })
o.emit('post1', 1, 'kano', { ddd: true })

// o.emit('post', 1, 'kano', { ddd: true })

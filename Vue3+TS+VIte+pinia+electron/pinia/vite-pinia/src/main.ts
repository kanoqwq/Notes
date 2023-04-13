import { createApp, toRaw } from 'vue'
import './style.css'
import App from './App.vue'
//引入pinia vue2引入的是 PiniaVuePlugin
import { createPinia, PiniaPlugin, PiniaPluginContext } from 'pinia'
const store = createPinia()

//自己实现一个pinia的持久化插件
const setData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getData = (key: string): any => {
    let res = localStorage.getItem(key)
    if (res) {
        return JSON.parse(res)
    } else {
        return {}
    }
}
type Options = {
    customKey: string
}
const piniaPlugin = (options: Options): PiniaPlugin => {
    //函数柯里化(闭包)
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getData(`${options.customKey}-${store.$id}`)
        console.log(context);
        //监听state变化
        store.$subscribe(() => {
            setData(`${options.customKey}-${store.$id}`, toRaw(store.$state))//state需要还原为普通对象
        })
        //返回值赋给了pinia的state，这样就可以了
        return {
            ...data
        }
    }
}

//pinia插件装载
store.use(piniaPlugin({
    customKey: '123'
}))

const app = createApp(App)
app.use(store)

app.mount('#app')
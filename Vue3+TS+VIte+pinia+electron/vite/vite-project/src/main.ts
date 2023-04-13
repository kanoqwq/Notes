import { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import Loading from './components/自定义Vue loading插件'

const app = createApp(App)

//全局
// app.use(Loading)
// // app.use(ElementPlus)


//全局变量和函数
app.config.globalProperties.$kano = {
    name: 'kano'
}
app.config.globalProperties.$kanoSay = {
    Say(): string {
        console.log('dddd');
        return 'ddd'
    }
}
// app.component('xxx',xxx)
interface Say {
    Say(): string
}

type isLoading = {
    show: () => void,
    hide: () => void,
    isShow: boolean
}

declare module '@vue/runtime-core' {
    export interface componentCustomProperties {
        $kanoSay: Say,
        $kano: object,
        $kano_isLoading: isLoading

    }
}

app.mount('#app')



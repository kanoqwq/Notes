import { createApp, createVNode, render } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import Loading from '@/components/Loading.vue'

const loading = createVNode(Loading)
render(loading, document.body)
// console.log(loading);


const app = createApp(App)
app.use(router).use(ElementUI)
//路由守卫
const whiteList = ['/']
router.beforeEach((to, from, next) => {
    // console.log(to.meta);
    document.title = to.meta.title as string
    loading.component?.exposed?.startLoading()
    if (to.path == '/' && localStorage.getItem('login')) {
        next('/index')
    }
    if (whiteList.includes(to.path) || localStorage.getItem('login')) {
        next()
    } else {
        next('/')
    }
})
router.afterEach((to, from) => {
    loading.component?.exposed?.endLoading()
})
app.mount('#app')

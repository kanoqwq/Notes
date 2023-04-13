import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录',
            transition: 'animate__bounceIn'
        }
    },
    {
        path: '/index',
        component: () => import('@/views/Index.vue'),
        meta: {
            title: '主页',
            transition: 'animate__bounceIn'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    //滚动行为
    scrollBehavior: (to, from, savePosition) => {
        //直接返回就可以定位刷新之前的位置
        console.log(savePosition);
        if (savePosition) {
            return new Promise(r => {
                setTimeout(() => {
                    r(savePosition)
                }, 1000)
            })

        } else {
            return {
                top: 0
            }
        }
    }
})
export default router
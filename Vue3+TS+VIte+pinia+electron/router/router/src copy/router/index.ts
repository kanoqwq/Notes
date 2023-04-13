import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('../components/Footer.vue'),
    children: [
        {
            name: 'Login',
            path: '',
            component: () => import('../components/login.vue')
        }, {
            name: 'Reg',
            path: 'reg/:id',
            component: () => import('../components/reg.vue')
        }
    ]
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
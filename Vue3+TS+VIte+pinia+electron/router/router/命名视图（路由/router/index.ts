import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/root.vue'),
        // redirect:'/user1',
        //或者
        // redirect: {
        //     path: '/user1'
        //     // name:
        // },
        //别名
        alias:['/root','/admin'],
        redirect:(to)=>{
            return {
                path:'/user1',
                query:{
                    name:'kano'
                }
            }
        },
        children: [
            {
                path: '/user1',
                components: {
                    default: () => import('../components/A.vue')
                }
            },
            {
                path: '/user2',
                components: {
                    B: () => import('../components/B.vue'),
                    C: () => import('../components/C.vue')

                }
            }
        ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
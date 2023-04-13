// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail'

//创建路由器,并共享出去
export default new VueRouter({
    routes: [{ //一级路由
            name: 'guanyu', //命名路由
            path: '/about',
            component: About
        },
        { //一级路由
            path: '/home',
            component: Home,
            children: [{
                    path: 'news', //子路由，不加斜杠
                    component: News
                },
                {
                    path: 'message', //子路由
                    component: Message,
                    children: [{
                        name: 'xiangqing',
                        // params参数，：表示占位符 
                        path: 'detail/:id/:title',
                        component: Detail
                    }]
                }
            ]
        }
    ]
})
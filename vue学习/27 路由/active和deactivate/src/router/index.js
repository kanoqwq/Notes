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
                        component: Detail,
                        //props的第一种写法，值为对象,该对象的所有的key-value都会以props形式传给Detail组件
                        // props: {
                        //     a: 1,
                        //     b: 'hello'
                        // }

                        //props的第二种写法，值为布尔值，若为真，就会把该路由组件收到的所有的params参数，以
                        //props的形式传给Detail组件 （query不行）
                        // props: true

                        //props第三种写法，值为一个回调函数，可query也可params
                        props($route) {
                            return {
                                id: $route.params.id,
                                title: $route.params.title
                            }
                        }
                    }]
                }
            ]
        }
    ]
})
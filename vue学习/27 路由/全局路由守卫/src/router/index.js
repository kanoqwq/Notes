// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail'

//创建路由器,并共享出去
const router = new VueRouter({
    routes: [{ //一级路由
            name: 'guanyu', //命名路由
            path: '/about',
            component: About,
            //路由元信息，可以存放自定义属性
            meta: {
                title: '关于'
            }
        },
        { //一级路由
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [{
                    name: 'xinwen',
                    path: 'news', //子路由，不加斜杠
                    component: News,
                    //路由元信息，可以存放自定义属性
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message', //子路由
                    component: Message,
                    //路由元信息，可以存放自定义属性
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
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
                        //路由元信息，可以存放自定义属性
                        meta: {
                            isAuth: true,
                            title: '详情'
                        },
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

//全局前置路由守卫
//在每一次路由切换之前都会调用这个函数，初始化的时候也会调用这个函数
router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    //使用元信息来匹配需要授权的路由
    if (to.meta.isAuth) {
        // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
        // if (to.path === '/home/news' || to.path === '/home/message') {
        if (localStorage.getItem('name') !== 'kano') {
            alert('全局前置路由守卫不允许你进入该路径')
        } else {
            next();
        }
    } else {
        //放行
        next();
    }
});

//后置全局路由守卫 初始化的时候被调用、每次路由切换之后被调用
router.afterEach(
    (to, from) => {
        console.log('后置路由守卫', to, from);
        //借助后置路由守卫，切换完成后执行，就不会出现标题bug
        document.title = to.meta.title || 'Vue'
    }
)
export default router;
import type { App, VNode } from 'vue'
import Loading from './index.vue'
import { createVNode, render } from 'vue'
export default {
    install(app: App) {
        //使用vue底层方法创建一个虚拟节点
        const Vnode: VNode = createVNode(Loading);
        //渲染到body
        render(Vnode, document.body)
        //挂载exposed中的方法到全局变量中
        app.config.globalProperties.$kano_isLoading = {
            show: Vnode.component?.exposed?.show,
            hide: Vnode.component?.exposed?.hide,
            isShow: Vnode.component?.exposed?.isShow
        }
        console.log(app.config.globalProperties.$kano_isLoading);

    }
}
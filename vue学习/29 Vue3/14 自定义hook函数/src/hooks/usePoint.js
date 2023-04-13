//引入【需要使用的组合式API
import { reactive, onMounted, onBeforeUnmount } from 'vue';

//实现鼠标打点
export default function() {
    //数据
    let point = reactive({
            x: 0,
            y: 0
        })
        //方法
    function savePoint(e) {
        point.x = e.pageX
        point.y = e.pageY
        console.log(e.pageX, e.pageY);
    }
    //生命周期
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
}
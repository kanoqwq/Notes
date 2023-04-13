<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为({{point.x}},{{point.y}})</h2>
</template>

<script>
//引入【需要使用的组合式API
import  {ref} from 'vue';
//引用hook
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',

  setup(){
    //数据
    let sum = ref(0)
    //使用hook
    let point = usePoint();
    //返回一个对象
    return {sum,point}
  }
}
</script>

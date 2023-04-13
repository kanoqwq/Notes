<template>
  <h1>我是APP组件</h1>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo()">修改人的信息</button>
</template>

<script>
//引入h渲染函数
import {h} from 'vue'
import {ref} from 'vue';
export default {
  name: 'App',
  //测试setup
  setup(){
    //配置数据,使用ref绑定响应式
    let name = ref('张三')
    let age = ref(18)
    let job =  ref({
      type: '前端',
      salary:'114514'
    })

    //配置方法
    function changeInfo(){
      //refImpl 引用实现，ref包装后的是一个对象，需要使用value属性获取真实值
      //基本数据类型ref使用的是数据劫持
      name.value = '李四'
      age.value = 48
      //对于引用数据类型，使用的是ES6 的 Proxy
      job.value.type = '纯·简拉基茨德'
      job.value.salary = 1919810
    }

    //可以直接返回数据(常用)
    return {
      name,
      age,
      job,
      changeInfo
    }

    // 也可以返回渲染函数
    // return ()=>{
    //   return h('h1','abc')
    // }

    //vue2中的写法其实也能共存，能够互相访问数据，但是不推荐这么做了
  }
}
</script>

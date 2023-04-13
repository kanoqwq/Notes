<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello()">say</button>
</template>

<script>
//引入h渲染函数
import {h} from 'vue'
export default {
  name: 'App',
  //测试setup
  setup(){
    //配置数据
    let name = '张三'
    let age = 18

    //配置方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好`);
    }

    //可以直接返回数据(常用)
    return {
      name,
      age,
      sayHello
    }

    // 也可以返回渲染函数
    // return ()=>{
    //   return h('h1','abc')
    // }

    //vue2中的写法其实也能共存，能够互相访问数据，但是不推荐这么做了
  }
}
</script>

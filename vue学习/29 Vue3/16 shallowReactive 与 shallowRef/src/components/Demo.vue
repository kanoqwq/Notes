<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{salary}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">加钱</button>
  <hr>
  <h4>当前的x是{{x.y}}</h4>
  <button @click="x++">x+1</button>
</template>

<script>
// 引用
import {ref,reactive,toRefs,shallowReactive,shallowRef} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    //浅层reactive，只处理第一层的对象的响应式
    let person = shallowReactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })


    //shallowRef只处理基本数据类型的响应式，不进行对象响应式的计算
    let x = shallowRef({
      y:0
    })

    console.log(x);
    //返回一个对象
    return {
      ...toRefs(person),
      ...toRefs(person.job.j1),
      x
    }
  }
}
</script>

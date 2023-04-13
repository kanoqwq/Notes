<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的msg为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">加钱</button>
</template>

<script>
// 引用监视
import {ref,watch,reactive,watchEffect} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum的值变化了',newValue,oldValue);
    // },{immediate:true})


    //监视函数里面使用到的数据
    watchEffect(()=>{
      //监视sum name salary
      const x1 = sum.value
      const x2 = person.name
      const x3 = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了');
    })
    //返回一个对象
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

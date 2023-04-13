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
import {ref,watch,reactive} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    let sum = ref(0)
    let msg = ref('hello')
    let person = ref({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue);
    })

    //无效，person.value本身地址是不变的
    // watch(person,(newValue,oldValue)=>{
    //   console.log('person内的值变化了',newValue,oldValue);
    // })

    //有效，深度监视可以检测到value指向的对象
    watch(person,(newValue,oldValue)=>{
      console.log('person内的值变化了',newValue,oldValue);
    },{deep:true})

    //有效
    //person.value是一个Proxy对象，而不是某一个属性值，所以可以直接使用
    watch(person.value,(newValue,oldValue)=>{
      console.log('person内的值变化了',newValue,oldValue);
    })

    //说白了，监视的如果是个对象里面包裹着对象，那你直接用reactive就可以直接监视到数据，如果你用的是ref，那么就加上deep或者是在监视对象后面加上value
    console.log(sum);
    console.log(msg);
    console.log(person);
    //返回一个对象
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

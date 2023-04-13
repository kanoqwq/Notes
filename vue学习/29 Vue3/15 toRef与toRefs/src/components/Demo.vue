<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{salary}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">加钱</button>
</template>

<script>
// 引用
import {reactive,toRef,toRefs} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    //返回一个对象
    return {
      //这样做是无效的，会失去响应式，这是值传递而不是引用传递
      // name : person.name
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
      //person.job本身就是引用类型，所以不需要toRef
      // job:person.job

      //torefs可以给里面每一个属性变成refimpl
      ...toRefs(person),
      ...toRefs(person.job.j1)
    }
  }
}
</script>

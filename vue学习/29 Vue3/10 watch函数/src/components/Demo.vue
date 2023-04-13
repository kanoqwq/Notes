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
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    // //情况一：监视ref所定义的响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum变化',newValue,oldValue);
    // },{immediate:true})

    // //情况二：监视ref定义的多个响应式数据(使用数组)
    // //如果是reactive的对象设置的属性，默认会强制开启深度监视（deep配置无效），无需设置，也不能关掉深度监视
    // watch([sum,msg],(newValue,oldValue)=>{
    //   console.log('sum变化',newValue,oldValue);
    // },{immediate:true})

    // //情况三：监视reactive所定义的一个响应式数据，注意，此处无法正确获取oldValue，因为person是reactive对象实例
    // watch(person,(newValue,oldValue)=>{
    //   console.log('person变化了');
    //   console.log(newValue,oldValue);//你会发现这两个的值是一样的
    // })

    // //情况四：监视reactive所定义的一个响应式数据中的某一个属性
    // watch(()=>person.job.j1.salary,(newValue,oldValue)=>{
    //   console.log('salary变化了');
    //   console.log(newValue,oldValue);
    // })

    // //情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([()=>person.job.j1.salary,()=>person.name],(newValue,oldValue)=>{
    //   console.log('salary或者name变化了');
    //   console.log(newValue,oldValue);
    // })

    //特殊情况，由于job没有地址上的变化，只是他里面属性发生了变化，所以监视不奏效
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('salary变化了');
      console.log(newValue,oldValue);
    },{deep:true})//此处由于监视的是reactive定义的对象的某个属性，deep有效
    //返回一个对象
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

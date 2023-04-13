<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{salary}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">加钱</button>
  <hr>
  <h4>当前求和为：{{x}}</h4>
  <button @click="x++">x+1</button>
</template>

<script>
// 引用
import {ref,reactive,toRefs, readonly,shallowReadonly} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    //浅层reactive，只处理第一层的对象的响应式
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let x = ref(0)
    //person现在是只读的,readonly接收响应式数据
    // person = readonly(person)

    //person的第一层对象的属性是只读的，job内的属性不受影响
    person = shallowReadonly(person)

    x  = readonly(x)

 
    //返回一个对象
    return {
      ...toRefs(person),
      ...toRefs(person.job.j1),
      x
    }
  }
}
</script>

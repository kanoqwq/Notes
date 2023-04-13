<template>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <h2>姓：<input type="text" v-model="person.firstName"></h2>
  <h2>名：<input type="text" v-model="person.lastName"></h2>
  <h2>全名：<input type="text" v-model="person.fullName"></h2>
</template>

<script>
// 引用计算属性
import {ref,reactive,computed} from 'vue';
export default {
  name: 'Demo',
  setup(){
    const person = reactive({
      firstName: '张',
      lastName: '三'
    })
    //Vue3中的计算属性-简写形式，没有考虑计算属性被修改的情况
    // person.fullName = computed(()=>{
    //   return person.firstName + person.lastName
    // })


    //完整写法
    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(value){
        const nameArr = value.split('-');
        person.firstName = nameArr[0];
        person.lastName = nameArr[1]
      }
    })
    //可以直接返回数据(常用)
    return {
      person
    }
  }
}
</script>

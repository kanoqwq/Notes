<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
//引入需要使用的组合式API
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';
export default {
  name: 'Demo',
  //setup就相当于beforeCreate和created
  //
  setup(){
    //数据
    let sum = ref(0)

    //通过组合式API（setup内）的形式使用生命周期钩子
    //组合式API中的生命周期钩子比配置项钩子先执行
    console.log('----setup----');
    onBeforeMount(()=>{
      console.log('----onBeforeMount----');
    })
    onMounted(()=>{
      console.log('----onMounted----');
    })
    onBeforeUpdate(()=>{
      console.log('----onBeforeUpdate----');
    })
    onUpdated(()=>{
      console.log('----onUpdated----');
    })
    onBeforeUnmount(()=>{
      console.log('----onBeforeUnmount----');
    })
    onUnmounted(()=>{
      console.log('----onUnmounted----');
    })

    //返回一个对象
    return {sum}
  },
  //通过配置项的形式，使用生命周期钩子

  // beforeCreate和created总是在setup之后执行
  beforeCreate(){
    console.log('----beforeCreate----');
  },
  created(){
    console.log('----created----');
  },
  beforeMount(){
    console.log('----beforeMount----');
  },
  mounted(){
    console.log('----mounted-----');
  },
  beforeUpdate(){
    console.log('----beforeUpdate----');
  },
  updated(){
    console.log('----updated----');
  },
  beforeUnmount(){
    console.log('----beforeUnmount----');
  },
  unmounted(){
    console.log('----unmounted----');
  }
}
</script>

<template>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <!-- 传入msg和hello事件 -->
  <Demo/>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components:{
    Demo
  }
}
</script>

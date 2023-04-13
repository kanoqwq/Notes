<template>
  <h1>我是APP组件</h1>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <!-- 传入msg和hello事件 -->
  <Demo msg="hello" @hello="showHelloMsg">
    <template v-slot=qwq>
      <p>abc</p>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    //创建一个事件函数
    function showHelloMsg(val){
      alert('hello '+val)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

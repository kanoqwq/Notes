<template>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
  
</template>

<script>
import Demo from './components/Demo.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    let isShowDemo = ref(true);
    return {
      isShowDemo
    }
  }
}
</script>

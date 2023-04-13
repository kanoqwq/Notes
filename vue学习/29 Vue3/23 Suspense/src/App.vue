<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- suspense内有两个插槽 default没准备好就先展示fallback -->
    <Suspense>
      <template v-slot:default>
        <div>
          <Child></Child>
        </div>
      </template>
      <template v-slot:fallback>
        <div>
          <h1>加载中。。。。</h1>
        </div>
      </template>
    </Suspense>

  </div>
</template>

<script>
  //静态引入
// import Child from './components/Child.vue'

import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(()=>import('./components/Child'))//异步引入
export default {
  name: 'App',
  components:{
    Child
  }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>
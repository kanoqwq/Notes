<script setup lang="ts">
import Header from './Header/index.vue';
import Sidebar from './Sidebar/index.vue';
import Content from './Content/index.vue';
let kknd = 'ngm,ay'
function getName(me:string){
  console.log(me);
  console.log('父组件');
}
</script>
<template>
  <div class="layout">
    <Sidebar></Sidebar>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style lang="less">
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>

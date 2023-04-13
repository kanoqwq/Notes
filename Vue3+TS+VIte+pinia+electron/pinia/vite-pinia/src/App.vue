<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { useTestStore, useTestStore2 } from './store'
import { storeToRefs } from 'pinia'
const Test = useTestStore()
const Test2 = useTestStore2()
const add = () => {
  // Test.current++//可以直接操作
  // Test.$patch({ current: 999, name: 'dd' })
  // Test.$patch((state) => {
  //   state.current = 199
  // })
  // Test.$state = {//需要一次性修改掉整个对象
  //   current:2000,
  //   name:'abc'
  // }
  Test.current++;
  Test2.ddd = Test.current.toString()
  // Test.setCurrent(4)//通过actions也可以
}
const img = ref('#')
//pinia解构不具有响应式，可以通过storeToRefs解决
const { current, name } = storeToRefs(Test)
const setu = (): void => {
  Test.getSetu()
}
//pinia也可以重置state里的所有项目到默认值
const reset = (): void => {
  Test.$reset()
  Test2.$reset()
}
// //state中的东西改变了就会触发里面的回调函数
// Test.$subscribe((args, state) => {
//   console.log(args);
//   console.log(state);

// }, {
//   detached: true //分离subscribe，即使当前组件被销毁了也能保持函数运转
// })
//action中的东西改变了走这条
// Test.$onAction((args) => {
//   //after等待actions执行完了才会指向
//   args.after(() => {
//     console.log('执行完了');
//   })
//   //action出错了就会走这条
//   args.onError((err) => {
//     console.log(err);
//   })
//   //action执行函数的参数在这里，是一个数组
//   console.log(args.args);

//   console.log('---->', args);
// }, true)//true的意思：当 当前组件被销毁了时，onAction还会保持工作
</script>

<template>
  <div>
    pinia:{{ Test.current }} --{{ Test.name }}--{{ Test2.ddd }}
    <p>{{ current }}--{{ name }}</p>
    <img :src="Test.setuUrl" alt="">
    <button @click="add">点我加1</button>
    <button @click="setu">点我获取色图</button>
    <button @click="reset">点我恢复原样</button>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

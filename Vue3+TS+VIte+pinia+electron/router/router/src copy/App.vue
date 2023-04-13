<template>
  <!-- 传统路由导航 -->
  <!-- replace不会留下历史记录 -->
  <!-- <p><router-link replace :to="{ name: 'Login' }">login(replace)</router-link></p>
  <p><router-link replace :to="{ name: 'Reg' }">reg(replace)</router-link></p> -->
  <!-- 编程路由导航 -->
  <!-- <button @click="toPath('/login')">Login</button>
  <button @click="toPath('/reg')">Reg</button>
  <p> <button @click="next">next</button>
    <button @click="prev">prev</button>
  </p> -->
  <router-view></router-view>


</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
const toPath = (path: string) => {
  //直接传字符串
  router.push(path)
  //对象参数
  // router.push({
  //   path
  // })
}
const next = () => {
  router.go(1)
}
const prev = () => {
  router.back()
}
</script>
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

<script setup lang="ts">
import kano from "./components/refandReactive.vue"
import toRef from './components/toRef.vue'
import yufatang from './components/语法糖.vue'
import varvar from './components/环境变量.vue'
</script>

<template>
  <kano />
  <toRef />
  <yufatang></yufatang>
  <varvar></varvar>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

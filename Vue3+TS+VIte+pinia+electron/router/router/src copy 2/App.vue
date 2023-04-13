<template>
  <div>
    <router-view #default="{ route, Component }">
      <transition :enter-active-class="'animate__animated ' + route.meta.transition as string">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import 'animate.css'
import { useRouter } from 'vue-router'
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

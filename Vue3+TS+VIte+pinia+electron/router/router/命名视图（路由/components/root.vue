<template>
    <div>
        <h3>我是root</h3>
        <router-link to="/">user1 </router-link>
        <router-link to="/user2">user2</router-link>
        <!-- 默认出口 -->
        <router-view></router-view>
        <!-- B和C专属view -->
        <router-view name="B"></router-view>
        <router-view name="C"></router-view>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style></style>
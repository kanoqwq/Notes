<template>
    <div>成功进入index</div>
    <p v-for="(item, index) in router.getRoutes()" :key="index">
        <router-link :to="item?.name as RouteLocationRaw" v-if="item.name">{{ item?.name }}</router-link>
    </p>

    <button @click="logout">退出登录</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter, RouteLocationRaw } from 'vue-router'
const router = useRouter()
const logout = () => {
    localStorage.getItem('login') && localStorage.removeItem('login')
    router.removeRoute('Demo1')
    router.removeRoute('Demo2')
    router.removeRoute('Demo3')
    location.reload()
    router.push('/')
}
</script>

<style></style>
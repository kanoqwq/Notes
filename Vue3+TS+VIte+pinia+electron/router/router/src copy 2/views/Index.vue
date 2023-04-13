<template>
    <div>成功进入index</div>
    <button @click="logout">退出登录</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
    localStorage.getItem('login') && localStorage.removeItem('login')
    router.push('/')
}
</script>

<style></style>
<template>
    <div>
        <h3>详情页面</h3>
        <div>品牌：{{ finded?.name }}</div>
        <div>价格：{{ finded?.price }}</div>
        <div>id：{{ finded?.id }}</div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { data } from './list.json'

const route = useRoute()
const finded = data.find(v => v.id === Number(route.params.id))
</script>

<style></style>
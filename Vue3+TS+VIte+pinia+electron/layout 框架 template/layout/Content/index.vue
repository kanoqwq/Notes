<template>
    <div class="content">
        <div class="content-detail" :key="item" v-for="item in 100">{{item}}</div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    margin: 20px;
    &-detail{
        border: 1px solid #999;
        margin: 10px;
    }
}
</style>
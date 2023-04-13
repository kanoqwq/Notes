<template>
    <div class="sidebar">
        侧栏
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, shallowRef, markRaw } from 'vue'
</script>

<style lang="less">
.sidebar {
    width: 200px;
    border-right: 1px solid #999;
}
</style>
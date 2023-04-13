<template>
    <div v-if="isShow" class="loading">
        loading...
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const isShow = ref<boolean>(false);
const show = () => isShow.value = true
const hide = () => isShow.value = false
//使用expose暴露变量和方法
defineExpose({
    isShow,
    show,
    hide
})
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    top: 0;
    background-color: #000;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    color: white;
}
</style>
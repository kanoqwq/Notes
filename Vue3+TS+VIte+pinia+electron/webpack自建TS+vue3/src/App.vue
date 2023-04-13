<template>
    <div class="main">
        <h2>WebPack + TS + VUE3</h2>
        <p>{{ num }}</p>
        <button @click="add">test</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
let num = ref<number>(0);
const add = () => {
    num.value++
}
</script>

<style scoped lang="less">
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    p {
        color: red;
    }
}

:global(body),:global(html),:global(#app)  {
    height: 100%;
}
</style>
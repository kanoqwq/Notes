<template>
    <h1>provideA 儿子</h1>
    <div class="box"></div>
    <button @click="c = 'cyan'">改</button>
    <provideB></provideB>
</template>

<script setup lang='ts'>
import { ref, reactive, inject, Ref } from 'vue'
import provideB from '../provideB/index.vue'

let c = inject<Ref<string>>('color')

</script>

<style lang="less">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background-color: v-bind(c);
}
</style>
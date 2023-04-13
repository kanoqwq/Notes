<template>
    <h1>provideB 孙子</h1>
    <div class="box"></div>
    <button @click="c = 'green'">改</button>
</template>

<script setup lang='ts'>
import { ref, reactive, Ref, inject } from 'vue'
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
<template>
    <p>{{ count }}</p>
    <p>{{ dd }}</p>
    <button @click="add">++</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { $ref } from 'vue/macros'
let dd = ref<number>(0)
let count = $ref<number>(0)
const add = () => {
    count++//语法糖不需要.value
    dd.value++
}
</script>

<style>

</style>
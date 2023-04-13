<template>
    <hr>
    <p>中转父级</p>
    <hr>
    <A @kano-click="getProp" />
    <B :val="v" />
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from "../A/index.vue"
import B from "../B/index.vue"
let v = ref('');
const getProp = (val: string) => {
    v.value = val
}
</script>

<style>

</style>
<template>
    <A a="234" kano="456"></A>
    <p>原图：<img id="img" src="../../assets/tx.png" alt=""></p>
    <p>base64：<span style="display: inline-block; width: 500px; word-wrap: break-word;">{{base64}}</span></p>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from './A.vue'
import toBase64 from '../../hooks/index'
let base64 = ref('')
toBase64({
    el:"#img"
}).then(result=>{
    base64.value = result.baseUrl
})
</script>

<style>

</style>
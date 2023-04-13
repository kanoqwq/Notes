<template>
    <div><span>B组件元素借助桥梁：</span><span>{{ val }}</span></div>
    <div><span>B组件元素自定义：</span><span>{{ val1 }}</span></div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Bus from '../../../Bus事件总线重写'

const { val } = defineProps<{
    val: string
}>()
const val1 = ref('')
Bus.on('kano-c2',(val:string)=>{
    val1.value = val
})
</script>

<style>

</style>
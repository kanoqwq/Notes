<template>
    <div><span>A组件元素：</span><input type="text" v-model="text"></div>
    <button @click="ToB">传参到B</button>
    <hr>
    <button @click="ToB1">用自己写的函数传参到B</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Bus from '../../../Bus事件总线重写'
const text = ref('');
const emit = defineEmits(['kano-click']);
const ToB = () => {
    emit('kano-click', text.value)
}
const ToB1 =()=>{
    Bus.emit('kano-c2',text.value)
}
</script>

<style>

</style>
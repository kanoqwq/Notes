<template>
    <span>A{{ $kano }}</span>
    <p>{{ $kanoSay.Say() }}</p>
</template>

<script setup lang='ts'>
    import {ref,reactive,useAttrs,useSlots,getCurrentInstance} from 'vue'
    //调用当前实例proxy 使用全局方法
    const app = getCurrentInstance()
    console.log(app?.proxy.$kanoSay.Say());
    
    const attrs =  useAttrs()
    console.log(attrs);
    
</script>

<style>

</style>
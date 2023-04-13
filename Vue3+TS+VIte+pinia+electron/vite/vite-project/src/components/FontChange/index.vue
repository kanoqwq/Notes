<!-- 数字过度效果 -->
<template>
    <div>
        <input type="number" v-model="num.current" step="20">
        <div>
            {{ Math.floor(num.tweenedNumber) }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import gsap from 'gsap'
import { watch } from 'vue';
const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal
    })
})
</script>

<style>

</style>
<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
const startLoading = () => {
    let dom = bar.value as HTMLElement
    speed.value = 1
    let timer = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1
            dom.style.width = speed.value + '%'
            timer = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1
            window.cancelAnimationFrame(timer)
        }
    })

}
const endLoading = () => {
    let dom = bar.value as HTMLElement
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100;
            dom.style.width = speed.value + '%'
        })
    }, 500)
}
defineExpose({
    startLoading,
    endLoading
})
</script>

<style scoped lang="less">
.wraps {
    position: fixed;
    top: 0;
    width: 100%;

    .bar {
        height: inherit;
        width: 100%;
        height: 2px;
        background-color: red;
    }
}
</style>
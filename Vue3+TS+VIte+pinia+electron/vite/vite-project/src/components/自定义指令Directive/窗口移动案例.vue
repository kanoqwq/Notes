<template>
    <!-- 指令可以不写内容 -->
    <div class="box" v-move>
        <div class="header">标题</div>
        <div class="content">内容</div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive } from 'vue'
const vMove: Directive<HTMLElement, void> = (el, binding) => {
    const header: HTMLDivElement = el.firstElementChild as HTMLDivElement;
    const mouseDown = (e: MouseEvent) => {
        //窗口内坐标
        let X = e.clientX - el.offsetLeft
        let Y = e.clientY - el.offsetTop
        const move = (e1: MouseEvent) => {
            console.log(e.clientX, e.clientY);
            el.style.left = e1.clientX - X + 'px'
            el.style.top = e1.clientY - Y + 'px'
        }
        document.addEventListener('mousemove', move)
        //鼠标抬起结束
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    header.addEventListener('mousedown', mouseDown)
}
</script>

<style lang="less" scoped>
.box {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    user-select: none;

    .header {
        height: 20px;
        background-color: #000;
        color: red;
        text-align: center;
    }

}
</style>
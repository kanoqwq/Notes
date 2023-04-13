<template>
    <div class="btns">
        <button v-kano-show="'shop:edit'">修改</button>
        <button v-kano-show="'shop:create'">添加</button>
        <button v-kano-show="'shop:delete'">删除</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Directive } from 'vue'
localStorage.setItem('user', 'kano')

const mockPermission = [
    'kano:shop:edit',
    // 'kano:shop:create',
    'kano:shop:delete'
]
const userId = localStorage.getItem('user') as string
// 自定义指令的函数形式，仅在被绑定组件mounted/updated时生效
const vKanoShow: Directive<HTMLButtonElement, string> = (el, binding) => {
    console.log(binding);
    if (!mockPermission.includes(userId + ':' + binding.value)) {
        el.disabled = true;
    }
}
</script>

<style lang="less" scoped>
.btns {
    button {
        margin: 20px;
    }
}
</style>
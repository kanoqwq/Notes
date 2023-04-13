<template>
    <div>
        <Btn @on-click="getBtn" text="kanokano">
            <template #default>btn1</template>
        </Btn>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, h } from 'vue'
//使用h函数创建一个DOM对象
type Props = {
    text: string
}
const Btn = (props: Props, ctx: any) => {
    return h('div', {
        class: ['rounded', 'bg-green-500', 'text-gray-50', 'text-center', 'p-1.5', 'm-1'],
        onClick: () => {
            ctx.emit('on-click', '按钮')
        },
    },
        ctx.slots.default())
}
const getBtn = (str: string) => {
    console.log(str);

}
</script>

<style>

</style>
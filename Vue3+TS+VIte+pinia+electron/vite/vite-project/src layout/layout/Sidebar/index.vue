<template>
    <div class="sidebar">
        侧栏
        <p>{{ title[0] }}</p>
        <button @click="send">给父组件传参</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// const props = defineProps<{
//     title:String
// }>()
const props = withDefaults(defineProps<{
    title: String[]//ts泛型写法
}>(), {
    title: () => ['666']//默认值
})

// const emit = defineEmits(['on-kano']);
const emit = defineEmits<{//事件绑定
    (em:'on-kano',me:string):void//两个参数，一个是事件名，一个是方法的参数
}>();

const send = ()=>{
    emit('on-kano','NMSL')
}
</script>

<style lang="less">
.sidebar {
    width: 200px;
    border-right: 1px solid #999;
}
</style>
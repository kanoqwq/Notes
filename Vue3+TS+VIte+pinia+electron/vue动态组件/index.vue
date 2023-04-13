<template>
    <div class="sidebar">
        <button @click="() => { com = what[0].com }">{{what[0].name}}</button>
        <button @click="() => { com = what[1].com }">{{what[1].name}}</button>
        <component :is="com"></component>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, shallowRef, markRaw } from 'vue'
import Tree from '../../components/Tree/index.vue'
import Header from '../Header/index.vue'
let what = shallowRef([{
    name: 'Tree',
    com: markRaw(Tree)//需要标记为Raw，且shallow 因为这样才不会把组件里的东西全都reactive掉，造成性能浪费
},
{
    name: 'Header',
    com: markRaw(Header)
}
])
let com = shallowRef(what.value[0].com)
</script>

<style lang="less">
.sidebar {
    width: 200px;
    border-right: 1px solid #999;
}
</style>
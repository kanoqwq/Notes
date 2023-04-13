<template>
    <!-- <button @click="flag = !flag">点击隐藏</button> -->
    <!-- <A v-hide.kano="{ a: 114514 }"></A> -->
    <!-- <jianquan></jianquan> -->
    <form1></form1>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive, DirectiveBinding } from 'vue'
import jianquan from './鉴权例子.vue'
import A from './A.vue'
import form1 from './窗口移动案例.vue'
const flag = ref<boolean>(true)
const vHide: Directive = {
    created() {

    },
    beforeMount() {

    },
    mounted(el:HTMLElement,dir:DirectiveBinding,vnode,oldvalue) {
        console.log(el,dir,vnode,oldvalue);

    },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { }
}
</script>

<style>

</style>
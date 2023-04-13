<template>
    <div :class="[kano1.big,kano1.red]">动态CSS</div>
</template>

<script setup lang='ts'>
import { ref, reactive,useCssModule } from 'vue'
//自定义css
const css = useCssModule('kano1')
console.log(css);

</script>

<style module="kano1" lang="less" scoped>
.big{
    font-size: 100px;
}
.red{
    color: red;
}
</style>
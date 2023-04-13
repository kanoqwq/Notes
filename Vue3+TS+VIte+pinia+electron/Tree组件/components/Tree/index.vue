<template>
    <div class="tree" v-for="item in data">
        <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
        <!-- 组件递归 -->
        <Tree v-if="item.children?.length" :data="item?.children" />
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}
defineProps<{
    data?: Tree[]
}>()
</script>
<script lang="ts">
export default {
    name: 'Tree'
}
</script>
<style lang="less">
@val: 10px;

.tree {
    margin-left: @val;
}
</style>
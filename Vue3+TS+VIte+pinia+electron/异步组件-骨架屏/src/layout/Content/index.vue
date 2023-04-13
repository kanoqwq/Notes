<template>
    <div class="content">
        <div class="content-detail">
            <!-- 异步组件专用 -->

            <Suspense>
                <template #default>
                    <Syncvue />
                </template>
                <template #fallback>
                    <Skeleton />
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <Syncvue />
                </template>
                <template #fallback>
                    <Skeleton />
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <Syncvue />
                </template>
                <template #fallback>
                    <Skeleton />
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch, defineAsyncComponent } from 'vue'
import Skeleton from '../../components/Skeleton/index.vue'
// 异步引入
const Syncvue = defineAsyncComponent(() => import('../../components/sync/index.vue'))


</script>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    margin: 20px;
}
</style>
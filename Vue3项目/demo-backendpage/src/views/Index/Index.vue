<template>
    <div class="index">
        <el-card>
            <el-card class="Pie">
                <MyPie width="700px" height="500px" :data="state.salePie"></MyPie>
            </el-card>
            <el-card class="Map">
                <MyMap width="700px" height="500px" :data="state.saleMap"></MyMap>
            </el-card>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { getHomePageInfo } from '@/api/Index'
import MyPie from './components/Pie.vue'
import MyMap from './components/MyMap.vue';
const state = reactive<IndexData>({
    salePie: [],
    saleMap: []
})
onMounted(async () => {
    try {
        let result = await getHomePageInfo()
        console.log(result.data.data);
        state.salePie = result.data.data.salePie
        state.saleMap = result.data.data.saleMap
    } catch (e) {
        console.log(e);
    }
})
</script>

<style scoped lang="less">
.index {
    padding: 15px;

    .Pie,
    .Map {
        width: 750px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
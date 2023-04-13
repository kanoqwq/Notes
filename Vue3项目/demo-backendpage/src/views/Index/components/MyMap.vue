<template>
    <div class="tooltip">
        <div class="myMap" ref="myMap"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import * as echarts from 'echarts'
import china from '@/assets/china.json'
//注册地图
echarts.registerMap('china', china as any)
const props = defineProps<{
    data: saleMap[],
    height: string,
    width: string,
    style?: string
}>()

let mapCharts: echarts.ECharts
const myMap = ref<HTMLElement>()
watch(() => props.data, () => {
    const data = props.data.map(item => {
        return {
            name: item.areaName,
            value: item.saleNum
        }
    })
    console.log(data);

    if (props.data.length) {
        if (myMap.value) {
            if (!mapCharts) {
                mapCharts = echarts.init(myMap.value)
            }
            const options = {
                tooltip: {
                    show: true,
                    formatter: function (params: any) {
                        if (params.value) {
                            return params.seriesName + "<br/>" + params.name + ':' + params.value
                        } else {
                            return params.seriesName + "<br/>" + params.name + ':' + '0'
                        }
                    }
                },
                series: {
                    type: 'map',
                    map: 'china',
                    emphasis: {
                        label: {
                            show: false
                        },
                        itemStyle: {
                            areaColor: '#66ccff'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff'
                    },
                    data: data
                }
            }
            mapCharts.setOption(options)
        }
    }
})
</script>

<style scoped lang="less">
// 变量注入
.myMap {
    height: v-bind(height);
    width: v-bind(width);
}

.tooltip {
    display: flex;
    justify-content: space-between;
}
</style>

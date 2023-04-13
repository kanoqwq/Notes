<template>
    <div class="tooltip">
        <el-radio-group v-model="selectLabel" @change="dayChange">
            <el-radio-button label="sale_">销量</el-radio-button>
            <el-radio-button label="_money">销售额</el-radio-button>
        </el-radio-group>
        <el-select v-model="selectDay" placeholder="选择日期" @change="dayChange">
            <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
        </el-select>
    </div>
    <div ref="myPie" class="myPie" :style="style"></div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch, toRefs } from 'vue'
import * as echarts from 'echarts'
const props = defineProps<{
    data: salePie[],
    height: string,
    width: string,
    style?: string
}>()
const myPie = ref<HTMLElement>()

let chartsData: { value: string; name: string; }[] = []
const state = reactive({
    selectLabel: '_money',
    selectDay: 'today',
    options: [{
        name: '今天',
        value: 'today'
    }, {
        name: '昨天',
        value: 'yesterday'
    }, {
        name: '前三天',
        value: 'three_days'
    }, {
        name: '前七天',
        value: 'seven_days'
    }]
})
//初始化实例

let myChart: echarts.ECharts;

const { selectDay, selectLabel, options } = toRefs(state)

watch(() => props.data, () => {
    if (props.data.length) {
        renderPie()
    }
})

const dayChange = () => {
    renderPie()
}
const renderPie = () => {
    let key = ''

    if (selectLabel.value === '_money') {
        key = selectDay.value + selectLabel.value
    } else {
        key = selectLabel.value + selectDay.value
    }
    if (myPie.value) {
        if (!myChart) {
            myChart = echarts.init(myPie.value)
        }
        chartsData = props.data.map((item: any) => {
            return {
                value: item[key],
                name: item.name
            }
        })
        let option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '20',
                right: '0',
                height: '10%',
                orient: 'vertical'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        // formatter(param: any) {
                        //     // correct the percentage
                        //     return param.name + ' (' + param.percent * 2 + '%)';
                        // }
                    },
                    labelLine: {
                        show: true
                    },
                    data: chartsData
                }
            ]
        };
        myChart.setOption(option)
    }
}

</script>

<style scoped lang="less">
// 变量注入
.myPie {
    height: v-bind(height);
    width: v-bind(width);
}

.tooltip {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>

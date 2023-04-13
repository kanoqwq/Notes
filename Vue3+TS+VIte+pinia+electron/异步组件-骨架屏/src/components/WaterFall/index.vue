<template>
    <div class="wraps">
        <div :style="{ left: item.left + 'px', top: item.top + 'px', height: item.height + 'px', background: item.background, }"
            v-for="(item,index) in waterList" :key="index" class="items"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, watch } from 'vue'
const { list } = withDefaults(defineProps<{//定义props
    list: any[]
}>(), {
    list: () => []
})
console.log(list);

const waterList = reactive<any[]>([]);
const init = () => {
    const width = 130;
    const x: number = (<HTMLDivElement>document.querySelector('.content'))?.offsetWidth;
    const column = Math.floor(x / width);//一共多少列
    const heightList: number[] = []
    console.log(column);

    for (let i = 0; i < list.length; i++) {
        if (i < column) {
            list[i].left = i * width;
            list[i].top = 10;
            waterList.push(list[i])
            heightList.push(list[i].height)
        } else {
            //取当前行最小的瀑布进行追加更新(选择法)
            let currentHeight = heightList[0]
            let index = 0;
            heightList.forEach((h, i) => {
                if (currentHeight > h) {
                    currentHeight = h;
                    index = i
                }
            })
            list[i].top = currentHeight + (10 * 2);//因为要算上上一个的10px
            list[i].left = index * width;
            waterList.push(list[i])
            heightList[index] += list[i].height + 10

        }
    }
}
onMounted(() => {
    init()
    let timer: any = null
    window.onresize = function () {
        window.clearTimeout(timer)
        timer = window.setTimeout(() => {
            init()
        }, 100)
    }
})
watch(list, () => {
    init()
})

// const list = reactive([
//     { height: 300, background: 'red' },
//     { height: 400, background: 'pink' },
//     { height: 500, background: 'blue' },
//     { height: 200, background: 'red' },
//     { height: 300, background: 'red' },
//     { height: 400, background: 'pink' },
//     { height: 500, background: 'blue' },
// ]) 
</script>

<style scoped lang="less">
.wraps {
    position: relative;

    .items {
        position: absolute;
        width: 120px;

    }
}
</style>
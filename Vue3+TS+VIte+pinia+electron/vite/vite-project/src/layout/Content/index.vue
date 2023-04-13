<template>
    <div class="content">
        <div class="content-detail">
            <!-- 异步组件专用 -->
            <!-- <transition appear appear-from-class="fade-enter-from" appear-active-class="fade-enter-active"
                appear-to-class="fade-enter-to">
                <Suspense>
                    <template #default>
                        <Syncvue />
                    </template>
                    <template #fallback>
                        <Skeleton />
                    </template>
                </Suspense>
            </transition>
            <button @click="add">add</button><button @click="pop">pop</button>
            <transition-group tag="div"
            leave-active-class="animate__animated animate__bounceOut"
            enter-active-class="animate__animated animate__bounceIn"
            >
                <div v-for="val in arr" class="arr" :key="val">{{ val }}</div>
            </transition-group>

            <FontChange></FontChange> -->
            <!-- <h1>App.vue 祖宗级别</h1>
            <label for="red"><input type="radio" name="color" v-model="color" value="red"
                    id="red"><span>红色</span></label>
            <label for="pink"><input type="radio" name="color" v-model="color" value="pink"
                    id="pink"><span>粉色</span></label>
            <label for="yellow"><input type="radio" name="color" v-model="color" value="yellow"
                    id="yellow"><span>黄色</span></label> -->

            <!-- <provideA></provideA> -->
            <!-- <Bridge /> -->
            <!-- <Direct></Direct> -->
            <!-- <hooks></hooks> -->
            <!-- <p>开启loading</p> -->
            <!-- <button @click="setLoading">loading:{{ loading.isShow }}</button> -->
            <!-- <ElementPlus></ElementPlus> -->
            <kk></kk>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch, defineAsyncComponent, provide, readonly,getCurrentInstance } from 'vue'
import Skeleton from '../../components/Skeleton/index.vue'
import 'animate.css'
import FontChange from '../../components/FontChange/index.vue'
import provideA from '../../components/provide依赖注入/provideA/index.vue'
import Bridge from '../../components/EventBus传参/Bridge/index.vue'
import Direct from '../../components/自定义指令Directive/index.vue'
import hooks from '../../components/自定义Hooks/index.vue'
import ElementPlus from '../../components/elementPlus/index.vue'
import Miao from '../../components/css的妙用/index.vue'
import kk from '../../components/事件循环/index.vue'
const loading = (getCurrentInstance() as any) ?.proxy?.$kano_isLoading;
const setLoading = ()=>{
    loading.isShow ? loading.show() : loading.hide()
}

// 异步引入
const Syncvue = defineAsyncComponent(() => import('../../components/sync/index.vue'))

const arr = reactive<number[]>([1, 2, 3, 4, 5, 6])
const add = () => {
    arr.push(arr.length + 1)
}
const pop = () => {
    arr.pop()
}

const color = ref<string>('red')
provide('color', readonly(color))
</script>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    margin: 20px;
}
</style>
<style lang="less">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
    transition: all .5s;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.enter {
    opacity: 0;
}

.arr {
    display: inline-block;
    padding: 10px;
    width: 30px;
    font-size: 30px;
    text-align: center;
    border: 1px solid #999;
    margin: 10px 5px;

}
</style>
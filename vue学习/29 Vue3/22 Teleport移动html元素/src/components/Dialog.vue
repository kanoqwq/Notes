<template>
    <button @click="isShow = true">点我弹个窗</button>    
    <!-- 使用teleport 传送元素到页面的其他地方 -->
    <teleport to="body">
        <!-- 遮罩层 -->
        <div class="mask" v-if="isShow" >
            <!-- 对话框 -->
            <div class="dialog">
                <h3>我是一个弹窗</h3>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <button @click="isShow = false">关闭弹窗</button>
            </div>
        </div>
    </teleport>
</template>

<script>
    import {ref}  from 'vue'
    export default {
        name:'Dailog',
        setup(){
            let isShow = ref(false)
            return {isShow}
        }
    }
</script>

<style>
    .mask{
        position: absolute;
        top: 0;bottom: 0;left: 0;right: 0;
        background-color: rgba(0,0,0,.5);

    }
    .dialog{
        position: absolute;
        width: 300px;
        height: 300px;
        background: green;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>
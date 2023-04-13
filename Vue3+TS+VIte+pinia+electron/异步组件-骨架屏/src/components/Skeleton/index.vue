<!--
    骨架屏 template
    created time: 2023-2-4
    @Minikano
 -->
<template>
    <div class="sk">
        <div class="sk-left-container">
            <div class="sk-header">
                <div class="avatar"></div>
                <div class="name"></div>
            </div>
            <hr>
            <div class="sk-comment1"></div>
            <div class="sk-comment2"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang="less">
@keyframes loading {
    from {
        opacity: .2;
    }

    to {
        opacity: 1;
    }
}

.sk {
    margin: 20px 0;
    &-left-container &-header {
        display: flex;
        align-items: center;

        .avatar {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ccc;
            animation: loading .4s alternate infinite;
            animation-delay: 0s;
        }

        .name {
            display: inline-block;
            width: 100px;
            height: 20px;
            margin-left: 10px;
            background-color: #ccc;
            animation: loading .4s alternate infinite;
            animation-delay: .1s;
        }
    }

    &-left-container &-comment1,
    &-left-container &-comment2 {
        width: 400px;
        height: 20px;
        margin: 10px 0;
        margin-left: 5px;
        background-color: #ccc;
        animation: loading .4s alternate infinite;
        animation-delay: .15s;
    }

    &-left-container &-comment2 {
        animation-delay: .2s;

    }

}
</style>
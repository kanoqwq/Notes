<template>
    <div class="col-xs-6">
        <div class="panel">
        <div class="panel-body">
            <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <!-- 二级路由 -->
                        <!-- replace的简写 -->
                        <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
                    </li>
                    <li>
                        <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                    </li>
                </ul>
                <!-- 保持组件不被销毁，include里接要保存的路由组件，默认是全部保存 -->
                <keep-alive include="News">
                    <router-view></router-view>
                </keep-alive>
                <!-- 如果想缓存多个组件，可以写成数组形式 -->
                <!-- <keep-alive :include="['News','Message']">
                    <router-view></router-view>
                </keep-alive> -->
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    beforeDestroy(){
        console.log('HOME 内容寄了');
    }
}
</script>

<style>

</style>
<template>
  <div id="app">
    <div>
      <div class="row">
          <!-- banner -->
          <Banner/>
      </div>
      <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
              <div class="list-group">
                  <!-- 传统跳转 -->
                  <!-- <a href="./about" class="list-group-item ">About</a> -->
                  <!-- <a href="./home" class="list-group-item active">Home</a> -->

                  <!-- 路由特有的锚点写法 -->
                  <!-- active-class: 点击后启用的样式 -->
                  <!-- to： 代替href -->
                  <!-- replace模式，不能后退，每次的历史记录都会被替换 -->
                  <router-link  :replace="true" to="/about" class="list-group-item" active-class="active">About</router-link>
                  <router-link :replace="true" to="/home" class="list-group-item" active-class="active">Home</router-link>
              </div>
          </div>
          <div class="col-xs-6">
              <div class="panel">
                  <div class="panel-body">
                      <!-- 借助router-view实现路由显示  -->
                      <router-view></router-view>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
export default {
  name: 'App',
  components: {
    Banner
}
}
</script>

<style>
</style>

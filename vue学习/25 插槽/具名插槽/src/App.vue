<template>
  <div id="app">
    <Category title="美食">
      <!-- 自定义插槽名 -->
      <img slot="center" src="https://img2.baidu.com/it/u=1377849239,938144589&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
      <a slot="footer" href="#">更多美食</a>
    </Category>
    <Category title="游戏" >
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    
    <Category title="电影">
      <video slot="center" src="https://pan.kanokano.cn/d/阿里云の盘/bannervideo/BV15f4y167sa.mp4" poster="https://kanokano.cn/wp-content/uploads/topimg/banner.png" preload="preload" muted="muted" autoplay="autoplay" loop="loop">
        您的浏览器不支持HTML5标签。
      </video>

      <!-- 这样写slot非常繁琐 -->
      <div class="foot" slot="footer">
        <a href="#">经典</a>
        <a href="#">热门</a>
        <a href="#">推荐</a>
      </div>
      <h4 slot="footer" style="text-align:center">欢迎</h4>

      <!-- 新写法 v-slot 但只能用在template 但不常用-->
      <!-- <template v-slot=footer>
        <div class="foot" >
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4 style="text-align:center">欢迎</h4>
      </template> -->
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  },
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['GTA5','CSGO','原P','MC'],
      films:['JAVA','CSS','HTML','NodeJS'],
    }
  }
}
</script>

<style>
  #app,.foot{
    display: flex;
    justify-content: space-around;
  }
  
</style>
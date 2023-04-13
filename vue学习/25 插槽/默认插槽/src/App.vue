<template>
  <div id="app">
    <Category title="美食" :ListData="foods">
      <img src="https://img2.baidu.com/it/u=1377849239,938144589&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
    </Category>
    <Category title="游戏" :ListData="games"/>
    <Category title="电影" :ListData="films">
      <video src="https://pan.kanokano.cn/d/阿里云の盘/bannervideo/BV15f4y167sa.mp4" poster="https://kanokano.cn/wp-content/uploads/topimg/banner.png" preload="preload" muted="muted" autoplay="autoplay" loop="loop">
        您的浏览器不支持HTML5标签。
      </video>
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
  #app{
    display: flex;
    justify-content: space-around;
  }
  
</style>
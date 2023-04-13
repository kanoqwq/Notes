<template>
  <div id="app">
    
    <Category title="游戏" >
      <!-- 子组件传递的数据包装了一层对象 -->
      <template scope="scop">
        <ul>  
          <li v-for="(item,index) in scop.games" :key="index">{{item}}</li>
        </ul>
        <h3>{{scop.msg}}</h3>
      </template>
    </Category>

    <Category title="游戏" >
      <!-- 子组件传递的数据包装了一层对象 -->
      <!-- 还可以支持解构赋值 -->
      <template scope="{games}">
        <ol>  
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏" >
      <!-- 子组件传递的数据包装了一层对象 -->
      <!-- scope的另一种写法，slot-scope -->
      <template slot-scope="{games}">
          <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style>
  #app,.foot{
    display: flex;
    justify-content: space-around;
  }
  
</style>
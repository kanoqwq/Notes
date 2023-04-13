<template>
  <div class="container">
    <div class="header">
      <span class="left">left</span>
      <span class="center">center</span>
      <span class="right">right</span>
    </div>
    <div class="content">
      <ul class="list">
        <li v-for="i in 20" :key="i">
          <div class="left">
            <div class="avatar"></div>
          </div>
          <div class="right bg-red-200">
            <h3 class="user-name mar">kano{{ i }}</h3>
            <p class="description">你是一个一个一个</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <a href="#" v-for="(item, index) in footer" :key="index">
        <span>{{ item.icon }}</span>
        <span>{{ item.text }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type Footer<T> = {
  icon: T,
  text: T
}
const footer = reactive<Footer<string>[]>([
  { icon: '1', text: '首页' },
  { icon: '2', text: '商品' },
  { icon: '3', text: '信息' },
  { icon: '4', text: '我的' }
])
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  // BFC
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    align-items: center;
    padding: 0 20px;
    background-color: pink;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: #fff;

    a {
      text-decoration: none;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .content {
    overflow: auto;
    .list {


      li {

        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #000;

        .left {
          margin: 0 10px;

          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #000;
          }
        }

        .right {
          line-height: 1.5em;
        }
      }
    }
  }
}
</style>
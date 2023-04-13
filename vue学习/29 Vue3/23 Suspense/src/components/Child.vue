<template>
    <div class="child">
      <h3>我是Child组件</h3>
      {{sum}}
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    name: 'Child',
    setup(){
      let sum = ref(0)
      //制造一个网速慢的情景
      //suspense另外处理了返回的Promise数据
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve({sum})
        },1000)
      })
    }
  }
  </script>
  
  <style>
    .child{
      background-color: skyblue;
      padding: 10px;
    }
  </style> 
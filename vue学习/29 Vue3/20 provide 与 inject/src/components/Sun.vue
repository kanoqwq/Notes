<template>
    <div class="sun">
      <h3>我是Sun组件（孙）</h3>
      <p>{{car.name}}---{{car.price}}</p>
    </div>
  </template>
  
  <script>
    import {inject} from 'vue'
    export default {
        name: 'Sun',
        setup(){
            let car = inject('car')//类似全局事件总线
            return {
                car
            }
        }
    }
  </script>
  
  <style>
    .sun{
      background-color: orange;
      padding: 10px;
    }
  </style>
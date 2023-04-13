<template>
    <div class="sun">
      <h3>我是Sun组件</h3>
      <Dialog/>
    </div>
  </template>
  
  <script>
    import Dialog from './Dialog.vue'
    export default {
        name: 'Sun',
        components:{Dialog}
    }
  </script>
  
  <style>
    .sun{
      background-color: orange;
      padding: 10px;
    }
  </style>
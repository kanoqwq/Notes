<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑等待父级填充，如果父级有填充，则使用父级的结构，没有就使用插槽内的结构） -->

    <!-- 使用作用域插槽，可以在app里面访问到这个组件传过去的东西 -->
    <slot :games="games" msg="hello">我是默认内容</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],    
    data(){
      return{
        games:['GTA5','CSGO','原P','MC'],
      }
    }
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
img{
  width: 100%;
}
video{
  width: 100%;
}

</style>
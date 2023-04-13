<template>
    <div>
        <ul>
          <li v-for="L in messageList" :key="L.id">
            <!-- 使用params参数传参，字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${L.id}/${L.title}`">{{L.title}}</router-link>&nbsp;&nbsp; -->
            <!-- 使用params参数传参，to对象写法 -->
            <router-link :to="{
              //path:'/home/message/detail',
              //使用params的时候不可以用path，只能用name
              name:'xiangqing',
              params:{
                id: L.id,
                title: L.title
              }
            }">
              {{L.title}}
            </router-link>
          </li>
        </ul>
        <hr>
        <router-view/>
    </div>
</template>

<script>
export default {
  name:'Message',
  data(){
    return {
      //需要传给detail的数据
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'}
      ]
    }
  }
}
</script>

<style>

</style>
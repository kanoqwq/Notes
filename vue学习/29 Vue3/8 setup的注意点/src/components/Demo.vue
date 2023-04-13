<template>
  <h1>我是APP组件</h1>
  <!-- 在模板里面，不需要使用.value vue3会自动识别并解析 -->
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <slot></slot>
  <button @click="test">测试触发一下demo组件的hello事件</button>
</template>

<script>
import {ref,reactive} from 'vue';
export default {
  name: 'Demo',
  //测试setup
  beforeCreate(){
    console.log('----beforeCreate----');
  },
  //使用props接收数据
  props:['msg'],
  
  //直接emit事件会有警告，需要加上emits声明一下，我需要使用到这个自定义事件
  emits:['hello'],
  //setup的参数是一个props的Proxy代理对象和一个上下文对象
  //这个context里的attrs属性，如果没有提前写props的话，attrs里面就有接收过来的属性
  setup(props,context){
    console.log('----setup----',this,props);
    console.log(context,context.attrs.msg);
    console.log(context.slots);//自定义插槽
    //如果不想用ref的话，直接用一个对象包裹所有的属性
    const person = reactive({
      name: '张三',
      age: 18
    })
    function test(){
      //触发Hello事件
      context.emit('hello',123)
    }
    //可以直接返回数据(常用)
    return {
      person,
      test
    }
  }
}
</script>

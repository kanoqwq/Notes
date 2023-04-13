<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
// 引用
import {ref,customRef} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //自定义ref,实现防抖效果
    function myRef(value,delay){
      //追踪器track和触发器trigger
      return customRef((track,trigger)=>{
        let timer
        return {
          get(){
            console.log('getter',value);
            track()//通知Vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)
            return value
          },
          set(val){
            console.log('setter',val);
            clearTimeout(timer);
            timer = setTimeout(()=>{
              value = val
              trigger()//通知vue重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue提供的ref
    let keyWord = myRef('hello',1000)//使用自定义的ref
    return{keyWord}
  }
}
</script>

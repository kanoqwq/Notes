<template>
  {{ kano }}
  {{ obj }}
  <button @click="change" ref="btn">修改</button>

  <form>
    <input v-model="form.name" type="text" />
    <br>
    <input v-model="form.age" type="text" />
    <br>
    <button @click.prevent="submit">提交</button>
  </form>
</template>

<script setup lang='ts'>

//triggerRef是ref更新视图的时候需要调用的方法
//triggerRef(kano2) 这样也可以让shallowRef在页面上更新出变化后的值
import { ref, shallowRef, triggerRef, customRef, reactive, readonly,shallowReactive } from "vue";
type T = {
  name: string;
};
const kano = ref<T>({ name: "kano" });
const kano2 = shallowRef<any>({ name: "dddd" });

//ref 也可以获取dom元素,因为ref不确定类型，所以我们需要给ref函数指定一个确定的泛型
const btn = ref<HTMLElement>();

//customRef 顾名思义就是自定义的Ref
//比如可以在里面赛一个防抖函数
function MyRef<T>(value: T) {
  let timer: any;
  return customRef((track, trigger) => {
    return {
      get() {
        track(); //收集信息
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          //确保类类型一致
          console.log("值被改了");

          value = <T>newValue;
          trigger(); //更新界面
        }, 200);
      },
    };
  });
}

const obj = MyRef<string>("kano123");

const change = () => {
  //需要使用value来获取他的值
  // kano.value.name = 'dd';
  //shallowref是浅层次的响应式，响应式作用范围最多到.value
  kano.value = {
    //有效的
    name: "张三",
  };

  //但是如果ref和ShallowRef和ref一起用的话，就会发现两者都可以生效
  //这是因为ref作为响应式，触发了triggerRef 进而触发了 update生命周期，虽然shallowRef没有做深层响应式，但是由于出发了update生命周期
  //页面更新了，两者也就同时改变了，属于是shallow坐了ref的顺风车（）
  // console.log(kano);

  obj.value = "ddddd";

  //输出ref绑定的DOM元素
  console.log(btn.value?.innerHTML);
};

//reactive
//ref 支持所有类型，reactive 引用类型 array object Map Set
//ref取值赋值需要.value reactive不需要
let form = reactive({
  name: "kano",
  age: 18,
});
form.name = "张三";
let submit = ()=>{
  console.log(form);
}
// readonly
const onlyread = readonly({
  name:'张三'
})
// onlyread.name = 'dd'//无法赋值

//shallowReactive

const kkk = shallowReactive({
  foo:{
    bar:{
      num:111
    }
  }
})
// kkk.foo.bar.num = 111 //不会更新视图
kkk.foo = {//有效
  bar:{
      num:222
    }
}
///shallowReactive的问题和shallowRef的问题是一样的，shallowReactive也不能和reactive一起使用
</script>
<script type="module" lang="ts">
  export default {
    name:'kano'
  }
</script>

<style>
</style>
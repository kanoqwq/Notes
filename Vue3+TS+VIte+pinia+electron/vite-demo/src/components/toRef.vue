<template>
  <p>man.age:{{ man.age }}</p>
  <p>age:{{ age }}</p>
  <button @click="change">修改</button>
</template>

<script setup lang='ts'>
import { ref, reactive, toRef, toRefs, toRaw } from "vue";
//toref只对响应式对象有效果，非响应式对象是没有效果的
const man = reactive({ name: "kano", age: 123 });
//让age变量指向man里面的age属性，age变量改了 属性也会跟着改
const age = toRef(man, "age");

function change() {
  age.value = 111111;
}

// toRefs 的实现原理：
//torefs函数接收一个对象类型的扩展 
//这玩意可以把对象里面的每一个属性都ref化
const toRefs1 = <T extends object>(object: T) => {
    const map:any = {}
    for(let key in object){
        map[key] = toRef(object,key)
    }
    return map;
};
//torefs 实际使用(可以进行解构)
const {name}  = toRefs(man);
console.log(name);
//toRaw 可以从reactive响应式数据里面提取原始对象（ref类型的无效）
console.log(toRaw(man));


</script>
<script type="module" lang="ts">
export default {
  name: "toRef",
};
</script>

<style>
</style>
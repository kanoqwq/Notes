<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{salary}}</h2>
  <h3 v-if="person.car">座驾信息：{{person.car.name}} {{person.car.price}}w</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">加钱</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="replaceCar">换车</button>
  <hr>
  <h4>当前求和为：{{x}}</h4>
  <button @click="x++">x+1</button>
</template>

<script>
// 引用
import {ref,reactive,toRefs,toRaw,markRaw} from 'vue';
export default {
  name: 'Demo',
  setup(){
    //数据
    //浅层reactive，只处理第一层的对象的响应式
    let person =reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let x = ref(0)
    //toRaw只能用在reactive创建的响应式对象上
    //markRaw只能用在reactive创建的响应式对象上
    function showRawPerson(){
      console.log(toRaw(person));
      
      //console.log(toRaw(x));//无效
    }
    function addCar(){
      let car = {name:'马自达',price:'1'}
      //添加的car是响应式的，得益于proxy
      // person.car = car

      //标记为markRaw的数据，即使数据更改了，vue也不会更新数据到页面
      person.car = markRaw(car)
    }
    function replaceCar(){
      person.car.name = 'nmsl'
      person.car.price++
      console.log(person.car);
    }
    //返回一个对象
    return {
      person,
      ...toRefs(person),
      ...toRefs(person.job.j1),
      x,
      showRawPerson,
      addCar,
      replaceCar
    }
  }
}
</script>

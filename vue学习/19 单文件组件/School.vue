<template>
<!-- 组件的结构 -->
<div>
    <h2 class="demo">学校名称 {{name}}</h2>
    <h2>学校地址 {{address}}</h2>
    <button @click="ShowName">点我提示</button>
</div>
</template>

<script>
//组件交互相关的代码（数据，方法等）
//school组件

// const school = Vue.extend({
//     name: 'school',
//     data() {
//         return {
//             name: 'MIT',
//             address: 'USA'
//         }
//     },
//     methods: {
//         ShowName() {
//             alert(this.name)
//         }
//     },
// })
// //既然是单文件，所以要手动暴露组件变量(这里用统一暴露，待会引入比较方便)
//export default school;

//简写 Vue.extend可以省略
export default {
    name: 'School',
    data() {
        return {
            name: 'MIT',
            address: 'USA'
        }
    },
    methods: {
        ShowName() {
            alert(this.name)
        }
    },
}
</script>

<style>
/*组件的样式*/
.demo{
    color: pink;
}
</style>
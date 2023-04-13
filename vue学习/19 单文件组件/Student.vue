<template>
<div>
    <h2>学生姓名 {{name}}</h2>
    <h2>学生年龄 {{age}}</h2>
</div>
</template>

<script>
//创建一个student组件
export default {
    name:'Student',
    data() {
        return {
            name: 'kano',
            age: 19
        }
    }
}
</script>
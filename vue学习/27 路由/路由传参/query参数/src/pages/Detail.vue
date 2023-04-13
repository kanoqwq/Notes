<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    computed: {
        id() {
            return this.$route.query.id;
        },
        title() {
            return this.$route.query.title;
        }

    },
    mounted(){
        // $route对象下有我们想要的query属性
        console.log(this.$route);
    }
}
</script>

<style>

</style>
<template>
    <h2>我是About内容</h2>
</template>

<script>
export default {
    name:'About',
    beforeDestroy(){
        console.log('About 内容寄了');
    },


    
    //组件路由守卫
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
        console.log('App --- beforeRouteEnter');
        // document.title = to.meta.title
        if (to.meta.isAuth) {
            // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
            // if (to.path === '/home/news' || to.path === '/home/message') {
            if (localStorage.getItem('name') !== 'kano') {
                alert('独享前置路由守卫不允许你进入该路径')
            } else {
                next();
            }
        } else {
            //放行
            next();
        } 
    },


    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
        // ...
        console.log('App --- beforeRouteLeave');
        // document.title = to.meta.title
        next();      
    }
}
</script>

<style>

</style>
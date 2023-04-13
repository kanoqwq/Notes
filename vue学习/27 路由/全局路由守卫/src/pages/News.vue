<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习vue</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'News',
    data(){
        return{
            opacity:1
        }
    },
    //组件被缓存了，不会被销毁
    beforeDestroy(){
        console.log('News组件将被销毁');
        clearInterval(this.timer);
    },
    //两个新的生命周期
    //激活
    activated(){
        console.log('我被激活了');
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            console.log('@');
            if(this.opacity <= 0){
                this.opacity = 1
            }
        }, 16);
    },
    //失活
    deactivated(){
        console.log('我失活了');
        clearInterval(this.timer);
    }
}
</script>

<style>

</style>
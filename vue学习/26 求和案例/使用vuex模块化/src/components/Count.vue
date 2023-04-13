<template>
    <div>
        <!-- <h1>当前求和为：{{sum}}</h1> -->
        <h1>当前求和为：{{sum}}</h1>
        <h1>当前求和放大10倍为：{{bigSum}}</h1>
        <h3>nickname:{{nickname}} <br> age:{{age}}</h3>
        <h3 style="color:pink">Person组件的总人数是：{{personList.length}}</h3>
        <!-- 强转为数字 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- mapMutations 对象写法需要手动传参 -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <!-- mapMutActions 对象写法需要手动传参 -->
        <button @click="incrementOdd(n)">当前求和为奇数时加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
//引入vuex自带的mapState,mapGetters,mapMutations,mapActions
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,//用户选择的数字
            // sum:0//和
        }
    },
    methods:{
        //对象展开写法，这样的写法无法写参数，所以在使用的时候需要手动传入参数
        //方法会调用commit去联系mutation
        ...mapMutations('countAbout',{increment:'ADD',decrement:'DECR'}),

       
        //actions映射也是一样的
        ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'}),

    },
    computed:{
        //第一个参数是模块的名字，前提是模块开启了命名空间
        ...mapState('countAbout',['sum','nickname','age']),
        ...mapState('personAbout',['personList']),

        //数组写法
        ...mapGetters('countAbout',['bigSum'])
    },
    mounted(){
        const x = mapState('countAbout',{sum:'sum',nickname:'nickname',age:'age'})
        console.log(x);
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>
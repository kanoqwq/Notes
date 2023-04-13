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
        // increment(){
        //     // this.sum += this.n;
        //     //简单的业务逻辑可以不用经过action层
        //     this.$store.commit('ADD',this.n)
        // },
        // decrement(){
        //     // this.sum -= this.n;
        //     //简单的业务逻辑可以不用经过action层
        //     this.$store.commit('DECR',this.n)
        // },
        // incrementOdd(){
        //     // if(this.sum % 2 !== 0){
        //         // this.sum += this.n;
        //     // }
        //     this.$store.dispatch('addOdd',this.n);
            
        // },
        // incrementWait(){
        //     this.$store.dispatch('addWait',this.n);
        //     // setTimeout(()=>{
        //         // this.sum += this.n;
        //     // },500)
        // },

        //对象展开写法，这样的写法无法写参数，所以在使用的时候需要手动传入参数
        //方法会调用commit去联系mutation
        ...mapMutations({increment:'ADD',decrement:'DECR'}),

        //数组写法，方法会调用commit去联系mutation,前提是名字需要一致
        // ...mapMutations(['ADD','DECR'])
        

        //actions映射也是一样的
        ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
        // ...mapActions(['addOdd','addWait'])

    },
    computed:{
        //使用mapState，，对象解构，因为mapState返回的是一个对象，用于映射状态对象属性
        //借助mapState读取state中的属性
        // ...mapState({sum:'sum',nickname:'nickname',age:'age'}),

        //数组写法，如果需要映射的名称是一样的话
        ...mapState(['sum','nickname','age','personList']),

        //mapGetters也是一样的，借助它读取getters里面的属性
        // ...mapGetters({bigSum:'bigSum'}),

        //数组写法
        ...mapGetters(['bigSum'])
    },
    mounted(){
        const x = mapState({sum:'sum',nickname:'nickname',age:'age'})
        console.log(x);
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>
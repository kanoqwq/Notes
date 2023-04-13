<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:pink">Count组件的求和为：{{sum}}</h3>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addNotWang">老王隔绝器</button>
        <button @click="addHitokotoOnServer">添加一言</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return {
            name:''
        }
    },
    computed:{
        personList(){
            //state里面没有personList，但是有personAbout
            return this.$store.state.personAbout.personList
        },
        sum(){
            //同理
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            //读取对象属性，可以使用下表
            return this.$store.getters['personAbout/firstPersonName'];
        }
        // ...mapState(['personList'])
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.name = ''
            //personAbout是模块，所以要访问里面的ADD_PERSON,需要personAbout/ADD_PERSON 加斜杠访问，比较像目录
            this.$store.commit('personAbout/ADD_PERSON',personObj)
        },
        addNotWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.name = ''
            this.$store.dispatch('personAbout/addPersonNotWang',personObj)
        },
        addHitokotoOnServer(){
            this.$store.dispatch('personAbout/addHitokotoOnServer')
        }
    },
    mounted(){
        console.log(this.$store)
    }
}
</script>

<style>

</style>
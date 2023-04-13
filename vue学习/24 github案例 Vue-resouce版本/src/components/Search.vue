<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="startSearch">Search</button>
        </div>
    </section>
</template>

<script>
// import axios from 'axios'
export default {
    name:'Search',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        startSearch(){
            //请求前更新List的数据
            this.$bus.$emit('userList',[],{
                isFirst:false,
                isLoading:true
            })
            //不使用axios 使用插件带的$http 是一样的效果，不过用的少
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    this.$bus.$emit('userList',response.data.items,{
                        isLoading:false
                    })
                },
                error => {
                    this.$bus.$emit('userList',[],{
                        isLoading:false,
                        errMsg:error.message
                    })
                }
            )
        }
    }
}
</script>

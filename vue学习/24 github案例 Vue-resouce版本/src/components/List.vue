<template>
    <div>
        <div class="row">
            <div v-show="users.length" class="card" v-for="item in users" :key="item.id">
                <a :href="item.html_url" target="_blank">
                <img :src="item.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{item.login}}</p>
            </div>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="status.isFirst">Hello</h1>
        <!-- 展示加载中 -->
        <h1 v-show="status.isLoading">加载中。。。</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="status.errMsg">{{status.errMsg}}</h1>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            users:[],
            status:{
                isFirst:true,
                isLoading:false,
                errMsg:''
            }
        }
    },
    mounted(){
        this.$bus.$on('userList',(userList,statusref)=>{
            this.users = userList;
            //对象展开+合并,覆盖需要的
            this.status = {...this.status ,...statusref}
            console.log(this);
            
        })
    }
}
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
    }
.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }
    
    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }
    
    .card-text {
    font-size: 85%;
    }  
</style>
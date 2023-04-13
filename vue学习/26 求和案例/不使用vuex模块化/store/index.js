//该文件用于创建Vue中最为核心的store
//引入Vue
import Vue from 'vue'

//在这引入可以避免在use Vuex之前就创建了store造成报错
//引入Vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex);

//准备actions 用于响应组件中的动作
const actions = {

    //context是上下文对象
    //value是点击时候传入的n
    addOdd(context, value) {
        console.log("actions");
        context.commit('ADDODD', value)
    },
    addWait(context, value) {
        console.log("actions");
        context.commit('ADDWAIT', value);
    }
}

//准备mutations 用于操作数据（）
const mutations = {
    //这里用大写的函数是为了区分上面的小写函数，使用大写的目的是类似于后端的操作数据库的持久层
    ADD(state, value) {
        console.log('mutation')
        state.sum += value
    },
    DECR(state, value) {
        console.log('mutation')
        state.sum -= value
    },
    ADDODD(state, value) {
        console.log('mutation')
        if (state.sum % 2) {
            state.sum += value;
        }
    },
    ADDWAIT(state, value) {
        setTimeout(() => {
            this.state.sum += value;
        }, 500)
    },
    ADD_PERSON(state, value) {
        console.log('mutations: ADD_PERSON');
        this.state.personList.unshift(value)
    }
}

//准备state 用于存储数据
const state = {
    // 公共sum
    sum: 0,
    nickname: 'minikano',
    age: 21,
    personList: [
        { id: '001', name: '张三' }
    ]
}

//准备一个getters ，用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


//准备store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


//导出
export default store
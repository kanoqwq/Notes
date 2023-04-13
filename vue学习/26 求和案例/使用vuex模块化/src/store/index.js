//该文件用于创建Vue中最为核心的store
//引入Vue
import Vue from 'vue'

//在这引入可以避免在use Vuex之前就创建了store造成报错
//引入Vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex);

import axios from 'axios';
import { nanoid } from 'nanoid'

//模块化写法
//求和功能相关的配置
const countOptions = {
    //开启命名空间
    namespaced: true,
    actions: {
        //context是上下文对象
        //value是点击时候传入的n
        addOdd(context, value) {
            console.log("actions:addOdd");
            context.commit('ADDODD', value)
        },
        addWait(context, value) {
            console.log("actions:addWait");
            context.commit('ADDWAIT', value);
        }
    },
    mutations: {
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
                state.sum += value;
            }, 500)
        },
    },
    state: {
        // 公共sum
        sum: 0,
        nickname: 'minikano',
        age: 21
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

//人员管理功能相关的配置
const personOptions = {
    //开启命名空间
    namespaced: true,
    actions: {
        //反老王
        addPersonNotWang(context, value) {
            if (value.name.trim() != '' && value.name.trim().indexOf('王') !== 0 && value.name.trim().replace('老王', '') == value.name.trim()) {
                context.commit('ADD_PERSON', value)
            } else {
                console.log('反老王');
            }
        },
        addHitokotoOnServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=a&encode=text').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert('hitokoto API error ')
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations: ADD_PERSON');
            if (value.name.trim() != '') {
                state.personList.unshift(value)
            }
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}

//准备store
const store = new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
    // actions,
    // mutations,
    // state,
    // getters
})


//导出
export default store
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入插件
import VueResource from 'vue-resource';
//使用插件
Vue.use(VueResource);
//引入store
import store from './store';



new Vue({
    render: h => h(App),
    store, //挂载为了$store
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')
//引入的不再是Vue的构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'


//创建应用实例对象，并挂载
//创建的这个app比vm更清量
const app = createApp(App)
app.mount('#app')
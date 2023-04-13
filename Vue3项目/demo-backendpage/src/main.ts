import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { initRouter } from "@/router";
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
const app = createApp(App).use(createPinia());
initRouter(app)
app.mount("#app");

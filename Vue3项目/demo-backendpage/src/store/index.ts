import { LoginStore } from "./LoginStore";
import { homePageStore } from "./homePageStore";
import { createPinia } from "pinia";
//这个pinia可以在局部使用
const pinia = createPinia();
export { LoginStore, homePageStore, pinia };

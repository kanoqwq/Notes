import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";
import { App } from "vue";
import { getItem } from "@/utils/Storage";
import { getToken } from "@/utils/token";
import { pinia, homePageStore } from "@/store";
import { ElMessage } from "element-plus";
const store = homePageStore(pinia);
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
    name: "home",
    component: () => import("@/views/HomePage/HomePage.vue"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/Index/Index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: () => import("@/views/HomePage/HomePage.vue"),
  },
  {
    path: "/:404(.*)",
    component: () => import("@/views/404.vue"),
  },
  //需要动态生成
  // {
  //   path: "/pms",
  //   name: "Pms",
  //   component: () => import("@/views/HomePage/HomePage.vue"),
  //   children: [
  //     {
  //       path: "product",
  //       name: "Product",
  //       component: () => import("@/views/Pms/Product.vue"),
  //     },
  //   ],
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// //前置导航守卫
router.beforeEach((to, from, next) => {
  console.log(from.path + "=>" + to.path);
  // 判断token，menu是否为空
  if (getToken() && getItem("adminInfo") && to.path == "/login") {
    ElMessage({
      type: "warning",
      message: "您已登录！",
    });
    next(from);
  } else if ((!getToken() || !getItem("adminInfo")) && to.path != "/login") {
    // alert("未登录");
    ElMessage({
      type: "error",
      message: "登录过期，请重新登录",
    });
    next("/login");
  }

  //当store.$state.menus没有初始化好的时候才需要执行
  else if (
    getToken() &&
    getItem("adminInfo") &&
    store.$state.menus.length == 0
  ) {
    //循坏菜单对象(动态路由)
    const menus = store.getMenus as NewMenu;
    //遍历添加路由,遍历创建路由
    for (let key in menus) {
      //获取一级路由
      const newRoutes: RouteRecordRaw = {
        path: "/" + menus[key].name,
        name: menus[key].name,
        // 一级菜单自动重定向到第一个子项
        redirect: "/" + menus[key].name + "/" + menus[key].children[0].name,
        component: () => import("@/views/HomePage/HomePage.vue"),
        children: [],
      };
      //遍历创建二级路由
      for (let i = 0; i < menus[key].children.length; i++) {
        newRoutes.children?.push({
          path: menus[key].children[i].name,
          name: menus[key].children[i].name,
          component: () =>
            import(
              `@/views/${menus[key].name}/${menus[key].children[i].name}.vue`
            ).catch((e) => {
              ElMessage("此功能未开发哦");
            }),
        });
      }
      //添加路由到全局
      router.addRoute(newRoutes);
    }
    //防止白屏，因为next的时候其实动态路由并没有初始化好，所以还需要to.path执行一次路由守卫
    next(to.path);
  } else {
    next();
  }
});

//按需调用
export const initRouter = (app: App<Element>) => {
  app.use(router);
};

import { defineStore } from "pinia";
import { getItem, setItem } from "@/utils/Storage";
export const homePageStore = defineStore("homePageStore", {
  state: () => {
    return {
      menus: new Array<Menu>(),
    };
  },
  actions: {},
  getters: {
    // 处理一下menu数组
    getMenus(state): NewMenu | undefined {
      if (this.menus.length) {
        return this.menus;
      }
      //从本地存储中获取菜单
      let menu = (getItem("adminInfo") as AdminInfo).menus;
      const newMenu = <NewMenu>{};
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].parentId === 0) {
          //一级菜单
          //这里需要转换为menu[i]为普通对象，这样才能添加属性
          newMenu[menu[i].id] = {
            ...menu[i],
            children: newMenu[menu[i].id]?.children || [],
          };
        } else {
          //二级菜单
          //如果先遍历到的是二级菜单，我们无法跳过，但我们可以给newMenu[parentId] 一个空对象
          //然后在空对象中添加children属性为空数组，再将二级菜单push进去
          let parentId = menu[i].parentId;
          newMenu[parentId] = newMenu[parentId] || {};
          newMenu[parentId].children = newMenu[parentId].children || [];
          newMenu[parentId]?.children.push(menu[i]);
        }
      }
      // console.log(newMenu);
      if (menu.length) {
        state.menus = [...menu];
        return newMenu;
      } else {
        return undefined;
      }
    },
  },
});

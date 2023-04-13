import { defineStore } from "pinia";
import { getToken, setToken } from "@/utils/token";
import { getItem, setItem } from "@/utils/Storage";
//LoginStore
export const LoginStore = defineStore("LoginStore", {
  state: () => {
    return {
      token: getToken(),
      adminInfo: (getItem("adminInfo") as AdminInfo) || {},
    };
  },
  actions: {
    // ...
    addToken(token: string) {
      this.token = token;
      setToken(token);
    },
    addAdminInfo(info: AdminInfo) {
      this.adminInfo = info;
      setItem("adminInfo", info);
    },
  },
  getters: {
    // ...
    // doubleCount: (state) => state.counter * 2,
  },
});

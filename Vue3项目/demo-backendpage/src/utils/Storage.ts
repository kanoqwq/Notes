import { getAdminInfo } from "@/api/Login";
// import { pinia } from "@/store/";
export const setItem = (name: string, obj: object): void => {
  return localStorage.setItem(name, JSON.stringify(obj));
};
export const getItem = (name: string): object | null => {
  let res = localStorage.getItem(name);
  if (res) {
    return JSON.parse(res);
  } else {
    //手动获取
    // return getAdminInfo()
    //   .then((res) => {
    //     if (res.data.code == 200) {
    //       return res.data;
    //     } else {
    //       return null;
    //     }
    //   })
    //   .catch((e) => {});
    return null;
  }
};

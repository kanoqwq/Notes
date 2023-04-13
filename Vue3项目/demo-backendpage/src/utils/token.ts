import Cookie from "js-cookie";
//获取token
export const getToken = () => {
  return Cookie.get("token");
};
export const clearToken = () => {
  return Cookie.remove("token");
};
//设置token
export const setToken = (token: string) => {
  Cookie.set("token", token, { expires: 7 });
};

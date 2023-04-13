import axios from "@/api/request";
import { AxiosResponse } from "axios";

//发送登录请求(泛型套娃)
export const Login = (
  data: LoginApiData
): Promise<AxiosResponse<ResResult<LoginApiRes>>> => {
  return axios.post("/admin/login", data);
};

//获取当前登录用户信息
export const getAdminInfo = (): Promise<
  AxiosResponse<ResResult<AdminInfo>>
> => {
  return axios.get("/admin/info");
};

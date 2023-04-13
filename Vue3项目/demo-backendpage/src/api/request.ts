import axios from "axios";
import { LoginStore } from "@/store/";
import { getToken } from "@/utils/token";
const store = LoginStore();
// import { ElMessage } from "element-plus";
const request = axios.create({
  baseURL: "http://120.24.64.5:8088/mall-admin",
  timeout: 11111,
});

request.interceptors.request.use(
  (config) => {
    // console.log(store.$state.token);
    config.headers.Authorization = getToken();
    return config;
  },
  (err) => {
    throw new Error(err);
  }
);

request.interceptors.response.use(
  (config) => {
    if (config.status !== 200 && config.data.code !== 200) {
      throw new Error(config.data.message);
    }
    return config;
  },
  (err) => {
    throw new Error(err.message);
  }
);

export default request;

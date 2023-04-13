import axios from "@/api/request";
import { AxiosResponse } from "axios";

//获取首页数据
export const getHomePageInfo = (): Promise<
  AxiosResponse<ResResult<IndexData>>
> => {
  return axios.get("http://kumanxuan1.f3322.net:8360/admin/stat");
};

import axios from "@/api/request";
import { AxiosResponse } from "axios";

//获取用户数据列表
export const getAdminList = (
  data: AdminListParams
): Promise<AxiosResponse<ResResult<AdminListResponse>>> =>
  axios.get("/admin/list", { params: data });

//修改/添加用户信息
export const updateAdmin = (
  id: number | undefined,
  data: AdminList
): Promise<AxiosResponse<ResResult<AdminList>>> => {
  if (id != undefined) {
    return axios.post(`/admin/update/${id}`, data);
  } else {
    return axios.post(`/admin/register`, data);
  }
};
//获取所有角色
export const getRoleListAll = (): Promise<
  AxiosResponse<ResResult<Array<UserRole>>>
> => axios.get("/role/listAll");

//获取指定用户的角色
export const getRoleListUser = (
  adminId: number
): Promise<AxiosResponse<ResResult<Array<UserRole>>>> =>
  axios.get(`/admin/role/${adminId}`);

//给用户分配角色
export const updateUserRole = (
  data: userRoleUpdateParams
): Promise<AxiosResponse<any>> =>
  axios.post("/admin/role/update", null, {
    params: { adminId: data.adminId, roleIds: data.roleIds.join(",") },
  });

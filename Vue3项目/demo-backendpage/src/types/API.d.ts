declare interface ResResult<T> {
  code?: number;
  data: T;
  message?: string;
}

//登录时要发送的结构
declare interface LoginApiData {
  username: string;
  password: string;
}

//正常登录的返回体
declare interface LoginApiRes {
  token: string;
  tokenHead: string;
}

//用户信息
declare interface AdminInfo {
  icon?: string;
  roles: string[];
  username: string;
  menus: Menu[];
}

//menu
declare interface Menu {
  children: Menu[];
  id: number;
  parentId: number;
  createTime: string;
  title: string;
  level: number;
  sort: number;
  name: string;
  icon: string;
  hidden: number;
}

interface NewMenu {
  [key: number]: Menu;
}

//用户数据请求体
interface AdminListParams {
  keyword: string;
  pageNum: number;
  pageSize: number;
}
//用户数据响应体
interface AdminListResponse {
  pageNum: number;
  pageSize: number;
  totalPage: number;
  total: number;
  list: AdminList[];
}

interface AdminList {
  id: number;
  username: string;
  password: string;
  icon?: any;
  email: string;
  nickName: string;
  note?: string;
  createTime: string;
  loginTime?: any;
  status: number;
  loading?: boolean;
  btnLoading?: boolean;
}

//全部/指定角色列表
interface UserRole {
  btnLoading: boolean;
  id: number;
  name?: string;
  description?: string;
  adminCount: number;
  createTime: string;
  status?: number;
  sort: number;
}

//更新用户角色请求体
interface userRoleUpdateParams {
  adminId: number;
  roleIds: number[];
}

//首页图标数据
interface IndexData {
  saleMap: saleMap[];
  salePie: salePie[];
}
interface salePie {
  today_money: string;
  name: string;
}

interface saleMap {
areaName: any;
saleNum: any;
areaName: any;
saleNum: any;
  today_money: string;
  name: string;
}

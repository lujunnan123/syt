import type {HosPitalDetail,DepartmentArr, UserInfo} from '@/api/hospital/type'
// 定义仓库内部存储数据state的ts类型
export interface DetailState{
    hospitalInfo:HosPitalDetail,
    departmentArr:DepartmentArr
}

// 定义user仓库储存数据ts类型
export interface UserState{
     visiable:boolean,
     code:string,
     userInfo:UserInfo
}
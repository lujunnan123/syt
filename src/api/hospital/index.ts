// 统一管理首页模块接口
import request from "@/utils/request";
import { HospitalDetail,DepartmentResponseData } from "./type";
enum API{
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARMENT_URL = '/hosp/hospital/department/'
}
// 医院详情接口
export const reqhosDetail = (hoscode:string)=>request.get<any,HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode);
// 医院科室接口
export const reqhosApart = (hoscode:string) =>request.get<any,DepartmentResponseData>(API.HOSPITALDEPARMENT_URL+hoscode)
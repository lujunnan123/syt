// 统一管理首页模块接口
import request from "@/utils/request";
import { HospitalDetail,DepartmentResponseData,LoginData, UserInfoResponseData, } from "./type";
enum API{
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARMENT_URL = '/hosp/hospital/department/',
    GETUSERCODE_URL = '/sms/send/',
    USERLOGIN_URL = '/user/login'
}
// 医院详情接口
export const reqhosDetail = (hoscode:string)=>request.get<any,HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode);
// 医院科室接口
export const reqhosApart = (hoscode:string) =>request.get<any,DepartmentResponseData>(API.HOSPITALDEPARMENT_URL+hoscode);
// 短信验证码接口
export const reqCode = (phone:string)=>request.get(API.GETUSERCODE_URL+phone)
// 用户登录接口
export const reqUserLogin = (data:LoginData)=>request.post<any,UserInfoResponseData>(API.USERLOGIN_URL,data)
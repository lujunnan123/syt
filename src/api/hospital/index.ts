// 统一管理首页模块接口
import request from "@/utils/request";
import { HospitalDetail } from "./type";
enum API{
    HOSPITALDETAIL_URL = '/hosp/hospital/'
}
// 医院详情接口
export const reqhosDetail = (hoscode:string)=>request.get<HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode);
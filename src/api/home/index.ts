// 统一管理首页模块接口
import request from "@/utils/request";
import type { HospitalResponseData,HospitalLevelAndregionResponseData } from "./type";
// 通过枚举管理首页模块的接口地址
enum API{
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital/',
    // 获取医院等级和地区接口地址
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/'
}

//获取医院的数据
export const reqHospital = (page:number,limit:number)=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}`)
// 获取医院等级和地区数据
export const reqHospitalLevelAndregion = (dictcode:string)=>request.get<any,HospitalLevelAndregionResponseData>(API.HOSPITALLEVELANDREGION_URL+dictcode)
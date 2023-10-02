// 统一管理首页模块接口
import request from "@/utils/request";
import type { HospitalResponseData,HospitalLevelAndregionResponseData,HospitalInfo } from "./type";
// 通过枚举管理首页模块的接口地址
enum API{
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital/',
    // 获取医院等级和地区接口地址
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/',
    // 根据关键词获取医院的名字获取数据
    HOSPITALINFO_URL='/hosp/hospital/findByHosname/'
}

//获取医院的数据
export const reqHospital = (page:number,limit:number,hostype='',districtCode='')=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
// 获取医院等级和地区数据
export const reqHospitalLevelAndregion = (dictcode:string)=>request.get<any,HospitalLevelAndregionResponseData>(API.HOSPITALLEVELANDREGION_URL+dictcode)
// 根据关键词获取医院的名字获取数据
export const reqHospitalInfo = (hosname:string)=>request.get<HospitalInfo>(API.HOSPITALINFO_URL+hosname);
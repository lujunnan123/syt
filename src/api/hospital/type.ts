
// 定义详情页ts数据类型
export interface ResponseData{
    "code": number,
    "message": string,    
    "ok": boolean
}
// 代表医院详情的数据
export interface HosPitalDetail{
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": [
            string
        ]
      },
      "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted":number,
        "param": {
          "hostypeString": string,
          "fullAddress": string
        },
        "hoscode":string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": string,
        "route": string,
        "status": number,
        "bookingRule": null
      }
}
// 响应数据
export interface HospitalDetail extends ResponseData{
    data:HosPitalDetail
}

// 代表医院科室的数据
export interface Department{
    "depcode": string,
    "depname": string,
    "children"?: Department[]
}
// 代表存储科室数组类型
export type DepartmentArr = Department[];
// 获取科室接口返回数据类型
export interface DepartmentResponseData extends ResponseData{
  data: DepartmentArr
}

// 用户登录接口 需要携带参数类型
export interface LoginData {
  code:string,
  phone:string,
}
// 用户登录接口 返回用户信息数据
export interface UserInfo{
  name:string,
  token:string
}
// 用户登录接口 返回的数据的ts类型
export interface UserInfoResponseData extends LoginData{
  data:UserInfo
}




// 医院挂号信息数据类型
export interface baseMap {
  "workDateString": string,
  "releaseTime": string,
  "bigname": string,
  "stopTime": string,
  "depname": string,
  "hosname": string

}
export interface WorkData {
  "workDate": string,
  "workDateMd": string,
  "dayOfWeek": string,
  "docCount": number,
  "reservedNumber": number,
  "availableNumber": number,
  "status": number
}
export type BookingScheduleList = WorkData[]
export interface HospitalWorkData extends ResponseData{
  data:{
    "total": number,
    "bookingScheduleList": BookingScheduleList
    "baseMap": baseMap
  }
}

// 代表一个医生数据
export interface Doctor{
      "id": string,
      "createTime": string,
      "updateTime": string,
      "isDeleted": number,
      "param": {
        "dayOfWeek": string,
        "depname": string,
        "hosname": string
      },
      "hoscode": string,
      "depcode": string,
      "title": string,
      "docname":string,
      "skill": string,
      "workDate":string,
      "workTime": number,
      "reservedNumber": number,
      "availableNumber":number,
      "amount": number,
      "status": number,
      "hosScheduleId": string
   
}
export type DoctorArr = Doctor[]
// 获取医生排班接口返回的数据
export interface DoctorData extends ResponseData{
  data:DoctorArr
}
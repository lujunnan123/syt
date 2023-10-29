import request from "@/utils/request";
import type {AddOrUpdataUser, AllUserResponseData, CancelOrdeData, CertationTypeResponseData, OrderInfoResponseData, OrderResponseData, OrderStateRespoonseData, SubmitOrder, UserInfoData, UserParams, addressResponseData} from "./type"

enum API{
    // 提交订单，获取订单号码接口
   SUBMITORDER_URL="/order/orderInfo/auth/submitOrder/",
   GETORDERINFO_URL = "/order/orderInfo/auth/getOrderInfo/",
   ORDERCANCEL_URL = "/order/orderInfo/auth/cancelOrder/",
   QRCODE_URL = "/order/weixin/createNative/",
   //获取当前账号用户信息
   USERINFO_URL = "/user/auth/getUserInfo/",
   CERTIFICATIONTYPE_URL="/cmn/dict/findByDictCode/",
   USERCERTATION_URL = "/user/auth/userAuah/",
   ORDER_URL="/order/orderInfo/auth/",
   ALLPATIENT_URL="/user/patient/auth/findAll/",
   ORDERSTATE_URL= "/order/orderInfo/auth/getStatusList",
   CITY_URL = "/cmn/dict/findByParentId/",
   ADDUSER_URL="/user/patient/auth/save",
   UPDATAUSER_USER="/user/patient/auth/update"
}
// 提交订单
export const reqSubmitOrder = (hoscode:string,scheduleId:string,patientId:number)=>request.post<any,SubmitOrder>(API.SUBMITORDER_URL+`/${hoscode}/${scheduleId}/${patientId}`)
// 获取订单详情
export const reqOrderInfo = (id:string)=>request.get<any,OrderResponseData>(API.GETORDERINFO_URL+id)
// 取消订单
export const reqCancelOrder = (id:string)=>request.get<any,CancelOrdeData>(API.ORDERCANCEL_URL+id)
// 获取支付订单二维码接口
export const reqQrcode = (orderId:string)=>request.get(API.QRCODE_URL+orderId)
//获取当前账号用户信息
export const reqUserInfo = ()=>request.get<any,UserInfoData>(API.USERINFO_URL)
// 获取证件类型的方法
export const reqCertationType = (CertificatesType='CertificatesType')=>request.get<any,CertationTypeResponseData>(API.CERTIFICATIONTYPE_URL+CertificatesType)
// 用户认证接口
export const reqUserCertation = (data:UserParams)=>request.post<any,any>(API.USERCERTATION_URL+data)
// 全部订单查询
export const reqUserOrderInfo = (page:number,limit:number,patientId:string,orderStatus:string)=>request.get<any,OrderInfoResponseData>(API.ORDER_URL+`/${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`)
// 获取当前账号所有就诊人
export const reqAllUser = ()=>request.get<any,AllUserResponseData>(API.ALLPATIENT_URL)
// 获取订单的状态
export const reqOrderState = ()=> request.get<any,OrderStateRespoonseData>(API.ORDERSTATE_URL)
// 获取城市数据
export const reqCity = (parentId:string)=>request.get<any,addressResponseData>(API.CITY_URL+parentId)
// 新增与修改已有的就诊人接口方法
export const reqAddOrUpdataUser = (data:AddOrUpdataUser)=>{
    if(data.id){
        return request.put(API.UPDATAUSER_USER+data)
    }else{
        return request.get(API.ADDUSER_URL)
    }
}
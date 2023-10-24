import request from "@/utils/request";
import type {CancelOrdeData, OrderResponseData, SubmitOrder, UserInfoData} from "./type"
enum API{
    // 提交订单，获取订单号码接口
   SUBMITORDER_URL="/order/orderInfo/auth/submitOrder/",
   GETORDERINFO_URL = "/order/orderInfo/auth/getOrderInfo/",
   ORDERCANCEL_URL = "/order/orderInfo/auth/cancelOrder/",
   QRCODE_URL = "/order/weixin/createNative/",
   //获取当前账号用户信息
   USERINFO_URL = "/user/auth/getUserInfo"
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
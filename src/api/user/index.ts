import request from "@/utils/request";
import type {SubmitOrder} from "./type"
enum API{
    // 提交订单，获取订单号码接口
   SUBMITORDER_URL="/order/orderInfo/auth/submitOrder/"
}
export const reqSubmitOrder = (hoscode:string,scheduleId:string,patientId:number)=>request.post<any,SubmitOrder>(API.SUBMITORDER_URL+`/${hoscode}/${scheduleId}/${patientId}`)
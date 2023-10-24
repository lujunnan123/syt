export interface ResponseData {
    "code": number,
    "message": string,
    "ok": boolean
}
// 提交订单接口，返回的数据的ts类型
export interface SubmitOrder extends ResponseData {
    data: string
}
// 订单详情数据ts类型
export interface OrderInfo {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "orderStatusString": string
    },
    "userId": number,
    "outTradeNo": string,
    "hoscode": string,
    "hosname": string,
    "depcode": string,
    "depname": string,
    "scheduleId": string,
    "title": string,
    "reserveDate": string,
    "reserveTime": number,
    "patientId": number,
    "patientName": string,
    "patientPhone": string,
    "hosRecordId": string,
    "number": number,
    "fetchTime": string,
    "fetchAddress": string,
    "amount": number,
    "quitTime": string,
    "orderStatus": number
}
export interface OrderResponseData extends ResponseData {
    data: OrderInfo
}
// 取消订单返回数据ts类型
export interface CancelOrdeData extends ResponseData {
    data: boolean
}

// 就诊人信息
export interface UserInfo {    
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {},
    "openid": null,
    "nickName": null,
    "phone": string,
    "name": string,
    "certificatesType": string,
    "certificatesNo": string,
    "certificatesUrl": string,
    "authStatus": number,
    "status": number
}
export interface UserInfoData extends ResponseData{
    data:UserInfo
}
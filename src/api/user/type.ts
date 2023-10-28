import { type } from "os"

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
export interface UserInfoData extends ResponseData {
    data: UserInfo
}

// 代表证件类型的数据ts
export interface CertationType {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {},
    "parentId": number,
    "name": string,
    "value": string,
    "dictCode": string,
    "hasChildren": boolean
}
export type CertationArr = CertationType[]
export interface CertationTypeResponseData extends ResponseData {
    data: CertationArr
}

// 用户认证的携带参数ts类型
export interface UserParams {
    "certificatesNo": string,
    "certificatesType": string,
    "certificatesUrl": string,
    "name": string
}

// 挂号订单ts
export interface Order {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "orderStatusString": string
    },
    "userId": null,
    "outTradeNo": string,
    "hoscode": string,
    "hosname": string,
    "depcode": string,
    "depname": string,
    "scheduleId": null,
    "title": string,
    "reserveDate": string,
    "reserveTime": number,
    "patientId": number,
    "patientName": null,
    "patientPhone": null,
    "hosRecordId": string,
    "number": number,
    "fetchTime": string,
    "fetchAddress": string,
    "amount": number,
    "quitTime": string,
    "orderStatus": number
}
export type Records = Order[]
export interface OrderInfoResponseData extends ResponseData {
    data: {
        "records":Records,
        "total": number,
        "size": number,
        "current": number,
        "orders": [],
        "hitCount": boolean,
        "searchCount": boolean,
        "pages": number
    }
}

// 就诊人信息数据类型
export interface patient{
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "certificatesTypeString": string,
        "contactsCertificatesTypeString": null,
        "cityString": null,
        "fullAddress": string,
        "districtString": null,
        "provinceString": null
    },
    "userId": number,
    "name": string,
    "certificatesType": string,
    "certificatesNo": string,
    "sex": number,
    "birthdate": null,
    "phone": string,
    "isMarry": number,
    "provinceCode": null,
    "cityCode": null,
    "districtCode": null,
    "address": "",
    "contactsName": string,
    "contactsCertificatesType": string,
    "contactsCertificatesNo": string,
    "contactsPhone": string,
    "isInsure": number,
    "cardNo": null,
    "status": string
}
export type AllUser = patient[]
export interface AllUserResponseData extends ResponseData{
    data:AllUser
}
export interface OrderState{
    "comment":string,
    "status": number
}
// 订单状态ts
export type OrderArr = OrderState[];
export interface OrderStateRespoonseData extends ResponseData{
    data:OrderArr
}
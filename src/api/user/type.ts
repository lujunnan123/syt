export interface ResponseData{
    "code": number,
    "message": string,
    "ok": boolean
}
// 提交订单接口，返回的数据的ts类型
export interface SubmitOrder extends ResponseData{
    data:string
}
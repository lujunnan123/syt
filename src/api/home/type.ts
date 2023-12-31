//定义首页模块ts数据类型
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

// 代表已有的医院数据的ts类型
export interface Hospital {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "hostypeString": string,
        "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode": string,
    "address": string,
    "logoData": string
    "intro": string,
    "route": string,
    "status": number,
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    }
}

//存储全部已有医院的数据类型
export type Content = Hospital[];

// 获取已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData {
    data:{
        content: Content,   
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "unpaged": boolean,
            "paged": boolean
        },
        "totalPages": number,
        "last": boolean,
        "totalElements": number,
        "first": boolean,
        "sort": {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean

        },
}


// 代表医院等级或者地区数据ts类型
export interface HospitalLevelAndregion{
    "createTime": string,
    "dictCode": string,
    "hasChildren": false,
    "id": number,
    "isDeleted":number,
    "name": string,
    "param": {},
    "parentId": number,
    "updateTime": string,
    "value": string
}
export type HospitalLevelAndregionArr = HospitalLevelAndregion[];
// 获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndregionResponseData extends ResponseData{
    data:HospitalLevelAndregionArr
}

// 根据关键词获取医院的名字获取数据
export interface HospitalInfo extends ResponseData{
    data:Content
}
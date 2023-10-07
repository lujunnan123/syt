import {defineStore} from "pinia"
import { reqhosDetail,reqhosApart } from "@/api/hospital/index";
import { DetailState } from "./interface";
import type {DepartmentResponseData, HosPitalDetail, HospitalDetail} from '@/api/hospital/type'
const useDetailStore = defineStore('Detail',{
    state:():DetailState=>{
        return {
            // 医院详情数据
            hospitalInfo:({} as HosPitalDetail),
            // 医院科室数据
            departmentArr:[]
        }
    } ,
    actions:{
        // 获取医院详情的方法
        async getHospital(hoscode:string){
           let result:HospitalDetail = await reqhosDetail(hoscode)
           if(result.code == 200){
            this.hospitalInfo =result.data;
           }           
        },
        // 获取医院科室信息的方法
        async getDepartment(hoscode:string){
            let result:DepartmentResponseData = await reqhosApart(hoscode)
            if(result.code == 200){
                this.departmentArr = result.data
            }            
        }
    },
    getters:{

    }
})
export default useDetailStore;
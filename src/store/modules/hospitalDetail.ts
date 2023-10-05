import {defineStore} from "pinia"
import { reqhosDetail } from "@/api/hospital/index";
import {HospitalDetail} from "@/api/hospital/type"
const useDetailStore = defineStore('Detail',{
    state:()=>{
        return {
            // 医院详情数据
            hospitalInfo:{}
        }
    } ,
    actions:{
        // 获取医院详情的方法
        async getHospital(hoscode:string){
           let result:HospitalDetail = await reqhosDetail(hoscode)
           if(result.code == 200){
            this.hospitalInfo =result.data;
           }
           
        }
    },
    getters:{

    }
})
export default useDetailStore;
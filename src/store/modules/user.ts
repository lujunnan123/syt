import { defineStore } from "pinia";
import { reqCode, reqUserLogin } from '@/api/hospital/index'
import { LoginData, UserInfoResponseData } from "@/api/hospital/type";
import type { UserState } from "./interface";
import { GET_TOKEN,REMOVE_TOKEN,SET_TOKEN } from "@/utils/user";

const useUserStore = defineStore('User',{
    state:():UserState=>{
        return {
            // 控制登录框是否显示
            visiable:false,
            code:'',
            userInfo:JSON.parse(GET_TOKEN()  as string) || {}
        }
    },
    actions:{
        // 获取验证码
        async getCode(phone:string){
            let res:any = await reqCode(phone);
            if(res.code == 200){
                this.code = res.data;
                return 'ok'
            }else{
                return Promise.reject(new Error(res.message))
            }
        },
        // 用户登录
        async userlogin(param:LoginData){
           let res:UserInfoResponseData = await reqUserLogin(param);
           if(res.code == 200){            
                this.userInfo = res.data;
                // 本地存储 持久化存储用户信息
                SET_TOKEN(JSON.stringify(this.userInfo))
                // 返回一个成功的Promise
                return 'ok'
           }else{
            return Promise.reject(new Error(res.message));
           }
        },
        // 退出登录
        logout(){
            // 清空仓库数据
            this.userInfo = {name:'',token:''};            
            // 清空本地存储数据
            REMOVE_TOKEN();

        }
    },
    getters:{

    }
})
export default useUserStore;
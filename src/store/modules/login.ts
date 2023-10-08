import { defineStore } from "pinia";
const useLoginStore = defineStore('Login',{
    state:()=>{
        return {
            // 控制登录框是否显示
            visiable:false
        }
    },
    actions:{

    },
    getters:{

    }
})
export default useLoginStore;
// 对于axios函数库进行二次封装
import useUserStore from '@/store/modules/user'
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 利用axios.create方法创建一个axios实例：可以设置基础路由、超时的时间的设置
const request = axios.create({
    baseURL:'/api', //  请求的基础路径(所有接口共有路径)
    timeout:5000,// 超时时间设置：超出5s请求失败
})
// 请求拦截器
request.interceptors.request.use((config)=>{
    // config:请求拦截器回调注入的对象，配置对象的身上最重要的一件事headers属性
      // 获取仓库，将token作为全局请求参数，放入请求头
      let userStore = useUserStore()
      if(userStore.userInfo.token){
          config.headers.token = userStore.userInfo.token;
      }
    return config
})
// 响应拦截器
request.interceptors.response.use((response)=>{
    // 成功回调，一般会简化数据
    return response.data;
},(error)=>{
    // 处理http网络错误
    console.log(error);
    
    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type:'error',
                message:'请求失败路径出现错误'
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type:'error',
                message:'服务器挂了'
            })    
            break;
        case 401:
            ElMessage({
                type:'error',
                message:'参数有误'
            })
    }

    return Promise.reject(new Error(error.message))
})

// 对外暴露axios
export default request
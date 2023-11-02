// 路由鉴权
// 引入路由器
import router from "./router";
// 引入进度条
import Nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css"
// 引入大仓库
import pinia from "@/store";
import useUserStore from "./store/modules/user";
let userStore = useUserStore(pinia)
// 修改进度条样式：取消加载小球旋转样式
Nprogress.configure({ showSpinner: false });
// 存储用户未登录 可以访问的路径
let whiteList = ["/home","/hospital/register","/hospital/detail","/hospital/notice","/hospital/close","/hospital/search"]

// 添加相应的全局守卫
// 前置守卫
router.beforeEach((to,from,next)=>{
    // 进度条开始动
    Nprogress.start();
    //动态设置网页标题
    document.title= `尚医通-${to.meta.title}`;
    // 判断用户是否登录 根据pinia仓库中的token
    let token = userStore.userInfo.token;
    if(token){
        // 用户登录了
        next();
    }else{
        // 用户未登录
        if(whiteList.includes(to.path)){
            next();
        }else{
            // 未登录的用户访问显示登录组件，并登完后跳转至首页
            userStore.visiable = true;
            next({path:'/home',query:{redirect:to.fullPath}})
        }
    }
})
// 后置守卫
router.afterEach((to,from)=>{
    Nprogress.done();
})
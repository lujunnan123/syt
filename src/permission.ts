// 路由鉴权
// 引入路由器
import router from "./router";
// 引入进度条
import Nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css"
// 修改进度条样式：取消加载小球旋转样式
Nprogress.configure({ showSpinner: false });
// 添加相应的全局守卫
// 前置守卫
router.beforeEach((to,from,next)=>{
    // 进度条开始动
    Nprogress.start();
    //动态设置网页标题
    document.title= `尚医通-${to.meta.title}`
    next();
})
// 后置守卫
router.afterEach((to,from)=>{
    Nprogress.done();
})
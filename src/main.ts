// vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'
// 引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/login/index.vue'
// 引入router
import router from '@/router'
// 引入Element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入ElementPlus国际化文件
    //@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入pinia仓库
import pinia from '@/store'
// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App)
// 注册全局组件
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.component('Login',Login)
app.use(router)
// 安装pinia仓库
app.use(pinia)
app.use(ElementPlus,{locale: zhCn})
app.mount('#app')

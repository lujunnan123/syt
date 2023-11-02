import { createRouter, createWebHistory } from 'vue-router';
// createRouter方法，用于创建路由器实例，可以管理多个路由
export default createRouter({
    // 路由模式设置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
            meta:{
                title:'首页'
            }
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'close',
                    component: () => import('@/pages/hospital/close/index.vue'),
                    meta:{
                        title:'停诊信息'
                    }
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/detail/index.vue'),
                    meta:{
                        title:'详情'
                    }
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/notice/index.vue'),
                    meta:{
                        title:'挂号注意'
                    }
                },
                {
                    path: 'register',
                    component: () => import('@/pages/hospital/register/index.vue'),
                    meta:{
                        title:'用户注册'
                    }
                   
                },
                {
                    path: 'search',
                    component: () => import('@/pages/hospital/search/index.vue'),
                    meta:{
                        title:'搜索'
                    }
                },
                {
                    path:'register_step1',
                    component:() => import('@/pages/hospital/register/register_step1.vue'),
                    meta:{
                        title:'注册一步'
                    }
                },
                {
                    path:'register_step2',
                    component:() => import('@/pages/hospital/register/register_step2.vue'),
                    meta:{
                        title:'注册二步'
                    }
                }
            ]
        },
        // 路由重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/user',
            component:() => import('@/pages/user/index.vue'),
            children:[
                {
                    path:'certification',
                    component:()=>import('@/pages/user/certification/index.vue'),
                    meta:{
                        title:'实名认证'
                    }
                },
                {
                    path:'feedback',
                    component:()=>import('@/pages/user/feedback/index.vue'),
                    meta:{
                        title:'意见反馈'
                    }
                },
                {
                    path:'order',
                    component:()=>import('@/pages/user/order/index.vue'),
                    meta:{
                        title:'挂号订单'
                    }
                },
                {
                    path:'patient',
                    component:()=>import('@/pages/user/patient/index.vue'),
                    meta:{
                        title:'就诊人管理'
                    }
                },
                {
                    path:'profile',
                    component:()=>import('@/pages/user/profile/index.vue'),
                    meta:{
                        title:'账号信息'
                    }
                }
            ]
        }
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
import { createRouter, createWebHistory } from 'vue-router';
// createRouter方法，用于创建路由器实例，可以管理多个路由
export default createRouter({
    // 路由模式设置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: '/hospital/close',
                    component: () => import('@/pages/hospital/close/index.vue'),
                },
                {
                    path: '/hospital/detail',
                    component: () => import('@/pages/hospital/detail/index.vue'),
                },
                {
                    path: '/hospital/notice',
                    component: () => import('@/pages/hospital/notice/index.vue'),
                },
                {
                    path: '/hospital/register',
                    component: () => import('@/pages/hospital/register/index.vue'),
                },
                {
                    path: '/hospital/search',
                    component: () => import('@/pages/hospital/search/index.vue'),
                },
            ]
        },
        // 路由重定向
        {
            path: '/',
            redirect: '/home'
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
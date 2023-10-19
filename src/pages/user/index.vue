<template>
    <div class="user">
        <div class="left">
            <!-- 面包屑 -->
            <div class="top">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="main_menu">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                    <el-menu-item index="/user/certification" @click="changeActive('/user/certification')">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <span>实名认证</span>
                    </el-menu-item>
                    <el-menu-item index="/user/order" @click="changeActive('/user/order')">
                        <el-icon><icon-menu /></el-icon>
                        <span>挂号订单</span>
                    </el-menu-item>
                    <el-menu-item index="/user/patient" @click="changeActive('/user/patient')">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>就诊人管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/profile" @click="changeActive('/user/profile')">
                        <el-icon>
                            <ChatLineSquare />
                        </el-icon>
                        <span>账号信息</span>
                    </el-menu-item>
                    <el-menu-item index="/user/feedback" @click="changeActive('/user/feedback')">
                        <el-icon>
                            <Search />
                        </el-icon>
                        <span>意见反馈</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Document,
    Menu as IconMenu,
    Calendar,
    ChatLineSquare,
    Search
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
let $router = useRouter();
const changeActive = (path:string)=>{
    $router.push({
        path:path
    })
}
</script>

<style scoped lang="scss">
.user {
    display: flex;
    padding: 15px 0;
    min-height: 700px;

    .left {
        flex: 2;
        display: flex;
        flex-direction: column;
        min-height: 700px;
        .top{
            padding-top: 10px;
            color: #7f7f7f;
        }
        .main_menu{
            width: 200px;
        }
    }

    .right {
        flex: 8;
    }
}
</style>
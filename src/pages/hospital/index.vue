<template>
    <div class="hospital">
        <!-- 左侧导航区域 -->
        <div class="menu">
            <!-- 面包屑 -->
            <div class="top">                
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
                    <el-icon>
                        <Calendar />
                    </el-icon>
                    <span>预约挂号</span>
                </el-menu-item> 
                <el-menu-item index="/hospital/detail"  @click="changeActive('/hospital/detail')">
                    <el-icon><icon-menu /></el-icon>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>预约须知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
                    <el-icon>
                        <ChatLineSquare />
                    </el-icon>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧内容展示区域 -->
        <div class="content">
            <!-- 子组件展示区域 -->
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
import { useRouter,useRoute } from 'vue-router';
let $router = useRouter(); 
// 获取当前路由信息
let $route = useRoute();
const changeActive = (path:string)=>{
    // 跳转到对应二级路由
    $router.push({
        path:path
    })
}


</script>

<style scoped lang="scss">
.hospital {
    display: flex;

    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        .top{
            padding-top: 10px;
            color: #7f7f7f;
        }
    }

    .content {
        flex: 8;
    }
}</style>
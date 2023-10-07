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
            <div class="main_menu">
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
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail'
// 获取仓库对象
let detailStore = useDetailStore()
// 获取路由器
let $router = useRouter(); 
// 获取当前路由信息
let $route = useRoute();
const changeActive = (path:string)=>{
    // 跳转到对应二级路由
    $router.push({
        path:path
    })
}

// 组件挂载完毕：通知pinia仓库发请求，获取医院详细数据，存储在仓库中
onMounted(() => {
    // 获取医院详情的数据
    detailStore.getHospital($route.query.hoscode as string)
    // 获取某一科室的数据
    detailStore.getDepartment($route.query.hoscode as string)
})

</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    padding: 15px 0;
    min-height: 700px;
    .menu {
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

    .content {
        flex: 8;
    }
}</style>
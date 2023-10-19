<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="goHome">
                <div class="logo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
                <div class="title">尚医通 </div>
                <div class="pertitle">预约挂号统一平台</div>
            </div>
            <div class="right">
                <div class="help">帮助中心</div>
                <div class="sign" @click="login" v-if="!UserStore.userInfo.name">登录/注册</div>
                <div class="sign" v-else>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            {{ UserStore.userInfo.name }}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="changeActive('/user/certification')">实名认证</el-dropdown-item>
                                <el-dropdown-item @click="changeActive('/user/order')">挂号订单</el-dropdown-item>
                                <el-dropdown-item @click="changeActive('/user/patient')">就诊人管理</el-dropdown-item>
                                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowDown } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user';
let UserStore = useUserStore()
let $router = useRouter();
const goHome = () => {
    $router.push({ path: "/home" })
}
const login = () => {
    UserStore.visiable = true
}
// 退出登录 回调
const logout =()=>{
    // 通知pinia仓库清空数据
    UserStore.logout()
    $router.push({path:'/home'})
}
// 下拉菜单点击回调
const changeActive = (path:string)=>{
    $router.push({
        path:path
    })
}
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 75px;
    background: #fff;
    color: #56a7ff;
    border-bottom: #e4e4e4 1px solid;
    padding: 0 100px;

    .content {
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            .logo {
                img {
                    height: 50px;
                    width: 50px;
                }
            }

            .title {
                padding: 0 10px;
            }
        }

        .right {
            display: flex;
            justify-content: center;
            font-size: 15px;

            .help {
                color: #000;
            }

            .sign {
                color: #9b9a9a;
                padding: 0 0 0 10px;
            }

        }
    }
}</style>@/store/modules/user
<template>
    <div class="">

        <!-- 卡片：展示用户信息 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>就诊人管理</span>
                    <el-button class="button" type="primary" :icon="User">添加就诊人</el-button>
                </div>
            </template>
            <div class="user">
                <Visitor v-for="(user, index) in userArr" :key="user.id" class="item"
                    :user="user" :index="index">
                    <el-button type="danger" size="small" :icon="Delete" @click=""></el-button>   
                    
                </Visitor>
            </div>
        </el-card>
    </div>
</template>
<script setup lang="ts">

import { onMounted, ref } from 'vue';
import Visitor from '@/components/visitor/visitor.vue';
import { UserArr, UserResponseData } from '@/api/hospital/type';
import { reqGetUser } from '@/api/hospital';
import { User,Delete } from '@element-plus/icons-vue';
// 定义存储就诊人信息
let userArr= ref<UserArr >([]);

onMounted(() => {
    // 获取就诊人信息
    fetchUserData();
})
const fetchUserData = async()=>{
    let result:UserResponseData = await reqGetUser();
    userArr.value = result.data
}
</script>

<style scoped lang="scss">

.box-card {
        margin: 20px 0;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 32%;
                margin: 5px;
            }
        }
    }

</style>
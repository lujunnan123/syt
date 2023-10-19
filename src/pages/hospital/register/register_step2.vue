<template>
    <div>
        <div class="container">
            <h1 class="tip">确认挂号信息</h1>
            <!-- 卡片：展示用户信息 -->
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>请选择就诊人</span>
                        <el-button class="button" type="success" :icon="User">添加就诊人</el-button>
                    </div>
                </template>
                <div class="user">
                    <Visitor @click="changeIndex(index)" v-for="(user,index) in userArr" :key="user.id" class="item" :user="user" :index="index" :currentIndex = 'currentIndex' />
                </div>
            </el-card>
            <!-- 卡片：展示医生信息 -->
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>挂号信息</span>
                    </div>
                </template>
                <el-descriptions class="margin-top" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                               
                                就诊日期：
                            </div>
                        </template>
                        2023-06-06 周二 下午
                    </el-descriptions-item> 
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                               
                                就诊医院：
                            </div>
                        </template>
                        {{docInfo.param?.hosname}}
                    </el-descriptions-item> 
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                                
                                就诊科室：
                            </div>
                        </template>
                        {{docInfo.param?.depname}}
                    </el-descriptions-item> 
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                                
                                医生姓名：
                            </div>
                        </template>
                        {{docInfo?.docname}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                                
                                医生职称：
                            </div>
                        </template>
                        {{docInfo?.title}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                               
                                医生专长：
                            </div>
                        </template>
                        {{docInfo?.skill}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">                               
                                医生服务费：
                            </div>
                        </template>
                        <span style="color: red;">{{ docInfo.amount }}</span>
                    </el-descriptions-item>
                </el-descriptions>
            </el-card>
            <div class="btn">
                <el-button type="primary" size="default" @click="" :disabled="currentIndex==-1">确认挂号</el-button>                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Visitor from './visitor.vue';
import {reqDoctorInfo, reqGetUser} from '@/api/hospital/index'
import type {  DoctorInfoData, UserArr, UserResponseData } from '@/api/hospital/type';
import { User } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// 定义存储排班医生信息
let docInfo = ref<any>({});
let $route = useRoute();
// 定义存储就诊人信息
let userArr= ref<UserArr >([]);
// 定义存储用户确定就诊人索引值
let currentIndex = ref<number>(-1)
onMounted(() => {
    // 获取就诊人信息
    fetchUserData();
    // 获取排班医生信息
    fetchDocData();
})
const fetchUserData = async()=>{
    let result:UserResponseData = await reqGetUser();
    userArr.value = result.data
}
const fetchDocData = async()=>{
    let result:DoctorInfoData = await reqDoctorInfo($route.query.docId as string)
    console.log(result);
    if(result.code == 200){
        docInfo.value = result.data
    }     
}
// 选择就诊人信息回调
const changeIndex = (index:number)=>{
    currentIndex.value = index    
}
</script>
<style scoped lang="scss">
.container {
    .tip {
        margin: 20px 0;
        font-size: 30px;
        font-weight: 600;
    }

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
    .btn{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }
}
</style>
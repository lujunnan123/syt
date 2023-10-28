<template>
    <div class="">

        <!-- 卡片：展示用户信息 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>就诊人管理</span>
                    <el-button class="button" type="primary" :icon="User" @click="addUser">添加就诊人</el-button>
                </div>
            </template>
            <div class="user" v-if="scene==0">
                <Visitor v-for="(user, index) in userArr" :key="user.id" @changeScene="changeScene" class="item" :user="user" :index="index">
                    <el-button type="danger" size="small" :icon="Delete" @click=""></el-button>
                </Visitor>
            </div>
            
            <!-- 新增/修改功能静态 -->
            <div class="form" v-if="scene==1"  >
                <el-divider content-position="left">就诊人信息</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
                    <el-form-item label="用户姓名">
                        <el-input placeholder="请你输入用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-input placeholder="请你输入证件类型"></el-input>
                    </el-form-item>
                    <el-form-item label="证件号码">
                        <el-input placeholder="请你输入证件号码"></el-input>
                    </el-form-item>
                    <el-form-item label="用户性别">
                        <el-radio-group v-model="radio">
                            <el-radio label="0">
                                男
                            </el-radio>
                            <el-radio label="1">
                                女
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期" size="normal">
                        <el-date-picker v-model="value2" type="date" placeholder="请选择日期" :disabled-date="disabledDate"
                            :shortcuts="shortcuts" :size="size" />
                    </el-form-item>
                </el-form>
                <el-divider content-position="left">建档信息（完善后部分医院首次就诊不排队建档）</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
                    <el-form-item label="婚姻情况">
                        <el-radio-group @change="">
                            <el-radio :label="0">
                                已婚
                            </el-radio>
                            <el-radio :label="1">
                                未婚
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="自费/医保">
                        <el-radio-group @change="">
                            <el-radio :label="0">
                                自费
                            </el-radio>
                            <el-radio :label="1">
                                医保
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="当前地址">
                        <el-select class="m-2" placeholder="请选择当前地址" size="default">
                            <el-option label="1417"  />
                            <el-option label="123"  />
                            <el-option label="345"  />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="详细地址" size="normal">
                        <el-input placeholder="请你输入用户详细地址"></el-input>
                    </el-form-item>
                </el-form>

                <el-divider content-position="left">联系人信息（选填）</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
                    <el-form-item label="用户姓名">
                        <el-input placeholder="请你输入用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-input placeholder="请你输入证件类型"></el-input>
                    </el-form-item>
                    <el-form-item label="证件号码">
                        <el-input placeholder="请你输入证件号码"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input placeholder="请你输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
       

    </div>
</template>
<script setup lang="ts">

import { onMounted, ref } from 'vue';
import Visitor from '@/components/visitor/visitor.vue';
import { UserArr, UserResponseData } from '@/api/hospital/type';
import { reqGetUser } from '@/api/hospital';
import { User, Delete } from '@element-plus/icons-vue';
// 定义存储就诊人信息
let userArr = ref<UserArr>([]);
let radio = ref('1')
let scene = ref<number>(0);

onMounted(() => {
    // 获取就诊人信息
    fetchUserData();
})
const fetchUserData = async () => {
    let result: UserResponseData = await reqGetUser();
    userArr.value = result.data
}
// 添加用户
const addUser = ()=>{
    scene.value=1
}
// 修改用户信息
const changeScene=()=>{
    scene.value=1
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
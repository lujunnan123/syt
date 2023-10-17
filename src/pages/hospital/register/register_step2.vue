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
                    <Visitor v-for="o in 4" :key="o" class="item" />
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
                        xxxxxxxxxxxxxxx
                    </el-descriptions-item> 
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                
                                就诊科室：
                            </div>
                        </template>
                        xxxxxxxxxxxxxxx
                    </el-descriptions-item> 
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                
                                医生姓名：
                            </div>
                        </template>
                        xxxxxxxxxxxxxxx
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                
                                医生职称：
                            </div>
                        </template>
                        xxxxxxxxxxxxxxx
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                               
                                医生专长：
                            </div>
                        </template>
                        xxxxxxxxxxxxxxx
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                               
                                医生服务费：
                            </div>
                        </template>
                        <span style="color: red;">123</span>
                    </el-descriptions-item>

                </el-descriptions>
            </el-card>
            <div class="btn">
                <el-button type="primary" size="default" @click="">确认挂号</el-button>                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Visitor from './visitor.vue';

import { User } from '@element-plus/icons-vue'

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
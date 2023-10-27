<template>
    <div class="allorder">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>挂号订单</span>
                </div>
            </template>
            <div class="body">
                <div class="body_top">
                    <el-form ref="form" :rules="rules" label-width="80px" :inline="true" size="normal">
                        <el-form-item label="就诊人">
                            <el-select value-key="" placeholder="请选择就诊人" clearable filterable @change="">
                                <el-option label="123"></el-option>
                                <el-option label="123"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="订单状态">
                            <el-select value-key="" placeholder="请选择订单" clearable filterable @change="">
                                <el-option label="123"></el-option>
                                <el-option label="123"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="body_list">
                    <el-table :data="tableData" style="width: 100%;margin-bottom: 30px;">
                        <el-table-column prop="date" label="就诊时间" />
                        <el-table-column prop="name" label="医院" />
                        <el-table-column prop="address" label="科室" />
                        <el-table-column prop="address" label="医生" />
                        <el-table-column prop="address" label="服务费" />
                        <el-table-column prop="address" label="就诊人" />
                        <el-table-column prop="address" label="订单状态" />
                        <el-table-column prop="address" label="操作" />
                    </el-table>
                    <!-- 分页器 -->
                    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize"
                        :page-sizes="[10,20,30,40]"  :background="true"
                        layout=" prev, pager, next,sizes, total" :total="400" />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<style scoped lang="scss">
.allorder {
    .box-card {
        .body {
            .body_top {
                display: flex;


            }
        }
    }
}
</style>
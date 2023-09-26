<template>
    <div>
        <!-- 轮播图组件 -->
        <Carousel />
        <!-- 搜索组件 -->
        <Search />
        <!-- 列表组件 Layout布局 -->
        <el-row>
            <el-col :span="18">
                <Level />
                <Region />
                <div class="hospital">
                    <Card class="item" v-for="item in 8" :key="item" />                   
                </div>
                <div class="pagination">
                     <!-- 分页器 -->
                     <el-pagination 
                        v-model:current-page="pageNo" 
                        v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" 
                        :background="true" 
                        layout="total,sizes, prev, pager, next,->,jumper" 
                        :total="400"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>
            </el-col>
            <el-col :span="4">123</el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
// 分页器需要的数据
import {ref} from 'vue'
// 分页器页码
let pageNo = ref<number>(1)
// 一页展示多少条数据
let pageSize = ref<number>(10)
</script>
<style scoped lang="scss">
.hospital {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
        width: 48%;
        margin: 10px 0;
    }
}
.pagination{
    margin: 10px 0;
}
</style>
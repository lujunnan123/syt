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
                    <Card class="item" v-for="(item,index) in hasHospotalArr" :key="index" :hospitalInfo="item" />                   
                </div>
                <div class="pagination">
                     <!-- 分页器 -->
                     <el-pagination 
                        v-model:current-page="pageNo" 
                        v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" 
                        :background="true" 
                        layout="total,sizes, prev, pager, next,->,jumper" 
                        :total="total"
                        @size-change="sizeChange" @current-change="currentChange" />
                </div>
            </el-col>
            <el-col :span="4">123</el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import {reqHospital} from '@/api/home'
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import {Content,HospitalResponseData} from '@/api/home/type'
// 分页器需要的数据
import {ref,onMounted} from 'vue'
// 分页器页码
let pageNo = ref<number>(1)
// 一页展示多少条数据
let pageSize = ref<number>(10)
let hasHospotalArr = ref<Content>([])
let total = ref(0)
//组件挂载完成，发一次请求
onMounted(() => {
    getHospitalInfo();
});
// 获取已有的医院数据
const getHospitalInfo = async ()=>{
    let result:HospitalResponseData = await reqHospital(pageNo.value,pageSize.value)
    if(result.code==200){
       // 存储已有的医院数据 
        hasHospotalArr.value = result.data.content
        
        //存储医院总个数
        total.value = result.data.totalElements
    }
}
// 分页器页码发生改变时候回调
const currentChange =()=>{
    getHospitalInfo()
}
// 分页器下拉菜单发生变化时候回调
const sizeChange = ()=>{
    getHospitalInfo()
}
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
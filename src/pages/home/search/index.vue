<template>
    <div class="search">
        <el-autocomplete 
            v-model="hosname"
            class="el-input_wrapper"
            clearable 
            placeholder="请输入医院名称" 
            :trigger-on-focus="false"
            :fetch-suggestions="fetchData"
            @select="goDetail"
         />
        <el-button type="primary" :icon="Search" size="default" @click="">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import {  Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import {ref} from 'vue'
import {reqHospitalInfo} from '@/api/home/index'
import {HospitalInfo} from '@/api/home/type'
// 创建路由对象
let $router = useRouter()
let hosname = ref<string>('')
const fetchData = async(keyword:string,cb:any)=>{
    // 用户输入完成后函数会执行一次，携带输入内容发送网络请求
    let result:HospitalInfo = await reqHospitalInfo(keyword);    
    // 整理数据，将请求数据变成ElememtPlus需要的数据格式Array[value:content]
    let showData = result.data.map(item=>{
        return{
            value:item.hosname, // 医院名字
            hoscode:item.hoscode // 医院编码
        }
    })
    cb(showData) 
}
// 点击某个建议项
const goDetail = (item:any)=>{
    // 点击建议项，跳转至医院详情页面    
    $router.push({path:'/hospital/detail'})
}
</script>
<script lang="ts">
export default {
    name:"Search"
}
</script>


<style scoped lang="scss">
    .search{
        width:100%;
        height:50px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        :deep(.el-input_wrapper){
            width: 600px; 
            margin-right:10px
        };
      
 }
</style>
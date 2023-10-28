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
                    <el-form ref="form" label-width="80px" :inline="true" size="normal">
                        <el-form-item label="就诊人">
                            <el-select value-key="" placeholder="请选择就诊人" v-model="patientId" @change="changeUser">
                                <el-option :label="item.name" v-for="item in allUser" :key="item.id" :value="item.id" ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="订单状态">
                            <el-select value-key="" placeholder="请选择订单" v-model="orderStatus" @change="changeState">
                                <el-option :label="item.comment" v-for="(item, index) in allOrderState" :key="index" :value="item.comment"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="body_list">
                    <el-table :data="allOrderArr" style="width: 100%;margin-bottom: 30px;">
                        <el-table-column prop="fetchTime" label="就诊时间" />
                        <el-table-column prop="hosname" label="医院" />
                        <el-table-column prop="depname" label="科室" />
                        <el-table-column prop="title" label="医生" />
                        <el-table-column prop="amount" label="服务费" />
                        <el-table-column prop="patientName" label="就诊人" />
                        <el-table-column prop="param.orderStatusString" label="订单状态" />
                        <el-table-column  label="操作">
                            <template #="{row}">
                                <el-button type="text" size="" @click="goDetail(row)">详情</el-button>
                                
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- 分页器 -->
                    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize"
                        :page-sizes="[10,20,30,40]"  :background="true" @current-change="getOrderInfo" @size-change="handle"
                        layout=" prev, pager, next, ->,sizes, total" :total="total" />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// 引入订单请求方法
import { reqAllUser, reqOrderState, reqUserOrderInfo} from '@/api/user/index'
import { AllUser, AllUserResponseData, Order, OrderArr, OrderInfoResponseData, OrderStateRespoonseData, Records } from '@/api/user/type';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
let $router = useRouter()
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
// 就诊人ID
let patientId = ref<string>('')
// 订单状态
let orderStatus = ref<string>('')
// 返回订单数据
let allOrderArr = ref<Records>([])
// 存储订单总个数 （分页器）
let total = ref<number>(0)
// 存储所有就诊人
let allUser = ref<AllUser>([])
// 存储所有订单状态
let allOrderState = ref<OrderArr>([])
onMounted(() => {
    getOrderInfo()
    getData()
})
const getOrderInfo = async(pager:number=1)=>{
    pageNo.value = pager;
    let result:OrderInfoResponseData = await reqUserOrderInfo(pageNo.value,pageSize.value,patientId.value,orderStatus.value);
    if(result.code == 200){
        allOrderArr.value = result.data.records;
        total.value = result.data.total;
    }else{
        ElMessage({
            type:'error',
            message:result.message
        })
    }
    
}
// 跳转详情
const goDetail = (info:Order)=>{
    $router.push({
        path:'/user/order',
        query:{orderId:info.id}
    })
    
}
// 下拉菜单事件回调
const handle = (pageSizes:number)=>{
    pageSize.value = pageSizes;
    getOrderInfo()    
}
// 获取当前账号下所有就诊人信息以及订单状态信息
const getData=async()=>{
   let result:AllUserResponseData = await reqAllUser();
   let result2:OrderStateRespoonseData = await reqOrderState()
   if(result.code==200){
    allUser.value = result.data
   }
   if(result2.code==200){
    allOrderState.value=result2.data
   }
}
// 就诊人下拉菜单回调方法
const changeUser = ()=>{
    // 根据就诊人的ID再次获取挂号订单的数据
    getOrderInfo()    
}
// 订单状态下拉菜单回调方法
const changeState = ()=>{
    getOrderInfo()    
}
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
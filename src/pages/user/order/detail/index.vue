<template>
    <div class="detail">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    挂号详情
                </div>
            </template>
            <div class="top">
                <el-tag class="ml-2" type="success" effect="dark">
                    <div class="tag">
                        <svg t="1697891116275" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2084" width="16" height="16">
                            <path
                                d="M817.728 198.72l111.744 114.56-545.216 532.128-285.92-273.024 110.528-115.712 174.176 166.336z"
                                fill="#ffffff" p-id="2085"></path>
                        </svg>
                        <span>{{ OrderInfo.param?.orderStatusString }}</span>
                    </div>
                </el-tag>
                <div class="attention">
                    <div class="QRcode">
                        <img src="../../../../assets/images/code_app.png" alt="as">
                    </div>
                    <div class="atText">
                        <p>微信<svg t="1697890659395" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2565" width="16" height="16">
                                <path
                                    d="M183.379592 699.559184c-4.179592 0-8.359184-1.044898-11.493878-3.657143-6.269388-4.702041-9.404082-12.016327-7.836734-19.330612l13.061224-77.322449C136.881633 553.273469 114.938776 496.326531 114.938776 437.289796 114.938776 292.571429 246.073469 175.020408 408.032653 175.020408c76.8 0 149.420408 26.644898 204.8 74.710204 55.379592 48.587755 86.726531 113.893878 88.293878 183.379592 0 5.746939-2.089796 10.971429-6.269388 14.628572s-9.404082 5.746939-15.151021 5.746938c-5.22449-0.522449-9.404082-0.522449-13.583673-0.522449-112.326531 0-203.232653 79.934694-203.232653 178.677551 0 13.583673 1.567347 27.167347 5.22449 40.751021 1.567347 5.746939 0.522449 11.493878-2.612245 16.195918-3.134694 4.702041-8.359184 7.836735-14.106123 8.881633-14.106122 2.089796-28.734694 3.134694-43.363265 3.134694-52.767347 0-104.489796-12.538776-149.420408-36.571429l-65.828572 34.481633c-3.134694 0-6.269388 1.044898-9.404081 1.044898z"
                                    fill="#0B9682" p-id="2566"></path>
                                <path
                                    d="M303.542857 352.653061m-35.004081 0a35.004082 35.004082 0 1 0 70.008163 0 35.004082 35.004082 0 1 0-70.008163 0Z"
                                    fill="#DCFFFA" p-id="2567"></path>
                                <path
                                    d="M512 352.653061m-35.004082 0a35.004082 35.004082 0 1 0 70.008164 0 35.004082 35.004082 0 1 0-70.008164 0Z"
                                    fill="#DCFFFA" p-id="2568"></path>
                                <path
                                    d="M849.502041 849.502041c-3.134694 0-6.269388-0.522449-9.404082-2.089796l-52.244898-27.167347c-37.093878 19.330612-78.889796 29.779592-122.253061 29.779592-134.269388 0-242.938776-98.220408-242.938776-218.383674S531.853061 412.734694 665.6 412.734694 909.061224 510.955102 909.061224 631.118367c0 48.065306-17.763265 95.085714-50.677551 133.22449l10.44898 61.64898c1.044898 7.314286-1.567347 15.15102-7.836735 19.330612-3.134694 3.134694-7.314286 4.179592-11.493877 4.179592z"
                                    fill="#16C4AF" p-id="2569"></path>
                                <path
                                    d="M576.261224 575.738776m-29.779591 0a29.779592 29.779592 0 1 0 59.559183 0 29.779592 29.779592 0 1 0-59.559183 0Z"
                                    fill="#DCFFFA" p-id="2570"></path>
                                <path
                                    d="M755.461224 575.738776m-29.779591 0a29.779592 29.779592 0 1 0 59.559183 0 29.779592 29.779592 0 1 0-59.559183 0Z"
                                    fill="#DCFFFA" p-id="2571"></path>
                            </svg>关注"北京114预约挂号"</p>
                        <p>“快速预约挂号”</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <el-descriptions class="margin-top" :column="1" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊人信息
                                </div>
                            </template>
                            {{ OrderInfo.patientName }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊日期
                                </div>
                            </template>
                            {{ OrderInfo.reserveDate }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊医院
                                </div>
                            </template>
                            {{ OrderInfo.hosname }}
                        </el-descriptions-item> <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    就诊科室
                                </div>
                            </template>
                            {{ OrderInfo.depname }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    医生职称
                                </div>
                            </template>
                            {{ OrderInfo.title }}
                        </el-descriptions-item> <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    医事服务费
                                </div>
                            </template>
                            {{ OrderInfo.amount }}
                        </el-descriptions-item> <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    挂号单号
                                </div>
                            </template>
                            {{ OrderInfo.outTradeNo }}
                        </el-descriptions-item> <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    挂号时间
                                </div>
                            </template>
                            {{ OrderInfo.createTime }}
                        </el-descriptions-item>
                    </el-descriptions>
                    <div class="btn" v-if="OrderInfo.orderStatus == 1 || OrderInfo.orderStatus == 0">
                        <el-popconfirm title="是否取消预约?" @confirm="cancel">
                            <template #reference>
                                <el-button type="text" size="default" @click="">取消预约</el-button>
                            </template>
                        </el-popconfirm><el-button type="primary" size="default" @click="paybtn"
                            v-if="OrderInfo.orderStatus == 0">支付</el-button>

                    </div>
                </div>
                <div class="right">
                    <el-card class="box-card">
                        <template #header>
                            <span>注册事项</span>
                        </template>
                        <div class="content">
                            <p>1.请确定就诊人信息是否正确，若填写错误将无法区号就诊，损失有个人承担；</p>
                            <p style="color: red;">2.请确定就诊人信息是否正确，若填写错误将无法区号就诊，损失有个人承担；</p>
                            <p>3.请确定就诊人信息是否正确，若填写错误将无法区号就诊，损失有个人承担；</p>
                            <p>4.请确定就诊人信息是否正确，若填写错误将无法区号就诊，损失有个人承担；</p>
                            <p>5.请确定就诊人信息是否正确，若填写错误将无法区号就诊，损失有个人承担；</p>
                        </div>
                    </el-card>
                </div>
            </div>
        </el-card>
        <el-dialog v-model="dialogVisible" title="微信支付" width="400" center>
            <div class="dialog">
                <img src="../../../../assets/images/code_login_wechat.png" alt="">
                <p>请使用微信扫一扫</p>
                <p>扫描二维码支付</p>
            </div>

            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">
                        关闭
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { reqCancelOrder, reqOrderInfo } from '@/api/user/index.ts'
import type { OrderResponseData } from '@/api/user/type';
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
let $route = useRoute();
let OrderInfo = ref<any>({})
let dialogVisible = ref(false)
onMounted(() => {
    getOrderInfo()
})
// 获取订单信息
const getOrderInfo = async () => {
    let result: OrderResponseData = await reqOrderInfo($route.query.orderId as string)
    if (result.code == 200) {
        OrderInfo.value = result.data
    } else {
        ElMessage({
            type: 'error',
            message: result.message
        })
    }

}
// 取消预约 订单状态orderStatus有三种 -1：取消预约  0：预约但是没有支付  1：支付成功
const cancel = async () => {
    try {
        // 取消预约成功
        await reqCancelOrder($route.query.orderId as string)
        // 再次获取订单详情的数据
        getOrderInfo();
    } catch (error) {
        ElMessage({
            type: "error",
            message: "取消预约失败"
        })
    }

}
const paybtn = () => {
    dialogVisible.value = true
}
</script>

<style scoped lang="scss">
.detail {

    .box-card {
        .top {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 10px;

            .tag {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .attention {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .QRcode {
                    img {
                        width: 30px;
                        height: 30px;
                    }
                }

                .atText {
                    font-size: 12px;
                    margin-left: 5px;
                    line-height: 15px;
                }
            }
        }

        .bottom {
            margin-top: 30px;
            display: flex;

            .left {
                // background: rebeccapurple;
                flex: 4;

                .btn {
                    margin-top: 10px;
                }
            }

            .right {
                margin-left: 40px;
                flex: 6;
                font-size: 10px;

                .content {
                    line-height: 30px;
                }
            }
        }
    }

    .dialog {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    :deep(.el-dialog__body) {
        border-top: 1px #ccc solid;
        border-bottom: #ccc 1px solid;
    }
}
</style>
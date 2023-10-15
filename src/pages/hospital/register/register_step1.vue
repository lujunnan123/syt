<template>
    <div class="register_step1">
        <div class="top">
            <span>{{ workData.baseMap?.hosname }}</span>
            <span>|</span>
            <span>{{ workData.baseMap?.bigname }}</span>
            <span>·</span>
            <span>{{ workData.baseMap?.depname }}</span>
        </div>
        <div class="content">
            <div class="time">{{ workData.baseMap?.workDateString }}</div>
            <div class="boxList">
                <div class="box" v-for="item in workData.bookingScheduleList" :key="item"
                    :class="{ active: item.status == 0 && item.availableNumber }">
                    <div class="box_top">{{ item.workDate }} {{ item.dayOfWeek }}</div>
                    <div class="box_bottom" v-if="item.status == -1">停止挂号</div>
                    <div class="box_bottom" v-if="item.status == 0">
                        {{ item.availableNumber == -1 ? '约满了' : `有号（ ${item.availableNumber} ）` }}
                    </div>
                    <div class="box_bottom" v-if="item.status == 1">即将放号</div>
                </div>
            </div>
            <el-pagination 
            v-model:current-page="pageNo" 
            @current-change="fetchWorkData"
            layout="prev, pager, next" :total="workData.total" />
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { reqHospitalWork } from '@/api/hospital/index'
import { HospitalWorkData } from '@/api/hospital/type'
import { useRoute } from 'vue-router'
let $route = useRoute()
let pageNo = ref<number>(1);
let limit = ref<number>(5)
// 存储医院科室挂号信息
let workData = ref<any>({})
onMounted(() => {
    fetchWorkData()
})
// 获取挂号的数据
const fetchWorkData = async () => {
    let res: HospitalWorkData = await reqHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
    if (res.code == 200) {
        workData.value = res.data
    }
}
</script>

<style scoped lang="scss">
.register_step1 {
    .top {
        color: #7f7f7f;
        font-size: 14px;

        span {
            margin-right: 8px;
        }
    }

    .content {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .time {
            margin-bottom: 15px;
        }

        .boxList {
            display: flex;
            width: 100%;
            color: #7f7f7f;

            .box {
                flex: 1;
                border: 2px solid #d4d4d4;
                margin: 0 10px;

                &.active {
                    border: 1px solid skyblue;
                    color: #333;

                    .box_top {
                        background: #E6F9FF;
                    }
                }

                .box_top {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #d4d4d4;

                }

                .box_bottom {
                    text-align: center;
                    height: 50px;
                    line-height: 50px;

                }
            }
        }
    }
}</style>
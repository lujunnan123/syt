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
                    :class="{ active: item.status == 0 && item.availableNumber }"
                    @click="changeTime(item)"
                    >
                    <div class="box_top">{{ item.workDate }} {{ item.dayOfWeek }}</div>
                    <div class="box_bottom" v-if="item.status == -1">停止挂号</div>
                    <div class="box_bottom" v-if="item.status == 0">
                        {{ item.availableNumber == -1 ? '约满了' : `有号（ ${item.availableNumber} ）` }}
                    </div>
                    <div class="box_bottom" v-if="item.status">即将放号</div>
                </div>
            </div>
            <!-- 分页器 -->
            <el-pagination 
            v-model:current-page="pageNo" 
            @current-change="fetchWorkData"
            layout="prev, pager, next" :total="workData.total" />
        </div>
        <!-- 底层展示医生的结构 -->
        <div class="bottom">
            <!-- 无号源 -->
            <div class="will" v-if="workTime.status == 1">
                <span>2023.3.1</span>
                <span>放号</span>
            </div>
            <!-- 有号源 -->
            <div class="doctor" v-else>
                <div class="moring">
                    <!-- 顶部文字提示 -->
                    <div class="tip">
                        <svg t="1697425915087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7370" width="16" height="16"><path d="M513.123 795.991c-76.156 0-147.753-29.658-201.603-83.508-53.849-53.849-83.504-125.444-83.504-201.596 0-76.153 29.657-147.749 83.504-201.598 53.85-53.851 125.446-83.508 201.603-83.508 76.147 0 147.742 29.658 201.593 83.508 53.853 53.852 83.511 125.447 83.511 201.598s-29.659 147.747-83.511 201.597c-53.852 53.85-125.445 83.507-201.593 83.507zM513.123 272.352c-131.529 0-238.534 107.007-238.534 238.535s107.006 238.533 238.534 238.533 238.533-107.005 238.533-238.533c0-131.529-107.006-238.535-238.533-238.535z" fill="#f4ea2a" p-id="7371"></path><path d="M513.123 149.007c-12.861 0-23.285-10.426-23.285-23.285v-91.359c0-12.861 10.426-23.285 23.285-23.285s23.285 10.426 23.285 23.285v91.358c0 12.862-10.426 23.286-23.285 23.286z" fill="#f4ea2a" p-id="7372"></path><path d="M513.123 1010.674c-12.861 0-23.285-10.426-23.285-23.285v-91.346c0-12.861 10.426-23.285 23.285-23.285s23.285 10.426 23.285 23.285v91.346c0 12.861-10.426 23.285-23.285 23.285z" fill="#f4ea2a" p-id="7373"></path><path d="M240.764 261.825c-5.959 0-11.919-2.274-16.466-6.821l-64.592-64.591c-9.094-9.093-9.094-23.838 0-32.931 9.093-9.094 23.838-9.094 32.931 0l64.593 64.592c9.094 9.093 9.094 23.838 0 32.931-4.546 4.545-10.507 6.82-16.467 6.82z" fill="#f4ea2a" p-id="7374"></path><path d="M850.050 871.111c-5.958 0-11.919-2.272-16.467-6.82l-64.593-64.593c-9.093-9.094-9.093-23.839 0-32.932 9.094-9.094 23.839-9.094 32.932 0l64.593 64.593c9.093 9.094 9.093 23.839 0 32.932-4.546 4.545-10.507 6.82-16.466 6.82z" fill="#f4ea2a" p-id="7375"></path><path d="M36.59 534.183c-12.861 0.001-23.286-10.423-23.289-23.283-0.001-12.861 10.423-23.286 23.283-23.289l91.348-0.011c12.861-0.001 23.286 10.423 23.289 23.283 0.001 12.861-10.423 23.286-23.283 23.289l-91.348 0.011z" fill="#f4ea2a" p-id="7376"></path><path d="M989.613 534.173h-91.346c-12.861 0-23.285-10.426-23.285-23.285s10.426-23.285 23.285-23.285h91.346c12.861 0 23.285 10.426 23.285 23.285s-10.426 23.285-23.285 23.285z" fill="#f4ea2a" p-id="7377"></path><path d="M176.173 871.122c-5.959 0-11.919-2.272-16.466-6.82-9.094-9.094-9.094-23.839 0-32.932l64.593-64.593c9.094-9.094 23.838-9.094 32.931 0s9.094 23.839 0 32.932l-64.593 64.593c-4.546 4.546-10.506 6.82-16.466 6.82z" fill="#f4ea2a" p-id="7378"></path><path d="M785.457 261.825c-5.959 0-11.918-2.272-16.467-6.821-9.094-9.094-9.093-23.838 0.001-32.931l64.593-64.592c9.094-9.093 23.838-9.094 32.931 0s9.093 23.838-0.001 32.931l-64.593 64.592c-4.545 4.546-10.506 6.821-16.465 6.821z" fill="#f4ea2a" p-id="7379"></path></svg>
                        <span>上午挂号</span>
                    </div>
                    <div class="doc_info" v-for="doctor in moringArr" :key="doctor.id">
                        <div class="left">
                            <div class="info">
                                <span>{{doctor.title}}</span>
                                <span class="Separation">|</span>
                                <span>{{doctor.docname}}</span>
                            </div>
                            <div class="skill">
                                {{doctor.skill}}
                            </div>
                        </div>
                        <!-- 右侧区域展示挂号的钱数 -->
                        <div class="right">
                            <span >{{doctor.amount}}</span>
                            <el-button type="primary" size="default" @click="">剩余{{doctor.reservedNumber}}</el-button>
                        </div>
                    </div>
                </div>
                <div class="afternoon">
                     <!-- 顶部文字提示 -->
                     <div class="tip">
                        <svg t="1697424349644" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4403" width="16" height="16"><path d="M904.101037 676.946871H118.670712c-15.461511 0-28.105271-12.535384-28.105271-28.033021 0-15.461511 12.643759-28.105271 28.105271-28.10527h785.430325c15.461511 0 28.105271 12.643759 28.105271 28.10527s-12.607634 28.033021-28.105271 28.033021z m-56.029916-324.980738c-11.018133 10.945883-28.719396 10.945883-39.665279 0-11.018133-10.945883-11.018133-28.755521 0-39.665279l39.665279-39.665279a27.97522 27.97522 0 0 1 39.593029 0 27.93187 27.93187 0 0 1 0 39.665279l-39.593029 39.665279z m-62.279545 212.776406c-26.082269-128.027094-138.683977-224.444789-274.441826-224.44479-135.649474 0-248.287307 96.417696-274.369576 224.44479H177.915755c21.602766-158.263741 162.454244-280.583081 333.433995-280.583081 171.088125 0 311.903478 122.31934 333.506244 280.583081h-59.064418z m-274.441826-336.612997c-15.461511 0-28.033021-12.535384-28.033021-28.10527V143.95823c0-15.461511 12.535384-28.105271 28.033021-28.10527 15.569886 0 28.105271 12.643759 28.10527 28.10527v56.029916c0 15.606011-12.535384 28.141396-28.10527 28.141396zM174.700628 351.966133L135.035349 312.264729c-10.945883-10.945883-10.945883-28.755521 0-39.665279 11.018133-10.945883 28.719396-10.945883 39.665279 0l39.665279 39.665279a27.93187 27.93187 0 0 1 0 39.665279c-10.909758 10.982008-28.647146 10.982008-39.665279 0.036125z m-28.033021 381.119029h729.40041c15.497636 0 28.033021 12.535384 28.03302 28.03302a28.033021 28.033021 0 0 1-28.03302 28.033021H146.667607c-15.497636 0-28.033021-12.535384-28.03302-28.033021 0.036125-15.497636 12.571509-28.033021 28.03302-28.03302z m84.171312 112.168207h561.093911c15.497636 0 28.033021 12.535384 28.033021 28.033021 0 15.569886-12.535384 28.105271-28.033021 28.10527H230.838919c-15.497636 0-28.033021-12.535384-28.03302-28.10527 0-15.497636 12.535384-28.033021 28.03302-28.033021z" fill="#d81e06" p-id="4404"></path></svg>
                        <span>下午挂号</span>
                    </div>
                    <div class="doc_info" v-for="doctor in afternoonArr" :key="doctor.id">
                        <div class="left">
                            <div class="info">
                                <span>{{doctor.title}}</span>
                                <span class="Separation">|</span>
                                <span>{{doctor.docname}}</span>
                            </div>
                            <div class="skill">
                                {{doctor.skill}}
                            </div>
                        </div>
                        <!-- 右侧区域展示挂号的钱数 -->
                        <div class="right">
                            <span >￥123</span>
                            <el-button type="primary" size="default" @click="">剩余6</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { reqHospitalWork,reqHospitalDoctor } from '@/api/hospital/index'
import { DoctorData, HospitalWorkData,DoctorArr, Doctor } from '@/api/hospital/type'
import { useRoute } from 'vue-router'
let $route = useRoute()
let pageNo = ref<number>(1);
let limit = ref<number>(5)
// 存储医院科室挂号信息
let workData = ref<any>({})
// 存储排班医生的数据
let docArr = ref<DoctorArr>([])
onMounted(() => {
    fetchWorkData()
    getDoctorWorkData()
})
// 存储排班日期
let workTime:any = ref({})
// 获取挂号的数据
const fetchWorkData = async () => {
    let res: HospitalWorkData = await reqHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
    if (res.code == 200) {
        workData.value = res.data
        // 存储第一天排班时间
        workTime.value = workData.value.bookingScheduleList[0]
        // 获取一次医生数据
        getDoctorWorkData();
    }
}
// 获取某一天医生排班的数据
const getDoctorWorkData = async()=>{
    let hoscode =  $route.query.hoscode;
    let depcode = $route.query.depcode;    
    let workDate:string = workTime.value.workDate;
    let res:DoctorData = await reqHospitalDoctor( hoscode as string,depcode as string,workDate)
    if(res.code == 200){
        docArr.value = res.data
    }
    
}
// 点击预约日期 回调
const changeTime = (item:any)=>{
    // 存储用户选择那一天的数据
    workTime.value = item
    
    getDoctorWorkData()
}
// 利用计算属性 筛选出上午和下午的医生数据
let moringArr = computed(()=>{
    return docArr.value.filter((doc:Doctor)=>{
       return doc.workTime == 0
    })
})
let afternoonArr = computed(()=>{
    return docArr.value.filter((doc:Doctor)=>{
        return doc.workTime == 1
    })
})


</script>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "Register_step1"
})
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
    .bottom{
        .will{
            margin: 10px 0;
            text-align: center;
            span{
                font-weight: 900;
                font-size: 30px;
            }
            
        }
        .doctor{
            .moring{
                .tip{
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .doc_info{
                    display: flex;
                    justify-content: space-between;
                    margin: 15px 0;
                    border-bottom:solid 1px #EFEFEF;
                    .left{
                        .info{
                            color: #00AEEC;
                            .Separation{
                                display: inline-block;
                                margin:  0 10px;
                            }
                        }
                        .skill{
                            color: #949493;
                            margin: 9px 0;
                        }
                    }
                    .right{
                        span{
                            margin-right: 50px;
                        }
                    }
                }
            }
            .afternoon{
                .tip{
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .doc_info{
                    display: flex;
                    justify-content: space-between;
                    margin: 15px 0;
                    border-bottom:solid 1px #EFEFEF;
                    .left{
                        .info{
                            color: #00AEEC;
                            .Separation{
                                display: inline-block;
                                margin:  0 10px;
                            }
                        }
                        .skill{
                            color: #949493;
                            margin: 9px 0;
                        }
                    }
                    .right{
                        span{
                            margin-right: 50px;
                        }
                    }
                }
            }
        }
    }
}</style>
<template>
    <div class="register">
        <div class="top">
            <div class="title">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
            <div class="level">
                <svg t="1696600493054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2286" width="16" height="16"><path d="M881.066667 394.666667c-21.333333-23.466667-51.2-36.266667-81.066667-36.266667H618.666667v-117.333333c0-44.8-29.866667-85.333333-87.466667-117.333334-17.066667-10.666667-38.4-12.8-57.6-8.533333-19.2 4.266667-36.266667 17.066667-46.933333 34.133333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4l-125.866667 281.6H204.8c-59.733333 0-108.8 46.933333-108.8 106.666667v258.133333c0 57.6 49.066667 106.666667 108.8 106.666667h544c53.333333 0 98.133333-38.4 106.666667-89.6l51.2-337.066667c4.266667-34.133333-6.4-64-25.6-87.466666z m-593.066667 448H204.8c-25.6 0-44.8-19.2-44.8-42.666667v-256c0-23.466667 19.2-42.666667 44.8-42.666667h83.2v341.333334z m554.666667-373.333334L789.333333 806.4c-4.266667 21.333333-21.333333 36.266667-42.666666 36.266667H352V471.466667l130.133333-290.133334c2.133333-4.266667 4.266667-4.266667 6.4-4.266666 2.133333 0 4.266667 0 8.533334 2.133333 25.6 14.933333 55.466667 38.4 55.466666 64v149.333333c0 17.066667 14.933333 32 32 32h213.333334c12.8 0 25.6 4.266667 34.133333 14.933334 8.533333 6.4 12.8 19.2 10.666667 29.866666z" fill="#666666" p-id="2287"></path></svg>
                <span>{{hospitalStore.hospitalInfo.hospital?.param.hostypeString}}</span>
            </div>
        </div>
        <div class="buttom">
            <div class="left">
                <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.hospital?.logoData}`" alt="">
            </div>
            <div class="right">
                <div class="stitle">挂号规则</div>
                <div class="time">
                    <span>预约周期：{{ hospitalStore.hospitalInfo.bookingRule?.cycle }}</span>
                    <span>放号时间：{{ hospitalStore.hospitalInfo.bookingRule?.releaseTime }}</span>
                    <span>停挂时间：{{ hospitalStore.hospitalInfo.bookingRule?.quitTime }}</span>
                </div>
                <div class="address">
                    具体位置：{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}
                </div>
                <div class="route">
                    规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}
                </div>
                <div class="returnTime">
                    退票时间：就诊前一工作日{{  hospitalStore.hospitalInfo.bookingRule?.quitTime }}前取消
                </div>
                <div class="stitle">医院预约规则</div>
                <div class="rule" v-for="item in hospitalStore.hospitalInfo.bookingRule?.rule">{{ item }}</div>
            </div>
        </div>
        <div class="department">
            <div class="leftNav">
                <ul>
                    <li :class="{active:index==currentIndex}" @click="changeIndex(index)" v-for="(department,index) in hospitalStore.departmentArr" :key="department.depcode">{{ department.depname }}</li>
                </ul>
            </div>
            <div class="deparmentInfo">
                <div class="showDepartment" v-for="department in hospitalStore.departmentArr" :key="department.depcode">
                    <h1 class="cur">{{department.depname}}</h1>
                    <!-- 每一个大的科室下的小科室 -->
                    <ul>
                        <li  v-for="(item) in department.children" :key="item.depcode">
                            {{ item.depname }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/modules/hospitalDetail'
import { ref } from 'vue';
let hospitalStore = useDetailStore()
// 控制科室高亮的响应式数据
let currentIndex = ref<number>(0)
// 左侧科室点击事件
const changeIndex = (index:number)=>{
    currentIndex.value = index;
    let allH1 = document.querySelectorAll('.cur');
    // 滚动到指定位置   
    allH1[currentIndex.value].scrollIntoView({
        behavior:"smooth"
    })
}
</script>

<style scoped lang="scss">
    .register{
        margin: 20px 10px;

        .top{
            display: flex;
            align-items: center;
            .title{
                margin-right: 5px;
                font-size: 20px;
                color: #000;
            }
            .level{
                height: 40px;
                line-height: 40px;
            }
        }
        .buttom{
            display: flex;
            .left{
                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }
            .right{
                margin: 20px 10px;
                .stitle{
                    color: #000;
                    margin: 15px 0;
                }
                flex: 1;
                .time{
                    span{
                        margin-right: 10px;
                    }
                }
                .time,.route,.returnTime,.address,.rule{
                    color: #7f7f7f;
                    margin-top: 10px;
                }
            }
        }
        .department{
            margin-top: 20px;
            display: flex;
            width: 100%;
            height: 500px;
            .leftNav{
                width: 80px;
                height: 100%;
                ul{
                    width: 100%;
                    height: 100%;
                    background: rgb(248,248,248);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    li{
                        flex: 1;
                        text-align: center;
                        font-size: 14px;
                        color: #7f7f7f;
                        line-height: 40px;
                        &.active{
                            background: #fff;
                            border-left: 2px solid #6c2304;
                            color: #6c2304;
                        }
                    }
                }
            }
            .deparmentInfo{
                height: 100%;
                overflow: auto;
                flex: 1;
                margin-left: 20px;
                &::-webkit-scrollbar{
                    display: none;
                }
                .showDepartment{
                    h1{
                        margin: 5px 0;
                        background: rgb(248,248,248);
                        color: #7f7f7f;
                    }
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                            width: 33%;
                            // line-height: 20px;
                            padding: 10px;
                            color: #7f7f7f;

                        }
                    }
                }
            }
        }
    }
</style>
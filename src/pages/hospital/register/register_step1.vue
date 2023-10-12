<template>
    <div class="register_step1">
        <div class="top">
            <span>北京人民医院</span>
            <span>|</span>
            <span>专科</span>
            <span>·</span>
            <span>多发性硬化专科门诊</span>
        </div>
        <div class="content">
            <div class="time">2023年6月</div>
            <div class="boxList">
                <div class="box" v-for="item in 6" :key="item">
                    <div class="box_top">2023-06-02 周五</div>
                    <div class="box_bottom">停止挂号</div>
                </div>
            </div>
            <el-pagination layout="prev, pager, next" :total="50" />
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script setup lang="ts">

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

                .box_top {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #d4d4d4;
                }
                .box_bottom{
                    text-align: center;
                    height: 50px;
                    line-height: 50px;
                }
            }
        }
    }
}</style>
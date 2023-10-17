<template>
    <div class="visitor">
        <div class="top">
            <div class="top_left">
                <span class="yb">医保</span>
                <span class="name">胖虎</span>
            </div>
            <div class="edit">
                <el-button type="primary" size="small" :icon="Edit" @click=""></el-button>
                
            </div>
        </div>
        <div class="bottom">
            <div v-for="(item) in 8" :key="item" class="item">
                证件类型：身份证 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  Edit} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.visitor{
    // border:solid 1px #7f7f7f;
    box-shadow: 2px 2px 2px 1px #EFEFEF,  -2px -2px 8px 1px #EFEFEF;
    .top{
        height: 50px;
        line-height: 50px;
        background: #EFEFEF;
        display: flex;
        justify-content: space-between;
       
        .top_left{
            margin-left: 5px;
            .name{
            color: #7f7f7f;

            }
            .yb{
                display: inline-block;
                width: 30px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                margin: 8px;
                font-size: 5px;
                background: #fff;
            }
        }
        .edit{
            margin-right: 10px;
        }
    }
    .bottom{
        padding: 12px;
        .item{
            font-size: 12px;
            line-height: 20px;
        }
    }
}
</style>
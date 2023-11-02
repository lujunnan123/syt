<template>
    <div class="visitor">
        <div class="top">
            <div class="top_left">
                <span class="yb" >{{user.isInsure==1?'医保':'自费'}}</span>
                <span class="name">{{user.name}}</span>
            </div>
            <div class="edit">
                <el-button type="primary" size="small" :icon="Edit" @click="edit"></el-button> 
                <slot></slot>
            </div>
        </div>
        <div class="bottom">
            <div class="item">证件类型：{{user.param.certificatesTypeString}}</div>
            <div class="item">证件号码：{{user.certificatesNo}}</div>
            <div class="item">用户性别：{{ user.sex==0?'女':'男' }}</div>
            <div class="item">出生日期：{{user.birthdate}}</div>
            <div class="item">手机号码：{{user.phone}}</div>
            <div class="item">婚姻情况：{{user.isMary==0?'未婚':'已婚'}}</div>
            <div class="item">当前住址：{{user.param.cityString}}</div>
            <div class="item">详细地址：{{user.address}}</div>
            <transition name="confirm">
                <div class="confirm" v-if="index == currentIndex">已选择</div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  Edit} from '@element-plus/icons-vue'
import { useRoute,useRouter } from 'vue-router';
let props = defineProps(['user','index','currentIndex'])
let $emit = defineEmits(["changeScene"])
let $route = useRoute();
let $router = useRouter();
// 修改按钮回调
const edit = ()=>{
    if($route.path=='/user/patient'){
        // console.log('当前为路由器管理');    
        $emit('changeScene',props.user)    
    }else{
        // console.log('当前为预约挂号');
        $router.push({
            path:'/user/patient',
            query:{type:'edit',id:props.user.id}
        })
    }
}

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
        position: relative;
        .item{
            font-size: 12px;
            line-height: 30px;
        }
        .confirm{
            
            color: red;
            border: 1px dashed red;
            border-radius: 50%;
            position: absolute;
            text-align: center;
            line-height: 200px;
            width: 200px;
            height: 200px;
            left: 20%;
            top: 20%;
            opacity: .5;
            transform: rotate(25deg);
        }
        
        .confirm-enter-from{
            transform: scale(1);
        }
        .confirm-enter-active{
            transition: all 0.3s;
        }
        .confirm-enter-to{
            transform: scale(1.2);
        }
    }
}
</style>
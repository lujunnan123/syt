<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="goHome">
                <div class="logo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
                <div class="title">尚医通 </div>
                <div class="pertitle">预约挂号统一平台</div>
            </div>
            <div class="right">
                <div class="help">帮助中心</div>
                <div class="sign" @click="login">登录/注册</div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useLoginStore from '@/store/modules/login';
let LoginStore = useLoginStore()
let $router = useRouter();
const goHome = ()=>{
    $router.push({path:"/home"})
}
const login = ()=>{
    LoginStore.visiable = true
}
</script>

<style scoped lang="scss">
    .top{
        width: 100%;
        height: 75px;
        background: #fff;
        color: #56a7ff;
        border-bottom: #e4e4e4 1px solid;
        padding:0 100px ;
        .content{
            height: 75px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .logo{
                    img{
                        height: 50px;
                        width: 50px;
                    }
                }
                .title{
                    padding: 0 10px;
                }
            }
            .right{
                display: flex;
                justify-content: center;
                font-size: 15px;
                .help{
                    color: #000;
                }
                .sign{
                    color: #9b9a9a;
                    padding: 0 0 0 10px;
                }
                
            }
        }
    }
</style>
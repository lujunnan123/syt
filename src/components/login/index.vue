<template>
    <div class="login_container">
        <el-dialog v-model="UserStore.visiable" title="用户登录">
            <el-row :gutter="20">
                <el-col :span="12" :offset="0">
                    <div class="login" v-show="sence == 0">
                        <el-form :model="loginParam" :rules="rules" ref="form">
                            <el-form-item label="" prop="phone">
                                <el-input placeholder="请输入手机号码" :prefix-icon="User" v-model="loginParam.phone">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="" prop="code">
                                <el-input placeholder="请输入手机验证码" :prefix-icon="Lock" v-model="loginParam.code"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="medium" @click="getCode" :disabled="!isPhone || showTime">
                                    <span v-if="!showTime">获取验证码</span>
                                    <CountDown v-else :showTime="showTime" @getFlag="getFlag" />
                                </el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="login"
                                    :disabled="!isPhone || loginParam.code.length < 6 ? true : false">用户登录</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="bottom" @click="changeObj">
                            <p> 微信扫码登录</p>
                            <svg t="1696743726599" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4051" width="32" height="32">
                                <path
                                    d="M489.6 444.8c0 9.6 6.4 16 16 16s16-6.4 16-16-6.4-16-16-16-16 6.4-16 16zM531.2 528c0 6.4 6.4 12.8 12.8 12.8s12.8-6.4 12.8-12.8-6.4-12.8-12.8-12.8-12.8 3.2-12.8 12.8zM406.4 444.8c0 9.6 6.4 16 16 16s16-6.4 16-16-6.4-16-16-16c-6.4 0-16 6.4-16 16z"
                                    fill="#d81e06" p-id="4052"></path>
                                <path
                                    d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m-64 544c-19.2 0-38.4-3.2-57.6-9.6h-9.6l-35.2 22.4c-9.6 3.2-12.8 0-9.6-6.4l9.6-28.8c0-3.2 0-9.6-3.2-9.6-35.2-25.6-60.8-64-60.8-108.8C275.2 384 352 320 448 320c86.4 0 156.8 51.2 169.6 121.6H608c-86.4 0-156.8 57.6-156.8 131.2 0 12.8 3.2 25.6 6.4 35.2H448z m249.6 54.4c-3.2 3.2-3.2 6.4-3.2 6.4l6.4 25.6c3.2 6.4-3.2 9.6-9.6 6.4l-32-19.2c-3.2 0-6.4-3.2-6.4 0-16 3.2-32 6.4-48 6.4-80 0-144-54.4-144-121.6 0-67.2 64-121.6 144-121.6s144 54.4 144 121.6c0 41.6-19.2 73.6-51.2 96z"
                                    fill="#d81e06" p-id="4053"></path>
                                <path
                                    d="M611.2 512c-6.4 0-12.8 6.4-12.8 12.8s6.4 12.8 12.8 12.8 12.8-6.4 12.8-12.8c3.2-6.4-3.2-12.8-12.8-12.8z"
                                    fill="#d81e06" p-id="4054"></path>
                            </svg>
                        </div>
                    </div>
                    <!-- 微信扫码登录结构 -->
                    <div class="wxLogin" v-show="sence == 1">
                        微信扫码登录结构
                    </div>
                </el-col>
                <el-col :span="12" :offset="0">
                    <div class="rightContent">
                        <div class="top">
                            <div class="left">
                                <img src="../../assets/images/code_app.png" alt="">
                                <svg t="1696749611115" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5174" width="16" height="16">
                                    <path
                                        d="M615.904 388.48c8.8 0 17.536 0.64 26.176 1.6-23.52-109.536-140.608-190.912-274.272-190.912C218.4 199.2 96 301.056 96 430.4c0 74.656 40.736 135.936 108.768 183.488l-27.2 81.792 95.04-47.648c33.984 6.72 61.28 13.632 95.2 13.632 8.544 0 16.992-0.416 25.376-1.088a202.496 202.496 0 0 1-8.384-56.96c0-118.752 101.984-215.136 231.104-215.136zM469.76 314.784c20.48 0 34.016 13.472 34.016 33.92 0 20.352-13.536 34.016-34.016 34.016-20.384 0-40.832-13.664-40.832-34.016 0-20.448 20.448-33.92 40.832-33.92zM279.52 382.72c-20.384 0-40.928-13.664-40.928-34.016 0-20.448 20.544-33.92 40.928-33.92 20.352 0 33.92 13.472 33.92 33.92 0 20.384-13.568 34.016-33.92 34.016z"
                                        fill="" p-id="5175"></path>
                                    <path
                                        d="M864 600.352c0-108.672-108.736-197.28-230.88-197.28-129.344 0-231.2 88.576-231.2 197.28 0 108.864 101.856 197.248 231.2 197.248 27.072 0 54.368-6.816 81.568-13.632l74.56 40.8-20.448-67.904C823.328 715.936 864 661.664 864 600.352z m-305.856-34.016c-13.536 0-27.2-13.44-27.2-27.2 0-13.568 13.664-27.2 27.2-27.2 20.576 0 34.016 13.632 34.016 27.2 0 13.76-13.44 27.2-34.016 27.2z m149.536 0c-13.44 0-27.008-13.44-27.008-27.2 0-13.568 13.568-27.2 27.008-27.2 20.352 0 34.016 13.632 34.016 27.2 0 13.76-13.664 27.2-34.016 27.2z"
                                        fill="" p-id="5176"></path>
                                </svg>
                                <p>微信扫一扫关注</p>
                                <p>"快速预约挂号"</p>
                            </div>
                            <div class="right">
                                <img src="../../assets/images/code_login_wechat.png" alt="">
                                <svg t="1696749611115" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5174" width="16" height="16">
                                    <path
                                        d="M615.904 388.48c8.8 0 17.536 0.64 26.176 1.6-23.52-109.536-140.608-190.912-274.272-190.912C218.4 199.2 96 301.056 96 430.4c0 74.656 40.736 135.936 108.768 183.488l-27.2 81.792 95.04-47.648c33.984 6.72 61.28 13.632 95.2 13.632 8.544 0 16.992-0.416 25.376-1.088a202.496 202.496 0 0 1-8.384-56.96c0-118.752 101.984-215.136 231.104-215.136zM469.76 314.784c20.48 0 34.016 13.472 34.016 33.92 0 20.352-13.536 34.016-34.016 34.016-20.384 0-40.832-13.664-40.832-34.016 0-20.448 20.448-33.92 40.832-33.92zM279.52 382.72c-20.384 0-40.928-13.664-40.928-34.016 0-20.448 20.544-33.92 40.928-33.92 20.352 0 33.92 13.472 33.92 33.92 0 20.384-13.568 34.016-33.92 34.016z"
                                        fill="" p-id="5175"></path>
                                    <path
                                        d="M864 600.352c0-108.672-108.736-197.28-230.88-197.28-129.344 0-231.2 88.576-231.2 197.28 0 108.864 101.856 197.248 231.2 197.248 27.072 0 54.368-6.816 81.568-13.632l74.56 40.8-20.448-67.904C823.328 715.936 864 661.664 864 600.352z m-305.856-34.016c-13.536 0-27.2-13.44-27.2-27.2 0-13.568 13.664-27.2 27.2-27.2 20.576 0 34.016 13.632 34.016 27.2 0 13.76-13.44 27.2-34.016 27.2z m149.536 0c-13.44 0-27.008-13.44-27.008-27.2 0-13.568 13.568-27.2 27.008-27.2 20.352 0 34.016 13.632 34.016 27.2 0 13.76-13.664 27.2-34.016 27.2z"
                                        fill="" p-id="5176"></path>
                                </svg>
                                <p>微信扫一扫关注</p>
                                <p>"快速预约挂号"</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <p>尚医通官方指定平台</p>
                            <p>快速挂号 安全放心</p>
                        </div>
                    </div>

                </el-col>
            </el-row>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="closeDialog">关闭窗口</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import useUserStore from '../../store/modules/user';
import { User, Lock } from '@element-plus/icons-vue';
import CountDown from '../countdown/index.vue'
import { ElMessage } from 'element-plus';
let UserStore = useUserStore();
let sence = ref<number>(0)
// 获取form组件实例
let form = ref<any>()
// 定义表单数据
let loginParam = reactive({
    phone: '',
    code: ''
})
// 定义获取验证码是否展示倒计时 false不展示倒计时
let showTime = ref<boolean>(false)
// 点击扫码登录|微信小图标切换为微信扫码登录
const changeObj = () => {
    sence.value = 1
}
// 计算当前表单元素收集的内容是否是手机号码格式
const isPhone = computed(() => {
    let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    return reg.test(loginParam.phone)
})
// 获取验证码 回调
const getCode = async () => {
    try {
        // 获取验证码成功
        await UserStore.getCode(loginParam.phone)
        loginParam.code = UserStore.code;
        showTime.value = true
    } catch (error) {
        // 获取验证码失败
        ElMessage({
            type: 'error',
            message: (error as Error).message
        })
    }
}
// 用户登录 回调
const login = async () => {
    await form.value.validate();
    
    try {
        // 用户登录成功
        await UserStore.userlogin(loginParam)
        // 关闭登录界面
        UserStore.visiable = false
    } catch (error) {
        ElMessage({
            type: 'error',
            message: (error as Error).message
        })
    }
}
// 自定义事件，用来接受倒计时为0时，通知父组件隐藏倒计时
const getFlag = (flag: boolean) => {
    showTime.value = flag
}
// 表单校验规则
// 手机号码自定义校验规则
const validatorPhone = (rule:any,value:any,callBack:any)=>{
    // rule:即为表单验证规则对象
    // value:即为当前文本的内容
    // callBack:回调函数
    
    let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if(reg.test(value)){
        callBack();
    }else{
        callBack(new Error("请输入正确的手机号码"))
    }    
}
const validatorCode = (rule:any,value:any,callBack:any)=>{
    let reg = /^\d{6}$/
    if(reg.test(value)){
        callBack()
    }else{
        callBack(new Error("验证码必须是六位"))
    }
}
const rules = reactive({
    // 自定义校验
    phone:[{trigger:'change',validator:validatorPhone}],
    code:[{trigger:'change',validator:validatorCode}]
})
// 关闭窗口 回调
const closeDialog = ()=>{
    UserStore.visiable = false;
}

</script>
<script lang="ts">
export default {
    name: "Login"
}
</script>

<style scoped lang="scss">
.login_container {
    :deep(.el-dialog__body) {
        border-top: 1px solid #ccc;
        border-buttom: 1px solid #ccc;
    }

    .login {
        padding: 20px;
        border: 1px solid #ccc;

        .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                padding: 4px;
            }
        }
    }

    .wxLogin {
        border: 1px solid #7f7f7f;
    }

    .rightContent {
        margin: 10px;

        .top {
            display: flex;
            justify-content: space-around;
            width: 300px;

            .left,
            .right {
                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    margin: 5px 5px;
                }
            }

            img {
                width: 180px;
                height: 180px;
            }


        }

        .bottom {
            margin-top: 50px;
            font-size: 30px;
            text-align: center;
            color: red;

            p {
                margin-top: 10px;
            }
        }
    }

}
</style>
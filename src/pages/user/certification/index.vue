<template>
    <div class="certification">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>实名认证</span>
                </div>
            </template>

            <div class="content">
                <div class="tip">
                    <svg t="1698150666488" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4083" width="16" height="16">
                        <path
                            d="M501.973006 81.099336c-110.239789 0-214.772972 45.604889-294.697419 128.254759A455.249647 455.249647 0 0 0 116.305582 347.639372c-22.234981 52.782104-34.199671 107.961942-35.222704 164.164813-2.277847 111.94218 42.6317 218.305633 126.192709 299.708682a455.065821 455.065821 0 0 0 139.428197 92.680388 438.441536 438.441536 0 0 0 165.651407 36.02994h7.864566c108.873081 0 212.615012-44.917539 291.844116-126.424489a448.520008 448.520008 0 0 0 91.201786-135.77565 444.987348 444.987348 0 0 0 36.941079-161.767079v-2.501635l0.335683-2.277847v-1.486595l-0.223789-2.277847v-2.277846a438.033921 438.033921 0 0 0-130.069044-298.469853 437.722216 437.722216 0 0 0-300.739707-125.625245h-7.528883v-0.239773z m0-80.939487l9.015477-0.127879c277.24192 3.876336 502.293176 225.155158 510.613311 501.957493 0.231781 2.741409 0.231781 5.586719 0.231781 8.671803 0.335683 3.077091 0 5.8185-0.351668 8.66381-9.566956 267.331288-226.409972 502.293176-501.038362 502.293175h-9.35116C237.49502 1016.47911-4.987758 793.034335 0.598961 510.996948 5.618216 240.013113 224.267524 0.039962 501.973006 0.159849z m1.838262 768.033968c2.046066 2.733416 5.131149 4.443799 8.543923 4.555693a21.835359 21.835359 0 0 0 15.153675-6.841532c13.906854-11.397226 30.331327-31.690043 49.361338-61.326028l15.960912 9.119379c-46.052466 80.028348-95.190016 120.278299-146.8292 120.2783-19.717361 0-35.34259-5.594711-47.083491-16.768149a56.314765 56.314765 0 0 1-17.559401-42.296017c0-11.285332 2.509628-25.527868 7.872558-43.087269l63.49198-218.217716c6.154182-20.740394 9.231274-36.477517 9.231273-47.075499a24.145175 24.145175 0 0 0-8.887598-18.238759 33.784064 33.784064 0 0 0-23.489795-7.864566c-4.787474 0-10.366201 0.343675-16.528375 0.45557l5.594711-18.238759 154.589864-25.080291h27.014463L506.656578 722.021464c-4.795467 18.582434-7.305094 30.898791-7.305094 36.933087 0.471554 3.428759 1.942164 6.729638 4.459784 9.239266z m115.93041-465.927553a66.513124 66.513124 0 0 1-47.547054 19.605467 64.714824 64.714824 0 0 1-46.843718-19.605467 65.162401 65.162401 0 0 1-19.493572-47.315272 65.697895 65.697895 0 0 1 19.261791-47.658948 63.659822 63.659822 0 0 1 47.083492-19.725353c18.926109 0 35.006908 6.617744 47.882736 19.725353 12.883821 13.115602 19.493572 29.188408 19.493572 47.658948a63.220237 63.220237 0 0 1-19.837247 47.315272z"
                            fill="#2c2c2c" p-id="4084"></path>
                    </svg>
                    <span>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。</span>
                </div>
                <!-- 卡片底部：认证成功结构、未认证结构 -->
                <div class="list">
                    <el-descriptions v-if="userinfo.authStatus" class="margin-top" :column="1" size="small" border>
                        <el-descriptions-item label-align="center" :width="50">
                            <template #label>
                                <div class="cell-item">
                                    用户姓名
                                </div>
                            </template>
                            {{ userinfo.name }}
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" :width="50">
                            <template #label>
                                <div class="cell-item">
                                    证件类型
                                </div>
                            </template>
                            {{ userinfo.certificatesType == '10' ? '身份证' : '户口本' }}
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" :width="50">
                            <template #label>
                                <div class="cell-item">
                                    证件号码
                                </div>
                            </template>
                            {{ userinfo.certificatesNo }}
                        </el-descriptions-item>
                    </el-descriptions>
                    <!-- 用户未认证结构 -->
                    <el-form v-else ref="form" style="width: 60%;margin:20px auto" label-width="80px" :inline="false"
                        size="normal" :rules="rules" :model="params">
                        <el-form-item label="用户姓名" prop="name" >
                            <el-input placeholder="请输入用户姓名" v-model="params.name"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型" prop="certificatesType">
                            <el-select style="width:100%" placeholder="请选择证件类型" v-model="params.certificatesType">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in arrType"
                                    :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码" prop="certificatesNo">
                            <el-input placeholder="请输入证件号码" v-model="params.certificatesNo" ></el-input>
                        </el-form-item>
                        <el-form-item label="上传证件" prop="certificatesUrl">
                            <!-- 
                                upload组件
                                action：向服务器提交图片的路径
                                limit：照片墙约束图片个数
                                on-exceed：超出约束数量的钩子
                                on-success：上传成功回调
                                on-preview：预览图片回调
                                on-remove：删除文件回调
                             -->
                            <el-upload list-type="picture-card" :limit="1" :on-exceed="exceedhandler"
                                :on-success="successhandle" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                                ref="upload" action="/api/oss/file/fileUpload?fileHost=userAuah">
                                <img style="width: 100%;height: 100%;" src="../../../assets/images/auth_example.png" alt="">
                            </el-upload>
                            <el-dialog v-model="dialogVisible">
                                <img v-if="params.certificatesUrl" style="width: 100%; height: 100%;" w-full
                                    :src="params.certificatesUrl" alt="Preview Image" />
                            </el-dialog>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit">提交</el-button>
                            <el-button @click="reset">重写</el-button>
                        </el-form-item>
                    </el-form>

                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reqUserInfo, reqCertationType, reqUserCertation } from '@/api/user/index.ts'
import { CertationArr, CertationTypeResponseData } from '@/api/user/type';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
let userinfo: any = ref({})
let arrType = ref<CertationArr>([]);
let params = reactive({
    "certificatesNo": '',
    "certificatesType": '',
    "certificatesUrl": '',
    "name": ''
})
// 控制对话框显示隐藏
let dialogVisible = ref<boolean>(false)
// 获取文件上传组件upload组件实例
let upload = ref()
// 获取表单组件
let form = ref()
onMounted(() => {
    getUserInfo()
    getType()
})
// 获取用户信息
const getUserInfo = async () => {
    let result = await reqUserInfo()
    if (result.code == 200) {
        userinfo.value = result.data
    } else {
        ElMessage({
            type: 'error',
            message: result.message
        })
    }
}
// 获取证件类型的数据
const getType = async () => {
    let result: CertationTypeResponseData = await reqCertationType();
    if (result.code == 200) {
        arrType.value = result.data
    }

}
// 超出约束数量钩子
const exceedhandler = () => {
    ElMessage({
        type: 'error',
        message: '超出最大上传数量！'
    })
}
// 图片上传成功钩子
const successhandle = (response: any) => {
    // 如果图片上传成功 清除校验结果
    form.value.clearValidate('validatorUrl')
    // response：上传成功后返回的数据
    // 收集上传图片成功的地址
    params.certificatesUrl = response.data;
    ElMessage({
        type: 'success',
        message: '上传成功！'
    })
}
// 照片墙预览的钩子
const handlePictureCardPreview = () => {
    dialogVisible.value = true
}
// 删除上传回调
const handleRemove = () => {
    params.certificatesUrl = ''
}
// 重写按钮回调
const reset = () => {
    // 清空表单数据
    Object.assign(params, {
        "certificatesNo": '',
        "certificatesType": '',
        "certificatesUrl": '',
        "name": ''
    })
    // 清除已上传的文件列表
    upload.value.clearFiles()
}
// 提交按钮回调
const submit = async () => {
    // 全部的表单校验通过返回一个成功的Promise；一个失败就返回失败Promise，后面语句不执行
    await form.value.validate()
    try {
        // 认证成功
        await reqUserCertation(params)
        ElMessage({
            type:'success',
            message:"认证成功"
        })
        // 重新获取用户数据
        getUserInfo()
    } catch (error) {
        ElMessage({
            type:'error',
            message:"认证失败"
        })
    }
}
// 表单校验
const validatorNo = (rule:any,value:any,callBack:any)=>{
    let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    let hkb = /^\d{9}$/;
    if(reg.test(value)||hkb.test(value)){
        callBack();
    }else{
        callBack(new Error('请输入正确的身份证号'))
    }    
}
const validatorName = (rule:any,value:any,callBack:any)=>{
    let reg = /^[\u00B7\u3007\u3400-\u4DBF\u4E00-\u9FFF\uE000-\uF8FF\uD840-\uD8C0\uDC00-\uDFFF\uF900-\uFAFF]+$/
    if(reg.test(value)){
        callBack();
    }else{
        callBack(new Error('请输入正确的姓名'))
    }    
}
const validatorType = (rule:any,value:any,callBack:any)=>{
    if(value=='10'||value=='20'){
        callBack()
    }else{
        callBack(new Error('请选择证件类型'));
    }    
}
const validatorUrl = (rule:any,value:any,callBack:any)=>{
    if(value.length){
        callBack();
    }else{
        callBack(new Error('请上传证件照图'))
    }
    
}
let rules = reactive({
    name:[{required:true,validator:validatorName,trigger:'blur'}],
    certificatesNo:[{required:true,validator:validatorNo,trigger:'blur'}],
    certificatesType:[{required:true,validator:validatorType,trigger:'blur'}],
    certificatesUrl:[{required:true,validator:validatorUrl}],
})

</script>

<style scoped lang="scss">
.certification {
    .content {
        .tip {
            margin: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
}
</style>
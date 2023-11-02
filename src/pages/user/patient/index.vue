<template>
    <div class="">

        <!-- 卡片：展示用户信息 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>就诊人管理</span>
                    <el-button class="button" type="primary" :icon="User" @click="addUser">添加就诊人</el-button>
                </div>
            </template>
            <div class="user" v-if="scene == 0">
                <Visitor v-for="(user, index) in userArr" :key="user.id" @changeScene="changeScene" class="item"
                    :user="user" :index="index">
                    <el-button type="danger" size="small" :icon="Delete" @click=""></el-button>
                </Visitor>
            </div>

            <!-- 新增/修改功能静态 -->
            <div class="form" v-if="scene == 1">
                <el-divider content-position="left">就诊人信息</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" label-width="80px" :inline="false"
                    size="normal">
                    <el-form-item label="用户姓名" >
                        <el-input v-model="userParams.name" placeholder="请你输入用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-select v-model="userParams.certificatesType" placeholder="请你选择证件类型" clearable filterable @change="">
                            <el-option v-for="item in certationType" :key="item.id" :label="item.name" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号码">
                        <el-input v-model="userParams.certificatesNo" placeholder="请你输入证件号码"></el-input>
                    </el-form-item>
                    <el-form-item label="用户性别">
                        <el-radio-group v-model="radio">
                            <el-radio label="0">
                                男
                            </el-radio>
                            <el-radio label="1">
                                女
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期" size="normal">
                        <el-date-picker v-model="userParams.birthdate" type="date" placeholder="请选择日期"  />
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="userParams.phone" placeholder="请你输入手机号码"></el-input>
                    </el-form-item>
                </el-form>
                <el-divider content-position="left">建档信息（完善后部分医院首次就诊不排队建档）</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" label-width="80px" :inline="false"
                    size="normal">
                    <el-form-item label="婚姻情况">
                        <el-radio-group @change="" v-model="userParams.isMarry">
                            <el-radio :label="0">
                                已婚
                            </el-radio>
                            <el-radio :label="1">
                                未婚
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="自费/医保">
                        <el-radio-group @change="" v-model="userParams.isInsure">
                            <el-radio :label="0">
                                自费
                            </el-radio>
                            <el-radio :label="1">
                                医保
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="当前地址">
                        <el-cascader v-model="userParams.addressSelectes" :props="props" placeholder="请选择当前地址" />
                    </el-form-item>
                    <el-form-item label="详细地址" size="normal">
                        <el-input v-model="userParams.address" placeholder="请你输入用户详细地址"></el-input>
                    </el-form-item>
                </el-form>

                <el-divider content-position="left">联系人信息（选填）</el-divider>
                <el-form style="width: 60%; margin: 10px auto;" ref="form" label-width="80px" :inline="false"
                    size="normal">
                    <el-form-item label="用户姓名">
                        <el-input v-model="userParams.contactsName" placeholder="请你输入用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-select  v-model="userParams.contactsCertificatesType" placeholder="请你选择证件类型" clearable filterable @change="">
                            <el-option v-for="item in certationType" :key="item.id" :label="item.name" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号码">
                        <el-input v-model="userParams.contactsCertificatesNo" placeholder="请你输入证件号码"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input v-model="userParams.contactsPhone" placeholder="请你输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit">提交</el-button>
                        <el-button @click="reset">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>


    </div>
</template>
<script setup lang="ts">

import { onMounted, reactive, ref, watch } from 'vue';
import Visitor from '@/components/visitor/visitor.vue';
import { UserArr, UserResponseData } from '@/api/hospital/type';
import { reqGetUser } from '@/api/hospital';
import { User, Delete } from '@element-plus/icons-vue';
import { reqAddOrUpdataUser, reqCertationType, reqCity } from '@/api/user';
import { AddOrUpdataUser, CertationArr, CertationTypeResponseData } from '@/api/user/type';
import { CascaderProps, ElMessage } from 'element-plus';
import { useRoute,useRouter } from 'vue-router';
// 定义存储就诊人信息
let userArr = ref<UserArr>([]);
let radio = ref('1')
let scene = ref<number>(0);
// 存储证件类型数组
let certationType = ref<CertationArr>([]);
// 绑定响应式 表单数据
let userParams = reactive<AddOrUpdataUser>({    
    address:"" ,
    addressSelectes:[],
    birthdate: "",
    certificatesNo: "",
    certificatesType: "",
    isInsure: 0,
    isMarry: 0,
    name: "", 
    phone: "", 
    sex: 0 , 
    contactsName: "",
    contactsPhone: "",  
    contactsCertificatesNo: "",
    contactsCertificatesType: "",
})
let $route = useRoute();
let $router = useRouter()
onMounted(() => {
    // 获取就诊人信息
     fetchUserData();
    // 获取证件类型
     getCertification();
    // 判断是否从挂号组件中跳转过来【挂号组件路径中携带参数type==add】
    if($route.query.type=='add'){
        scene.value=1
    }
  
})
// 获取全部就诊人
const fetchUserData = async () => {
    let result: UserResponseData = await reqGetUser();
    userArr.value = result.data
}
// 添加用户
const addUser = () => {
    scene.value = 1
}
// 修改用户信息
const changeScene = (user:AddOrUpdataUser) => {
    scene.value = 1
    // 收集已有的就诊人信息
    Object.assign(userParams,user);
    
}
// 获取证件类型
const getCertification = async () => {
    let result: CertationTypeResponseData = await reqCertationType();
    if (result.code == 200) {
        certationType.value = result.data
    }
}

// 级联选择器数据
const props:CascaderProps = {
    lazy:true,// 懒加载功能
    async lazyLoad(node:any,resolve:any){ // 加载级联选择器数据方法
        let result = await reqCity(node.data.id || '86');// 请求数据
        let showData = result.data.map(((item:any)=>{
            return { // 级联选择器数据必须要三个字段 value\label\leaf
                id:item.id,
                label:item.name, 
                value:item.value,
                leaf:!item.hasChildren // 控制选择框二级展开
            }           
        }));
        // 注入组件需要展示的数据
        resolve(showData);
    }
}
// 表单提交
const submit = async ()=>{
    try {
        await reqAddOrUpdataUser(userParams)
        ElMessage({
            type:'success',
            message:userParams.id?'更新成功':'创建成功'
        });
        if($route.query.type){
            $router.back()
        }else{
            // 切换场景
            scene.value = 0;
            // 重新获取全部就诊人
            fetchUserData()
        }
    } catch (error ) {
        ElMessage({
            type:'error',
            message:userParams.id?'更新失败':'新建失败'
        })
    }
} 
// 重置按钮
const reset = ()=>{
    Object.assign(userParams,{  
        id:null,  
    address:"" ,
    addressSelectes:[],
    birthdate: "",
    certificatesNo: "",
    certificatesType: "",
    isInsure: 0,
    isMarry: 0,
    name: "", 
    phone: "", 
    sex: 0 , 
    contactsName: "",
    contactsPhone: "",  
    contactsCertificatesNo: "",
    contactsCertificatesType: "",
})
}
/* watch(
    ()=>userArr.value,
    ()=>{
        console.log(123);        
    }
) */
// 监听全部就诊人的数据
watch(
    ()=>userArr.value,
    ()=>{
        if($route.query.type=='edit'){
            let user = userArr.value.find((item:any)=>{
                return item.id === $route.query.id;
            })
            Object.assign(userParams,user)
        }        
    }
)
</script>

<style scoped lang="scss">
.box-card {
    margin: 20px 0;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user {
        display: flex;
        flex-wrap: wrap;

        .item {
            width: 32%;
            margin: 5px;
        }
    }
}
</style>
<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li :class="{active:regionFlg==''}" @click="changeRegion('')">全部</li>
                <li  v-for="item in regionData" :key="item.value"
                    :class="{active:regionFlg == item.value}"
                    @click="changeRegion(item.value)"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reqHospitalLevelAndregion} from '@/api/home/index'
import { onMounted,ref } from 'vue';
import {HospitalLevelAndregionResponseData,HospitalLevelAndregionArr} from '@/api/home/type'
// 定义变量接收请求地区数据
let regionData = ref<HospitalLevelAndregionArr>([])
// 定义控制地区点击响应式数据
let regionFlg = ref<string>('')
onMounted(() => {
    getRegionData()
});
const getRegionData = async()=>{
    let result:HospitalLevelAndregionResponseData = await reqHospitalLevelAndregion('beijin')
    // console.log(result);
    if(result.code == 200){
        regionData.value = result.data
    }    
}
const changeRegion = (region:string)=>{
    regionFlg.value = region
}

</script>
<script lang="ts">
    export default {
        name:'Region'
    }
</script>
<style scoped lang="scss">
.region{
    color:#7f7f7f;
    margin-top:10px;
    .content{
        margin:9px 0;
        display:flex;
        .left{
            width:70px;
        }
        ul{
            display:flex;
            flex-wrap: wrap;
            li{
                margin-right:5px;
                margin-bottom:5px;
                &.active{
                    color:#9cdcfe;
                }
            }
            li:hover{
                    color:#9cdcfe;
                    cursor: pointer;
            }
        }
    }
}
</style>
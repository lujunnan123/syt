<template>
    <div class="level">
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <!-- 如果activeFlg等于一个空串,则值为true,显示active CSS样式 -->
                <li :class="{active:activeFlg==''}" @click="changeLevel('')">全部</li>
                <li v-for="item in levelArr" :key="item.value" 
                    @click="changeLevel(item.value)"
                    :class="{active:activeFlg==item.value}"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {reqHospitalLevelAndregion} from '@/api/home/index'
    import { onMounted, ref } from 'vue';
    import {HospitalLevelAndregionResponseData,HospitalLevelAndregionArr} from '@/api/home/type'
    // 定义一个数组存储医院等级数据
    let levelArr = ref<HospitalLevelAndregionArr>([]);
    // 控制医院等级高亮响应式数据
    let activeFlg = ref<string>('')
    onMounted(() => {
        getLevel()
    });
    // 请求医院等级数据
    const getLevel = async()=>{
        let result:HospitalLevelAndregionResponseData =await reqHospitalLevelAndregion('Hostype')
        if(result.code==200){
            levelArr.value = result.data;
        }       
    }
    // 点击标签，将该标签特征存入activeFlg
    const changeLevel = (level:string)=>{
        activeFlg.value = level;
        $emit('getLevel',level)
    }
    let $emit = defineEmits(["getLevel"])

</script>
<script lang="ts">
export default {
    name:'Level'
}
</script>

<style scoped lang="scss">
.level{
    color:#7f7f7f;
    margin-top:10px;
    .content{
        margin:9px 0;
        display:flex;
        .left{
            width:50px;
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
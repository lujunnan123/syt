<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop/>
    <!-- 展示路由组件区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
   <HospitalBottom/>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue';

onMounted(()=>{
  request.get('/hosp/hospital/1/10').then(res=>{
    console.log('获取数据展示',res);
    
  })
})


</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;    
  .content{
    width: 1200px;
    min-height: 700px;
      // background: red;
      // margin-top:75px;
    }
 
}
</style>
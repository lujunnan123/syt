<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop/>
    <!-- 展示路由组件区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
   <HospitalBottom/>
   <Login v-if="userStore.visiable"/>
  </div>
</template>

<script setup lang="ts">
import useUserStore from './store/modules/user';
let userStore = useUserStore()
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
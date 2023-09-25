<template>
    <div class="search">
        <el-autocomplete 
        class="el-input_wrapper"
            clearable 
            placeholder="请输入医院名称" 
         />
        <el-button type="primary" :icon="Search" size="default" @click="">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import {  Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
    .search{
        width:100%;
        height:50px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        :deep(.el-input_wrapper){
            width: 600px; 
            margin-right:10px
        };
      
 }
</style>
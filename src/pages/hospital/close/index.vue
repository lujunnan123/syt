<template>
    <div class="suspend_wrapper" v-if="detailStore.hospitalInfo.hospital">
        <div class='m-l-30 m-r-30'>
            <div style="text-align: center;">
                <h2>{{ detailStore.hospitalInfo.hospital?.hosname }}停诊信息</h2>
                <el-empty description="暂无信息" />
            </div>
        </div>
    </div>
    <el-skeleton v-else :rows="9" animated />
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: "suspend_page"
})
</script>
<script setup lang="ts">

import useDetailStore from '@/store/modules/hospitalDetail';
let detailStore = useDetailStore()
</script>
  
<style lang="scss" scoped>
h2 {
    font-size: 21px;
}
</style>
  
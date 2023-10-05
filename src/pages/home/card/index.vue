<template>  
      <el-card shadow="hover" @click="goDetail">
        <div class="content">
          <div class="left">
            <div class="top_name">{{hospitalInfo.hosname}}</div>
            <div class="bottom_other">
              <div class="level">
                <svg t="1695718190229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1717" width="16" height="16"><path d="M881.066667 394.666667c-21.333333-23.466667-51.2-36.266667-81.066667-36.266667H618.666667v-117.333333c0-44.8-29.866667-85.333333-87.466667-117.333334-17.066667-10.666667-38.4-12.8-57.6-8.533333-19.2 4.266667-36.266667 17.066667-46.933333 34.133333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4l-125.866667 281.6H204.8c-59.733333 0-108.8 46.933333-108.8 106.666667v258.133333c0 57.6 49.066667 106.666667 108.8 106.666667h544c53.333333 0 98.133333-38.4 106.666667-89.6l51.2-337.066667c4.266667-34.133333-6.4-64-25.6-87.466666z m-593.066667 448H204.8c-25.6 0-44.8-19.2-44.8-42.666667v-256c0-23.466667 19.2-42.666667 44.8-42.666667h83.2v341.333334z m554.666667-373.333334L789.333333 806.4c-4.266667 21.333333-21.333333 36.266667-42.666666 36.266667H352V471.466667l130.133333-290.133334c2.133333-4.266667 4.266667-4.266667 6.4-4.266666 2.133333 0 4.266667 0 8.533334 2.133333 25.6 14.933333 55.466667 38.4 55.466666 64v149.333333c0 17.066667 14.933333 32 32 32h213.333334c12.8 0 25.6 4.266667 34.133333 14.933334 8.533333 6.4 12.8 19.2 10.666667 29.866666z" fill="#2c2c2c" p-id="1718"></path></svg>
                <span>{{hospitalInfo.param.hostypeString}}</span>
              </div>
              <div class="time">
                <svg t="1695718283264" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="811" width="16" height="16"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z" fill="#666666" p-id="812"></path><path d="M512 304c9.6 0 16 6.4 16 16v256c0 9.6-6.4 16-16 16s-16-6.4-16-16v-256c0-9.6 6.4-16 16-16z" fill="#D8D8D8" p-id="813"></path><path d="M512 608c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 19.2-12.8 32-32 32z m0-304v16-16z" fill="#666666" p-id="814"></path><path d="M646.4 662.4c-3.2 6.4-12.8 9.6-22.4 6.4l-108.8-67.2c-6.4-3.2-9.6-12.8-6.4-22.4 3.2-6.4 12.8-9.6 22.4-6.4L640 640c9.6 3.2 12.8 16 6.4 22.4z" fill="#D8D8D8" p-id="815"></path><path d="M633.6 684.8c-6.4 0-12.8 0-16-3.2l-108.8-67.2c-16-9.6-19.2-28.8-9.6-44.8 9.6-16 28.8-19.2 44.8-9.6l108.8 67.2c16 9.6 19.2 28.8 9.6 44.8-6.4 9.6-19.2 12.8-28.8 12.8z m-108.8-96l124.8 73.6-12.8-9.6-112-64z" fill="#666666" p-id="816"></path></svg>
                <span>每天{{hospitalInfo.bookingRule.releaseTime}}放号</span>
              </div>
            </div>
          </div>
          <div class="right">
            <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
          </div>
        </div>
      </el-card>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  let $router = useRouter();
  // 接受父组件传入的参数 已有医院数据
  let props = defineProps(['hospitalInfo'])
  const goDetail = ()=>{
    $router.push({path:"/hospital/register",query:{hoscode:props.hospitalInfo.hoscode}})
  }
</script>

<style scoped lang="scss">
  .content{
    display: flex;
    justify-content: space-between;
    .left{
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .bottom_other{
        color: #7f7f7f;
        display: flex;
        justify-content: space-between;
        .level,.time{
          display: flex;
          align-items: center;
          span{
            margin-left: 5px;
          }
        }
      }
    }
    .right{

      img{
        width: 80px;
        height: 80px;
      }
    }
  }
</style>
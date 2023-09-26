<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li class="active">全部</li>
                <li  v-for="(item, index) in 17" :key="index">上城区</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

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
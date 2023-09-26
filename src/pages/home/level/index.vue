<template>
    <div class="level">
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <li class="active">全部</li>
                <li  v-for="(item, index) in 7" :key="index">三级甲等</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

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
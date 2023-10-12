<template>
    <div>
        <span>
            获取验证码({{ time }})
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let time = ref<number>(5)
// 获取从父组件中传入的prps参数，用于控制倒计时的开启时间
let props = defineProps(['showTime'])
let $emit = defineEmits(['getFlag'])
watch(
    () => props.value, 
    () => {
        // 开启定时器
        let timer = setInterval(()=>{
            time.value--
            //倒计时为0时，清除定时器
            if(time.value == 0){
                clearInterval(timer)
                // 通知父组件
                $emit('getFlag',false)
            }
        },1000)
    },
    {
        // 组件挂载时 立即监听
        immediate:true
    }
)
</script>

<style scoped></style>
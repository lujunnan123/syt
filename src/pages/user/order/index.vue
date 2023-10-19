<template>
    <div>
        <div v-if="$route.query.orderId">
            <!-- 如果传入参数，则显示该顶到号的订单 -->
            <Detail/>
        </div>
        <div v-else>
            <!-- 如果无传入参数，则显示所有订单 -->
            <allOrder/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted} from 'vue';
import { useRoute } from 'vue-router';
//引入子组件
import Detail from './detail/index.vue'
import allOrder from './allOrder/index.vue'
let $route = useRoute();
onMounted(() => {
})
</script>

<style scoped lang="scss"></style>
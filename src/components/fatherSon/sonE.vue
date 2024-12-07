<template>
    <div class="myDiv">
        <h5>子组件通过defineProps获取name:{{ msg.name }} </h5>
        <h5>子组件通过defineProps获取money:{{ msg.money }} </h5>
    </div>
</template>

<script lang="ts" setup>  

// 子组件直接读取即可
import useSonMsg from "@/stores/useSonMsg"
const useSonStore =useSonMsg();
const {msg} = useSonStore.state;

</script>

<style scoped lang="scss">

</style>
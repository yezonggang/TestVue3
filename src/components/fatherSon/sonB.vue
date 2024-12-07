<template>
    <div class="myDiv">
        <h5>子组件通过defineProps获取name:{{ props.sonBMsg.name }} </h5>
        <h5>子组件通过defineProps获取money:{{ props.sonBMsg.money }} </h5>
        <el-button type="primary" @click="updateValue">自己改名,自己加钱</el-button>
    </div>
    
</template>

<script lang="ts" setup>  
import { defineProps,defineEmits } from 'vue';

interface Msg {
    name: string;
    money: number;
}

const props = defineProps<{
    sonBMsg: Msg
}>();

const emit = defineEmits(['update:sonBMsg'])

function updateValue(){
    props.sonBMsg.name = props.sonBMsg.name+'~';
    props.sonBMsg.money = props.sonBMsg.money+1;
    // 这里可以不调用emit，因为父组件已经监听了，会自动更新
    // emit('update:sonBMsg',props.sonBMsg)
}

</script>

<style scoped lang="scss">

</style>
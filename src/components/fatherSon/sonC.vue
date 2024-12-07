<template>
    <div class="myDiv">
        <h5>子组件通过defineProps获取name:{{ props.sonCMsg.name }} </h5>
        <h5>子组件通过defineProps获取money:{{ props.sonCMsg.money }} </h5>
        <el-button type="primary" @click="updateValue">想加倍</el-button>
    </div>
    
</template>

<script lang="ts" setup>  
import { defineProps,defineEmits,type PropType } from 'vue';

interface Msg {
    name: string;
    money: number;
}

const props = defineProps({
    sonCMsg: {
        type:Object as PropType<Msg>,
        default:()=>{}
    },
    name:String,
    money:Number
});
const emit = defineEmits(['testCallBack'])

function updateValue(){
    // 子组件更新了父组件的数据
    props.sonCMsg.name = props.sonCMsg.name+'~';
    props.sonCMsg.money = props.sonCMsg.money+1;
    // 更新父数据后，回调父的方法
    emit('testCallBack',props.sonCMsg.name,props.sonCMsg.money)
}

</script>

<style scoped lang="scss">

</style>
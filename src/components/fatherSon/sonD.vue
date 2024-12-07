<template>
    <div class="myDiv">
        <h5>子组件通过defineProps获取name:{{ props.sonDMsg.name }} </h5>
        <h5>子组件通过defineProps获取money:{{ props.sonDMsg.money }} </h5>
        <el-button type="primary" @click="helpMe">提供卡号给父加钱</el-button>
    </div>
    
</template>

<script lang="ts" setup>  
import { defineProps,defineExpose,type PropType,defineEmits } from 'vue';

interface Msg {
    name: string;
    money: number;
}

const props = defineProps({
    sonDMsg: {
        type:Object as PropType<Msg>,
        default:()=>{}
    },
    name:String,
    money:Number
});

const emit= defineEmits(['testCallBack2'])
function helpMe(){
    console.log('helpMe-------------->');
    emit('testCallBack2')
}   


defineExpose({
    updateValue
})
function updateValue(){
    // 更新父数据后，回调父的方法
    console.log('updateValue-------------->');
    props.sonDMsg.name = props.sonDMsg.name+'~';
    props.sonDMsg.money = props.sonDMsg.money+1;
}

</script>

<style scoped lang="scss">

</style>
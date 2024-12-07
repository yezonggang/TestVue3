<template>
    <div class="myDiv">
      <h5>子组件通过defineProps获取name:{{ props.sonAMsg.name }}</h5>
      <h5>子组件通过defineProps获取money:{{ props.sonAMsg.money }}</h5>
      <el-button type="primary" @click="updateValue">自己改名,自己加钱</el-button>

    </div>
  </template>
  
<script lang="ts" setup>
  import { defineProps,watch,type PropType } from 'vue'
  
  //name 是通过 defineProps 获取是响应式的
  interface Msg {
    name: string;
    money: number;
}

const props = defineProps({
    sonAMsg: {
        type:Object as PropType<Msg>,
        default:()=>{}
    },
    name:String,
    money:Number
});

  //如果希望在 name 发生变化时执行某些操作，可以在子组件中使用 watch 来监听 name 的变化。
  // 监听 name 的变化
  watch(() => props.sonAMsg.name, (newName, oldName) => {
  console.log('name changed from', oldName, 'to', newName)
  // 在这里可以执行其他操作
  })

  function updateValue(){
    props.sonAMsg.name = props.sonAMsg.name+'~';
    props.sonAMsg.money = props.sonAMsg.money+1;
}

  </script>
  
  <style scoped lang="scss">
  </style>
<template>
      <el-container class="common-layout">
        <el-aside width="200px">
          <commonSider></commonSider>
          </el-aside> 
        <el-container>
          <el-header class="common-header">
            <commonHeader></commonHeader>
          </el-header>
          <el-main>
            <RouterView></RouterView>
            </el-main>
        </el-container>
      </el-container>
  </template>
  


<script lang="ts" setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router';
import commonSider from "../../components/home/commonSider.vue";
import commonHeader from "../../components/home/commonHeader.vue"; 


</script>


<style lang="scss">
.common-layout {
  height: 100%;
}

.common-header{
  background-color: #a9a1c5;

}


</style>

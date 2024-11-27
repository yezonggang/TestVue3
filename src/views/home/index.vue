<template>
      <el-container class="common-layout">
      <commonSider></commonSider>
        <el-container>
          <el-header class="common-header">
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
import commonSider from "../../components/home/CommonSider.vue";


</script>


<style lang="scss">
.common-layout, .common-aside, .el-menu {
  height: 100%;
}

.el-menu {
  border-right: none;
  background-color: #a9a1c5;
}

.common-header{
  background-color: #a9a1c5;

}


</style>

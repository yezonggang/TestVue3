<template>
      <el-container class="common-layout">
        <el-aside width="200px" class="comman-aside">
          <!-- <h4>TestVue3管理系统</h4>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
            </el-radio-group> -->
          <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><location /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
        </el-aside>
        <el-container>
          <el-header class="common-header">
          </el-header>
          <el-main>Main
            <Edit style="width: 1em; height: 1em; margin-right: 8px" />
            <el-icon><Shop /></el-icon>
            </el-main>
        </el-container>
      </el-container>
  </template>
  


<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const isCollapse = ref(true)

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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

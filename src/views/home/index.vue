<template>
  <el-container class="common-layout">
    <!-- 这里吧el-side注释掉了,因为侧边栏已经封装了且不影响el-container的flex左右样式,不去掉会多个侧边栏 -->
    <!-- <el-aside > -->
    <commonSider></commonSider>
    <!-- </el-aside>  -->
    <el-container>
      <el-header class="my-common-header">
        <commonHeader></commonHeader>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import commonSider from "@/components/home/commonSider.vue";
import commonHeader from "@/components/home/commonHeader.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  border: none;
}

.my-common-header {
  background-color: #a9a1c5;
  border: none;
}

// .common-sider{
//   width: 200px;
//   height: 100%;
//   border-right: none;
//   background-color: #a9a1c5;
//   flex-shrink: 0;
// }
</style>

<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" default-active="2" @open="handleOpen" @close="handleClose">
    <!-- 不带子路由的菜单 -->
    <div>
      <h4 v-if="!isCollapse" class="menu-title">TestVue3测试系统</h4>
      <div v-else class="menu-title-placeholder"></div>
      <!-- 其他菜单内容 -->
    </div>
    <el-menu-item @click="clickMenu(item)" v-for="item in hasNoChildren(fakeMenu)" id="menu-item">
      <Icons icon="mdi:home" />
      <span>{{ item.label }}</span>
    </el-menu-item>

    <!-- 带有子路由的menu -->
    <el-sub-menu v-for="item in hasChildren(fakeMenu)">
      <template #title>
        <Icons icon="ep:aim" />
        <span>{{ item.label }}</span>
      </template>
      <!-- 针对子路由循环 -->
      <el-menu-item-group v-for="subItem in item.children">
        <el-menu-item @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router";
import useMenuStore from "@/stores/useMenu";
const useMenu = useMenuStore();
// onMounted(()=>{
//   menuArray.value = useMenu.menu
// })
const { isCollapse } = storeToRefs(useMenu);

const fakeMenu = ref<menuItem[]>([
  {
    path: "/home/dashboard",
    name: "dashboard",
    label: "统计面板",
    icon: "home",
  },
  {
    path: "/home/tables",
    name: "tables",
    label: "简单表格",
    icon: "home",
  },
  {
    path: "/home/nested",
    name: "nested",
    label: "嵌套表格",
    icon: "home",
  },
  {
    path: "/home/tabs",
    name: "tabs",
    label: "标签表格",
    icon: "home",
  },
  {
    path: "/home/fathers",
    name: "father",
    label: "父子组件",
    icon: "home",
  },
  {
    label: "其他组件",
    path: "/home/others",
    name: "others",
    icon: "home",
    children: [
      {
        path: "/draggable",
        name: "draggable",
        label: "draggable组件",
        icon: "home",
      },
      {
        path: "/flow",
        name: "flow",
        label: "vue-flow组件",
        icon: "home",
      },
      {
        path: "/logic",
        name: "logic",
        label: "logicFlow组件",
        icon: "home",
      },
    ],
  },
]);

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
function hasChildren(item: menuItem[]): menuItem[] {
  return item.filter((menuItem) => menuItem.children);
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
function hasNoChildren(item: menuItem[]): menuItem[] {
  return item.filter((menuItem) => !menuItem.children);
}

function clickMenu(item: menuItem) {
  router.push({ name: item.name });
  console.log(item);
}
</script>

<style lang="scss" scoped>
// 菜单收起不收起都会生效，这里专门用来定义菜单收起的样式
.el-menu {
  height: 100%;
  border-right: none;
  background-color: #a9a1c5;
  // 不加这个菜单中的统计面板页会挤压el-menu
  flex-shrink: 0;
}
// 菜单不收起的样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  border-right: none;
  background-color: #a9a1c5;
  width: 150px;
  min-height: 400px;
}
.menu-title {
  margin-top: 0; /* 移除顶部外边距 */
  padding-top: 30px; /* 移除顶部内边距 */
  padding-left: 10px;
  margin-bottom: 10px; /* 调整底部外边距，根据需要调整 */
}

.menu-title-placeholder {
  margin-top: 0; /* 移除顶部外边距 */
  padding-top: 30px; /* 移除顶部内边距 */
  padding-left: 10px;
  margin-bottom: 10px; /* 调整底部外边距，根据需要调整 */
  height: 25px;
}
</style>

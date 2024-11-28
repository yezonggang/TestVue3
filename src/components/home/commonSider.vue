<template>
        <el-aside width="200px" class="comman-aside">
          <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        >

        <!-- 不带子路由的菜单 -->
        <el-menu-item @click="clickMenu(item)"  v-for="item in hasNoChildren(fakeMenu)" >
          <el-icon><location /></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>

        <!-- 带有子路由的menu -->
        <el-sub-menu v-for="item in hasChildren(fakeMenu)">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.label}}</span>
          </template>
          <!-- 针对子路由循环 -->
          <el-menu-item-group v-for="subItem in item.children">
            <el-menu-item @click="clickMenu(subItem)" >{{subItem.label}}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
        </el-aside>
</template>


<script  lang="ts" setup>
import { ref,onMounted } from 'vue'
import router from '@/router';
// import useMenuStore from '@/stores/useMenu';
// const useMenu = useMenuStore()
// onMounted(()=>{
//   menuArray.value = useMenu.menu
// })

const fakeMenu = ref<menuItem[]>([
          {
            path: '/home/main',
            name: 'main',
            label: '首页',
            icon: 's-home',
          },
          {
            path: '/home/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
          },
          {
            path: '/home/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
          },
          {
            label: '其他',
            path: '/home/other',
            name: 'other',
            icon: 'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
              }
            ]
          }
        ])


const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
function hasChildren(item:menuItem[]):menuItem[]{
  return item.filter((menuItem) => menuItem.children)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
function hasNoChildren(item:menuItem[]):menuItem[]{
  return item.filter((menuItem) => !menuItem.children)
}

function clickMenu(item:menuItem){
  router.push({name:item.name})
  console.log(item)
}




</script>


<style lang="scss">

</style>
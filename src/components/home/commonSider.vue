<template>
        <el-aside width="200px" class="comman-aside">
          <!-- <h4>TestVue3管理系统</h4>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
            </el-radio-group> -->
          <el-menu
        @open="handleOpen"
        @close="handleClose"
        v-for="(menu, index) in hasNoChildren(menuArray)">    
        <el-menu-item>
          <i class="el-icon-menu"></i>
          <span>{{menu.name}}</span>
        </el-menu-item>
      </el-menu>
        </el-aside>
</template>


<script  lang="ts" setup>
import { ref,onMounted } from 'vue'
import useMenuStore from '@/stores/useMenu';

const useMenu = useMenuStore()
let menuArray = ref<menuItem[]>([])


const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

function hasChildren(item:menuItem[]):menuItem[]{
  return item.filter((menuItem) => menuItem.children)
}

function hasNoChildren(item:menuItem[]):menuItem[]{
  return item.filter((menuItem) => !menuItem.children)
}


onMounted(()=>{
  menuArray.value = useMenu.menu
})



</script>


<style lang="scss">

</style>
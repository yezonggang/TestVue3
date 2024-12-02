<template>
    <div class="header-bar" >
        <el-button type="primary" @click="handMenu">隐藏菜单</el-button>
        <el-dropdown>
      <el-button type="primary">
        个人中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="showForm">个人信息</el-dropdown-item>
          <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</div>

</template>


<script lang="ts" setup>
import {ref } from 'vue'
import useToken from '@/stores/useToken';
import router from '@/router';

const ifShowForm = ref(false)
const useTokenState = useToken()

function handMenu() {
    console.log
}
function showForm() {
    ifShowForm.value = true;
}
function loginOut() {
    useTokenState.clearToken;
    router.push({name:'login'})

    
}

</script>


<style scoped lang="scss" >
.header-bar {
    margin-top: 15px;
    display: flex;
    justify-content: space-between; /* 添加此行 */

}
</style>
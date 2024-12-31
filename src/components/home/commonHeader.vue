<template>
    <div class="common-header-bar" >
      <div>
        <el-button v-if ="isCollapse == true" type="primary" @click="handMenu">展示菜单</el-button>
        <el-button v-else type="primary" @click="handMenu">隐藏菜单</el-button>
      </div>
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
<!-- Dialog 弹窗部分 -->
<el-dialog v-model="dialogVisible" title="修改个人信息" width="400px" >
      <el-form ref="formRef" :model="formData" label-width="80px" style="margin-top: 20px;">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" style="width: 250px;"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formData.password" style="width: 250px;"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 40px;">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
</div>

</template>


<script lang="ts" setup>
import {ref } from 'vue'
import useToken from '@/stores/useToken';
import router from '@/router';
import  useMenuStore from '@/stores/useMenu'
import { storeToRefs } from 'pinia';

const menuStore = useMenuStore()
// 结构store的同时保持响应式，能够监听store中的数据变化
const {isCollapse} = storeToRefs(menuStore)
// actions则不需要
const {setCollapsed} = menuStore
const useTokenState = useToken()


// 控制对话框是否显示
const dialogVisible = ref(false);
function handMenu() {
  setCollapsed()
}
function showForm() {
  dialogVisible.value = true;
}
function loginOut() {
    useTokenState.clearToken;
    router.push({name:'login'})   
}

// 定义一个 ref 来引用表单实例
const formRef = ref(null);


// 表单数据模型
const formData = ref({
  username: '',
  password: ''
});


// 提交表单
const onSubmit = () => {
  // 可以通过 formRef.value 调用表单实例的方法
  if (formRef.value) {
    // 这里可以添加表单验证逻辑
    console.log('submit!');
    // 如果验证成功，可以关闭对话框
    dialogVisible.value = false;
  }
};

// 取消表单
const onCancel = () => {
  // 重置表单
  if (formRef.value) {
    ;
  }
  // 关闭对话框
  dialogVisible.value = false;
};

</script>


<style lang="scss" scoped>
.common-header-bar {
    margin-top: 15px;
    display: flex;
    justify-content: space-between; /* 添加此行 */

}


</style>
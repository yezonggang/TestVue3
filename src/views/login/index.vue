<template>
    <div class="login-content">
        <el-form :model="loginFormData" label-width="auto" style="max-width: 600px">
            <el-form-item label="用户名">
                <el-input v-model="loginFormData.loginUser" />
            </el-form-item> 
            <el-form-item label="登录密码">
                <el-input v-model="loginFormData.loginPwd" />
            </el-form-item> 
        </el-form>
        <div class="btn-group">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info">注册</el-button>
        </div>

    </div>
</template>



<script lang="ts" setup>
import {ref} from 'vue'
import {loginApi} from "@/api/login"

const loginFormData=ref({
    loginUser: "",
    loginPwd:""
})
function login(){
    console.log(loginFormData)
    loginApi(loginFormData.value).then((res:any) => {
        console.log(res);
    })

}


</script>


<style lang="scss" scoped>
.login-content{
    height: 300px;
    width: 400px;
    border-radius: 8%;
    background-color:rgba(95, 212, 173, 0.74);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    box-shadow: inset 0px -12px 8px rgba(63, 53, 53, 0.3);
    // 子元素垂直居中
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

// .btn-group{
//     display: flex;
//     align-items: center;
// }
</style>

<template>
    <div class="login-bg">
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
    </div>
</template>



<script lang="ts" setup>
import {ref} from 'vue'
import {loginApi} from "@/api/login"
import { getMenuList } from '@/api/menu'
import { useTokenStore} from "@/stores/useToken"
import useMenuStore from '@/stores/useMenu'
import router from "@/router"

const tokenStore=useTokenStore()
const menuStore = useMenuStore()

const loginFormData=ref({
    loginUser: "",
    loginPwd:""
})

interface MenuItem {
  path: string;
  name: string;
  label: string;
  icon: string;
  url: string;
}

interface Data {
  menu: MenuItem[];
}

interface Response {
  code: number;
  data: Data;
}

function login(){
    console.log(loginFormData)
    loginApi(loginFormData.value).then((res:any) => {
        console.log(res);
        console.log(res.code)
        if(res.code==200){
            //alert("登录成功")
            console.log("登录成功")
            tokenStore.setToken(res.data["token"])
            console.log("token is "+res.data["token"]);
            tokenStore.token=res.data["token"]
            // 获取menu菜单
            getMenuList(loginFormData.value).then((res2:any) => {
                //const menuList1= res2 as Response;
                const menuList1= res2 ;
                console.log(menuList1);
                console.log(menuList1.data);
                console.log(menuList1.code);
                //menuStore.setMenu(menuList1.data.menu)
                //menuStore.setRouter();
            })
            router.push({ name: 'main' })
        }else{
            //alert("登录失败")
            console.log("登录失败")
         }

    })

}


</script>


<style lang="scss" scoped>
.login-bg{
  height: 100%;
  width: 100%;
  background-image: url("/src/assets/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

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

// src/api/login.ts
import request from "@/api/request"; // 假设你的别名配置为@代表src目录

// 定义登录接口函数
export function login(loginData: any) {
  return request({
    url: "/api/user/login", // 假设登录接口的URL为'/api/user/login'
    method: "post", // 登录接口通常使用POST方法
    data: loginData, // 传递登录数据，如用户名和密码
  });
}

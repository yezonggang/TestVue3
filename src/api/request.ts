// src/api/request.ts
import axios from "axios";
import { ElMessage } from "element-plus";
// 创建Axios实例
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1", // 替换为你的API基础URL
  timeout: 10000, // 请求超时时间
  headers: { "Content-Type": "application/json" },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在这里添加token或其他请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么，比如显示错误消息
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，重定向到登录页
          ElMessage.error("未授权，请登录");
          break;
        case 403:
          // 禁止访问
          ElMessage.error("禁止访问");
          break;
        case 404:
          // 资源未找到
          ElMessage.error("资源未找到");
          break;
        case 500:
          // 服务器错误
          ElMessage.error("服务器错误");
          break;
        default:
          ElMessage.error("其他错误");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

import { useTokenStore } from "@/stores/useToken"; // 假设 store 位于 src/store/index.ts 或其他相应位置
import router from "./router";

// 定义一个导航守卫函数，用于检查 token 并决定是否重定向到登录页
const tokenStore = useTokenStore();
router.beforeEach(async (to, from, next) => {
  // 检查 store 中的 token 是否存在
  const tokenExists = tokenStore.getToken() !== null && tokenStore.getToken() !== "";

  if (!tokenExists) {
    // 如果没有 token，则重定向到登录页
    // 假设登录页的路由路径是 '/login'
    next("/login");
  } else {
    // 如果有 token，则继续导航
    next();
  }
});

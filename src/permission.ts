import router from "./router";
import { useTokenStore } from "@/stores/useToken";

const useToken = useTokenStore();

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
  } else {
    if (useToken.token !== "") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});

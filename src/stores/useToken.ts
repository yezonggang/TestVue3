import { ref } from "vue";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useTokenStore = defineStore("token", () => {
  const token = ref("");

  function setToken(token: string) {
    Cookies.set("token", token);
    return token;
  }
  function clearToken(token: string) {
    Cookies.set("token", "");
    return token;
  }
  return { token, setToken, clearToken };
});

export default useTokenStore;

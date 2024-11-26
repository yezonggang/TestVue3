import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useTokenStore = defineStore("token", () => {
  const token = ref("");

  function setToken(token: string) {
    Cookies.set("token", token);
    return token;
  }
  return { token, setToken };
});

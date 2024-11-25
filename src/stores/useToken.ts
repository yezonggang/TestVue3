import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useTokenStore = defineStore("token", () => {
  const token = ref("");

  function getToken() {
    return Cookies.get("token");
  }

  function setToken() {
    return Cookies.set("token", token.value);
  }

  return { token, getToken, setToken };
});

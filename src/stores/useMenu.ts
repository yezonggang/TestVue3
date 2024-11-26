import { defineStore } from "pinia";
import { ref } from "vue";

const useMenuStore = defineStore("menu", () => {
  const menu = ref("");

  function setMenu(menuName: string) {
    menu.value = menuName;
  }

  return {
    menu,
    setMenu,
  };
});

export default useMenuStore;

import { defineStore } from "pinia";
import { ref } from "vue";
import router from "@/router";

const useMenuStore = defineStore("menu", () => {
  const menu = ref<menuItem[]>();

  function setMenu(menuList: menuItem[]) {
    menu.value = menuList;
    console.log("menu.value" + JSON.stringify(menu.value, null, 2));
  }

  function setRouter(menuList: menuItem[]) {
    console.log("menuList.value" + JSON.stringify(menu.value, null, 2));
    const menuArray: menuItem[] = [];
    function addMenuItem(item: menuItem) {
      item.component = () => import(`../../views/${item.component}`);
      menuArray.push(item);
    }

    menuList.forEach((item) => {
      if (item.children != null) {
        item.children.forEach(addMenuItem);
        menuArray.push(...item.children);
      } else {
        addMenuItem(item);
      }
    });

    console.log("menuArray.value" + JSON.stringify(menuArray, null, 2));

    menuArray.forEach((item) => {
      router.addRoute({
        path: item.path,
        name: item.name,
        component: item.component,
      });
    });
  }

  return {
    menu,
    setMenu,
    setRouter,
  };
});

export default useMenuStore;

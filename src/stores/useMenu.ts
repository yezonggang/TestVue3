import { defineStore } from "pinia";
import { ref } from "vue";
import type { RouteRecordRedirectOption, RouteRecordRaw } from "vue-router"; // 导入 RouteRecordRaw 类型
import router from "@/router";
const modules = import.meta.glob("@/views/**/*.{vue,tsx}");
const modulesRoutesKeys = Object.keys(modules);

const useMenuStore = defineStore("menu", () => {
  const menu = ref<menuItem[]>([]);
  const isCollapse = ref(false);
  function setCollapsed() {
    console.log("setCollapsed");
    isCollapse.value = !isCollapse.value;
    console.log("isCollapse.value" + isCollapse.value);
  }
  function setMenu(menuList: menuItem[]) {
    menu.value = menuList;
    console.log("menu.value" + JSON.stringify(menu.value, null, 2));
  }
  function setRouter() {
    const menuList = menu.value;
    const routes = transRouter(menuList);
    console.log("routes" + JSON.stringify(routes, null, 2));
    routes.forEach((route) => {
      console.log("route is " + JSON.stringify(route, null, 2));
      console.log("route.component is" + route.component);
      router.addRoute(route); // 逐个添加路由
    });
  }

  function transRouter(menuList: menuItem[]): RouteRecordRaw[] {
    return menuList.map((item) => {
      let component;
      if (item.component) {
        const index = modulesRoutesKeys.findIndex((ev) => ev.includes(item.component));
        console.log("index is " + index + "commponent is " + item.component);
        component = modules[modulesRoutesKeys[index]];
        console.log("component is " + component + "component type is", typeof component);
      } else {
        component = item.component;
      }
      return {
        path: item.path,
        name: item.name,
        component: component,
        meta: {
          title: item?.title,
          label: item?.label,
          icon: item?.icon,
        },
        redirect: item.redirect, // 直接赋值，允许为 undefined
        children: item.children ? transRouter(item.children) : undefined,
      } as RouteRecordRaw;
    });
  }

  return {
    menu,
    isCollapse,
    //setMenu,
    //setRouter,
    setCollapsed,
  };
});

export default useMenuStore;

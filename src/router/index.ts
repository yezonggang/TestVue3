import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
      children: [],
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/index.vue"),
      meta: {
        label: "主页",
      },
      children: [
        {
          path: "/home/main",
          name: "main",
          //redirect: "/home/main",
          component: () => import("@/views/main/index.vue"),
          children: [],
          meta: {
            label: "首页",
            icon: "s-home",
          },
        },
        {
          path: "/home/mall",
          name: "mall",
          //redirect: "/home/main",
          component: () => import("@/views/mall/index.vue"),
          children: [],
          meta: {
            label: "商品管理",
            icon: "video-play",
          },
        },
      ],
    },
  ],
});

export default router;

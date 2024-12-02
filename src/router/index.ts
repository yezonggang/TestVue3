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
        {
          path: "/home/user",
          name: "user",
          //redirect: "/home/main",
          component: () => import("@/views/user/index.vue"),
          children: [],
          meta: {
            label: "用户管理",
            icon: "video-play",
          },
        },
        {
          path: "/home/tabs",
          name: "tabs",
          //redirect: "/home/main",
          children: [
            {
              path: "/home/tabs/address",
              name: "address",
              //redirect: "/home/main",
              component: () => import("@/views/address/index.vue"),
              children: [],
              meta: {
                label: "地址管理",
                icon: "video-play",
              },
            },
            {
              path: "/home/tabs/customer",
              name: "customer",
              //redirect: "/home/main",
              component: () => import("@/views/customer/index.vue"),
              children: [],
              meta: {
                label: "客户管理",
                icon: "video-play",
              },
            },
          ],
        },
      ],
    },
  ],
});

export default router;

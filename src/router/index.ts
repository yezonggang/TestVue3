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
          path: "/home/dashboard",
          name: "dashboard",
          //redirect: "/home/main",
          component: () => import("@/views/dashboard/index.vue"),
          children: [],
          meta: {
            label: "统计面板",
            icon: "s-home",
          },
        },
        {
          path: "/home/tables",
          name: "tables",
          //redirect: "/home/main",
          component: () => import("@/views/tableFrom/index.vue"),
          children: [],
          meta: {
            label: "简单表格",
            icon: "video-play",
          },
        },
        {
          path: "/home/nested",
          name: "nested",
          //redirect: "/home/main",
          component: () => import("@/views/nestedTable/index.vue"),
          children: [],
          meta: {
            label: "嵌套表格",
            icon: "video-play",
          },
        },
        {
          path: "/home/tabs",
          name: "tabs",
          //redirect: "/home/main",
          component: () => import("@/views/tabs/index.vue"),
          children: [],
          meta: {
            label: "标签表格",
            icon: "video-play",
          },
        },
        {
          path: "/home/components",
          name: "components",
          //redirect: "/home/main",
          children: [
            {
              path: "/home/components/editor",
              name: "editor",
              //redirect: "/home/main",
              component: () => import("@/views/components/editor/index.vue"),
              children: [],
              meta: {
                label: "富文本编辑",
                icon: "video-play",
              },
            },
            {
              path: "/home/components/customer",
              name: "customer",
              //redirect: "/home/main",
              component: () => import("@/views/components/customer/index.vue"),
              children: [],
              meta: {
                label: "其他组件",
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

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
          path: "/home/fatherSon",
          name: "father",
          //redirect: "/home/main",
          component: () => import("@/views/fatherSon/index.vue"),
          children: [],
          meta: {
            label: "标签表格",
            icon: "video-play",
          },
        },
        {
          path: "/home/draggable",
          name: "draggable",
          //redirect: "/home/main",
          component: () => import("@/views/others/draggable/index.vue"),
          children: [],
          meta: {
            label: "拖拽组件",
            icon: "video-play",
          },
        },
        {
          path: "/home/flow",
          name: "flow",
          //redirect: "/home/main",
          component: () => import("@/views/others/flow/index.vue"),
          children: [],
          meta: {
            label: "其他组件",
            icon: "video-play",
          },
        },
      ],
    },
  ],
});

export default router;

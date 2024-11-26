import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";
import home from "@/views/home/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
      children: [],
    },
  ],
});

export default router;

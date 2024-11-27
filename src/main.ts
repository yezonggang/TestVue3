// 引入全局css
import "./assets/style.css";
// 引入unocss css
import "@/plugins/unocss";
import "element-plus/theme-chalk/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

if (import.meta.env.VITE_DEV == "true") {
  console.log(import.meta.env.VITE_APP_TITLE);
  import("./mock").then(() => {
    startApp();
  });
} else {
  console.log(import.meta.env.VITE_APP_TITLE);
  startApp();
}

function startApp() {
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(createPinia());
  app.use(router);
  app.use(ElementPlus);
  app.mount("#app");
}

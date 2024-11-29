// 引入全局css
import "./assets/style.css";
// 引入unocss css
import "virtual:uno.css";
import "element-plus/theme-chalk/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "virtual:uno.css";
import * as IconifyIcon from "@iconify/vue";

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
  app.component("icon", IconifyIcon);
  app.mount("#app");
}

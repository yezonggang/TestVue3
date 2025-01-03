// 引入全局css
import "./assets/style.css";
// 引入unocss css
import "virtual:uno.css";
// 导入全局的svg图标
import "virtual:svg-icons-register";
// import "@purge-icons/generated";

// 引入elment-plus和样式
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
// 引入所有element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入自定义的全局样式，里面包含:root定义的全局可以使用的
import "@/styles/index.scss";
// 初始化多语言
import { setupI18n } from "@/plugins/vueI18n";
import { createApp } from "vue";
import { createPinia } from "pinia";

// 把Icon注册成全局组件
import { setupGlobCom } from "@/components";

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
  setupGlobCom(app);
  setupI18n(app);
  app.use(router);
  app.use(ElementPlus);
  app.mount("#app");
}

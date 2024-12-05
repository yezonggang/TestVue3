import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import UnoCSS from "unocss/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve } from "path"; // 导入 resolve 函数
const root = process.cwd();

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 只有这种方式可以让vite.config.ts能够使用env定义的变量,因为env变量是在vite启动的时候读取的
  let env = {} as any;
  const isBuild = command === "build";
  if (!isBuild) {
    env = loadEnv(process.argv[3] === "--mode" ? process.argv[4] : process.argv[3], root);
  } else {
    env = loadEnv(mode, root);
  }

  return {
    plugins: [
      vue(),
      vueDevTools(),
      UnoCSS(),
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, "src/locales/**")],
      }),
      // Icons({
      //   compiler: "vue3",
      //   autoInstall: true,
      // }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: env.VITE_PORT,
    },
    build: {
      outDir: "dist",
    },
  };
});

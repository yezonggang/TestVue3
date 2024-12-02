import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import UnoCSS from "unocss/vite";
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

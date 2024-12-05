import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import UnoCSS from "unocss/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve } from "path"; // 导入 resolve 函数
const root = process.cwd();
import PurgeIcons from "vite-plugin-purge-icons";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// 定义路径解析函数
function pathResolve(dir: string) {
  // 使用 resolve 函数将目录路径解析为绝对路径
  return resolve(root, ".", dir);
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 配置 Vite 时，根据当前命令和模式加载环境变量
  let env = {} as any;
  const isBuild = command === "build";
  if (!isBuild) {
    // 如果不是构建命令，根据传入的模式加载环境变量
    env = loadEnv(process.argv[3] === "--mode" ? process.argv[4] : process.argv[3], root);
  } else {
    // 如果是构建命令，直接根据模式参数加载环境变量
    env = loadEnv(mode, root);
  }

  // 返回 Vite 配置对象
  return {
    plugins: [
      // 使用 Vue 插件
      vue(),
      // 使用 Vue DevTools 插件
      vueDevTools(),
      // 使用 UnoCSS 插件
      UnoCSS(),
      // 使用 Vue I18n 插件
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, "src/locales/**")],
      }),
      // 使用 SVG 图标插件
      createSvgIconsPlugin({
        iconDirs: [pathResolve("src/assets/svgs")],
        symbolId: "icon-[dir]-[name]",
        svgoOptions: true,
      }),
      // 使用 Purge Icons 插件
      PurgeIcons(),
    ],
    resolve: {
      // 配置模块解析别名
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // 配置开发服务器端口
      port: env.VITE_PORT,
    },
    build: {
      // 配置构建输出目录
      outDir: "dist",
    },
  };
});

/// <reference types="vite/client" />
// 扩展env环境变量
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PORT: number;
  readonly VITE_DEV: string;
  readonly VITE_APP_DEFAULT_LOGIN_USERNAME: string;
  readonly VITE_APP_DEFAULT_LOGIN_PASSWORD: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_DROP_DEBUGGER: string;
  readonly VITE_DROP_CONSOLE: string;
  readonly VITE_SOURCEMAP: string;
  readonly VITE_OUT_DIR: string;
}

// 声明全局可以使用
declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

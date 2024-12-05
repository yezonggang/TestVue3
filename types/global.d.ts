// 导出一个空模块，通常用于声明文件
export {};

// 在全局作用域中声明接口和类型
declare global {
  // 定义一个泛型函数接口，接受任意数量的参数并返回一个值
  interface Fn<T = any> {
    (...arg: T[]): T;
  }

  // 定义一个可为null的泛型类型
  type Nullable<T> = T | null;

  // 定义一个HTML元素的引用类型，允许null
  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

  // 定义一个记录类型，键和值可以是任意指定的类型
  type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>;

  // 定义一个组件引用类型，用于获取组件的实例类型
  type ComponentRef<T> = InstanceType<T>;

  // 定义支持的语言类型
  type LocaleType = "zh-CN" | "en";

  // 定义setTimeout和setInterval函数的返回类型
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;

  // 定义支持的Axios请求头类型
  type AxiosHeaders = "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data";

  // 定义支持的Axios请求方法类型
  type AxiosMethod = "get" | "post" | "delete" | "put" | "GET" | "POST" | "DELETE" | "PUT";

  // 定义支持的Axios响应类型
  type AxiosResponseType = "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";

  // 定义Axios请求配置接口
  interface AxiosConfig {
    params?: any;
    data?: any;
    url?: string;
    method?: AxiosMethod;
    headersType?: string;
    responseType?: AxiosResponseType;
  }

  // 定义一个通用的响应接口，包含响应码和数据
  interface IResponse<T = any> {
    code: string;
    data: T extends any ? T : T & any;
  }

  // 定义分页参数接口
  interface PageParam {
    pageSize?: number;
    pageNo?: number;
  }

  // 定义树形结构接口
  interface Tree {
    id: number;
    name: string;
    children?: Tree[] | any[];
  }

  // 定义分页数据的公共返回接口
  interface PageResult<T> {
    list: T; // 数据
    total: number; // 总量
  }

  // 定义了一个联合类型，包含四种布局类型："classic"、"topLeft"、"top" 和 "cutMenu"。
  export type LayoutType = "classic" | "topLeft" | "top" | "cutMenu";

  // 定义了一个接口，包含多个可选的字符串属性，用于配置主题颜色，如主色、菜单边框色、背景色、激活色、文本色等。
  export type ThemeTypes = {
    elColorPrimary?: string;
    leftMenuBorderColor?: string;
    leftMenuBgColor?: string;
    leftMenuBgLightColor?: string;
    leftMenuBgActiveColor?: string;
    leftMenuCollapseBgActiveColor?: string;
    leftMenuTextColor?: string;
    leftMenuTextActiveColor?: string;
    logoTitleTextColor?: string;
    logoBorderColor?: string;
    topHeaderBgColor?: string;
    topHeaderTextColor?: string;
    topHeaderHoverColor?: string;
    topToolBorderColor?: string;
  };

  // 导入自定义的本地化下拉选项类型
  export interface Language {
    el: Recordable;
    name: string;
  }

  export interface LocaleDropdownType {
    lang: LocaleType;
    name?: string;
    elLocale?: Language;
  }

  /**
   * 定义ElementPlus组件的尺寸类型
   * 用于统一设置组件的大小，确保界面的一致性
   */
  export type ElementPlusSize = "default" | "small" | "large";

  /**
   * 定义ElementPlus组件的信息类型
   * 用于组件的样式和图标根据不同的信息类型进行变化，以直观地传达信息的性质
   */
  export type ElementPlusInfoType = "success" | "info" | "warning" | "danger";

  declare module "vite-plugin-purge-icons" {
    const PurgeIcons: any;
    export default PurgeIcons;
  }
}

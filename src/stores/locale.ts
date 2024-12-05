// 导入 Vue 的响应式对象和 Pinia 的 store 定义函数
import { ref, computed } from "vue";
import { defineStore } from "pinia";
// 导入 Element Plus 的中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
// 导入缓存相关的钩子和工具
import { CACHE_KEY, useCache } from "@/hooks/useCache";

// 初始化缓存工具
const { wsCache } = useCache();

// Element Plus 语言包的映射关系
const elLocaleMap = {
  "zh-CN": zhCn,
  en: en,
};

// 定义并导出本地化相关的 store
export const useLocaleStore = defineStore("locales", () => {
  // 当前选择的语言环境
  const currentLocale = ref<LocaleDropdownType>({
    lang: wsCache.get(CACHE_KEY.LANG) || "zh-CN",
    elLocale: elLocaleMap[(wsCache.get(CACHE_KEY.LANG) as keyof typeof elLocaleMap) || "zh-CN"],
  });

  // 所有可选的语言环境映射
  const localeMap = ref<LocaleDropdownType[]>([
    {
      lang: "zh-CN",
      name: "简体中文",
    },
    {
      lang: "en",
      name: "English",
    },
  ]);

  // 计算属性：获取当前选择的语言环境
  const getCurrentLocale = computed(() => currentLocale.value);
  // 计算属性：获取所有可选的语言环境映射
  const getLocaleMap = computed(() => localeMap.value);

  /**
   * 设置当前语言环境
   * @param localeMap 选择的语言环境对象
   */
  function setCurrentLocale(localeMap: LocaleDropdownType) {
    currentLocale.value.lang = localeMap?.lang;
    currentLocale.value.elLocale = elLocaleMap[localeMap?.lang];
    wsCache.set(CACHE_KEY.LANG, localeMap?.lang);
  }

  // 返回所有导出的属性和方法
  return {
    currentLocale,
    localeMap,
    getCurrentLocale,
    getLocaleMap,
    setCurrentLocale,
  };
});

// 默认导出 useLocaleStore
export default useLocaleStore;

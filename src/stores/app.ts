import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { CACHE_KEY, useCache } from "@/hooks/useCache";

const { wsCache } = useCache();

// 定义应用状态接口
interface AppState {
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  collapse: boolean;
  uniqueOpened: boolean;
  hamburger: boolean;
  screenfull: boolean;
  search: boolean;
  size: boolean;
  locale: boolean;
  message: boolean;
  tagsView: boolean;
  tagsViewIcon: boolean;
  logo: boolean;
  fixedHeader: boolean;
  greyMode: boolean;
  pageLoading: boolean;
  layout: LayoutType;
  title: string;
  userInfo: string;
  isDark: boolean;
  currentSize: ElementPlusSize;
  sizeMap: ElementPlusSize[];
  mobile: boolean;
  footer: boolean;
  theme: ThemeTypes;
  fixedMenu: boolean;
}

// 定义并导出应用 store
export const useAppStore = defineStore("app", () => {
  // 定义 state
  const state: AppState = reactive({
    userInfo: "userInfo", // 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突
    sizeMap: ["default", "large", "small"],
    mobile: false, // 是否是移动端
    title: import.meta.env.VITE_APP_TITLE, // 标题
    pageLoading: false, // 路由跳转loading
    breadcrumb: true, // 面包屑
    breadcrumbIcon: true, // 面包屑图标
    collapse: false, // 折叠菜单
    uniqueOpened: true, // 是否只保持一个子菜单的展开
    hamburger: true, // 折叠图标
    screenfull: true, // 全屏图标
    search: true, // 搜索图标
    size: true, // 尺寸图标
    locale: true, // 多语言图标
    message: true, // 消息图标
    tagsView: true, // 标签页
    tagsViewIcon: true, // 是否显示标签图标
    logo: true, // logo
    fixedHeader: true, // 固定toolheader
    footer: true, // 显示页脚
    greyMode: false, // 是否开始灰色模式，用于特殊悼念日
    fixedMenu: wsCache.get("fixedMenu") || false, // 是否固定菜单
    layout: wsCache.get(CACHE_KEY.LAYOUT) || "classic", // layout布局
    isDark: wsCache.get(CACHE_KEY.IS_DARK) || false, // 是否是暗黑模式
    currentSize: wsCache.get("default") || "default", // 组件尺寸
    theme: wsCache.get(CACHE_KEY.THEME) || {
      // 主题色
      elColorPrimary: "#409eff",
      // 左侧菜单边框颜色
      leftMenuBorderColor: "inherit",
      // 左侧菜单背景颜色
      leftMenuBgColor: "#001529",
      // 左侧菜单浅色背景颜色
      leftMenuBgLightColor: "#0f2438",
      // 左侧菜单选中背景颜色
      leftMenuBgActiveColor: "var(--el-color-primary)",
      // 左侧菜单收起选中背景颜色
      leftMenuCollapseBgActiveColor: "var(--el-color-primary)",
      // 左侧菜单字体颜色
      leftMenuTextColor: "#bfcbd9",
      // 左侧菜单选中字体颜色
      leftMenuTextActiveColor: "#fff",
      // logo字体颜色
      logoTitleTextColor: "#fff",
      // logo边框颜色
      logoBorderColor: "inherit",
      // 头部背景颜色
      topHeaderBgColor: "#fff",
      // 头部字体颜色
      topHeaderTextColor: "inherit",
      // 头部悬停颜色
      topHeaderHoverColor: "#f6f6f6",
      // 头部边框颜色
      topToolBorderColor: "#eee",
    },
  });

  // 定义 getters
  const getters = {
    getBreadcrumb: computed(() => state.breadcrumb),
    getBreadcrumbIcon: computed(() => state.breadcrumbIcon),
    getCollapse: computed(() => state.collapse),
    getUniqueOpened: computed(() => state.uniqueOpened),
    getHamburger: computed(() => state.hamburger),
    getScreenfull: computed(() => state.screenfull),
    getSize: computed(() => state.size),
    getLocale: computed(() => state.locale),
    getMessage: computed(() => state.message),
    getTagsView: computed(() => state.tagsView),
    getTagsViewIcon: computed(() => state.tagsViewIcon),
    getLogo: computed(() => state.logo),
    getFixedHeader: computed(() => state.fixedHeader),
    getGreyMode: computed(() => state.greyMode),
    getFixedMenu: computed(() => state.fixedMenu),
    getPageLoading: computed(() => state.pageLoading),
    getLayout: computed(() => state.layout),
    getTitle: computed(() => state.title),
    getUserInfo: computed(() => state.userInfo),
    getIsDark: computed(() => state.isDark),
    getCurrentSize: computed(() => state.currentSize),
    getSizeMap: computed(() => state.sizeMap),
    getMobile: computed(() => state.mobile),
    getTheme: computed(() => state.theme),
    getFooter: computed(() => state.footer),
  };

  // 定义 actions
  const actions = {
    setBreadcrumb(breadcrumb: boolean) {
      state.breadcrumb = breadcrumb;
    },
    setBreadcrumbIcon(breadcrumbIcon: boolean) {
      state.breadcrumbIcon = breadcrumbIcon;
    },
    setCollapse(collapse: boolean) {
      state.collapse = collapse;
    },
    setUniqueOpened(uniqueOpened: boolean) {
      state.uniqueOpened = uniqueOpened;
    },
    setHamburger(hamburger: boolean) {
      state.hamburger = hamburger;
    },
    setScreenfull(screenfull: boolean) {
      state.screenfull = screenfull;
    },
    setSize(size: boolean) {
      state.size = size;
    },
    setLocale(locale: boolean) {
      state.locale = locale;
    },
    setMessage(message: boolean) {
      state.message = message;
    },
    setTagsView(tagsView: boolean) {
      state.tagsView = tagsView;
    },
    setTagsViewIcon(tagsViewIcon: boolean) {
      state.tagsViewIcon = tagsViewIcon;
    },
    setLogo(logo: boolean) {
      state.logo = logo;
    },
    setFixedHeader(fixedHeader: boolean) {
      state.fixedHeader = fixedHeader;
    },
    setGreyMode(greyMode: boolean) {
      state.greyMode = greyMode;
    },
    setFixedMenu(fixedMenu: boolean) {
      wsCache.set("fixedMenu", fixedMenu);
      state.fixedMenu = fixedMenu;
    },
    setPageLoading(pageLoading: boolean) {
      state.pageLoading = pageLoading;
    },
    setLayout(layout: LayoutType) {
      if (state.mobile && layout !== "classic") {
        ElMessage.warning("移动端模式下不支持切换其他布局");
        return;
      }
      state.layout = layout;
      wsCache.set(CACHE_KEY.LAYOUT, state.layout);
    },
    setTitle(title: string) {
      state.title = title;
    },
    setIsDark(isDark: boolean) {
      state.isDark = isDark;
      if (state.isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
      wsCache.set(CACHE_KEY.IS_DARK, state.isDark);
    },
    setCurrentSize(currentSize: ElementPlusSize) {
      state.currentSize = currentSize;
      wsCache.set("currentSize", state.currentSize);
    },
    setMobile(mobile: boolean) {
      state.mobile = mobile;
    },
    setTheme(theme: ThemeTypes) {
      state.theme = Object.assign(state.theme, theme);
      wsCache.set(CACHE_KEY.THEME, state.theme);
    },
    // setCssVarTheme() {
    //   for (const key in state.theme) {
    //     setCssVar(`--${humpToUnderline(key)}`, state.theme[key]);
    //   }
    // },
    setFooter(footer: boolean) {
      state.footer = footer;
    },
  };

  // 返回 state, getters, actions
  return {
    ...toRefs(state),
    ...getters,
    ...actions,
  };
});

// 导出一个不依赖于 store 实例的函数
export default useAppStore;

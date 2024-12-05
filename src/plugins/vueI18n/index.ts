import type { App } from "vue";
import { createI18n } from "vue-i18n";
import useLocaleStore from "@/stores/locale";
import type { I18nOptions } from "vue-i18n";

export let i18n: ReturnType<typeof createI18n>;
export const setHtmlPageLang = (locale: LocaleType) => {
  document.querySelector("html")?.setAttribute("lang", locale);
};

const createI18nOptions = async (): Promise<I18nOptions> => {
  const localeStore = useLocaleStore();
  const locale = localeStore.getCurrentLocale;
  const localeMap = localeStore.getLocaleMap;
  console.log("[ ------------i18n ]", locale);
  const defaultLocal = await import(`../../locales/${locale.lang}.ts`);
  const message = defaultLocal.default ?? {};

  setHtmlPageLang(locale.lang);

  localeStore.setCurrentLocale({
    lang: locale.lang,
    // elLocale: elLocal
  });

  return {
    legacy: false,
    locale: locale.lang,
    fallbackLocale: locale.lang,
    messages: {
      [locale.lang]: message,
    },
    availableLocales: localeMap.map((v) => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
};

export const setupI18n = async (app: App<Element>) => {
  const options = await createI18nOptions();
  i18n = createI18n(options);
  app.use(i18n);
};

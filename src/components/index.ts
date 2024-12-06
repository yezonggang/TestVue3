import type { App } from "vue";
import { Icons } from "./Icon";

export const setupGlobCom = (app: App<Element>): void => {
  app.component("Icons", Icons);
};

interface menuItem {
  path: string;
  title?: string;
  name: string;
  label?: string;
  component?: Component | string;
  icon?: string;
  children?: menuItem[];
  redirect?: string | RouteRecordRedirectOption;
}

type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import("*.vue")>) | (() => Promise<T>);

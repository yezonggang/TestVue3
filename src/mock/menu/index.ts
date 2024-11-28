import Mock from "better-mock";

const menuMockAPi = {
  getMenuList: () => {
    return {
      code: 20000,
      data: {
        menu: [
          {
            path: "/home",
            label: "主页",
            name: "home",
            component: "home/inde",
            children: [
              {
                path: "/home/main",
                name: "main",
                label: "首页",
                icon: "s-home",
                component: "main/index",
              },
              {
                path: "/home/mall",
                name: "mall",
                label: "商品管理",
                icon: "video-play",
                component: "mall/index",
              },
              {
                label: "其他",
                name: "other",
                icon: "location",
                children: [
                  {
                    path: "/page1",
                    name: "page1",
                    label: "页面1",
                    icon: "setting",
                    component: "other/PageOne",
                  },
                  {
                    path: "/page2",
                    name: "page2",
                    label: "页面2",
                    icon: "setting",
                    component: "other/PageTwo",
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};

export default menuMockAPi;

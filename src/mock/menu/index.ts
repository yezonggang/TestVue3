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
            component: "/home/index.vue",
            children: [
              {
                path: "/home/main",
                name: "main",
                label: "首页",
                icon: "s-home",
                component: "/main/index.vue",
              },
              {
                path: "/home/mall",
                name: "mall",
                label: "商品管理",
                icon: "video-play",
                component: "/mall/index.vue",
              },
              {
                path: "/home/user",
                name: "user",
                label: "用户管理",
                icon: "user",
                component: "/user/index.vue",
              },
              {
                label: "其他",
                icon: "location",
                children: [
                  {
                    path: "/page1",
                    name: "page1",
                    label: "页面1",
                    icon: "setting",
                    component: "Other/PageOne.vue",
                  },
                  {
                    path: "/page2",
                    name: "page2",
                    label: "页面2",
                    icon: "setting",
                    component: "Other/PageTwo.vue",
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

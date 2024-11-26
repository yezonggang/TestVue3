import Mock from "better-mock";

const menuMockAPi = {
  getMenuList: () => {
    return {
      code: 20000,
      data: {
        menu: [
          {
            path: "/home/main",
            name: "main",
            label: "首页",
            icon: "s-home",
            url: "home/index",
          },
          {
            path: "/home/mall",
            name: "mall",
            label: "商品管理",
            icon: "video-play",
            url: "mall/index",
          },
          {
            path: "/home/user",
            name: "user",
            label: "用户管理",
            icon: "user",
            url: "User/index",
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
                url: "Other/PageOne.vue",
              },
              {
                path: "/page2",
                name: "page2",
                label: "页面2",
                icon: "setting",
                url: "Other/PageTwo.vue",
              },
            ],
          },
        ],
        token: Mock.Random.guid(),
        message: "获取成功",
      },
    };
  },
};

export default menuMockAPi;

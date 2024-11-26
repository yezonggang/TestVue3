import Mock from "better-mock";

export default {
  getLoginInfo: () => ({
    code: 200,
    message: "登录成功",
    data: {
      token: Mock.Random.string(16),
    },
  }),
};

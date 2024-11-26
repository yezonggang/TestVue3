import Mock from "better-mock";

const loginMockAPi = {
  getLogInfo: () => {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: Mock.Random.string(16, 32),
      },
    };
  },
};

export default loginMockAPi;

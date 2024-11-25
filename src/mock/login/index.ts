import { Random } from "mockjs";

export default {
  getLoginInfo: () => ({
    code: 200,
    message: "登录成功",
    data: {
      token: Random.string(16),
    },
  }),
};

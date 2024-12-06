import loginMockAPi from "./login";
import Mock from "better-mock";
import { type MockCbOptions } from "better-mock";
import menuMockAPi from "./menu";
import mallMock from "./mall";
import { getMallList } from "@/api/mall";

// 下面这两种方式都可以，第一种是匹配正则表达式匹配路径，第二种是匹配字符串因为request.ts对api请求进行了封装所以这里要写完整路径
Mock.mock(/\/user\/login/, "post", loginMockAPi.getLogInfo());
//Mock.mock("http://127.0.0.1:8888/dev-api/user/login", "post", loginMockAPi.getLogInfo());
// Mock.mock(/\/menu\/list/, "post", menuMockAPi.getMenuList());

Mock.mock(/\/menu\/list/, "post", function (options: MockCbOptions) {
  // 如果request把params'参数，那么参数将作为body传递，那么可以直接使用options.body来获取参数，否则使用options.url来获取参数
  const { body, url } = options;
  console.log("Request Body:", body);

  // 如果request的url中使用params来传递参数，那么参数将在url中?==格式传递，需要解析出来，那么就使用MockCbOptions拿到url逐个解析
  //   const urlObj = new URL(url, "http://example.com");
  //   const queryParams = new URLSearchParams(urlObj.search);
  //   const params: { [key: string]: string } = {};
  //   queryParams.forEach((value, key) => {
  //     params[key] = value;
  //   });
  //   console.log("Query Parameters:", params);
  return menuMockAPi.getMenuList();
});

Mock.mock(/\/mall\/list/, "post", mallMock.getMallList());

export default Mock;

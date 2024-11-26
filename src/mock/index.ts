import getLoginInfo from "./login";
import Mock from "better-mock";

// 下面这两种方式都可以，第一种是匹配正则表达式匹配路径，第二种是匹配字符串因为request.ts对api请求进行了封装所以这里要写完整路径
// Mock.mock(/\/dev-api\/user\/login/, "post", getLoginInfo);
Mock.mock("http://127.0.0.1:8888/dev-api/user/login", "post", getLoginInfo);

export default Mock;

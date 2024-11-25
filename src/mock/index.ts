import getLoginInfo from "./login";
import { mock } from "mockjs";

mock("/api/user/login", "get", getLoginInfo);

export default mock;

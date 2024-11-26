import request from "@/api/request"; // 假设你的别名配置为@代表src目录

export function getMenuList(params: any) {
  return request({
    url: "/menu/list",
    method: "post",
    params,
  });
}

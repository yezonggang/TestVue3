import request from "@/api/request"; // 假设你的别名配置为@代表src目录

export function getMenuList(params: any) {
  return request({
    url: "/menu/list",
    method: "post",
    // data是提交数据,可以在mock中直接通过body获取
    data: params,
    // params:params是参数，,当使用 params: params 时，这些参数会被附加到 URL 的查询字符串中。
    // 假设 params 是一个对象 { id: 1, name: 'test' } 那么相当于是/menu/list?id=1&name=test
  });
}

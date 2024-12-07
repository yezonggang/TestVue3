import request from "@/api/request";

export interface mallList {
  id?: number;
  price?: number;
  desc?: string;
  date?: string;
  name?: string;
  address?: string;
  stock?: string;
  zip?: string;
  tag?: string;
}
export function getMallList(params: any) {
  return request({
    url: "/mall/list",
    method: "post",
    params: params,
  });
}

export function getMallListCountAll() {
  return request({
    url: "/mall/count/all",
    method: "get",
  });
}

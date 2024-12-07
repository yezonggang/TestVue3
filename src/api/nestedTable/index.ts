import request from "@/api/request";

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface Tag {
  category: string;
  type: string;
  description: string;
}

export interface nestedItem {
  id?: number;
  price?: number;
  desc?: string;
  date?: string;
  name?: string;
  address?: Address;
  stock?: string;
  zip?: string;
  tag?: Tag;
}
export function getNestedList(params: any) {
  return request({
    url: "/nested/list",
    method: "post",
    params: params,
  });
}

export function getNestedListCountAll() {
  return request({
    url: "/nested/count/all",
    method: "get",
  });
}

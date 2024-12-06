import { getMallList } from "@/api/mall";

const mallLists = [
  { id: 1, price: 19.99, desc: "Product Description 1", date: "2023-10-01", name: "Product 1", address: "Address 1", stock: "10", zip: "100001", tag: "Tag 1" },
  { id: 2, price: 29.99, desc: "Product Description 2", date: "2023-10-02", name: "Product 2", address: "Address 2", stock: "20", zip: "100002", tag: "Tag 2" },
  { id: 3, price: 39.99, desc: "Product Description 3", date: "2023-10-03", name: "Product 3", address: "Address 3", stock: "30", zip: "100003", tag: "Tag 3" },
  { id: 4, price: 49.99, desc: "Product Description 4", date: "2023-10-04", name: "Product 4", address: "Address 4", stock: "40", zip: "100004", tag: "Tag 4" },
  { id: 5, price: 59.99, desc: "Product Description 5", date: "2023-10-05", name: "Product 5", address: "Address 5", stock: "50", zip: "100005", tag: "Tag 5" },
  { id: 6, price: 69.99, desc: "Product Description 6", date: "2023-10-06", name: "Product 6", address: "Address 6", stock: "60", zip: "100006", tag: "Tag 6" },
  { id: 7, price: 79.99, desc: "Product Description 7", date: "2023-10-07", name: "Product 7", address: "Address 7", stock: "70", zip: "100007", tag: "Tag 7" },
  { id: 8, price: 89.99, desc: "Product Description 8", date: "2023-10-08", name: "Product 8", address: "Address 8", stock: "80", zip: "100008", tag: "Tag 8" },
  { id: 9, price: 99.99, desc: "Product Description 9", date: "2023-10-09", name: "Product 9", address: "Address 9", stock: "90", zip: "100009", tag: "Tag 9" },
  { id: 10, price: 109.99, desc: "Product Description 10", date: "2023-10-10", name: "Product 10", address: "Address 10", stock: "100", zip: "100010", tag: "Tag 10" },
  { id: 11, price: 119.99, desc: "Product Description 11", date: "2023-10-11", name: "Product 11", address: "Address 11", stock: "110", zip: "100011", tag: "Tag 11" },
  { id: 12, price: 129.99, desc: "Product Description 12", date: "2023-10-12", name: "Product 12", address: "Address 12", stock: "120", zip: "100012", tag: "Tag 12" },
  { id: 13, price: 139.99, desc: "Product Description 13", date: "2023-10-13", name: "Product 13", address: "Address 13", stock: "130", zip: "100013", tag: "Tag 13" },
  { id: 14, price: 149.99, desc: "Product Description 14", date: "2023-10-14", name: "Product 14", address: "Address 14", stock: "140", zip: "100014", tag: "Tag 14" },
  { id: 15, price: 159.99, desc: "Product Description 15", date: "2023-10-15", name: "Product 15", address: "Address 15", stock: "150", zip: "100015", tag: "Tag 15" },
  { id: 16, price: 169.99, desc: "Product Description 16", date: "2023-10-16", name: "Product 16", address: "Address 16", stock: "160", zip: "100016", tag: "Tag 16" },
  { id: 17, price: 179.99, desc: "Product Description 17", date: "2023-10-17", name: "Product 17", address: "Address 17", stock: "170", zip: "100017", tag: "Tag 17" },
  { id: 18, price: 189.99, desc: "Product Description 18", date: "2023-10-18", name: "Product 18", address: "Address 18", stock: "180", zip: "100018", tag: "Tag 18" },
  { id: 19, price: 199.99, desc: "Product Description 19", date: "2023-10-19", name: "Product 19", address: "Address 19", stock: "190", zip: "100019", tag: "Tag 19" },
  { id: 20, price: 209.99, desc: "Product Description 20", date: "2023-10-20", name: "Product 20", address: "Address 20", stock: "200", zip: "100020", tag: "Tag 20" },
  { id: 21, price: 219.99, desc: "Product Description 21", date: "2023-10-21", name: "Product 21", address: "Address 21", stock: "210", zip: "100021", tag: "Tag 21" },
  { id: 22, price: 229.99, desc: "Product Description 22", date: "2023-10-22", name: "Product 22", address: "Address 22", stock: "220", zip: "100022", tag: "Tag 22" },
  { id: 23, price: 239.99, desc: "Product Description 23", date: "2023-10-23", name: "Product 23", address: "Address 23", stock: "230", zip: "100023", tag: "Tag 23" },
  { id: 24, price: 249.99, desc: "Product Description 24", date: "2023-10-24", name: "Product 24", address: "Address 24", stock: "240", zip: "100024", tag: "Tag 24" },
  { id: 25, price: 259.99, desc: "Product Description 25", date: "2023-10-25", name: "Product 25", address: "Address 25", stock: "250", zip: "100025", tag: "Tag 25" },
  { id: 26, price: 269.99, desc: "Product Description 26", date: "2023-10-26", name: "Product 26", address: "Address 26", stock: "260", zip: "100026", tag: "Tag 26" },
  { id: 27, price: 279.99, desc: "Product Description 27", date: "2023-10-27", name: "Product 27", address: "Address 27", stock: "270", zip: "100027", tag: "Tag 27" },
  { id: 28, price: 289.99, desc: "Product Description 28", date: "2023-10-28", name: "Product 28", address: "Address 28", stock: "280", zip: "100028", tag: "Tag 28" },
  { id: 29, price: 299.99, desc: "Product Description 29", date: "2023-10-29", name: "Product 29", address: "Address 29", stock: "290", zip: "100029", tag: "Tag 29" },
  { id: 30, price: 309.99, desc: "Product Description 30", date: "2023-10-30", name: "Product 30", address: "Address 30", stock: "300", zip: "100030", tag: "Tag 30" },
  { id: 31, price: 319.99, desc: "Product Description 31", date: "2023-10-31", name: "Product 31", address: "Address 31", stock: "310", zip: "100031", tag: "Tag 31" },
  { id: 32, price: 329.99, desc: "Product Description 32", date: "2023-11-01", name: "Product 32", address: "Address 32", stock: "320", zip: "100032", tag: "Tag 32" },
  { id: 33, price: 339.99, desc: "Product Description 33", date: "2023-11-02", name: "Product 33", address: "Address 33", stock: "330", zip: "100033", tag: "Tag 33" },
  { id: 34, price: 349.99, desc: "Product Description 34", date: "2023-11-03", name: "Product 34", address: "Address 34", stock: "340", zip: "100034", tag: "Tag 34" },
  { id: 35, price: 359.99, desc: "Product Description 35", date: "2023-11-04", name: "Product 35", address: "Address 35", stock: "350", zip: "100035", tag: "Tag 35" },
  { id: 36, price: 369.99, desc: "Product Description 36", date: "2023-11-05", name: "Product 36", address: "Address 36", stock: "360", zip: "100036", tag: "Tag 36" },
  { id: 37, price: 379.99, desc: "Product Description 37", date: "2023-11-06", name: "Product 37", address: "Address 37", stock: "370", zip: "100037", tag: "Tag 37" },
  { id: 38, price: 389.99, desc: "Product Description 38", date: "2023-11-07", name: "Product 38", address: "Address 38", stock: "380", zip: "100038", tag: "Tag 38" },
  { id: 39, price: 399.99, desc: "Product Description 39", date: "2023-11-08", name: "Product 39", address: "Address 39", stock: "390", zip: "100039", tag: "Tag 39" },
  { id: 40, price: 409.99, desc: "Product Description 40", date: "2023-11-09", name: "Product 40", address: "Address 40", stock: "400", zip: "100040", tag: "Tag 40" },
  { id: 41, price: 419.99, desc: "Product Description 41", date: "2023-11-10", name: "Product 41", address: "Address 41", stock: "410", zip: "100041", tag: "Tag 41" },
  { id: 42, price: 429.99, desc: "Product Description 42", date: "2023-11-11", name: "Product 42", address: "Address 42", stock: "420", zip: "100042", tag: "Tag 42" },
  { id: 43, price: 439.99, desc: "Product Description 43", date: "2023-11-12", name: "Product 43", address: "Address 43", stock: "430", zip: "100043", tag: "Tag 43" },
  { id: 44, price: 449.99, desc: "Product Description 44", date: "2023-11-13", name: "Product 44", address: "Address 44", stock: "440", zip: "100044", tag: "Tag 44" },
  { id: 45, price: 459.99, desc: "Product Description 45", date: "2023-11-14", name: "Product 45", address: "Address 45", stock: "450", zip: "100045", tag: "Tag 45" },
  { id: 46, price: 469.99, desc: "Product Description 46", date: "2023-11-15", name: "Product 46", address: "Address 46", stock: "460", zip: "100046", tag: "Tag 46" },
  { id: 47, price: 479.99, desc: "Product Description 47", date: "2023-11-16", name: "Product 47", address: "Address 47", stock: "470", zip: "100047", tag: "Tag 47" },
  { id: 48, price: 489.99, desc: "Product Description 48", date: "2023-11-17", name: "Product 48", address: "Address 48", stock: "480", zip: "100048", tag: "Tag 48" },
];

const mallMock = {
  getMallList: (params: any) => {
    console.log("params", params);
    const currentPage = parseInt(params.currentPage);
    const pageSize = parseInt(params.pageSize);
    const name = params.name;
    const desc = params.desc;
    const date = params.date;
    // 假设 mallLists 是一个包含所有商品的数组
    let filteredMalls = mallLists;

    // 根据关键词过滤
    // if (name) {
    //   filteredMalls = filteredMalls.filter((mall) => mall.name.includes(name));
    // }
    // if (desc) {
    //   filteredMalls = filteredMalls.filter((mall) => mall.desc.includes(desc));
    // }
    // if (date) {
    //   filteredMalls = filteredMalls.filter((mall) => mall.date === date);
    // }

    // 分页
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    console.log("start", start, "end", end);
    const paginatedMalls = filteredMalls.slice(start, end);
    return {
      code: 20000,
      data: {
        mall: paginatedMalls,
        total: mallLists.length,
      },
    };
  },
};

export default mallMock;

import { getNestedList } from "@/api/nestedTable";

const mallLists = [
  { id: 1, price: 19.99, desc: "Product Description 1", date: "2023-10-01", name: "Product 1", address: { street: "Street 1", city: "City 1", country: "Country 1" }, stock: "10", zip: "100001", tag: { category: "Category 1", type: "Type 1", description: "Description 1" } },
  { id: 2, price: 29.99, desc: "Product Description 2", date: "2023-10-02", name: "Product 2", address: { street: "Street 2", city: "City 2", country: "Country 2" }, stock: "20", zip: "100002", tag: { category: "Category 2", type: "Type 2", description: "Description 2" } },
  { id: 3, price: 39.99, desc: "Product Description 3", date: "2023-10-03", name: "Product 3", address: { street: "Street 3", city: "City 3", country: "Country 3" }, stock: "30", zip: "100003", tag: { category: "Category 3", type: "Type 3", description: "Description 3" } },
  { id: 4, price: 49.99, desc: "Product Description 4", date: "2023-10-04", name: "Product 4", address: { street: "Street 4", city: "City 4", country: "Country 4" }, stock: "40", zip: "100004", tag: { category: "Category 4", type: "Type 4", description: "Description 4" } },
  { id: 5, price: 59.99, desc: "Product Description 5", date: "2023-10-05", name: "Product 5", address: { street: "Street 5", city: "City 5", country: "Country 5" }, stock: "50", zip: "100005", tag: { category: "Category 5", type: "Type 5", description: "Description 5" } },
  { id: 6, price: 69.99, desc: "Product Description 6", date: "2023-10-06", name: "Product 6", address: { street: "Street 6", city: "City 6", country: "Country 6" }, stock: "60", zip: "100006", tag: { category: "Category 6", type: "Type 6", description: "Description 6" } },
  { id: 7, price: 79.99, desc: "Product Description 7", date: "2023-10-07", name: "Product 7", address: { street: "Street 7", city: "City 7", country: "Country 7" }, stock: "70", zip: "100007", tag: { category: "Category 7", type: "Type 7", description: "Description 7" } },
  { id: 8, price: 89.99, desc: "Product Description 8", date: "2023-10-08", name: "Product 8", address: { street: "Street 8", city: "City 8", country: "Country 8" }, stock: "80", zip: "100008", tag: { category: "Category 8", type: "Type 8", description: "Description 8" } },
  { id: 9, price: 99.99, desc: "Product Description 9", date: "2023-10-09", name: "Product 9", address: { street: "Street 9", city: "City 9", country: "Country 9" }, stock: "90", zip: "100009", tag: { category: "Category 9", type: "Type 9", description: "Description 9" } },
  { id: 10, price: 109.99, desc: "Product Description 10", date: "2023-10-10", name: "Product 10", address: { street: "Street 10", city: "City 10", country: "Country 10" }, stock: "100", zip: "100010", tag: { category: "Category 10", type: "Type 10", description: "Description 10" } },
  { id: 11, price: 119.99, desc: "Product Description 11", date: "2023-10-11", name: "Product 11", address: { street: "Street 11", city: "City 11", country: "Country 11" }, stock: "110", zip: "100011", tag: { category: "Category 11", type: "Type 11", description: "Description 11" } },
  { id: 12, price: 129.99, desc: "Product Description 12", date: "2023-10-12", name: "Product 12", address: { street: "Street 12", city: "City 12", country: "Country 12" }, stock: "120", zip: "100012", tag: { category: "Category 12", type: "Type 12", description: "Description 12" } },
  { id: 13, price: 139.99, desc: "Product Description 13", date: "2023-10-13", name: "Product 13", address: { street: "Street 13", city: "City 13", country: "Country 13" }, stock: "130", zip: "100013", tag: { category: "Category 13", type: "Type 13", description: "Description 13" } },
  { id: 14, price: 149.99, desc: "Product Description 14", date: "2023-10-14", name: "Product 14", address: { street: "Street 14", city: "City 14", country: "Country 14" }, stock: "140", zip: "100014", tag: { category: "Category 14", type: "Type 14", description: "Description 14" } },
  { id: 15, price: 159.99, desc: "Product Description 15", date: "2023-10-15", name: "Product 15", address: { street: "Street 15", city: "City 15", country: "Country 15" }, stock: "150", zip: "100015", tag: { category: "Category 15", type: "Type 15", description: "Description 15" } },
  { id: 16, price: 169.99, desc: "Product Description 16", date: "2023-10-16", name: "Product 16", address: { street: "Street 16", city: "City 16", country: "Country 16" }, stock: "160", zip: "100016", tag: { category: "Category 16", type: "Type 16", description: "Description 16" } },
  { id: 17, price: 179.99, desc: "Product Description 17", date: "2023-10-17", name: "Product 17", address: { street: "Street 17", city: "City 17", country: "Country 17" }, stock: "170", zip: "100017", tag: { category: "Category 17", type: "Type 17", description: "Description 17" } },
  { id: 18, price: 189.99, desc: "Product Description 18", date: "2023-10-18", name: "Product 18", address: { street: "Street 18", city: "City 18", country: "Country 18" }, stock: "180", zip: "100018", tag: { category: "Category 18", type: "Type 18", description: "Description 18" } },
  { id: 19, price: 199.99, desc: "Product Description 19", date: "2023-10-19", name: "Product 19", address: { street: "Street 19", city: "City 19", country: "Country 19" }, stock: "190", zip: "100019", tag: { category: "Category 19", type: "Type 19", description: "Description 19" } },
  { id: 20, price: 209.99, desc: "Product Description 20", date: "2023-10-20", name: "Product 20", address: { street: "Street 20", city: "City 20", country: "Country 20" }, stock: "200", zip: "100020", tag: { category: "Category 20", type: "Type 20", description: "Description 20" } },
  { id: 21, price: 219.99, desc: "Product Description 21", date: "2023-10-21", name: "Product 21", address: { street: "Street 21", city: "City 21", country: "Country 21" }, stock: "210", zip: "100021", tag: { category: "Category 21", type: "Type 21", description: "Description 21" } },
  { id: 22, price: 229.99, desc: "Product Description 22", date: "2023-10-22", name: "Product 22", address: { street: "Street 22", city: "City 22", country: "Country 22" }, stock: "220", zip: "100022", tag: { category: "Category 22", type: "Type 22", description: "Description 22" } },
  { id: 23, price: 239.99, desc: "Product Description 23", date: "2023-10-23", name: "Product 23", address: { street: "Street 23", city: "City 23", country: "Country 23" }, stock: "230", zip: "100023", tag: { category: "Category 23", type: "Type 23", description: "Description 23" } },
  { id: 24, price: 249.99, desc: "Product Description 24", date: "2023-10-24", name: "Product 24", address: { street: "Street 24", city: "City 24", country: "Country 24" }, stock: "240", zip: "100024", tag: { category: "Category 24", type: "Type 24", description: "Description 24" } },
  { id: 25, price: 259.99, desc: "Product Description 25", date: "2023-10-25", name: "Product 25", address: { street: "Street 25", city: "City 25", country: "Country 25" }, stock: "250", zip: "100025", tag: { category: "Category 25", type: "Type 25", description: "Description 25" } },
  { id: 26, price: 269.99, desc: "Product Description 26", date: "2023-10-26", name: "Product 26", address: { street: "Street 26", city: "City 26", country: "Country 26" }, stock: "260", zip: "100026", tag: { category: "Category 26", type: "Type 26", description: "Description 26" } },
  { id: 27, price: 279.99, desc: "Product Description 27", date: "2023-10-27", name: "Product 27", address: { street: "Street 27", city: "City 27", country: "Country 27" }, stock: "270", zip: "100027", tag: { category: "Category 27", type: "Type 27", description: "Description 27" } },
  { id: 28, price: 289.99, desc: "Product Description 28", date: "2023-10-28", name: "Product 28", address: { street: "Street 28", city: "City 28", country: "Country 28" }, stock: "280", zip: "100028", tag: { category: "Category 28", type: "Type 28", description: "Description 28" } },
  { id: 29, price: 299.99, desc: "Product Description 29", date: "2023-10-29", name: "Product 29", address: { street: "Street 29", city: "City 29", country: "Country 29" }, stock: "290", zip: "100029", tag: { category: "Category 29", type: "Type 29", description: "Description 29" } },
  { id: 30, price: 309.99, desc: "Product Description 30", date: "2023-10-30", name: "Product 30", address: { street: "Street 30", city: "City 30", country: "Country 30" }, stock: "300", zip: "100030", tag: { category: "Category 30", type: "Type 30", description: "Description 30" } },
];

const nestedListMock = {
  getNestedList: (params: any) => {
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

export default nestedListMock;

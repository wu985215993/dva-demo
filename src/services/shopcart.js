import request from "../utils/request";
//获取购物车数据
export const getShopcartDataApi = () => request("/shopcart/getShopcartData");
//修改数量
export const changeNumApi = (params) =>
  request("/shopcart/changeNum", {
    method: "POST",
    body: params,
  });
//删除上商品
export const delApi = (params) =>
  request("/shopcart/delete?_id=" + params, {
    method: "delete",
  });

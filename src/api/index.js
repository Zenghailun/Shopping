//对API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'
//三级联动接口
//api/product/getBaseCategoryList get 无参数
//axios发请求返回Promise对象
export const reqCategoryList = ()=>{
    return requests({url:'/product/getBaseCategoryList', method:'get'});
}
//获取banner
export const reqGetBannerList = ()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor');

//获取搜索模块数据，需要带参数
//给服务器传递的默认参数至少要是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list", method:"post",data:params})

// 获取产品详情信息的接口
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`, method:"get"})

//购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

//获取购物车列表数据接口
export const reqCartList = ()=>requests({url:'/cart/cartList', method:"get"})
//删除购物车产品
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//修改商品的选中状态
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
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
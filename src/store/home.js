//home模块的小仓库

import { reqCategoryList, reqGetBannerList, reqFloorList} from "../api"

const state = {
    //state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组[根据接口的返回值初始化]
    categoryList:[],
    bannerList:[],
    //服务器返回的数据是数组所以这里也定为数组
    floorList:[]
};

const mutations = {
    CATEGORYLIST(state, categoryList)
    {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList)
    {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList)
    {
        state.floorList = floorList;
    }
}

const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result)
        if(result.code == 200)
        {
            commit("CATEGORYLIST",result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}) {
        let result =  await reqGetBannerList();
        if(result.code == 200)
            commit('GETBANNERLIST',result.data)
    },
    async getFloorList({commit})
    {
        let result = await reqFloorList();
        if(result.code == 200)
        {
            commit("GETFLOORLIST", result.data);
        }
    }
}//处理action，可以书写自己的业务逻辑，也可以处理异步
const getters = {}//计算属性，用于简化仓库数据

export default{
    state,
    mutations,
    actions,
    getters
}
//home模块的小仓库

import { reqCategoryList } from "../../api"

const state = {
    //state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组[根据接口的返回值初始化]
    categoryList:[],
};

const mutations = {
    CATEGORYLIST(state, categoryList)
    {
        state.categoryList = categoryList;
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
    }
}//处理action，可以书写自己的业务逻辑，也可以处理异步
const getters = {}//计算属性，用于简化仓库数据

export default{
    state,
    mutations,
    actions,
    getters
}
import { reqGetSearchInfo } from "../api"

const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state, searchList)
    {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({commit}, params = {}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200)
        {
            commit("GETSEARCHLIST",result.data)
        }
    },
}//处理action，可以书写自己的业务逻辑，也可以处理异步

const getters = {
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state)
    {
        return state.searchList.attrsList||[];
    }
}//计算属性，用于简化仓库数据

export default{
    state,
    mutations,
    actions,
    getters
}
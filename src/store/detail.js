import { reqGoodsInfo } from "../api"
const state={
  goodInfo:{}
}
const mutations={
  GETGOODINFO(state,goodInfo)
  {
    state.getGoodInfo = goodInfo;
  }
}
const actions={
  async getGoodInfo({commit}, skuId)
  {
    let result=await reqGoodsInfo(skuId)
    if(result.code==200)
    {
      commit('GETGOODINFO',result.data)
    }
  }
}

//简化数据
const getters={
  categoryView(state)
  {
    return state.goodInfo.categoryView;
  },
}

export default{
  state,
  mutations,
  actions,
  getters
}